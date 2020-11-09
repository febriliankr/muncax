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

  fetch('/api/cities').then(function (response) {
    return response.json();
  }).then(function (commits) {
    return alert(commits[0].author.login);
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
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
      children: JSON.stringify(cityOptions)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInVzZVN0YXRlIiwiY2l0eU9wdGlvbnMiLCJzZXRDaXR5T3B0aW9ucyIsIm9wdCIsInNldE9wdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbW1pdHMiLCJhbGVydCIsImF1dGhvciIsImxvZ2luIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsRUFBRCxDQUQzQjtBQUFBLE1BQ1pDLFdBRFk7QUFBQSxNQUNDQyxjQUREOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRVpHLEdBRlk7QUFBQSxNQUVQQyxNQUZPOztBQUduQkMsT0FBSyxDQUFDLGFBQUQsQ0FBTCxDQUNDQyxJQURELENBQ00sVUFBQUMsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FEZCxFQUVDRixJQUZELENBRU0sVUFBQUcsT0FBTztBQUFBLFdBQUlDLEtBQUssQ0FBQ0QsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxNQUFYLENBQWtCQyxLQUFuQixDQUFUO0FBQUEsR0FGYjtBQUlBLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQUVDLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FEYyxFQUVkO0FBQUVELFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FGYyxFQUdkO0FBQUVELFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUU7QUFBM0IsR0FIYyxDQUFoQixDQVBtQixDQWFuQjtBQUVBOztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBUSxhQUFPLEVBQUVGLE9BQWpCO0FBQTBCLGlCQUFXLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBTUcsSUFBSSxDQUFDQyxTQUFMLENBQWVoQixXQUFmO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBL0JRRixTOztLQUFBQSxTO0FBaUNNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYWNmNTZkNDExMDU1MGFiNTU1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXIoKSB7XHJcbiAgY29uc3QgW2NpdHlPcHRpb25zLCBzZXRDaXR5T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wdCwgc2V0T3B0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBmZXRjaCgnL2FwaS9jaXRpZXMnKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbihjb21taXRzID0+IGFsZXJ0KGNvbW1pdHNbMF0uYXV0aG9yLmxvZ2luKSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiBcIlNhbGF0aWdhXCIsIGxhYmVsOiBcIlNhbGF0aWdhXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiU2VtYXJhbmdcIiwgbGFiZWw6IFwiU2VtYXJhbmdcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJVbmdhcmFuXCIsIGxhYmVsOiBcIlVuZ2FyYW5cIiB9LFxyXG4gIF07XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHJldHVybk9wdGlvbnMoKSB7XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyX19jb250YWluZXJcIj5cclxuICAgICAgPFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj1cIkNhcmkgcGVueWV3YSBiZXJkYXNhcmthbiBsb2thc2lcIiAvPlxyXG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShjaXR5T3B0aW9ucyl9PC9wcmU+XHJcbiAgICAgIHsvKiB7T2JqZWN0LmtleXMoY2l0eU9wdGlvbnMpLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGNpdHlPcHRpb25zW3ZhbHVlXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgcmV0dXJuIDxwPntjaXR5T3B0aW9uc1t2YWx1ZV19PC9wPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIDxwPntKU09OLnN0cmluZ2lmeShjaXR5T3B0aW9uc1t2YWx1ZV0pfTwvcD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSl9ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9