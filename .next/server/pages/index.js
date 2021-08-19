module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Jura\\WebstormProjects\\gc_test\\pages\\index.js";



const playerIds = [1, 2];

const fetchPlayerData = async playerId => {
  const playerDataResp = await fetch(`/api/players/${playerId}`);
  const playerData = await playerDataResp.json();
  return playerData;
};

function IndexPage({}) {
  const {
    0: playerId,
    1: setPlayerId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: playerData,
    1: setPlayerData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  console.log('playerId\n', playerId);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const io = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('', {
      path: '/socket.io',
      transports: ['websocket'],
      secure: true
    });
    io.on('message', playerData => {
      if (playerData.id === playerId) {
        // issue here, can't get the actual userId but always 1;
        setPlayerData(playerData);
      }
    });
  }, [playerId]);

  const runSpin = async () => {
    const playerDataResp = await fetch(`/api/spin/?playerId=${playerId}`);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    const playerData = await fetchPlayerData(playerId);
    setPlayerData(playerData);
  }, [playerId]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
      onClick: e => {
        setPlayerId(e.target.value);
      },
      children: playerIds.map(id => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          children: [" ", id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 16
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Player data:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Name: ", playerData.name]
      }, playerData.id, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Balance: ", playerData.balance]
      }, playerData.id, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: runSpin,
      children: "SPIN"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Spins history:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsicGxheWVySWRzIiwiZmV0Y2hQbGF5ZXJEYXRhIiwicGxheWVySWQiLCJwbGF5ZXJEYXRhUmVzcCIsImZldGNoIiwicGxheWVyRGF0YSIsImpzb24iLCJJbmRleFBhZ2UiLCJzZXRQbGF5ZXJJZCIsInVzZVN0YXRlIiwic2V0UGxheWVyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpbyIsInNvY2tldCIsInBhdGgiLCJ0cmFuc3BvcnRzIiwic2VjdXJlIiwib24iLCJpZCIsInJ1blNwaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJuYW1lIiwiYmFsYW5jZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBbUJELEM7Ozs7Ozs7Ozs7O0FDbEVELGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNvY2tldCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuY29uc3QgcGxheWVySWRzID0gW1xyXG4gIDEsIDJcclxuXTtcclxuXHJcbmNvbnN0IGZldGNoUGxheWVyRGF0YSA9IGFzeW5jIChwbGF5ZXJJZCkgPT4ge1xyXG5cclxuICBjb25zdCBwbGF5ZXJEYXRhUmVzcCA9IGF3YWl0IGZldGNoKGAvYXBpL3BsYXllcnMvJHtwbGF5ZXJJZH1gKVxyXG4gIGNvbnN0IHBsYXllckRhdGEgPSBhd2FpdCBwbGF5ZXJEYXRhUmVzcC5qc29uKCk7XHJcblxyXG4gIHJldHVybiBwbGF5ZXJEYXRhO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHt9KSB7XHJcbiAgY29uc3QgW3BsYXllcklkLCBzZXRQbGF5ZXJJZF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJJZFxcbicsIHBsYXllcklkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlvID0gc29ja2V0KCcnLCB7XHJcbiAgICAgIHBhdGg6ICcvc29ja2V0LmlvJyxcclxuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaW8ub24oJ21lc3NhZ2UnLCAocGxheWVyRGF0YSkgPT4ge1xyXG4gICAgICBpZiAocGxheWVyRGF0YS5pZCA9PT0gcGxheWVySWQpIHsgLy8gaXNzdWUgaGVyZSwgY2FuJ3QgZ2V0IHRoZSBhY3R1YWwgdXNlcklkIGJ1dCBhbHdheXMgMTtcclxuICAgICAgICBzZXRQbGF5ZXJEYXRhKHBsYXllckRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtwbGF5ZXJJZF0pXHJcblxyXG4gIGNvbnN0IHJ1blNwaW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJEYXRhUmVzcCA9IGF3YWl0IGZldGNoKGAvYXBpL3NwaW4vP3BsYXllcklkPSR7cGxheWVySWR9YClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJEYXRhID0gYXdhaXQgZmV0Y2hQbGF5ZXJEYXRhKHBsYXllcklkKTtcclxuICAgIHNldFBsYXllckRhdGEocGxheWVyRGF0YSk7XHJcblxyXG4gIH0sIFtwbGF5ZXJJZF0pO1xyXG5cclxuICByZXR1cm4gKDxkaXY+XHJcbiAgICA8c2VsZWN0IG9uQ2xpY2s9eyhlID0+IHtcclxuICAgICAgc2V0UGxheWVySWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9KX0+XHJcbiAgICAgIHtwbGF5ZXJJZHMubWFwKGlkID0+IHtcclxuICAgICAgICByZXR1cm4gPG9wdGlvbj4ge2lkfTwvb3B0aW9uPlxyXG4gICAgICB9KX1cclxuICAgIDwvc2VsZWN0PlxyXG5cclxuICAgIDxwPlBsYXllciBkYXRhOjwvcD5cclxuICAgIDx1bD5cclxuICAgICAgPGxpIGtleT17cGxheWVyRGF0YS5pZH0+TmFtZToge3BsYXllckRhdGEubmFtZX08L2xpPlxyXG4gICAgICA8bGkga2V5PXtwbGF5ZXJEYXRhLmlkfT5CYWxhbmNlOiB7cGxheWVyRGF0YS5iYWxhbmNlfTwvbGk+XHJcbiAgICA8L3VsPlxyXG5cclxuICAgIDxidXR0b24gb25DbGljaz17cnVuU3Bpbn0+U1BJTjwvYnV0dG9uPlxyXG4gICAgPHA+U3BpbnMgaGlzdG9yeTo8L3A+XHJcblxyXG4gIDwvZGl2PilcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9