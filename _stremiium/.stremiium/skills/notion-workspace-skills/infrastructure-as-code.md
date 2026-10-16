---
description: 'Infrastructure as Code - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Infrastructure as Code - Skill Guide

**Skill Category**: DevOps  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Infrastructure as Code manages infrastructure through code. This skill covers tools like Terraform for consistent, reproducible deployments.

---

## Terraform Example

```hcl
# Configure AWS provider
provider "aws" {
  region = "us-east-1"
}

# Define resources
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "MyWebServer"
  }
}

resource "aws_security_group" "web" {
  name = "web_sg"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Output values
output "instance_ip" {
  value = aws_instance.web_server.public_ip
}
```

---

## Benefits

- Version control for infrastructure
- Reproducible deployments
- Easy disaster recovery
- Code review for infrastructure changes
- Automation of complex setups

---

**Proficiency Verified**: Can define and manage infrastructure with code.
