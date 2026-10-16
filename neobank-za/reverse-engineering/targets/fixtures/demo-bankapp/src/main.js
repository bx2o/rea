const { app, BrowserWindow, ipcMain } = require('electron');
const { login } = require('./auth/login');
const { initiatePayment } = require('./payments/pay');
ipcMain.handle('auth:login', (_e, creds) => login(creds));
ipcMain.handle('pay:initiate', (_e, p) => initiatePayment(p));
app.whenReady().then(() => new BrowserWindow({ webPreferences: { preload: __dirname + '/preload.js' } }));
