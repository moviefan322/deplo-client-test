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

/***/ "./features/auth/authActions.ts":
/*!**************************************!*\
  !*** ./features/auth/authActions.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFlashcard: function() { return /* binding */ createFlashcard; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   postScore: function() { return /* binding */ postScore; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   updateScore: function() { return /* binding */ updateScore; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nlet backendUrl;\nbackendUrl = \"https://spanish-app322-ef32a65d357f.herokuapp.com\";\nlet config = {\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n};\nif (true) {\n    var token = localStorage.getItem(\"spanishtoken\");\n}\nconst registerUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/registerUser\", async (param, param1)=>{\n    let { username , email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signup\"), {\n            username,\n            email,\n            password\n        }, config);\n        if (res.status === 201 && email && password) {\n            const data = await loginReq(email, password);\n            console.log(\"data\", data);\n            return data;\n        }\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/loginUser\", async (param, param1)=>{\n    let { email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signin\"), {\n            email,\n            password\n        }, config);\n        const { data  } = response;\n        localStorage.setItem(\"spanishtoken\", data.access_token);\n        console.log(data);\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst updateScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/updateScore\", async (updateScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const { id , score , lessonId , outOf , userId  } = updateScoreData;\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"\".concat(backendUrl, \"/stats/\").concat(id), {\n            id,\n            score,\n            lessonId,\n            outOf,\n            userId\n        }, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                authorization: \"Bearer \".concat(token)\n            }\n        });\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst postScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/postScore\", async (postScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/stats\"), postScoreData, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                authorization: \"Bearer \".concat(token)\n            }\n        });\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst createFlashcard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/createFlashcard\", async (flashcard, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/flashcards\"), flashcard, config);\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginReq = async (email, password)=>{\n    const config = {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/login\"), {\n        email,\n        password\n    }, config);\n    const { data  } = response;\n    localStorage.setItem(\"spanishtoken\", data.access_token);\n    return data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvYXV0aC9hdXRoQWN0aW9ucy50cz9hYmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbkRhdGEgZnJvbSBcIi4uLy4uL3R5cGVzL1JlZ2lzdHJhdGlvbkRhdGFcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi90eXBlcy9Vc2VyXCI7XG5pbXBvcnQgTG9naW5EYXRhIGZyb20gXCIuLi8uLi90eXBlcy9Mb2dpbkRhdGFcIjtcbmltcG9ydCBMb2dpblJlcyBmcm9tIFwiLi4vLi4vdHlwZXMvTG9naW5SZXNcIjtcbmltcG9ydCBVcGRhdGVTY29yZURhdGEgZnJvbSBcIi4uLy4uL3R5cGVzL1VwZGF0ZVNjb3JlRGF0YVwiO1xuaW1wb3J0IFBvc3RTY29yZURhdGEgZnJvbSBcIi4uLy4uL3R5cGVzL1Bvc3RTY29yZURhdGFcIjtcbmltcG9ydCBQb3N0Rmxhc2hjYXJkIGZyb20gXCIuLi8uLi90eXBlcy9Qb3N0Rmxhc2hjYXJkXCI7XG5cbmxldCBiYWNrZW5kVXJsOiBzdHJpbmc7XG5iYWNrZW5kVXJsID0gXCJodHRwczovL3NwYW5pc2gtYXBwMzIyLWVmMzJhNjVkMzU3Zi5oZXJva3VhcHAuY29tXCI7XG5cbmxldCBjb25maWcgPSB7XG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSxcbn07XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwYW5pc2h0b2tlblwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGNyZWF0ZUFzeW5jVGh1bms8VXNlciwgUmVnaXN0cmF0aW9uRGF0YT4oXG4gIFwiYXV0aC9yZWdpc3RlclVzZXJcIixcbiAgYXN5bmMgKHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9LCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke2JhY2tlbmRVcmx9L2F1dGgvc2lnbnVwYCxcbiAgICAgICAgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcblxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSAmJiBlbWFpbCAmJiBwYXNzd29yZCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbG9naW5SZXEoZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gY3JlYXRlQXN5bmNUaHVuazxMb2dpblJlcywgTG9naW5EYXRhPihcbiAgXCJhdXRoL2xvZ2luVXNlclwiLFxuICBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSwgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke2JhY2tlbmRVcmx9L2F1dGgvc2lnbmluYCxcbiAgICAgICAgeyBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICAgICAgY29uZmlnXG4gICAgICApO1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGFuaXNodG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjb3JlID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdXRoL3VwZGF0ZVNjb3JlXCIsXG4gIGFzeW5jICh1cGRhdGVTY29yZURhdGE6IFVwZGF0ZVNjb3JlRGF0YSwgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGlkLCBzY29yZSwgbGVzc29uSWQsIG91dE9mLCB1c2VySWQgfSA9IHVwZGF0ZVNjb3JlRGF0YTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChcbiAgICAgICAgYCR7YmFja2VuZFVybH0vc3RhdHMvJHtpZH1gLFxuICAgICAgICB7IGlkLCBzY29yZSwgbGVzc29uSWQsIG91dE9mLCB1c2VySWQgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgcG9zdFNjb3JlID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdXRoL3Bvc3RTY29yZVwiLFxuICBhc3luYyAocG9zdFNjb3JlRGF0YTogUG9zdFNjb3JlRGF0YSwgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2JhY2tlbmRVcmx9L3N0YXRzYCwgcG9zdFNjb3JlRGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRmxhc2hjYXJkID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdXRoL2NyZWF0ZUZsYXNoY2FyZFwiLFxuICBhc3luYyAoZmxhc2hjYXJkOiBQb3N0Rmxhc2hjYXJkLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke2JhY2tlbmRVcmx9L2ZsYXNoY2FyZHNgLFxuICAgICAgICBmbGFzaGNhcmQsXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5jb25zdCBsb2dpblJlcSA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYCR7YmFja2VuZFVybH0vYXV0aC9sb2dpbmAsXG4gICAgeyBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICBjb25maWdcbiAgKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwYW5pc2h0b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XG4gIHJldHVybiBkYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJiYWNrZW5kVXJsIiwiY29uZmlnIiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJlamVjdFdpdGhWYWx1ZSIsInJlcyIsInBvc3QiLCJzdGF0dXMiLCJkYXRhIiwibG9naW5SZXEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJsb2dpblVzZXIiLCJzZXRJdGVtIiwiYWNjZXNzX3Rva2VuIiwidXBkYXRlU2NvcmUiLCJ1cGRhdGVTY29yZURhdGEiLCJpZCIsInNjb3JlIiwibGVzc29uSWQiLCJvdXRPZiIsInVzZXJJZCIsInB1dCIsImF1dGhvcml6YXRpb24iLCJwb3N0U2NvcmUiLCJwb3N0U2NvcmVEYXRhIiwiY3JlYXRlRmxhc2hjYXJkIiwiZmxhc2hjYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/auth/authActions.ts\n"));

/***/ })

});