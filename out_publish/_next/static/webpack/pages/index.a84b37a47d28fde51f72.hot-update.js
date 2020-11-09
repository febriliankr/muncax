webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SearchBar.tsx":
/*!**********************************!*\
  !*** ./components/SearchBar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\USER\\Documents\\dev\\November\\muncax\\components\\SearchBar.tsx",
    _s = $RefreshSig$();





function SearchBar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  function handleSubmit(e) {
    console.log(e.key);

    if (e.key === "Enter") {
      router.push('/api/cities');
    }
  }

  function handleChange(e) {
    console.log("CHANGE", e);
  }

  var options = [{
    value: "Carrier",
    label: "Carrier"
  }, {
    value: "Tenda",
    label: "Tenda"
  }, {
    value: "Matras",
    label: "Matras"
  }, {
    value: "Lampu",
    label: "Lampu"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "searchbar__container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onChange: handleChange,
      onKeyDown: handleSubmit,
      options: options,
      placeholder: "\uD83D\uDD0D Cari barang yang anda butuhkan..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(SearchBar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = SearchBar;
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

var _c;

$RefreshReg$(_c, "SearchBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwia2V5IiwicHVzaCIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBRW5CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLEdBQWQ7O0FBQ0EsUUFBSUgsQ0FBQyxDQUFDRyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQk4sWUFBTSxDQUFDTyxJQUFQLENBQVksYUFBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0MsWUFBVCxDQUFzQkwsQ0FBdEIsRUFBeUI7QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLENBQXRCO0FBQ0Q7O0FBRUQsTUFBTU0sT0FBTyxHQUFHLENBQ2Q7QUFBRUMsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQURjLEVBRWQ7QUFBRUQsU0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFNBQUssRUFBRTtBQUF6QixHQUZjLEVBR2Q7QUFBRUQsU0FBSyxFQUFFLFFBQVQ7QUFBbUJDLFNBQUssRUFBRTtBQUExQixHQUhjLEVBSWQ7QUFBRUQsU0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFNBQUssRUFBRTtBQUF6QixHQUpjLENBQWhCO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQSwyQkFDRSxxRUFBQyxvREFBRDtBQUNFLGNBQVEsRUFBRUgsWUFEWjtBQUVFLGVBQVMsRUFBRU4sWUFGYjtBQUdFLGFBQU8sRUFBRU8sT0FIWDtBQUlFLGlCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBaENRVixTO1VBRVFFLHFEOzs7S0FGUkYsUztBQWtDTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTg0YjM3YTQ3ZDI4ZmRlNTFmNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEJhcigpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUua2V5KTtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvYXBpL2NpdGllcycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJDSEFOR0VcIiwgZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyB2YWx1ZTogXCJDYXJyaWVyXCIsIGxhYmVsOiBcIkNhcnJpZXJcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJUZW5kYVwiLCBsYWJlbDogXCJUZW5kYVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk1hdHJhc1wiLCBsYWJlbDogXCJNYXRyYXNcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJMYW1wdVwiLCBsYWJlbDogXCJMYW1wdVwiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyX19jb250YWluZXJcIj5cclxuICAgICAgPFNlbGVjdFxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIvCflI0gQ2FyaSBiYXJhbmcgeWFuZyBhbmRhIGJ1dHVoa2FuLi4uXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==