"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar/NavBar */ \"./components/NavBar/NavBar.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst index = ()=>{\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    window.fetch(\"api/avo\").then((data)=>{\n        data.json();\n    }).then((param)=>{\n        let { data  } = param;\n        return setProductList(data);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danielagutierrezparra/Documents/next/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined),\n            productList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: item.name\n                }, item.key, false, {\n                    fileName: \"/Users/danielagutierrezparra/Documents/next/pages/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 32\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danielagutierrezparra/Documents/next/pages/index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"TG4mTL11pkm5ATfPtXkLip64Zyc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNZO0FBRWhELE1BQU1HLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxhQUFZQyxlQUFlLEdBQUNKLCtDQUFRQSxDQUFDLEVBQUU7SUFFOUNLLE9BQU9DLEtBQUssQ0FBQyxXQUNaQyxJQUFJLENBQUNDLENBQUFBLE9BQU07UUFBQ0EsS0FBS0MsSUFBSTtJQUFFLEdBQ3ZCRixJQUFJLENBQUMsU0FBVUg7WUFBVCxFQUFDSSxLQUFJLEVBQUM7ZUFBR0osZUFBZUk7SUFBSTtJQUNuQyxxQkFDRSw4REFBQ0U7OzBCQUNHLDhEQUFDVCxpRUFBTUE7Ozs7O1lBQ05FLFlBQVlRLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQU0sOERBQUNGOzhCQUFvQkUsS0FBS0MsSUFBSTttQkFBcEJELEtBQUtFLEdBQUc7Ozs7Ozs7Ozs7O0FBR2pEO0dBWk1aO0FBY04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJ1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LHNldFByb2R1Y3RMaXN0XT11c2VTdGF0ZShbXSlcblxuICB3aW5kb3cuZmV0Y2goXCJhcGkvYXZvXCIpXG4gIC50aGVuKGRhdGE9PntkYXRhLmpzb24oKX0pXG4gIC50aGVuKCh7ZGF0YX0pPT5zZXRQcm9kdWN0TGlzdChkYXRhKSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcChpdGVtPT48ZGl2IGtleT17aXRlbS5rZXl9PntpdGVtLm5hbWV9PC9kaXY+KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2QmFyIiwiaW5kZXgiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJkaXYiLCJtYXAiLCJpdGVtIiwibmFtZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});