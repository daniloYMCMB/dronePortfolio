webpackHotUpdate("static/development/pages/diseno-web.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js";





class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    const width = window.innerWidth;
  }

  render() {
    const {
      children,
      title,
      width
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1615558921" + " " + "Layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-1615558921",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, user-scalable=no",
      className: "jsx-1615558921",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: "/static/img/FAVICON-DOLAR.png",
      className: "jsx-1615558921",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      charset: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
      className: "jsx-1615558921",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      className: "jsx-1615558921",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1615558921",
      __self: this
    }, "@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'Poppins';src:url(\"/static/fonts/Poppins-ExtraLight.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraLight.wofff\") format('woff'), url(\"/static/fonts/Poppins-ExtraLight.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraLight.svg\") format('svg');}@font-face{font-family:'Poppins-Bold';src:url(\"/static/fonts/Poppins-ExtraBold.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraBold.woff\") format('woff'), url(\"/static/fonts/Poppins-ExtraBold.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraBold.svg\") format('svg');}body{overflow-x:hidden;}.Layout{height:100vh;font-family:\"Poppins\",Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;font-weight:600;font-style:normal;}.df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.container{max-width:960px;width:94%;margin:auto;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDc0IsQUFJd0IsQUFJTCxBQVNRLEFBV0ksQUFTSyxBQVNqQixBQU9HLEFBa0JQLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSUosQUFNTyxBQUlBLEFBSUgsU0EzQ2YsRUFzQkcsQ0FKZCxDQWpGcUQsQ0F3RXJELEFBR0EsRUE5QlcsQUFpQ1gsRUFsRkEsQ0FhOEMsQUF1RHBDLEdBNUN5QyxFQWtFbkQsQ0FHa0IsQ0EzQ0wsQ0FqQnFDLENBb0NsQyxVQWxCaEIsSUEyQ0EsQ0F4QmMsT0EyQlEsTUExQkcsTUFsRVQsQUFZdUMsUUFXTSxDQXNFN0QsR0E3RDRELEFBS3BDLEdBcENOLEdBa0VsQixJQXVDWSxTQVJBLEFBSUEsQ0FwR0ssQUF5R2hCLFNBUkEsQUFJQSxPQXBHa0Isa0JBQ25CLDZDQWtDb0Isc0VBekJFLG1CQUNELElBeUJGLElBZm5CLEFBU0EsVUFsQkEsSUF5QkEiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgdGl0bGUsIHdpZHRoIH0gPSB0aGlzLnByb3BzXG5cdFx0XG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiTGF5b3V0XCI+XG5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cblxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCB1c2VyLXNjYWxhYmxlPW5vXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL3N0YXRpYy9pbWcvRkFWSUNPTi1ET0xBUi5wbmdcIiAvPlxuXHRcdFx0XHRcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJzZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cblxuXHRcdFx0PC9IZWFkPlxuXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuXHRcdFx0XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cblx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQuTGF5b3V0IHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAZm9udC1mYWNle1xuXHRcdFx0XHQgICAgZm9udC1mYW1pbHk6J1ZpZ2EnO1xuXHRcdFx0XHQgICAgc3JjOnVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLmVvdHRcIik7XG5cdFx0XHRcdCAgICBzcmM6bG9jYWwoJ+KYuicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0ICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcblx0XHRcdFx0ICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRAZm9udC1mYWNlIHtcblx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhTGlnaHQuZW90XCIpO1xuXHRcdFx0XHQgICAgc3JjOmxvY2FsKCfimLonKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvUG9wcGlucy1FeHRyYUxpZ2h0LndvZmZmXCIpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhTGlnaHQudHRmXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvUG9wcGlucy1FeHRyYUxpZ2h0LnN2Z1wiKSBmb3JtYXQoJ3N2ZycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRAZm9udC1mYWNlIHtcblx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1Cb2xkJztcblx0XHRcdFx0ICAgIHNyYzp1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLmVvdFwiKTtcblx0XHRcdFx0ICAgIHNyYzpsb2NhbCgn4pi6JyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLndvZmZcIikgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZlwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnN2Z1wiKSBmb3JtYXQoJ3N2ZycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmRmIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA5NjBweDtcblx0XHRcdFx0XHR3aWR0aDogOTQlO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcblx0XHRcdFx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuXHRcdFx0XHRhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5cdFx0XHRcdGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcblx0XHRcdFx0c21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcblx0XHRcdFx0YiwgdSwgaSwgY2VudGVyLFxuXHRcdFx0XHRkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuXHRcdFx0XHRmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcblx0XHRcdFx0dGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5cdFx0XHRcdGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuXHRcdFx0XHRmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5cdFx0XHRcdG1haW4sIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxuXHRcdFx0XHR0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEwMCU7XG5cdFx0XHRcdFx0Zm9udDogaW5oZXJpdDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcblx0XHRcdFx0Zm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0fVxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRvbCwgdWwge1xuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2txdW90ZSwgcSB7XG5cdFx0XHRcdFx0cXVvdGVzOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuXHRcdFx0XHRxOmJlZm9yZSwgcTphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdFx0Y29udGVudDogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YWJsZSB7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0XHRcdFx0XHRib3JkZXItc3BhY2luZzogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QGtleWZyYW1lcyB0cmFuc2xhdGVCb3R0b21Ub1RvcCB7XG5cdFx0XHRcdFx0MCUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0NTAlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDEwMCUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hcHBzLmVsZnNpZ2h0LmNvbS9wL3BsYXRmb3JtLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XG5cdFx0PC9kaXY+XG5cblx0fVxufSJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      src: "https://apps.elfsight.com/p/platform.js",
      defer: true,
      className: "jsx-1615558921",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }));
  }

}

/***/ })

})
//# sourceMappingURL=diseno-web.js.16ebb9baef3e722172fd.hot-update.js.map