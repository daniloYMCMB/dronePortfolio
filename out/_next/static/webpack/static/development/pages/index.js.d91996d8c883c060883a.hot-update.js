webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
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
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js";




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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-733721871" + " " + "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-733721871" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-733721871" + " " + "df container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-733721871" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "TECNOVA.IO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.menuMobile,
      id: "menu-mobile-btn",
      className: "jsx-733721871" + " " + "menu-mobile-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      id: "header_menu",
      className: "jsx-733721871" + " " + "header-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/diseno-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Dise\xF1o web")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/imagenes-de-drones",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Im\xE1genes de drones")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/portafolio",
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Portafolio"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/conocenos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Con\xF3cenos")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-733721871" + " " + "sub-menu-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "#TECNOVA.IO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-733721871" + " " + "sub-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/viaje-de-trabajo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Viaje de trabajo")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contacto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Contacto")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'none'
      },
      className: "jsx-733721871" + " " + "header-socialNetwork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.facebook.com/profile.php?id=100009455848617",
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/facebookIcon.svg",
      alt: "",
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.instagram.com/danilojesusv/",
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/instagramIcon.svg",
      alt: "",
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/whatsapp.png",
      alt: "",
      className: "jsx-733721871",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.cortina,
      id: "cortina",
      className: "jsx-733721871" + " " + "cortina",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "733721871",
      __self: this
    }, ".cortina.jsx-733721871{background:black;opacity:.7;position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:991;}.cortina.active.jsx-733721871{display:block;}.header.jsx-733721871{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:999;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:13px;font-weight:bold;}.header.jsx-733721871:before{content:\"\";background:linear-gradient(180deg,#9292926b 0,#ffffff00);position:absolute;top:-10px;left:0;width:100%;height:200%;}.header.jsx-733721871 a.jsx-733721871{color:white;}.header.jsx-733721871 .container.jsx-733721871{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-logo.jsx-733721871{display:inline-block;margin:10px;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;font-family:Viga;font-size:20px;}.header-logo.active.jsx-733721871{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-menu.jsx-733721871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.header-menu.active.jsx-733721871{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-menu.jsx-733721871 a.jsx-733721871,.header-socialNetwork.jsx-733721871 a.jsx-733721871{margin:5px;padding:5px;-webkit-transition:.25s linear;transition:.25s linear;position:relative;}.header-menu.jsx-733721871 a.jsx-733721871:before,.header-socialNetwork.jsx-733721871 a.jsx-733721871:before{content:\"\";position:absolute;background:white;bottom:0px;width:0%;height:2px;-webkit-transition:.25s ease;transition:.25s ease;right:0;left:0;margin:auto;}.header-menu.jsx-733721871 a.jsx-733721871:hover:before,.header-socialNetwork.jsx-733721871 a.jsx-733721871:hover:before{width:100%;}.sub-menu.jsx-733721871{position:absolute;font-size:10px;opacity:0;visibility:hidden;-webkit-transition:.25s linear;transition:.25s linear;}.sub-menu-btn.jsx-733721871{cursor:pointer;}.sub-menu-btn.jsx-733721871:hover .sub-menu.jsx-733721871{opacity:1;visibility:visible;}.header-socialNetwork.jsx-733721871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-socialNetwork.jsx-733721871 a.jsx-733721871:hover img.jsx-733721871{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}.header-socialNetwork.jsx-733721871 figure.jsx-733721871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-socialNetwork.jsx-733721871 figcaption.jsx-733721871{margin:10px;color:white;}.header-socialNetwork.jsx-733721871 img.jsx-733721871{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:15px;height:15px;}.menu-mobile-btn.jsx-733721871{display:none;cursor:pointer;}@media screen and (max-width:900px){.header-menu.jsx-733721871 a.jsx-733721871{font-size:12px;margin:2px;padding:5px;}}@media screen and (max-width:767px){.header-menu.jsx-733721871{position:absolute;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;right:-185px;top:10px;background:#00bcd4;padding:20px;-webkit-transition-delay:inherit;transition-delay:inherit;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;-webkit-transform:inherit;-ms-transform:inherit;transform:inherit;}.header-menu.active.jsx-733721871{right:20px;}.menu-mobile-btn.jsx-733721871{display:block;position:absolute;top:10px;right:20px;width:30px;height:30px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;background:white;}.menu-mobile-btn.jsx-733721871:before{content:\"\";position:absolute;top:10px;left:0;right:0;margin:auto;background:#bababa;width:18px;height:2px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;}.menu-mobile-btn.jsx-733721871:after{content:\"\";position:absolute;top:18px;left:0;right:0;margin:auto;background:#bababa;width:18px;height:2px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;}.menu-mobile-btn.active.jsx-733721871:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:14px;}.menu-mobile-btn.active.jsx-733721871:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:14px;}.menu-mobile-btn.active.jsx-733721871{right:210px;}.sub-menu.jsx-733721871{position:relative;opacity:1;visibility:visible;}}@media screen and (max-width:650px){.header-socialNetwork.jsx-733721871 a.jsx-733721871{margin:0;}}@media screen and (max-width:400px){.header.jsx-733721871{font-size:12px;padding-top:18px;}.header.jsx-733721871 a.jsx-733721871{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIaUIsQUFHeUIsQUFXSCxBQUlTLEFBWVosQUFTQyxBQUdrQixBQUdULEFBVVgsQUFJRyxBQU9ILEFBS0MsQUFPQSxBQWFBLEFBR08sQUFPSCxBQUdMLEFBSUcsQUFNK0IsQUFHL0IsQUFJRCxBQUlNLEFBU0wsQUFNRyxBQVFHLEFBWVAsQUFJRyxBQVdILEFBYUEsQUFhYSxBQUlDLEFBSWIsQUFJTSxBQVFULEFBTXFCLEFBSVQsU0FUdEIsQUFVWSxDQWhMWSxBQVdBLEFBc0NMLENBMUVzQyxBQXlDN0MsQUFPTSxBQWFuQixBQXFFQyxBQWVtQixBQWFBLENBckpwQixBQWtGYSxBQXdGWixDQTNFZSxDQXhIaEIsQUFzSm9CLENBL0RwQixBQXVDYSxBQXVGcUIsRUFoT3RCLENBMkZJLEFBK0JDLEFBdUJPLEFBaUVaLEdBeEtDLEVBM0JJLEFBc0RPLENBa0R4QixFQW1CYyxFQXpJRSxBQW1JaEIsQUErRXFCLENBdklILEFBMEJsQixBQXVFVyxBQWFBLEdBeEJBLEFBK0RFLENBdExGLEFBaURBLENBK0JLLElBZ0JmLEFBbUNRLEFBYUEsQ0EzS1UsRUErRm5CLEFBb0RhLEVBaktOLEFBMENxQixBQWlEVCxFQWtGVCxBQWFBLENBL0dFLENBdUlYLEVBak5PLEdBaUtLLENBWUMsQUFhQSxHQXpMRixDQWFMLEFBNkRHLElBZ0JjLEVBNUVoQixBQW1KTSxFQVlPLEFBYUEsQ0EvR1QsQ0ExRUMsQ0F1Qk0sRUFUUCxFQXlHVyxFQXBFWixBQWlEUyxBQVNBLENBb0RBLEVBaEdELEFBVUcsRUExRVIsRUFjRCxHQXFDZSxBQXlIZixBQWFBLEFBT0YsRUF6S0EsQ0E2S0EsS0FuTUUsQ0FjTyxBQWtKRyxBQWdDdEIsQ0FsSkQsQUFXQSxBQTZEWSxDQXREWixBQTRHYSxBQWFBLENBbEtMLEFBb0hPLEFBeURkLE9BNUtXLENBdkJaLENBc0hhLENBc0RPLEFBYUEsR0E5Q1QsS0FuSEUsQ0FPYixBQXdEQSxFQWdDQSxDQXFCcUIsTUFpQ0UsQUFhQSxFQWpLdkIsQ0FnRFMsUUFDRCxDQXJDUSxDQXdHRCxLQWxFRixDQXFGTSxPQWxCUSxJQWxFM0IsTUFxRkMsT0EvRHVCLEFBU3hCLE9BckVxQixBQXdJcEIsQUFhQSxHQXpJZSxTQXBDQSxlQUNFLE9BZ0lFLE9BNUZHLEdBbkN2QixJQXVCa0IsSUF5R0ssYUF4R1AsZUFDaEIsWUEyREEsQ0FoREEsU0E2Rm9CLGtFQUNuQiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuXHRcdFx0dmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWxvZ29cIilcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXHRcdH0sIDEwMDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdHZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItbWVudVwiKVxuXHRcdFx0bWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXHRcdH0sIDExMDApO1xuXG5cdFx0Y29uc3Qgd2lkdGhTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGlmKHdpZHRoU2NyZWVuIDwgNzY3KSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuXHRcdFx0XHR2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLW1lbnVcIilcblx0XHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXHRcdFx0fSwgMTEwMCk7XG5cdFx0fVxuXHR9XG5cblx0bWVudU1vYmlsZShlKSB7XG5cdFx0Y29uc3QgbWVudV9tb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9tZW51XCIpO1xuXHRcdG1lbnVfbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdGNvbnN0IG1lbnVfbW9iaWxlX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1tb2JpbGUtYnRuXCIpO1xuXHRcdG1lbnVfbW9iaWxlX2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRjb25zdCBjb3J0aW5hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3J0aW5hXCIpO1xuXHRcdGNvcnRpbmEuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdH1cblxuXHRjb3J0aW5hKCkge1xuXHRcdGNvbnN0IG1lbnVfbW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJfbWVudVwiKTtcblx0XHRtZW51X21vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRjb25zdCBtZW51X21vYmlsZV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbW9iaWxlLWJ0blwiKTtcblx0XHRtZW51X21vYmlsZV9idG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0Y29uc3QgY29ydGluYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29ydGluYVwiKTtcblx0XHRjb3J0aW5hLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gXHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImRmIGNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFRFQ05PVkEuSU9cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLWJ0blwiIG9uQ2xpY2s9e3RoaXMubWVudU1vYmlsZX0gaWQ9XCJtZW51LW1vYmlsZS1idG5cIiA+PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PHVsIGlkPVwiaGVhZGVyX21lbnVcIiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZGlzZW5vLXdlYlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+RGlzZcOxbyB3ZWI8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvaW1hZ2VuZXMtZGUtZHJvbmVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5JbcOhZ2VuZXMgZGUgZHJvbmVzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL3BvcnRhZm9saW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+UG9ydGFmb2xpbzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY29ub2Nlbm9zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Db27Ds2Nlbm9zPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwic3ViLW1lbnUtYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPiNURUNOT1ZBLklPPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdmlhamUtZGUtdHJhYmFqb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5WaWFqZSBkZSB0cmFiYWpvPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY29udGFjdG9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPkNvbnRhY3RvPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvbmF2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zb2NpYWxOZXR3b3JrXCIgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cblx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wcm9maWxlLnBocD9pZD0xMDAwMDk0NTU4NDg2MTdcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy9mYWNlYm9va0ljb24uc3ZnXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Rhbmlsb2plc3Vzdi9cIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy9pbnN0YWdyYW1JY29uLnN2Z1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTE5MzE0NDcwNDEmdGV4dD1Ib2xhLCUyMHF1aWVybyUyMHJlYWxpemFyJTIwbWklMjBwcm95ZWN0b1wiID5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3doYXRzYXBwLnBuZ1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLmNvcnRpbmF9IGlkPVwiY29ydGluYVwiIGNsYXNzTmFtZT1cImNvcnRpbmFcIj48L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5jb3J0aW5hIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IC43O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTkxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNvcnRpbmEuYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzkyOTI5MjZiIDAsI2ZmZmZmZjAwKTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IC0xMHB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMDAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlciBhIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlciAuY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1sb2dvIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjVzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAxcztcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbG9nby5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLW1lbnUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC41cztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMS41cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbWVudS5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLW1lbnUgYSxcblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBhIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiA1cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjI1cyBsaW5lYXI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbWVudSBhOmJlZm9yZSxcblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBhOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLW1lbnUgYTpob3ZlciA6YmVmb3JlLFxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGE6aG92ZXIgOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnN1Yi1tZW51IHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjI1cyBsaW5lYXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc3ViLW1lbnUtYnRuIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnN1Yi1tZW51LWJ0bjpob3ZlciAuc3ViLW1lbnUge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdC8vIGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgYTpob3ZlciBpbWcge1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjg1KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBmaWd1cmUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBpbWcge1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC4zcztcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTVweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Lm1lbnUtbW9iaWxlLWJ0biB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblx0XHRcdFx0XHRcdFx0LmhlYWRlci1tZW51IGEge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDJweDtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdFx0XHRcdFx0LmhlYWRlci1tZW51IHtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogLTE4NXB4O1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDBiY2Q0O1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogaW5oZXJpdDtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogaW5oZXJpdDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuaGVhZGVyLW1lbnUuYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5tZW51LW1vYmlsZS1idG4ge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm1lbnUtbW9iaWxlLWJ0bjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmFiYWJhO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm1lbnUtbW9iaWxlLWJ0bjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNiYWJhYmE7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAycHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC4yNXMgZWFzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQubWVudS1tb2JpbGUtYnRuLmFjdGl2ZTpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm1lbnUtbW9iaWxlLWJ0bi5hY3RpdmU6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5tZW51LW1vYmlsZS1idG4uYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMjEwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuc3ViLW1lbnUge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0XHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblx0XHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGEge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHQgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG5cdFx0XHQgICAgICAgICAgICAgICAgLmhlYWRlciB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4cHg7XG5cdFx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICAgICAgICAgIC5oZWFkZXIgYSB7XG5cdFx0XHQgICAgICAgICAgICAgICAgXHRtYXJnaW46IDA7XG5cdFx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.d91996d8c883c060883a.hot-update.js.map