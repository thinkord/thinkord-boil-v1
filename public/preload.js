const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    "appRuntime",
    {
        send: (channel,command, data) => {
            ipcRenderer.send(channel,command, data)
        },
        subscribe: (channel, listener) => {
            const subscription = (event, ...args) => listener(...args)
            ipcRenderer.on(channel, subscription)

            return () => {
                ipcRenderer.removeListener(channel, subscription)
            }
        }
    }
)