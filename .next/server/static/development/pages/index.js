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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js";




class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {}; // document.querySelector('#moveSectionDown').addEventListener('click', function(e){
    // 	e.preventDefault();
    // 	fullpage_api.moveSectionDown();
    // });
  }

  handleAddSection() {
    this.setState(state => {
      const {
        fullpages
      } = state;
      const {
        length
      } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random()
      });
      return {
        fullpages: [...fullpages]
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const {
        fullpages
      } = state;
      const newPages = [...fullpages];
      newPages.pop();
      return {
        fullpages: newPages
      };
    });
  }

  render() {
    // var x = "hola"
    // console.log(x)
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-2816188551" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-2816188551" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2816188551" + " " + "header-logos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://kambista.com/",
      className: "jsx-2816188551" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-2816188551" + " " + "header-logo-kambista",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/kambista-logo.svg",
      alt: "",
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.latam.com/es_pe/?gclid=CjwKCAiAv9riBRANEiwA9Dqv1QYQ40vM47knl33LWk2E7aCk-fShIGvWL14Np6tG7GsO1WbT7x-vLBoCAvwQAvD_BwE&gclsrc=aw.ds",
      className: "jsx-2816188551" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-2816188551" + " " + "header-logo-latam",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/latam-logo.svg",
      alt: "",
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-2816188551" + " " + "header-socialNetwork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://kambista.com/",
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figcaption", {
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Volver a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Kambista")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/house.svg",
      alt: "",
      className: "jsx-2816188551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2816188551",
      __self: this
    }, ".header.jsx-2816188551{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:9;}.header.jsx-2816188551 .container.jsx-2816188551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1200px;width:96%;margin:auto;}.header-logos.jsx-2816188551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.header-logo.jsx-2816188551{display:inline-block;margin:10px;}.header-logo-kambista.jsx-2816188551{position:relative;padding-right:15px;}.header-logo-kambista.jsx-2816188551:before{content:\"\";position:absolute;top:0;right:0;bottom:0;margin:auto;background:white;opacity:.5;width:1px;height:60%;}.header-socialNetwork.jsx-2816188551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;}.header-socialNetwork.jsx-2816188551 a.jsx-2816188551:hover img.jsx-2816188551{background:#051392;box-shadow:0px 1px 15px rgba(0,0,0,0.85);}.header-socialNetwork.jsx-2816188551 figure.jsx-2816188551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-socialNetwork.jsx-2816188551 figcaption.jsx-2816188551{margin:10px;color:white;}.header-socialNetwork.jsx-2816188551 img.jsx-2816188551{padding:10px;border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;width:35px;height:35px;box-sizing:border-box;margin:0 2px;}@media (max-width:650px){.header.jsx-2816188551 .container.jsx-2816188551{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-socialNetwork.jsx-2816188551{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFaUIsQUFHK0IsQUFTVixBQVFBLEFBR1EsQUFJSCxBQUlQLEFBWUUsQUFJTSxBQUlOLEFBSUQsQUFJQyxBQVlXLEFBR1YsV0ExQ0ksQ0F3Qk4sQ0FJTSxBQWVsQixLQS9DbUIsQ0FvQnlCLEVBeEJoQyxFQXBCSSxDQXFEakIsS0F4Qk8sRUE0QlUsRUFwQ2pCLEVBU1MsRUFMVCxFQXhCbUIsSUE4QlQsSUEyQk0sS0ExQkgsS0E5Qk4sR0EyQ1AsR0ExQ1EsQ0E4QlUsTUE3Qk4sSUFLbUIsQUFRL0IsQUF1QmEsQUFRTyxPQTNDVCxBQTZCQyxJQXlCQSxDQWxCWixLQW5DQSxDQTZCVyxJQXlCRSxHQVFaLEdBaENXLE1BeUJXLEtBeEJ2QixpQkF5QmMsYUFDZCx3QkFkQSxzQkF2Q29CLDZGQUNGLGlCQUNQLFVBQ0UsWUFDYiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0fTtcblxuXHRcdC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlU2VjdGlvbkRvd24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdC8vIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIFx0ZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xuXHRcdC8vIH0pO1xuXHR9XG5cblx0aGFuZGxlQWRkU2VjdGlvbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcblx0XHQgIGNvbnN0IHsgZnVsbHBhZ2VzIH0gPSBzdGF0ZTtcblx0XHQgIGNvbnN0IHsgbGVuZ3RoIH0gPSBmdWxscGFnZXM7XG5cdFx0ICBmdWxscGFnZXMucHVzaCh7XG5cdFx0ICAgIHRleHQ6IGBzZWN0aW9uICR7bGVuZ3RoICsgMX1gLFxuXHRcdCAgICBpZDogTWF0aC5yYW5kb20oKSxcblx0XHQgIH0pO1xuXG5cdFx0ICByZXR1cm4ge1xuXHRcdCAgICBmdWxscGFnZXM6IFsuLi5mdWxscGFnZXNdLFxuXHRcdCAgfTtcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZVJlbW92ZVNlY3Rpb24oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XG5cdFx0ICBjb25zdCB7IGZ1bGxwYWdlcyB9ID0gc3RhdGU7XG5cdFx0ICBjb25zdCBuZXdQYWdlcyA9IFsuLi5mdWxscGFnZXNdO1xuXHRcdCAgbmV3UGFnZXMucG9wKCk7XG5cblx0XHQgIHJldHVybiB7IGZ1bGxwYWdlczogbmV3UGFnZXMgfTtcblx0XHR9KTtcblx0fVxuXG5cblx0cmVuZGVyICgpIHtcblxuXHRcdC8vIHZhciB4ID0gXCJob2xhXCJcblx0XHQvLyBjb25zb2xlLmxvZyh4KVxuXG5cdFx0cmV0dXJuIFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvc1wiPlxuXHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9rYW1iaXN0YS5jb20vXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvLWthbWJpc3RhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vc3RhdGljL2ltZy9rYW1iaXN0YS1sb2dvLnN2Z1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGF0YW0uY29tL2VzX3BlLz9nY2xpZD1DandLQ0FpQXY5cmlCUkFORWl3QTlEcXYxUVlRNDB2TTQ3a25sMzNMV2syRTdhQ2stZlNoSUd2V0wxNE5wNnRHN0dzTzFXYlQ3eC12TEJvQ0F2d1FBdkRfQndFJmdjbHNyYz1hdy5kc1wiIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJoZWFkZXItbG9nby1sYXRhbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL3N0YXRpYy9pbWcvbGF0YW0tbG9nby5zdmdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLXNvY2lhbE5ldHdvcmtcIj5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2thbWJpc3RhLmNvbS9cIiA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWb2x2ZXIgYSA8c3Ryb25nPkthbWJpc3RhPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL3N0YXRpYy9pbWcvaG91c2Uuc3ZnXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L25hdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiA5O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlciAuY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEyMDBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDk2JTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1sb2dvcyB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLWxvZ28ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbG9nby1rYW1iaXN0YSB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbG9nby1rYW1iaXN0YTpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogLjU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNjAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGE6aG92ZXIgaW1nIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzA1MTM5Mjtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC44NSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgZmlndXJlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgaW1nIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuM3M7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzNXB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAycHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xuXHRcdFx0XHRcdFx0XHQuaGVhZGVyIC5jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderColor.js":
/*!***********************************!*\
  !*** ./components/HeaderColor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/HeaderColor.js";




class HeaderColor extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-475824296" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-475824296" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-475824296" + " " + "header-logos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://kambista.com/",
      className: "jsx-475824296" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-475824296" + " " + "header-logo-kambista",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/kambista-logoColor.svg",
      alt: "",
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.latam.com/es_pe/?gclid=CjwKCAiAv9riBRANEiwA9Dqv1QYQ40vM47knl33LWk2E7aCk-fShIGvWL14Np6tG7GsO1WbT7x-vLBoCAvwQAvD_BwE&gclsrc=aw.ds",
      className: "jsx-475824296" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-475824296" + " " + "header-logo-latam",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/latamAzul.svg",
      alt: "",
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-475824296" + " " + "header-socialNetwork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://kambista.com/",
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figcaption", {
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Volver a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Kambista")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/houseBlue.svg",
      alt: "",
      className: "jsx-475824296",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "475824296",
      __self: this
    }, ".header.jsx-475824296{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:9;}.header.jsx-475824296 .container.jsx-475824296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1200px;width:96%;margin:auto;}.header-logos.jsx-475824296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.header-logo.jsx-475824296{display:inline-block;margin:10px;}.header-logo-kambista.jsx-475824296{position:relative;padding-right:15px;}.header-logo-kambista.jsx-475824296 img.jsx-475824296{max-width:110px;}.header-logo-kambista.jsx-475824296:before{content:\"\";position:absolute;top:0;right:0;bottom:0;margin:auto;background:gray;opacity:.5;width:1px;height:60%;}.header-logo-latam.jsx-475824296 img.jsx-475824296{max-width:100px;}.header-socialNetwork.jsx-475824296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:gray;}.header-socialNetwork.jsx-475824296 a.jsx-475824296:hover img.jsx-475824296{background:white;}.header-socialNetwork.jsx-475824296 figure.jsx-475824296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-socialNetwork.jsx-475824296 figcaption.jsx-475824296{margin:10px;color:gray;}.header-socialNetwork.jsx-475824296 strong.jsx-475824296{color:#041082;}.header-socialNetwork.jsx-475824296 img.jsx-475824296{padding:10px;border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;width:35px;height:35px;box-sizing:border-box;margin:0 2px;box-shadow:0px 3px 15px rgba(0,0,0,0.1);}@media (max-width:650px){.header.jsx-475824296 .container.jsx-475824296{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-socialNetwork.jsx-475824296{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSGVhZGVyQ29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNpQixBQUcrQixBQVNWLEFBUUEsQUFHUSxBQUlILEFBSUYsQUFHTCxBQVlLLEFBR0gsQUFJSSxBQUdKLEFBSUQsQUFJRSxBQUdELEFBYVcsQUFHVixXQWhESSxDQTBCUCxDQU9PLEFBZ0JsQixDQW5CRCxFQWpDQSxBQWVBLENBT0EsQ0ExQm9CLEdBSlAsRUFwQkksQUEwRGpCLE1BMUJPLEVBaUNVLEVBNUNqQixFQVlTLEVBUlQsRUF4Qm1CLElBaUNULElBZ0NNLEtBL0JILEtBakNOLE1BQ0MsQ0FpQ1MsTUFoQ0wsSUFLbUIsQUFRL0IsQUE2QlksQUFPUSxNQWhCUixDQWhDRCxJQTBDWCxBQW9CWSxNQTdEWixBQWdDVyxLQThCRSxHQVNaLEVBdENXLE9BOEJXLElBN0J2QixrQkE4QmMsYUFDOEIsd0JBakI1QyxnQkFrQkEsTUE5RG9CLDZGQUNGLGlCQUNQLFVBQ0UsWUFDYiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0hlYWRlckNvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBIZWFkZXJDb2xvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0cmV0dXJuIFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvc1wiPlxuXHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9rYW1iaXN0YS5jb20vXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvLWthbWJpc3RhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vc3RhdGljL2ltZy9rYW1iaXN0YS1sb2dvQ29sb3Iuc3ZnXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5sYXRhbS5jb20vZXNfcGUvP2djbGlkPUNqd0tDQWlBdjlyaUJSQU5FaXdBOURxdjFRWVE0MHZNNDdrbmwzM0xXazJFN2FDay1mU2hJR3ZXTDE0TnA2dEc3R3NPMVdiVDd4LXZMQm9DQXZ3UUF2RF9Cd0UmZ2Nsc3JjPWF3LmRzXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvLWxhdGFtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vc3RhdGljL2ltZy9sYXRhbUF6dWwuc3ZnXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlci1zb2NpYWxOZXR3b3JrXCI+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9rYW1iaXN0YS5jb20vXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWb2x2ZXIgYSA8c3Ryb25nPkthbWJpc3RhPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL3N0YXRpYy9pbWcvaG91c2VCbHVlLnN2Z1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9uYXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXIgLmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMjAwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA5NiU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbG9nb3Mge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1sb2dvIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLWxvZ28ta2FtYmlzdGEge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLWxvZ28ta2FtYmlzdGEgaW1nIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbG9nby1rYW1iaXN0YTpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBncmF5O1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAuNTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDFweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2MCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLWxvZ28tbGF0YW0gaW1nIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGE6aG92ZXIgaW1nIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgZmlndXJlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBzdHJvbmcge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBpbWcge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC4zcztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM1cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzVweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIDJweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5oZWFkZXIgLmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb2xvcjsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/HeaderColor.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderColor);

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
      className: "jsx-2973163599" + " " + "Layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-2973163599",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, user-scalable=no",
      className: "jsx-2973163599",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: "/static/img/FAVICON-DOLAR.png",
      className: "jsx-2973163599",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2973163599",
      __self: this
    }, "@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'Montserrat';src:url('/static/fonts/Montserrat-Regular.woff2') format('woff2'), url('/static/fonts/Montserrat-Regular.woff') format('woff');font-weight:normal;font-style:normal;}body{overflow-x:hidden;}.Layout{height:100vh;font-family:'Viga';}.df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-packjustify-content;-webkit-justify-content;-ms-flex-packjustify-content;justify-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}.fp-controlArrow.fp-prev{width:30px !important;}@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}.firstSection{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(/static/img/bg1.svg) -233px 0px;background-size:cover;height:100%;position:relative;}.firstSection:before{content:\"\";background:url(/static/img/nubes1.svg) -35px 0px;background-size:cover;position:absolute;bottom:0;left:0;right:0;width:100%;height:30vh;}.firstSection:after{content:\"\";background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:30px;left:0;right:0;margin:auto;width:30px;height:30px;z-index:9;}.secondSection{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.section3{position:relative;}.section3:before{content:\"\";background:url(/static/img/nubes3.svg) center center no-repeat;background-size:cover;position:absolute;bottom:0;left:0;width:100%;z-index:9;height:30vh;}@media screen and (max-width:1024px){.section3:before{height:30vh;z-index:10;background-size:inherit;}}@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCc0IsQUFJd0IsQUFJTCxBQUtRLEFBVU8sQUFRZixBQW1CSixBQVNLLEFBR0EsQUFHRSxBQUdKLEFBSUQsQUFJYyxBQUlKLEFBS0MsQUFNTSxBQUdILEFBR0QsQUFTQSxBQVdELEFBVUgsQUFZQSxBQWNRLEFBT0EsQUFLUCxBQWFHLEFBUUksQUFHSCxBQUdELEFBU0EsU0F0SmQsRUFzQkcsQUF1RDhDLEFBWWIsQUEwQjJCLENBakcxRSxBQTZCd0QsQUFTQSxBQXdFaEMsQUFjZ0MsQUFTQSxDQWpNcEMsQUFzRlQsQUErRkEsQ0FsSVgsQUFHQSxFQUdBLEFBMEJXLEFBK0ZBLEVBdExYLEFBcUp3QixBQU9mLENBbkpxQyxBQXNDcEMsR0FrQ1YsQ0E4RnFDLENBMUdyQyxDQWpEb0UsQUFvRGxELEdBeEJGLElBM0NoQixVQW9FQSxDQXhCYyxJQStISCxHQXBHVyxJQTRESSxDQTFDUyxBQVNBLEFBc0ZBLEFBU0EsQ0FwSlYsSUEwRVEsRUEvR3NCLFNBZ0V2RCxHQWxEZ0IsQUFzRmtCLEFBaURELEVBekJYLENBMUNFLEFBU0EsQUFzRkEsQUFTQSxHQXBKeEIsRUEwRTZCLE1BN0JKLEFBU0EsQUFzRkEsQUFTQSxJQWxEUyxFQVpsQixFQXlCYSxJQWxFUSxBQVNDLEFBb0JsQixBQWtFaUIsQUFTQyxNQTlEM0IsR0FaTyxJQWFOLENBd0JRLEVBcENELEtBYUgsRUF3QkUsQ0FwQ0ksTUFxQ0EsR0F4QlAsRUFaUSxNQXFDRixHQXhCTCxHQVpQLElBcUNjLENBbkpBLElBMkhULE9BeUJMLEdBeEJBLEtBM0hhLEVBNEZRLEVBdEZWLFNBc0VHLEFBK0ZBLEdBdEZDLEFBK0ZBLEVBbkx4QixFQWdJOEIsR0FwRG5CLEFBK0ZBLElBdEZBLEFBK0ZBLDZDQTdMVyxtQkFDRCxJQW9HcUMsRUF0RnZDLFlBYm5CLElBd0lTLEVBMUhULDJCQXNGaUMsc0JBQ1YsWUFDTSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG5cdHJlbmRlciAoKSB7XG5cblx0XHRjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgd2lkdGggfSA9IHRoaXMucHJvcHNcblx0XHRcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIj5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvc3RhdGljL2ltZy9GQVZJQ09OLURPTEFSLnBuZ1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5MYXlvdXQge1xuXHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdWaWdhJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBmb250LWZhY2V7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTonVmlnYSc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIuZW90dFwiKTtcblx0XHRcdFx0ICAgIHNyYzpsb2NhbCgn4pi6JyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci53b2ZmXCIpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIudHRmXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLnN2Z1wiKSBmb3JtYXQoJ3N2ZycpO1xuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuXHRcdFx0XHQgICAgZm9udC1zdHlsZTpub3JtYWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuXHRcdFx0XHQgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuXHRcdFx0XHQgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcblx0XHRcdFx0ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdCAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZGYge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuXHRcdFx0XHRoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5cdFx0XHRcdGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcblx0XHRcdFx0ZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuXHRcdFx0XHRzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuXHRcdFx0XHRiLCB1LCBpLCBjZW50ZXIsXG5cdFx0XHRcdGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5cdFx0XHRcdGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxuXHRcdFx0XHR0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcblx0XHRcdFx0YXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5cdFx0XHRcdGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcblx0XHRcdFx0bWFpbiwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG5cdFx0XHRcdHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0Ym9yZGVyOiAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTAwJTtcblx0XHRcdFx0XHRmb250OiBpbmhlcml0O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuXHRcdFx0XHRmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9sLCB1bCB7XG5cdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRibG9ja3F1b3RlLCBxIHtcblx0XHRcdFx0XHRxdW90ZXM6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5cdFx0XHRcdHE6YmVmb3JlLCBxOmFmdGVyIHtcblx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRjb250ZW50OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhYmxlIHtcblx0XHRcdFx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRcdFx0XHRcdGJvcmRlci1zcGFjaW5nOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGEge1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZnAtY29udHJvbEFycm93LmZwLXByZXYge1xuXHRcdFx0XHRcdHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdCAgICAgICAgICAgICAgLnNsaWRlIHtcblx0ICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIC5mcC1yaWdodCB7XG5cdCAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAuZnAtY29udHJvbEFycm93LmZwLXByZXYge1xuXHQgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXHQgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL2Fycm93LWRvd24uc3ZnKTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcblx0ICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcblx0ICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0ICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIC5mcC1jb250cm9sQXJyb3cuZnAtbmV4dCB7XG5cdCAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5zdmcpO1xuXHQgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0ICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuXHQgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXHQgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcblx0ICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC5maXJzdFNlY3Rpb24ge1xuXHQgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cdCAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdCAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvYmcxLnN2ZykgLTIzM3B4IDBweDtcblx0ICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblx0ICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAuZmlyc3RTZWN0aW9uOmJlZm9yZSB7XG5cdCAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9udWJlczEuc3ZnKSAtMzVweCAwcHg7XG5cdCAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0ICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICAgICAgICAgICAgYm90dG9tOiAwO1xuXHQgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cdCAgICAgICAgICAgICAgcmlnaHQ6IDA7XG5cdCAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cdCAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLmZpcnN0U2VjdGlvbjphZnRlciB7XG5cdCAgICAgICAgICAgIFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5zdmcpO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMzBweDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC5zZWNvbmRTZWN0aW9uIHtcblx0ICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblx0ICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLnNlY3Rpb24zIHtcblx0ICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICAgICAgICAgIH1cblxuXG5cdCAgICAgICAgICAgIC5zZWN0aW9uMzpiZWZvcmUge1xuXHQgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cdCAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL251YmVzMy5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgICAgICAgICAgIGJvdHRvbTogMDtcblx0ICAgICAgICAgICAgICBsZWZ0OiAwO1xuXHQgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG5cdCAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdCAgICAgICAgICAgICAgLnNlY3Rpb24zOmJlZm9yZSB7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG5cdCAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXHQgICAgICAgICAgICAgIC5zbGlkZSB7XG5cdCAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAuZnAtcmlnaHQge1xuXHQgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgLmZwLWNvbnRyb2xBcnJvdy5mcC1wcmV2IHtcblx0ICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdCAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAuZnAtY29udHJvbEFycm93LmZwLW5leHQge1xuXHQgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXHQgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL2Fycm93LWRvd24uc3ZnKTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcblx0ICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcblx0ICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5cdCAgICAgICAgICAgICAgICByaWdodDogMTBweDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0XHRcdFx0XG5cdFx0XHRgfTwvc3R5bGU+XG5cblx0XHQ8L2Rpdj5cblx0fVxufSJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js */"));
  }

}

/***/ }),

/***/ "./components/Paso1.js":
/*!*****************************!*\
  !*** ./components/Paso1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso1.js";




class Paso1 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3872898861" + " " + "Paso1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3872898861" + " " + "Paso1-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3872898861" + " " + "Paso1-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\xBFQu\xE9 plan prefieres para tus clientes?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Empieza a ganar m\xE1s clientes ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "ahora"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-3872898861" + " " + "Paso1-Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: this.props.image,
      alt: "",
      className: "jsx-3872898861" + " " + "avion2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3872898861" + " " + "Paso1-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, this.props.footerFirst, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.kambista.com",
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.props.footerStrong)), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3872898861",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), this.props.footerEnd), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      onClick: this.handleDown,
      className: "jsx-3872898861" + " " + "ViajaKambista-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3872898861",
      __self: this
    }, ".Paso1.jsx-3872898861{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:relative;text-align:center;min-width:300px;}.Paso1-container.jsx-3872898861{width:90%;margin:auto;}.Paso1-title.jsx-3872898861{display:none;}.Paso1-title.jsx-3872898861 h3.jsx-3872898861{color:#041082;font-size:35px;}.Paso1-title.jsx-3872898861 p.jsx-3872898861{color:gray;font-size:14px;margin-bottom:30px;margin-top:5px;}.Paso1-title.jsx-3872898861 strong.jsx-3872898861{color:#041082;font-size:15px;}.Paso1-Image.jsx-3872898861{margin-bottom:20px;}.Paso1-Image.jsx-3872898861 img.jsx-3872898861{max-width:150px;width:100%;margin:auto;display:block;}.Paso1-footer.jsx-3872898861{color:gray;}.Paso1-footer.jsx-3872898861 strong.jsx-3872898861{color:#041082;}.ViajaKambista-down.jsx-3872898861{background:url(./static/img/arrow.svg);background-size:cover;position:absolute;bottom:20px;top:0;right:0;margin:auto;width:5px;height:25px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}@media screen and (max-width:767px){.Paso1-title.jsx-3872898861{display:block;}.ViajaKambista-down.jsx-3872898861{background:url(./static/img/arrow.svg);background-size:cover;position:absolute;bottom:20px;left:0;right:0;margin:auto;width:5px;height:25px;-webkit-transform:inherit;-ms-transform:inherit;transform:inherit;top:inherit;}}@media screen and (max-width:374px){.Paso1-title.jsx-3872898861 p.jsx-3872898861{font-size:12px;}.Paso1-title.jsx-3872898861 strong.jsx-3872898861{font-size:13px;margin-top:5px;font-weight:bold;}.Paso1-footer.jsx-3872898861{font-size:13px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NpQixBQUdxQixBQVNILEFBS0csQUFHQyxBQUlILEFBTUcsQUFJSyxBQUdILEFBTUwsQUFHRyxBQUd5QixBQWN4QixBQUd5QixBQWdCeEIsQUFHQSxBQUtBLFVBN0VKLENBWUcsQUFtQmhCLEVBMUJBLENBR2dCLEFBVUEsQUFnQmhCLEFBaUJDLENBbUJBLEFBR2dCLEFBS2hCLENBckRXLEdBSFosR0FyQkEsSUFZb0IsQ0FhUCxFQWpCYixBQVVBLENBdURtQixTQS9DSixBQVVRLEFBaUJDLE1BeENSLEVBNkRmLE1BL0NELE9BYkEsQ0F1Qm1CLEFBaUJDLGFBaEVJLEtBZ0RYLEFBaUJDLFlBaEJQLEFBaUJFLE1BaEJBLENBaUJDLE9BaEJHLENBaUJDLFdBaEJILENBaUJDLFNBaEJDLENBaUJDLFdBaEJZLENBaUJOLGlDQXRFQSxpQ0F1RU4sWUFDYixRQWxCRCx3Q0FyRGMsYUFDSyxrQkFDQSxrQkFDRixnQkFDakIiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9QYXNvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgUGFzbzEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGhhbmRsZURvd24gKCkge1xuXHRcdGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJQYXNvMVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUGFzbzEtY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUGFzbzEtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0PGgzPsK/UXXDqSBwbGFuIHByZWZpZXJlcyBwYXJhIHR1cyBjbGllbnRlcz88L2gzPlxuXHRcdFx0XHRcdFx0XHQ8cD5FbXBpZXphIGEgZ2FuYXIgbcOhcyBjbGllbnRlcyA8YnIvPjxzdHJvbmc+YWhvcmE8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJQYXNvMS1JbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRcdHNyYz17dGhpcy5wcm9wcy5pbWFnZX0gXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhdmlvbjJcIiAvPlxuXHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIlBhc28xLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5mb290ZXJGaXJzdH0gPGJyLz5cblx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmthbWJpc3RhLmNvbVwiPjxzdHJvbmc+e3RoaXMucHJvcHMuZm9vdGVyU3Ryb25nfTwvc3Ryb25nPjwvYT4gPGJyLz5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZm9vdGVyRW5kfVxuXHRcdFx0XHRcdFx0PC9wPlxuXG5cdFx0XHRcdFx0XHRcblxuXHRcdFx0XHRcdFx0PHNwYW4gXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG93bn1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiVmlhamFLYW1iaXN0YS1kb3duXCI+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5QYXNvMSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMS1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogOTAlOyBcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28xLXRpdGxlIHtcblx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luLXRvcDogLTcwcHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzEtdGl0bGUgaDMge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28xLXRpdGxlIHAge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzEtdGl0bGUgc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwNDEwODI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMS1JbWFnZSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzEtSW1hZ2UgaW1ne1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDE1MHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMS1mb290ZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMS1mb290ZXIgc3Ryb25ne1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5WaWFqYUthbWJpc3RhLWRvd24ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi9zdGF0aWMvaW1nL2Fycm93LnN2Zyk7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuXHRcdFx0XHRcdFx0XHQuUGFzbzEtdGl0bGUge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5WaWFqYUthbWJpc3RhLWRvd24ge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCguL3N0YXRpYy9pbWcvYXJyb3cuc3ZnKTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDVweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogaW5oZXJpdDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCl7XG5cdFx0XHRcdFx0XHRcdC5QYXNvMS10aXRsZSBwIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlBhc28xLXRpdGxlIHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuUGFzbzEtZm9vdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzbzE7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso1.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Paso1);

/***/ }),

/***/ "./components/Paso2.js":
/*!*****************************!*\
  !*** ./components/Paso2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso2.js";




class Paso2 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2781073922" + " " + "Paso2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2781073922" + " " + "Paso2-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2781073922" + " " + "Paso2-title desktop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, this.props.title2), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.subtitle, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.subtitleStrong))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2781073922" + " " + "Paso2-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Paso a Paso"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Empieza a ganar millas siguiendo estos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "3 simples pasos"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-2781073922" + " " + "Paso2-Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: this.props.image,
      alt: "",
      className: "jsx-2781073922" + " " + "avion2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2781073922" + " " + "Paso2-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, this.props.footerFirst, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.kambista.com",
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, this.props.footerStrong)), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-2781073922",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), this.props.footerEnd), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      onClick: this.handleDown,
      className: "jsx-2781073922" + " " + "ViajaKambista-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2781073922",
      __self: this
    }, ".Paso2.jsx-2781073922{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:relative;text-align:center;min-width:300px;}.Paso2-container.jsx-2781073922{width:90%;margin:auto;}.Paso2-container.jsx-2781073922 h4.jsx-2781073922{color:#041082;font-size:35px;margin-bottom:5px;}.Paso2-container.jsx-2781073922 p.jsx-2781073922{color:gray;margin-bottom:30px;}.Paso2-container.jsx-2781073922 p.jsx-2781073922 strong.jsx-2781073922{color:#041082;display:block;}.Paso2-title.desktop.jsx-2781073922{display:block;margin-top:-35px;}.Paso2-title.jsx-2781073922{display:none;}.Paso2-title.jsx-2781073922 h3.jsx-2781073922{color:#041082;font-size:20px;}.Paso2-title.jsx-2781073922 p.jsx-2781073922{color:gray;font-size:14px;margin-bottom:30px;margin-top:5px;}.Paso2-title.jsx-2781073922 strong.jsx-2781073922{color:#041082;font-size:15px;}.Paso2-Image.jsx-2781073922{margin-bottom:20px;}.Paso2-Image.jsx-2781073922 img.jsx-2781073922{max-width:110px;width:100%;margin:auto;display:block;}.Paso2-footer.jsx-2781073922{color:gray;}.Paso2-footer.jsx-2781073922 strong.jsx-2781073922{color:#041082;}.ViajaKambista-down.jsx-2781073922{background:url(./static/img/arrow.svg);background-size:cover;position:absolute;bottom:20px;top:0;right:0;margin:auto;width:5px;height:25px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}@media screen and (max-width:767px){.Paso2-container.jsx-2781073922 p.jsx-2781073922{font-size:12px;}.Paso2-title.desktop.jsx-2781073922{display:none;}.Paso2-title.jsx-2781073922{display:block;}.ViajaKambista-down.jsx-2781073922{background:url(./static/img/arrow.svg);background-size:cover;position:absolute;bottom:20px;left:0;right:0;margin:auto;width:5px;height:25px;-webkit-transform:inherit;-ms-transform:inherit;transform:inherit;top:inherit;left:0;}}@media screen and (max-width:374px){.Paso2-title.jsx-2781073922 p.jsx-2781073922{font-size:12px;}.Paso2-title.jsx-2781073922 strong.jsx-2781073922{font-size:13px;margin-top:5px;font-weight:bold;}.Paso2-footer.jsx-2781073922{font-size:13px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENpQixBQUdxQixBQVNILEFBSUksQUFLSCxBQUlHLEFBSUEsQUFJRCxBQUdDLEFBSUgsQUFNRyxBQUlLLEFBR0gsQUFNTCxBQUdHLEFBR3lCLEFBY3ZCLEFBR0YsQUFHQyxBQUd5QixBQWlCeEIsQUFHQSxBQUtBLFVBcEdKLENBU08sQUFtQkosQUFtQmhCLEVBMUJBLEFBaURDLENBbEVlLEFBU0QsQUFJRyxBQU9GLEFBVUEsQUFnQmhCLEFBdUJDLENBTkEsQUEwQkEsQUFHZ0IsQUFLaEIsQ0E1RFcsR0FIWixHQXJDQSxJQTRCb0IsQ0FhUCxDQTVCYixDQVRtQixBQW9CbkIsQUFVQSxDQXpCQSxBQXVGbUIsQ0EvRW5CLFFBeUJlLEFBVVEsQUF1QkMsTUE5Q1IsRUF4QmhCLEFBNEZDLE1BdERELE9BYkEsQ0F1Qm1CLEFBdUJDLGFBdEZJLEtBZ0VYLEFBdUJDLFlBdEJQLEFBdUJFLE1BdEJBLENBdUJDLE9BdEJHLENBdUJDLFdBdEJILENBdUJDLFNBdEJDLENBdUJDLFdBdEJZLENBdUJOLGlDQTVGQSxpQ0E2Rk4sWUFDTCxPQUNSLENBekJELHdDQXJFYyxhQUNLLGtCQUNBLGtCQUNGLGdCQUNqQiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL1Bhc28yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBQYXNvMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0aGFuZGxlRG93biAoKSB7XG5cdFx0ZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gXHQ8ZGl2IGNsYXNzTmFtZT1cIlBhc28yXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJQYXNvMi1jb250YWluZXJcIj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJQYXNvMi10aXRsZSBkZXNrdG9wXCI+XG5cdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5wcm9wcy50aXRsZTJ9PC9oMz5cblx0XHRcdFx0XHRcdFx0PHA+e3RoaXMucHJvcHMuc3VidGl0bGV9IDxzdHJvbmc+e3RoaXMucHJvcHMuc3VidGl0bGVTdHJvbmd9PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUGFzbzItdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0PGg0PlBhc28gYSBQYXNvPC9oND5cblx0XHRcdFx0XHRcdFx0PHA+RW1waWV6YSBhIGdhbmFyIG1pbGxhcyBzaWd1aWVuZG8gZXN0b3MgIFxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+MyBzaW1wbGVzIHBhc29zPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiUGFzbzItSW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdFx0XHRzcmM9e3RoaXMucHJvcHMuaW1hZ2V9IFxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXZpb24yXCIgLz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJQYXNvMi1mb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZm9vdGVyRmlyc3R9IDxici8+XG5cdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5rYW1iaXN0YS5jb21cIj48c3Ryb25nPnt0aGlzLnByb3BzLmZvb3RlclN0cm9uZ308L3N0cm9uZz48L2E+IDxici8+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmZvb3RlckVuZH1cblx0XHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHRcdFx0PHNwYW4gXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG93bn0gXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIlZpYWphS2FtYmlzdGEtZG93blwiPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuUGFzbzIge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzItY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDkwJTsgXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMi1jb250YWluZXIgaDQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzItY29udGFpbmVyIHAge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMi1jb250YWluZXIgcCBzdHJvbmcge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzItdGl0bGUuZGVza3RvcCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMzVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMi10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzItdGl0bGUgaDMge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28yLXRpdGxlIHAge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzItdGl0bGUgc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwNDEwODI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMi1JbWFnZSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzItSW1hZ2UgaW1ne1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDExMHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMi1mb290ZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMi1mb290ZXIgc3Ryb25ne1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5WaWFqYUthbWJpc3RhLWRvd24ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi9zdGF0aWMvaW1nL2Fycm93LnN2Zyk7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuXHRcdFx0XHRcdFx0XHQuUGFzbzItY29udGFpbmVyIHAge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuUGFzbzItdGl0bGUuZGVza3RvcCB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuUGFzbzItdGl0bGUge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5WaWFqYUthbWJpc3RhLWRvd24ge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCguL3N0YXRpYy9pbWcvYXJyb3cuc3ZnKTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDVweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogaW5oZXJpdDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KXtcblx0XHRcdFx0XHRcdFx0LlBhc28yLXRpdGxlIHAge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuUGFzbzItdGl0bGUgc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5QYXNvMi1mb290ZXIge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNvMjsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso2.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Paso2);

/***/ }),

/***/ "./components/Paso3.js":
/*!*****************************!*\
  !*** ./components/Paso3.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso3.js";




class Paso3 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-534061647" + " " + "Paso3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-534061647" + " " + "Paso3-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-534061647" + " " + "Paso3-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-534061647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Paso a Paso"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-534061647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Empieza a ganar millas siguiendo estos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-534061647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "3 simples pasos"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-534061647" + " " + "Paso3-Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: this.props.image,
      alt: "",
      className: "jsx-534061647" + " " + "avion2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-534061647" + " " + "Paso3-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.props.footerFirst, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-534061647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.kambista.com",
      className: "jsx-534061647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-534061647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, this.props.footerStrong)), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-534061647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), this.props.footerEnd), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      onClick: this.handleDown,
      className: "jsx-534061647" + " " + "ViajaKambista-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "534061647",
      __self: this
    }, ".Paso3.jsx-534061647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:relative;text-align:center;min-width:300px;}.Paso3-container.jsx-534061647{width:90%;margin:auto;}.Paso3-title.jsx-534061647{display:none;}.Paso3-container.jsx-534061647 h4.jsx-534061647{color:#041082;font-size:35px;margin-bottom:5px;}.Paso3-container.jsx-534061647 p.jsx-534061647{color:gray;margin-bottom:30px;}.Paso3-container.jsx-534061647 p.jsx-534061647 strong.jsx-534061647{color:#041082;display:block;}.Paso3-title.jsx-534061647 h3.jsx-534061647{color:#041082;font-size:35px;}.Paso3-title.jsx-534061647 p.jsx-534061647{color:gray;font-size:14px;margin-bottom:30px;margin-top:5px;}.Paso3-title.jsx-534061647 strong.jsx-534061647{color:#041082;font-size:15px;}.Paso3-Image.jsx-534061647{margin-bottom:20px;}.Paso3-Image.jsx-534061647 img.jsx-534061647{max-width:110px;width:100%;margin:auto;display:block;margin-top:55px;}.Paso3-footer.jsx-534061647{color:gray;}.Paso3-footer.jsx-534061647 strong.jsx-534061647{color:#041082;}.ViajaKambista-down.jsx-534061647{background:url(/static/img/arrow.svg);background-size:cover;position:absolute;bottom:20px;left:0;right:0;margin:auto;width:5px;height:25px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);display:none;}@media screen and (max-width:767px){.Paso3-container.jsx-534061647 p.jsx-534061647{font-size:12px;}.Paso3-title.jsx-534061647{display:block;}.ViajaKambista-down.jsx-534061647{background:url(/static/img/arrow.svg);background-size:cover;position:absolute;bottom:20px;left:0;right:0;margin:auto;width:5px;height:25px;-webkit-transform:inherit;-ms-transform:inherit;transform:inherit;display:block;}}@media screen and (max-width:374px){.Paso3-title.jsx-534061647 p.jsx-534061647{font-size:12px;}.Paso3-title.jsx-534061647 strong.jsx-534061647{font-size:13px;margin-top:5px;font-weight:bold;}.Paso3-footer.jsx-534061647{font-size:13px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NpQixBQUdxQixBQVNILEFBSUcsQUFHQyxBQU1ILEFBSUcsQUFPQSxBQUlILEFBTUcsQUFJSyxBQUdILEFBT0wsQUFHRyxBQUd3QixBQWV0QixBQUdELEFBR3dCLEFBZ0J2QixBQUdBLEFBS0EsVUFsR0osQ0FhTyxBQWVKLEFBb0JoQixFQTVDQSxDQUdnQixBQVVELEFBT0MsQUFVQSxBQWlCaEIsQUFxQkMsQ0FIQSxBQXNCQSxBQUdnQixBQUtoQixDQTFEVyxHQUhaLEdBckNBLElBNEJvQixDQWFQLENBeEJiLENBVG1CLEFBZ0JuQixBQVVBLENBckJBLEFBaUZtQixRQXpDSSxBQXFCQyxDQWhDVCxNQWJDLEVBcEJoQixBQXNGQyxNQXBEZ0IsT0FiakIsQUF3Qm1CLEFBcUJDLFNBL0JwQixLQXREd0IsSUFpRVgsQUFxQkMsWUFwQk4sQUFxQkMsT0FwQkEsQUFxQkMsUUFwQkcsQUFxQkMsWUFwQkgsQUFxQkMsVUFwQkMsQUFxQkMsWUFwQlksQUFxQk4sa0NBM0ZBLGdDQTRGSixjQUNmLE9BdEJhLGFBQ2QsMkJBdkVjLGFBQ0ssa0JBQ0Esa0JBQ0YsZ0JBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIFBhc28zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRoYW5kbGVEb3duICgpIHtcblx0XHRmdWxscGFnZV9hcGkubW92ZVNlY3Rpb25Eb3duKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwiUGFzbzNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlBhc28zLWNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlBhc28zLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdDxoND5QYXNvIGEgUGFzbzwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxwPkVtcGllemEgYSBnYW5hciBtaWxsYXMgc2lndWllbmRvIGVzdG9zICBcblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjMgc2ltcGxlcyBwYXNvczwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJQYXNvMy1JbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRcdHNyYz17dGhpcy5wcm9wcy5pbWFnZX0gXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhdmlvbjJcIiAvPlxuXHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIlBhc28zLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5mb290ZXJGaXJzdH0gPGJyLz5cblx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmthbWJpc3RhLmNvbVwiPjxzdHJvbmc+e3RoaXMucHJvcHMuZm9vdGVyU3Ryb25nfTwvc3Ryb25nPjwvYT4gPGJyLz5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZm9vdGVyRW5kfVxuXHRcdFx0XHRcdFx0PC9wPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVEb3dufSBcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiVmlhamFLYW1iaXN0YS1kb3duXCI+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5QYXNvMyB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMy1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogOTAlOyBcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28zLXRpdGxlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMy1jb250YWluZXIgaDQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tdG9wOiAtMTE1cHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMy1jb250YWluZXIgcCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28zLWNvbnRhaW5lciBwIHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDQxMDgyO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMy10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdC8vIG1hcmdpbi10b3A6IC03MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28zLXRpdGxlIGgzIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwNDEwODI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvMy10aXRsZSBwIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28zLXRpdGxlIHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDQxMDgyO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzMtSW1hZ2Uge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc28zLUltYWdlIGltZ3tcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMTBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDU1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzMtZm9vdGVyIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzMtZm9vdGVyIHN0cm9uZ3tcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwNDEwODI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuVmlhamFLYW1iaXN0YS1kb3duIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL2Fycm93LnN2Zyk7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNXB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcblx0XHRcdFx0XHRcdFx0LlBhc28zLWNvbnRhaW5lciBwIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlBhc28zLXRpdGxlIHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuVmlhamFLYW1iaXN0YS1kb3duIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvYXJyb3cuc3ZnKTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDVweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XHRcblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpe1xuXHRcdFx0XHRcdFx0XHQuUGFzbzMtdGl0bGUgcCB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5QYXNvMy10aXRsZSBzdHJvbmcge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlBhc28zLWZvb3RlciB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc28zOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso3.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Paso3);

/***/ }),

/***/ "./components/Paso4.js":
/*!*****************************!*\
  !*** ./components/Paso4.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso4.js";




class Paso4 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1535314555" + " " + "Paso4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1535314555" + " " + "Paso4-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1535314555" + " " + "Paso4-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1535314555",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\xBFCu\xE1ntas ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1535314555",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Millas LATAM Pass"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1535314555",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), "podr\xE1s acumular?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-1535314555" + " " + "Paso4-Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/ganamillas.svg",
      alt: "",
      className: "jsx-1535314555" + " " + "avion2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1535314555" + " " + "Paso4-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "(*) Reg\xEDstrate por 1era vez en kambista, ingresa tu n\xFAmero de socio LATAM Pass y haz tu primer cambio por $500 o m\xE1s.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1535314555",
      __self: this
    }, ".Paso4.jsx-1535314555{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:relative;text-align:center;}.Paso4-container.jsx-1535314555{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.Paso4-title.jsx-1535314555{display:none;}.Paso4-title.jsx-1535314555 h3.jsx-1535314555{color:#a6a6a6;font-size:18px;margin-top:60px;}.Paso4-title.jsx-1535314555 strong.jsx-1535314555{color:#041082;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;font-size:23px;}.Paso4-Image.jsx-1535314555{margin-bottom:20px;}.Paso4-Image.jsx-1535314555 img.jsx-1535314555{max-width:100%;height:auto;display:block;margin:auto;}.Paso4-footer.jsx-1535314555{font-family:'Montserrat';color:#E5E5E5;text-align:left;max-width:220px;margin:0 auto;position:relative;z-index:9;margin-top:-150px;font-size:14px;}.ViajaKambista-down.jsx-1535314555{background:url(./static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:40px;left:0;right:0;margin:auto;width:30px;height:30px;}@media screen and (max-width:767px){.Paso4-title.jsx-1535314555{display:block;}.Paso4-footer.jsx-1535314555{display:block;max-width:320px;margin-top:0;}}@media screen and (max-width:374px){.Paso4-container.jsx-1535314555{width:80%;}.Paso4-title.jsx-1535314555{display:block;}.Paso4-title.jsx-1535314555 h3.jsx-1535314555{font-size:14px;}.Paso4-title.jsx-1535314555 strong.jsx-1535314555{font-size:17px;}.Paso4-footer.jsx-1535314555{max-width:250px;margin:0 auto;font-size:12px;}img.jsx-1535314555{max-width:80%;margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NpQixBQUdxQixBQVFELEFBT0MsQUFHQyxBQUtBLEFBS0ssQUFHSCxBQU1TLEFBV21CLEFBYzdCLEFBR0EsQUFRSixBQUdJLEFBR0MsQUFHQSxBQUdDLEFBS0YsVUFoQmYsRUFqRWEsQ0FPZCxDQUdnQixBQUtLLEFBdUNwQixBQUdpQixBQVdqQixBQWNhLENBM0RBLEFBZ0RiLEFBR0EsQ0FHZSxHQXpEaEIsTUFTZSxDQXNEZCxDQTNEZSxFQWJDLENBK0NGLEFBb0JFLFNBaERBLEVBTEgsRUFrQ2IsQ0FuQnNCLENBNUJ2QixBQW1FQyxRQXJEQSxFQUtnQixXQVVFLEtBVEosR0F4Q1MsVUFrRFgsQ0FUTSxDQWhDTixVQTBDTCxFQXpDZSxLQWdDWixBQVVGLFFBNUJPLEFBNkJILEVBVk0sVUFXUCxHQTdCWixLQW1CZ0IsR0FXSCxZQVZiLEFBV0EsMkJBdkRvQixHQVVVLDBGQVRoQixhQUNLLGtCQUNBLEVBUW5CLGdCQVBBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIFBhc280IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRoYW5kbGVEb3duICgpIHtcblx0XHRmdWxscGFnZV9hcGkubW92ZVNlY3Rpb25Eb3duKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwiUGFzbzRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlBhc280LWNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlBhc280LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdDxoMz7Cv0N1w6FudGFzIDxzdHJvbmc+TWlsbGFzIExBVEFNIFBhc3M8L3N0cm9uZz4gPGJyLz5cblx0XHRcdFx0XHRcdFx0XHRwb2Ryw6FzIGFjdW11bGFyP1xuXHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiUGFzbzQtSW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIuL3N0YXRpYy9pbWcvZ2FuYW1pbGxhcy5zdmdcIiBcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImF2aW9uMlwiIC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiUGFzbzQtZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHRcdCgqKSBSZWfDrXN0cmF0ZSBwb3IgMWVyYSB2ZXogZW4ga2FtYmlzdGEsIGluZ3Jlc2EgdHUgbsO6bWVybyBkZSBzb2NpbyBMQVRBTSBQYXNzIHkgaGF6IHR1IHByaW1lciBjYW1iaW8gcG9yICQ1MDAgbyBtw6FzLiBcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0LlBhc280IHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc280LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvNC10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzQtdGl0bGUgaDMge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2E2YTZhNjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA2MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc280LXRpdGxlIHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDQxMDgyO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTFweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyM3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc280LUltYWdlIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvNC1JbWFnZSBpbWcge1xuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzQtZm9vdGVyIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNFNUU1RTU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMjIwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xNTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlZpYWphS2FtYmlzdGEtZG93biB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCguL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5zdmcpO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogNDBweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuXG5cdFx0XHRcdFx0XHRcdC5QYXNvNC10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlBhc280LWZvb3RlciB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzMjBweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XHRcdFxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCl7XG5cdFx0XHRcdFx0XHRcdC5QYXNvNC1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlBhc280LXRpdGxlIHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuUGFzbzQtdGl0bGUgaDMge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuUGFzbzQtdGl0bGUgc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LlBhc280LWZvb3RlciB7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDgwJTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc280OyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso4.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Paso4);

/***/ }),

/***/ "./components/Paso5.js":
/*!*****************************!*\
  !*** ./components/Paso5.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso5.js";




class paso5 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-294763649" + " " + "paso5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-294763649" + " " + "paso5-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-294763649" + " " + "paso5-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-294763649",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\xBFCu\xE1ntas ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-294763649",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Millas LATAM Pass"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-294763649",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), "podr\xE1s acumular?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-294763649" + " " + "paso5-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/img/paso5.svg",
      alt: "",
      className: "jsx-294763649" + " " + "avion2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "294763649",
      __self: this
    }, ".paso5.jsx-294763649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:relative;text-align:center;}.paso5-container.jsx-294763649{width:100%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.paso5-title.jsx-294763649 h3.jsx-294763649{color:#a6a6a6;font-size:18px;margin-top:100px;}.paso5-title.jsx-294763649 strong.jsx-294763649{color:#041082;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;font-size:23px;}.paso5-image.jsx-294763649{max-width:400px;}.paso5-image.jsx-294763649 img.jsx-294763649{max-width:240%;height:auto;display:block;margin:auto;margin-left:-180px;margin-bottom:-20px;position:relative;z-index:9;}.paso5-footer.jsx-294763649{font-family:'Montserrat';color:#E5E5E5;text-align:left;}.ViajaKambista-down.jsx-294763649{background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:40px;left:0;right:0;margin:auto;width:30px;height:30px;}@media screen and (max-width:1024px){.paso5-image.jsx-294763649 img.jsx-294763649{margin-left:-140px;}}@media screen and (max-width:767px){.paso5-title.jsx-294763649{display:block;}.paso5-image.jsx-294763649 img.jsx-294763649{margin-bottom:-40px;}}@media screen and (max-width:374px){.paso5-title.jsx-294763649 h3.jsx-294763649{font-size:14px;}.paso5-title.jsx-294763649 strong.jsx-294763649{font-size:17px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJpQixBQUdxQixBQVFGLEFBU0csQUFLQSxBQUtFLEFBR0QsQUFVVSxBQUtrQixBQWF2QixBQU1MLEFBR00sQUFNTCxBQUdBLFdBbkVKLEdBU0csQUFLSyxBQTBDcEIsQ0FsQ1ksQUEyQ1osQUFHQSxDQWpERCxHQStCQyxDQVNBLEdBMURhLEVBK0JDLEVBVEEsRUFiRyxVQXVCRCxFQVRKLEVBYVUsR0ExQnZCLE9BY29CLEVBU3BCLFVBSW1CLE9BWkUsRUFsQ0csU0ErQ1gsU0FaTSxHQWFYLEVBdENLLEtBdUNKLE9BdENjLENBeUJaLEFBY0UsQ0EzQkcsU0FjaEIsRUFjWSxJQTNCWixPQTRCYSxZQUNiLDRCQXBEb0IsY0FXVSwrRUFWaEIsYUFDSyxrQkFDQSxhQVNuQixLQVJBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIHBhc281IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRoYW5kbGVEb3duICgpIHtcblx0XHRmdWxscGFnZV9hcGkubW92ZVNlY3Rpb25Eb3duKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwicGFzbzVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhc281LWNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhc281LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdDxoMz7Cv0N1w6FudGFzIDxzdHJvbmc+TWlsbGFzIExBVEFNIFBhc3M8L3N0cm9uZz4gPGJyLz5cblx0XHRcdFx0XHRcdFx0XHRwb2Ryw6FzIGFjdW11bGFyP1xuXHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicGFzbzUtaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi4vc3RhdGljL2ltZy9wYXNvNS5zdmdcIiBcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImF2aW9uMlwiIC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0LnBhc281IHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnBhc281LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC5wYXNvNS10aXRsZSBoMyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjYTZhNmE2O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnBhc281LXRpdGxlIHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDQxMDgyO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTFweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyM3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnBhc281LWltYWdlIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5wYXNvNS1pbWFnZSBpbWcge1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDI0MCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xODBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogLTIwcHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5wYXNvNS1mb290ZXIge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI0U1RTVFNTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5WaWFqYUthbWJpc3RhLWRvd24ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5zdmcpO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogNDBweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcblx0XHRcdFx0XHRcdFx0LnBhc281LWltYWdlIGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xNDBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG5cdFx0XHRcdFx0XHRcdC5wYXNvNS10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LnBhc281LWltYWdlIGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogLTQwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpe1xuXHRcdFx0XHRcdFx0XHQucGFzbzUtdGl0bGUgaDMge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQucGFzbzUtdGl0bGUgc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhc281OyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso5.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (paso5);

/***/ }),

/***/ "./components/Paso6.js":
/*!*****************************!*\
  !*** ./components/Paso6.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso6.js";




class Paso6 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveTo(1, 0);
    ;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-557263493" + " " + "Paso6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-557263493" + " " + "Paso6-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-557263493" + " " + "Paso6-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-557263493",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\xBFCu\xE1ntas ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-557263493",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Millas LATAM Pass"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-557263493",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), "podr\xE1s acumular?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-557263493" + " " + "Paso6-Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/paso6.svg",
      alt: "",
      className: "jsx-557263493" + " " + "avion2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-557263493" + " " + "Paso6-btn-desktop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "T\xE9rminos y Condiciones"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-557263493" + " " + "btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-557263493" + " " + "Paso6-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "T\xE9rminos y Condiciones"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      onClick: this.handleDown,
      className: "jsx-557263493" + " " + "Paso6-btn active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Volver al Inicio"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "557263493",
      __self: this
    }, ".Paso6.jsx-557263493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:relative;text-align:center;z-index:9;}.Paso6-container.jsx-557263493{width:100%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.Paso6-title.jsx-557263493{display:none;}.Paso6-title.jsx-557263493 h3.jsx-557263493{color:#a6a6a6;font-size:18px;margin-top:40px;}.Paso6-title.jsx-557263493 strong.jsx-557263493{color:#041082;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;font-size:23px;}.Paso6-Image.jsx-557263493{margin-bottom:20px;}.Paso6-footer.jsx-557263493{font-family:'Montserrat';color:#E5E5E5;text-align:left;}img.jsx-557263493{max-width:100%;height:auto;display:block;margin:auto;}.ViajaKambista-down.jsx-557263493{background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:40px;left:0;right:0;margin:auto;width:30px;height:30px;}.Paso6-btn-desktop.jsx-557263493{display:block;background:white;color:gray;box-shadow:0px 3px 25px rgba(0,0,0,0.35);padding:12px 0px;width:240px;margin:0 auto 10px auto;border-radius:5px;font-size:13px;box-sizing:border-box;-webkit-transition:.4s linear;transition:.4s linear;margin-top:-150px;}.btns.jsx-557263493{display:none;}.Paso6-btn.jsx-557263493{display:block;background:white;color:gray;box-shadow:0px 3px 25px rgba(0,0,0,0.35);margin-bottom:10px;padding:12px 0px;width:240px;margin:0 auto 10px auto;border-radius:5px;font-size:13px;box-sizing:border-box;-webkit-transition:.4s linear;transition:.4s linear;}.Paso6-btn.active.jsx-557263493,.Paso6-btn.jsx-557263493:hover{background:#041082;color:white;}@media screen and (max-width:767px){.btns.jsx-557263493,.Paso6-title.jsx-557263493{display:block;}.Paso6-btn-desktop.jsx-557263493{display:none;}}@media screen and (max-width:374px){.Paso6-title.jsx-557263493 h3.jsx-557263493{font-size:14px;}.Paso6-title.jsx-557263493 strong.jsx-557263493{font-size:17px;}img.jsx-557263493{max-width:70%;margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdxQixBQVNGLEFBUUUsQUFHQyxBQUtBLEFBS0ssQUFHTSxBQUtWLEFBTTRCLEFBVzdCLEFBY0QsQUFHQyxBQWVLLEFBT0osQUFHRCxBQU1FLEFBR0EsQUFHRCxXQW5HSCxFQVFiLEFBb0RBLEFBNEJDLENBN0VlLEFBS0ssQUE4QkgsQUFpQkEsQUFzQmpCLEFBZWEsQ0F2RUQsQUFpRVosQUFHQSxJQTVFRCxBQXlEYSxJQTdFQyxFQXVCQyxDQTZFZCxDQXZFYyxFQWxCRSxFQW1DTCxBQWlCQSxBQWVaLFFBdERpQixFQU1KLENBaUJnQyxBQWlCQSxDQTlCdEIsRUF0QnZCLFFBbUJBLEVBTkEsVUFVbUIsU0E3Q0ssU0E4Q1gsQUFZSyxBQWlCRSxZQTVCWixFQXBDSyxHQWdEQSxFQVhKLEFBNEJTLE9BaEVLLENBcUNWLENBdkJHLENBa0NTLE9BaUJaLEdBM0JELElBdkJaLEtBbUR5QixFQTNCWixHQVVNLFNBVG5CLFNBVWdCLENBaUJHLGNBaEJJLElBOURILEFBK0VKLGNBbkVjLENBb0VQLEdBakJBLG1CQWtCQSxpQ0FqQkosa0JBQ25CLENBaUJBLElBakZjLGFBQ0ssa0JBQ0EsYUFVbkIsS0FUVyxVQUNYIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUGFzbzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIFBhc282IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRoYW5kbGVEb3duICgpIHtcblx0XHRmdWxscGFnZV9hcGkubW92ZVRvKDEsIDApOztcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJQYXNvNlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUGFzbzYtY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUGFzbzYtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0PGgzPsK/Q3XDoW50YXMgPHN0cm9uZz5NaWxsYXMgTEFUQU0gUGFzczwvc3Ryb25nPiA8YnIvPlxuXHRcdFx0XHRcdFx0XHRcdHBvZHLDoXMgYWN1bXVsYXI/XG5cdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJQYXNvNi1JbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1nL3Bhc282LnN2Z1wiIFxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXZpb24yXCIgLz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXG5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIlBhc282LWJ0bi1kZXNrdG9wXCIgaHJlZj1cIlwiPlTDqXJtaW5vcyB5IENvbmRpY2lvbmVzPC9hPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ0bnNcIj5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiUGFzbzYtYnRuXCIgaHJlZj1cIlwiPlTDqXJtaW5vcyB5IENvbmRpY2lvbmVzPC9hPlxuXHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIlBhc282LWJ0biBhY3RpdmVcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG93bn0gXG5cdFx0XHRcdFx0XHRcdD5Wb2x2ZXIgYWwgSW5pY2lvPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5QYXNvNiB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvNi1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc282LXRpdGxlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5QYXNvNi10aXRsZSBoMyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjYTZhNmE2O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzYtdGl0bGUgc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwNDEwODI7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIzcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzYtSW1hZ2Uge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc282LWZvb3RlciB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjRTVFNUU1O1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuVmlhamFLYW1iaXN0YS1kb3duIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL2Fycm93LWRvd24uc3ZnKTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRib3R0b206IDQwcHg7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUGFzbzYtYnRuLWRlc2t0b3Age1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggM3B4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTJweCAwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyNDBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjRzIGxpbmVhcjtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTE1MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJ0bnMge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc282LWJ0biB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAzcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDI0MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuNHMgbGluZWFyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBhc282LWJ0bi5hY3RpdmUsXG5cdFx0XHRcdFx0XHQuUGFzbzYtYnRuOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzA0MTA4Mjtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG5cdFx0XHRcdFx0XHRcdC5idG5zLFxuXHRcdFx0XHRcdFx0XHQuUGFzbzYtdGl0bGUge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5QYXNvNi1idG4tZGVza3RvcCB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCl7XG5cdFx0XHRcdFx0XHRcdC5QYXNvNi10aXRsZSBoMyB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5QYXNvNi10aXRsZSBzdHJvbmcge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNzAlO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzbzY7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Paso6.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Paso6);

/***/ }),

/***/ "./components/ReactFullpage.js":
/*!*************************************!*\
  !*** ./components/ReactFullpage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullpage/react-fullpage */ "@fullpage/react-fullpage");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VideoBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoBanner */ "./components/VideoBanner.js");
/* harmony import */ var _ViajaKambistaImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViajaKambistaImg */ "./components/ViajaKambistaImg.js");
/* harmony import */ var _Paso1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Paso1 */ "./components/Paso1.js");
/* harmony import */ var _Paso2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Paso2 */ "./components/Paso2.js");
/* harmony import */ var _Paso3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Paso3 */ "./components/Paso3.js");
/* harmony import */ var _Paso4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Paso4 */ "./components/Paso4.js");
/* harmony import */ var _Paso5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Paso5 */ "./components/Paso5.js");
/* harmony import */ var _Paso6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Paso6 */ "./components/Paso6.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _HeaderColor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderColor */ "./components/HeaderColor.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/ReactFullpage.js";













const Fullpage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default.a, {
  render: ({
    state,
    fullpageApi
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default.a.Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      id: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VideoBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }), ">"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      id: "section2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderColor__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso1__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Paso 1",
      image: "/static/img/paso1.svg",
      footerFirst: "Ingresa a nuestra app o a",
      footerStrong: "www.kambista.com",
      footerEnd: "y reg\xEDstrate, si todavia no lo has hecho.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Paso 2",
      image: "/static/img/paso2.svg",
      footerFirst: "Ingresa a la secci\xF3n",
      footerStrong: "Millas LATAM Pass",
      footerEnd: "en tu perfil y pon tu n\xFAmero de socio LATAM Pass",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso3__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Paso 3",
      image: "/static/img/paso3.svg",
      footerFirst: "Empieza a cambiar tu dinero con",
      footerStrong: "Kambista",
      footerEnd: "y cada vez que lo hagas acumular\xE1s millas.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      id: "section3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderColor__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso4__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso5__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso6__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }))));
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Fullpage);

/***/ }),

/***/ "./components/ReactFullpageDesktop.js":
/*!********************************************!*\
  !*** ./components/ReactFullpageDesktop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullpage/react-fullpage */ "@fullpage/react-fullpage");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VideoBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoBanner */ "./components/VideoBanner.js");
/* harmony import */ var _Paso1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paso1 */ "./components/Paso1.js");
/* harmony import */ var _Paso2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Paso2 */ "./components/Paso2.js");
/* harmony import */ var _Paso3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Paso3 */ "./components/Paso3.js");
/* harmony import */ var _Paso4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Paso4 */ "./components/Paso4.js");
/* harmony import */ var _Paso5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Paso5 */ "./components/Paso5.js");
/* harmony import */ var _Paso6__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Paso6 */ "./components/Paso6.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _HeaderColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderColor */ "./components/HeaderColor.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/ReactFullpageDesktop.js";












const Fullpage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default.a, {
  render: ({
    state,
    fullpageApi
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default.a.Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      id: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VideoBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      id: "section2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "secondSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: "",
      footerFirst: "BASIC",
      footerStrong: "30 minutos de grabaci\xF3n",
      footerEnd: "video de 30 segundos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title2: "\xBFC\xF3mo prefieres que te vean?",
      subtitle: "Empieza a ganar m\xE1s clientes",
      subtitleStrong: "ahora",
      style: "margin-top: 0px;",
      image: "",
      footerFirst: "PRO",
      footerStrong: "60 minutos de grabaci\xF3n",
      footerEnd: "video de 60 segundos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso3__WEBPACK_IMPORTED_MODULE_5__["default"], {
      image: "",
      footerFirst: "BUSINESS",
      footerStrong: "180 minutos de grabaci\xF3n",
      footerEnd: "video de 180 segundos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }, `
            .firstSection {
              display: flex;
              justify-content: center;
              align-items: center;
              background: url(./static/img/bg1.svg) -233px 0px;
              background-size: cover;
              height: 100%;
              position: relative;
            }

            .firstSection:before {
              content:"";
              background: url(./static/img/nubes1.svg) -35px 0px;
              background-size: cover;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              width: 100%;
              height: 30vh;
            }

            .secondSection {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .section3 {
              position: relative;
            }


            .section3:before {
              content: "";
              background: url(./static/img/nubes3.svg) center center no-repeat;
              background-size: cover;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              z-index: 9;
              height: 30vh;
            }

            @media screen and (max-width: 1024px) {
              .section3:before {
                height: 30vh;
                z-index: 10;
                background-size: inherit;
              }
            }

            @media screen and (max-width: 767px) {
              .slide {
                overflow: hidden;
              }
              .fp-right {
                display: none;
              }
              .fp-controlArrow.fp-prev {
                border: none;
                background: url(./static/img/arrow-down.svg);
                background-size: cover;
                width: 30px;
                height: 30px;
                transform: rotate(90deg);
                left: 10px;
              }
              .fp-controlArrow.fp-next {
                border: none;
                background: url(./static/img/arrow-down.svg);
                background-size: cover;
                width: 30px;
                height: 30px;
                transform: rotate(-90deg);
                right: 10px;
              }
            }
          `));
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Fullpage);

/***/ }),

/***/ "./components/ViajaKambistaImg.js":
/*!****************************************!*\
  !*** ./components/ViajaKambistaImg.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/ViajaKambistaImg.js";




class ViajaKambistaImg extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4122324715" + " " + "ViajaKambistaImg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4122324715" + " " + "ViajaKambistaImg-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-4122324715" + " " + "ViajaKambistaImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/telefono2.svg",
      alt: "",
      className: "jsx-4122324715" + " " + "telefono2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/nubes2.svg",
      alt: "",
      className: "jsx-4122324715" + " " + "nube2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/AvionLatam2.svg",
      alt: "",
      className: "jsx-4122324715" + " " + "avion2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      onClick: this.handleDown,
      className: "jsx-4122324715" + " " + "ViajaKambista-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4122324715",
      __self: this
    }, ".ViajaKambistaImg.jsx-4122324715{background:url(/static/img/bg1.svg) -233px 0px;background-size:cover;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;position:relative;text-align:center;}.ViajaKambistaImg.jsx-4122324715:before{content:\"\";background:url(/static/img/nubes1.svg) -35px 0px;background-size:cover;position:absolute;bottom:0;left:0;right:0;width:100%;height:30vh;}.ViajaKambista-down.jsx-4122324715{background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:30px;left:0;right:0;margin:auto;width:30px;height:30px;}.ViajaKambistaImg-container.jsx-4122324715{width:90%;margin:auto;}.telefono2.jsx-4122324715{position:absolute;right:-70px;bottom:50px;width:630px;}.nube2.jsx-4122324715{position:absolute;top:-30px;right:-150px;bottom:0;left:-180px;margin:auto;width:150%;opacity:.9;}.avion2.jsx-4122324715{position:absolute;top:-30px;right:0;bottom:0;left:0;margin:auto;max-width:120%;}@media screen and (max-width:374px){.telefono2.jsx-4122324715{width:470px;right:-30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVmlhamFLYW1iaXN0YUltZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2lCLEFBR3VELEFBV3JDLEFBV2lDLEFBV2pDLEFBSVEsQUFNQSxBQVVBLEFBYUwsVUFoQ0QsQ0F0QnFDLENBdURwQyxNQTdCRCxBQU1GLEFBVUEsSUFuQlgsRUFpQ0MsSUF2QmEsQUFVTCxFQWhCSSxNQWlCSCxLQVZBLENBTkcsQ0FqQlUsRUFrQ2YsRUF4RGUsR0E4Q1YsRUFXQSxFQWpCYixNQTVCdUIsRUFtQ1YsRUFXRyxDQW5DRyxJQXRCTixLQStDRCxLQVdaLEVBekRjLENBV0ssQ0FXTixFQXlCRCxVQXhCSixDQXlCUixJQXBDVSxFQVlELE9BWEQsQ0FZSyxNQVhKLE1BWUcsRUFYQSxTQVlDLEVBWEEsVUFZYixFQVhBLFFBaEJ3QixtR0FDSiw2RkFDTixhQUNLLGtCQUNBLGtCQUNuQiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL1ZpYWphS2FtYmlzdGFJbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIFZpYWphS2FtYmlzdGFJbWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGhhbmRsZURvd24gKCkge1xuXHRcdGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJWaWFqYUthbWJpc3RhSW1nXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJWaWFqYUthbWJpc3RhSW1nLWNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cIlZpYWphS2FtYmlzdGFJbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1nL3RlbGVmb25vMi5zdmdcIiBcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRlbGVmb25vMlwiIC8+XG5cdFx0XHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWcvbnViZXMyLnN2Z1wiIFxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibnViZTJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1nL0F2aW9uTGF0YW0yLnN2Z1wiIFxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXZpb24yXCIgLz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PHNwYW4gXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG93bn0gXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIlZpYWphS2FtYmlzdGEtZG93blwiPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuVmlhamFLYW1iaXN0YUltZyB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9iZzEuc3ZnKSAtMjMzcHggMHB4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5WaWFqYUthbWJpc3RhSW1nOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6XCJcIjtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL251YmVzMS5zdmcpIC0zNXB4IDBweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMHZoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlZpYWphS2FtYmlzdGEtZG93biB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlZpYWphS2FtYmlzdGFJbWctY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnRlbGVmb25vMiB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IC03MHB4O1xuXHRcdFx0XHRcdFx0XHRib3R0b206IDUwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA2MzBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5udWJlMiB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiAtMzBweDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IC0xNTBweDtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAtMTgwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE1MCU7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IC45O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmF2aW9uMiB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiAtMzBweDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEyMCU7XG5cdFx0XHRcdFx0XHR9XG5cblxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCl7XG5cdFx0XHRcdFx0XHRcdC50ZWxlZm9ubzIge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0NzBweDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogLTMwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWFqYUthbWJpc3RhSW1nOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/ViajaKambistaImg.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ViajaKambistaImg);

/***/ }),

/***/ "./components/VideoBanner.js":
/*!***********************************!*\
  !*** ./components/VideoBanner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/VideoBanner.js";



class VideoBanner extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2407233483" + " " + "videoBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2407233483" + " " + "videoBanner-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2407233483" + " " + "vimeo-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
      "data-autoplay": true,
      loop: true,
      muted: true,
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
      src: "./static/video/IvanOspinaFMX.mp4",
      type: "video/mp4",
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2407233483" + " " + "df videoBanner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-2407233483" + " " + "videoBanner-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "\xBFNecesita mostrar su proyecto eficientemente?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-2407233483" + " " + "videoBanner-skills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Especialiastas en filmaciones y fotos a\xE9reas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "La mejor calidad de video - 4k")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2407233483",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Videos para empresas, inmobiliares, eventos, etc")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2407233483",
      __self: this
    }, ".vimeo-wrapper.jsx-2407233483{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-2407233483:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.5;z-index:1;}.vimeo-wrapper.jsx-2407233483 video.jsx-2407233483{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.videoBanner-text.jsx-2407233483{position:absolute;max-width:960px;width:100%;left:0;right:0;width:100%;margin:auto;top:0;bottom:0;height:150px;text-align:left;color:white;z-index:9;}.videoBanner-title.jsx-2407233483{font-size:50px;width:50%;}.videoBanner-skills.jsx-2407233483{width:50%;font-size:20px;padding-left:4%;box-sizing:border-box;}.videoBanner-skills.jsx-2407233483 li.jsx-2407233483{margin-bottom:35px;}.videoBanner-skills.jsx-2407233483 li.jsx-2407233483:last-child{margin-bottom:0px;}@media and screen(max-width:980px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVmlkZW9CYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NpQixBQUkyQyxBQVNQLEFBWUMsQUFXTSxBQWdCSCxBQUtMLEFBT1MsQUFJRCxVQVZILENBNUNHLENBWUgsR0EyQkwsR0FoREosQUFnQ1UsQUFnQ3BCLENBSkEsS0EzRFcsQ0FnRFgsQUFLb0IsRUFoQ0MsRUFaWCxFQVJLLEdBK0JBLENBdEJMLE1BNENnQixDQXBEVixBQVNBLEVBV08sQ0FXWixPQUNDLEVBL0JHLEFBU0EsTUF1QkEsR0FaTyxBQWdDdEIsRUFuRG9CLEFBU0MsTUF1QkwsVUEvQmhCLEFBbUJZLENBVkksQ0F1Qk4sTUFaRyxBQWFBLEtBdkJDLElBV3NCLEFBYW5CLE1BdkJqQixPQXdCb0IsZ0JBQ0osWUFDRixVQUNkLHNEQWhCQSIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL1ZpZGVvQmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVmlkZW9CYW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGhhbmRsZURvd24gKCkge1xuXHRcdGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlkZW9CYW5uZXItY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aW1lby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gZGF0YS1hdXRvcGxheSBsb29wIG11dGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi9zdGF0aWMvdmlkZW8vSXZhbk9zcGluYUZNWC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZiB2aWRlb0Jhbm5lci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpZGVvQmFubmVyLXRpdGxlXCI+wr9OZWNlc2l0YSBtb3N0cmFyIHN1IHByb3llY3RvIGVmaWNpZW50ZW1lbnRlPzwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInZpZGVvQmFubmVyLXNraWxsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3BlY2lhbGlhc3RhcyBlbiBmaWxtYWNpb25lcyB5IGZvdG9zIGHDqXJlYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgbWVqb3IgY2FsaWRhZCBkZSB2aWRlbyAtIDRrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZGVvcyBwYXJhIGVtcHJlc2FzLCBpbm1vYmlsaWFyZXMsIGV2ZW50b3MsIGV0Y1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTYuMjV2dzsgLyogR2l2ZW4gYSAxNjo5IGFzcGVjdCByYXRpbywgOS8xNioxMDAgPSA1Ni4yNSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE3Ny43N3ZoOyAvKiBHaXZlbiBhIDE2OjkgYXNwZWN0IHJhdGlvLCAxNi85KjEwMCA9IDE3Ny43NyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgYW5kIHNjcmVlbihtYXgtd2lkdGg6IDk4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9CYW5uZXI7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/VideoBanner.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (VideoBanner);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ReactFullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ReactFullpage */ "./components/ReactFullpage.js");
/* harmony import */ var _components_ReactFullpageDesktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ReactFullpageDesktop */ "./components/ReactFullpageDesktop.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: ""
    };
  }

  componentDidMount() {
    const width = window.innerWidth;
    console.log(width);
    this.setState({
      width: width
    });
  }

  render() {
    const isMobile = this.state.width;
    let page;

    if (isMobile < 767) {
      page = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactFullpage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    } else {
      page = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactFullpageDesktop__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Viaja con Danilo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, page);
  }

});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniloviacavavizarreta/Desktop/drone-web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fullpage/react-fullpage":
/*!*******************************************!*\
  !*** external "@fullpage/react-fullpage" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

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
//# sourceMappingURL=index.js.map