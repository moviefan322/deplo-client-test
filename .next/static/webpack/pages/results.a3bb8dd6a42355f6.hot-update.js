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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/spinner/spinner */ \"./components/spinner/spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction results() {\n    _s();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.auth.stats);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.auth.loading);\n    console.log(\"state\", state);\n    if (loading || !state) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"{styles.results}\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to the Results Page\"\n            }, void 0, false, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Here are your results:\"\n            }, void 0, false, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            state.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            item.lessonId,\n                            \" - \",\n                            item.score,\n                            \"/\",\n                            item.outOf\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Total Points:\",\n                    \" \",\n                    state.reduce((acc, item)=>{\n                        return acc + item.score;\n                    }, 0),\n                    \"/\",\n                    state.reduce((acc, item)=>{\n                        return acc + item.outOf;\n                    }, 0)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Accuracy:\",\n                    \" \",\n                    (state.reduce((acc, item)=>{\n                        return acc + item.score;\n                    }, 0) / state.reduce((acc, item)=>{\n                        return acc + item.outOf;\n                    }, 0)).toFixed(2).slice(2),\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/heimakte/code/deplo-client-test/pages/results.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(results, \"j/Ei4ohU27UBpKcAesJxJVfZW2I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (results);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ1M7QUFFbkQsU0FBU0U7O0lBQ1AsTUFBTUMsUUFBUUgsd0RBQVdBLENBQUMsQ0FBQ0csUUFBZUEsTUFBTUMsS0FBS0M7SUFDckQsTUFBTUMsVUFBVU4sd0RBQVdBLENBQUMsQ0FBQ0csUUFBZUEsTUFBTUMsS0FBS0U7SUFFdkRDLFFBQVFDLElBQUksU0FBU0w7SUFFckIsSUFBSUcsV0FBVyxDQUFDSCxPQUFPO1FBQ3JCLHFCQUNFO3NCQUNFLDRFQUFDRixtRUFBT0E7Ozs7OztJQUdkO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hULE1BQU1VLElBQUksQ0FBQ0MsTUFBV0M7Z0JBQ3JCLHFCQUNFLDhEQUFDTjs4QkFDQyw0RUFBQ087OzRCQUNFRixLQUFLRzs0QkFBUzs0QkFBSUgsS0FBS0k7NEJBQU07NEJBQUVKLEtBQUtLOzs7Ozs7O21CQUYvQko7Ozs7O1lBTWQ7MEJBQ0EsOERBQUNDOztvQkFBRTtvQkFDYTtvQkFDYmIsTUFBTWlCLE9BQU8sQ0FBQ0MsS0FBYVA7d0JBQzFCLE9BQU9PLE1BQU1QLEtBQUtJO29CQUNwQixHQUFHO29CQUFHO29CQUVMZixNQUFNaUIsT0FBTyxDQUFDQyxLQUFhUDt3QkFDMUIsT0FBT08sTUFBTVAsS0FBS0s7b0JBQ3BCLEdBQUc7Ozs7Ozs7MEJBRUwsOERBQUNIOztvQkFBRTtvQkFDUztvQkFFUmIsQ0FBQUEsTUFBTWlCLE9BQU8sQ0FBQ0MsS0FBYVA7d0JBQ3pCLE9BQU9PLE1BQU1QLEtBQUtJO29CQUNwQixHQUFHLEtBQ0hmLE1BQU1pQixPQUFPLENBQUNDLEtBQWFQO3dCQUN6QixPQUFPTyxNQUFNUCxLQUFLSztvQkFDcEIsR0FBRyxFQUFDLEVBQ0pHLFFBQVEsR0FBR0MsTUFBTTtvQkFBRzs7Ozs7Ozs7Ozs7OztBQUs5QjtHQW5EU3JCOztRQUNPRixvREFBV0E7UUFDVEEsb0RBQVdBOzs7QUFtRDdCLCtEQUFlRSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc3VsdHMudHN4PzU2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyXCI7XG5cbmZ1bmN0aW9uIHJlc3VsdHMoKSB7XG4gIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGguc3RhdHMpO1xuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgubG9hZGluZyk7XG5cbiAgY29uc29sZS5sb2coXCJzdGF0ZVwiLCBzdGF0ZSk7XG5cbiAgaWYgKGxvYWRpbmcgfHwgIXN0YXRlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIntzdHlsZXMucmVzdWx0c31cIj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBSZXN1bHRzIFBhZ2U8L2gxPlxuICAgICAgPGgyPkhlcmUgYXJlIHlvdXIgcmVzdWx0czo8L2gyPlxuICAgICAge3N0YXRlLm1hcCgoaXRlbTogYW55LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2l0ZW0ubGVzc29uSWR9IC0ge2l0ZW0uc2NvcmV9L3tpdGVtLm91dE9mfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8cD5cbiAgICAgICAgVG90YWwgUG9pbnRzOntcIiBcIn1cbiAgICAgICAge3N0YXRlLnJlZHVjZSgoYWNjOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhY2MgKyBpdGVtLnNjb3JlO1xuICAgICAgICB9LCAwKX1cbiAgICAgICAgL1xuICAgICAgICB7c3RhdGUucmVkdWNlKChhY2M6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFjYyArIGl0ZW0ub3V0T2Y7XG4gICAgICAgIH0sIDApfVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEFjY3VyYWN5OntcIiBcIn1cbiAgICAgICAgeyhcbiAgICAgICAgICBzdGF0ZS5yZWR1Y2UoKGFjYzogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY2MgKyBpdGVtLnNjb3JlO1xuICAgICAgICAgIH0sIDApIC9cbiAgICAgICAgICBzdGF0ZS5yZWR1Y2UoKGFjYzogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY2MgKyBpdGVtLm91dE9mO1xuICAgICAgICAgIH0sIDApXG4gICAgICAgICkudG9GaXhlZCgyKS5zbGljZSgyKX1cbiAgICAgICAgJVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXN1bHRzO1xuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiU3Bpbm5lciIsInJlc3VsdHMiLCJzdGF0ZSIsImF1dGgiLCJzdGF0cyIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInAiLCJsZXNzb25JZCIsInNjb3JlIiwib3V0T2YiLCJyZWR1Y2UiLCJhY2MiLCJ0b0ZpeGVkIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/results.tsx\n"));

/***/ })

});