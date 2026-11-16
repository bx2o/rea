const { verifyKyc } = require('../kyc/verify');
const { post } = require('../core/http');
async function login(c){ const k = await verifyKyc(c.idNumber); return post('/auth/login', { ...c, kyc: k }); }
module.exports = { login };
