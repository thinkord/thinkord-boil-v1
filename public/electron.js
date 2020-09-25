/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main/electron.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ipcchannel/FileChannel.ts":
/*!***********************************!*\
  !*** ./ipcchannel/FileChannel.ts ***!
  \***********************************/
/*! exports provided: FileChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileChannel", function() { return FileChannel; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FileChannel = /*#__PURE__*/function () {
  function FileChannel(channelName) {
    var _this = this;

    _classCallCheck(this, FileChannel);

    this.channelName = channelName;
    electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on(this.channelName, function (event, command, args) {
      switch (command) {
        case 'save':
        case 'delete':
        case 'load':
          _this[command](event, args);

          break;

        default:
          console.log('Something went wrong');
          break;
      }
    });
  }

  _createClass(FileChannel, [{
    key: "save",
    value: function save(event, args) {
      console.log(args);
      event.reply('fuck', 'u');
    }
  }, {
    key: "load",
    value: function load(event, args) {
      console.log(args);
    }
  }, {
    key: "delete",
    value: function _delete(event, args) {
      console.log(args);
    }
    /****************Test Interface function**************** */

  }, {
    key: "setName",
    value: function setName(channelName) {
      this.channelName = channelName;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.channelName;
    }
    /****************Think what rules we need**************** */

  }]);

  return FileChannel;
}();

/***/ }),

/***/ "./ipcchannel/TestChannel.ts":
/*!***********************************!*\
  !*** ./ipcchannel/TestChannel.ts ***!
  \***********************************/
/*! exports provided: TestChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestChannel", function() { return TestChannel; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TestChannel = /*#__PURE__*/function () {
  function TestChannel(channelName) {
    var _this = this;

    _classCallCheck(this, TestChannel);

    this.channelName = channelName;
    electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on(this.channelName, function (event, command, args) {
      switch (command) {
        case 'hello':
          _this[command](args);

          break;

        default:
          console.log('Something went wrong');
          break;
      }
    });
  }
  /****************Test Interface function**************** */


  _createClass(TestChannel, [{
    key: "setName",
    value: function setName(channelName) {
      this.channelName = channelName;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.channelName;
    }
    /****************Think what rules we need**************** */

  }, {
    key: "hello",
    value: function hello(args) {
      console.log(args);
    }
  }]);

  return TestChannel;
}();

/***/ }),

/***/ "./main/electron.ts":
/*!**************************!*\
  !*** ./main/electron.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-is-dev */ "./node_modules/electron-is-dev/index.js");
/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_is_dev__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ipcchannel_FileChannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ipcchannel/FileChannel */ "./ipcchannel/FileChannel.ts");
/* harmony import */ var _ipcchannel_TestChannel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ipcchannel/TestChannel */ "./ipcchannel/TestChannel.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: "init",
    value: function init(channel) {
      electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('ready', this.createWindow);
      electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('window-all-closed', this.onWindowAllClosed);
      electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('activate', this.onActivate);
    }
  }, {
    key: "onWindowAllClosed",
    value: function onWindowAllClosed() {
      if (process.platform !== 'darwin') {
        electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
      }
    }
  }, {
    key: "onActivate",
    value: function onActivate() {
      if (!this.win) {
        this.createWindow();
      }
    }
  }, {
    key: "createWindow",
    value: function createWindow() {
      var _this = this;

      this.win = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          // enableRemoteModule: true,
          contextIsolation: true,
          preload: path__WEBPACK_IMPORTED_MODULE_2__["resolve"](__dirname, 'preload.js')
        }
      });
      this.win.loadURL(electron_is_dev__WEBPACK_IMPORTED_MODULE_1___default.a ? "http://localhost:3000" : "file://".concat(path__WEBPACK_IMPORTED_MODULE_2__["join"](__dirname, '../build/index.html')));
      this.win.once('ready-to-show', function () {
        _this.win.show();
      });
      this.win.on('closed', function () {
        _this.win = null;
      });
    }
  }]);

  return Main;
}();

new Main().init([new _ipcchannel_TestChannel__WEBPACK_IMPORTED_MODULE_4__["TestChannel"]('test'), new _ipcchannel_FileChannel__WEBPACK_IMPORTED_MODULE_3__["FileChannel"]('fileprocess')]); // let win: BrowserWindow | null
// function createWindow() {
//     // Create the browser window.
//     win = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: true,
//             // enableRemoteModule: true,
//             contextIsolation: true,
//             preload: path.resolve(__dirname, 'preload.js')
//         }
//     });
//     register()
//     // and load the index.html of the app.
//     win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`)
//     win.once('ready-to-show', () => {
//         win.show()
//     })
//     win.on('closed', () => {
//         win = null
//     })
// }
// app.on('ready', createWindow);

/***/ }),

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const electron = __webpack_require__(/*! electron */ "electron");

if (typeof electron === 'string') {
	throw new TypeError('Not running in an Electron environment!');
}

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

module.exports = isEnvSet ? getFromEnv : !app.isPackaged;


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=electron.js.map