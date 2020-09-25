
import { ipcMain, IpcMainEvent } from "electron";
import { IIpcChannel } from "./IIpcChannel";
export class FileChannel implements IIpcChannel {
    channelName 
    constructor(channelName) {
        this.channelName = channelName
        ipcMain.on(this.channelName, (event: IpcMainEvent, command: string, args: any) => {
            
            switch (command) {
                case 'save':
                case 'delete':
                case 'load':
                    this[command](event,args);
                    break;
                default:
                    console.log('Something went wrong')
                    break;
            }
        })
    }
    save(event,args) {
        console.log(args)
        event.reply('fuck','u')
    }

    load(event,args) {
        console.log(args)
    }

    delete(event,args) {
        console.log(args)
    }

    /****************Test Interface function**************** */
    setName(channelName: string) {
        this.channelName = channelName
    }

    getName(): string {
        return this.channelName
    }
    /****************Think what rules we need**************** */

}

