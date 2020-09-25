## Electron and CRA (All typescript)

The purpose of this poc is a test to rebuild the thinkord project using secure and proper way. However, the overall set-up becomes a more complicated due to the use of typescript. Therefore, for the react part, I want it to be dealt with by the CRA, and I can focus on electron settings with webpack. After a lot of try and error, the process from development to packaging into executable file can work smoothly. In addition to the overall architecture configuration, I also use the OOP concept to modify ipc communication.

## Available Scripts

### `npm run electron-build`
Transforms typescript in electron to javascript

### `npm run react-build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`
Runs this application in the development mode. 

### `npm run bundle`
The combination of electron-build and the react-build. Be careful to make a compilation to electron before building react.

### `npm run electron-pack`
Make sure that build folder has not been generated. It's generally recommended to run `npm run bundle` at first to run this instruction. 
