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

/***/ "./components/AvailableMobiles.js":
/*!****************************************!*\
  !*** ./components/AvailableMobiles.js ***!
  \****************************************/
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
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/AvailableMobiles.js";




class AvailableMobiles extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile-free-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-87562975" + " " + "availableMobile-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/responsive.png",
      alt: "",
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "df availableMobile-about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile-about-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "DISPONIBLE EN M\xD3VILES"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Nos especializamos en la creaci\xF3n de sitios web totalmente sensibles que se ajustan perfectamente a cualquier tipo de dispositivo. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), "El proyecto realizado en tal t\xE9cnica se muestra bien en tel\xE9fonos inteligentes, tabletas, pantallas grandes o incluso televisores.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile-web-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile-web-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "GOOGLE ANALYTICS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Compruebe qui\xE9n y cu\xE1ndo ha visitado su sitio, c\xF3mo lo encontr\xF3 y qu\xE9 es lo que m\xE1s interesa a sus visitantes. Con Google Analytics integrado, tendr\xE1 acceso a todos los datos.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/ico-results.svg",
      alt: "",
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile-web-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-87562975" + " " + "availableMobile-web-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "SEO AMIGABLE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Nuestros proyectos est\xE1n dise\xF1ados y optimizados para posicionamiento en Google.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "static/img/seo.png",
      alt: "",
      className: "jsx-87562975",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "87562975",
      __self: this
    }, ".availableMobile.jsx-87562975{margin-top:140px;margin-bottom:0;}.availableMobile-web.jsx-87562975{background:#fca926;padding:50px 20px;box-sizing:border-box;text-align:right;color:white;width:45%;margin-left:4%;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);margin-top:40px;}.availableMobile-web.jsx-87562975 h2.jsx-87562975{font-size:22px;max-width:300px;margin-bottom:10px;box-sizing:border-box;font-family:Viga;}.availableMobile-web.jsx-87562975 p.jsx-87562975{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:300px;}.availableMobile-web.jsx-87562975 a.jsx-87562975{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:14px;border-radius:4px;}.availableMobile-web-item.jsx-87562975{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:10px 0;}.availableMobile-web-item.jsx-87562975 img.jsx-87562975{width:180px;height:180px;margin-left:20px;}.availableMobile-free-bg.jsx-87562975{width:40%;}.availableMobile-responsive.jsx-87562975{margin-left:-70px;}.availableMobile-about.jsx-87562975{-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.availableMobile-about-text.jsx-87562975{text-align:left;margin-top:40px;padding-top:3%;padding-left:4%;padding-right:2%;box-sizing:border-box;}.availableMobile-about-text.jsx-87562975 h2.jsx-87562975{font-size:22px;margin-bottom:10px;font-family:Viga;position:relative;}.availableMobile-about-text.jsx-87562975 h2.jsx-87562975:before{content:\"\";position:absolute;width:50px;height:3px;background:#00BCD4;top:-15px;left:0;}.availableMobile-about-text.jsx-87562975 p.jsx-87562975{line-height:1.3;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;color:#656565;}@media screen and (max-width:1150px){.availableMobile-web-item.jsx-87562975 img.jsx-87562975{width:120px;height:120px;}}@media screen and (max-width:1024px){.availableMobile-web.jsx-87562975{width:50%;}}@media screen and (max-width:900px){.availableMobile-web.jsx-87562975{padding:50px 10px 50px 10px;}.availableMobile-web-item.jsx-87562975 img.jsx-87562975{width:90px;height:90px;}}@media screen and (max-width:767px){.availableMobile.jsx-87562975{margin-top:50px;}.availableMobile.jsx-87562975 .df.jsx-87562975{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.availableMobile-free-bg.jsx-87562975{width:90%;margin:auto;}.availableMobile-responsive.jsx-87562975{margin-left:0;}.availableMobile-web.jsx-87562975{width:80%;margin:40px auto;padding:50px 80px;}.availableMobile-items.jsx-87562975{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.availableMobile-left.jsx-87562975{width:100%;}.availableMobile-web.jsx-87562975 h2.jsx-87562975,.availableMobile-web.jsx-87562975 p.jsx-87562975{max-width:100%;}}@media screen and (max-width:600px){.availableMobile-web.jsx-87562975{padding:40px 20px;width:90%;}.availableMobile-web.jsx-87562975 h2.jsx-87562975,.availableMobile-web.jsx-87562975 p.jsx-87562975,.availableMobile-web.jsx-87562975 a.jsx-87562975{margin:10px 20px;}.availableMobile-web-item.jsx-87562975{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQXZhaWxhYmxlTW9iaWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2lCLEFBR3lCLEFBS0UsQUFZSixBQU9DLEFBS0osQUFZQyxBQU1ELEFBTUYsQUFJUSxBQUlFLEFBR0osQUFRRCxBQU9KLEFBU0ssQUFPSCxBQU9GLEFBTWtCLEFBR2pCLEFBT0ssQUFHTSxBQUdaLEFBSUksQUFJSixBQU1ZLEFBR1gsQUFJSSxBQU1HLEFBTUQsQUFHSyxVQTFHeEIsQUFpREMsQUFzQmEsQUFRSyxDQXJEQSxBQWdDTCxBQThCYixDQWhIcUIsQUFrQlIsQUFnREMsRUFpQ2QsQ0EvR2dCLEFBdURHLEFBeUVuQixDQXpIcUIsQUF3Q0wsQUF3Qk0sQUE4QnRCLENBdEhnQixBQTZKaEIsQ0FwR0QsQUE4RlksQ0FsSk8sR0F3SGxCLENBYkEsRUFoRWlCLEFBZ0RqQixFQXFDbUIsQ0F6Qm5CLEFBNENBLENBeEVXLEVBOURRLENBK0NKLENBaEVoQixBQTZCbUIsQ0EyQ0QsR0FuRUssR0EyRVgsRUFoQ1osR0FxRkMsRUFwRWdCLEdBL0NNLENBWUwsQUEyQ0MsQUFRQyxRQTNFRixJQTREQSxLQW5DSCxDQTJDZixDQVFXLEVBL0RPLEVBcUJFLEVBakNQLEVBaUhaLEFBaUJBLEFBc0JtQixFQTVGRyxBQWdCZixFQW5EZSxLQW9EdkIsQ0E1RVcsQ0FZWCxPQTRJQyxDQXBHRCxDQW5EZ0IsSUEyRGhCLEVBbkNpQixTQXZCOEIsSUFjOUIsR0FVRSxDQXNESixZQS9EZixFQWdFQSxHQXREZ0IsZUFDRyxNQXpCRixRQThCTyxJQUp4QixJQXpCQSwyRkE4QmUsY0FDZiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0F2YWlsYWJsZU1vYmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIEF2YWlsYWJsZU1vYmlsZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gXHQ8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZU1vYmlsZVwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZlwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZU1vYmlsZS1mcmVlLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhaWxhYmxlTW9iaWxlLXJlc3BvbnNpdmVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInN0YXRpYy9pbWcvcmVzcG9uc2l2ZS5wbmdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRmIGF2YWlsYWJsZU1vYmlsZS1hYm91dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhaWxhYmxlTW9iaWxlLWFib3V0LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5ESVNQT05JQkxFIEVOIE3Dk1ZJTEVTPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPk5vcyBlc3BlY2lhbGl6YW1vcyBlbiBsYSBjcmVhY2nDs24gZGUgc2l0aW9zIHdlYiB0b3RhbG1lbnRlIHNlbnNpYmxlcyBxdWUgc2UgYWp1c3RhbiBwZXJmZWN0YW1lbnRlIGEgY3VhbHF1aWVyIHRpcG8gZGUgZGlzcG9zaXRpdm8uIDxici8+RWwgcHJveWVjdG8gcmVhbGl6YWRvIGVuIHRhbCB0w6ljbmljYSBzZSBtdWVzdHJhIGJpZW4gZW4gdGVsw6lmb25vcyBpbnRlbGlnZW50ZXMsIHRhYmxldGFzLCBwYW50YWxsYXMgZ3JhbmRlcyBvIGluY2x1c28gdGVsZXZpc29yZXMuPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZU1vYmlsZS13ZWJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmFpbGFibGVNb2JpbGUtd2ViLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YWlsYWJsZU1vYmlsZS13ZWItdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPkdPT0dMRSBBTkFMWVRJQ1M8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbXBydWViZSBxdWnDqW4geSBjdcOhbmRvIGhhIHZpc2l0YWRvIHN1IHNpdGlvLCBjw7NtbyBsbyBlbmNvbnRyw7MgeSBxdcOpIGVzIGxvIHF1ZSBtw6FzIGludGVyZXNhIGEgc3VzIHZpc2l0YW50ZXMuIENvbiBHb29nbGUgQW5hbHl0aWNzIGludGVncmFkbywgdGVuZHLDoSBhY2Nlc28gYSB0b2RvcyBsb3MgZGF0b3MuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJzdGF0aWMvaW1nL2ljby1yZXN1bHRzLnN2Z1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhaWxhYmxlTW9iaWxlLXdlYi1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmFpbGFibGVNb2JpbGUtd2ViLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5TRU8gQU1JR0FCTEU8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdE51ZXN0cm9zIHByb3llY3RvcyBlc3TDoW4gZGlzZcOxYWRvcyB5IG9wdGltaXphZG9zIHBhcmEgcG9zaWNpb25hbWllbnRvIGVuIEdvb2dsZS5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInN0YXRpYy9pbWcvc2VvLnBuZ1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNDBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmF2YWlsYWJsZU1vYmlsZS13ZWIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmNhOTI2O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0NSU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA0JTtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0MHB4IDEyMHB4IC0yMHB4IHJnYmEoMCwwLDAsMC42KTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmF2YWlsYWJsZU1vYmlsZS13ZWIgaDIge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmF2YWlsYWJsZU1vYmlsZS13ZWIgcCB7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtd2ViIGEge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTNweCAxNXB4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMDBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXdlYi1pdGVtIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweCAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmF2YWlsYWJsZU1vYmlsZS13ZWItaXRlbSBpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTgwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTgwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLWZyZWUtYmcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXJlc3BvbnNpdmUge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTcwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtYWJvdXQge1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtYWJvdXQtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzJTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiA0JTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMiU7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLWFib3V0LXRleHQgaDIge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtYWJvdXQtdGV4dCBoMjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDNweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwQkNENDtcblx0XHRcdFx0XHRcdFx0dG9wOiAtMTVweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtYWJvdXQtdGV4dCBwIHtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMztcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NTY1NjU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXdlYi1pdGVtIGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTIwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtd2ViIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtd2ViIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDEwcHggNTBweCAxMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtd2ViLWl0ZW0gaW1nIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogOTBweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDkwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdFx0XHRcdFx0LmF2YWlsYWJsZU1vYmlsZSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlIC5kZiB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLWZyZWUtYmcge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtcmVzcG9uc2l2ZSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXdlYiB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDQwcHggYXV0bztcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDgwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLWl0ZW1zwqB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLWxlZnQge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtd2ViIGgyLFxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXdlYiBwIHtcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblx0XHRcdFx0XHRcdFx0LmF2YWlsYWJsZU1vYmlsZS13ZWIge1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDQwcHggMjBweDtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5hdmFpbGFibGVNb2JpbGUtd2ViIGgyLFxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXdlYiBwLFxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXdlYiBhIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHggMjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuYXZhaWxhYmxlTW9iaWxlLXdlYi1pdGVtIHtcblx0XHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhaWxhYmxlTW9iaWxlcyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/AvailableMobiles.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AvailableMobiles);

/***/ }),

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
      className: "jsx-3280891021" + " " + "videoBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "videoBanner-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "vimeo-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/xJAwnCMgqCg?autoplay=0&controls=0&loop=1&mute=1&playlist=xJAwnCMgqCg",
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-3280891021",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "container videoBanner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3280891021" + " " + "videoBanner-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Dise\xF1o web"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3280891021",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3280891021" + " " + "videoBanner-paragraph",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Brindamos servicios digitales frescos y creativos. a empresas que quieran crecer online. El dise\xF1o web es nuestro servicio clave."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
      clase: "colorWhite",
      href: "/diseno-web",
      name: "Empezar proyecto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "section-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "cuadrado",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "arrow-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3280891021" + " " + "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3280891021",
      __self: this
    }, ".videoBanner.jsx-3280891021{height:85vh;position:relative;}.vimeo-wrapper.jsx-3280891021{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-3280891021:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.6;z-index:1;pointer-events:none;}.vimeo-wrapper.jsx-3280891021 iframe.jsx-3280891021{width:100vw;height:56.25vw;min-height:106vh;min-width:201.77vh;position:absolute;top:47%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.videoBanner-text.jsx-3280891021{position:absolute;left:0;right:0;width:100%;top:-70px;bottom:0;height:90px;color:white;z-index:9;font-family:Viga;padding-left:20px;}.videoBanner-paragraph.jsx-3280891021{max-width:400px;font-family:Poppins;margin:10px 0;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2.4s;transition-delay:2.4s;}.videoBanner-paragraph.active.jsx-3280891021{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-3280891021{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2s;transition-delay:2s;}.videoBanner-title.active.jsx-3280891021{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-3280891021 br.jsx-3280891021{display:none;}@media screen and (max-width:768px){.videoBanner-title.jsx-3280891021 br.jsx-3280891021{display:block;}}@media screen and (max-width:600px){.videoBanner.jsx-3280891021{box-shadow:none;}.vimeo-wrapper.jsx-3280891021 video.jsx-3280891021{left:80%;}.videoBanner-text.jsx-3280891021{top:-130px;}.videoBanner-title.jsx-3280891021{font-size:35px;}.videoBanner-skills.jsx-3280891021{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-3280891021 li.jsx-3280891021{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-3280891021 p.jsx-3280891021 span.jsx-3280891021{display:none;}}@media screen and (max-width:400px){.videoBanner-text.jsx-3280891021{top:-60px;height:80px;}.videoBanner-title.jsx-3280891021{font-size:25px;}.videoBanner-skills.jsx-3280891021 figure.jsx-3280891021{margin-bottom:10px;}.videoBanner-skills.jsx-3280891021 img.jsx-3280891021{width:25px;height:25px;}.videoBanner-skills.jsx-3280891021 h2.jsx-3280891021{font-size:11px;}.videoBanner-skills.jsx-3280891021 p.jsx-3280891021{font-size:9px;}}@-webkit-keyframes translateBottomToTop-jsx-3280891021{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop-jsx-3280891021{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}.section-down.jsx-3280891021{position:absolute;bottom:1px;height:60px;left:0;width:100%;z-index:9;}.cuadrado.jsx-3280891021{width:60px;height:60px;border-radius:6px 0px 0px 0px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background:white;position:absolute;left:95px;bottom:-32px;}.arrow-down.jsx-3280891021{width:30px;height:20px;margin:0 0 0 -30px;position:absolute;left:140px;bottom:0px;-webkit-animation:arrow-jsx-3280891021 .6s 1s infinite ease-out alternate;animation:arrow-jsx-3280891021 .6s 1s infinite ease-out alternate;}.arrow-down.jsx-3280891021:hover{-webkit-animation-play-state:paused;animation-play-state:paused;}.left.jsx-3280891021{position:absolute;height:3px;width:15px;background:gray;-webkit-transform:rotate(230deg);top:13px;left:8px;border-radius:4px;-webkit-transform-origin:5px 50%;-ms-transform-origin:5px 50%;transform-origin:5px 50%;}.right.jsx-3280891021{position:absolute;height:3px;width:15px;background:gray;-webkit-transform:rotate(-50deg);top:13px;left:13px;border-radius:4px;-webkit-transform-origin:5px 50%;-ms-transform-origin:5px 50%;transform-origin:5px 50%;}@-webkit-keyframes arrow-jsx-3280891021{0%{bottom:0px;}100%{bottom:10px;}}@keyframes arrow-jsx-3280891021{0%{bottom:0px;}100%{bottom:10px;}}@-webkit-keyframes leftArrow-jsx-3280891021{100%{-webkit-transform:rotate(225deg);}}@keyframes leftArrow-jsx-3280891021{100%{-webkit-transform:rotate(225deg);}}@-webkit-keyframes rightArrow-jsx-3280891021{100%{-webkit-transform:rotate(-45deg);}}@keyframes rightArrow-jsx-3280891021{100%{-webkit-transform:rotate(-45deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXNJbnRlcm5hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDaUIsQUFHeUMsQUFJTSxBQVNQLEFBWUMsQUFXTSxBQWNGLEFBVU4sQUFLSyxBQVNMLEFBS0csQUFLSyxBQU9uQixBQUVjLEFBR0UsQUFHSSxBQUdBLEFBR0wsQUFLRyxBQU1ILEFBSUssQUFHSSxBQUdSLEFBSUksQUFHRCxBQU1hLEFBSUEsQUFJSCxBQU1WLEFBUVAsQUFVRCxBQVVrQixBQUlYLEFBWUEsQUFhUCxBQUdDLEFBUXFCLEFBUUEsU0F2SWhDLENBakN3QixBQWNBLEFBK0JPLEFBV2YsQ0F2R0UsQUFtRmxCLEFBOEJnQixBQW1DSixBQVVELEFBdUNiLENBbE5vQixBQXlCSCxBQTRMakIsQ0F0SUYsQUErQkksQ0ExQkEsQUFpREEsQ0FwRWlCLEFBa0NqQixBQXFCQSxBQVVBLENBaEZvQixBQXdDcEIsRUF0Rk0sQUFnQ0MsQUFxSEksQUFnQ0QsQUFZQSxDQTFFVixHQU5BLENBVUEsQUFtQzhCLEFBVVosQ0F2S1gsQ0FnQ0MsRUFYUyxFQVpYLEFBNElNLEFBZ0NGLEFBWUEsQ0FyTWQsQ0FLZSxDQTRERCxDQTVCQyxBQXVMYixBQVFBLEVBdE5RLENBb0NRLENBdURRLEdBaUZQLEFBWUEsQ0E1Q1IsQ0FwSkssQUFTQSxBQW1EZSxBQTBHVixFQWxKRSxBQVlULElBcUhDLEVBeEdELEdBK0djLENBM0piLEFBU0EsQUF1QkYsQ0FtRVQsQ0FpRmdDLEFBWUEsQ0FsR2hDLEVBdURVLENBeEdpQixBQXlIaEIsR0FsSk8sQUFhTixDQTRJaEIsQ0E1S29CLEFBU0MsSUE0SXJCLEVBaUJlLElBcklDLE1BaENoQixBQW1CWSxDQVZJLEFBNkp1QyxFQTdCckMsR0F4R0osRUFiRCxBQStKRCxBQVlBLElBOURNLEFBSUEsQ0EzSEosQUF5Q2QsQUFjQSxBQXlFSSxHQXhHaUIsQ0FiZSxBQStKeEIsQUFZQyxLQTlEVCxBQUlBLENBM0hvQixHQTBLSCxDQVlBLE1BOUpDLFVBdkJ0QixDQTBLNEIsQ0FZQSxNQTlKNUIsR0FzQm1CLEVBZ0dFLGdCQTlHRixDQStHRyxrQkFDUixDQWpHVSxTQWtHUCxTQWhIUyxJQWlIMUIsUUF4SUEsU0FpS0EsQ0FZQSxRQXZJQSxDQTJHQSxxQkF6SEEiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9CYW5uZXJTZXJ2aWNlc0ludGVybmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IEJ1dHRvbldoaXRlIGZyb20gJy4vQnV0dG9ucydcblxuY2xhc3MgQmFubmVyU2VydmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICB2YXIgdmlkZW9CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvQmFubmVyLXRpdGxlXCIpXG4gICAgICAgICAgICB2aWRlb0Jhbm5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgdmFyIHZpZGVvQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb0Jhbm5lci1wYXJhZ3JhcGhcIilcbiAgICAgICAgICAgIHZpZGVvQmFubmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICB9XG5cblx0aGFuZGxlRG93biAoKSB7XG5cdFx0Ly8gZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gXHQ8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQmFubmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmltZW8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC94SkF3bkNNZ3FDZz9hdXRvcGxheT0wJmNvbnRyb2xzPTAmbG9vcD0xJm11dGU9MSZwbGF5bGlzdD14SkF3bkNNZ3FDZ1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB2aWRlb0Jhbm5lci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lci10aXRsZVwiPkRpc2XDsW8gd2ViXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZGVvQmFubmVyLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJpbmRhbW9zIHNlcnZpY2lvcyBkaWdpdGFsZXMgZnJlc2NvcyB5IGNyZWF0aXZvcy4gYSBlbXByZXNhcyBxdWUgcXVpZXJhbiBjcmVjZXIgb25saW5lLiBFbCBkaXNlw7FvIHdlYiBlcyBudWVzdHJvIHNlcnZpY2lvIGNsYXZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25XaGl0ZSBjbGFzZT1cImNvbG9yV2hpdGVcIiBocmVmPVwiL2Rpc2Vuby13ZWJcIiBuYW1lPVwiRW1wZXphciBwcm95ZWN0b1wiPjwvQnV0dG9uV2hpdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWFkcmFkb1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1dmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciBpZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2LjI1dnc7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDkvMTYqMTAwID0gNTYuMjUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDZ2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMS43N3ZoOyAvKiBHaXZlbiBhIDE2OjkgYXNwZWN0IHJhdGlvLCAxNi85KjEwMCA9IDE3Ny43NyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQ3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC03MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZpZ2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItcGFyYWdyYXBoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItcGFyYWdyYXBoLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAycztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSBiciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSBiciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIgdmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBwIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgZmlndXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgdHJhbnNsYXRlQm90dG9tVG9Ub3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VjdGlvbi1kb3duIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdWFkcmFkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMzJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnJvdy1kb3due1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMCAwIC0zMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYXJyb3cgLjZzIDFzIGluZmluaXRlIGVhc2Utb3V0IGFsdGVybmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmFycm93LWRvd246aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjMwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjVweCA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6M3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNTBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjVweCA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYXJyb3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBsZWZ0QXJyb3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgcmlnaHRBcnJvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclNlcnZpY2VzOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServicesInterna.js */"));
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

/***/ "./components/DisenoEstetico.js":
/*!**************************************!*\
  !*** ./components/DisenoEstetico.js ***!
  \**************************************/
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
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/DisenoEstetico.js";




class DisenoEstetico extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3848009774" + " " + "disenoEstetico",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        alignItems: 'flex-start'
      },
      className: "jsx-3848009774" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3848009774" + " " + "disenoEstetico-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3848009774",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "DISE\xD1O EST\xC9TICO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3848009774",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Destacarse de la multitud. La mayor\xEDa de nosotros elegimos productos no solo por su funcionalidad, sino tambi\xE9n porque son agradables a la vista. Un buen sitio web es tambi\xE9n un dise\xF1o est\xE9tico. Nuestra empresa presta especial atenci\xF3n a los detalles. Sin \xE9l, ning\xFAn producto ser\xE1 perfecto."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3848009774",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "DESCUBRIR")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3848009774" + " " + "disenoEstetico-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-3848009774" + " " + "disenoEstetico-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3848009774" + " " + "disenoEstetico-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/profe.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3848009774" + " " + "disenoEstetico-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3848009774",
      __self: this
    }, ".disenoEstetico.jsx-3848009774{margin:80px auto;}.disenoEstetico-web.jsx-3848009774{background:linear-gradient(to right,rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);padding:100px 130px 100px 40px;box-sizing:border-box;text-align:left;color:white;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);}.disenoEstetico-web.jsx-3848009774 h2.jsx-3848009774{font-size:22px;max-width:300px;margin:0 auto 10px;padding-right:70px;box-sizing:border-box;margin-left:100px;font-family:'Viga';}.disenoEstetico-web.jsx-3848009774 p.jsx-3848009774{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:300px;margin-left:100px;}.disenoEstetico-web.jsx-3848009774 a.jsx-3848009774{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:16px;border-radius:4px;font-family:Viga;}.disenoEstetico-bg.jsx-3848009774{width:40%;position:relative;}.disenoEstetico-item.jsx-3848009774{margin:10px auto;height:570px;width:950px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;position:absolute;left:-30px;}.disenoEstetico-item-mascara.jsx-3848009774{height:492px;overflow:hidden;position:relative;}.disenoEstetico-item-img.jsx-3848009774{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:41px;right:0;left:0;margin:auto;border-radius:2px;height:453px;background-size:cover;}@media screen and (max-width:1024px){.disenoEstetico-web.jsx-3848009774{padding:70px 50px 70px 0;margin-left:2%;}.disenoEstetico-web.jsx-3848009774 h2.jsx-3848009774{margin-left:70px;}.disenoEstetico-web.jsx-3848009774 p.jsx-3848009774{margin-left:70px;}.disenoEstetico-web.jsx-3848009774 a.jsx-3848009774{margin-left:70px;}.disenoEstetico-item.jsx-3848009774{height:490px;width:830px;}.disenoEstetico-item-mascara.jsx-3848009774{height:426px;}.disenoEstetico-item-img.jsx-3848009774{top:30px;}}@media screen and (max-width:767px){.disenoEstetico.jsx-3848009774{margin-bottom:0;margin-top:50px;}.disenoEstetico.jsx-3848009774 .df.jsx-3848009774{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.disenoEstetico-web.jsx-3848009774{width:80%;margin:auto;padding-right:0;}.disenoEstetico-web.jsx-3848009774 h2.jsx-3848009774{margin:0 auto 10px auto;padding:0;}.disenoEstetico-web.jsx-3848009774 p.jsx-3848009774{margin:auto;}.disenoEstetico-web.jsx-3848009774 a.jsx-3848009774{margin:10px auto 0;max-width:120px;display:block;}.disenoEstetico-bg.jsx-3848009774{width:530px;margin:auto;margin-top:40px;}.disenoEstetico-item.jsx-3848009774{position:inherit;left:0;width:auto;height:320px;}.disenoEstetico-item-mascara.jsx-3848009774{height:320px;}.disenoEstetico-item-img.jsx-3848009774{top:23px;height:256px;}}@media screen and (max-width:530px){.disenoEstetico-web.jsx-3848009774{padding:40px 20px;width:90%;}.disenoEstetico-bg.jsx-3848009774{width:300px;margin:auto;margin-top:40px;}.disenoEstetico-item.jsx-3848009774{height:180px;}.disenoEstetico-item-mascara.jsx-3848009774{height:160px;}.disenoEstetico-item-img.jsx-3848009774{top:13px;height:142px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvRGlzZW5vRXN0ZXRpY28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJpQixBQUd5QixBQUlpRSxBQVNuRSxBQVNDLEFBTUosQUFlRixBQUlPLEFBVUosQUFNRSxBQWdCVyxBQUlSLEFBR0EsQUFHQSxBQUlKLEFBSUEsQUFHSixBQU1PLEFBSU0sQUFHWixBQUtjLEFBSVosQUFHTyxBQU1QLEFBS0ssQUFNSixBQUdKLEFBT1MsQUFJTixBQUtDLEFBR0EsQUFHSixTQWxFVixBQTZDYyxBQXNCQSxDQTVISSxBQXNFTCxFQXJGUSxBQThGckIsQUFTYSxBQXlCQSxDQW5HRyxBQW9DSCxBQUliLEFBNkNBLEFBbUJBLEFBR0EsRUF2SmdCLEFBa0ROLENBekNXLEFBb0ZKLENBMUdsQixBQStDYyxBQW9DYixBQUdBLEFBR0EsQUErQ1EsQ0FnQkcsQ0EzQk0sR0FYQSxBQWdDakIsQUFzQkEsRUFsRFcsQUFjTSxBQUtMLEFBb0JLLENBN0ZMLEFBZUksQUFlaEIsR0FsREQsQUE2R0MsQ0EvRmtCLENBVk4sQ0FsQ08sQ0E2Rm5CLENBOUVrQixDQTBGbEIsQ0FPZSxBQVlELEVBekVBLENBa0RkLEVBbkNBLEFBcURBLEFBeUJBLEVBN0dnRSxLQVVqRSxDQWdGQyxDQVpBLENBaEhtQixDQWVGLEFBb0NDLGlCQW5DSixDQWZRLEFBbURiLFNBQ0QsQUEwQ1IsR0ExRytCLENBNEJULElBcUNmLEtBcERXLEVBcUROLFdBckNJLENBc0NFLENBckJJLEdBaENILEdBYkcsS0FrQk4sR0FXRSxHQXNDTCxLQXJEZCxBQWdDbUIsS0EzQkEsQ0FsQkYsRUFtRU0sRUF0Q1AsUUFpQkosSUE3Q0MsQ0FrQmIsRUFXbUIsSUFpQm5CLENBcUJBLElBbEUrQyxTQTZCN0IsaUJBQ2xCLG9CQTdCQSIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0Rpc2Vub0VzdGV0aWNvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jbGFzcyBEaXNlbm9Fc3RldGljbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gXHQ8ZGl2IGNsYXNzTmFtZT1cImRpc2Vub0VzdGV0aWNvXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRmXCIgc3R5bGU9e3thbGlnbkl0ZW1zOiAnZmxleC1zdGFydCd9fT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlzZW5vRXN0ZXRpY28td2ViXCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5ESVNFw5FPIEVTVMOJVElDTzwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdERlc3RhY2Fyc2UgZGUgbGEgbXVsdGl0dWQuIExhIG1heW9yw61hIGRlIG5vc290cm9zIGVsZWdpbW9zIHByb2R1Y3RvcyBubyBzb2xvIHBvciBzdSBmdW5jaW9uYWxpZGFkLCBzaW5vIHRhbWJpw6luIHBvcnF1ZSBzb24gYWdyYWRhYmxlcyBhIGxhIHZpc3RhLiBVbiBidWVuIHNpdGlvIHdlYiBlcyB0YW1iacOpbiB1biBkaXNlw7FvIGVzdMOpdGljby4gTnVlc3RyYSBlbXByZXNhIHByZXN0YSBlc3BlY2lhbCBhdGVuY2nDs24gYSBsb3MgZGV0YWxsZXMuIFNpbiDDqWwsIG5pbmfDum4gcHJvZHVjdG8gc2Vyw6EgcGVyZmVjdG8uXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0REVTQ1VCUklSXG5cdFx0XHRcdFx0XHRcdDwvYT5cdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlzZW5vRXN0ZXRpY28tYmdcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJkaXNlbm9Fc3RldGljby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXNlbm9Fc3RldGljby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlzZW5vRXN0ZXRpY28taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9wcm9mZS5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuZGlzZW5vRXN0ZXRpY28ge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDgwcHggYXV0bztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLXdlYiB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDE2NSwxOTQsMSkgMCUscmdiYSgwLDE5NiwyMTQsMSkgMTAwJSk7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwMHB4IDEzMHB4IDEwMHB4IDQwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0MHB4IDEyMHB4IC0yMHB4IHJnYmEoMCwwLDAsMC42KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLXdlYiBoMiB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG8gMTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogNzBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1ZpZ2EnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLXdlYiBwIHtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMjtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZGlzZW5vRXN0ZXRpY28td2ViIGEge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTNweCAxNXB4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMDBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljby1iZyB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0MCU7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljby1pdGVtIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNTcwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA5NTBweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL01hY2Jvb2suc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAtMzBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWl0ZW0tbWFzY2FyYSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDkycHg7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWl0ZW0taW1nIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNzYlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogNDFweDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQ1M3B4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLXdlYiB7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogNzBweCA1MHB4IDcwcHggMDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMiU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLXdlYiBoMiB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDcwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLXdlYiBwIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNzBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuZGlzZW5vRXN0ZXRpY28td2ViIGEge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA3MHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNDkwcHg7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDgzMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljby1pdGVtLW1hc2NhcmEge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNDI2cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWl0ZW0taW1nIHtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvIC5kZiB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuZGlzZW5vRXN0ZXRpY28td2ViIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljby13ZWIgaDIge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljby13ZWIgcCB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljby13ZWIgYSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4IGF1dG8gMDtcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWJnIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTMwcHg7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuZGlzZW5vRXN0ZXRpY28taXRlbS1tYXNjYXJhIHtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMyMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljby1pdGVtLWltZyB7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAyM3B4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjU2cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLXdlYiB7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogNDBweCAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWJnIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTgwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmRpc2Vub0VzdGV0aWNvLWl0ZW0tbWFzY2FyYSB7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuZGlzZW5vRXN0ZXRpY28taXRlbS1pbWcge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMTNweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE0MnB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblxuXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc2Vub0VzdGV0aWNvO1xuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/DisenoEstetico.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DisenoEstetico);

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
      var socials = document.querySelector(".header-socialNetwork li");
      socials.classList.add('active');
    }, 500);
  }

  down(e) {
    e.preventDefault(); // fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-851268417" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-851268417" + " " + "df container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-851268417" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Danilo Viacava")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-851268417" + " " + "header-socialNetwork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/diseno-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Dise\xF1o web"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/imagenes-de-drone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Im\xE1genes de drones"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.facebook.com/profile.php?id=100009455848617",
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/facebookIcon.svg",
      alt: "",
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.instagram.com/danilojesusv/",
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/instagramIcon.svg",
      alt: "",
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/whatsapp.png",
      alt: "",
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: this.down,
      href: "",
      className: "jsx-851268417",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Cotizaci\xF3n Gratis")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "851268417",
      __self: this
    }, ".header.jsx-851268417{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:999;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:13px;font-weight:bold;}.header.jsx-851268417 a.jsx-851268417{color:white;}.header.jsx-851268417 .container.jsx-851268417{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-logo.jsx-851268417{display:inline-block;margin:10px;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;font-family:Viga;font-size:16px;}.header-logo.active.jsx-851268417{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-socialNetwork.jsx-851268417 li.jsx-851268417{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.header-socialNetwork.jsx-851268417 li.active.jsx-851268417{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-socialNetwork.jsx-851268417 a.jsx-851268417{margin:5px;padding:5px;}.header-socialNetwork.jsx-851268417 a.jsx-851268417:hover img.jsx-851268417{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}.header-socialNetwork.jsx-851268417 figure.jsx-851268417{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-socialNetwork.jsx-851268417 figcaption.jsx-851268417{margin:10px;color:white;}.header-socialNetwork.jsx-851268417 img.jsx-851268417{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:15px;height:15px;}@media screen and (max-width:650px){.header-socialNetwork.jsx-851268417 a.jsx-851268417{margin:0;}}@media screen and (max-width:400px){.header.jsx-851268417{font-size:12px;}.header.jsx-851268417 a.jsx-851268417{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEaUIsQUFHK0IsQUFZWCxBQUdrQixBQUdULEFBVVgsQUFJRyxBQU9ILEFBSUMsQUFJaUMsQUFHL0IsQUFJRCxBQUlNLEFBVVIsQUFNcUIsQUFHVCxTQVJ0QixBQVNZLENBakRZLEFBV0EsQ0FJWixDQS9CYixBQTBDYSxHQW9CQSxHQWhCSSxHQXhDSixFQWxCSSxBQTRDakIsQ0FXQSxTQXBDVyxDQXdDSyxLQTFERyxFQThDbkIsRUEzQjRCLGNBbEJyQixNQUNDLE9BQ0ksRUF3RFcsRUE1QlosQUFrQlMsT0E3Q1AsR0E0QmUsU0EzQlIsQ0F1QnBCLEFBV0EsQUFxQlksV0FDQyxVQS9DYixFQWdEQSxtQkExQ2dCLCtCQThCaEIsT0E3QnFCLEdBWUwsU0EzQkEsZUFDRSxjQTJCSyxHQTFCdkIsSUFja0IsaUJBQ0YsZUFDaEIsYUFXQSIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1sb2dvXCIpXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuXHRcdFx0dmFyIHNvY2lhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1zb2NpYWxOZXR3b3JrIGxpXCIpXG5cdFx0XHRzb2NpYWxzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0fSwgNTAwKTtcblxuXHR9XG5cblx0ZG93biAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdC8vIGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImRmIGNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiPlxuXHRcdFx0XHRcdFx0XHRcdERhbmlsbyBWaWFjYXZhXG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlci1zb2NpYWxOZXR3b3JrXCI+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Rpc2Vuby13ZWJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxhID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+RGlzZcOxbyB3ZWI8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvaW1hZ2VuZXMtZGUtZHJvbmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxhID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+SW3DoWdlbmVzIGRlIGRyb25lczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wcm9maWxlLnBocD9pZD0xMDAwMDk0NTU4NDg2MTdcIiA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2ZhY2Vib29rSWNvbi5zdmdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Rhbmlsb2plc3Vzdi9cIiA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2luc3RhZ3JhbUljb24uc3ZnXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTE5MzE0NDcwNDEmdGV4dD1Ib2xhLCUyMHF1aWVybyUyMHJlYWxpemFyJTIwbWklMjBwcm95ZWN0b1wiID5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvd2hhdHNhcHAucG5nXCIgYWx0PVwiXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLmRvd259IGhyZWY9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdENvdGl6YWNpw7NuIEdyYXRpc1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9uYXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTk5O1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlciBhIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlciAuY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1sb2dvIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjVzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAxcztcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItbG9nby5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgbGkge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC41cztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMS41cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBsaS5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgYSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogNXB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgYTpob3ZlciBpbWcge1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjg1KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBmaWd1cmUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBpbWcge1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IC4zcztcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTVweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblx0XHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGEge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHQgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG5cdFx0XHQgICAgICAgICAgICAgICAgLmhlYWRlciB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdCAgICAgICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgICAgICAgLmhlYWRlciBhIHtcblx0XHRcdCAgICAgICAgICAgICAgICBcdG1hcmdpbjogMDtcblx0XHRcdCAgICAgICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HowMuch.js":
/*!*******************************!*\
  !*** ./components/HowMuch.js ***!
  \*******************************/
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
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/HowMuch.js";




class HowMuch extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3970254481" + " " + "howMuch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        alignItems: 'stretch'
      },
      className: "jsx-3970254481" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3970254481" + " " + "df howMuch-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3970254481" + " " + "howMuch-about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3970254481" + " " + "howMuch-about-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3970254481" + " " + "howMuch-about-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3970254481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "CU\xC1NTO CUESTA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3970254481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "No tenemos una lista de precios fijos. Cada proyecto se valora individualmente en funci\xF3n del n\xFAmero de pesta\xF1as y el nivel de complejidad del sitio web. Rellene el formulario para obtener la cotizaci\xF3n exacta."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3970254481",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "OBTENGA UNA CUOTA GRATIS")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3970254481" + " " + "howMuch-free-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3970254481",
      __self: this
    }, ".howMuch.jsx-3970254481 .df.jsx-3970254481{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.howMuch-web.jsx-3970254481{padding:70px 10px;box-sizing:border-box;width:50%;background:#f2f2f2;border:1px solid black;border-right:none;border-left:none;}.howMuch-web.jsx-3970254481 h2.jsx-3970254481{font-size:22px;margin-bottom:10px;box-sizing:border-box;font-family:Viga;}.howMuch-web.jsx-3970254481 p.jsx-3970254481{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:500px;}.howMuch-web.jsx-3970254481 a.jsx-3970254481{margin:auto;display:inline-block;padding:13px 15px;color:white;box-sizing:border-box;margin-top:10px;border-radius:4px;font-family:Viga;background:#00BCD4;}.howMuch-web-item.jsx-3970254481{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.howMuch-web-item.jsx-3970254481 img.jsx-3970254481{width:180px;height:180px;margin-left:20px;}.howMuch-free-bg.jsx-3970254481{width:50%;background:url(static/img/How-much-does-it-cost.jpg) center center no-repeat;background-size:cover;}.howMuch-about-text.jsx-3970254481{text-align:left;padding-top:3%;padding-left:4%;padding-right:2%;box-sizing:border-box;}.howMuch-about-text.jsx-3970254481 h2.jsx-3970254481{font-size:22px;margin-bottom:10px;font-family:Viga;position:relative;}.howMuch-about-text.jsx-3970254481 h2.jsx-3970254481:before{content:\"\";position:absolute;width:50px;height:3px;background:#00BCD4;top:-15px;left:0;}.howMuch-about-text.jsx-3970254481 p.jsx-3970254481{line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;color:#656565;}@media screen and (max-width:900px){.howMuch-web.jsx-3970254481 h2.jsx-3970254481,.howMuch-web.jsx-3970254481 p.jsx-3970254481,.howMuch-web.jsx-3970254481 a.jsx-3970254481{margin-left:30px;}}@media screen and (max-width:767px){.howMuch-web.jsx-3970254481{width:100%;}.howMuch-free-bg.jsx-3970254481{height:300px;width:100%;}.howMuch-about-text.jsx-3970254481{padding:0 20px 0 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSG93TXVjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmlCLEFBRzhCLEFBSUosQUFVSCxBQU1DLEFBS0osQUFXQyxBQUtELEFBTUYsQUFNTSxBQU9ELEFBT0osQUFTSyxBQVVFLEFBTU4sQUFHRSxBQUlNLFVBbkR5RCxDQW9CM0QsQUF5QmxCLENBbkVxQixBQWdCUixDQXNERCxFQWpGTyxBQThDQSxDQXhDRSxBQWlDTixBQXVCTyxDQVV0QixDQWxGc0IsQ0ErRnRCLEtBSEEsQ0F0RGlCLElBMEJOLEVBZEssRUE1QkUsQ0FYSSxBQThDTCxNQXhEUCxBQWdFQyxFQTFCWixLQVlrQixHQWpERSxDQXFCUCxBQW1DTSxBQVFDLEtBdERGLE9BWUssQ0E0QkEsS0FqREMsQUF3RHhCLENBUVcsR0F0RFgsQ0FtQm9CLElBcENwQixFQXdFUSxLQTNDUyxDQTRCakIsQ0FUdUIsQUF5QnZCLEtBakVtQixTQXNCQSxRQW1CbkIsQ0F4Q2tCLE9BWUQsRUFVQyxFQThDSCxNQW5FZixNQVlBLEVBd0RBLENBOUNvQixtQkFDcEIsWUFJd0IsbUdBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSG93TXVjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgSG93TXVjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwiaG93TXVjaFwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZlwiIHN0eWxlPXt7YWxpZ25JdGVtczogJ3N0cmV0Y2gnfX0+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGYgaG93TXVjaC13ZWJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3dNdWNoLWFib3V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3dNdWNoLWFib3V0LWJnXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob3dNdWNoLWFib3V0LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5DVcOBTlRPIENVRVNUQVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPk5vIHRlbmVtb3MgdW5hIGxpc3RhIGRlIHByZWNpb3MgZmlqb3MuIENhZGEgcHJveWVjdG8gc2UgdmFsb3JhIGluZGl2aWR1YWxtZW50ZSBlbiBmdW5jacOzbiBkZWwgbsO6bWVybyBkZSBwZXN0YcOxYXMgeSBlbCBuaXZlbCBkZSBjb21wbGVqaWRhZCBkZWwgc2l0aW8gd2ViLiBSZWxsZW5lIGVsIGZvcm11bGFyaW8gcGFyYSBvYnRlbmVyIGxhIGNvdGl6YWNpw7NuIGV4YWN0YS5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRPQlRFTkdBIFVOQSBDVU9UQSBHUkFUSVNcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvd011Y2gtZnJlZS1iZ1wiPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5ob3dNdWNoIC5kZiB7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5ob3dNdWNoLXdlYiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDcwcHggMTBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YyZjJmMjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yaWdodDogbm9uZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5ob3dNdWNoLXdlYiBoMiB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaG93TXVjaC13ZWIgcCB7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA1MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ob3dNdWNoLXdlYiBhIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEzcHggMTVweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDBCQ0Q0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lmhvd011Y2gtd2ViLWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ob3dNdWNoLXdlYi1pdGVtIGltZyB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxODBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxODBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5ob3dNdWNoLWZyZWUtYmcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoc3RhdGljL2ltZy9Ib3ctbXVjaC1kb2VzLWl0LWNvc3QuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Lmhvd011Y2gtYWJvdXQtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzJTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiA0JTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMiU7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaG93TXVjaC1hYm91dC10ZXh0IGgyIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogVmlnYTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaG93TXVjaC1hYm91dC10ZXh0IGgyOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogM3B4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDBCQ0Q0O1xuXHRcdFx0XHRcdFx0XHR0b3A6IC0xNXB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lmhvd011Y2gtYWJvdXQtdGV4dCBwIHtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMjtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NTY1NjU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblx0XHRcdFx0XHRcdFx0Lmhvd011Y2gtd2ViIGgyLFxuXHRcdFx0XHRcdFx0XHQuaG93TXVjaC13ZWIgcCxcblx0XHRcdFx0XHRcdFx0Lmhvd011Y2gtd2ViIGEge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRcdFx0XHRcdC5ob3dNdWNoLXdlYiB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lmhvd011Y2gtZnJlZS1iZyB7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuaG93TXVjaC1hYm91dC10ZXh0IHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDIwcHggMCAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3dNdWNoIl19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/HowMuch.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HowMuch);

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
      className: "jsx-80603265" + " " + "Layout",
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
      className: "jsx-80603265",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, user-scalable=no",
      className: "jsx-80603265",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: "/static/img/FAVICON-DOLAR.png",
      className: "jsx-80603265",
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
      className: "jsx-80603265",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      className: "jsx-80603265",
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
      id: "80603265",
      __self: this
    }, "@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'Poppins';src:url(\"/static/fonts/Poppins-ExtraLight.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraLight.wofff\") format('woff'), url(\"/static/fonts/Poppins-ExtraLight.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraLight.svg\") format('svg');}@font-face{font-family:'Poppins-Bold';src:url(\"/static/fonts/Poppins-ExtraBold.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraBold.woff\") format('woff'), url(\"/static/fonts/Poppins-ExtraBold.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraBold.svg\") format('svg');}body{overflow-x:hidden;}.Layout{height:100vh;font-family:\"Poppins\",Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;font-weight:600;font-style:normal;}.df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.container{max-width:960px;width:94%;margin:auto;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;}img{max-width:100%;height:auto;display:block;}@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDc0IsQUFJd0IsQUFJTCxBQVNRLEFBV0ksQUFTSyxBQVNqQixBQU9HLEFBa0JQLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSUosQUFLTixBQU9hLEFBSUEsQUFJSCxTQWpEZixFQXNCRyxDQUpkLENBakZxRCxDQXdFckQsQUFHQSxDQXVCYSxDQXJERixBQWlDWCxFQWxGQSxDQWE4QyxBQXVEcEMsR0E1Q3lDLEVBa0VuRCxDQUdrQixDQTNDTCxDQWpCcUMsQUFzRW5DLENBbENDLFVBbEJoQixHQXFEQSxDQVZBLENBeEJjLE9BMkJRLE1BMUJHLE1BbEVULEFBWXVDLFFBV00sQ0FzRXhDLEdBN0R1QyxBQUtwQyxHQXBDTixHQWtFbEIsSUE2Q1ksU0FSQSxBQUlBLENBMUdLLEFBK0doQixTQVJBLEFBSUEsT0ExR2tCLGtCQUNuQix3Q0EwRkEsS0F4RG9CLHNFQXpCRSxtQkFDRCxJQXlCRixJQWZuQixBQVNBLFVBbEJBLElBeUJBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlLCB3aWR0aCB9ID0gdGhpcy5wcm9wc1xuXHRcdFxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiPlxuXG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9zdGF0aWMvaW1nL0ZBVklDT04tRE9MQVIucG5nXCIgLz5cblx0XHRcdFx0XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyc2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XG5cblx0XHRcdDwvSGVhZD5cblxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cblx0XHRcdFxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LkxheW91dCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QGZvbnQtZmFjZXtcblx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OidWaWdhJztcblx0XHRcdFx0ICAgIHNyYzp1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci5lb3R0XCIpO1xuXHRcdFx0XHQgICAgc3JjOmxvY2FsKCfimLonKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLndvZmZcIikgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIuc3ZnXCIpIGZvcm1hdCgnc3ZnJyk7XG5cdFx0XHRcdCAgICBmb250LXdlaWdodDpub3JtYWw7XG5cdFx0XHRcdCAgICBmb250LXN0eWxlOm5vcm1hbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdFx0XHQgICAgc3JjOnVybChcIi9zdGF0aWMvZm9udHMvUG9wcGlucy1FeHRyYUxpZ2h0LmVvdFwiKTtcblx0XHRcdFx0ICAgIHNyYzpsb2NhbCgn4pi6JyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFMaWdodC53b2ZmZlwiKSBmb3JtYXQoJ3dvZmYnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvUG9wcGlucy1FeHRyYUxpZ2h0LnR0ZlwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1BvcHBpbnMtRXh0cmFMaWdodC5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtQm9sZCc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC5lb3RcIik7XG5cdFx0XHRcdCAgICBzcmM6bG9jYWwoJ+KYuicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC53b2ZmXCIpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC5zdmdcIikgZm9ybWF0KCdzdmcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5kZiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jb250YWluZXIge1xuXHRcdFx0XHRcdG1heC13aWR0aDogOTYwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDk0JTtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5cdFx0XHRcdGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcblx0XHRcdFx0YSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuXHRcdFx0XHRkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5cdFx0XHRcdHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5cdFx0XHRcdGIsIHUsIGksIGNlbnRlcixcblx0XHRcdFx0ZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcblx0XHRcdFx0ZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG5cdFx0XHRcdHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuXHRcdFx0XHRhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcblx0XHRcdFx0ZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxuXHRcdFx0XHRtYWluLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcblx0XHRcdFx0dGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRib3JkZXI6IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMDAlO1xuXHRcdFx0XHRcdGZvbnQ6IGluaGVyaXQ7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5cdFx0XHRcdGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2wsIHVsIHtcblx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrcXVvdGUsIHEge1xuXHRcdFx0XHRcdHF1b3Rlczogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcblx0XHRcdFx0cTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRcdGNvbnRlbnQ6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFibGUge1xuXHRcdFx0XHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdFx0XHRcdFx0Ym9yZGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLjRweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAa2V5ZnJhbWVzIHRyYW5zbGF0ZUJvdHRvbVRvVG9wIHtcblx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ1MCUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdGB9PC9zdHlsZT5cblxuXHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL2FwcHMuZWxmc2lnaHQuY29tL3AvcGxhdGZvcm0uanNcIiBkZWZlcj48L3NjcmlwdD5cblx0XHQ8L2Rpdj5cblxuXHR9XG59Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      src: "https://apps.elfsight.com/p/platform.js",
      defer: true,
      className: "jsx-80603265",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/UxEditable.js":
/*!**********************************!*\
  !*** ./components/UxEditable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/UxEditable.js";



class UxEditable extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-449532898" + " " + "disenoEstetico",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-449532898" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-449532898" + " " + "services-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-449532898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "EXPERIENCIA POSITIVA ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-449532898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), "DE USUARIO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-449532898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Proyecto moderno e individual que se adapta a su negocio e industria. Estamos interesados \u200B\u200Ben el dise\xF1o web de tal manera que el producto sea funcional, intuitivo y atractivo para el usuario."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-449532898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "VER PORTAFOLIO COMPLETO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-449532898" + " " + "services-free-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-449532898" + " " + "services-free",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-449532898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "COMPLETAMENTE ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-449532898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), "EDITABLE!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-449532898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Sistema de gesti\xF3n de contenido simple e intuitivo que le permite cambiar el contenido de su sitio web de forma independiente y gratuita.  Le ense\xF1aremos c\xF3mo editar su sitio web en el futuro.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "449532898",
      __self: this
    }, ".disenoEstetico.jsx-449532898{margin:80px auto;}.portafolio-item.jsx-449532898{margin:10px auto;height:570px;width:950px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;position:absolute;left:-30px;}.portafolio-item-mascara.jsx-449532898{height:492px;overflow:hidden;position:relative;}.portafolio-item-img.jsx-449532898{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:41px;right:0;left:0;margin:auto;border-radius:2px;height:453px;background-size:cover;}.services.jsx-449532898{padding-top:80px;}.services-web.jsx-449532898{background:linear-gradient(to right,rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);padding:100px 130px 100px 40px;box-sizing:border-box;text-align:left;color:white;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);}.services-web.jsx-449532898 h2.jsx-449532898{font-size:22px;max-width:300px;margin:0 auto 10px;box-sizing:border-box;margin-left:100px;font-family:'Viga';}.services-web.jsx-449532898 p.jsx-449532898{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:300px;margin-left:100px;}.services-web.jsx-449532898 a.jsx-449532898{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:16px;border-radius:4px;font-family:Viga;}.services-free-bg.jsx-449532898{width:40%;position:relative;}.services-free.jsx-449532898{background:linear-gradient(to right,rgba(255,255,255,0.2) 0%,rgba(237,237,237,0.4) 100%);position:relative;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);padding:70px 150px;text-align:left;position:absolute;left:-90px;box-sizing:border-box;top:-160px;}.services-free.jsx-449532898 h2.jsx-449532898{font-size:22px;margin-bottom:10px;position:relative;z-index:1;font-family:Viga;}.services-free.jsx-449532898 p.jsx-449532898{margin-bottom:10px;position:relative;line-height:1.2;z-index:1;}.services-free.jsx-449532898 a.jsx-449532898{margin:auto;display:inline-block;padding:13px 15px;background:#00BCD4;color:white;box-sizing:border-box;margin-top:10px;font-size:16px;border-radius:4px;font-family:Viga;}@media screen and (max-width:1180px){.services-web.jsx-449532898{margin-left:30px;padding-left:10px;}.services-web.jsx-449532898 h2.jsx-449532898,.services-web.jsx-449532898 p.jsx-449532898,.services-web.jsx-449532898 a.jsx-449532898{margin-left:50px;}.services-free-bg.jsx-449532898{width:45%;}.services-free.jsx-449532898{top:-140px;padding:70px 40px 70px 80px;left:-60px;margin-right:30px;}}@media screen and (max-width:900px){.services-free.jsx-449532898{top:-160px;}.services-web.jsx-449532898{padding-right:70px;}}@media screen and (max-width:767px){.disenoEstetico.jsx-449532898{margin:50px auto;}.disenoEstetico.jsx-449532898 .df.jsx-449532898{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-web.jsx-449532898{margin:0;width:90%;padding:60px 110px;}.services-web.jsx-449532898 h2.jsx-449532898,.services-web.jsx-449532898 p.jsx-449532898,.services-web.jsx-449532898 a.jsx-449532898{margin-left:0px;max-width:100%;}.services-free-bg.jsx-449532898{width:80%;}.services-free.jsx-449532898{position:relative;top:-30px;width:100%;padding:80px 60px 50px 60px;left:0;right:0;margin:auto;}}@media screen and (max-width:530px){.disenoEstetico.jsx-449532898 .df.jsx-449532898{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-web.jsx-449532898{padding:50px 30px;}.services-web.jsx-449532898 a.jsx-449532898{font-size:14px;}.services-free.jsx-449532898{padding:50px 30px 40px 30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVXhFZGl0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmlCLEFBR3lCLEFBR0EsQUFVSixBQU1FLEFBZUUsQUFJaUUsQUFTbkUsQUFRQyxBQU1KLEFBY0YsQUFLaUYsQUFZNUUsQUFRSSxBQU9QLEFBY00sQUFNQSxBQUdQLEFBR0MsQUFTQSxBQUdRLEFBTUYsQUFHSyxBQUliLEFBT08sQUFLTixBQUdRLEFBWUksQUFJSixBQUdILEFBR2EsU0FwQ2xCLENBbkZPLEFBdURsQixBQXdDQSxDQXJDNEIsQUFTNUIsQ0FqRnFCLEFBOENBLENBOUZMLEVBTU4sQUE0Qk0sQUE2Q0csQUFvR25CLENBeklxQixBQThHTCxDQXJLakIsQUFHYyxBQStCZCxBQXVGb0IsQUFNbkIsQUF3QkEsQ0FzQlcsQUFnQlgsQ0F6RmtCLEFBNkNsQixBQWNvQixNQTNJUixHQXdEYixBQWtHYSxBQXFCWixDQXJMa0IsQ0FWTixDQTRDTyxBQXNIbkIsRUF4R2tCLEFBOENBLENBZkEsQ0E2QmxCLEVBckdjLEFBZ0ZFLENBMkRoQixDQTFCWSxBQXlDaUIsR0ExS21DLEtBVWpFLEdBa0N1QixBQXNGSCxDQWpIRCxBQXlDRCxBQThDRSxDQWZULENBUUEsU0FQTyxDQVFsQixJQXlFUyxDQWhITSxBQXdFZCxDQWpIUyxDQXVGRyxFQTVETSxFQStIVCxJQXpKRCxBQWtJUixBQStCQSxDQXpGRCxFQTFEZ0MsQ0EyQlQsQUE4Q0EsQUFtRVQsSUF6Sk4sR0F1RFcsQ0E3QkMsR0F6QlAsQ0F5SlosVUFqSGdCLEFBOENBLENBckZFLENBckJJLENBMkV3QixFQTdCL0MsR0FidUIsS0FpQk4sR0FXRSxBQThDSCxHQXJGRixLQXJCSyxLQWtEQSxDQWpCRixDQTBFRSxDQXJGSSxFQXVDUCxRQTVESixJQWlDQyxDQWlCYixFQVdtQixBQWFDLEFBaUNGLElBMUdsQixDQXFCQSxJQVkrQyxRQTBFL0MsQ0E5Q2tCLENBYUQsZ0JBWmpCLEFBYW1CLGtCQUNQLEVBMUNaLFNBMkN1QixzQkFDWCxXQUNaIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVXhFZGl0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFV4RWRpdGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJkaXNlbm9Fc3RldGljb1wiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy13ZWJcIj5cblx0XHRcdFx0XHRcdFx0PGgyPkVYUEVSSUVOQ0lBIFBPU0lUSVZBIDxici8+REUgVVNVQVJJTzwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFByb3llY3RvIG1vZGVybm8gZSBpbmRpdmlkdWFsIHF1ZSBzZSBhZGFwdGEgYSBzdSBuZWdvY2lvIGUgaW5kdXN0cmlhLiBFc3RhbW9zIGludGVyZXNhZG9zIOKAi+KAi2VuIGVsIGRpc2XDsW8gd2ViIGRlIHRhbCBtYW5lcmEgcXVlIGVsIHByb2R1Y3RvIHNlYSBmdW5jaW9uYWwsIGludHVpdGl2byB5IGF0cmFjdGl2byBwYXJhIGVsIHVzdWFyaW8uXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0VkVSIFBPUlRBRk9MSU8gQ09NUExFVE9cblx0XHRcdFx0XHRcdFx0PC9hPlx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy1mcmVlLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtZnJlZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMj5DT01QTEVUQU1FTlRFIDxici8+RURJVEFCTEUhPC9oMj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFNpc3RlbWEgZGUgZ2VzdGnDs24gZGUgY29udGVuaWRvIHNpbXBsZSBlIGludHVpdGl2byBxdWUgbGUgcGVybWl0ZSBjYW1iaWFyIGVsIGNvbnRlbmlkbyBkZSBzdSBzaXRpbyB3ZWIgZGUgZm9ybWEgaW5kZXBlbmRpZW50ZSB5IGdyYXR1aXRhLiAgTGUgZW5zZcOxYXJlbW9zIGPDs21vIGVkaXRhciBzdSBzaXRpbyB3ZWIgZW4gZWwgZnV0dXJvLlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljbyB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogODBweCBhdXRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnBvcnRhZm9saW8taXRlbSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweCBhdXRvO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDU3MHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogOTUwcHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9NYWNib29rLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0bGVmdDogLTMwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDkycHg7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnBvcnRhZm9saW8taXRlbS1pbWcge1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA3NiU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiA0MXB4O1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDUzcHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcyB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA4MHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMTY1LDE5NCwxKSAwJSxyZ2JhKDAsMTk2LDIxNCwxKSAxMDAlKTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTAwcHggMTMwcHggMTAwcHggNDBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDQwcHggMTIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjYpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIGgyIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byAxMHB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnVmlnYSc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIHAge1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgYSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxM3B4IDE1cHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzAwQkNENDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlLWJnIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgMCUsIHJnYmEoMjM3LDIzNywyMzcsMC40KSAxMDAlKTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDQwcHggMTIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjYpO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA3MHB4IDE1MHB4O1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IC05MHB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHR0b3A6IC0xNjBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWUgaDJ7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogVmlnYTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWUgcCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMjtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWUgYSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxM3B4IDE1cHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpIHtcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgaDIsXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgcCxcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiBhIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtZnJlZS1iZyB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDQ1JTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtZnJlZSB7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAtMTQwcHg7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZyA3MHB4IDQwcHggNzBweCA4MHB4O1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IC02MHB4O1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMzBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtZnJlZSB7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAtMTYwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiB7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogNzBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXHRcdFx0XHRcdFx0XHQuZGlzZW5vRXN0ZXRpY28ge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogNTBweCBhdXRvO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljbyAuZGYge1xuXHRcdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA2MHB4IDExMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgaDIsXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgcCxcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiBhIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlLWJnIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlIHtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAtMzBweDtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA4MHB4IDYwcHggNTBweCA2MHB4O1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5kaXNlbm9Fc3RldGljbyAuZGYge1xuXHRcdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1MHB4IDMwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiBhIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWUge1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDUwcHggMzBweCA0MHB4IDMwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV4RWRpdGFibGUiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/UxEditable.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UxEditable);

/***/ }),

/***/ "./components/WebsiteFree.js":
/*!***********************************!*\
  !*** ./components/WebsiteFree.js ***!
  \***********************************/
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
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/WebsiteFree.js";




class WebsiteFree extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1379002720" + " " + "websitefree",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        alignItems: 'stretch'
      },
      className: "jsx-1379002720" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-1379002720" + " " + "websitefree-free-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1379002720" + " " + "df websitefree-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1379002720" + " " + "websitefree-about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1379002720" + " " + "websitefree-about-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1379002720" + " " + "websitefree-about-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1379002720",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "CONSTRUYA SU SITIO WEB", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1379002720",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), "GRATIS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1379002720",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "El proyecto ser\xE1 gratuito a cambio de una estancia de vacaciones en su lugar. Tomaremos el equipo necesario para dise\xF1ar el sitio web y realizaremos materiales promocionales, fotos y videos de alta calidad."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1379002720",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "VIAJE DE TRABAJO"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1379002720",
      __self: this
    }, ".websitefree.jsx-1379002720{margin-top:60px;}.websitefree-web.jsx-1379002720{padding:70px 40px;box-sizing:border-box;width:50%;padding-left:50px;background:#f2f2f2;border:1px solid black;border-right:none;border-left:none;text-align:left;}.websitefree-web.jsx-1379002720 h2.jsx-1379002720{font-size:22px;margin-bottom:10px;box-sizing:border-box;font-family:Viga;position:relative;}.websitefree-web.jsx-1379002720 h2.jsx-1379002720:before{content:\"\";position:absolute;width:50px;height:3px;background:#00BCD4;top:-15px;left:0;}.websitefree-web.jsx-1379002720 p.jsx-1379002720{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:500px;}.websitefree-web.jsx-1379002720 a.jsx-1379002720{margin:auto;display:inline-block;padding:13px 15px;color:white;box-sizing:border-box;margin-top:10px;border-radius:4px;font-family:Viga;background:#00BCD4;}.websitefree-free-bg.jsx-1379002720{width:50%;background:url(static/img/Build-website-for-free.jpg) right center no-repeat;background-size:cover;}@media screen and (max-width:767px){.websitefree.jsx-1379002720{margin-top:40px;}.websitefree.jsx-1379002720 .df.jsx-1379002720{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.websitefree-free-bg.jsx-1379002720{width:100%;height:300px;}.websitefree-web.jsx-1379002720{width:100%;}}@media screen and (max-width:600px){.websitefree-web.jsx-1379002720{padding:40px 20px;}.websitefree-web.jsx-1379002720 h2.jsx-1379002720,.websitefree-web.jsx-1379002720 p.jsx-1379002720,.websitefree-web.jsx-1379002720 a.jsx-1379002720{margin:10px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvV2Vic2l0ZUZyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJpQixBQUd3QixBQUlFLEFBWUgsQUFPSixBQVNLLEFBS0osQUFZRixBQU9PLEFBR00sQUFHWCxBQUlBLEFBTU8sQUFLRCxVQTNCMkQsQ0ExQjNELEFBdUNKLEFBSWQsQ0E3QnFCLEdBckJGLENBaEJwQixBQWdDc0IsQUF3QnJCLENBcUJBLENBekVzQixBQW9FdEIsTUFUQSxLQXZDVyxJQWNPLENBckJJLE1BWlosQUFvQkMsVUFuQk8sQ0FvQkMsQUFhUCxLQXJCSyxPQXNCSyxLQWpDSCxFQW9CVCxHQVJRLEtBd0NsQixFQS9CTyxLQWFTLEVBakNPLEFBcUJ4QixBQXFCdUIsSUE5QnZCLFVBc0JtQixRQVNuQixDQTFDbUIsT0F3QkYsRUFVQyxTQWpDQSxLQXdCbEIsR0FVb0IsU0FqQ0gsVUFrQ2pCLE1BakNBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvV2Vic2l0ZUZyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIFdlYnNpdGVGcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJ3ZWJzaXRlZnJlZVwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZlwiIHN0eWxlPXt7YWxpZ25JdGVtczogJ3N0cmV0Y2gnfX0+XG5cblx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwid2Vic2l0ZWZyZWUtZnJlZS1iZ1wiPlxuXHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGYgd2Vic2l0ZWZyZWUtd2ViXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2Vic2l0ZWZyZWUtYWJvdXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndlYnNpdGVmcmVlLWFib3V0LWJnXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3ZWJzaXRlZnJlZS1hYm91dC10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+Q09OU1RSVVlBIFNVIFNJVElPIFdFQiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyLz5HUkFUSVNcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5FbCBwcm95ZWN0byBzZXLDoSBncmF0dWl0byBhIGNhbWJpbyBkZSB1bmEgZXN0YW5jaWEgZGUgdmFjYWNpb25lcyBlbiBzdSBsdWdhci4gVG9tYXJlbW9zIGVsIGVxdWlwbyBuZWNlc2FyaW8gcGFyYSBkaXNlw7FhciBlbCBzaXRpbyB3ZWIgeSByZWFsaXphcmVtb3MgbWF0ZXJpYWxlcyBwcm9tb2Npb25hbGVzLCBmb3RvcyB5IHZpZGVvcyBkZSBhbHRhIGNhbGlkYWQuPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFZJQUpFIERFIFRSQUJBSk9cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0LndlYnNpdGVmcmVlIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNjBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LndlYnNpdGVmcmVlLXdlYiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDcwcHggNDBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItbGVmdDogbm9uZTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LndlYnNpdGVmcmVlLXdlYiBoMiB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC53ZWJzaXRlZnJlZS13ZWIgaDI6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzcHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHRcdHRvcDogLTE1cHg7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQud2Vic2l0ZWZyZWUtd2ViIHAge1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNTAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQud2Vic2l0ZWZyZWUtd2ViIGEge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTNweCAxNXB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC53ZWJzaXRlZnJlZS1mcmVlLWJnIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKHN0YXRpYy9pbWcvQnVpbGQtd2Vic2l0ZS1mb3ItZnJlZS5qcGcpIHJpZ2h0IGNlbnRlciBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRcdFx0XHRcdC53ZWJzaXRlZnJlZSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQud2Vic2l0ZWZyZWUgLmRmIHtcblx0XHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC53ZWJzaXRlZnJlZS1mcmVlLWJnIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC53ZWJzaXRlZnJlZS13ZWIge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdC53ZWJzaXRlZnJlZS13ZWIge1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDQwcHggMjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQud2Vic2l0ZWZyZWUtd2ViIGgyLFxuXHRcdFx0XHRcdFx0XHQud2Vic2l0ZWZyZWUtd2ViIHAsXG5cdFx0XHRcdFx0XHRcdC53ZWJzaXRlZnJlZS13ZWIgYSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4IDIwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGVGcmVlIl19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/WebsiteFree.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WebsiteFree);

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

/***/ "./pages/diseno-web.js":
/*!*****************************!*\
  !*** ./pages/diseno-web.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_BannerServicesInterna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BannerServicesInterna */ "./components/BannerServicesInterna.js");
/* harmony import */ var _components_DisenoEstetico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DisenoEstetico */ "./components/DisenoEstetico.js");
/* harmony import */ var _components_AvailableMobiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AvailableMobiles */ "./components/AvailableMobiles.js");
/* harmony import */ var _components_WebsiteFree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WebsiteFree */ "./components/WebsiteFree.js");
/* harmony import */ var _components_UxEditable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UxEditable */ "./components/UxEditable.js");
/* harmony import */ var _components_HowMuch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HowMuch */ "./components/HowMuch.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/pages/diseno-web.js";









class disenoweb extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Viaja con Danilo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BannerServicesInterna__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DisenoEstetico__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AvailableMobiles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WebsiteFree__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UxEditable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HowMuch__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (disenoweb);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/diseno-web.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniloviacavavizarreta/Desktop/drone-web/pages/diseno-web.js */"./pages/diseno-web.js");


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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=diseno-web.js.map