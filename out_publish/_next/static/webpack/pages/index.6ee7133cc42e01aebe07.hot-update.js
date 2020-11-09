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
    setOpt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInVzZVN0YXRlIiwiY2l0eU9wdGlvbnMiLCJzZXRDaXR5T3B0aW9ucyIsIm9wdCIsInNldE9wdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEVBQUQsQ0FEM0I7QUFBQSxNQUNaQyxXQURZO0FBQUEsTUFDQ0MsY0FERDs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVaRyxHQUZZO0FBQUEsTUFFUEMsTUFGTzs7QUFHbkJDLE9BQUssQ0FBQyxhQUFELENBQUwsQ0FBcUJDLElBQXJCLENBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUN0Q0EsWUFBUSxDQUFDQyxJQUFUO0FBQ0FKLFVBQU07QUFDUCxHQUhEO0FBS0EsTUFBTUssT0FBTyxHQUFHLENBQ2Q7QUFBRUMsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFNBQUssRUFBRTtBQUE1QixHQURjLEVBRWQ7QUFBRUQsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFNBQUssRUFBRTtBQUE1QixHQUZjLEVBR2Q7QUFBRUQsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQUhjLENBQWhCLENBUm1CLENBY25CO0FBRUE7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFRLGFBQU8sRUFBRUYsT0FBakI7QUFBMEIsaUJBQVcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFNRyxJQUFJLENBQUNDLFNBQUwsQ0FBZVosV0FBZjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQWhDUUYsUzs7S0FBQUEsUztBQWtDTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmVlNzEzM2NjNDJlMDFhZWJlMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoQmFyKCkge1xyXG4gIGNvbnN0IFtjaXR5T3B0aW9ucywgc2V0Q2l0eU9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcHQsIHNldE9wdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgZmV0Y2goXCIvYXBpL2NpdGllc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0T3B0XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiBcIlNhbGF0aWdhXCIsIGxhYmVsOiBcIlNhbGF0aWdhXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiU2VtYXJhbmdcIiwgbGFiZWw6IFwiU2VtYXJhbmdcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJVbmdhcmFuXCIsIGxhYmVsOiBcIlVuZ2FyYW5cIiB9LFxyXG4gIF07XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHJldHVybk9wdGlvbnMoKSB7XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyX19jb250YWluZXJcIj5cclxuICAgICAgPFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj1cIkNhcmkgcGVueWV3YSBiZXJkYXNhcmthbiBsb2thc2lcIiAvPlxyXG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShjaXR5T3B0aW9ucyl9PC9wcmU+XHJcbiAgICAgIHsvKiB7T2JqZWN0LmtleXMoY2l0eU9wdGlvbnMpLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGNpdHlPcHRpb25zW3ZhbHVlXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgcmV0dXJuIDxwPntjaXR5T3B0aW9uc1t2YWx1ZV19PC9wPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIDxwPntKU09OLnN0cmluZ2lmeShjaXR5T3B0aW9uc1t2YWx1ZV0pfTwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSl9ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9