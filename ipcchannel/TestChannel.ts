
import { ipcMain, IpcMainEvent } from "electron";
import { IIpcChannel } from "./IIpcChannel";
export class TestChannel implements IIpcChannel {
    channelName
    constructor(channelName) {
        this.channelName = channelName
        ipcMain.on(this.channelName, (event: IpcMainEvent, command: string, args: any) => {
            switch (command) {
                case 'hello':
                    this[command](args);
                    break;
                default:
                    console.log('Something went wrong')
                    break;
            }
        })
    }

    /****************Test Interface function**************** */
    setName(channelName: string) {
        this.channelName = channelName
    }

    getName(): string {
        return this.channelName
    }
    /****************Think what rules we need**************** */


    hello(args) {
        console.log(args)
    }
}

