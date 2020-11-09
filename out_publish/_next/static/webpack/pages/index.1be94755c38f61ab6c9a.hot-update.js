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
    // console.log(e.key);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJrZXkiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBRW5CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkI7QUFDQSxRQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCSixZQUFNLENBQUNLLElBQVAsQ0FBWSxhQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTQyxZQUFULENBQXNCSCxDQUF0QixFQUF5QjtBQUN2QkksV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkwsQ0FBdEI7QUFDRDs7QUFFRCxNQUFNTSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRGMsRUFFZDtBQUFFRCxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFO0FBQXpCLEdBRmMsRUFHZDtBQUFFRCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsU0FBSyxFQUFFO0FBQTFCLEdBSGMsRUFJZDtBQUFFRCxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFO0FBQXpCLEdBSmMsQ0FBaEI7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsY0FBUSxFQUFFTCxZQURaO0FBRUUsZUFBUyxFQUFFSixZQUZiO0FBR0UsYUFBTyxFQUFFTyxPQUhYO0FBSUUsaUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FoQ1FWLFM7VUFFUUUscUQ7OztLQUZSRixTO0FBa0NNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmU5NDc1NWMzOGY2MWFiNmM5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoQmFyKCkge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS5rZXkpO1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9hcGkvY2l0aWVzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNIQU5HRVwiLCBlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiBcIkNhcnJpZXJcIiwgbGFiZWw6IFwiQ2FycmllclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIlRlbmRhXCIsIGxhYmVsOiBcIlRlbmRhXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTWF0cmFzXCIsIGxhYmVsOiBcIk1hdHJhc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkxhbXB1XCIsIGxhYmVsOiBcIkxhbXB1XCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXJfX2NvbnRhaW5lclwiPlxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBvbktleURvd249e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi8J+UjSBDYXJpIGJhcmFuZyB5YW5nIGFuZGEgYnV0dWhrYW4uLi5cIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9