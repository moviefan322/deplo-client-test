"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./features/auth/authSlice.ts":
/*!************************************!*\
  !*** ./features/auth/authSlice.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isToken: function() { return /* binding */ isToken; },\n/* harmony export */   logout: function() { return /* binding */ logout; },\n/* harmony export */   setCredentials: function() { return /* binding */ setCredentials; },\n/* harmony export */   setNewData: function() { return /* binding */ setNewData; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authActions */ \"./features/auth/authActions.ts\");\n\n\nlet token;\nif (typeof localStorage !== \"undefined\") {\n    var _localStorage_getItem;\n    token = (_localStorage_getItem = localStorage.getItem(\"spanishtoken\")) !== null && _localStorage_getItem !== void 0 ? _localStorage_getItem : null;\n}\nconst initialState = {\n    loading: false,\n    user: null,\n    flashcards: null,\n    stats: null,\n    token,\n    error: null,\n    success: false,\n    isLoggedIn: false,\n    isNewData: false\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        logout: (state)=>{\n            console.log(\"logging out\");\n            localStorage.removeItem(\"spanishtoken\");\n            state.loading = false;\n            state.user = null;\n            state.token = null;\n            state.error = null;\n            state.stats = null;\n            state.flashcards = null;\n            state.isLoggedIn = false;\n            state.isNewData = true;\n        },\n        setCredentials: (state, param)=>{\n            let { payload  } = param;\n            console.log(\"setcredent\", payload);\n            if (payload) {\n                state.loading = false;\n                state.user = payload.user;\n                state.flashcards = payload.user.flashcards;\n                state.stats = payload.user.stats;\n                state.isLoggedIn = true;\n            }\n        },\n        setNewData: (state, param)=>{\n            let { payload  } = param;\n            state.isNewData = payload;\n        },\n        isToken: (state)=>{\n            if (state.token) {\n                state.isLoggedIn = true;\n            }\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.registerUser.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.registerUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.user = payload.currentUser;\n            state.flashcards = payload.flashcards;\n            state.stats = payload.stats;\n            state.token = payload.access_token;\n            state.isLoggedIn = true;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.registerUser.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.loginUser.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.loginUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.user = payload.user;\n            state.flashcards = payload.user.flashcards;\n            state.stats = payload.user.stats;\n            state.token = payload.access_token;\n            state.isLoggedIn = true;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.loginUser.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.updateScore.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.updateScore.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.isNewData = true;\n            state.error = null;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.updateScore.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.postScore.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.postScore.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.isNewData = true;\n            state.error = null;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.postScore.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.createFlashcard.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.createFlashcard.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.isNewData = true;\n            state.error = null;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.createFlashcard.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        });\n    }\n});\nconst { logout , setCredentials , setNewData , isToken  } = authSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXLENBQUNaO2dCQUFPLEVBQUVLLFFBQU8sRUFBRTtZQUNyREwsTUFBTVosVUFBVTtZQUNoQlksTUFBTVAsVUFBVTtZQUNoQk8sTUFBTUwsWUFBWTtZQUNsQkssTUFBTVIsUUFBUTtRQUNoQixHQUNDa0IsUUFBUTNCLHlEQUFlQSxDQUFDZ0MsVUFBVSxDQUFDZjtnQkFBTyxFQUFFSyxRQUFPLEVBQUU7WUFDcERMLE1BQU1aLFVBQVU7WUFDaEJZLE1BQU1SLFFBQVFhO1lBQ2RMLE1BQU1QLFVBQVU7UUFDbEI7SUFDSjtBQUNGO0FBRU8sTUFBTSxFQUFFTSxPQUFNLEVBQUVLLGVBQWMsRUFBRUUsV0FBVSxFQUFFQyxRQUFPLEVBQUUsR0FDMURYLFVBQVVvQixRQUFRO0FBQ3BCLCtEQUFlcEIsVUFBVXFCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UudHM/MDAyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQge1xuICByZWdpc3RlclVzZXIsXG4gIGxvZ2luVXNlcixcbiAgdXBkYXRlU2NvcmUsXG4gIHBvc3RTY29yZSxcbiAgY3JlYXRlRmxhc2hjYXJkLFxufSBmcm9tIFwiLi9hdXRoQWN0aW9uc1wiO1xuaW1wb3J0IEF1dGhTdGF0ZSBmcm9tIFwiLi4vLi4vdHlwZXMvQXV0aFN0YXRlXCI7XG5cbmxldCB0b2tlbjtcbmlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGFuaXNodG9rZW5cIikgPz8gbnVsbDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBdXRoU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICB1c2VyOiBudWxsLFxuICBmbGFzaGNhcmRzOiBudWxsLFxuICBzdGF0czogbnVsbCxcbiAgdG9rZW4sXG4gIGVycm9yOiBudWxsLFxuICBzdWNjZXNzOiBmYWxzZSxcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGlzTmV3RGF0YTogZmFsc2UsXG59O1xuXG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYXV0aFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBvdXRcIik7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNwYW5pc2h0b2tlblwiKTtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgICAgc3RhdGUudG9rZW4gPSBudWxsO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgc3RhdGUuc3RhdHMgPSBudWxsO1xuICAgICAgc3RhdGUuZmxhc2hjYXJkcyA9IG51bGw7XG4gICAgICBzdGF0ZS5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICBzdGF0ZS5pc05ld0RhdGEgPSB0cnVlO1xuICAgIH0sXG4gICAgc2V0Q3JlZGVudGlhbHM6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2V0Y3JlZGVudFwiLCBwYXlsb2FkKTtcbiAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUudXNlciA9IHBheWxvYWQudXNlcjtcbiAgICAgICAgc3RhdGUuZmxhc2hjYXJkcyA9IHBheWxvYWQudXNlci5mbGFzaGNhcmRzO1xuICAgICAgICBzdGF0ZS5zdGF0cyA9IHBheWxvYWQudXNlci5zdGF0cztcbiAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXROZXdEYXRhOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzdGF0ZS5pc05ld0RhdGEgPSBwYXlsb2FkO1xuICAgIH0sXG4gICAgaXNUb2tlbjogKHN0YXRlKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudG9rZW4pIHtcbiAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShyZWdpc3RlclVzZXIucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShcbiAgICAgICAgcmVnaXN0ZXJVc2VyLmZ1bGZpbGxlZCxcbiAgICAgICAgKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxhbnk+KSA9PiB7XG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIHN0YXRlLnVzZXIgPSBwYXlsb2FkLmN1cnJlbnRVc2VyO1xuICAgICAgICAgIHN0YXRlLmZsYXNoY2FyZHMgPSBwYXlsb2FkLmZsYXNoY2FyZHM7XG4gICAgICAgICAgc3RhdGUuc3RhdHMgPSBwYXlsb2FkLnN0YXRzO1xuICAgICAgICAgIHN0YXRlLnRva2VuID0gcGF5bG9hZC5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5hZGRDYXNlKHJlZ2lzdGVyVXNlci5yZWplY3RlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gcGF5bG9hZDtcbiAgICAgICAgc3RhdGUuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ2luVXNlci5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgICAgc3RhdGUuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ2luVXNlci5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUudXNlciA9IHBheWxvYWQudXNlcjtcbiAgICAgICAgc3RhdGUuZmxhc2hjYXJkcyA9IHBheWxvYWQudXNlci5mbGFzaGNhcmRzO1xuICAgICAgICBzdGF0ZS5zdGF0cyA9IHBheWxvYWQudXNlci5zdGF0cztcbiAgICAgICAgc3RhdGUudG9rZW4gPSBwYXlsb2FkLmFjY2Vzc190b2tlbjtcbiAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UobG9naW5Vc2VyLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UodXBkYXRlU2NvcmUucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZSh1cGRhdGVTY29yZS5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuaXNOZXdEYXRhID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKHVwZGF0ZVNjb3JlLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UocG9zdFNjb3JlLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UocG9zdFNjb3JlLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5pc05ld0RhdGEgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UocG9zdFNjb3JlLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoY3JlYXRlRmxhc2hjYXJkLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoY3JlYXRlRmxhc2hjYXJkLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5pc05ld0RhdGEgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoY3JlYXRlRmxhc2hjYXJkLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBsb2dvdXQsIHNldENyZWRlbnRpYWxzLCBzZXROZXdEYXRhLCBpc1Rva2VuIH0gPVxuICBhdXRoU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGF1dGhTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwicmVnaXN0ZXJVc2VyIiwibG9naW5Vc2VyIiwidXBkYXRlU2NvcmUiLCJwb3N0U2NvcmUiLCJjcmVhdGVGbGFzaGNhcmQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwidXNlciIsImZsYXNoY2FyZHMiLCJzdGF0cyIsImVycm9yIiwic3VjY2VzcyIsImlzTG9nZ2VkSW4iLCJpc05ld0RhdGEiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dvdXQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVJdGVtIiwic2V0Q3JlZGVudGlhbHMiLCJwYXlsb2FkIiwic2V0TmV3RGF0YSIsImlzVG9rZW4iLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiY3VycmVudFVzZXIiLCJhY2Nlc3NfdG9rZW4iLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/auth/authSlice.ts\n"));

/***/ })

});