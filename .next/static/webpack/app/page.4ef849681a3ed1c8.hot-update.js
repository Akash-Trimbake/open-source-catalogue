"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/search.jsx":
/*!***********************************!*\
  !*** ./src/components/search.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Chip */ \"(app-pages-browser)/./node_modules/@mui/material/Chip/Chip.js\");\n/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Autocomplete */ \"(app-pages-browser)/./node_modules/@mui/material/Autocomplete/Autocomplete.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction Search() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            multiple: true,\n            id: \"tags-filled\",\n            options: top100Films.map((option)=>option.title),\n            defaultValue: [\n                top100Films[13].title\n            ],\n            freeSolo: true,\n            renderTags: (value, getTagProps)=>value.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        variant: \"outlined\",\n                        label: option,\n                        ...getTagProps({\n                            index\n                        })\n                    }, index, false, void 0, void 0)),\n            renderInput: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    ...params,\n                    variant: \"filled\",\n                    label: \"freeSolo\",\n                    placeholder: \"Favorites\"\n                }, void 0, false, void 0, void 0)\n        }, void 0, false, {\n            fileName: \"E:\\\\react\\\\open-source-catalogue\\\\src\\\\components\\\\search.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\react\\\\open-source-catalogue\\\\src\\\\components\\\\search.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEI7QUFFWTtBQUNnQjtBQUNOO0FBRWpDLFNBQVNJO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDSixrRUFBWUE7WUFDWEssUUFBUTtZQUNSQyxJQUFHO1lBQ0hDLFNBQVNDLFlBQVlDLEdBQUcsQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxLQUFLO1lBQ2pEQyxjQUFjO2dCQUFDSixXQUFXLENBQUMsR0FBRyxDQUFDRyxLQUFLO2FBQUM7WUFDckNFLFFBQVE7WUFDUkMsWUFBWSxDQUFDQyxPQUFPQyxjQUNsQkQsTUFBTU4sR0FBRyxDQUFDLENBQUNDLFFBQVFPLHNCQUNqQiw4REFBQ2xCLDBEQUFJQTt3QkFDSG1CLFNBQVE7d0JBRVJDLE9BQU9UO3dCQUNOLEdBQUdNLFlBQVk7NEJBQUVDO3dCQUFNLEVBQUU7dUJBRnJCQTtZQU1YRyxhQUFhLENBQUNDLHVCQUNaLDhEQUFDcEIsK0RBQVNBO29CQUNQLEdBQUdvQixNQUFNO29CQUNWSCxTQUFRO29CQUNSQyxPQUFNO29CQUNORyxhQUFZOzs7Ozs7Ozs7Ozs7QUFNeEI7S0E5QndCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLmpzeD9kZmM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2hpcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGlwXCI7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cclxuICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgaWQ9XCJ0YWdzLWZpbGxlZFwiXHJcbiAgICAgICAgb3B0aW9ucz17dG9wMTAwRmlsbXMubWFwKChvcHRpb24pID0+IG9wdGlvbi50aXRsZSl9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtbdG9wMTAwRmlsbXNbMTNdLnRpdGxlXX1cclxuICAgICAgICBmcmVlU29sb1xyXG4gICAgICAgIHJlbmRlclRhZ3M9eyh2YWx1ZSwgZ2V0VGFnUHJvcHMpID0+XHJcbiAgICAgICAgICB2YWx1ZS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e29wdGlvbn1cclxuICAgICAgICAgICAgICB7Li4uZ2V0VGFnUHJvcHMoeyBpbmRleCB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cImZyZWVTb2xvXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGYXZvcml0ZXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlwIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiU2VhcmNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibXVsdGlwbGUiLCJpZCIsIm9wdGlvbnMiLCJ0b3AxMDBGaWxtcyIsIm1hcCIsIm9wdGlvbiIsInRpdGxlIiwiZGVmYXVsdFZhbHVlIiwiZnJlZVNvbG8iLCJyZW5kZXJUYWdzIiwidmFsdWUiLCJnZXRUYWdQcm9wcyIsImluZGV4IiwidmFyaWFudCIsImxhYmVsIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/search.jsx\n"));

/***/ })

});