"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/results",{

/***/ "./pages/results.tsx":
/*!***************************!*\
  !*** ./pages/results.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/spinner/spinner */ \"./components/spinner/spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction results() {\n    _s();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.auth.stats);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.auth.loading);\n    console.log(\"state\", state);\n    if (loading || !state) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    console.log(state.forEach());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to the Results Page\"\n            }, void 0, false, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Here are your results:\"\n            }, void 0, false, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            state.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            item.lessonId,\n                            \" - \",\n                            item.score,\n                            \"/\",\n                            item.outOf\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Total Points: \",\n                    state.filter((lesson)=>{\n                        lesson.score;\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(results, \"j/Ei4ohU27UBpKcAesJxJVfZW2I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (results);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ1M7QUFFbkQsU0FBU0U7O0lBQ1AsTUFBTUMsUUFBUUgsd0RBQVdBLENBQUMsQ0FBQ0csUUFBZUEsTUFBTUMsS0FBS0M7SUFDckQsTUFBTUMsVUFBVU4sd0RBQVdBLENBQUMsQ0FBQ0csUUFBZUEsTUFBTUMsS0FBS0U7SUFFdkRDLFFBQVFDLElBQUksU0FBU0w7SUFFckIsSUFBSUcsV0FBVyxDQUFDSCxPQUFPO1FBQ3JCLHFCQUNFO3NCQUNFLDRFQUFDRixtRUFBT0E7Ozs7OztJQUdkO0lBRUFNLFFBQVFDLElBQUlMLE1BQU1NO0lBRWxCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFQsTUFBTVUsSUFBSSxDQUFDQyxNQUFXQztnQkFDckIscUJBQ0UsOERBQUNMOzhCQUNDLDRFQUFDTTs7NEJBQUdGLEtBQUtHOzRCQUFTOzRCQUFJSCxLQUFLSTs0QkFBTTs0QkFBRUosS0FBS0s7Ozs7Ozs7bUJBRGhDSjs7Ozs7WUFJZDswQkFDQSw4REFBQ0M7O29CQUFFO29CQUFlYixNQUFNaUIsT0FBTyxDQUFDQzt3QkFBWUEsT0FBT0g7b0JBQUs7Ozs7Ozs7Ozs7Ozs7QUFHOUQ7R0E5QlNoQjs7UUFDT0Ysb0RBQVdBO1FBQ1RBLG9EQUFXQTs7O0FBOEI3QiwrREFBZUUsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXN1bHRzLnRzeD81NjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiQC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lclwiO1xuXG5mdW5jdGlvbiByZXN1bHRzKCkge1xuICBjb25zdCBzdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hdXRoLnN0YXRzKTtcbiAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hdXRoLmxvYWRpbmcpO1xuXG4gIGNvbnNvbGUubG9nKFwic3RhdGVcIiwgc3RhdGUpO1xuXG4gIGlmIChsb2FkaW5nIHx8ICFzdGF0ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHN0YXRlLmZvckVhY2goKSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+V2VsY29tZSB0byB0aGUgUmVzdWx0cyBQYWdlPC9oMT5cbiAgICAgIDxoMj5IZXJlIGFyZSB5b3VyIHJlc3VsdHM6PC9oMj5cbiAgICAgIHtzdGF0ZS5tYXAoKGl0ZW06IGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHA+e2l0ZW0ubGVzc29uSWR9IC0ge2l0ZW0uc2NvcmV9L3tpdGVtLm91dE9mfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPHA+VG90YWwgUG9pbnRzOiB7c3RhdGUuZmlsdGVyKChsZXNzb24pID0+IHtsZXNzb24uc2NvcmV9KX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3VsdHM7XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJTcGlubmVyIiwicmVzdWx0cyIsInN0YXRlIiwiYXV0aCIsInN0YXRzIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZGl2IiwiaDEiLCJoMiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInAiLCJsZXNzb25JZCIsInNjb3JlIiwib3V0T2YiLCJmaWx0ZXIiLCJsZXNzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/results.tsx\n"));

/***/ })

});