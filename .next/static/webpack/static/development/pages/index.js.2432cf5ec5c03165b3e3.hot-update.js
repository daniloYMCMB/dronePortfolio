webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Footer.js";




class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    setTimeout(function () {
      var header = document.querySelector(".header-logo");
      header.classList.add('active');
    }, 1000);
    setTimeout(function () {
      var menu = document.querySelector(".header-menu");
      menu.classList.add('active');
    }, 1100);
    const widthScreen = window.innerWidth;

    if (widthScreen < 767) {
      setTimeout(function () {
        var menu = document.querySelector(".header-menu");
        menu.classList.remove('active');
      }, 1100);
    }
  }

  menuMobile(e) {
    const menu_mobile = document.getElementById("header_menu");
    menu_mobile.classList.toggle('active');
    const menu_mobile_btn = document.getElementById("menu-mobile-btn");
    menu_mobile_btn.classList.toggle('active');
    const cortina = document.getElementById("cortina");
    cortina.classList.toggle('active');
  }

  cortina() {
    const menu_mobile = document.getElementById("header_menu");
    menu_mobile.classList.remove('active');
    const menu_mobile_btn = document.getElementById("menu-mobile-btn");
    menu_mobile_btn.classList.remove('active');
    const cortina = document.getElementById("cortina");
    cortina.classList.remove('active');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
      className: "jsx-1664979986" + " " + "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1664979986" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1664979986",
      __self: this
    }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEaUIiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1sb2dvXCIpXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHR9LCAxMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG5cdFx0XHR2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLW1lbnVcIilcblx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHR9LCAxMTAwKTtcblxuXHRcdGNvbnN0IHdpZHRoU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRpZih3aWR0aFNjcmVlbiA8IDc2Nykge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdFx0dmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1tZW51XCIpXG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0XHRcdH0sIDExMDApO1xuXHRcdH1cblx0fVxuXG5cdG1lbnVNb2JpbGUoZSkge1xuXHRcdGNvbnN0IG1lbnVfbW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJfbWVudVwiKTtcblx0XHRtZW51X21vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRjb25zdCBtZW51X21vYmlsZV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbW9iaWxlLWJ0blwiKTtcblx0XHRtZW51X21vYmlsZV9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0Y29uc3QgY29ydGluYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29ydGluYVwiKTtcblx0XHRjb3J0aW5hLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHR9XG5cblx0Y29ydGluYSgpIHtcblx0XHRjb25zdCBtZW51X21vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyX21lbnVcIik7XG5cdFx0bWVudV9tb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0Y29uc3QgbWVudV9tb2JpbGVfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LW1vYmlsZS1idG5cIik7XG5cdFx0bWVudV9tb2JpbGVfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdGNvbnN0IGNvcnRpbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcnRpbmFcIik7XG5cdFx0Y29ydGluYS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZm9vdGVyPlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Footer.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.2432cf5ec5c03165b3e3.hot-update.js.map