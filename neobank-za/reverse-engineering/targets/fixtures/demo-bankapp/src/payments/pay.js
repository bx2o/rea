const { post } = require('../core/http');
const { login } = require('../auth/login');
async function initiatePayment(p){ await login(p.user); return post('/payments/payshap', p); }
module.exports = { initiatePayment };
