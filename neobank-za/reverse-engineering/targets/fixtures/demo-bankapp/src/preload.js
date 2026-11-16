const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('bank', {
  login: (c) => ipcRenderer.invoke('auth:login', c),
  pay: (p) => ipcRenderer.invoke('pay:initiate', p),
});
