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


var _jsxFileName = "C:\\Users\\USER\\Documents\\dev\\November\\muncax\\components\\SearchBar.tsx",
    _s = $RefreshSig$();




function SearchBar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      cityOptions = _useState[0],
      setCityOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      opt = _useState2[0],
      setOpt = _useState2[1];

  fetch("/api/cities").then(function (response) {
    response.json();
  });
  var options = [{
    value: "Salatiga",
    label: "Salatiga"
  }, {
    value: "Semarang",
    label: "Semarang"
  }, {
    value: "Ungaran",
    label: "Ungaran"
  }]; // function returnOptions() {
  // }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "searchbar__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
      options: options,
      placeholder: "Cari penyewa berdasarkan lokasi"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
      children: JSON.stringify(cityOptions)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(SearchBar, "LfOk+iFABMPBVPtWR2OpdrVMy5E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInVzZVN0YXRlIiwiY2l0eU9wdGlvbnMiLCJzZXRDaXR5T3B0aW9ucyIsIm9wdCIsInNldE9wdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEVBQUQsQ0FEM0I7QUFBQSxNQUNaQyxXQURZO0FBQUEsTUFDQ0MsY0FERDs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVaRyxHQUZZO0FBQUEsTUFFUEMsTUFGTzs7QUFHbkJDLE9BQUssQ0FBQyxhQUFELENBQUwsQ0FBcUJDLElBQXJCLENBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUN0Q0EsWUFBUSxDQUFDQyxJQUFUO0FBRUQsR0FIRDtBQUtBLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQUVDLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FEYyxFQUVkO0FBQUVELFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FGYyxFQUdkO0FBQUVELFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUU7QUFBM0IsR0FIYyxDQUFoQixDQVJtQixDQWNuQjtBQUVBOztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBUSxhQUFPLEVBQUVGLE9BQWpCO0FBQTBCLGlCQUFXLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBTUcsSUFBSSxDQUFDQyxTQUFMLENBQWVaLFdBQWY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7R0FoQ1FGLFM7O0tBQUFBLFM7QUFrQ01BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI0MzM2OWFhMjBlMjNhZWUyMWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEJhcigpIHtcclxuICBjb25zdCBbY2l0eU9wdGlvbnMsIHNldENpdHlPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3B0LCBzZXRPcHRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGZldGNoKFwiL2FwaS9jaXRpZXNcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyB2YWx1ZTogXCJTYWxhdGlnYVwiLCBsYWJlbDogXCJTYWxhdGlnYVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIlNlbWFyYW5nXCIsIGxhYmVsOiBcIlNlbWFyYW5nXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiVW5nYXJhblwiLCBsYWJlbDogXCJVbmdhcmFuXCIgfSxcclxuICBdO1xyXG5cclxuICAvLyBmdW5jdGlvbiByZXR1cm5PcHRpb25zKCkge1xyXG5cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhcl9fY29udGFpbmVyXCI+XHJcbiAgICAgIDxTZWxlY3Qgb3B0aW9ucz17b3B0aW9uc30gcGxhY2Vob2xkZXI9XCJDYXJpIHBlbnlld2EgYmVyZGFzYXJrYW4gbG9rYXNpXCIgLz5cclxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY2l0eU9wdGlvbnMpfTwvcHJlPlxyXG4gICAgICB7Lyoge09iamVjdC5rZXlzKGNpdHlPcHRpb25zKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjaXR5T3B0aW9uc1t2YWx1ZV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIHJldHVybiA8cD57Y2l0eU9wdGlvbnNbdmFsdWVdfTwvcD47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiA8cD57SlNPTi5zdHJpbmdpZnkoY2l0eU9wdGlvbnNbdmFsdWVdKX08L3A+O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0pfSAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==