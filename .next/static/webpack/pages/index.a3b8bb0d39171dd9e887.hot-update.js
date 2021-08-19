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
      console.log('playerId mes\n', playerId);
      console.log('playerData.id\n', playerData.id);

      if (playerData.id == playerId) {
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
          lineNumber: 56,
          columnNumber: 16
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Player data:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Name: ", playerData.name]
      }, playerData.id, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Balance: ", playerData.balance]
      }, playerData.id, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: runSpin,
      children: "SPIN"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Spins history:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicGxheWVySWRzIiwiZmV0Y2hQbGF5ZXJEYXRhIiwicGxheWVySWQiLCJmZXRjaCIsInBsYXllckRhdGFSZXNwIiwianNvbiIsInBsYXllckRhdGEiLCJJbmRleFBhZ2UiLCJ1c2VTdGF0ZSIsInNldFBsYXllcklkIiwic2V0UGxheWVyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpbyIsInNvY2tldCIsInBhdGgiLCJ0cmFuc3BvcnRzIiwic2VjdXJlIiwib24iLCJpZCIsInJ1blNwaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJuYW1lIiwiYmFsYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCLENBRGdCLEVBQ2IsQ0FEYSxDQUFsQjs7QUFJQSxJQUFNQyxlQUFlO0FBQUEsc1VBQUcsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFT0MsS0FBSyx3QkFBaUJELFFBQWpCLEVBRlo7O0FBQUE7QUFFaEJFLDBCQUZnQjtBQUFBO0FBQUEsbUJBR0dBLGNBQWMsQ0FBQ0MsSUFBZixFQUhIOztBQUFBO0FBR2hCQyxzQkFIZ0I7QUFBQSw2Q0FLZkEsVUFMZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmTCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQVNlLFNBQVNNLFNBQVQsUUFBdUI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxDQUFELENBREo7QUFBQSxNQUM3Qk4sUUFENkI7QUFBQSxNQUNuQk8sV0FEbUI7O0FBQUEsbUJBRUFELHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFN0JGLFVBRjZCO0FBQUEsTUFFakJJLGFBRmlCOztBQUlwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlYsUUFBMUI7QUFFQVcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsRUFBRSxHQUFHQyx1REFBTSxDQUFDLEVBQUQsRUFBSztBQUNwQkMsVUFBSSxFQUFFLFlBRGM7QUFFcEJDLGdCQUFVLEVBQUUsQ0FBQyxXQUFELENBRlE7QUFHcEJDLFlBQU0sRUFBRTtBQUhZLEtBQUwsQ0FBakI7QUFNQUosTUFBRSxDQUFDSyxFQUFILENBQU0sU0FBTixFQUFpQixVQUFDYixVQUFELEVBQWdCO0FBQy9CSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlYsUUFBOUI7QUFDQVMsYUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JOLFVBQVUsQ0FBQ2MsRUFBMUM7O0FBRUEsVUFBSWQsVUFBVSxDQUFDYyxFQUFYLElBQWlCbEIsUUFBckIsRUFBK0I7QUFDN0JRLHFCQUFhLENBQUNKLFVBQUQsQ0FBYjtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBZlEsRUFlTixDQUFDSixRQUFELENBZk0sQ0FBVDs7QUFpQkEsTUFBTW1CLE9BQU87QUFBQSx5VUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNlbEIsS0FBSywrQkFBd0JELFFBQXhCLEVBRHBCOztBQUFBO0FBQ1JFLDRCQURROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBpQixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBSUFSLHlEQUFTLHdVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCWixlQUFlLENBQUNDLFFBQUQsQ0FEaEM7O0FBQUE7QUFDRkksc0JBREU7QUFFUkkseUJBQWEsQ0FBQ0osVUFBRCxDQUFiOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFJTixDQUFDSixRQUFELENBSk0sQ0FBVDtBQU1BLHNCQUFRO0FBQUEsNEJBQ047QUFBUSxhQUFPLEVBQUcsaUJBQUFvQixDQUFDLEVBQUk7QUFDckJiLG1CQUFXLENBQUNhLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxPQUZEO0FBQUEsZ0JBR0d4QixTQUFTLENBQUN5QixHQUFWLENBQWMsVUFBQUwsRUFBRSxFQUFJO0FBQ25CLDRCQUFPO0FBQUEsMEJBQVVBLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGQTtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxlQVNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVE0sZUFVTjtBQUFBLDhCQUNFO0FBQUEsNkJBQStCZCxVQUFVLENBQUNvQixJQUExQztBQUFBLFNBQVNwQixVQUFVLENBQUNjLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsZ0NBQWtDZCxVQUFVLENBQUNxQixPQUE3QztBQUFBLFNBQVNyQixVQUFVLENBQUNjLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWTSxlQWVOO0FBQVEsYUFBTyxFQUFFQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZNLGVBZ0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBbUJEOztHQXBEdUJkLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTNiOGJiMGQzOTE3MWRkOWU4ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNvY2tldCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuY29uc3QgcGxheWVySWRzID0gW1xyXG4gIDEsIDJcclxuXTtcclxuXHJcbmNvbnN0IGZldGNoUGxheWVyRGF0YSA9IGFzeW5jIChwbGF5ZXJJZCkgPT4ge1xyXG5cclxuICBjb25zdCBwbGF5ZXJEYXRhUmVzcCA9IGF3YWl0IGZldGNoKGAvYXBpL3BsYXllcnMvJHtwbGF5ZXJJZH1gKVxyXG4gIGNvbnN0IHBsYXllckRhdGEgPSBhd2FpdCBwbGF5ZXJEYXRhUmVzcC5qc29uKCk7XHJcblxyXG4gIHJldHVybiBwbGF5ZXJEYXRhO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHt9KSB7XHJcbiAgY29uc3QgW3BsYXllcklkLCBzZXRQbGF5ZXJJZF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJJZFxcbicsIHBsYXllcklkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlvID0gc29ja2V0KCcnLCB7XHJcbiAgICAgIHBhdGg6ICcvc29ja2V0LmlvJyxcclxuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaW8ub24oJ21lc3NhZ2UnLCAocGxheWVyRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncGxheWVySWQgbWVzXFxuJywgcGxheWVySWQgKTtcclxuICAgICAgY29uc29sZS5sb2coJ3BsYXllckRhdGEuaWRcXG4nLCBwbGF5ZXJEYXRhLmlkKTtcclxuXHJcbiAgICAgIGlmIChwbGF5ZXJEYXRhLmlkID09IHBsYXllcklkKSB7XHJcbiAgICAgICAgc2V0UGxheWVyRGF0YShwbGF5ZXJEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbcGxheWVySWRdKVxyXG5cclxuICBjb25zdCBydW5TcGluID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyRGF0YVJlc3AgPSBhd2FpdCBmZXRjaChgL2FwaS9zcGluLz9wbGF5ZXJJZD0ke3BsYXllcklkfWApXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyRGF0YSA9IGF3YWl0IGZldGNoUGxheWVyRGF0YShwbGF5ZXJJZCk7XHJcbiAgICBzZXRQbGF5ZXJEYXRhKHBsYXllckRhdGEpO1xyXG5cclxuICB9LCBbcGxheWVySWRdKTtcclxuXHJcbiAgcmV0dXJuICg8ZGl2PlxyXG4gICAgPHNlbGVjdCBvbkNsaWNrPXsoZSA9PiB7XHJcbiAgICAgIHNldFBsYXllcklkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSl9PlxyXG4gICAgICB7cGxheWVySWRzLm1hcChpZCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxvcHRpb24+IHtpZH08L29wdGlvbj5cclxuICAgICAgfSl9XHJcbiAgICA8L3NlbGVjdD5cclxuXHJcbiAgICA8cD5QbGF5ZXIgZGF0YTo8L3A+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSBrZXk9e3BsYXllckRhdGEuaWR9Pk5hbWU6IHtwbGF5ZXJEYXRhLm5hbWV9PC9saT5cclxuICAgICAgPGxpIGtleT17cGxheWVyRGF0YS5pZH0+QmFsYW5jZToge3BsYXllckRhdGEuYmFsYW5jZX08L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3J1blNwaW59PlNQSU48L2J1dHRvbj5cclxuICAgIDxwPlNwaW5zIGhpc3Rvcnk6PC9wPlxyXG5cclxuICA8L2Rpdj4pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==