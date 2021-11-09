"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CloseSideBarButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "CloseSideBarMenu__SButton",
  componentId: "sc-toid3i-0"
})(["display:none;@media only screen and (max-width:950px){display:block;}"]);
function CloseSideBarButton() {
  function onClose() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(SButton, {
    onClick: onClose,
    name: "close side bar",
    children: "close"
  });
}

/***/ }),

/***/ 7254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8478);
/* harmony import */ var _CloseSideBarMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8854);
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1987);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1854);
/* harmony import */ var _SideBarMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1933);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Logout__WEBPACK_IMPORTED_MODULE_4__]);
_Logout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const navbar_height = "100px";
const sidebar_width = "250px";
const SLayout = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SLayout",
  componentId: "sc-18b5nsd-0"
})(["width:100%;height:100%;margin:0px;padding:0px;position:fixed;background:", ";@media only screen and (min-width:950px){display:grid;}"], _constant_colors__WEBPACK_IMPORTED_MODULE_8__/* .almostBlack */ .y5);
const SSidebar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SSidebar",
  componentId: "sc-18b5nsd-1"
})(["background-color:", ";position:fixed;height:100%;z-index:20;border-right:solid 5px ", ";padding:0px;margin:0px;overflow:auto;display:block;@media only screen and (max-width:950px){display:none;width:250px;}@media only screen and (min-width:950px){width:", ";max-width:250px;display:block;}"], _constant_colors__WEBPACK_IMPORTED_MODULE_8__/* .almostBlack */ .y5, _constant_colors__WEBPACK_IMPORTED_MODULE_8__/* .darkBlue */ .$R, sidebar_width);
const SMain = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SMain",
  componentId: "sc-18b5nsd-2"
})(["width:100%;height:100%;padding:0px;margin:0px;max-width:100%;position:relative;@media only screen and (min-width:950px){width:calc(100vw - ", ");margin-left:", ";}"], sidebar_width, sidebar_width);
const SLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SLogo",
  componentId: "sc-18b5nsd-3"
})(["display:flex;align-items:center;height:", ";padding:0 0 0 1em;"], navbar_height);
const SNavBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Layout__SNavBar",
  componentId: "sc-18b5nsd-4"
})(["position:absolute;width:100%;height:", ";padding:0px;background-color:", ";z-index:1;display:flex;align-items:center;@media only screen and (max-width:950px){width:100%;align-content:center;justify-content:space-between;}@media only screen and (min-width:950px){width:100%;align-content:space-between;justify-content:space-between;}"], navbar_height, _constant_colors__WEBPACK_IMPORTED_MODULE_8__/* .almostBlack */ .y5);
const SNavBarActions = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SNavBarActions",
  componentId: "sc-18b5nsd-5"
})(["display:flex;width:100%;align-items:center;height:100%;@media only screen and (max-width:950px){display:none;}"]);
const SButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "Layout__SButton",
  componentId: "sc-18b5nsd-6"
})(["display:block;@media only screen and (max-width:950px){display:none;}"]);
const SPageName = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SPageName",
  componentId: "sc-18b5nsd-7"
})(["color:white;margin:0 0 0 2em;font-size:30px;font-weight:500;"]);
const SDisplayName = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SDisplayName",
  componentId: "sc-18b5nsd-8"
})(["color:white;font-size:18px;padding:0.5em 1em;border-radius:5px;cursor:pointer;"]);
const SProfileActions = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Layout__SProfileActions",
  componentId: "sc-18b5nsd-9"
})(["display:flex;align-items:center;justify-content:center;position:relative;color:white;margin:0 2em 0 0;font-size:18px;height:100%;&:hover ", "{background-color:", ";}"], SDisplayName, _constant_colors__WEBPACK_IMPORTED_MODULE_8__/* .darkBlue */ .$R);
const SContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default().main.withConfig({
  displayName: "Layout__SContent",
  componentId: "sc-18b5nsd-10"
})(["width:100%;height:calc(100vh - ", ");position:relative;top:", ";overflow-y:auto !important;z-index:0;div{}"], navbar_height, navbar_height);
function Layout({
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const childElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("null");
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const topPos = childElement.current;
    topPos.scrollIntoView();
  }, [router]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const split = router.pathname.split("/")[1];

    switch (split) {
      case "overview":
        setName("Overview");
        break;

      case "transactions":
        setName("Transactions");
        break;

      case "settings":
        setName("Settings");
        break;

      case "documentation":
        setName("API Doc");
        break;

      default:
        break;
    }
  }, [router]);
  const setActive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(iconName => {
    return iconName === name ? true : false;
  }, [name, router]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(SLayout, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SSidebar, {
      id: "sidebar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(SLogo, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "assets/reef-pay-small.png",
            alt: ""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            style: {
              flexGrow: 1
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_CloseSideBarMenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          setName: setName,
          active: setActive("Overview"),
          route: "/overview",
          name: "Overview",
          icon: "home"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          setName: setName,
          active: setActive("Transactions"),
          route: "/transactions",
          name: "Transactions",
          icon: "chart"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          setName: setName,
          active: setActive("Settings"),
          route: "/settings",
          name: "Settings",
          icon: "setting"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          style: {
            flexGrow: 1
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          setName: setName,
          active: setActive("API Doc"),
          route: "/documentation",
          name: "API Doc",
          icon: "document"
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SMain, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(SNavBar, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(SNavBarActions, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SPageName, {
              children: name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              style: {
                flexGrow: 1
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(SProfileActions, {
              onClick: () => {
                setShow(!show);
              },
              onMouseOver: () => {
                setShow(true);
              },
              onMouseLeave: () => {
                setShow(false);
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SDisplayName, {
                children: "kelvinpraises"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Logout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                show: show
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SideBarMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SContent, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            ref: childElement,
            children: children
          })
        })]
      })
    })]
  });
}
});

/***/ }),

/***/ 1987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogOut)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7871);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_0__]);
([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const SLogOut = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Logout__SLogOut",
  componentId: "sc-16c5h4k-0"
})(["top:85px;position:absolute;color:white;font-size:18px;padding:0.3em 1.5em;background-color:red;border-radius:5px;cursor:pointer;"]);
function LogOut({
  show = true
}) {
  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);

  if (!show) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SLogOut, {
    onClick: () => auth.signOut(),
    children: "Logout"
  });
}
});

/***/ }),

/***/ 1854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8478);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const SLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "NavItem__SLink",
  componentId: "sc-r6moo2-0"
})(["text-decoration:none;color:white;"]);
const SNavItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "NavItem__SNavItem",
  componentId: "sc-r6moo2-1"
})(["display:flex;align-items:center;justify-content:flex-start;margin:0.7em 1em;padding:1em;border-radius:7.8px;cursor:pointer;color:", ";font-weight:bold;*{transition:none !important;}&:hover{background-color:grey;}", ""], _constant_colors__WEBPACK_IMPORTED_MODULE_4__/* .grey */ .BA, ({
  active
}) => active && `
    color: white !important;
     background-color:${_constant_colors__WEBPACK_IMPORTED_MODULE_4__/* .darkBlue */ .$R};
     a{
      text-decoration: none;
      color: white !important;
     }`);

const NavItem = ({
  icon,
  route,
  name,
  children,
  active,
  setName
}) => {
  const location = () => {
    if (active) {
      return `/assets/${icon}-active.svg`;
    } else {
      return `/assets/${icon}-inactive.svg`;
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    onClick: () => setName(name),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      passHref: true,
      href: route,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SLink, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SNavItem, {
          active: active,
          className: "classNames",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
            src: location(),
            alt: ""
          }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            children: name
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ 1933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBarMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SideBarMenu__SDiv",
  componentId: "sc-9xxlp7-0"
})(["display:none;@media only screen and (max-width:950px){display:block;}"]);
function SideBarMenu() {
  function onOpen() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "block";
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(SDiv, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      onClick: onOpen,
      name: "open side bar",
      children: "open"
    })
  });
}

/***/ }),

/***/ 8478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y5": () => (/* binding */ almostBlack),
/* harmony export */   "$R": () => (/* binding */ darkBlue),
/* harmony export */   "BA": () => (/* binding */ grey)
/* harmony export */ });
/* unused harmony export white */
const almostBlack = "#151619";
const darkBlue = "#2A3244";
const white = "#FFFFFF";
const grey = "#D0D0D1";

/***/ }),

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ lightTheme),
/* harmony export */   "$": () => (/* binding */ darkTheme)
/* harmony export */ });
const lightTheme = {
  backgroundColor: "#FFFFFF",
  primary: "#512DA8",
  text: "#E2EFE6",
  // #121212
  error: "#D32F2F",
  dark: false
};
const darkTheme = {
  backgroundColor: "#121212",
  primary: "#B39DDB",
  text: "#E2EFE6",
  error: "#EF9A9A",
  dark: true
};

/***/ }),

/***/ 5075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);

/***/ }),

/***/ 3611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7254);
/* harmony import */ var _constant_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(868);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5075);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7871);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function MyApp({
  Component,
  pageProps
}) {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
  const {
    0: loggedIn,
    1: setLoggedIn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: auth,
    1: setAuth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    auth && setAuth(auth);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (auth !== null) {
      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, async user => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
    }
  }, [auth]);

  if (loggedIn) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_context_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Provider */ .Z.Provider, {
        value: setTheme,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
          theme: theme === "dark" ? _constant_theme__WEBPACK_IMPORTED_MODULE_4__/* .darkTheme */ .$ : _constant_theme__WEBPACK_IMPORTED_MODULE_4__/* .lightTheme */ .W,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles_global__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Component, _objectSpread({}, pageProps))
          })]
        })
      })
    });
  } else if (loggedIn === false) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_context_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Provider */ .Z.Provider, {
        value: setTheme,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
          theme: theme === "dark" ? _constant_theme__WEBPACK_IMPORTED_MODULE_4__/* .darkTheme */ .$ : _constant_theme__WEBPACK_IMPORTED_MODULE_4__/* .lightTheme */ .W,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles_global__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Component, _objectSpread({}, pageProps))]
        })
      })
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
});

/***/ }),

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none;}table{border-collapse:collapse;border-spacing:0;}a{text-decoration:none;padding:0;margin:0;height:fit-content;line-height:0;}html{font-family:'Roboto',sans-serif;font-size:1em;line-height:1.5;color:#333;min-width:1024px;margin:0 auto;}body{padding:0;line-height:1.5rem;margin:0 auto;background-color:", ";transition:background-color 0.5s;}h1,h2,h3,h4,h5,h6{color:#2e2e35;}"], ({
  theme
}) => theme.backgroundColor);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 8937:
/***/ ((module) => {

module.exports = import("firebase/functions");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,871], () => (__webpack_exec__(3611)));
module.exports = __webpack_exports__;

})();