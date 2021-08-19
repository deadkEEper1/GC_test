webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\Jura\\WebstormProjects\\gc_test\\pages\\index.js",
    _s = $RefreshSig$();




var playerIds = [1, 2];

var fetchPlayerData = /*#__PURE__*/function () {
  var _ref = Object(C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(playerId) {
    var playerDataResp, playerData;
    return C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/players/".concat(playerId));

          case 2:
            playerDataResp = _context.sent;
            _context.next = 5;
            return playerDataResp.json();

          case 5:
            playerData = _context.sent;
            return _context.abrupt("return", playerData);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchPlayerData(_x) {
    return _ref.apply(this, arguments);
  };
}();

function IndexPage(_ref2) {
  _s();

  var _this = this;

  Object(C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      playerId = _useState[0],
      setPlayerId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      playerData = _useState2[0],
      setPlayerData = _useState2[1];

  console.log('playerId\n', playerId);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var io = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()('', {
      path: '/socket.io',
      transports: ['websocket'],
      secure: true
    });
    io.on('message', function (playerData) {
      if (playerData.id === playerId) {
        // issue here, can't get the actual userId but always 1;
        setPlayerData(playerData);
      }
    });
  }, [playerId]);

  var runSpin = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var playerDataResp;
      return C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/spin/?playerId=".concat(playerId));

            case 2:
              playerDataResp = _context2.sent;

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function runSpin() {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
    var playerData;
    return C_Users_Jura_WebstormProjects_gc_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetchPlayerData(playerId);

          case 2:
            playerData = _context3.sent;
            setPlayerData(playerData);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [playerId]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
      onClick: function onClick(e) {
        setPlayerId(e.target.value);
      },
      children: playerIds.map(function (id) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          children: [" ", id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 16
        }, _this);
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

_s(IndexPage, "ciWPbXJDDbpliq9ZeFWwW3xVlC8=");

_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicGxheWVySWRzIiwiZmV0Y2hQbGF5ZXJEYXRhIiwicGxheWVySWQiLCJmZXRjaCIsInBsYXllckRhdGFSZXNwIiwianNvbiIsInBsYXllckRhdGEiLCJJbmRleFBhZ2UiLCJ1c2VTdGF0ZSIsInNldFBsYXllcklkIiwic2V0UGxheWVyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpbyIsInNvY2tldCIsInBhdGgiLCJ0cmFuc3BvcnRzIiwic2VjdXJlIiwib24iLCJpZCIsInJ1blNwaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJuYW1lIiwiYmFsYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCLENBRGdCLEVBQ2IsQ0FEYSxDQUFsQjs7QUFJQSxJQUFNQyxlQUFlO0FBQUEsc1VBQUcsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFT0MsS0FBSyx3QkFBaUJELFFBQWpCLEVBRlo7O0FBQUE7QUFFaEJFLDBCQUZnQjtBQUFBO0FBQUEsbUJBR0dBLGNBQWMsQ0FBQ0MsSUFBZixFQUhIOztBQUFBO0FBR2hCQyxzQkFIZ0I7QUFBQSw2Q0FLZkEsVUFMZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmTCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQVNlLFNBQVNNLFNBQVQsUUFBdUI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxDQUFELENBREo7QUFBQSxNQUM3Qk4sUUFENkI7QUFBQSxNQUNuQk8sV0FEbUI7O0FBQUEsbUJBRUFELHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFN0JGLFVBRjZCO0FBQUEsTUFFakJJLGFBRmlCOztBQUlwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlYsUUFBMUI7QUFFQVcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsRUFBRSxHQUFHQyx1REFBTSxDQUFDLEVBQUQsRUFBSztBQUNwQkMsVUFBSSxFQUFFLFlBRGM7QUFFcEJDLGdCQUFVLEVBQUUsQ0FBQyxXQUFELENBRlE7QUFHcEJDLFlBQU0sRUFBRTtBQUhZLEtBQUwsQ0FBakI7QUFNQUosTUFBRSxDQUFDSyxFQUFILENBQU0sU0FBTixFQUFpQixVQUFDYixVQUFELEVBQWdCO0FBQy9CLFVBQUlBLFVBQVUsQ0FBQ2MsRUFBWCxLQUFrQmxCLFFBQXRCLEVBQWdDO0FBQUU7QUFDaENRLHFCQUFhLENBQUNKLFVBQUQsQ0FBYjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBWlEsRUFZTixDQUFDSixRQUFELENBWk0sQ0FBVDs7QUFjQSxNQUFNbUIsT0FBTztBQUFBLHlVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2VsQixLQUFLLCtCQUF3QkQsUUFBeEIsRUFEcEI7O0FBQUE7QUFDUkUsNEJBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUGlCLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFJQVIseURBQVMsd1VBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJaLGVBQWUsQ0FBQ0MsUUFBRCxDQURoQzs7QUFBQTtBQUNGSSxzQkFERTtBQUVSSSx5QkFBYSxDQUFDSixVQUFELENBQWI7O0FBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlOLENBQUNKLFFBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQVE7QUFBQSw0QkFDTjtBQUFRLGFBQU8sRUFBRyxpQkFBQW9CLENBQUMsRUFBSTtBQUNyQmIsbUJBQVcsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELE9BRkQ7QUFBQSxnQkFHR3hCLFNBQVMsQ0FBQ3lCLEdBQVYsQ0FBYyxVQUFBTCxFQUFFLEVBQUk7QUFDbkIsNEJBQU87QUFBQSwwQkFBVUEsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZBO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGVBU047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUTSxlQVVOO0FBQUEsOEJBQ0U7QUFBQSw2QkFBK0JkLFVBQVUsQ0FBQ29CLElBQTFDO0FBQUEsU0FBU3BCLFVBQVUsQ0FBQ2MsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxnQ0FBa0NkLFVBQVUsQ0FBQ3FCLE9BQTdDO0FBQUEsU0FBU3JCLFVBQVUsQ0FBQ2MsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZNLGVBZU47QUFBUSxhQUFPLEVBQUVDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZk0sZUFnQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFtQkQ7O0dBakR1QmQsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMTcxNTEzOTY4NGQwYjRmYTFhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc29ja2V0IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5jb25zdCBwbGF5ZXJJZHMgPSBbXHJcbiAgMSwgMlxyXG5dO1xyXG5cclxuY29uc3QgZmV0Y2hQbGF5ZXJEYXRhID0gYXN5bmMgKHBsYXllcklkKSA9PiB7XHJcblxyXG4gIGNvbnN0IHBsYXllckRhdGFSZXNwID0gYXdhaXQgZmV0Y2goYC9hcGkvcGxheWVycy8ke3BsYXllcklkfWApXHJcbiAgY29uc3QgcGxheWVyRGF0YSA9IGF3YWl0IHBsYXllckRhdGFSZXNwLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHBsYXllckRhdGE7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2Uoe30pIHtcclxuICBjb25zdCBbcGxheWVySWQsIHNldFBsYXllcklkXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3BsYXllcklkXFxuJywgcGxheWVySWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW8gPSBzb2NrZXQoJycsIHtcclxuICAgICAgcGF0aDogJy9zb2NrZXQuaW8nLFxyXG4gICAgICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddLFxyXG4gICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpby5vbignbWVzc2FnZScsIChwbGF5ZXJEYXRhKSA9PiB7XHJcbiAgICAgIGlmIChwbGF5ZXJEYXRhLmlkID09PSBwbGF5ZXJJZCkgeyAvLyBpc3N1ZSBoZXJlLCBjYW4ndCBnZXQgdGhlIGFjdHVhbCB1c2VySWQgYnV0IGFsd2F5cyAxO1xyXG4gICAgICAgIHNldFBsYXllckRhdGEocGxheWVyRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW3BsYXllcklkXSlcclxuXHJcbiAgY29uc3QgcnVuU3BpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckRhdGFSZXNwID0gYXdhaXQgZmV0Y2goYC9hcGkvc3Bpbi8/cGxheWVySWQ9JHtwbGF5ZXJJZH1gKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckRhdGEgPSBhd2FpdCBmZXRjaFBsYXllckRhdGEocGxheWVySWQpO1xyXG4gICAgc2V0UGxheWVyRGF0YShwbGF5ZXJEYXRhKTtcclxuXHJcbiAgfSwgW3BsYXllcklkXSk7XHJcblxyXG4gIHJldHVybiAoPGRpdj5cclxuICAgIDxzZWxlY3Qgb25DbGljaz17KGUgPT4ge1xyXG4gICAgICBzZXRQbGF5ZXJJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH0pfT5cclxuICAgICAge3BsYXllcklkcy5tYXAoaWQgPT4ge1xyXG4gICAgICAgIHJldHVybiA8b3B0aW9uPiB7aWR9PC9vcHRpb24+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgPHA+UGxheWVyIGRhdGE6PC9wPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkga2V5PXtwbGF5ZXJEYXRhLmlkfT5OYW1lOiB7cGxheWVyRGF0YS5uYW1lfTwvbGk+XHJcbiAgICAgIDxsaSBrZXk9e3BsYXllckRhdGEuaWR9PkJhbGFuY2U6IHtwbGF5ZXJEYXRhLmJhbGFuY2V9PC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtydW5TcGlufT5TUElOPC9idXR0b24+XHJcbiAgICA8cD5TcGlucyBoaXN0b3J5OjwvcD5cclxuXHJcbiAgPC9kaXY+KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=