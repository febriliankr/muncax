webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\USER\\Documents\\dev\\November\\muncax\\components\\Search.tsx",
    _s = $RefreshSig$();




function Search() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("f"),
      search = _useState[0],
      setSearch = _useState[1];

  function handleSubmit(e) {
    // console.log(e.key);
    if (e.key === "Enter") {
      // router.push('/api/cities')
      console.log(search);
    }
  }

  function handleChange(text) {
    console.log("CHANGE", text);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onsubmit: handleSubmit,
    role: "search",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      "class": "searchTerm",
      placeholder: "What are you looking for?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "submit",
      "class": "searchButton",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        "class": "fa fa-search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }, this);
}

_s(Search, "49U7/QBXqWxQR3fMjT6PMp13oDI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gudHN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU3VibWl0IiwiZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGdCLGtCQUdZQyxzREFBUSxDQUFDLEdBQUQsQ0FIcEI7QUFBQSxNQUdUQyxNQUhTO0FBQUEsTUFHREMsU0FIQzs7QUFLaEIsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkI7QUFDQSxRQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTTyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQkgsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkUsSUFBdEI7QUFDRDs7QUFFRCxzQkFFSTtBQUFNLFlBQVEsRUFBRU4sWUFBaEI7QUFBOEIsUUFBSSxFQUFDLFFBQW5DO0FBQUEsNEJBQ0E7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFNLFlBQXpCO0FBQXNDLGlCQUFXLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFNLGNBQTVCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFVRDs7R0EzQlFOLE07VUFDUUUscUQ7OztLQURSRixNO0FBNkJNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU2ZmUyYjFhYzEwZTVjNTk2NTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcImZcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLmtleSk7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAvLyByb3V0ZXIucHVzaCgnL2FwaS9jaXRpZXMnKVxyXG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHRleHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ0hBTkdFXCIsIHRleHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxmb3JtIG9uc3VibWl0PXtoYW5kbGVTdWJtaXR9IHJvbGU9XCJzZWFyY2hcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWFyY2hUZXJtXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/XCIvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInNlYXJjaEJ1dHRvblwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==