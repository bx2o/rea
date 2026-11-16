"""Unit tests for the MCP server evaluation harness."""

import asyncio
import json
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path
from unittest.mock import AsyncMock, MagicMock, patch

import pytest

from evaluation import (
    EVALUATION_PROMPT,
    agent_loop,
    evaluate_single_task,
    extract_xml_content,
    parse_evaluation_file,
    run_evaluation,
)


class TestParseEvaluationFile:
    """Test XML evaluation file parsing."""

    def test_parse_valid_file(self):
        """Test parsing a valid XML evaluation file."""
        xml_content = """<?xml version="1.0"?>
        <evaluation>
            <qa_pair>
                <question>What is 2+2?</question>
                <answer>4</answer>
            </qa_pair>
            <qa_pair>
                <question>What is the capital of France?</question>
                <answer>Paris</answer>
            </qa_pair>
        </evaluation>"""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.xml', delete=False) as f:
            f.write(xml_content)
            temp_path = Path(f.name)

        try:
            result = parse_evaluation_file(temp_path)
            expected = [
                {"question": "What is 2+2?", "answer": "4"},
                {"question": "What is the capital of France?", "answer": "Paris"}
            ]
            assert result == expected
        finally:
            temp_path.unlink()

    def test_parse_empty_questions_answers(self):
        """Test parsing with empty question/answer elements."""
        xml_content = """<?xml version="1.0"?>
        <evaluation>
            <qa_pair>
                <question></question>
                <answer></answer>
            </qa_pair>
        </evaluation>"""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.xml', delete=False) as f:
            f.write(xml_content)
            temp_path = Path(f.name)

        try:
            result = parse_evaluation_file(temp_path)
            expected = [{"question": "", "answer": ""}]
            assert result == expected
        finally:
            temp_path.unlink()

    def test_parse_file_not_found(self):
        """Test parsing a non-existent file."""
        result = parse_evaluation_file(Path("nonexistent.xml"))
        assert result == []

    def test_parse_invalid_xml(self):
        """Test parsing invalid XML."""
        with tempfile.NamedTemporaryFile(mode='w', suffix='.xml', delete=False) as f:
            f.write("invalid xml content")
            temp_path = Path(f.name)

        try:
            result = parse_evaluation_file(temp_path)
            assert result == []
        finally:
            temp_path.unlink()


class TestExtractXmlContent:
    """Test XML content extraction."""

    def test_extract_single_tag(self):
        """Test extracting content from a single XML tag."""
        text = "<response>42</response>"
        result = extract_xml_content(text, "response")
        assert result == "42"

    def test_extract_nested_tags(self):
        """Test extracting from nested tags."""
        text = "<summary>Step 1</summary><response>42</response><feedback>Good</feedback>"
        result = extract_xml_content(text, "response")
        assert result == "42"

    def test_extract_last_match(self):
        """Test that the last match is returned."""
        text = "<response>41</response><response>42</response>"
        result = extract_xml_content(text, "response")
        assert result == "42"

    def test_extract_multiline(self):
        """Test extracting multiline content."""
        text = """<summary>
        Step 1: Added numbers
        Step 2: Got result
        </summary>"""
        result = extract_xml_content(text, "summary")
        expected = "\n        Step 1: Added numbers\n        Step 2: Got result\n        "
        assert result == expected

    def test_extract_no_match(self):
        """Test extracting when tag not found."""
        text = "<other>content</other>"
        result = extract_xml_content(text, "response")
        assert result is None


class TestAgentLoop:
    """Test the agent loop functionality."""

    @pytest.mark.asyncio
    async def test_agent_loop_single_tool_call(self):
        """Test agent loop with a single tool call."""
        # Mock client response with tool use
        mock_response = MagicMock()
        mock_response.stop_reason = "tool_use"
        mock_tool_use = MagicMock()
        mock_tool_use.type = "tool_use"
        mock_tool_use.name = "test_tool"
        mock_tool_use.input = {"param": "value"}
        mock_tool_use.id = "tool_123"
        mock_response.content = [mock_tool_use]

        # Mock final response
        mock_final_response = MagicMock()
        mock_final_response.stop_reason = "end_turn"
        mock_final_text = MagicMock()
        mock_final_text.text = "<response>success</response>"
        mock_final_response.content = [mock_final_text]

        # Mock client
        mock_client = MagicMock()
        mock_client.messages.create = AsyncMock()
        mock_client.messages.create.side_effect = [mock_response, mock_final_response]

        # Mock connection
        mock_connection = AsyncMock()
        mock_connection.call_tool.return_value = [{"type": "text", "text": "tool result"}]

        # Mock tools
        tools = [{"name": "test_tool", "description": "A test tool"}]

        result, tool_metrics = await agent_loop(
            mock_client, "test-model", "Test question", tools, mock_connection
        )

        assert result == "<response>success</response>"
        assert "test_tool" in tool_metrics
        assert tool_metrics["test_tool"]["count"] == 1
        mock_connection.call_tool.assert_called_once_with("test_tool", {"param": "value"})

    @pytest.mark.asyncio
    async def test_agent_loop_multiple_tool_calls(self):
        """Test agent loop with multiple tool calls in one response."""
        # Mock client response with multiple tool uses
        mock_response = MagicMock()
        mock_response.stop_reason = "tool_use"

        mock_tool_use1 = MagicMock()
        mock_tool_use1.type = "tool_use"
        mock_tool_use1.name = "tool1"
        mock_tool_use1.input = {"param": "value1"}
        mock_tool_use1.id = "tool_1"

        mock_tool_use2 = MagicMock()
        mock_tool_use2.type = "tool_use"
        mock_tool_use2.name = "tool2"
        mock_tool_use2.input = {"param": "value2"}
        mock_tool_use2.id = "tool_2"

        mock_response.content = [mock_tool_use1, mock_tool_use2]

        # Mock final response
        mock_final_response = MagicMock()
        mock_final_response.stop_reason = "end_turn"
        mock_final_text = MagicMock()
        mock_final_text.text = "<response>done</response>"
        mock_final_response.content = [mock_final_text]

        # Mock client
        mock_client = MagicMock()
        mock_client.messages.create = AsyncMock()
        mock_client.messages.create.side_effect = [mock_response, mock_final_response]

        # Mock connection
        mock_connection = AsyncMock()
        mock_connection.call_tool.side_effect = [
            [{"type": "text", "text": "result1"}],
            [{"type": "text", "text": "result2"}]
        ]

        tools = [
            {"name": "tool1", "description": "Tool 1"},
            {"name": "tool2", "description": "Tool 2"}
        ]

        result, tool_metrics = await agent_loop(
            mock_client, "test-model", "Test question", tools, mock_connection
        )

        assert result == "<response>done</response>"
        assert tool_metrics["tool1"]["count"] == 1
        assert tool_metrics["tool2"]["count"] == 1
        assert mock_connection.call_tool.call_count == 2

    @pytest.mark.asyncio
    async def test_agent_loop_no_tool_calls(self):
        """Test agent loop when no tool calls are made."""
        # Mock response with no tool use
        mock_response = MagicMock()
        mock_response.stop_reason = "end_turn"
        mock_final_text = MagicMock()
        mock_final_text.text = "<response>42</response>"
        mock_response.content = [mock_final_text]

        mock_client = MagicMock()
        mock_client.messages.create = AsyncMock(return_value=mock_response)

        mock_connection = AsyncMock()
        tools = [{"name": "test_tool", "description": "A test tool"}]

        result, tool_metrics = await agent_loop(
            mock_client, "test-model", "Test question", tools, mock_connection
        )

        assert result == "<response>42</response>"
        assert tool_metrics == {}
        mock_connection.call_tool.assert_not_called()


class TestEvaluateSingleTask:
    """Test single task evaluation."""

    @pytest.mark.asyncio
    @patch('evaluation.agent_loop')
    async def test_evaluate_correct_answer(self, mock_agent_loop):
        """Test evaluation with correct answer."""
        mock_agent_loop.return_value = ("<response>42</response>", {"test_tool": {"count": 1, "durations": [0.1]}})

        mock_client = MagicMock()
        qa_pair = {"question": "What is 6*7?", "answer": "42"}
        tools = [{"name": "test_tool"}]
        mock_connection = AsyncMock()

        result = await evaluate_single_task(mock_client, "test-model", qa_pair, tools, mock_connection, 0)

        assert result["question"] == "What is 6*7?"
        assert result["expected"] == "42"
        assert result["actual"] == "42"
        assert result["score"] == 1
        assert result["tool_calls"] == {"test_tool": {"count": 1, "durations": [0.1]}}
        assert result["num_tool_calls"] == 1

    @pytest.mark.asyncio
    @patch('evaluation.agent_loop')
    async def test_evaluate_wrong_answer(self, mock_agent_loop):
        """Test evaluation with wrong answer."""
        mock_agent_loop.return_value = ("<response>43</response>", {"test_tool": {"count": 1, "durations": [0.1]}})

        mock_client = MagicMock()
        qa_pair = {"question": "What is 6*7?", "answer": "42"}
        tools = [{"name": "test_tool"}]
        mock_connection = AsyncMock()

        result = await evaluate_single_task(mock_client, "test-model", qa_pair, tools, mock_connection, 0)

        assert result["actual"] == "43"
        assert result["score"] == 0

    @pytest.mark.asyncio
    @patch('evaluation.agent_loop')
    async def test_evaluate_no_response_tag(self, mock_agent_loop):
        """Test evaluation when no response tag is found."""
        mock_agent_loop.return_value = ("No response tag", {"test_tool": {"count": 1, "durations": [0.1]}})

        mock_client = MagicMock()
        qa_pair = {"question": "What is 6*7?", "answer": "42"}
        tools = [{"name": "test_tool"}]
        mock_connection = AsyncMock()

        result = await evaluate_single_task(mock_client, "test-model", qa_pair, tools, mock_connection, 0)

        assert result["actual"] is None
        assert result["score"] == 0


class TestRunEvaluation:
    """Test full evaluation run."""

    @pytest.mark.asyncio
    @patch('evaluation.parse_evaluation_file')
    @patch('evaluation.evaluate_single_task')
    async def test_run_evaluation_success(self, mock_evaluate, mock_parse):
        """Test successful evaluation run."""
        mock_parse.return_value = [
            {"question": "Q1", "answer": "A1"},
            {"question": "Q2", "answer": "A2"}
        ]

        mock_evaluate.side_effect = [
            {
                "score": 1, "total_duration": 1.0, "num_tool_calls": 2,
                "tool_calls": {"tool1": {"count": 1, "durations": [0.5]}, "tool2": {"count": 1, "durations": [0.5]}},
                "summary": "Good", "feedback": "Excellent"
            },
            {
                "score": 0, "total_duration": 2.0, "num_tool_calls": 1,
                "tool_calls": {"tool1": {"count": 1, "durations": [2.0]}},
                "summary": "Bad", "feedback": "Poor"
            }
        ]

        mock_connection = AsyncMock()
        mock_connection.list_tools.return_value = [{"name": "tool1"}, {"name": "tool2"}]

        with tempfile.NamedTemporaryFile(mode='w', suffix='.xml', delete=False) as f:
            temp_path = Path(f.name)

        try:
            report = await run_evaluation(temp_path, mock_connection, "test-model")

            assert "Evaluation Report" in report
            assert "Accuracy: 50.0%" in report
            assert "Task 1" in report
            assert "Task 2" in report
            assert "✅" in report  # Correct answer
            assert "❌" in report  # Wrong answer
        finally:
            temp_path.unlink()

    @pytest.mark.asyncio
    @patch('evaluation.parse_evaluation_file')
    async def test_run_evaluation_empty_questions(self, mock_parse):
        """Test evaluation with no questions."""
        mock_parse.return_value = []

        mock_connection = AsyncMock()
        mock_connection.list_tools.return_value = []

        with tempfile.NamedTemporaryFile(mode='w', suffix='.xml', delete=False) as f:
            temp_path = Path(f.name)

        try:
            report = await run_evaluation(temp_path, mock_connection, "test-model")

            assert "Evaluation Report" in report
            assert "Accuracy: 0.0%" in report  # When no results
        finally:
            temp_path.unlink()


if __name__ == "__main__":
    pytest.main([__file__])
