"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./components/Settings/SettingsData.tsx":
/*!**********************************************!*\
  !*** ./components/Settings/SettingsData.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _constant_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/colors */ \"./constant/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"E:\\\\omotola praise\\\\Projects\\\\14. Reefscan\\\\reef-admin\\\\components\\\\Settings\\\\SettingsData.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar SAddress = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SAddress\",\n  componentId: \"sc-1i6g24r-0\"\n})([\"display:flex;flex-direction:column;padding:2em;\"]);\n_c = SAddress;\nvar SAPIKey = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SAPIKey\",\n  componentId: \"sc-1i6g24r-1\"\n})([\"display:flex;flex-direction:column;padding:2em;\"]);\n_c2 = SAPIKey;\nvar SInput = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].input.withConfig({\n  displayName: \"SettingsData__SInput\",\n  componentId: \"sc-1i6g24r-2\"\n})([\"min-width:300px;width:100%;max-width:500px;font-size:24px;padding:6px;\"]);\n_c3 = SInput;\nvar Label1 = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].label.withConfig({\n  displayName: \"SettingsData__Label1\",\n  componentId: \"sc-1i6g24r-3\"\n})([\"font-size:28px;color:white;\"]);\n_c4 = Label1;\nvar Label2 = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].label.withConfig({\n  displayName: \"SettingsData__Label2\",\n  componentId: \"sc-1i6g24r-4\"\n})([\"font-size:14px;color:\", \";\"], _constant_colors__WEBPACK_IMPORTED_MODULE_3__.grey);\n_c5 = Label2;\nvar SToggle = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SToggle\",\n  componentId: \"sc-1i6g24r-5\"\n})([\"display:flex;align-items:center;position:absolute;color:\", \";\"], _constant_colors__WEBPACK_IMPORTED_MODULE_3__.grey);\n_c6 = SToggle;\nvar SApiKeyGroup1 = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SApiKeyGroup1\",\n  componentId: \"sc-1i6g24r-6\"\n})([\"display:flex;width:100%;\"]);\n_c7 = SApiKeyGroup1;\nvar SApiKeyGroup2 = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SApiKeyGroup2\",\n  componentId: \"sc-1i6g24r-7\"\n})([\"display:flex;min-width:312px;width:80%;max-width:512px;justify-content:flex-end;align-items:center;\"]);\n_c8 = SApiKeyGroup2;\nfunction SettingsData() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      db = _useState[0],\n      setDb = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      auth = _useState2[0],\n      setAuth = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      address = _useState3[0],\n      setAddress = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      apiKey = _useState4[0],\n      setApiKey = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show = _useState5[0],\n      setShow = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      uid = _useState6[0],\n      setUid = _useState6[1];\n\n  var handleChange = function handleChange(event) {\n    var value = event.target.value;\n    setAddress(value);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (auth !== null) {\n      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, function (user) {\n        if (user) {\n          alert(\"user\");\n          setUid(user.uid);\n        }\n      });\n    }\n  }, [auth]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (db !== null && (uid === null || uid === void 0 ? void 0 : uid.length) > 0) {\n      alert(\"db\");\n      var unsub = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"users\", uid), function (doc) {\n        var _doc$data, _doc$data2;\n\n        var walletAddress = doc === null || doc === void 0 ? void 0 : (_doc$data = doc.data()) === null || _doc$data === void 0 ? void 0 : _doc$data.walletAddress;\n        var apiKey = doc === null || doc === void 0 ? void 0 : (_doc$data2 = doc.data()) === null || _doc$data2 === void 0 ? void 0 : _doc$data2.apiKey; // alert(walletAddress);\n\n        setAddress(walletAddress);\n        setApiKey(apiKey);\n      });\n      return function () {\n        return unsub();\n      };\n    }\n  }, [db, uid]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SAddress, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Label1, {\n        htmlFor: \"address\",\n        children: \"Wallet Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Label2, {\n        htmlFor: \"address\",\n        children: \"This wallet is where your funds are sent too\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        style: {\n          display: \"flex\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SInput, {\n          type: \"text\",\n          name: \"address\",\n          value: address,\n          onChange: function onChange(e) {\n            return handleChange(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this), \"\\xA0 \\xA0 \\xA0 \\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          text: \"Save\",\n          click: function click() {\n            alert(\"save\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SAPIKey, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Label1, {\n        htmlFor: \"apiKey\",\n        children: \"API Key\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Label2, {\n        htmlFor: \"apiKey\",\n        children: \"Keep safe your API key\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SApiKeyGroup1, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SApiKeyGroup2, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SInput, {\n            type: show ? \"text\" : \"password\",\n            name: \"apiKey\",\n            value: apiKey\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SToggle, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n              onClick: function onClick() {\n                setShow(false);\n              },\n              style: {\n                padding: 10,\n                width: 35,\n                display: show ? \"block\" : \"none\"\n              },\n              src: \"assets/hide.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n              onClick: function onClick() {\n                setShow(true);\n              },\n              style: {\n                padding: 10,\n                width: 35,\n                display: show ? \"none\" : \"block\"\n              },\n              src: \"assets/show.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, this), \"\\xA0 \\xA0 \\xA0 \\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\"\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            text: \"Generate Key\",\n            click: function click() {\n              alert(\"generate\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 13\n          }, this), \"\\xA0 \\xA0 \\xA0 \\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            text: \"Copy\",\n            click: function click() {\n              alert(\"copy\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 175,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          style: {\n            flex: 2\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 182,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 107,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SettingsData, \"6jAlxxkBJB+pE5T9Gw4Og+bA2do=\");\n\n_c9 = SettingsData;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"SAddress\");\n$RefreshReg$(_c2, \"SAPIKey\");\n$RefreshReg$(_c3, \"SInput\");\n$RefreshReg$(_c4, \"Label1\");\n$RefreshReg$(_c5, \"Label2\");\n$RefreshReg$(_c6, \"SToggle\");\n$RefreshReg$(_c7, \"SApiKeyGroup1\");\n$RefreshReg$(_c8, \"SApiKeyGroup2\");\n$RefreshReg$(_c9, \"SettingsData\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzRGF0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTVMsUUFBUSxHQUFHTix3RUFBSDtBQUFBO0FBQUE7QUFBQSx1REFBZDtLQUFNTTtBQU1OLElBQU1FLE9BQU8sR0FBR1Isd0VBQUg7QUFBQTtBQUFBO0FBQUEsdURBQWI7TUFBTVE7QUFNTixJQUFNQyxNQUFNLEdBQUdULDBFQUFIO0FBQUE7QUFBQTtBQUFBLDhFQUFaO01BQU1TO0FBUU4sSUFBTUUsTUFBTSxHQUFHWCwwRUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBWjtNQUFNVztBQUtOLElBQU1FLE1BQU0sR0FBR2IsMEVBQUg7QUFBQTtBQUFBO0FBQUEsbUNBRURJLGtEQUZDLENBQVo7TUFBTVM7QUFLTixJQUFNQyxPQUFPLEdBQUdkLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNFQUlGSSxrREFKRSxDQUFiO01BQU1VO0FBT04sSUFBTUMsYUFBYSxHQUFHZix3RUFBSDtBQUFBO0FBQUE7QUFBQSxnQ0FBbkI7TUFBTWU7QUFLTixJQUFNQyxhQUFhLEdBQUdoQix3RUFBSDtBQUFBO0FBQUE7QUFBQSwyR0FBbkI7TUFBTWdCO0FBU1MsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUNyQyxrQkFBb0JsQiwrQ0FBUSxDQUFtQixJQUFuQixDQUE1QjtBQUFBLE1BQU9tQixFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBd0JwQiwrQ0FBUSxDQUFjLElBQWQsQ0FBaEM7QUFBQSxNQUFPcUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsbUJBQThCdEIsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUEsTUFBT3VCLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCeEIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT3lCLE1BQVA7QUFBQSxNQUFlQyxT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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLHNDQW1DRTtBQUFLLGVBQUssRUFBRTtBQUFFYyxZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQUFaO0FBQUEsa0NBQ0UsOERBQUMsK0NBQUQ7QUFDRSxnQkFBSSxFQUFDLGNBRFA7QUFFRSxpQkFBSyxFQUFFLGlCQUFNO0FBQ1hMLGNBQUFBLEtBQUssQ0FBQyxVQUFELENBQUw7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsc0NBUUUsOERBQUMsK0NBQUQ7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxpQkFBSyxFQUFFLGlCQUFNO0FBQ1hBLGNBQUFBLEtBQUssQ0FBQyxNQUFELENBQUw7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5DRixlQWtERTtBQUFLLGVBQUssRUFBRTtBQUFFUyxZQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlGRDs7R0E3SHVCM0I7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3NEYXRhLnRzeD9lN2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEF1dGgsIGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGRvYywgRmlyZXN0b3JlLCBnZXRGaXJlc3RvcmUsIG9uU25hcHNob3QgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBncmV5IH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50L2NvbG9yc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcclxuXHJcbnR5cGUgTnVsbFN0cmluZyA9IHN0cmluZyB8IG51bGw7XHJcblxyXG5jb25zdCBTQWRkcmVzcyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFNBUElLZXkgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyZW07XHJcbmA7XHJcblxyXG5jb25zdCBTSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbmA7XHJcblxyXG5jb25zdCBMYWJlbDEgPSBzdHlsZWQubGFiZWxgXHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IExhYmVsMiA9IHN0eWxlZC5sYWJlbGBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICR7Z3JleX07XHJcbmA7XHJcblxyXG5jb25zdCBTVG9nZ2xlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAke2dyZXl9O1xyXG5gO1xyXG5cclxuY29uc3QgU0FwaUtleUdyb3VwMSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFNBcGlLZXlHcm91cDIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLXdpZHRoOiAzMTJweDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNTEycHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3NEYXRhKCkge1xyXG4gIGNvbnN0IFtkYiwgc2V0RGJdID0gdXNlU3RhdGU8RmlyZXN0b3JlIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGU8QXV0aCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXBpS2V5LCBzZXRBcGlLZXldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdWlkLCBzZXRVaWRdID0gdXNlU3RhdGU8TnVsbFN0cmluZz4oXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoICE9PSBudWxsKSB7XHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICBhbGVydChcInVzZXJcIik7XHJcbiAgICAgICAgICBzZXRVaWQodXNlci51aWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYiAhPT0gbnVsbCAmJiB1aWQ/Lmxlbmd0aCEgPiAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiZGJcIik7XHJcbiAgICAgIGNvbnN0IHVuc3ViID0gb25TbmFwc2hvdChkb2MoZGIsIFwidXNlcnNcIiwgdWlkISksIChkb2MpID0+IHtcclxuICAgICAgICBjb25zdCB3YWxsZXRBZGRyZXNzID0gZG9jPy5kYXRhKCk/LndhbGxldEFkZHJlc3M7XHJcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gZG9jPy5kYXRhKCk/LmFwaUtleTtcclxuXHJcbiAgICAgICAgLy8gYWxlcnQod2FsbGV0QWRkcmVzcyk7XHJcbiAgICAgICAgc2V0QWRkcmVzcyh3YWxsZXRBZGRyZXNzKTtcclxuICAgICAgICBzZXRBcGlLZXkoYXBpS2V5KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gdW5zdWIoKTtcclxuICAgIH1cclxuICB9LCBbZGIsIHVpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNBZGRyZXNzPlxyXG4gICAgICAgIDxMYWJlbDEgaHRtbEZvcj1cImFkZHJlc3NcIj5XYWxsZXQgQWRkcmVzczwvTGFiZWwxPlxyXG4gICAgICAgIDxMYWJlbDIgaHRtbEZvcj1cImFkZHJlc3NcIj5cclxuICAgICAgICAgIFRoaXMgd2FsbGV0IGlzIHdoZXJlIHlvdXIgZnVuZHMgYXJlIHNlbnQgdG9vXHJcbiAgICAgICAgPC9MYWJlbDI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxTSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDtcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdGV4dD1cIlNhdmVcIlxyXG4gICAgICAgICAgICBjbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwic2F2ZVwiKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU0FkZHJlc3M+XHJcbiAgICAgIDxTQVBJS2V5PlxyXG4gICAgICAgIDxMYWJlbDEgaHRtbEZvcj1cImFwaUtleVwiPkFQSSBLZXk8L0xhYmVsMT5cclxuICAgICAgICA8TGFiZWwyIGh0bWxGb3I9XCJhcGlLZXlcIj5LZWVwIHNhZmUgeW91ciBBUEkga2V5PC9MYWJlbDI+XHJcbiAgICAgICAgPFNBcGlLZXlHcm91cDE+XHJcbiAgICAgICAgICA8U0FwaUtleUdyb3VwMj5cclxuICAgICAgICAgICAgPFNJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9e3Nob3cgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICBuYW1lPVwiYXBpS2V5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17YXBpS2V5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U1RvZ2dsZT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzUsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaGlkZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1LFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzaG93ID8gXCJub25lXCIgOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL3Nob3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TVG9nZ2xlPlxyXG4gICAgICAgICAgPC9TQXBpS2V5R3JvdXAyPlxyXG4gICAgICAgICAgJm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdGV4dD1cIkdlbmVyYXRlIEtleVwiXHJcbiAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZ2VuZXJhdGVcIik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0ZXh0PVwiQ29weVwiXHJcbiAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiY29weVwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDIgfX0+PC9kaXY+XHJcbiAgICAgICAgPC9TQXBpS2V5R3JvdXAxPlxyXG4gICAgICA8L1NBUElLZXk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZG9jIiwib25TbmFwc2hvdCIsImdyZXkiLCJCdXR0b24iLCJTQWRkcmVzcyIsImRpdiIsIlNBUElLZXkiLCJTSW5wdXQiLCJpbnB1dCIsIkxhYmVsMSIsImxhYmVsIiwiTGFiZWwyIiwiU1RvZ2dsZSIsIlNBcGlLZXlHcm91cDEiLCJTQXBpS2V5R3JvdXAyIiwiU2V0dGluZ3NEYXRhIiwiZGIiLCJzZXREYiIsImF1dGgiLCJzZXRBdXRoIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJhcGlLZXkiLCJzZXRBcGlLZXkiLCJzaG93Iiwic2V0U2hvdyIsInVpZCIsInNldFVpZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJ1c2VyIiwiYWxlcnQiLCJsZW5ndGgiLCJ1bnN1YiIsIndhbGxldEFkZHJlc3MiLCJkYXRhIiwiZGlzcGxheSIsImUiLCJwYWRkaW5nIiwid2lkdGgiLCJmbGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Settings/SettingsData.tsx\n");

/***/ })

});