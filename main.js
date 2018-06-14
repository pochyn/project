var { app, BrowserWindow } = require('electron');
const {ipcMain} = require('electron')
var url = require('url');
var path = require('path');

//handle setupevents as quickly as possible
const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
   // squirrel event handled and app will exit in 1000ms, so don't do anything else
   return;
}

const electron = require('electron')
// Module to control application life.
var app = electron.app



let win = null;

app.on('ready', () => {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({
        width: Math.ceil(width * .8),
        height: Math.ceil(height * .96),
        frame: false
    })

    //win.loadURL('http://localhost:4200');
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.on('closed', () => {
        win = null;
    })
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
})

ipcMain.on('close', (evt, arg) => {
    app.quit();
})
ipcMain.on('minimize', (evt, arg) => {
    var window = BrowserWindow.getFocusedWindow();
    window.minimize();
})