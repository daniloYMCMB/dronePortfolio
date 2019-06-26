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
      className: "jsx-1073274368" + " " + "Layout",
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
      className: "jsx-1073274368",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, user-scalable=no",
      className: "jsx-1073274368",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: "/static/img/FAVICON-DOLAR.png",
      className: "jsx-1073274368",
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
      className: "jsx-1073274368",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      className: "jsx-1073274368",
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
      id: "1073274368",
      __self: this
    }, "@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'Poppins';src:url(\"/static/fonts/Poppins-ExtraLight.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraLight.wofff\") format('woff'), url(\"/static/fonts/Poppins-ExtraLight.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraLight.svg\") format('svg');}@font-face{font-family:'Poppins-Bold';src:url(\"/static/fonts/Poppins-ExtraBold.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraBold.woff\") format('woff'), url(\"/static/fonts/Poppins-ExtraBold.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraBold.svg\") format('svg');}body{overflow-x:hidden;}.Layout{height:100vh;font-family:\"Poppins\",Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;font-weight:600;font-style:normal;}.df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.container{max-width:960px;width:94%;margin:auto;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}.fp-controlArrow.fp-prev{width:30px !important;}@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDc0IsQUFJd0IsQUFJTCxBQVNRLEFBV0ksQUFTSyxBQVNqQixBQU9HLEFBa0JQLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSUosQUFLQyxBQUtNLEFBSUEsQUFJSCxTQS9DZixFQXNCRyxDQUpkLENBakZxRCxDQXdFckQsQUFHQSxFQTlCVyxBQWlDWCxFQWxGQSxDQWE4QyxBQXVEcEMsR0E1Q3lDLEFBOEVuRCxFQVpBLENBR2tCLENBM0NMLENBakJxQyxDQW9DbEMsVUFsQmhCLElBMkNBLENBeEJjLE9BMkJRLE1BMUJHLE1BbEVULEFBWXVDLFFBV00sQ0FzRTdELEdBN0Q0RCxBQUtwQyxHQXBDTixHQWtFbEIsSUEyQ1ksU0FSQSxBQUlBLENBeEdLLEFBNkdoQixTQVJBLEFBSUEsT0F4R2tCLGtCQUNuQiw2Q0FrQ29CLHNFQXpCRSxtQkFDRCxJQXlCRixJQWZuQixBQVNBLFVBbEJBLElBeUJBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlLCB3aWR0aCB9ID0gdGhpcy5wcm9wc1xuXHRcdFxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiPlxuXG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9zdGF0aWMvaW1nL0ZBVklDT04tRE9MQVIucG5nXCIgLz5cblx0XHRcdFx0XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyc2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XG5cblx0XHRcdDwvSGVhZD5cblxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cblx0XHRcdFxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LkxheW91dCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QGZvbnQtZmFjZXtcblx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OidWaWdhJztcblx0XHRcdFx0ICAgIHNyYzp1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci5lb3R0XCIpO1xuXHRcdFx0XHQgICAgc3JjOmxvY2FsKCfimLonKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLndvZmZcIikgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIuc3ZnXCIpIGZvcm1hdCgnc3ZnJyk7XG5cdFx0XHRcdCAgICBmb250LXdlaWdodDpub3JtYWw7XG5cdFx0XHRcdCAgICBmb250LXN0eWxlOm5vcm1hbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdFx0XHQgICAgc3JjOnVybChcIi9zdGF0aWMvZm9udHMvUG9wcGlucy1FeHRyYUxpZ2h0LmVvdFwiKTtcblx0XHRcdFx0ICAgIHNyYzpsb2NhbCgn4pi6JyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFMaWdodC53b2ZmZlwiKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvUG9wcGlucy1FeHRyYUxpZ2h0LnR0ZlwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFMaWdodC5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtQm9sZCc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC5lb3RcIik7XG5cdFx0XHRcdCAgICBzcmM6bG9jYWwoJ+KYuicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC53b2ZmXCIpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5kZiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jb250YWluZXIge1xuXHRcdFx0XHRcdG1heC13aWR0aDogOTYwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDk0JTtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5cdFx0XHRcdGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcblx0XHRcdFx0YSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuXHRcdFx0XHRkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5cdFx0XHRcdHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5cdFx0XHRcdGIsIHUsIGksIGNlbnRlcixcblx0XHRcdFx0ZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcblx0XHRcdFx0ZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG5cdFx0XHRcdHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuXHRcdFx0XHRhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcblx0XHRcdFx0ZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxuXHRcdFx0XHRtYWluLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcblx0XHRcdFx0dGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRib3JkZXI6IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMDAlO1xuXHRcdFx0XHRcdGZvbnQ6IGluaGVyaXQ7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5cdFx0XHRcdGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2wsIHVsIHtcblx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrcXVvdGUsIHEge1xuXHRcdFx0XHRcdHF1b3Rlczogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcblx0XHRcdFx0cTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRcdGNvbnRlbnQ6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFibGUge1xuXHRcdFx0XHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdFx0XHRcdFx0Ym9yZGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5mcC1jb250cm9sQXJyb3cuZnAtcHJldiB7XG5cdFx0XHRcdFx0d2lkdGg6IDMwcHggIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBrZXlmcmFtZXMgdHJhbnNsYXRlQm90dG9tVG9Ub3Age1xuXHRcdFx0XHRcdDAlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDUwJSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQxMDAlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vYXBwcy5lbGZzaWdodC5jb20vcC9wbGF0Zm9ybS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxuXHRcdDwvZGl2PlxuXG5cdH1cbn0iXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      src: "https://apps.elfsight.com/p/platform.js",
      defer: true,
      className: "jsx-1073274368",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }));
  }

}

/***/ })

})
//# sourceMappingURL=diseno-web.js.7a5d6b8a70e23967da8f.hot-update.js.map