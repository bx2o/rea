import fs from 'fs';
import path from 'path';
const ROOT = '/workspace/app';
const R = path.join(ROOT,'prompts/replies');
let prompts = [];
for (const base of ['prompts/stremiium','prompts/neobank']) {
  const root = path.join(ROOT,base);
  const walk = d => { for (const e of fs.readdirSync(d)) { const p = path.join(d,e); if (fs.statSync(p).isDirectory()) walk(p); else if (e==='prompt.md') prompts.push(p); } };
  walk(root);
}
let ok = 0; const errors = [];
for (const p of prompts) {
  const isNeo = p.includes('/neobank/');
  const parts = p.replace(ROOT+'/','').split('/');
  const council = isNeo ? parts[2] : parts[2];
  const agent = parts[3];
  const map = {legal:'c01-legal-compliance',operations:'c02-operations','knowledge-base':'c03-admin-knowledge',strategy:'c04-strategy-growth',hr:'c05-hr-culture',engineering:'c06-hardware-enable',sales:'c07-sales-revenue',design:'c08-design-creative',marketing:'c09-marketing-communications',finance:'c10-finance-cfo','dev-engineering':'c11-dev-engineering',security:'c12-cybersecurity-intel',web3:'c13-web3-token','customer-success':'c14-banking-fintech',product:'c15-product-management',banking:'c16-banking-fintech'};
  const outC = isNeo ? (map[council]||'c01-legal-compliance') : council;
  const dir = path.join(R,isNeo?'neobank':'stremiium',outC,agent);
  for (const f of ['reply.md','research-evidence.md','diagrams-and-charts.md']) {
    const fp = path.join(dir,f);
    if (!fs.existsSync(fp)) { errors.push(`MISSING: ${fp}`); continue; }
    const c = fs.readFileSync(fp,'utf8');
    if (f==='reply.md') {
      const sections = (c.match(/^## \d+\./gm)||[]).length;
      if (sections < 18) errors.push(`SECTIONS(${sections}): ${fp}`);
      if (!c.includes('LOCKED to `auto`')) errors.push(`NO MODEL LOCK: ${fp}`);
      if (c.includes('ingest research data with [S#] citations and evidence grades.')) errors.push(`GENERIC ANSWER: ${fp}`);
    }
  }
  ok++;
}
console.log(`Verified ${ok} prompts.`);
console.log(`Errors: ${errors.length}`);
errors.slice(0,20).forEach(e=>console.log('  '+e));
process.exit(errors.length ? 1 : 0);
