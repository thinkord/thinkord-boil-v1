import { ipcMain } from 'electron'



export function register() {
    ipcMain.on('hello', (event, data) => {
        console.log(data)
        event.reply('world', 'hello')
    })
}
