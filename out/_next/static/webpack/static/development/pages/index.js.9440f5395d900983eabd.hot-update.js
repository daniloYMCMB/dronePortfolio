webpackHotUpdate("static/development/pages/index.js",{

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
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js";




class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    const width = window.innerWidth;

    (function () {
      var url = "https://daniloviacava-40daf.firebaseapp.com/static/video/IvanOspinaFMX.mp4";
      var player = dashjs.MediaPlayer().create();
      player.initialize(document.querySelector("#videoPlayer"), url, true);
      player.setAutoPlay(true);
    })();
  }

  render() {
    const {
      children,
      title,
      width
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2187934518" + " " + "Layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, user-scalable=no",
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: "/static/img/FAVICON-DOLAR.png",
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      charset: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2187934518",
      __self: this
    }, "@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'Montserrat';src:url('/static/fonts/Montserrat-Regular.woff2') format('woff2'), url('/static/fonts/Montserrat-Regular.woff') format('woff');font-weight:normal;font-style:normal;}body{overflow-x:hidden;}.Layout{height:100vh;font-family:'Viga';}.df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.container{max-width:960px;width:94%;margin:auto;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}.fp-controlArrow.fp-prev{width:30px !important;}@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}.firstSection{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(/static/img/bg1.svg) -233px 0px;background-size:cover;height:100%;position:relative;}.firstSection:before{content:\"\";background:url(/static/img/nubes1.svg) -35px 0px;background-size:cover;position:absolute;bottom:0;left:0;right:0;width:100%;height:30vh;}.firstSection:after{content:\"\";background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:30px;left:0;right:0;margin:auto;width:30px;height:30px;z-index:9;}.secondSection{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.section3{position:relative;}.section3:before{content:\"\";background:url(/static/img/nubes3.svg) center center no-repeat;background-size:cover;position:absolute;bottom:0;left:0;width:100%;z-index:9;height:30vh;}@media screen and (max-width:1024px){.section3:before{height:30vh;z-index:10;background-size:inherit;}}@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dc0IsQUFJd0IsQUFJTCxBQUtRLEFBV08sQUFRZixBQU9HLEFBa0JQLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSUosQUFLQyxBQUtNLEFBR0gsQUFHRCxBQVNBLEFBV0QsQUFVSCxBQVlBLEFBY1EsQUFPQSxBQUlQLEFBYUcsQUFRSSxBQUdILEFBR0QsQUFTQSxBQWFJLEFBSUEsQUFJSCxTQXpLZixFQXNCRyxBQXNEOEMsQUFZaEIsQUF5QjhCLENBL0YxRSxBQTRCd0QsQUFTQSxBQXVFaEMsQUFjZ0MsQUFTQSxDQXRNcEMsQUE0RlQsQUE4RkEsQ0FoSVgsQUFHQSxFQTlCVyxBQWlDWCxBQXlCVyxBQThGQSxFQTNMWCxBQTJKd0IsQUFPZixDQXpKcUMsQUE2Q3BDLEdBa0NWLENBNEZxQyxDQXhHckMsQ0F2RG9FLEFBMERsRCxDQTNDTCxFQW1CRyxJQWxEaEIsTUFnQ0EsSUEyQ0EsQ0F4QmMsSUE2SEgsR0FsR1csSUEyREMsQ0ExQ1ksQUFTQSxBQXFGQSxBQVNBLENBbEpWLElBeUVRLEVBckhzQixTQXVFdkQsR0F4RHdCLEFBMkZVLEFBZ0RELEVBeEJkLENBMUNLLEFBU0EsQUFxRkEsQUFTQSxHQWxKeEIsRUF5RTZCLEVBNEZqQixJQXpIYSxBQVNBLEFBcUZBLEFBU0EsSUFqRFMsQ0EyRHRCLEFBSUEsQ0EzRUMsQUFnRlosRUF4RDRCLElBakVRLEFBU0MsQUFvQmxCLEFBaUVpQixBQVNDLEdBVXJDLEFBSUEsR0EzRU8sR0FaVSxJQWFULENBdUJXLEVBbkNELEtBYU4sRUF1QkssQ0FuQ0ksTUFvQ0EsR0F2QlYsRUFaVyxNQW9DRixHQXZCUixHQVpKLElBb0NjLENBdkpBLElBZ0laLE9Bd0JGLEdBdkJBLEtBaElhLEVBTUYsQUEyRlUsV0FoQlAsQUE4RkEsR0FyRkMsQUE4RkEsRUF2THhCLEVBcUk4QixHQXBEbkIsQUE4RkEsSUFyRkEsQUE4RkEsNkNBbE1XLG1CQUNELElBZUYsQUEyRnVDLGNBekcxRCxJQWVBLEFBK0hTLDZCQXBDd0Isc0JBQ1YsWUFDTSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9kYW5pbG92aWFjYXZhLTQwZGFmLmZpcmViYXNlYXBwLmNvbS9zdGF0aWMvdmlkZW8vSXZhbk9zcGluYUZNWC5tcDRcIjtcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBkYXNoanMuTWVkaWFQbGF5ZXIoKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHBsYXllci5pbml0aWFsaXplKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW9QbGF5ZXJcIiksIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBwbGF5ZXIuc2V0QXV0b1BsYXkodHJ1ZSk7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG5cdHJlbmRlciAoKSB7XG5cblx0XHRjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgd2lkdGggfSA9IHRoaXMucHJvcHNcblx0XHRcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIj5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvc3RhdGljL2ltZy9GQVZJQ09OLURPTEFSLnBuZ1wiIC8+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhcnNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxuXG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5MYXlvdXQge1xuXHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdWaWdhJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBmb250LWZhY2V7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTonVmlnYSc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIuZW90dFwiKTtcblx0XHRcdFx0ICAgIHNyYzpsb2NhbCgn4pi6JyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci53b2ZmXCIpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIudHRmXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLnN2Z1wiKSBmb3JtYXQoJ3N2ZycpO1xuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuXHRcdFx0XHQgICAgZm9udC1zdHlsZTpub3JtYWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdEBmb250LWZhY2Uge1xuXHRcdFx0XHQgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0XHRcdFx0ICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcblx0XHRcdFx0ICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG5cdFx0XHRcdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHQgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmRmIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA5NjBweDtcblx0XHRcdFx0XHR3aWR0aDogOTQlO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcblx0XHRcdFx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuXHRcdFx0XHRhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5cdFx0XHRcdGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcblx0XHRcdFx0c21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcblx0XHRcdFx0YiwgdSwgaSwgY2VudGVyLFxuXHRcdFx0XHRkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuXHRcdFx0XHRmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcblx0XHRcdFx0dGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5cdFx0XHRcdGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuXHRcdFx0XHRmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5cdFx0XHRcdG1haW4sIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxuXHRcdFx0XHR0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEwMCU7XG5cdFx0XHRcdFx0Zm9udDogaW5oZXJpdDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcblx0XHRcdFx0Zm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0fVxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRvbCwgdWwge1xuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2txdW90ZSwgcSB7XG5cdFx0XHRcdFx0cXVvdGVzOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuXHRcdFx0XHRxOmJlZm9yZSwgcTphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdFx0Y29udGVudDogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YWJsZSB7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0XHRcdFx0XHRib3JkZXItc3BhY2luZzogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmZwLWNvbnRyb2xBcnJvdy5mcC1wcmV2IHtcblx0XHRcdFx0XHR3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0ICAgICAgICAgICAgICAuc2xpZGUge1xuXHQgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgLmZwLXJpZ2h0IHtcblx0ICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIC5mcC1jb250cm9sQXJyb3cuZnAtcHJldiB7XG5cdCAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5zdmcpO1xuXHQgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0ICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuXHQgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXHQgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXHQgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgLmZwLWNvbnRyb2xBcnJvdy5mcC1uZXh0IHtcblx0ICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuXHQgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLmZpcnN0U2VjdGlvbiB7XG5cdCAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblx0ICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9iZzEuc3ZnKSAtMjMzcHggMHB4O1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC5maXJzdFNlY3Rpb246YmVmb3JlIHtcblx0ICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XG5cdCAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL251YmVzMS5zdmcpIC0zNXB4IDBweDtcblx0ICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgICAgICAgICAgICBib3R0b206IDA7XG5cdCAgICAgICAgICAgICAgbGVmdDogMDtcblx0ICAgICAgICAgICAgICByaWdodDogMDtcblx0ICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblx0ICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAuZmlyc3RTZWN0aW9uOmFmdGVyIHtcblx0ICAgICAgICAgICAgXHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0Ym90dG9tOiAzMHB4O1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0XHR6LWluZGV4OiA5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLnNlY29uZFNlY3Rpb24ge1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAuc2VjdGlvbjMge1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC5zZWN0aW9uMzpiZWZvcmUge1xuXHQgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cdCAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL251YmVzMy5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgICAgICAgICAgIGJvdHRvbTogMDtcblx0ICAgICAgICAgICAgICBsZWZ0OiAwO1xuXHQgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG5cdCAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdCAgICAgICAgICAgICAgLnNlY3Rpb24zOmJlZm9yZSB7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG5cdCAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXHQgICAgICAgICAgICAgIC5zbGlkZSB7XG5cdCAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAuZnAtcmlnaHQge1xuXHQgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgLmZwLWNvbnRyb2xBcnJvdy5mcC1wcmV2IHtcblx0ICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdCAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAuZnAtY29udHJvbEFycm93LmZwLW5leHQge1xuXHQgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXHQgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL2Fycm93LWRvd24uc3ZnKTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcblx0ICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcblx0ICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5cdCAgICAgICAgICAgICAgICByaWdodDogMTBweDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXG5cdFx0XHRcdEBrZXlmcmFtZXMgdHJhbnNsYXRlQm90dG9tVG9Ub3Age1xuXHRcdFx0XHRcdDAlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDUwJSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQxMDAlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmRhc2hqcy5vcmcvbGF0ZXN0L2Rhc2guYWxsLm1pbi5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL2FwcHMuZWxmc2lnaHQuY29tL3AvcGxhdGZvcm0uanNcIiBkZWZlcj48L3NjcmlwdD5cblx0XHQ8L2Rpdj5cblxuXHR9XG59Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      src: "https://cdn.dashjs.org/latest/dash.all.min.js",
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      src: "https://apps.elfsight.com/p/platform.js",
      defer: true,
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }));
  }

}

/***/ })

})
//# sourceMappingURL=index.js.9440f5395d900983eabd.hot-update.js.map