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
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js";



class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    setTimeout(function () {
      var header = document.querySelector(".header-logo");
      header.classList.add('active');
      var socials = document.querySelector(".header-socialNetwork li");
      socials.classList.add('active');
    }, 500);
  }

  down() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-1077642533" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-1077642533" + " " + "df container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-1077642533" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Danilo Viacava"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-1077642533" + " " + "header-socialNetwork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.facebook.com/profile.php?id=100009455848617",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/facebookIcon.svg",
      alt: "",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.instagram.com/danilojesusv/",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/instagramIcon.svg",
      alt: "",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/whatsapp.png",
      alt: "",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: this.down,
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Cotizaci\xF3n Gratis")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1077642533",
      __self: this
    }, ".header.jsx-1077642533{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:999;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.header.jsx-1077642533 a.jsx-1077642533{color:white;}.header.jsx-1077642533 .container.jsx-1077642533{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-logo.jsx-1077642533{display:inline-block;margin:10px;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;}.header-logo.active.jsx-1077642533{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-socialNetwork.jsx-1077642533 li.jsx-1077642533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.header-socialNetwork.jsx-1077642533 li.active.jsx-1077642533{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-socialNetwork.jsx-1077642533 a.jsx-1077642533{margin:5px;padding:5px;}.header-socialNetwork.jsx-1077642533 a.jsx-1077642533:hover img.jsx-1077642533{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}.header-socialNetwork.jsx-1077642533 figure.jsx-1077642533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-socialNetwork.jsx-1077642533 figcaption.jsx-1077642533{margin:10px;color:white;}.header-socialNetwork.jsx-1077642533 img.jsx-1077642533{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:15px;height:15px;}@media screen and (max-width:650px){.header-socialNetwork.jsx-1077642533 a.jsx-1077642533{margin:0;}}@media screen and (max-width:400px){.header.jsx-1077642533{font-size:12px;}.header.jsx-1077642533 a.jsx-1077642533{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFHK0IsQUFVWCxBQUdrQixBQUdULEFBUVgsQUFJRyxBQU9ILEFBSUMsQUFJaUMsQUFHL0IsQUFJRCxBQUlNLEFBVVIsQUFNcUIsQUFHVCxTQVJ0QixBQVNZLENBakRZLEFBV0EsQ0FJWixDQTdCYixBQXdDYSxHQW9CQSxHQWhCSSxHQXRDSixFQWhCSSxBQXdDakIsQ0FXQSxTQWxDVyxDQXNDSyxLQXRERyxFQTBDbkIsRUF6QjRCLGNBaEJyQixNQUNDLE9BQ0ksRUFvRFcsRUE1QlosQUFrQlMsT0F6Q1AsR0F3QmUsU0F2QlIsQ0FtQnBCLEFBV0EsQUFxQlksV0FDQyxVQTdDYixFQThDQSxtQkF4Q2dCLCtCQTRCaEIsT0ExQkQsR0FTaUIsU0F2QmhCLDZCQXdCdUIsT0FWdkIsNkNBV0EiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdFxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuXHRcdFx0dmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWxvZ29cIilcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG5cdFx0XHR2YXIgc29jaWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXNvY2lhbE5ldHdvcmsgbGlcIilcblx0XHRcdHNvY2lhbHMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHR9LCA1MDApO1xuXG5cdH1cblxuXHRkb3duICgpIHtcblx0XHRmdWxscGFnZV9hcGkubW92ZVNlY3Rpb25Eb3duKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJkZiBjb250YWluZXJcIj5cblxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIiBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHREYW5pbG8gVmlhY2F2YVxuXHRcdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLXNvY2lhbE5ldHdvcmtcIj5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcHJvZmlsZS5waHA/aWQ9MTAwMDA5NDU1ODQ4NjE3XCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy9mYWNlYm9va0ljb24uc3ZnXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kYW5pbG9qZXN1c3YvXCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy9pbnN0YWdyYW1JY29uLnN2Z1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTUxOTMxNDQ3MDQxJnRleHQ9SG9sYSwlMjBxdWllcm8lMjByZWFsaXphciUyMG1pJTIwcHJveWVjdG9cIiA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3doYXRzYXBwLnBuZ1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17dGhpcy5kb3dufT5cblx0XHRcdFx0XHRcdFx0XHRcdENvdGl6YWNpw7NuIEdyYXRpc1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9uYXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTk5O1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlciBhIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlciAuY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1sb2dvIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjVzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAxc1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1sb2dvLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBsaSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjVzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAxLjVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGxpLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBhIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiA1cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBhOmhvdmVyIGltZyB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuODUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGZpZ3VyZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgZmlnY2FwdGlvbiB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGltZyB7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjNzO1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTVweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuXHRcdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgYSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdCAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcblx0XHRcdCAgICAgICAgICAgICAgICAuaGVhZGVyIHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXHRcdFx0ICAgICAgICAgICAgICAgIH1cblx0XHRcdCAgICAgICAgICAgICAgICAuaGVhZGVyIGEge1xuXHRcdFx0ICAgICAgICAgICAgICAgIFx0bWFyZ2luOiAwO1xuXHRcdFx0ICAgICAgICAgICAgICAgIH1cblx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvaGVhZGVyPlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.246439f1d96f5f6aed4d.hot-update.js.map