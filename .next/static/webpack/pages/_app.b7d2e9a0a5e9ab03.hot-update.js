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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isToken: function() { return /* binding */ isToken; },\n/* harmony export */   logout: function() { return /* binding */ logout; },\n/* harmony export */   setCredentials: function() { return /* binding */ setCredentials; },\n/* harmony export */   setNewData: function() { return /* binding */ setNewData; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authActions */ \"./features/auth/authActions.ts\");\n\n\nlet token;\nif (typeof localStorage !== \"undefined\") {\n    var _localStorage_getItem;\n    token = (_localStorage_getItem = localStorage.getItem(\"spanishtoken\")) !== null && _localStorage_getItem !== void 0 ? _localStorage_getItem : null;\n}\nconst initialState = {\n    loading: false,\n    user: null,\n    flashcards: null,\n    stats: null,\n    token,\n    error: null,\n    success: false,\n    isLoggedIn: false,\n    isNewData: false\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        logout: (state)=>{\n            console.log(\"logging out\");\n            localStorage.removeItem(\"spanishtoken\");\n            state.loading = false;\n            state.user = null;\n            state.token = null;\n            state.error = null;\n            state.stats = null;\n            state.flashcards = null;\n            state.isLoggedIn = false;\n            state.isNewData = true;\n        },\n        setCredentials: (state, param)=>{\n            let { payload  } = param;\n            console.log(\"setcredent\", payload);\n            if (payload) {\n                state.loading = false;\n                state.user = payload.user;\n                state.flashcards = payload.user.flashcards;\n                state.stats = payload.stats;\n                state.isLoggedIn = true;\n            }\n        },\n        setNewData: (state, param)=>{\n            let { payload  } = param;\n            state.isNewData = payload;\n        },\n        isToken: (state)=>{\n            if (state.token) {\n                state.isLoggedIn = true;\n            }\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.registerUser.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.registerUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.user = payload.currentUser;\n            state.flashcards = payload.flashcards;\n            state.stats = payload.stats;\n            state.token = payload.access_token;\n            state.isLoggedIn = true;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.registerUser.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.loginUser.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.loginUser.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.user = payload.user;\n            state.flashcards = payload.user.flashcards;\n            state.stats = payload.user.stats;\n            state.token = payload.access_token;\n            state.isLoggedIn = true;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.loginUser.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.updateScore.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.updateScore.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.isNewData = true;\n            state.error = null;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.updateScore.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.postScore.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.postScore.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.isNewData = true;\n            state.error = null;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.postScore.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.createFlashcard.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n            state.success = false;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.createFlashcard.fulfilled, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.success = true;\n            state.isNewData = true;\n            state.error = null;\n        }).addCase(_authActions__WEBPACK_IMPORTED_MODULE_0__.createFlashcard.rejected, (state, param)=>{\n            let { payload  } = param;\n            state.loading = false;\n            state.error = payload;\n            state.success = false;\n        });\n    }\n});\nconst { logout , setCredentials , setNewData , isToken  } = authSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1o7Z0JBQU8sRUFBRUssUUFBTyxFQUFFO1lBQ3JETCxNQUFNWixVQUFVO1lBQ2hCWSxNQUFNUCxVQUFVO1lBQ2hCTyxNQUFNTCxZQUFZO1lBQ2xCSyxNQUFNUixRQUFRO1FBQ2hCLEdBQ0NrQixRQUFRM0IseURBQWVBLENBQUNnQyxVQUFVLENBQUNmO2dCQUFPLEVBQUVLLFFBQU8sRUFBRTtZQUNwREwsTUFBTVosVUFBVTtZQUNoQlksTUFBTVIsUUFBUWE7WUFDZEwsTUFBTVAsVUFBVTtRQUNsQjtJQUNKO0FBQ0Y7QUFFTyxNQUFNLEVBQUVNLE9BQU0sRUFBRUssZUFBYyxFQUFFRSxXQUFVLEVBQUVDLFFBQU8sRUFBRSxHQUMxRFgsVUFBVW9CLFFBQVE7QUFDcEIsK0RBQWVwQixVQUFVcUIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZS50cz8wMDJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7XG4gIHJlZ2lzdGVyVXNlcixcbiAgbG9naW5Vc2VyLFxuICB1cGRhdGVTY29yZSxcbiAgcG9zdFNjb3JlLFxuICBjcmVhdGVGbGFzaGNhcmQsXG59IGZyb20gXCIuL2F1dGhBY3Rpb25zXCI7XG5pbXBvcnQgQXV0aFN0YXRlIGZyb20gXCIuLi8uLi90eXBlcy9BdXRoU3RhdGVcIjtcblxubGV0IHRva2VuO1xuaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwYW5pc2h0b2tlblwiKSA/PyBudWxsO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEF1dGhTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIHVzZXI6IG51bGwsXG4gIGZsYXNoY2FyZHM6IG51bGwsXG4gIHN0YXRzOiBudWxsLFxuICB0b2tlbixcbiAgZXJyb3I6IG51bGwsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgaXNOZXdEYXRhOiBmYWxzZSxcbn07XG5cbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhdXRoXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJsb2dnaW5nIG91dFwiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic3BhbmlzaHRva2VuXCIpO1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUudXNlciA9IG51bGw7XG4gICAgICBzdGF0ZS50b2tlbiA9IG51bGw7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS5zdGF0cyA9IG51bGw7XG4gICAgICBzdGF0ZS5mbGFzaGNhcmRzID0gbnVsbDtcbiAgICAgIHN0YXRlLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgIHN0YXRlLmlzTmV3RGF0YSA9IHRydWU7XG4gICAgfSxcbiAgICBzZXRDcmVkZW50aWFsczogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzZXRjcmVkZW50XCIsIHBheWxvYWQpO1xuICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS51c2VyID0gcGF5bG9hZC51c2VyO1xuICAgICAgICBzdGF0ZS5mbGFzaGNhcmRzID0gcGF5bG9hZC51c2VyLmZsYXNoY2FyZHM7XG4gICAgICAgIHN0YXRlLnN0YXRzID0gcGF5bG9hZC5zdGF0cztcbiAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXROZXdEYXRhOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzdGF0ZS5pc05ld0RhdGEgPSBwYXlsb2FkO1xuICAgIH0sXG4gICAgaXNUb2tlbjogKHN0YXRlKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudG9rZW4pIHtcbiAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShyZWdpc3RlclVzZXIucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShcbiAgICAgICAgcmVnaXN0ZXJVc2VyLmZ1bGZpbGxlZCxcbiAgICAgICAgKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxhbnk+KSA9PiB7XG4gICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIHN0YXRlLnVzZXIgPSBwYXlsb2FkLmN1cnJlbnRVc2VyO1xuICAgICAgICAgIHN0YXRlLmZsYXNoY2FyZHMgPSBwYXlsb2FkLmZsYXNoY2FyZHM7XG4gICAgICAgICAgc3RhdGUuc3RhdHMgPSBwYXlsb2FkLnN0YXRzO1xuICAgICAgICAgIHN0YXRlLnRva2VuID0gcGF5bG9hZC5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5hZGRDYXNlKHJlZ2lzdGVyVXNlci5yZWplY3RlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gcGF5bG9hZDtcbiAgICAgICAgc3RhdGUuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ2luVXNlci5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgICAgc3RhdGUuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvZ2luVXNlci5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUudXNlciA9IHBheWxvYWQudXNlcjtcbiAgICAgICAgc3RhdGUuZmxhc2hjYXJkcyA9IHBheWxvYWQudXNlci5mbGFzaGNhcmRzO1xuICAgICAgICBzdGF0ZS5zdGF0cyA9IHBheWxvYWQudXNlci5zdGF0cztcbiAgICAgICAgc3RhdGUudG9rZW4gPSBwYXlsb2FkLmFjY2Vzc190b2tlbjtcbiAgICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UobG9naW5Vc2VyLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UodXBkYXRlU2NvcmUucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZSh1cGRhdGVTY29yZS5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuaXNOZXdEYXRhID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKHVwZGF0ZVNjb3JlLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UocG9zdFNjb3JlLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UocG9zdFNjb3JlLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5pc05ld0RhdGEgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UocG9zdFNjb3JlLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoY3JlYXRlRmxhc2hjYXJkLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoY3JlYXRlRmxhc2hjYXJkLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5pc05ld0RhdGEgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoY3JlYXRlRmxhc2hjYXJkLnJlamVjdGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBwYXlsb2FkO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBsb2dvdXQsIHNldENyZWRlbnRpYWxzLCBzZXROZXdEYXRhLCBpc1Rva2VuIH0gPVxuICBhdXRoU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGF1dGhTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwicmVnaXN0ZXJVc2VyIiwibG9naW5Vc2VyIiwidXBkYXRlU2NvcmUiLCJwb3N0U2NvcmUiLCJjcmVhdGVGbGFzaGNhcmQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwidXNlciIsImZsYXNoY2FyZHMiLCJzdGF0cyIsImVycm9yIiwic3VjY2VzcyIsImlzTG9nZ2VkSW4iLCJpc05ld0RhdGEiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dvdXQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVJdGVtIiwic2V0Q3JlZGVudGlhbHMiLCJwYXlsb2FkIiwic2V0TmV3RGF0YSIsImlzVG9rZW4iLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiY3VycmVudFVzZXIiLCJhY2Nlc3NfdG9rZW4iLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/auth/authSlice.ts\n"));

/***/ })

});