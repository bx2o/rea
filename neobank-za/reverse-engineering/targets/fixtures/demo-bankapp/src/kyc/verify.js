const { post } = require('../core/http');
async function verifyKyc(idNumber){ return post('/kyc/verify', { idNumber }); }
module.exports = { verifyKyc };
