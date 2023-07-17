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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFlashcard: function() { return /* binding */ createFlashcard; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   postScore: function() { return /* binding */ postScore; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   updateScore: function() { return /* binding */ updateScore; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nlet backendUrl;\nbackendUrl = \"https://spanish-app322-ef32a65d357f.herokuapp.com\";\nlet config = {\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n};\nif (true) {\n    const token1 = localStorage.getItem(\"spanishtoken\");\n}\nconst registerUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/registerUser\", async (param, param1)=>{\n    let { username , email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signup\"), {\n            username,\n            email,\n            password\n        }, config);\n        if (res.status === 201 && email && password) {\n            const data = await loginReq(email, password);\n            console.log(\"data\", data);\n            return data;\n        }\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/loginUser\", async (param, param1)=>{\n    let { email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signin\"), {\n            email,\n            password\n        }, config);\n        const { data  } = response;\n        localStorage.setItem(\"spanishtoken\", data.access_token);\n        console.log(data);\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst updateScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/updateScore\", async (updateScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const { id , score , lessonId , outOf , userId  } = updateScoreData;\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"\".concat(backendUrl, \"/stats\"), {\n            id,\n            score,\n            lessonId,\n            outOf,\n            userId\n        }, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                authorization: \"Bearer \".concat(token)\n            }\n        });\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst postScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/postScore\", async (postScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/stats\"), postScoreData, config);\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst createFlashcard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/createFlashcard\", async (flashcard, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3001/flashcards\", flashcard, config);\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginReq = async (email, password)=>{\n    const config = {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/login\"), {\n        email,\n        password\n    }, config);\n    const { data  } = response;\n    localStorage.setItem(\"spanishtoken\", data.access_token);\n    return data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxlQUNBakM7UUFHRixNQUFNLEVBQUVhLEtBQUksRUFBRSxHQUFHSDtRQUNqQixPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBWTtRQUNuQixJQUFJQSxNQUFNQyxZQUFZRCxNQUFNQyxTQUFTTCxLQUFLTSxTQUFTO1lBQ2pELE9BQU9WLGdCQUFnQlEsTUFBTUMsU0FBU0wsS0FBS007UUFDN0MsT0FBTztZQUNMLE9BQU9WLGdCQUFnQlEsTUFBTUU7UUFDL0I7SUFDRjtBQUNGLEdBQ0E7QUFFSyxNQUFNZSxrQkFBa0JwQyxrRUFBZ0JBLENBQzdDLHdCQUNBLE9BQU9xQztRQUEwQixFQUFFMUIsZ0JBQWUsRUFBRTtJQUNsRCxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNYixrREFBVWMsQ0FDMUIsb0NBQ0F3QixXQUNBbkM7UUFHRixNQUFNLEVBQUVhLEtBQUksRUFBRSxHQUFHSDtRQUNqQixPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBWTtRQUNuQixJQUFJQSxNQUFNQyxZQUFZRCxNQUFNQyxTQUFTTCxLQUFLTSxTQUFTO1lBQ2pELE9BQU9WLGdCQUFnQlEsTUFBTUMsU0FBU0wsS0FBS007UUFDN0MsT0FBTztZQUNMLE9BQU9WLGdCQUFnQlEsTUFBTUU7UUFDL0I7SUFDRjtBQUNGLEdBQ0E7QUFFRixNQUFNTCxXQUFXLE9BQU9QLE9BQWVDO0lBQ3JDLE1BQU1SLFNBQVM7UUFDYkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGO0lBQ0EsTUFBTWlCLFdBQVcsTUFBTXJCLGtEQUFVYyxDQUMvQixHQUFjLE9BQVhaLFlBQVcsZ0JBQ2Q7UUFBRVE7UUFBT0M7SUFBUyxHQUNsQlI7SUFHRixNQUFNLEVBQUVhLEtBQUksRUFBRSxHQUFHSztJQUNqQmYsYUFBYWtCLFFBQVEsZ0JBQWdCUixLQUFLUztJQUMxQyxPQUFPVDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZlYXR1cmVzL2F1dGgvYXV0aEFjdGlvbnMudHM/YWJkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBSZWdpc3RyYXRpb25EYXRhIGZyb20gXCIuLi8uLi90eXBlcy9SZWdpc3RyYXRpb25EYXRhXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vdHlwZXMvVXNlclwiO1xuaW1wb3J0IExvZ2luRGF0YSBmcm9tIFwiLi4vLi4vdHlwZXMvTG9naW5EYXRhXCI7XG5pbXBvcnQgTG9naW5SZXMgZnJvbSBcIi4uLy4uL3R5cGVzL0xvZ2luUmVzXCI7XG5pbXBvcnQgVXBkYXRlU2NvcmVEYXRhIGZyb20gXCIuLi8uLi90eXBlcy9VcGRhdGVTY29yZURhdGFcIjtcbmltcG9ydCBQb3N0U2NvcmVEYXRhIGZyb20gXCIuLi8uLi90eXBlcy9Qb3N0U2NvcmVEYXRhXCI7XG5pbXBvcnQgUG9zdEZsYXNoY2FyZCBmcm9tIFwiLi4vLi4vdHlwZXMvUG9zdEZsYXNoY2FyZFwiO1xuXG5sZXQgYmFja2VuZFVybDogc3RyaW5nO1xuYmFja2VuZFVybCA9IFwiaHR0cHM6Ly9zcGFuaXNoLWFwcDMyMi1lZjMyYTY1ZDM1N2YuaGVyb2t1YXBwLmNvbVwiO1xuXG5sZXQgY29uZmlnID0ge1xuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwYW5pc2h0b2tlblwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGNyZWF0ZUFzeW5jVGh1bms8VXNlciwgUmVnaXN0cmF0aW9uRGF0YT4oXG4gIFwiYXV0aC9yZWdpc3RlclVzZXJcIixcbiAgYXN5bmMgKHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9LCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke2JhY2tlbmRVcmx9L2F1dGgvc2lnbnVwYCxcbiAgICAgICAgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcblxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSAmJiBlbWFpbCAmJiBwYXNzd29yZCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbG9naW5SZXEoZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gY3JlYXRlQXN5bmNUaHVuazxMb2dpblJlcywgTG9naW5EYXRhPihcbiAgXCJhdXRoL2xvZ2luVXNlclwiLFxuICBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSwgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke2JhY2tlbmRVcmx9L2F1dGgvc2lnbmluYCxcbiAgICAgICAgeyBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICAgICAgY29uZmlnXG4gICAgICApO1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGFuaXNodG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjb3JlID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdXRoL3VwZGF0ZVNjb3JlXCIsXG4gIGFzeW5jICh1cGRhdGVTY29yZURhdGE6IFVwZGF0ZVNjb3JlRGF0YSwgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGlkLCBzY29yZSwgbGVzc29uSWQsIG91dE9mLCB1c2VySWQgfSA9IHVwZGF0ZVNjb3JlRGF0YTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChcbiAgICAgICAgYCR7YmFja2VuZFVybH0vc3RhdHNgLFxuICAgICAgICB7IGlkLCBzY29yZSwgbGVzc29uSWQsIG91dE9mLCB1c2VySWQgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgcG9zdFNjb3JlID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdXRoL3Bvc3RTY29yZVwiLFxuICBhc3luYyAocG9zdFNjb3JlRGF0YTogUG9zdFNjb3JlRGF0YSwgeyByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBgJHtiYWNrZW5kVXJsfS9zdGF0c2AsXG4gICAgICAgIHBvc3RTY29yZURhdGEsXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRmxhc2hjYXJkID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdXRoL2NyZWF0ZUZsYXNoY2FyZFwiLFxuICBhc3luYyAoZmxhc2hjYXJkOiBQb3N0Rmxhc2hjYXJkLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2ZsYXNoY2FyZHNcIixcbiAgICAgICAgZmxhc2hjYXJkLFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuKTtcblxuY29uc3QgbG9naW5SZXEgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIGAke2JhY2tlbmRVcmx9L2F1dGgvbG9naW5gLFxuICAgIHsgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgY29uZmlnXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGFuaXNodG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVBc3luY1RodW5rIiwiYmFja2VuZFVybCIsImNvbmZpZyIsImhlYWRlcnMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZWplY3RXaXRoVmFsdWUiLCJyZXMiLCJwb3N0Iiwic3RhdHVzIiwiZGF0YSIsImxvZ2luUmVxIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwibG9naW5Vc2VyIiwic2V0SXRlbSIsImFjY2Vzc190b2tlbiIsInVwZGF0ZVNjb3JlIiwidXBkYXRlU2NvcmVEYXRhIiwiaWQiLCJzY29yZSIsImxlc3NvbklkIiwib3V0T2YiLCJ1c2VySWQiLCJwdXQiLCJhdXRob3JpemF0aW9uIiwicG9zdFNjb3JlIiwicG9zdFNjb3JlRGF0YSIsImNyZWF0ZUZsYXNoY2FyZCIsImZsYXNoY2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/auth/authActions.ts\n"));

/***/ })

});