"use strict";
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 7871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8937);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_functions__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_functions__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




let clientCredentials;
clientCredentials = {
  apiKey: "AIzaSyCP9DYCQj19QzrzgNtXgxP68cCh1U2Z_hY",
  authDomain: "reef-pay.firebaseapp.com",
  projectId: "reef-pay",
  storageBucket: "reef-pay.appspot.com",
  messagingSenderId: "64784496406",
  appId: "1:64784496406:web:a93a6af19dc75ab610c237"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(clientCredentials);

if (location.hostname === "localhost") {
  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.connectAuthEmulator)(auth, "http://localhost:9099", {
    disableWarnings: true
  });
  const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_2__.getFunctions)((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)());
  (0,firebase_functions__WEBPACK_IMPORTED_MODULE_2__.connectFunctionsEmulator)(functions, "localhost", 5001);
  const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.connectFirestoreEmulator)(db, "localhost", 8080);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);
});

/***/ })

};
;