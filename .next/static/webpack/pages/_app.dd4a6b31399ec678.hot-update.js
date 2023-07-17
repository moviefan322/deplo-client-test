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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFlashcard: function() { return /* binding */ createFlashcard; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   postScore: function() { return /* binding */ postScore; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   updateScore: function() { return /* binding */ updateScore; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nlet backendUrl;\nbackendUrl = \"https://spanish-app322-ef32a65d357f.herokuapp.com\";\nconst config = {\n    headers: {\n        \"Content-Type\": \"application/json\",\n        authorization: \"Bearer \".concat(token)\n    }\n};\nif (true) {\n    var token = localStorage.getItem(\"spanishtoken\");\n}\nconst registerUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/registerUser\", async (param, param1)=>{\n    let { username , email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signup\"), {\n            username,\n            email,\n            password\n        }, config);\n        if (res.status === 201 && email && password) {\n            const data = await loginReq(email, password);\n            console.log(\"data\", data);\n            return data;\n        }\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/loginUser\", async (param, param1)=>{\n    let { email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signin\"), {\n            email,\n            password\n        }, config);\n        const { data  } = response;\n        localStorage.setItem(\"spanishtoken\", data.access_token);\n        console.log(data);\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst updateScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/updateScore\", async (updateScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const { id , score , lessonId , outOf , userId  } = updateScoreData;\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"\".concat(backendUrl, \"/stats/\").concat(id), {\n            id,\n            score,\n            lessonId,\n            outOf,\n            userId\n        }, config);\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst postScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/postScore\", async (postScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/stats\"), postScoreData, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                authorization: \"Bearer \".concat(token)\n            }\n        });\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst createFlashcard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/createFlashcard\", async (flashcard, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/flashcards\"), flashcard, config);\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginReq = async (email, password)=>{\n    const config = {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/login\"), {\n        email,\n        password\n    }, config);\n    const { data  } = response;\n    localStorage.setItem(\"spanishtoken\", data.access_token);\n    return data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWN0aW9ucy50cz9hYmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbkRhdGEgZnJvbSBcIi4uLy4uL3R5cGVzL1JlZ2lzdHJhdGlvbkRhdGFcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi90eXBlcy9Vc2VyXCI7XG5pbXBvcnQgTG9naW5EYXRhIGZyb20gXCIuLi8uLi90eXBlcy9Mb2dpbkRhdGFcIjtcbmltcG9ydCBMb2dpblJlcyBmcm9tIFwiLi4vLi4vdHlwZXMvTG9naW5SZXNcIjtcbmltcG9ydCBVcGRhdGVTY29yZURhdGEgZnJvbSBcIi4uLy4uL3R5cGVzL1VwZGF0ZVNjb3JlRGF0YVwiO1xuaW1wb3J0IFBvc3RTY29yZURhdGEgZnJvbSBcIi4uLy4uL3R5cGVzL1Bvc3RTY29yZURhdGFcIjtcbmltcG9ydCBQb3N0Rmxhc2hjYXJkIGZyb20gXCIuLi8uLi90eXBlcy9Qb3N0Rmxhc2hjYXJkXCI7XG5cbmxldCBiYWNrZW5kVXJsOiBzdHJpbmc7XG5iYWNrZW5kVXJsID0gXCJodHRwczovL3NwYW5pc2gtYXBwMzIyLWVmMzJhNjVkMzU3Zi5oZXJva3VhcHAuY29tXCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICB9LFxufTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BhbmlzaHRva2VuXCIpO1xufVxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyLCBSZWdpc3RyYXRpb25EYXRhPihcbiAgXCJhdXRoL3JlZ2lzdGVyVXNlclwiLFxuICBhc3luYyAoeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0sIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYCR7YmFja2VuZFVybH0vYXV0aC9zaWdudXBgLFxuICAgICAgICB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICAgICAgY29uZmlnXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxICYmIGVtYWlsICYmIHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2dpblJlcShlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBjcmVhdGVBc3luY1RodW5rPExvZ2luUmVzLCBMb2dpbkRhdGE+KFxuICBcImF1dGgvbG9naW5Vc2VyXCIsXG4gIGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9LCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYCR7YmFja2VuZFVybH0vYXV0aC9zaWduaW5gLFxuICAgICAgICB7IGVtYWlsLCBwYXNzd29yZCB9LFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwYW5pc2h0b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2NvcmUgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImF1dGgvdXBkYXRlU2NvcmVcIixcbiAgYXN5bmMgKHVwZGF0ZVNjb3JlRGF0YTogVXBkYXRlU2NvcmVEYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgaWQsIHNjb3JlLCBsZXNzb25JZCwgb3V0T2YsIHVzZXJJZCB9ID0gdXBkYXRlU2NvcmVEYXRhO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KFxuICAgICAgICBgJHtiYWNrZW5kVXJsfS9zdGF0cy8ke2lkfWAsXG4gICAgICAgIHsgaWQsIHNjb3JlLCBsZXNzb25JZCwgb3V0T2YsIHVzZXJJZCB9LFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHBvc3RTY29yZSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiYXV0aC9wb3N0U2NvcmVcIixcbiAgYXN5bmMgKHBvc3RTY29yZURhdGE6IFBvc3RTY29yZURhdGEsIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYWNrZW5kVXJsfS9zdGF0c2AsIHBvc3RTY29yZURhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZsYXNoY2FyZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiYXV0aC9jcmVhdGVGbGFzaGNhcmRcIixcbiAgYXN5bmMgKGZsYXNoY2FyZDogUG9zdEZsYXNoY2FyZCwgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBgJHtiYWNrZW5kVXJsfS9mbGFzaGNhcmRzYCxcbiAgICAgICAgZmxhc2hjYXJkLFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuKTtcblxuY29uc3QgbG9naW5SZXEgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIGAke2JhY2tlbmRVcmx9L2F1dGgvbG9naW5gLFxuICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgY29uZmlnXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGFuaXNodG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVBc3luY1RodW5rIiwiYmFja2VuZFVybCIsImNvbmZpZyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVnaXN0ZXJVc2VyIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVqZWN0V2l0aFZhbHVlIiwicmVzIiwicG9zdCIsInN0YXR1cyIsImRhdGEiLCJsb2dpblJlcSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsImxvZ2luVXNlciIsInNldEl0ZW0iLCJhY2Nlc3NfdG9rZW4iLCJ1cGRhdGVTY29yZSIsInVwZGF0ZVNjb3JlRGF0YSIsImlkIiwic2NvcmUiLCJsZXNzb25JZCIsIm91dE9mIiwidXNlcklkIiwicHV0IiwicG9zdFNjb3JlIiwicG9zdFNjb3JlRGF0YSIsImNyZWF0ZUZsYXNoY2FyZCIsImZsYXNoY2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/auth/authActions.ts\n"));

/***/ })

});