import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev'
import * as path from 'path';
import { register } from '../service/index'


let win: BrowserWindow | null
function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // enableRemoteModule: true,
            contextIsolation: true,
            preload: path.resolve(__dirname, 'preload.js')
        }
    });
    register()
    // and load the index.html of the app.
    win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`)
    win.once('ready-to-show', () => {
        win.show()
    })
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

