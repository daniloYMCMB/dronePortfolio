module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BannerServicesInterna.js":
/*!*********************************************!*\
  !*** ./components/BannerServicesInterna.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServicesInterna.js";




class BannerServices extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      i1: "https://www.youtube.com/embed/",
      i2: this.props.iframe + "",
      i3: "?autoplay=1&controls=0&loop=1&mute=1&playlist=xJAwnCMgqCg"
    };
  }

  componentDidMount() {
    setTimeout(function () {
      var videoBanner = document.querySelector(".videoBanner-title");
      videoBanner.classList.add('active');
      var videoBanner = document.querySelector(".videoBanner-paragraph");
      videoBanner.classList.add('active');
    }, 500);
  }

  handleDown() {// fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "videoBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "videoBanner-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "vimeo-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: this.state.i1 + this.state.i2 + this.state.i3,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-227541481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "container videoBanner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-227541481" + " " + "videoBanner-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-227541481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: this.props.style,
      className: "jsx-227541481" + " " + "videoBanner-paragraph",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, this.props.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
      clase: "colorWhite",
      href: "",
      name: this.props.btn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "section-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "cuadrado",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "arrow-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-227541481" + " " + "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "227541481",
      __self: this
    }, ".videoBanner.jsx-227541481{height:85vh;position:relative;}.vimeo-wrapper.jsx-227541481{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-227541481:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(to right top,transparent 33%,black 33%,black 66%,transparent 66%);background-size:3px 3px;opacity:0.6;z-index:1;pointer-events:none;}.vimeo-wrapper.jsx-227541481 iframe.jsx-227541481{width:100vw;height:56.25vw;min-height:106vh;min-width:201.77vh;position:absolute;top:47%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.videoBanner-text.jsx-227541481{position:absolute;left:0;right:0;width:100%;top:-70px;bottom:0;height:90px;color:white;z-index:9;font-family:Viga;padding-left:20px;box-sizing:border-box;}.videoBanner-paragraph.jsx-227541481{max-width:400px;font-family:Poppins;margin:10px 0;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2.4s;transition-delay:2.4s;}.videoBanner-paragraph.active.jsx-227541481{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-227541481{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2s;transition-delay:2s;}.videoBanner-title.active.jsx-227541481{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-227541481 br.jsx-227541481{display:none;}@media screen and (max-width:768px){.videoBanner-title.jsx-227541481 br.jsx-227541481{display:block;}}@media screen and (max-width:600px){.videoBanner.jsx-227541481{box-shadow:none;}.vimeo-wrapper.jsx-227541481 video.jsx-227541481{left:80%;}.videoBanner-text.jsx-227541481{top:-130px;}.videoBanner-text.jsx-227541481 br.jsx-227541481{display:none;}.videoBanner-title.jsx-227541481{font-size:35px;}.videoBanner-skills.jsx-227541481{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-227541481 li.jsx-227541481{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-227541481 p.jsx-227541481 span.jsx-227541481{display:none;}}@media screen and (max-width:400px){.videoBanner-text.jsx-227541481{top:-60px;height:80px;}.videoBanner-title.jsx-227541481{font-size:25px;}.videoBanner-skills.jsx-227541481 figure.jsx-227541481{margin-bottom:10px;}.videoBanner-skills.jsx-227541481 img.jsx-227541481{width:25px;height:25px;}.videoBanner-skills.jsx-227541481 h2.jsx-227541481{font-size:11px;}.videoBanner-skills.jsx-227541481 p.jsx-227541481{font-size:9px;}}@-webkit-keyframes translateBottomToTop-jsx-227541481{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop-jsx-227541481{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}.section-down.jsx-227541481{position:absolute;bottom:1px;height:60px;left:0;width:100%;z-index:9;}.cuadrado.jsx-227541481{width:60px;height:60px;border-radius:6px 0px 0px 0px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background:white;position:absolute;left:95px;bottom:-32px;}.arrow-down.jsx-227541481{width:30px;height:20px;margin:0 0 0 -30px;position:absolute;left:140px;bottom:0px;-webkit-animation:arrow-jsx-227541481 .6s 1s infinite ease-out alternate;animation:arrow-jsx-227541481 .6s 1s infinite ease-out alternate;}.arrow-down.jsx-227541481:hover{-webkit-animation-play-state:paused;animation-play-state:paused;}.left.jsx-227541481{position:absolute;height:3px;width:15px;background:gray;-webkit-transform:rotate(230deg);top:13px;left:8px;border-radius:4px;-webkit-transform-origin:5px 50%;-ms-transform-origin:5px 50%;transform-origin:5px 50%;}.right.jsx-227541481{position:absolute;height:3px;width:15px;background:gray;-webkit-transform:rotate(-50deg);top:13px;left:13px;border-radius:4px;-webkit-transform-origin:5px 50%;-ms-transform-origin:5px 50%;transform-origin:5px 50%;}@-webkit-keyframes arrow-jsx-227541481{0%{bottom:0px;}100%{bottom:10px;}}@keyframes arrow-jsx-227541481{0%{bottom:0px;}100%{bottom:10px;}}@-webkit-keyframes leftArrow-jsx-227541481{100%{-webkit-transform:rotate(225deg);}}@keyframes leftArrow-jsx-227541481{100%{-webkit-transform:rotate(225deg);}}@-webkit-keyframes rightArrow-jsx-227541481{100%{-webkit-transform:rotate(-45deg);}}@keyframes rightArrow-jsx-227541481{100%{-webkit-transform:rotate(-45deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXNJbnRlcm5hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEaUIsQUFHeUMsQUFJTSxBQVNQLEFBYUMsQUFXTSxBQWVGLEFBVU4sQUFLSyxBQVNMLEFBS0csQUFLSyxBQU9uQixBQUVjLEFBR0UsQUFHRSxBQUdFLEFBR0EsQUFHTCxBQUtHLEFBTUgsQUFJSyxBQUdJLEFBR1IsQUFJSSxBQUdELEFBTWEsQUFJQSxBQUlILEFBTVYsQUFRUCxBQVVELEFBVWtCLEFBSVgsQUFZQSxBQWFQLEFBR0MsQUFRcUIsQUFRQSxTQTFJaEMsQ0FqQ3dCLEFBY0EsQUFrQ08sQUFXZixDQTVHRSxBQXFGbEIsQUFpQ2dCLEFBbUNKLEFBVUQsQUF1Q2IsQ0F2Tm9CLEFBMEJILEFBZ01qQixDQXpJRixBQW9CSSxBQWNBLENBN0JBLEFBb0RBLENBdkVpQixBQXFDakIsQUFxQkEsQUFVQSxDQW5Gb0IsQUF3Q3BCLEVBeEZNLEFBaUNDLEFBeUhJLEFBZ0NELEFBWUEsQ0ExRVYsR0FOQSxDQVVBLEFBbUM4QixBQVVaLENBNUtYLENBaUNDLEVBWFMsRUFiWCxBQWlKTSxBQWdDRixBQVlBLENBMU1kLENBS2UsQ0E4REQsQ0E3QkMsQUEyTGIsQUFRQSxFQTNOUSxDQXNDUSxDQTBEUSxHQWlGUCxBQVlBLENBNUNSLENBekpLLEFBU0EsQUFxRGUsQUE2R1YsRUF0SkUsQUFZVCxJQXlIQyxFQTNHRCxHQWtIYyxDQWhLYixBQVNBLEFBd0JGLENBdUVULENBaUZnQyxBQVlBLENBbEdoQyxFQXVEVSxDQTNHaUIsQUE0SGhCLEdBdEpPLEFBYU4sQ0FnSmhCLENBakxvQixBQVNpRixJQWlKckcsRUFpQmUsSUF6SUMsTUFqQ2hCLEFBb0JZLENBdUoyQyxFQTdCckMsR0E1R0osRUFiRCxBQW1LRCxBQVlBLElBOURNLEFBSUEsQ0FyRmxCLEFBY0EsQUE0RUksR0E1R2lCLENBYmUsQUFtS3hCLEFBWUMsS0E5RFQsQUFJQSxJQStDaUIsQ0FZQSxNQWxLQyxXQXVKTSxDQVlBLE1BbEtGLEdBdUJQLEVBbUdFLGdCQWpIRixDQVJuQixBQTBIc0IsSUF2Sk0sY0F3SmQsQ0FwR1UsU0FuRFIsQUF3SkMsU0FuSFMsR0FwQ1osQ0F3SmQsUUE1SUEsQ0FYd0IsUUFnTHhCLENBWUEsT0E1QkEsQ0E5R0EsR0FqREEsbUJBbUNBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXNJbnRlcm5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBCdXR0b25XaGl0ZSBmcm9tICcuL0J1dHRvbnMnXG5cbmNsYXNzIEJhbm5lclNlcnZpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgaTE6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIsXG4gICAgICAgICAgICAgICAgaTI6IHRoaXMucHJvcHMuaWZyYW1lICsgXCJcIixcbiAgICAgICAgICAgICAgICBpMzogXCI/YXV0b3BsYXk9MSZjb250cm9scz0wJmxvb3A9MSZtdXRlPTEmcGxheWxpc3Q9eEpBd25DTWdxQ2dcIixcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgIHZhciB2aWRlb0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9CYW5uZXItdGl0bGVcIilcbiAgICAgICAgICAgIHZpZGVvQmFubmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB2YXIgdmlkZW9CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvQmFubmVyLXBhcmFncmFwaFwiKVxuICAgICAgICAgICAgdmlkZW9CYW5uZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cblx0aGFuZGxlRG93biAoKSB7XG5cdFx0Ly8gZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwidmlkZW9CYW5uZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQmFubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aW1lby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz17dGhpcy5zdGF0ZS5pMSArIHRoaXMuc3RhdGUuaTIgKyB0aGlzLnN0YXRlLmkzfSBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdmlkZW9CYW5uZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW9CYW5uZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lci1wYXJhZ3JhcGhcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25XaGl0ZSBjbGFzZT1cImNvbG9yV2hpdGVcIiBocmVmPVwiXCIgbmFtZT17dGhpcy5wcm9wcy5idG59PjwvQnV0dG9uV2hpdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWFkcmFkb1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1dmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgdHJhbnNwYXJlbnQgMzMlLCBibGFjayAzMyUsIGJsYWNrIDY2JSwgdHJhbnNwYXJlbnQgNjYlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDNweCAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciBpZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2LjI1dnc7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDkvMTYqMTAwID0gNTYuMjUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDZ2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMS43N3ZoOyAvKiBHaXZlbiBhIDE2OjkgYXNwZWN0IHJhdGlvLCAxNi85KjEwMCA9IDE3Ny43NyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQ3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC03MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZpZ2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuNHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1wYXJhZ3JhcGguYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIGJyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIGJyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciB2aWRlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRleHQgYnIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgcCBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHRyYW5zbGF0ZUJvdHRvbVRvVG9wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlY3Rpb24tZG93biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3VhZHJhZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXJyb3ctZG93bntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDAgMCAtMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFycm93IC42cyAxcyBpbmZpbml0ZSBlYXNlLW91dCBhbHRlcm5hdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnJvdy1kb3duOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIzMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjo1cHggNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTUwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjo1cHggNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFycm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbToxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbGVmdEFycm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHJpZ2h0QXJyb3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJTZXJ2aWNlczsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServicesInterna.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BannerServices);

/***/ }),

/***/ "./components/Buttons.js":
/*!*******************************!*\
  !*** ./components/Buttons.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buttons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Buttons.js";


class Buttons extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.clase,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: this.props.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, `
			      	.btn-white {
						margin: auto;
						display: inline-block;
						padding: 13px 15px;
						background: white;
						color: #00BCD4;
						box-sizing: border-box;
						margin-top: 10px;
						margin-left: 100px;
						font-size: 16px;
						border-radius: 4px;
						font-family: Viga;
						text-transform: uppercase;
						transition: .3s linear;
			      	}
			      	.btn-white:hover {
						background: hsla(0,0%,100%,.85);
			      	}

			      	.colorWhite a {
			      		color: gray;
			      		margin: 10px 0 0;

			      	}
			      `));
  }

}

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js";




class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    setTimeout(function () {
      var header = document.querySelector(".header-logo");
      header.classList.add('active');
    }, 3000);
    setTimeout(function () {
      var menu = document.querySelector(".header-menu");
      menu.classList.add('active');
    }, 3100);
    const widthScreen = window.innerWidth;

    if (widthScreen < 767) {
      setTimeout(function () {
        var menu = document.querySelector(".header-menu");
        menu.classList.remove('active');
      }, 3100);
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
      className: "jsx-3138806505" + " " + "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-3138806505" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-3138806505" + " " + "df container",
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
      className: "jsx-3138806505" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "TECNOVA.IO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.menuMobile,
      id: "menu-mobile-btn",
      className: "jsx-3138806505" + " " + "menu-mobile-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      id: "header_menu",
      className: "jsx-3138806505" + " " + "header-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3138806505",
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
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Dise\xF1o web")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3138806505",
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
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Im\xE1genes de drones")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/portafolio",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Portafolio"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3138806505",
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
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Con\xF3cenos")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3138806505" + " " + "sub-menu-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "#TECNOVA.IO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3138806505" + " " + "sub-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3138806505",
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
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Viaje de trabajo")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/viajes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Viajes")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contacto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Contacto")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3138806505" + " " + "header-socialNetwork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.facebook.com/profile.php?id=100009455848617",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/facebookIcon.svg",
      alt: "",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.instagram.com/danilojesusv/",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/instagramIcon.svg",
      alt: "",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/whatsapp.png",
      alt: "",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: this.down,
      href: "",
      className: "jsx-3138806505",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Cotizaci\xF3n Gratis"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.cortina,
      id: "cortina",
      className: "jsx-3138806505" + " " + "cortina",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3138806505",
      __self: this
    }, ".cortina.jsx-3138806505{background:black;opacity:.7;position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:991;}.cortina.active.jsx-3138806505{display:block;}.header.jsx-3138806505{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:999;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:13px;font-weight:bold;}.header.jsx-3138806505:before{content:\"\";background:linear-gradient(180deg,#9292926b 0,#ffffff00);position:absolute;top:-10px;left:0;width:100%;height:200%;}.header.jsx-3138806505 a.jsx-3138806505{color:white;}.header.jsx-3138806505 .container.jsx-3138806505{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-logo.jsx-3138806505{display:inline-block;margin:10px;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;font-family:Viga;font-size:20px;}.header-logo.active.jsx-3138806505{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-menu.jsx-3138806505{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.header-menu.active.jsx-3138806505{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-menu.jsx-3138806505 a.jsx-3138806505,.header-socialNetwork.jsx-3138806505 a.jsx-3138806505{margin:5px;padding:5px;-webkit-transition:.25s linear;transition:.25s linear;position:relative;}.header-menu.jsx-3138806505 a.jsx-3138806505:before,.header-socialNetwork.jsx-3138806505 a.jsx-3138806505:before{content:\"\";position:absolute;background:white;bottom:0px;width:0%;height:2px;-webkit-transition:.25s ease;transition:.25s ease;right:0;left:0;margin:auto;}.header-menu.jsx-3138806505 a.jsx-3138806505:hover:before,.header-socialNetwork.jsx-3138806505 a.jsx-3138806505:hover:before{width:100%;}.sub-menu.jsx-3138806505{position:absolute;font-size:10px;opacity:0;visibility:hidden;-webkit-transition:.25s linear;transition:.25s linear;}.sub-menu-btn.jsx-3138806505{cursor:pointer;}.sub-menu-btn.jsx-3138806505:hover .sub-menu.jsx-3138806505{opacity:1;visibility:visible;}.header-socialNetwork.jsx-3138806505{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:none;}.header-socialNetwork.jsx-3138806505 a.jsx-3138806505:hover img.jsx-3138806505{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}.header-socialNetwork.jsx-3138806505 figure.jsx-3138806505{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-socialNetwork.jsx-3138806505 figcaption.jsx-3138806505{margin:10px;color:white;}.header-socialNetwork.jsx-3138806505 img.jsx-3138806505{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:15px;height:15px;}.menu-mobile-btn.jsx-3138806505{display:none;cursor:pointer;}@media screen and (max-width:900px){.header-menu.jsx-3138806505 a.jsx-3138806505{font-size:12px;margin:2px;padding:5px;}}@media screen and (max-width:767px){.header-menu.jsx-3138806505{position:absolute;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;right:-185px;top:10px;background:#00bcd4;padding:20px;-webkit-transition-delay:inherit;transition-delay:inherit;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;-webkit-transform:inherit;-ms-transform:inherit;transform:inherit;}.header-menu.active.jsx-3138806505{right:20px;}.menu-mobile-btn.jsx-3138806505{display:block;position:absolute;top:10px;right:20px;width:30px;height:30px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;background:white;}.menu-mobile-btn.jsx-3138806505:before{content:\"\";position:absolute;top:10px;left:0;right:0;margin:auto;background:#bababa;width:18px;height:2px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;}.menu-mobile-btn.jsx-3138806505:after{content:\"\";position:absolute;top:18px;left:0;right:0;margin:auto;background:#bababa;width:18px;height:2px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;}.menu-mobile-btn.active.jsx-3138806505:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:14px;}.menu-mobile-btn.active.jsx-3138806505:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:14px;}.menu-mobile-btn.active.jsx-3138806505{right:210px;}.sub-menu.jsx-3138806505{position:relative;opacity:1;visibility:visible;}}@media screen and (max-width:650px){.header-socialNetwork.jsx-3138806505 a.jsx-3138806505{margin:0;}}@media screen and (max-width:400px){.header.jsx-3138806505{font-size:12px;padding-top:18px;}.header.jsx-3138806505 a.jsx-3138806505{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JaUIsQUFHeUIsQUFXSCxBQUlTLEFBWVosQUFTQyxBQUdrQixBQUdULEFBVVgsQUFJRyxBQU9ILEFBS0MsQUFPQSxBQWFBLEFBR08sQUFPSCxBQUdMLEFBSUcsQUFNK0IsQUFHL0IsQUFJRCxBQUlNLEFBU0wsQUFNRyxBQVFHLEFBWVAsQUFJRyxBQVdILEFBYUEsQUFhYSxBQUlDLEFBSWIsQUFJTSxBQVFULEFBTXFCLEFBSVQsU0FUdEIsQUFVWSxDQWhMWSxBQVdBLEFBc0NMLENBMUVzQyxBQXlDN0MsQUFPTSxBQWFuQixBQXFFQyxBQWVtQixBQWFBLENBckpwQixBQWtGYSxBQXdGWixDQTNFZSxDQXhIaEIsQUFzSm9CLENBL0RwQixBQXVDYSxBQXVGcUIsRUFoT3RCLENBMkZJLEFBK0JDLEFBdUJPLEFBaUVaLEdBeEtDLEVBM0JJLEFBc0RPLENBa0R4QixFQW1CYyxFQXpJRSxBQW1JaEIsQUErRXFCLENBdklILEFBMEJsQixBQXVFVyxBQWFBLEdBeEJBLEFBK0RFLENBdExGLEFBaURBLENBK0JLLElBZ0JmLEFBbUNRLEFBYUEsQ0EzS1UsRUErRm5CLEFBb0RhLEVBaktOLEFBMENxQixBQWlEVCxFQWtGVCxBQWFBLENBL0dFLENBdUlYLEVBak5PLEdBaUtLLENBWUMsQUFhQSxHQXpMRixDQWFMLEFBNkRHLElBZ0JjLEVBNUVoQixBQW1KTSxFQVlPLEFBYUEsQ0EvR1QsQ0ExRUMsQ0F1Qk0sRUFUUCxFQXlHVyxFQXBFWixBQWlEUyxBQVNBLENBb0RBLEVBaEdELEFBVUcsRUExRVIsRUFjRCxHQXFDZSxBQXlIZixBQWFBLEFBT0YsRUF6S0EsQ0E2S0EsS0FuTUUsQ0FjTyxBQWtKRyxBQWdDdEIsQ0FsSkQsQUFXQSxBQTZEWSxDQXREWixBQTRHYSxBQWFBLENBbEtMLEFBb0hPLEFBeURkLE9BNUtXLENBdkJaLENBc0hhLENBc0RPLEFBYUEsR0E5Q1QsS0FuSEUsQ0FPYixBQXdEQSxFQWdDQSxDQXFCcUIsTUFpQ0UsQUFhQSxFQWpLdkIsQ0FnRFMsUUFDRCxDQXJDUSxDQXdHRCxLQWxFRixDQXFGTSxPQWxCUSxJQWxFM0IsTUFxRkMsT0EvRHVCLEFBU3hCLE9BckVxQixBQXdJcEIsQUFhQSxHQXpJZSxTQXBDQSxlQUNFLE9BZ0lFLE9BNUZHLEdBbkN2QixJQXVCa0IsSUF5R0ssYUF4R1AsZUFDaEIsWUEwRGMsQ0EvQ2QsU0E2Rm9CLEdBN0NwQiwrREE4Q0MiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1sb2dvXCIpXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHR9LCAzMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG5cdFx0XHR2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLW1lbnVcIilcblx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHR9LCAzMTAwKTtcblxuXHRcdGNvbnN0IHdpZHRoU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRpZih3aWR0aFNjcmVlbiA8IDc2Nykge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdFx0dmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1tZW51XCIpXG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0XHRcdH0sIDMxMDApO1xuXHRcdH1cblx0fVxuXG5cdG1lbnVNb2JpbGUoZSkge1xuXHRcdGNvbnN0IG1lbnVfbW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJfbWVudVwiKTtcblx0XHRtZW51X21vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRjb25zdCBtZW51X21vYmlsZV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbW9iaWxlLWJ0blwiKTtcblx0XHRtZW51X21vYmlsZV9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0Y29uc3QgY29ydGluYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29ydGluYVwiKTtcblx0XHRjb3J0aW5hLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHR9XG5cblx0Y29ydGluYSgpIHtcblx0XHRjb25zdCBtZW51X21vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyX21lbnVcIik7XG5cdFx0bWVudV9tb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0Y29uc3QgbWVudV9tb2JpbGVfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LW1vYmlsZS1idG5cIik7XG5cdFx0bWVudV9tb2JpbGVfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdGNvbnN0IGNvcnRpbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcnRpbmFcIik7XG5cdFx0Y29ydGluYS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJkZiBjb250YWluZXJcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRURUNOT1ZBLklPXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1idG5cIiBvbkNsaWNrPXt0aGlzLm1lbnVNb2JpbGV9IGlkPVwibWVudS1tb2JpbGUtYnRuXCIgPjwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDx1bCBpZD1cImhlYWRlcl9tZW51XCIgY2xhc3NOYW1lPVwiaGVhZGVyLW1lbnVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Rpc2Vuby13ZWJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPkRpc2XDsW8gd2ViPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2ltYWdlbmVzLWRlLWRyb25lc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+SW3DoWdlbmVzIGRlIGRyb25lczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9wb3J0YWZvbGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlBvcnRhZm9saW88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Nvbm9jZW5vc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+Q29uw7NjZW5vczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInN1Yi1tZW51LWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD4jVEVDTk9WQS5JTzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3ZpYWplLWRlLXRyYWJham9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+VmlhamUgZGUgdHJhYmFqbzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdmlhamVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlZpYWplczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Db250YWN0bzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L25hdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc29jaWFsTmV0d29ya1wiPlxuXHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDAwOTQ1NTg0ODYxN1wiID5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2ZhY2Vib29rSWNvbi5zdmdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGFuaWxvamVzdXN2L1wiID5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2luc3RhZ3JhbUljb24uc3ZnXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01MTkzMTQ0NzA0MSZ0ZXh0PUhvbGEsJTIwcXVpZXJvJTIwcmVhbGl6YXIlMjBtaSUyMHByb3llY3RvXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvd2hhdHNhcHAucG5nXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMuZG93bn0gaHJlZj1cIlwiPlxuXHRcdFx0XHRcdFx0XHRcdENvdGl6YWNpw7NuIEdyYXRpc1xuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMuY29ydGluYX0gaWQ9XCJjb3J0aW5hXCIgY2xhc3NOYW1lPVwiY29ydGluYVwiPjwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0LmNvcnRpbmEge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBibGFjaztcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogLjc7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiA5OTE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY29ydGluYS5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDk5OTtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXI6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjOTI5MjkyNmIgMCwjZmZmZmZmMDApO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogLTEwcHg7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIwMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyIGEge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyIC5jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLWxvZ28ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuNXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDFzO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogVmlnYTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1sb2dvLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbWVudSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjVzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAxLjVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1tZW51LmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbWVudSBhLFxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGEge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDVweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuMjVzIGxpbmVhcjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1tZW51IGE6YmVmb3JlLFxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGE6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAycHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC4yNXMgZWFzZTtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbWVudSBhOmhvdmVyIDpiZWZvcmUsXG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgYTpob3ZlciA6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc3ViLW1lbnUge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuMjVzIGxpbmVhcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5zdWItbWVudS1idG4ge1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc3ViLW1lbnUtYnRuOmhvdmVyIC5zdWItbWVudSB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBhOmhvdmVyIGltZyB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuODUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGZpZ3VyZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgZmlnY2FwdGlvbiB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGltZyB7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjNzO1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTVweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQubWVudS1tb2JpbGUtYnRuIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXHRcdFx0XHRcdFx0XHQuaGVhZGVyLW1lbnUgYSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMnB4O1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXHRcdFx0XHRcdFx0XHQuaGVhZGVyLW1lbnUge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAtMTg1cHg7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMGJjZDQ7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5oZWFkZXItbWVudS5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Lm1lbnUtbW9iaWxlLWJ0biB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMjBweDtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC4yNXMgZWFzZTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQubWVudS1tb2JpbGUtYnRuOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNiYWJhYmE7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAycHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC4yNXMgZWFzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQubWVudS1tb2JpbGUtYnRuOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2JhYmFiYTtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDJweDtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5tZW51LW1vYmlsZS1idG4uYWN0aXZlOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMTRweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQubWVudS1tb2JpbGUtYnRuLmFjdGl2ZTphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm1lbnUtbW9iaWxlLWJ0bi5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAyMTBweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5zdWItbWVudSB7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHRcdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuXHRcdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgYSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdCAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcblx0XHRcdCAgICAgICAgICAgICAgICAuaGVhZGVyIHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMThweDtcblx0XHRcdCAgICAgICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgICAgICAgLmhlYWRlciBhIHtcblx0XHRcdCAgICAgICAgICAgICAgICBcdG1hcmdpbjogMDtcblx0XHRcdCAgICAgICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
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
      className: "jsx-609219203" + " " + "Layout",
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
      className: "jsx-609219203",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, user-scalable=no",
      className: "jsx-609219203",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: "",
      className: "jsx-609219203",
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
      className: "jsx-609219203",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      className: "jsx-609219203",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      src: "https://apps.elfsight.com/p/platform.js",
      defer: true,
      className: "jsx-609219203",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "609219203",
      __self: this
    }, "@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'Poppins';src:url(\"/static/fonts/Poppins-ExtraLight.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraLight.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraLight.svg\") format('svg');}@font-face{font-family:'Poppins-Bold';src:url(\"/static/fonts/Poppins-ExtraBold.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraBold.woff\") format('woff'), url(\"/static/fonts/Poppins-ExtraBold.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraBold.svg\") format('svg');}body{overflow-x:hidden;}.Layout{height:100vh;font-family:\"Poppins\",Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;font-weight:600;font-style:normal;}.df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.container{max-width:960px;width:94%;margin:auto;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;}img{max-width:100%;height:auto;display:block;}@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@media screen and (max-width:600px){.Layout{font-size:14px;}h2{font-size:20px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDc0IsQUFJd0IsQUFJTCxBQVNRLEFBV0ksQUFRSyxBQVNqQixBQU9HLEFBa0JQLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSUosQUFLTixBQU9hLEFBSUEsQUFJSCxBQU9ULEFBR1csU0EzRGpCLEVBc0JHLENBSmQsQ0FoRnFELENBdUVyRCxBQUdBLENBdUJhLEFBc0JaLENBM0VVLEFBaUNYLEVBakZBLENBYThDLEFBc0RwQyxHQTNDeUMsRUFpRW5ELENBR2tCLENBM0NMLEFBNkVaLENBOUZpRCxBQXNFbkMsQ0FsQ0MsVUFsQmhCLEdBcURBLENBVkEsQ0F4QmMsT0EyQlEsTUExQkcsTUFqRVQsQUFZdUMsUUFVTSxDQXNFeEMsR0E3RHVDLEFBS3BDLEdBbkNOLEdBaUVsQixJQTZDWSxTQVJBLEFBSUEsQ0F6R0ssQUE4R2hCLFNBUkEsQUFJQSxPQXpHa0Isa0JBQ25CLHdDQXlGQSxLQXhEb0IsbUNBZHBCLG1DQVZzQixtQkFDRCxJQXdCRixJQU5uQixVQWpCQSxJQXdCQSIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG5cdHJlbmRlciAoKSB7XG5cblx0XHRjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgd2lkdGggfSA9IHRoaXMucHJvcHNcblx0XHRcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIj5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCJcIiAvPlxuXHRcdFx0XHRcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJzZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cblx0XHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL2FwcHMuZWxmc2lnaHQuY29tL3AvcGxhdGZvcm0uanNcIiBkZWZlcj48L3NjcmlwdD5cblxuXHRcdFx0PC9IZWFkPlxuXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuXHRcdFx0XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cblx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQuTGF5b3V0IHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAZm9udC1mYWNle1xuXHRcdFx0XHQgICAgZm9udC1mYW1pbHk6J1ZpZ2EnO1xuXHRcdFx0XHQgICAgc3JjOnVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLmVvdHRcIik7XG5cdFx0XHRcdCAgICBzcmM6bG9jYWwoJ+KYuicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0ICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcblx0XHRcdFx0ICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRAZm9udC1mYWNlIHtcblx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhTGlnaHQuZW90XCIpO1xuXHRcdFx0XHQgICAgc3JjOmxvY2FsKCfimLonKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvUG9wcGlucy1FeHRyYUxpZ2h0LnR0ZlwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFMaWdodC5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtQm9sZCc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC5lb3RcIik7XG5cdFx0XHRcdCAgICBzcmM6bG9jYWwoJ+KYuicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC53b2ZmXCIpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5kZiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jb250YWluZXIge1xuXHRcdFx0XHRcdG1heC13aWR0aDogOTYwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDk0JTtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5cdFx0XHRcdGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcblx0XHRcdFx0YSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuXHRcdFx0XHRkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5cdFx0XHRcdHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5cdFx0XHRcdGIsIHUsIGksIGNlbnRlcixcblx0XHRcdFx0ZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcblx0XHRcdFx0ZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG5cdFx0XHRcdHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuXHRcdFx0XHRhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcblx0XHRcdFx0ZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxuXHRcdFx0XHRtYWluLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcblx0XHRcdFx0dGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRib3JkZXI6IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMDAlO1xuXHRcdFx0XHRcdGZvbnQ6IGluaGVyaXQ7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5cdFx0XHRcdGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2wsIHVsIHtcblx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrcXVvdGUsIHEge1xuXHRcdFx0XHRcdHF1b3Rlczogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcblx0XHRcdFx0cTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRcdGNvbnRlbnQ6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFibGUge1xuXHRcdFx0XHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdFx0XHRcdFx0Ym9yZGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLjRweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAa2V5ZnJhbWVzIHRyYW5zbGF0ZUJvdHRvbVRvVG9wIHtcblx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ1MCUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0LkxheW91dMKge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YSB7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRgfTwvc3R5bGU+XG5cblx0XHQ8L2Rpdj5cblxuXHR9XG59Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js */"));
  }

}

/***/ }),

/***/ "./components/Portafolio.js":
/*!**********************************!*\
  !*** ./components/Portafolio.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TitleBlack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TitleBlack */ "./components/TitleBlack.js");

var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js";



 // import Instafeed from 'instafeed.js'

class Portafolio extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true // this.fetchInstagrama()

    };
  }

  async componentDidMount() {// await this.fetchInstagrama()
    // setTimeout(function(){ 
    // 	var myElement = `<div class="elfsight-app-8a863662-90b2-482c-a0ee-88aa2c740771"></div>`
    // 	var insta = document.getElementById("#insta")
    // 	insta.appendChild(myElement)
    // 	console.log(insta)
    // }, 500);
  }

  async componentWillUnmount() {} // await this.fetchInstagrama()
  // async fetchInstagrama () {
  // 	const { data } = await axios.get("https://apps.elfsight.com/p/platform.js")
  // }


  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [{
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "container web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TitleBlack__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Nuestro trabajo, es nuestra pasi\xF3n.",
      classTitle: "white",
      subtitle: "Proyectos Web",
      classSubtitle: "white mb20",
      subtitleStrong: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.profealtoque.com.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/profe.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.sanpiox.edu.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/sanpiox.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.deliperuano.com/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/deliperuano.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.pagadespues.pe",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/pagadespues.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.acuantoestaeldolar.com/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/cambiodolar.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.clinicainternacional.com.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/clinicaInternacional.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.canalipe.tv/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/canalipe.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.mifuturogr.com",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/mifuturo.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.marina.mil.pe",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/marina.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.clubterrazas.com.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/terrazas.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3808336935",
      __self: this
    }, ".portafolio{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:60px 0 20px 0;box-sizing:border-box;}.portafolio .web{overflow:hidden;}.portafolio .slick-next:before,.portafolio .slick-prev:before{font-size:30px;}.portafolio .slick-next{right:10px;z-index:9;}.portafolio .slick-prev{left:0px;z-index:9;}.portafolio-item{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}.portafolio-item-mascara{height:158px;overflow:hidden;position:relative;}.portafolio-item-img{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}.portafolio .slick-dots li button:before{background:green;}.slick-dots li button:before{background;red;}.instagramWidget{position:relative;}.instagramWidget:before{content:\"\";position:absolute;bottom:0px;right:0;width:100%;height:44px;background:#00BCD4;z-index:999999;}.instagramWidget:after{content:\"\";position:absolute;top:10px;right:0;left:0;width:250px;height:60px;background:#00bcd4;z-index:999999;margin:auto;display:none;}.eapps-instagram-feed-title{font-size:17px !important;font-family:Poppins;color:white;padding:40px 20px;}.eapps-instagram-feed-container{position:relative;z-index:999999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SThCLEFBR3lCLEFBT0YsQUFJRCxBQUdKLEFBSUYsQUFJUSxBQVFKLEFBTUUsQUFlRSxBQUlQLEFBSVEsQUFHUCxBQVVBLEFBY2UsQUFNUixTQXpFUixFQUpBLEFBd0NJLEFBUUksQUFVQSxFQTFDRixFQW5CakIsQUF5QlcsQUFtQlgsQ0FoREEsQ0FlYyxBQTZCZCxDQW5EbUIsQUEyRG5CLEFBaUNnQixDQXpFaEIsRUFKQSxJQXNCYSxDQWlEUSxHQXZERixBQWdDUCxBQVVGLENBbERHLEdBc0ViLEdBNUZvQixDQXFDTCxDQW9DTixFQVZBLEVBeEN3RCxJQW1EekQsQUFZSyxDQXZEYixDQWlDWSxHQTFCTyxFQXFDTixFQTFFVSxHQXNGSixDQXRCTixNQVdBLElBckNILEVBMkJVLEtBc0JwQixDQXRGdUIsQUEyRUgsQ0FyQ1gsUUFDRCxJQTBCUSxHQXpCSCxHQW9DRyxHQTNFaEIsTUF3Q21CLEFBeUJuQixDQTVDdUIsS0F1RFYsWUFuQ0MsQUFvQ0EsS0F2RGQsUUFvQnVCLEFBb0N2QixzQkFuQ0EiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9Qb3J0YWZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVCbGFjaydcbi8vIGltcG9ydCBJbnN0YWZlZWQgZnJvbSAnaW5zdGFmZWVkLmpzJ1xuXG5jbGFzcyBQb3J0YWZvbGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH1cblx0XHQvLyB0aGlzLmZldGNoSW5zdGFncmFtYSgpXG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cdFx0Ly8gYXdhaXQgdGhpcy5mZXRjaEluc3RhZ3JhbWEoKVxuXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHQvLyBcdHZhciBteUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cImVsZnNpZ2h0LWFwcC04YTg2MzY2Mi05MGIyLTQ4MmMtYTBlZS04OGFhMmM3NDA3NzFcIj48L2Rpdj5gXG5cdFx0Ly8gXHR2YXIgaW5zdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiNpbnN0YVwiKVxuXHRcdC8vIFx0aW5zdGEuYXBwZW5kQ2hpbGQobXlFbGVtZW50KVxuXHRcdC8vIFx0Y29uc29sZS5sb2coaW5zdGEpXG5cdFx0Ly8gfSwgNTAwKTtcblx0XHRcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblx0XHQvLyBhd2FpdCB0aGlzLmZldGNoSW5zdGFncmFtYSgpXG5cdH1cblx0Ly8gYXN5bmMgZmV0Y2hJbnN0YWdyYW1hICgpIHtcblx0Ly8gXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vYXBwcy5lbGZzaWdodC5jb20vcC9wbGF0Zm9ybS5qc1wiKVxuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHtcblx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0XHRhcnJvd3M6IHRydWUsXG5cdFx0XHRzcGVlZDogNTAwLFxuXHRcdFx0c2xpZGVzVG9TaG93OiAzLFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDIsXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG5cdFx0XHRyZXNwb25zaXZlOiBbXG5cdFx0ICAgIHtcblx0XHQgICAgICBicmVha3BvaW50OiAxMDYwLFxuXHRcdCAgICAgIHNldHRpbmdzOiB7XG5cdFx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG5cdFx0ICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcblx0XHQgICAgICAgIGluZmluaXRlOiB0cnVlLFxuXHRcdCAgICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAge1xuXHRcdCAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcblx0XHQgICAgICBzZXR0aW5nczoge1xuXHRcdCAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuXHRcdCAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcblx0XHQgICAgICB9XG5cdFx0ICAgIH1cblx0XHQgIF1cblx0ICAgIH07XG4gICAgXHRyZXR1cm4gKFxuXHQgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvXCI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgd2ViXCI+XG5cdFx0XHRcdFx0PFRpdGxlIHRpdGxlPVwiTnVlc3RybyB0cmFiYWpvLCBlcyBudWVzdHJhIHBhc2nDs24uXCIgY2xhc3NUaXRsZT1cIndoaXRlXCIgc3VidGl0bGU9XCJQcm95ZWN0b3MgV2ViXCIgY2xhc3NTdWJ0aXRsZT1cIndoaXRlIG1iMjBcIiBzdWJ0aXRsZVN0cm9uZz1cIlwiPjwvVGl0bGU+XG5cdFx0XHRcdFx0PFNsaWRlciB7Li4uc2V0dGluZ3N9IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LnByb2ZlYWx0b3F1ZS5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vcHJvZmUuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LnNhbnBpb3guZWR1LnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL3NhbnBpb3guanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT4gXG5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmRlbGlwZXJ1YW5vLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9kZWxpcGVydWFuby5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhZ2FkZXNwdWVzLnBlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vcGFnYWRlc3B1ZXMuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT4gIFxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFjdWFudG9lc3RhZWxkb2xhci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vY2FtYmlvZG9sYXIucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5jbGluaWNhaW50ZXJuYWNpb25hbC5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL2NsaW5pY2FJbnRlcm5hY2lvbmFsLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2FuYWxpcGUudHYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vY2FuYWxpcGUuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5taWZ1dHVyb2dyLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiID5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9taWZ1dHVyby5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcmluYS5taWwucGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9tYXJpbmEuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmNsdWJ0ZXJyYXphcy5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL3RlcnJhemFzLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9TbGlkZXI+XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw9XCJ0cnVlXCI+e2Bcblx0XHRcdFx0XHQucG9ydGFmb2xpbyB7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDYwcHggMCAwIDA7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDBCQ0Q0O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNjBweCAwIDIwcHggMDtcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvIC53ZWIge1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnBvcnRhZm9saW8gLnNsaWNrLW5leHQ6YmVmb3JlLFxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1wcmV2OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1uZXh0IHtcblx0XHRcdFx0XHRcdHJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0ei1pbmRleDogOTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1wcmV2IHtcblx0XHRcdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvLWl0ZW0ge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL01hY2Jvb2suc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvcnRhZm9saW8taXRlbS1tYXNjYXJhIHtcblx0XHRcdFx0XHRcdGhlaWdodDogMTU4cHg7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvLWl0ZW0taW1nIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA3NiU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogMTJweDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTQzcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ3JlZW47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOyByZWQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmluc3RhZ3JhbVdpZGdldCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0XHQuaW5zdGFncmFtV2lkZ2V0OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAwcHg7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwQkNENDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk5OTk5OTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmluc3RhZ3JhbVdpZGdldDphZnRlciB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwYmNkNDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk5OTk5OTtcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fSBcblxuXHRcdFx0XHRcdC5lYXBwcy1pbnN0YWdyYW0tZmVlZC10aXRsZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNDBweCAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZWFwcHMtaW5zdGFncmFtLWZlZWQtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk5OTk5OTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhZm9saW87XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ }),

/***/ "./components/Testimony.js":
/*!*********************************!*\
  !*** ./components/Testimony.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Testimony.js";




class Testimony extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    var settings = {
      arrow: true,
      infinite: true,
      speed: 500,
      centerPadding: '40px',
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "Testimony",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "Testimony-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Opiniones"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/img/Fb-rates.png",
      alt: "",
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Clientes satisfechos")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "Testimony-slider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2835153134" + " " + "Testimony-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "Testimony-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/img/daniloviacava.JPG",
      alt: "",
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Sergio Gabaldoni")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi itaque maxime reprehenderit blanditiis tempora, dolorum distinctio debitis, iusto quos, quia eos repellat corrupti dolorem explicabo placeat nesciunt labore dolores."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2835153134" + " " + "Testimony-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "Testimony-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/img/daniloviacava.JPG",
      alt: "",
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Pablo Paredes")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, aperiam corporis. Quidem maxime laudantium accusantium labore, placeat est cumque harum quas officia repellendus, consequuntur libero. Velit ratione tenetur magni, ad!"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2835153134" + " " + "Testimony-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "Testimony-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/img/daniloviacava.JPG",
      alt: "",
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Cristina Rubio")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, aperiam corporis. Quidem maxime laudantium accusantium labore, placeat est cumque harum quas officia repellendus, consequuntur libero. Velit ratione tenetur magni, ad!"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2835153134" + " " + "Testimony-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2835153134" + " " + "Testimony-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/img/daniloviacava.JPG",
      alt: "",
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Juan Perez")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-2835153134",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, aperiam corporis. Quidem maxime laudantium accusantium labore, placeat est cumque harum quas officia repellendus, consequuntur libero. Velit ratione tenetur magni, ad!")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2835153134",
      __self: this
    }, ".Testimony{margin-top:60px;margin-bottom:20px;}.Testimony .container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justity-content:center;-ms-flex-pack:center;justity-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.Testimony-title{margin-right:30px;width:20%;}.Testimony-title h2{font-size:22px;font-family:Viga;margin-bottom:15px;}.Testimony-title img{margin-bottom:10px;}.Testimony-slider{width:80%;text-align:left;}.Testimony-item{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;box-sizing:border-box;}.Testimony-image{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;}.Testimony-item img{margin-right:15px;margin-left:0;width:50px;height:50px;border-radius:50%;overflow:hidden;}.Testimony-item strong{font-size:16px;margin-bottom:10px;display:block;font-family:Viga;}.Testimony-item p{font-size:13px;}.Testimony-slider .slick-prev,.Testimony-slider .slick-next{line-height:51px;border-radius:50%;top:0;width:30px;height:30px;z-index:9;background:#00BCD4;}.Testimony-slider .slick-prev{left:inherit;right:35px;}.Testimony-slider .slick-next{right:0;}@media screen and (max-width:767px){.Testimony .container{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.Testimony-title{width:100%;margin:auto;margin-bottom:30px;}.Testimony-title img{margin:10px auto;}.Testimony-slider{width:100%;}.Testimony-slider .slick-prev,.Testimony-slider .slick-next{top:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVGVzdGltb255LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGd0IsQUFHd0IsQUFJSCxBQUtLLEFBSUgsQUFLSSxBQUlULEFBSVMsQUFLTixBQUtLLEFBVUgsQUFNQSxBQUtFLEFBVUosQUFJTCxBQUtlLEFBSVgsQUFLTSxBQUdOLEFBSUgsUUFwQlYsQUFxQkMsRUF0RWdCLENBMERILEFBUWIsRUFyQlcsRUF0RE0sQUFpQ0UsQUFNcEIsQ0FwRG9CLENBeURELEFBNEJsQixDQTVFVSxBQTJCSSxDQWxCZixJQStEcUIsQ0FickIsRUE3Q0EsRUFiQSxJQUlvQixBQXVCUixFQVVHLENBOUNmLEFBeURPLE1BQ0ssQ0F1QlgsQ0E1Q1ksS0FVSyxHQWpDbEIsQ0E2Q2EsR0FyQk0sU0FzQlIsQ0FaWCxRQVRpQixDQXBDTyxBQTJCSixBQStCQSxJQWNBLFdBbkNwQixJQWZnQixBQXFDaEIsR0FjQyxZQWxEc0Isc0JBQ3ZCLHFDQUlvQixNQTNCSSxhQTRCeEIsZ0dBM0JBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVGVzdGltb255LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcblxuY2xhc3MgVGVzdGltb255IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHR9IFxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIHNldHRpbmdzID0ge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRcdHNwZWVkOiA1MDAsXG5cdFx0XHRjZW50ZXJQYWRkaW5nOiAnNDBweCcsXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDIsXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRcdHJlc3BvbnNpdmU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDYwMCxcblx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fTtcblx0XHRyZXR1cm4gXHQoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiVGVzdGltb255XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiVGVzdGltb255LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5PcGluaW9uZXM8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL0ZiLXJhdGVzLnBuZ1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PHA+Q2xpZW50ZXMgc2F0aXNmZWNob3M8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJUZXN0aW1vbnktc2xpZGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxTbGlkZXIgey4uLnNldHRpbmdzfT5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cIlRlc3RpbW9ueS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJUZXN0aW1vbnktaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Rhbmlsb3ZpYWNhdmEuSlBHXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+U2VyZ2lvIEdhYmFsZG9uaTwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yaWJ1cyBlbGlnZW5kaSBpdGFxdWUgbWF4aW1lIHJlcHJlaGVuZGVyaXQgYmxhbmRpdGlpcyB0ZW1wb3JhLCBkb2xvcnVtIGRpc3RpbmN0aW8gZGViaXRpcywgaXVzdG8gcXVvcywgcXVpYSBlb3MgcmVwZWxsYXQgY29ycnVwdGkgZG9sb3JlbSBleHBsaWNhYm8gcGxhY2VhdCBuZXNjaXVudCBsYWJvcmUgZG9sb3Jlcy5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVzdGltb255LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlRlc3RpbW9ueS1pbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZGFuaWxvdmlhY2F2YS5KUEdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz5QYWJsbyBQYXJlZGVzPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2FwaWVudGUsIGFwZXJpYW0gY29ycG9yaXMuIFF1aWRlbSBtYXhpbWUgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBsYWJvcmUsIHBsYWNlYXQgZXN0IGN1bXF1ZSBoYXJ1bSBxdWFzIG9mZmljaWEgcmVwZWxsZW5kdXMsIGNvbnNlcXV1bnR1ciBsaWJlcm8uIFZlbGl0IHJhdGlvbmUgdGVuZXR1ciBtYWduaSwgYWQhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cIlRlc3RpbW9ueS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJUZXN0aW1vbnktaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Rhbmlsb3ZpYWNhdmEuSlBHXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+Q3Jpc3RpbmEgUnViaW88L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTYXBpZW50ZSwgYXBlcmlhbSBjb3Jwb3Jpcy4gUXVpZGVtIG1heGltZSBsYXVkYW50aXVtIGFjY3VzYW50aXVtIGxhYm9yZSwgcGxhY2VhdCBlc3QgY3VtcXVlIGhhcnVtIHF1YXMgb2ZmaWNpYSByZXBlbGxlbmR1cywgY29uc2VxdXVudHVyIGxpYmVyby4gVmVsaXQgcmF0aW9uZSB0ZW5ldHVyIG1hZ25pLCBhZCFcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVzdGltb255LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlRlc3RpbW9ueS1pbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZGFuaWxvdmlhY2F2YS5KUEdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz5KdWFuIFBlcmV6PC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2FwaWVudGUsIGFwZXJpYW0gY29ycG9yaXMuIFF1aWRlbSBtYXhpbWUgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBsYWJvcmUsIHBsYWNlYXQgZXN0IGN1bXF1ZSBoYXJ1bSBxdWFzIG9mZmljaWEgcmVwZWxsZW5kdXMsIGNvbnNlcXV1bnR1ciBsaWJlcm8uIFZlbGl0IHJhdGlvbmUgdGVuZXR1ciBtYWduaSwgYWQhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0PC9TbGlkZXI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHRcdC5UZXN0aW1vbnkge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA2MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlRlc3RpbW9ueSAuY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGl0eS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlRlc3RpbW9ueS10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMzBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5UZXN0aW1vbnktdGl0bGUgaDIge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlRlc3RpbW9ueS10aXRsZSBpbWcge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuVGVzdGltb255LXNsaWRlciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuVGVzdGltb255LWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuVGVzdGltb255LWltYWdlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5UZXN0aW1vbnktaXRlbSBpbWcge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuVGVzdGltb255LWl0ZW0gZmlnY2FwdGlvbiB7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuVGVzdGltb255LWl0ZW0gc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuVGVzdGltb255LWl0ZW0gcCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdH1cbiBcblx0XHRcdFx0XHRcdC5UZXN0aW1vbnktc2xpZGVyIC5zbGljay1wcmV2LFxuXHRcdFx0XHRcdFx0LlRlc3RpbW9ueS1zbGlkZXIgLnNsaWNrLW5leHQge1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogNTFweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHR9XG4gXG5cdFx0XHRcdFx0XHQuVGVzdGltb255LXNsaWRlciAuc2xpY2stcHJldiB7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAzNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlRlc3RpbW9ueS1zbGlkZXIgLnNsaWNrLW5leHQge1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpwqB7XG5cdFx0XHRcdFx0XHRcdC5UZXN0aW1vbnkgLmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlRlc3RpbW9ueS10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlRlc3RpbW9ueS10aXRsZSBpbWcge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweCBhdXRvO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5UZXN0aW1vbnktc2xpZGVyIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuVGVzdGltb255LXNsaWRlciAuc2xpY2stcHJldiwgXG5cdFx0XHRcdFx0XHRcdC5UZXN0aW1vbnktc2xpZGVyIC5zbGljay1uZXh0IHtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb255OyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Testimony.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Testimony);

/***/ }),

/***/ "./components/TitleBlack.js":
/*!**********************************!*\
  !*** ./components/TitleBlack.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/TitleBlack.js";



class TitleBlack extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1176588562" + " " + "title-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1176588562" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1176588562" + " " + (this.props.classTitle || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1176588562" + " " + (this.props.classSubtitle || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.subtitle, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1176588562" + " " + (this.props.classSubtitle || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.subtitleStrong))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1176588562",
      __self: this
    }, ".title-container.jsx-1176588562{font-family:Viga;color:black;}.title.jsx-1176588562 h3.jsx-1176588562{font-size:22px;}.title.jsx-1176588562 p.jsx-1176588562{color:gray;font-size:17px;margin-bottom:50px;margin-top:5px;font-family:Poppins;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;}h3.white.jsx-1176588562{color:white;}.title.jsx-1176588562 .white.jsx-1176588562{color:white;}.title.jsx-1176588562 strong.jsx-1176588562{color:black;font-weight:bold;}.mb20.jsx-1176588562{margin:40px 0 20px 0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVGl0bGVCbGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXaUIsQUFHeUIsQUFLRixBQUlKLEFBU0MsQUFJQSxBQUlBLEFBTWQsV0F0QmlCLENBU2hCLEFBSUEsQUFJa0IsR0FyQmxCLEVBTGEsU0FVTyxHQVRwQixBQTBCQSxHQUlBLGFBcEJnQixlQUNLLG9CQUNFLHlHQUN2QiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL1RpdGxlQmxhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaXRsZUJsYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVGl0bGV9Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NTdWJ0aXRsZX0+e3RoaXMucHJvcHMuc3VidGl0bGV9IDxzdHJvbmcgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzU3VidGl0bGV9Pnt0aGlzLnByb3BzLnN1YnRpdGxlU3Ryb25nfTwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0LnRpdGxlLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC50aXRsZSBoMyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnRpdGxlIHAge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRoMy53aGl0ZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnRpdGxlIC53aGl0ZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnRpdGxlIHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5tYjIwIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiA0MHB4IDAgMjBweCAwICFpbXBvcnRhbnRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlQmxhY2s7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/TitleBlack.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TitleBlack);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/portafolio.js":
/*!*****************************!*\
  !*** ./pages/portafolio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_BannerServicesInterna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BannerServicesInterna */ "./components/BannerServicesInterna.js");
/* harmony import */ var _components_Testimony__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Testimony */ "./components/Testimony.js");
/* harmony import */ var _components_Portafolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Portafolio */ "./components/Portafolio.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/pages/portafolio.js";






class Portafolio extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Portafolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BannerServicesInterna__WEBPACK_IMPORTED_MODULE_2__["default"], {
      iframe: "oTALBxiERRQ",
      title: "Portafolio",
      text: "Nuestro trabajo es nuestra pasi\xF3n. Ver proyectos recientes.",
      btn: "Ver proyectos recientes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Testimony__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portafolio__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ }),

/***/ 7:
/*!***********************************!*\
  !*** multi ./pages/portafolio.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniloviacavavizarreta/Desktop/drone-web/pages/portafolio.js */"./pages/portafolio.js");


/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=portafolio.js.map