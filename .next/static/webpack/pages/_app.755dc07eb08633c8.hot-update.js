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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFlashcard: function() { return /* binding */ createFlashcard; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   postScore: function() { return /* binding */ postScore; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   updateScore: function() { return /* binding */ updateScore; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nlet backendUrl;\nbackendUrl = \"https://spanish-app322-ef32a65d357f.herokuapp.com\";\nlet config = {\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n};\nconst registerUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/registerUser\", async (param, param1)=>{\n    let { username , email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signup\"), {\n            username,\n            email,\n            password\n        }, config);\n        if (res.status === 201 && email && password) {\n            const data = await loginReq(email, password);\n            console.log(\"data\", data);\n            return data;\n        }\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/loginUser\", async (param, param1)=>{\n    let { email , password  } = param, { rejectWithValue  } = param1;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/signin\"), {\n            email,\n            password\n        }, config);\n        const { data  } = response;\n        localStorage.setItem(\"spanishtoken\", data.access_token);\n        console.log(data);\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst updateScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/updateScore\", async (updateScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const { id , score , lessonId , outOf , userId  } = updateScoreData;\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"\".concat(backendUrl, \"/stats\"), {\n            id,\n            score,\n            lessonId,\n            outOf,\n            userId\n        }, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                authorization: \"Bearer \".concat(token)\n            }\n        });\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst postScore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/postScore\", async (postScoreData, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/stats\"), postScoreData, config);\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst createFlashcard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/createFlashcard\", async (flashcard, param)=>{\n    let { rejectWithValue  } = param;\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3001/flashcards\", flashcard, config);\n        const { data  } = res;\n        return data;\n    } catch (error) {\n        if (error.response && error.response.data.message) {\n            return rejectWithValue(error.response.data.message);\n        } else {\n            return rejectWithValue(error.message);\n        }\n    }\n});\nconst loginReq = async (email, password)=>{\n    const config = {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(backendUrl, \"/auth/login\"), {\n        email,\n        password\n    }, config);\n    const { data  } = response;\n    localStorage.setItem(\"spanishtoken\", data.access_token);\n    return data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxFQUFFLE9BQU9JLE9BQVk7UUFDbkIsSUFBSUEsTUFBTUMsWUFBWUQsTUFBTUMsU0FBU0wsS0FBS00sU0FBUztZQUNqRCxPQUFPVixnQkFBZ0JRLE1BQU1DLFNBQVNMLEtBQUtNO1FBQzdDLE9BQU87WUFDTCxPQUFPVixnQkFBZ0JRLE1BQU1FO1FBQy9CO0lBQ0Y7QUFDRixHQUNBO0FBRUssTUFBTWlCLGtCQUFrQm5DLGtFQUFnQkEsQ0FDN0Msd0JBQ0EsT0FBT29DO1FBQTBCLEVBQUU1QixnQkFBZSxFQUFFO0lBQ2xELElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1WLGtEQUFVVyxDQUMxQixvQ0FDQTBCLFdBQ0FsQztRQUdGLE1BQU0sRUFBRVUsS0FBSSxFQUFFLEdBQUdIO1FBQ2pCLE9BQU9HO0lBQ1QsRUFBRSxPQUFPSSxPQUFZO1FBQ25CLElBQUlBLE1BQU1DLFlBQVlELE1BQU1DLFNBQVNMLEtBQUtNLFNBQVM7WUFDakQsT0FBT1YsZ0JBQWdCUSxNQUFNQyxTQUFTTCxLQUFLTTtRQUM3QyxPQUFPO1lBQ0wsT0FBT1YsZ0JBQWdCUSxNQUFNRTtRQUMvQjtJQUNGO0FBQ0YsR0FDQTtBQUVGLE1BQU1MLFdBQVcsT0FBT1AsT0FBZUM7SUFDckMsTUFBTUwsU0FBUztRQUNiQyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxNQUFNYyxXQUFXLE1BQU1sQixrREFBVVcsQ0FDL0IsR0FBYyxPQUFYVCxZQUFXLGdCQUNkO1FBQUVLO1FBQU9DO0lBQVMsR0FDbEJMO0lBR0YsTUFBTSxFQUFFVSxLQUFJLEVBQUUsR0FBR0s7SUFDakJHLGFBQWFDLFFBQVEsZ0JBQWdCVCxLQUFLVTtJQUMxQyxPQUFPVjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZlYXR1cmVzL2F1dGgvYXV0aEFjdGlvbnMudHM/YWJkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBSZWdpc3RyYXRpb25EYXRhIGZyb20gXCIuLi8uLi90eXBlcy9SZWdpc3RyYXRpb25EYXRhXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vdHlwZXMvVXNlclwiO1xuaW1wb3J0IExvZ2luRGF0YSBmcm9tIFwiLi4vLi4vdHlwZXMvTG9naW5EYXRhXCI7XG5pbXBvcnQgTG9naW5SZXMgZnJvbSBcIi4uLy4uL3R5cGVzL0xvZ2luUmVzXCI7XG5pbXBvcnQgVXBkYXRlU2NvcmVEYXRhIGZyb20gXCIuLi8uLi90eXBlcy9VcGRhdGVTY29yZURhdGFcIjtcbmltcG9ydCBQb3N0U2NvcmVEYXRhIGZyb20gXCIuLi8uLi90eXBlcy9Qb3N0U2NvcmVEYXRhXCI7XG5pbXBvcnQgUG9zdEZsYXNoY2FyZCBmcm9tIFwiLi4vLi4vdHlwZXMvUG9zdEZsYXNoY2FyZFwiO1xuXG5sZXQgYmFja2VuZFVybDogc3RyaW5nO1xuYmFja2VuZFVybCA9IFwiaHR0cHM6Ly9zcGFuaXNoLWFwcDMyMi1lZjMyYTY1ZDM1N2YuaGVyb2t1YXBwLmNvbVwiO1xuXG5sZXQgY29uZmlnID0ge1xuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyLCBSZWdpc3RyYXRpb25EYXRhPihcbiAgXCJhdXRoL3JlZ2lzdGVyVXNlclwiLFxuICBhc3luYyAoeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0sIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYCR7YmFja2VuZFVybH0vYXV0aC9zaWdudXBgLFxuICAgICAgICB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICAgICAgY29uZmlnXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxICYmIGVtYWlsICYmIHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2dpblJlcShlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBjcmVhdGVBc3luY1RodW5rPExvZ2luUmVzLCBMb2dpbkRhdGE+KFxuICBcImF1dGgvbG9naW5Vc2VyXCIsXG4gIGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9LCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYCR7YmFja2VuZFVybH0vYXV0aC9zaWduaW5gLFxuICAgICAgICB7IGVtYWlsLCBwYXNzd29yZCB9LFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwYW5pc2h0b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2NvcmUgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImF1dGgvdXBkYXRlU2NvcmVcIixcbiAgYXN5bmMgKHVwZGF0ZVNjb3JlRGF0YTogVXBkYXRlU2NvcmVEYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgaWQsIHNjb3JlLCBsZXNzb25JZCwgb3V0T2YsIHVzZXJJZCB9ID0gdXBkYXRlU2NvcmVEYXRhO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KFxuICAgICAgICBgJHtiYWNrZW5kVXJsfS9zdGF0c2AsXG4gICAgICAgIHsgaWQsIHNjb3JlLCBsZXNzb25JZCwgb3V0T2YsIHVzZXJJZCB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcztcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBwb3N0U2NvcmUgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImF1dGgvcG9zdFNjb3JlXCIsXG4gIGFzeW5jIChwb3N0U2NvcmVEYXRhOiBQb3N0U2NvcmVEYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke2JhY2tlbmRVcmx9L3N0YXRzYCxcbiAgICAgICAgcG9zdFNjb3JlRGF0YSxcbiAgICAgICAgY29uZmlnXG4gICAgICApO1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcztcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGbGFzaGNhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImF1dGgvY3JlYXRlRmxhc2hjYXJkXCIsXG4gIGFzeW5jIChmbGFzaGNhcmQ6IFBvc3RGbGFzaGNhcmQsIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvZmxhc2hjYXJkc1wiLFxuICAgICAgICBmbGFzaGNhcmQsXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5jb25zdCBsb2dpblJlcSA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYCR7YmFja2VuZFVybH0vYXV0aC9sb2dpbmAsXG4gICAgeyBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICBjb25maWdcbiAgKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwYW5pc2h0b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XG4gIHJldHVybiBkYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJiYWNrZW5kVXJsIiwiY29uZmlnIiwiaGVhZGVycyIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJlamVjdFdpdGhWYWx1ZSIsInJlcyIsInBvc3QiLCJzdGF0dXMiLCJkYXRhIiwibG9naW5SZXEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJsb2dpblVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWNjZXNzX3Rva2VuIiwidXBkYXRlU2NvcmUiLCJ1cGRhdGVTY29yZURhdGEiLCJpZCIsInNjb3JlIiwibGVzc29uSWQiLCJvdXRPZiIsInVzZXJJZCIsInB1dCIsImF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInBvc3RTY29yZSIsInBvc3RTY29yZURhdGEiLCJjcmVhdGVGbGFzaGNhcmQiLCJmbGFzaGNhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/auth/authActions.ts\n"));

/***/ })

});