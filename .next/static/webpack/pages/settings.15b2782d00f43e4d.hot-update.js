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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var _constant_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/colors */ \"./constant/colors.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"E:\\\\omotola praise\\\\Projects\\\\14. Reefscan\\\\reef-admin\\\\components\\\\Settings\\\\SettingsData.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar SAddress = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SAddress\",\n  componentId: \"sc-1i6g24r-0\"\n})([\"display:flex;flex-direction:column;padding:2em;\"]);\n_c = SAddress;\nvar SAPIKey = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SAPIKey\",\n  componentId: \"sc-1i6g24r-1\"\n})([\"display:flex;flex-direction:column;padding:2em;\"]);\n_c2 = SAPIKey;\nvar SInput = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].input.withConfig({\n  displayName: \"SettingsData__SInput\",\n  componentId: \"sc-1i6g24r-2\"\n})([\"min-width:300px;width:100%;max-width:500px;font-size:24px;padding:6px;\"]);\n_c3 = SInput;\nvar Label1 = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].label.withConfig({\n  displayName: \"SettingsData__Label1\",\n  componentId: \"sc-1i6g24r-3\"\n})([\"font-size:28px;color:white;\"]);\n_c4 = Label1;\nvar Label2 = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].label.withConfig({\n  displayName: \"SettingsData__Label2\",\n  componentId: \"sc-1i6g24r-4\"\n})([\"font-size:14px;color:\", \";\"], _constant_colors__WEBPACK_IMPORTED_MODULE_4__.grey);\n_c5 = Label2;\nvar SToggle = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SToggle\",\n  componentId: \"sc-1i6g24r-5\"\n})([\"display:flex;align-items:center;position:absolute;color:\", \";\"], _constant_colors__WEBPACK_IMPORTED_MODULE_4__.grey);\n_c6 = SToggle;\nvar SApiKeyGroup1 = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SApiKeyGroup1\",\n  componentId: \"sc-1i6g24r-6\"\n})([\"display:flex;width:100%;\"]);\n_c7 = SApiKeyGroup1;\nvar SApiKeyGroup2 = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"SettingsData__SApiKeyGroup2\",\n  componentId: \"sc-1i6g24r-7\"\n})([\"display:flex;min-width:312px;width:80%;max-width:512px;justify-content:flex-end;align-items:center;\"]);\n_c8 = SApiKeyGroup2;\nfunction SettingsData() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      db = _useState[0],\n      setDb = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      auth = _useState2[0],\n      setAuth = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      address = _useState3[0],\n      setAddress = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      apiKey = _useState4[0],\n      setApiKey = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show = _useState5[0],\n      setShow = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      uid = _useState6[0],\n      setUid = _useState6[1];\n\n  var handleChange = function handleChange(event) {\n    var value = event.target.value;\n    setAddress(value);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    db && setDb(db);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    auth && setAuth(auth);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (auth !== null) {\n      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, function (user) {\n        if (user) {\n          alert(user.uid);\n          setUid(user.uid);\n        }\n      });\n    }\n  }, [auth]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (db !== null && (uid === null || uid === void 0 ? void 0 : uid.length) > 0) {\n      var unsub = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"users\", uid), function (doc) {\n        var _doc$data, _doc$data2;\n\n        var walletAddress = doc === null || doc === void 0 ? void 0 : (_doc$data = doc.data()) === null || _doc$data === void 0 ? void 0 : _doc$data.walletAddress;\n        var apiKey = doc === null || doc === void 0 ? void 0 : (_doc$data2 = doc.data()) === null || _doc$data2 === void 0 ? void 0 : _doc$data2.apiKey;\n        console.l;\n        alert(\"db\");\n        alert(walletAddress);\n        setAddress(walletAddress);\n        setApiKey(apiKey);\n      });\n      return function () {\n        return unsub();\n      };\n    }\n  }, [db, uid]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SAddress, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Label1, {\n        htmlFor: \"address\",\n        children: \"Wallet Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Label2, {\n        htmlFor: \"address\",\n        children: \"This wallet is where your funds are sent too\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        style: {\n          display: \"flex\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SInput, {\n          type: \"text\",\n          name: \"address\",\n          value: address,\n          onChange: function onChange(e) {\n            return handleChange(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this), \"\\xA0 \\xA0 \\xA0 \\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          text: \"Save\",\n          click: function click() {\n            alert(\"save\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SAPIKey, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Label1, {\n        htmlFor: \"apiKey\",\n        children: \"API Key\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Label2, {\n        htmlFor: \"apiKey\",\n        children: \"Keep safe your API key\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SApiKeyGroup1, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SApiKeyGroup2, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SInput, {\n            type: show ? \"text\" : \"password\",\n            name: \"apiKey\",\n            value: apiKey\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SToggle, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n              onClick: function onClick() {\n                setShow(false);\n              },\n              style: {\n                padding: 10,\n                width: 35,\n                display: show ? \"block\" : \"none\"\n              },\n              src: \"assets/hide.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 150,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n              onClick: function onClick() {\n                setShow(true);\n              },\n              style: {\n                padding: 10,\n                width: 35,\n                display: show ? \"none\" : \"block\"\n              },\n              src: \"assets/show.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 162,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 149,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, this), \"\\xA0 \\xA0 \\xA0 \\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\"\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            text: \"Generate Key\",\n            click: function click() {\n              alert(\"generate\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 178,\n            columnNumber: 13\n          }, this), \"\\xA0 \\xA0 \\xA0 \\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            text: \"Copy\",\n            click: function click() {\n              alert(\"copy\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 185,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 177,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          style: {\n            flex: 2\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 192,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 117,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SettingsData, \"MafU2qhf63J9K6V7OJZjJdXitFw=\");\n\n_c9 = SettingsData;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"SAddress\");\n$RefreshReg$(_c2, \"SAPIKey\");\n$RefreshReg$(_c3, \"SInput\");\n$RefreshReg$(_c4, \"Label1\");\n$RefreshReg$(_c5, \"Label2\");\n$RefreshReg$(_c6, \"SToggle\");\n$RefreshReg$(_c7, \"SApiKeyGroup1\");\n$RefreshReg$(_c8, \"SApiKeyGroup2\");\n$RefreshReg$(_c9, \"SettingsData\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzRGF0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTVksUUFBUSxHQUFHVCx3RUFBSDtBQUFBO0FBQUE7QUFBQSx1REFBZDtLQUFNUztBQU1OLElBQU1FLE9BQU8sR0FBR1gsd0VBQUg7QUFBQTtBQUFBO0FBQUEsdURBQWI7TUFBTVc7QUFNTixJQUFNQyxNQUFNLEdBQUdaLDBFQUFIO0FBQUE7QUFBQTtBQUFBLDhFQUFaO01BQU1ZO0FBUU4sSUFBTUUsTUFBTSxHQUFHZCwwRUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBWjtNQUFNYztBQUtOLElBQU1FLE1BQU0sR0FBR2hCLDBFQUFIO0FBQUE7QUFBQTtBQUFBLG1DQUVETyxrREFGQyxDQUFaO01BQU1TO0FBS04sSUFBTUMsT0FBTyxHQUFHakIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsc0VBSUZPLGtEQUpFLENBQWI7TUFBTVU7QUFPTixJQUFNQyxhQUFhLEdBQUdsQix3RUFBSDtBQUFBO0FBQUE7QUFBQSxnQ0FBbkI7TUFBTWtCO0FBS04sSUFBTUMsYUFBYSxHQUFHbkIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsMkdBQW5CO01BQU1tQjtBQVNTLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFDckMsa0JBQW9CckIsK0NBQVEsQ0FBbUIsSUFBbkIsQ0FBNUI7QUFBQSxNQUFPc0IsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQXdCdkIsK0NBQVEsQ0FBYyxJQUFkLENBQWhDO0FBQUEsTUFBT3dCLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLG1CQUE4QnpCLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU8wQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QjNCLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU80QixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBd0I3QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEM7QUFBQSxNQUFPOEIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsbUJBQXNCL0IsK0NBQVEsQ0FBYSxFQUFiLENBQTlCO0FBQUEsTUFBT2dDLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBZ0I7QUFDbkMsUUFBSUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsS0FBekI7QUFDQVQsSUFBQUEsVUFBVSxDQUFDUyxLQUFELENBQVY7QUFDRCxHQUhEOztBQUtBckMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTXVCLEVBQUUsR0FBR2pCLGdFQUFZLENBQUNFLDJEQUFELENBQXZCO0FBQ0FlLElBQUFBLEVBQUUsSUFBSUMsS0FBSyxDQUFDRCxFQUFELENBQVg7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0F2QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNeUIsSUFBSSxHQUFHdEIsc0RBQU8sQ0FBQ0ssMkRBQUQsQ0FBcEI7QUFDQWlCLElBQUFBLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFELENBQWY7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0F6QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJeUIsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJyQixNQUFBQSxpRUFBa0IsQ0FBQ3FCLElBQUQsRUFBTyxVQUFDYyxJQUFELEVBQVU7QUFDakMsWUFBSUEsSUFBSixFQUFVO0FBQ1JDLFVBQUFBLEtBQUssQ0FBQ0QsSUFBSSxDQUFDTixHQUFOLENBQUw7QUFDQUMsVUFBQUEsTUFBTSxDQUFDSyxJQUFJLENBQUNOLEdBQU4sQ0FBTjtBQUNEO0FBQ0YsT0FMaUIsQ0FBbEI7QUFNRDtBQUNGLEdBVFEsRUFTTixDQUFDUixJQUFELENBVE0sQ0FBVDtBQVdBekIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXVCLEVBQUUsS0FBSyxJQUFQLElBQWUsQ0FBQVUsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUVRLE1BQUwsSUFBZSxDQUFsQyxFQUFxQztBQUNuQyxVQUFNQyxLQUFLLEdBQUduQyw4REFBVSxDQUFDRix1REFBRyxDQUFDa0IsRUFBRCxFQUFLLE9BQUwsRUFBY1UsR0FBZCxDQUFKLEVBQXlCLFVBQUM1QixHQUFELEVBQVM7QUFBQTs7QUFDeEQsWUFBTXNDLGFBQWEsR0FBR3RDLEdBQUgsYUFBR0EsR0FBSCxvQ0FBR0EsR0FBRyxDQUFFdUMsSUFBTCxFQUFILDhDQUFHLFVBQWFELGFBQW5DO0FBQ0EsWUFBTWQsTUFBTSxHQUFHeEIsR0FBSCxhQUFHQSxHQUFILHFDQUFHQSxHQUFHLENBQUV1QyxJQUFMLEVBQUgsK0NBQUcsV0FBYWYsTUFBNUI7QUFFQWdCLFFBQUFBLE9BQU8sQ0FBQ0MsQ0FBUjtBQUNBTixRQUFBQSxLQUFLLENBQUMsSUFBRCxDQUFMO0FBQ0FBLFFBQUFBLEtBQUssQ0FBQ0csYUFBRCxDQUFMO0FBQ0FmLFFBQUFBLFVBQVUsQ0FBQ2UsYUFBRCxDQUFWO0FBQ0FiLFFBQUFBLFNBQVMsQ0FBQ0QsTUFBRCxDQUFUO0FBQ0QsT0FUdUIsQ0FBeEI7QUFXQSxhQUFPO0FBQUEsZUFBTWEsS0FBSyxFQUFYO0FBQUEsT0FBUDtBQUNEO0FBQ0YsR0FmUSxFQWVOLENBQUNuQixFQUFELEVBQUtVLEdBQUwsQ0FmTSxDQUFUO0FBaUJBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsUUFBRDtBQUFBLDhCQUNFLDhEQUFDLE1BQUQ7QUFBUSxlQUFPLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLE1BQUQ7QUFBUSxlQUFPLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFO0FBQUssYUFBSyxFQUFFO0FBQUVjLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQVo7QUFBQSxnQ0FDRSw4REFBQyxNQUFEO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsU0FGUDtBQUdFLGVBQUssRUFBRXBCLE9BSFQ7QUFJRSxrQkFBUSxFQUFFLGtCQUFDcUIsQ0FBRDtBQUFBLG1CQUFPYixZQUFZLENBQUNhLENBQUQsQ0FBbkI7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsc0NBUUUsOERBQUMsK0NBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGVBQUssRUFBRSxpQkFBTTtBQUNYUixZQUFBQSxLQUFLLENBQUMsTUFBRCxDQUFMO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBc0JFLDhEQUFDLE9BQUQ7QUFBQSw4QkFDRSw4REFBQyxNQUFEO0FBQVEsZUFBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxNQUFEO0FBQVEsZUFBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSw4REFBQyxhQUFEO0FBQUEsZ0NBQ0UsOERBQUMsYUFBRDtBQUFBLGtDQUNFLDhEQUFDLE1BQUQ7QUFDRSxnQkFBSSxFQUFFVCxJQUFJLEdBQUcsTUFBSCxHQUFZLFVBRHhCO0FBRUUsZ0JBQUksRUFBQyxRQUZQO0FBR0UsaUJBQUssRUFBRUY7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBTUUsOERBQUMsT0FBRDtBQUFBLG9DQUNFO0FBQ0UscUJBQU8sRUFBRSxtQkFBTTtBQUNiRyxnQkFBQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELGVBSEg7QUFJRSxtQkFBSyxFQUFFO0FBQ0xpQixnQkFBQUEsT0FBTyxFQUFFLEVBREo7QUFFTEMsZ0JBQUFBLEtBQUssRUFBRSxFQUZGO0FBR0xILGdCQUFBQSxPQUFPLEVBQUVoQixJQUFJLEdBQUcsT0FBSCxHQUFhO0FBSHJCLGVBSlQ7QUFTRSxpQkFBRyxFQUFDLGlCQVROO0FBVUUsaUJBQUcsRUFBQztBQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFhRTtBQUNFLHFCQUFPLEVBQUUsbUJBQU07QUFDYkMsZ0JBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxlQUhIO0FBSUUsbUJBQUssRUFBRTtBQUNMaUIsZ0JBQUFBLE9BQU8sRUFBRSxFQURKO0FBRUxDLGdCQUFBQSxLQUFLLEVBQUUsRUFGRjtBQUdMSCxnQkFBQUEsT0FBTyxFQUFFaEIsSUFBSSxHQUFHLE1BQUgsR0FBWTtBQUhwQixlQUpUO0FBU0UsaUJBQUcsRUFBQyxpQkFUTjtBQVVFLGlCQUFHLEVBQUM7QUFWTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsc0NBbUNFO0FBQUssZUFBSyxFQUFFO0FBQUVnQixZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQUFaO0FBQUEsa0NBQ0UsOERBQUMsK0NBQUQ7QUFDRSxnQkFBSSxFQUFDLGNBRFA7QUFFRSxpQkFBSyxFQUFFLGlCQUFNO0FBQ1hQLGNBQUFBLEtBQUssQ0FBQyxVQUFELENBQUw7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsc0NBUUUsOERBQUMsK0NBQUQ7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxpQkFBSyxFQUFFLGlCQUFNO0FBQ1hBLGNBQUFBLEtBQUssQ0FBQyxNQUFELENBQUw7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5DRixlQWtERTtBQUFLLGVBQUssRUFBRTtBQUFFVyxZQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlGRDs7R0F0SXVCN0I7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3NEYXRhLnRzeD9lN2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEF1dGgsIGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGRvYywgRmlyZXN0b3JlLCBnZXRGaXJlc3RvcmUsIG9uU25hcHNob3QgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBhcHAgZnJvbSBcIi4uLy4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xyXG5cclxuaW1wb3J0IHsgZ3JleSB9IGZyb20gXCIuLi8uLi9jb25zdGFudC9jb2xvcnNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uXCI7XHJcblxyXG50eXBlIE51bGxTdHJpbmcgPSBzdHJpbmcgfCBudWxsO1xyXG5cclxuY29uc3QgU0FkZHJlc3MgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyZW07XHJcbmA7XHJcblxyXG5jb25zdCBTQVBJS2V5ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMmVtO1xyXG5gO1xyXG5cclxuY29uc3QgU0lucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgTGFiZWwxID0gc3R5bGVkLmxhYmVsYFxyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBMYWJlbDIgPSBzdHlsZWQubGFiZWxgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAke2dyZXl9O1xyXG5gO1xyXG5cclxuY29uc3QgU1RvZ2dsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogJHtncmV5fTtcclxuYDtcclxuXHJcbmNvbnN0IFNBcGlLZXlHcm91cDEgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTQXBpS2V5R3JvdXAyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi13aWR0aDogMzEycHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDUxMnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzRGF0YSgpIHtcclxuICBjb25zdCBbZGIsIHNldERiXSA9IHVzZVN0YXRlPEZpcmVzdG9yZSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlPEF1dGggfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FwaUtleSwgc2V0QXBpS2V5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3VpZCwgc2V0VWlkXSA9IHVzZVN0YXRlPE51bGxTdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0QWRkcmVzcyh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgICBkYiAmJiBzZXREYihkYik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuICAgIGF1dGggJiYgc2V0QXV0aChhdXRoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aCAhPT0gbnVsbCkge1xyXG4gICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgYWxlcnQodXNlci51aWQpO1xyXG4gICAgICAgICAgc2V0VWlkKHVzZXIudWlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGIgIT09IG51bGwgJiYgdWlkPy5sZW5ndGghID4gMCkge1xyXG4gICAgICBjb25zdCB1bnN1YiA9IG9uU25hcHNob3QoZG9jKGRiLCBcInVzZXJzXCIsIHVpZCEpLCAoZG9jKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IGRvYz8uZGF0YSgpPy53YWxsZXRBZGRyZXNzO1xyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9IGRvYz8uZGF0YSgpPy5hcGlLZXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sXHJcbiAgICAgICAgYWxlcnQoXCJkYlwiKTtcclxuICAgICAgICBhbGVydCh3YWxsZXRBZGRyZXNzKTtcclxuICAgICAgICBzZXRBZGRyZXNzKHdhbGxldEFkZHJlc3MpO1xyXG4gICAgICAgIHNldEFwaUtleShhcGlLZXkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB1bnN1YigpO1xyXG4gICAgfVxyXG4gIH0sIFtkYiwgdWlkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U0FkZHJlc3M+XHJcbiAgICAgICAgPExhYmVsMSBodG1sRm9yPVwiYWRkcmVzc1wiPldhbGxldCBBZGRyZXNzPC9MYWJlbDE+XHJcbiAgICAgICAgPExhYmVsMiBodG1sRm9yPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgICAgVGhpcyB3YWxsZXQgaXMgd2hlcmUgeW91ciBmdW5kcyBhcmUgc2VudCB0b29cclxuICAgICAgICA8L0xhYmVsMj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPFNJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwO1xyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0ZXh0PVwiU2F2ZVwiXHJcbiAgICAgICAgICAgIGNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJzYXZlXCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TQWRkcmVzcz5cclxuICAgICAgPFNBUElLZXk+XHJcbiAgICAgICAgPExhYmVsMSBodG1sRm9yPVwiYXBpS2V5XCI+QVBJIEtleTwvTGFiZWwxPlxyXG4gICAgICAgIDxMYWJlbDIgaHRtbEZvcj1cImFwaUtleVwiPktlZXAgc2FmZSB5b3VyIEFQSSBrZXk8L0xhYmVsMj5cclxuICAgICAgICA8U0FwaUtleUdyb3VwMT5cclxuICAgICAgICAgIDxTQXBpS2V5R3JvdXAyPlxyXG4gICAgICAgICAgICA8U0lucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT17c2hvdyA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhcGlLZXlcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXthcGlLZXl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9oaWRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzUsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNob3cgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvc2hvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NUb2dnbGU+XHJcbiAgICAgICAgICA8L1NBcGlLZXlHcm91cDI+XHJcbiAgICAgICAgICAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDtcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0ZXh0PVwiR2VuZXJhdGUgS2V5XCJcclxuICAgICAgICAgICAgICBjbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJnZW5lcmF0ZVwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDtcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHRleHQ9XCJDb3B5XCJcclxuICAgICAgICAgICAgICBjbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJjb3B5XCIpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMiB9fT48L2Rpdj5cclxuICAgICAgICA8L1NBcGlLZXlHcm91cDE+XHJcbiAgICAgIDwvU0FQSUtleT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZG9jIiwiZ2V0RmlyZXN0b3JlIiwib25TbmFwc2hvdCIsImFwcCIsImdyZXkiLCJCdXR0b24iLCJTQWRkcmVzcyIsImRpdiIsIlNBUElLZXkiLCJTSW5wdXQiLCJpbnB1dCIsIkxhYmVsMSIsImxhYmVsIiwiTGFiZWwyIiwiU1RvZ2dsZSIsIlNBcGlLZXlHcm91cDEiLCJTQXBpS2V5R3JvdXAyIiwiU2V0dGluZ3NEYXRhIiwiZGIiLCJzZXREYiIsImF1dGgiLCJzZXRBdXRoIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJhcGlLZXkiLCJzZXRBcGlLZXkiLCJzaG93Iiwic2V0U2hvdyIsInVpZCIsInNldFVpZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJ1c2VyIiwiYWxlcnQiLCJsZW5ndGgiLCJ1bnN1YiIsIndhbGxldEFkZHJlc3MiLCJkYXRhIiwiY29uc29sZSIsImwiLCJkaXNwbGF5IiwiZSIsInBhZGRpbmciLCJ3aWR0aCIsImZsZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Settings/SettingsData.tsx\n");

/***/ })

});