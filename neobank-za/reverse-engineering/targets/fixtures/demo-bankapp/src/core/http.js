const BASE = 'https://api.demo-bank.co.za';
async function post(path, body){ return { path, body, base: BASE }; }
module.exports = { post };
