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

/***/ "./components/BannerServices.js":
/*!**************************************!*\
  !*** ./components/BannerServices.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServices.js";



class BannerServices extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    setTimeout(function () {
      var videoBanner = document.querySelector(".videoBanner-title");
      videoBanner.classList.add('active');
      var videoBannerSkills = document.querySelector(".videoBanner-skills");
      videoBannerSkills.classList.add('active');
    }, 500);
  }

  handleDown() {// fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-576890789" + " " + "videoBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-576890789" + " " + "videoBanner-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-576890789" + " " + "vimeo-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/xJAwnCMgqCg?autoplay=1&controls=0&loop=1&mute=1&playlist=xJAwnCMgqCg",
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-576890789" + " " + "container videoBanner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-576890789" + " " + "videoBanner-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "\xBFNecesita mostrar ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), " su proyecto eficientemente?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-576890789" + " " + "df container videoBanner-skills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-576890789" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/responsive.svg",
      alt: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "DESARROLLO WEB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "P\xE1ginas web profesionales y \xFAnicas son nuestro servicio clave. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Disponible en dispositivos m\xF3viles, listo para SEO (Google).")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-576890789" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/drone.svg",
      alt: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "IM\xC1GENES DE DRONES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Brindamos servicios de fotograf\xEDa y video a\xE9reo con drones. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Certificados con licencia para conducir drones.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-576890789" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/profiles.svg",
      alt: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "PORTAFOLIO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Vea nuestros \xFAltimos proyectos de sitios web y videos a\xE9reos. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "\xDAnase a nuestra lista de clientes satisfechos.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-576890789" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/handshake.svg",
      alt: "",
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "SERVICIO GRATUITO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Consulte nuestra oferta de trabajo y viaje ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-576890789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "para obtener informaci\xF3n ahora y obtener nuestros servicios gratuitos"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "576890789",
      __self: this
    }, ".videoBanner.jsx-576890789{height:100vh;box-shadow:0 40px 120px -20px rgba(0,0,0,.6);}.vimeo-wrapper.jsx-576890789{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-576890789:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.6;z-index:1;pointer-events:none;}.vimeo-wrapper.jsx-576890789 iframe.jsx-576890789{width:100vw;height:56.25vw;min-height:106vh;min-width:201.77vh;position:absolute;top:47%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.videoBanner-text.jsx-576890789{position:absolute;left:0;right:0;width:100%;top:-100px;bottom:0;height:130px;color:white;z-index:9;font-family:Montserrat;text-align:center;}.videoBanner-title.jsx-576890789{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2s;transition-delay:2s;}.videoBanner-title.active.jsx-576890789{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-576890789 br.jsx-576890789{display:none;}.videoBanner-skills.jsx-576890789{font-size:17px;box-sizing:border-box;position:absolute;bottom:1px;left:0;right:0;font-size:12px;z-index:99;text-align:left;font-family:Montserrat;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2.5s;transition-delay:2.5s;}.videoBanner-skills.active.jsx-576890789{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-576890789 li.jsx-576890789{margin-bottom:35px;background:white;padding:25px 20px;margin:0 .5px;min-height:60px;box-sizing:border-box;width:25%;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.videoBanner-skills.jsx-576890789 li.jsx-576890789:hover{background:#00BCD4;}.videoBanner-skills.jsx-576890789 li.jsx-576890789{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-576890789 figure.jsx-576890789{margin-bottom:15px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.videoBanner-skills.jsx-576890789 img.jsx-576890789{width:30px;height:30px;margin-right:10px;}.videoBanner-skills.jsx-576890789 h2.jsx-576890789{font-size:13px;font-family:Viga;color:black;text-align:left;}.videoBanner-skills.jsx-576890789 p.jsx-576890789{color:black;line-height:1.2;}.html5-video-player.jsx-576890789 .video-stream.jsx-576890789{top:0 !important;}@media screen and (max-width:768px){.videoBanner-title.jsx-576890789 br.jsx-576890789{display:block;}}@media screen and (max-width:600px){.videoBanner.jsx-576890789{box-shadow:none;}.vimeo-wrapper.jsx-576890789 video.jsx-576890789{left:80%;}.videoBanner-text.jsx-576890789{top:-130px;}.videoBanner-title.jsx-576890789{font-size:35px;}.videoBanner-skills.jsx-576890789{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-576890789 li.jsx-576890789{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-576890789 p.jsx-576890789 span.jsx-576890789{display:none;}}@media screen and (max-width:400px){.videoBanner-text.jsx-576890789{top:-60px;height:80px;}.videoBanner-title.jsx-576890789{font-size:25px;}.videoBanner-skills.jsx-576890789 figure.jsx-576890789{margin-bottom:10px;}.videoBanner-skills.jsx-576890789 img.jsx-576890789{width:25px;height:25px;}.videoBanner-skills.jsx-576890789 h2.jsx-576890789{font-size:11px;}.videoBanner-skills.jsx-576890789 p.jsx-576890789{font-size:9px;}}@-webkit-keyframes translateBottomToTop-jsx-576890789{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop-jsx-576890789{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVpQixBQUlzQyxBQUtLLEFBU1AsQUFhQyxBQVdNLEFBY0gsQUFTTCxBQUtHLEFBSUUsQUFrQkwsQUFLUyxBQWNBLEFBSVQsQUFLUyxBQUtSLEFBTUksQUFPSCxBQUtLLEFBS0MsQUFPbkIsQUFFYyxBQUdFLEFBR0ksQUFHQSxBQUdMLEFBS0csQUFNSCxBQUlLLEFBR0ksQUFHUixBQUlJLEFBR0QsQUFNYSxBQUlBLEFBSUgsU0FyRDVCLENBNUZ3QixBQTJCRSxBQXVCQSxBQXNESyxBQVdmLENBbEtFLEFBMkdOLEFBbUNaLEFBOEJnQixDQS9KRCxBQTJHQyxDQXRJNkIsQUFrRWpELEFBd0dJLENBMUJBLEFBaURBLENBN0lpQixBQWtCSyxBQXlETCxBQWdDakIsQUFxQkEsQUFVQSxDQXhDQSxDQVhKLENBdElVLEFBaUNDLENBdURVLEFBY3JCLEFBUzBCLEFBbUV0QixHQU5BLENBdkRrQixBQWlFbEIsQ0FyTE8sQ0FpQ0MsRUFYUyxDQTJHckIsQ0F4SFUsRUFSSyxDQThDRCxBQTJFRSxDQXhGRCxFQXhCTCxDQThFWSxDQXZCQSxBQStGSSxJQTNDMUIsQ0FuSGdCLEFBU0EsQUFxQ2UsRUF6QlIsQUFZUixBQXdGSyxVQXhITCxBQVNBLEFBNkVHLENBckRMLEFBOEJFLEFBK0ZYLEVBTEEsQ0FqS0osRUFpSUEsR0FwR3NCLENBYUwsQ0FqQ0csQUFTQyxDQXNEVixFQXVCUyxLQXRCUixJQTlCSSxJQWpDaEIsQUFvQlksQUE0Q08sQ0F2REgsRUE2RVUsQUE4R1IsS0EvS0wsQUFhQyxJQTBKSSxBQUlBLENBdExKLEFBeUNkLEFBa0pJLEVBcElXLEVBM0NxQixDQWFULENBMkMzQixBQXVCQSxHQXdGSSxBQUlBLENBdExvQixFQTRFVixDQXJCTSxPQXdDcEIsRUFsQmMsTUFwRFEsQ0ErQkssQ0F2RDNCLEVBNkUrQixTQTdDWixLQVBuQixNQStCd0IsMkJBdkJBLDhCQXRCeEIsZ0JBbUVtQixFQTVDbkIsc0JBdUJjLFVBQ2lCLElBcUJMLG9EQUMxQixxQ0FyQm1CLHNDQUNPLG9EQUMxQiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0Jhbm5lclNlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFubmVyU2VydmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgIHZhciB2aWRlb0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9CYW5uZXItdGl0bGVcIilcbiAgICAgICAgICAgIHZpZGVvQmFubmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgICAgIHZhciB2aWRlb0Jhbm5lclNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9CYW5uZXItc2tpbGxzXCIpXG4gICAgICAgICAgICB2aWRlb0Jhbm5lclNraWxscy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgfVxuXG5cdGhhbmRsZURvd24gKCkge1xuXHRcdC8vIGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlkZW9CYW5uZXItY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmltZW8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC94SkF3bkNNZ3FDZz9hdXRvcGxheT0xJmNvbnRyb2xzPTAmbG9vcD0xJm11dGU9MSZwbGF5bGlzdD14SkF3bkNNZ3FDZ1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB2aWRlb0Jhbm5lci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lci10aXRsZVwiPsK/TmVjZXNpdGEgbW9zdHJhciA8YnIvPiBzdSBwcm95ZWN0byBlZmljaWVudGVtZW50ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGYgY29udGFpbmVyIHZpZGVvQmFubmVyLXNraWxsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJkZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3Jlc3BvbnNpdmUuc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+REVTQVJST0xMTyBXRUI8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQw6FnaW5hcyB3ZWIgcHJvZmVzaW9uYWxlcyB5IMO6bmljYXMgc29uIG51ZXN0cm8gc2VydmljaW8gY2xhdmUuIDxzcGFuPkRpc3BvbmlibGUgZW4gZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzLCBsaXN0byBwYXJhIFNFTyAoR29vZ2xlKS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJkZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Ryb25lLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPklNw4FHRU5FUyBERSBEUk9ORVM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcmluZGFtb3Mgc2VydmljaW9zIGRlIGZvdG9ncmFmw61hIHkgdmlkZW8gYcOpcmVvIGNvbiBkcm9uZXMuIDxzcGFuPkNlcnRpZmljYWRvcyBjb24gbGljZW5jaWEgcGFyYSBjb25kdWNpciBkcm9uZXMuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9wcm9maWxlcy5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QT1JUQUZPTElPPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVhIG51ZXN0cm9zIMO6bHRpbW9zIHByb3llY3RvcyBkZSBzaXRpb3Mgd2ViIHkgdmlkZW9zIGHDqXJlb3MuIDxzcGFuPsOabmFzZSBhIG51ZXN0cmEgbGlzdGEgZGUgY2xpZW50ZXMgc2F0aXNmZWNob3MuPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9oYW5kc2hha2Uuc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U0VSVklDSU8gR1JBVFVJVE88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdWx0ZSBudWVzdHJhIG9mZXJ0YSBkZSB0cmFiYWpvIHkgdmlhamUgPHNwYW4+cGFyYSBvYnRlbmVyIGluZm9ybWFjacOzbiBhaG9yYSB5IG9idGVuZXIgbnVlc3Ryb3Mgc2VydmljaW9zIGdyYXR1aXRvczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0MHB4IDEyMHB4IC0yMHB4IHJnYmEoMCwwLDAsLjYpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyIGlmcmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2LjI1dnc7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDkvMTYqMTAwID0gNTYuMjUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwNnZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDEuNzd2aDsgLyogR2l2ZW4gYSAxNjo5IGFzcGVjdCByYXRpbywgMTYvOSoxMDAgPSAxNzcuNzcgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDclO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAycztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZS5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSBiciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGxpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEJDRDQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgZmlndXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWaWdhO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmh0bWw1LXZpZGVvLXBsYXllciAudmlkZW8tc3RyZWFtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIGJyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIgdmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgcCBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyB0cmFuc2xhdGVCb3R0b21Ub1RvcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclNlcnZpY2VzOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServices.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BannerServices);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase.js */ "./firebase.js");

var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Contact.js";




class Contact extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updateInput", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendContact", e => {
      e.preventDefault();
      const db = _firebase_js__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
      const userRef = db.collection("form-contacto").add({
        nombres: this.state.email,
        empresa: this.state.empresa,
        email: this.state.email,
        celular: this.state.celular,
        mensaje: this.state.mensaje
      }).then(function (docRef) {
        const thanks = document.getElementById("thanks");
        thanks.classList.add('active');
      }).catch(function (error) {
        console.log("Error: " + error);
      });
      this.setState({
        nombres: '',
        empresa: '',
        email: '',
        celular: '',
        mensaje: ''
      });
    });

    this.state = {
      nombres: '',
      empresa: '',
      email: '',
      celular: '',
      mensaje: ''
    };
  }

  handleCloseForm(e) {
    e.preventDefault();
    const thanks = document.getElementById("thanks");
    thanks.classList.remove('active');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-906141295" + " " + "Contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-906141295" + " " + "vimeo-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/oTALBxiERRQ?autoplay=1&controls=0&loop=1&playlist=xJAwnCMgqCg&mute=1",
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-906141295" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
      className: "jsx-906141295" + " " + "afiliacionForm-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "\xBFTiene un proyecto en el que ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "podamos ayudarlo?")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-906141295" + " " + "afiliacionForm-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      onSubmit: this.sendContact,
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-906141295" + " " + "afiliacionForm-formInput",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      placeholder: "Nombres*",
      name: "nombres",
      value: this.state.nombres,
      onChange: this.updateInput,
      required: true,
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      placeholder: "Empresa*",
      name: "empresa",
      value: this.state.apellidos,
      onChange: this.updateInput,
      required: true,
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-906141295" + " " + "afiliacionForm-formInput",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      placeholder: "Email*",
      name: "email",
      value: this.state.email,
      onChange: this.updateInput,
      required: true,
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      placeholder: "Celular*",
      name: "celular",
      value: this.state.celular,
      onChange: this.updateInput,
      required: true,
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-906141295" + " " + "afiliacionForm-formInput",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
      id: "",
      cols: "30",
      rows: "3",
      placeholder: "Cu\xE9ntanos cu\xE1l es tu empresa y te contactaremos.",
      name: "mensaje",
      value: this.state.mensaje,
      onChange: this.updateInput,
      required: true,
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "*Todos los Campos son Obligatorios")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "jsx-906141295" + " " + "btnRosa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Enviar")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "thanks",
      className: "jsx-906141295" + " " + "gracias",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
      className: "jsx-906141295" + " " + "afiliacionForm-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "\xA1Gracias! ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "jsx-906141295",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Te Contactaremos")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: this.handleCloseForm,
      className: "jsx-906141295" + " " + "btnRosa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Entendido")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "906141295",
      __self: this
    }, ".vimeo-wrapper.jsx-906141295{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-906141295:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.3;z-index:1;pointer-events:none;}.vimeo-wrapper.jsx-906141295 iframe.jsx-906141295{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.Contact.jsx-906141295{background:url(static/img/contacto.jpg) center center no-repeat;background-size:cover;text-align:center;padding:80px 0 60px 0;color:black;position:relative;z-index:99;box-sizing:border-box;}.Contact.jsx-906141295 .container.jsx-906141295{position:relative;z-index:99;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;}.afiliacionForm-title.jsx-906141295{font-size:22px;text-transform:uppercase;text-align:center;color:white;}.afiliacionForm-form.jsx-906141295{padding:20px;box-sizing:border-box;max-width:500px;margin:auto;}.afiliacionForm-formInput.jsx-906141295 input.jsx-906141295,.afiliacionForm-formInput.jsx-906141295 textarea.jsx-906141295{max-width:45%;width:100%;margin:2%;height:35px;line-height:35px;padding-left:20px;box-sizing:border-box;border-radius:3px;border:none;box-shadow:0px 1px 10px rgba(0,0,0,0.05);font-family:Montserrat;font-size:13px;}.afiliacionForm-formInput.jsx-906141295 input.jsx-906141295:focus{box-shadow:2px 3px 30px rgba(228,55,118,0.1);}.afiliacionForm-formInput.jsx-906141295 textarea.jsx-906141295{height:auto;width:94%;max-width:100%;}.afiliacionForm-formInput.jsx-906141295 p.jsx-906141295{text-align:left;font-size:14px;padding-left:10px;font-family:Montserrat;padding-left:20px;color:white;}.btnRosa.jsx-906141295{background:#00bcd4;text-align:center;line-height:30px;color:white;padding:5px 40px;margin-top:20px;border:none;font-size:17px;border-radius:4px;text-transform:uppercase;font-family:Viga;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.closeForm.jsx-906141295{position:absolute;top:0;bottom:0;margin:auto;left:-30px;height:40px;width:40px;background:white;padding:10px;cursor:pointer;border-radius:20px 0 0 20px;box-shadow:2px 3px 30px rgba(228,55,118,0.1);}.closeForm.jsx-906141295:before{content:\"\";position:absolute;top:-4px;background:#fffdfe;width:17px;height:110%;right:-7px;}.closeForm.jsx-906141295 img.jsx-906141295{width:70%;margin-top:8px;}.gracias.jsx-906141295{position:absolute;top:0;left:0;right:0;width:96%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;visibility:hidden;-webkit-transition:.3s linear;transition:.3s linear;background:white;}.gracias.active.jsx-906141295{opacity:1;visibility:visible;}@media screen and (max-width:767px){.Contact.jsx-906141295{margin-top:0;}}@media screen and (max-width:600px){.afiliacionForm-title.jsx-906141295{font-size:19px;}.afiliacionForm-form.jsx-906141295{padding:20px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SWUsQUFHdUMsQUFTUCxBQWFDLEFBV3FDLEFBVTlDLEFBU0gsQUFNRixBQU9DLEFBY2tDLEFBR3BDLEFBS0ksQUFRRyxBQWNELEFBY1AsQUFVRCxBQUtRLEFBaUJSLEFBTUksQUFNRSxBQUdBLFVBcENELEFBc0JJLENBbEpjLEFBa0hmLENBckdZLEFBNERwQixDQXhCWSxBQXVHdEIsQ0FoR1csQ0FiYyxBQW1IekIsQUFHQSxDQW5GZSxFQXZGTSxBQTJDVixBQWtFTCxBQTZCQSxDQTNDWSxHQVpILEVBbEZPLEFBNkdiLEFBNkJGLENBekVHLEFBb0VYLEVBL0dpQyxFQWJYLEFBa0NSLEFBZ0ZKLEFBZ0NWLEVBMUoyQixBQXNGUixBQW9EVixFQTdCSSxFQXBHUyxBQWdETCxBQVFKLEVBaUJiLEFBWWtCLENBNkJFLENBZ0JULENBeEZRLEVBbERTLEFBU0EsRUFZTyxDQXVEbkMsQUFpQ1ksRUE1Q00sRUFxQk0sQUFxRFgsRUFsRkEsR0F4RGMsQUFTQSxBQW9GZCxFQWdCQSxDQWFELENBeEVDLEdBeUZDLEVBdEhvQixBQW9DbEMsQ0E1QnVCLEFBb0NKLENBaEVhLEFBU0MsQ0FvRmYsRUFnQk4sQUFhQyxFQXhFYixFQW1DbUIsT0F5QkQsQ0FhTixDQTFIQSxBQW9CWSxDQVhJLEFBdURMLENBNkJOLEdBakVFLEdBUE0sQ0FnRVosQ0FzQ2IsR0FqSDBCLEVBb0daLEVBeEZrQyxDQXdFbkMsR0FSYixDQS9DdUIsQ0E1QmEsQUFrQmIsQUFvQ0osS0E4Q0gsRUFoQkEsV0E3QkgsRUF0REQsQUFvR2lCLEVBbEZoQixBQWtFTSxRQTdCMEIsQ0F1RXJCLEdBM0dMLE1Ba0VPLFFBaUIzQixJQWxGYSxXQUNXLEVBaUVMLE1BOUJNLE1BNUJBLEtBMkRKLEdBakVwQixRQWdGQSxDQTdDZ0IsS0E5Q0osVUErQ1oscUJBcUV1Qiw2Q0F2Q3ZCLENBM0RvQixnQ0FtR0EsNkRBbEdHLHNCQUN2QixVQWtHVyxVQUNRLGtCQUNJLG9EQUNMLGlCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UuanMnXG5cblxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5vbWJyZXM6ICcnLFxuXHRcdFx0ZW1wcmVzYTogJycsXG5cdFx0XHRlbWFpbDogJycsXG5cdFx0XHRjZWx1bGFyOiAnJyxcblx0XHRcdG1lbnNhamU6ICcnLFxuXHRcdH07XG5cdH1cblxuXHRoYW5kbGVDbG9zZUZvcm0oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0Y29uc3QgdGhhbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGFua3NcIilcblx0XHR0aGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0fVxuXG5cdHVwZGF0ZUlucHV0ID0gKGUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cblx0c2VuZENvbnRhY3QgPSBlID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKClcblx0XHRjb25zdCB1c2VyUmVmID0gZGIuY29sbGVjdGlvbihcImZvcm0tY29udGFjdG9cIikuYWRkKHtcblx0XHRcdG5vbWJyZXM6IHRoaXMuc3RhdGUuZW1haWwsXG5cdFx0XHRlbXByZXNhOiB0aGlzLnN0YXRlLmVtcHJlc2EsXG5cdFx0XHRlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcblx0XHRcdGNlbHVsYXI6IHRoaXMuc3RhdGUuY2VsdWxhcixcblx0XHRcdG1lbnNhamU6IHRoaXMuc3RhdGUubWVuc2FqZVxuXHRcdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24oZG9jUmVmKSB7XG5cdFx0XHRjb25zdCB0aGFua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoYW5rc1wiKVxuXHRcdFx0dGhhbmtzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpwqB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKVxuXHRcdH0pXG5cbiAgICBcdHRoaXMuc2V0U3RhdGUoe1xuICAgIFx0XHRub21icmVzOiAnJyxcbiAgICBcdFx0ZW1wcmVzYTogJycsXG4gICAgXHRcdGVtYWlsOiAnJyxcbiAgICBcdFx0Y2VsdWxhcjogJycsXG4gICAgXHRcdG1lbnNhamU6ICcnXG4gICAgXHR9KVxuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJDb250YWN0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpbWVvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvb1RBTEJ4aUVSUlE/YXV0b3BsYXk9MSZjb250cm9scz0wJmxvb3A9MSZwbGF5bGlzdD14SkF3bkNNZ3FDZyZtdXRlPTFcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJhZmlsaWFjaW9uRm9ybS10aXRsZVwiPlxuXHRcdFx0XHRcdMK/VGllbmUgdW4gcHJveWVjdG8gZW4gZWwgcXVlIDxici8+IDxzdHJvbmc+cG9kYW1vcyBheXVkYXJsbz88L3N0cm9uZz5cblx0XHRcdFx0PC9oMj5cblxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWZpbGlhY2lvbkZvcm0tZm9ybVwiPlxuXHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRDb250YWN0fT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWZpbGlhY2lvbkZvcm0tZm9ybUlucHV0XCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTm9tYnJlcypcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJub21icmVzXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0ge3RoaXMuc3RhdGUubm9tYnJlc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtcHJlc2EqXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1wcmVzYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9IHt0aGlzLnN0YXRlLmFwZWxsaWRvc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dH0gXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFmaWxpYWNpb25Gb3JtLWZvcm1JbnB1dFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsKlwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0ge3RoaXMuc3RhdGUuZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXR9IFxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDZWx1bGFyKlwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNlbHVsYXJcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPSB7dGhpcy5zdGF0ZS5jZWx1bGFyfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0fSBcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWZpbGlhY2lvbkZvcm0tZm9ybUlucHV0XCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIzXCIgXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDdcOpbnRhbm9zIGN1w6FsIGVzIHR1IGVtcHJlc2EgeSB0ZSBjb250YWN0YXJlbW9zLlwiXG5cblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibWVuc2FqZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9IHt0aGlzLnN0YXRlLm1lbnNhamV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXR9IFxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L3RleHRhcmVhPlxuXG5cdFx0XHRcdFx0XHRcdDxwPipUb2RvcyBsb3MgQ2FtcG9zIHNvbiBPYmxpZ2F0b3Jpb3M8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuUm9zYVwiPlxuXHRcdFx0XHRcdFx0XHRFbnZpYXJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JhY2lhc1wiIGlkPVwidGhhbmtzXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJhZmlsaWFjaW9uRm9ybS10aXRsZVwiPlxuXHRcdFx0XHRcdMKhR3JhY2lhcyEgPGJyLz4gPHN0cm9uZz5UZSBDb250YWN0YXJlbW9zPC9zdHJvbmc+XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuUm9zYVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VGb3JtfSA+XG5cdFx0XHRcdFx0RW50ZW5kaWRvXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LnZpbWVvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIgaWZyYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2LjI1dnc7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDkvMTYqMTAwID0gNTYuMjUgKi9cbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTc3Ljc3dmg7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDE2LzkqMTAwID0gMTc3Ljc3ICovXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdC5Db250YWN0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoc3RhdGljL2ltZy9jb250YWN0by5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDgwcHggMCA2MHB4IDA7XG5cdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR6LWluZGV4OiA5OTtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5Db250YWN0IC5jb250YWluZXIge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR6LWluZGV4OiA5OTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hZmlsaWFjaW9uRm9ybS10aXRsZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYWZpbGlhY2lvbkZvcm0tZm9ybSB7XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdG1heC13aWR0aDogNTAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hZmlsaWFjaW9uRm9ybS1mb3JtSW5wdXQgaW5wdXQsXG5cdFx0XHRcdC5hZmlsaWFjaW9uRm9ybS1mb3JtSW5wdXQgdGV4dGFyZWEge1xuXHRcdFx0XHRcdG1heC13aWR0aDogNDUlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbjogMiU7IFxuXHRcdFx0XHRcdGhlaWdodDogMzVweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzVweDtcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYWZpbGlhY2lvbkZvcm0tZm9ybUlucHV0IGlucHV0OmZvY3VzIHtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAycHggM3B4IDMwcHggcmdiYSgyMjgsIDU1LCAxMTgsIDAuMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmFmaWxpYWNpb25Gb3JtLWZvcm1JbnB1dCB0ZXh0YXJlYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdHdpZHRoOiA5NCU7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hZmlsaWFjaW9uRm9ybS1mb3JtSW5wdXQgcCB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMjBweDtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmJ0blJvc2Ege1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMGJjZDQ7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRwYWRkaW5nOiA1cHggNDBweDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xvc2VGb3JtIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0bGVmdDogLTMwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyOyAgICBcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDJweCAzcHggMzBweCByZ2JhKDIyOCw1NSwxMTgsMC4xKVxuXHRcdFx0XHR9XG5cdFx0XHRcdC5jbG9zZUZvcm06YmVmb3JlIHtcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IC00cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmRmZTtcblx0XHRcdFx0XHR3aWR0aDogMTdweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDExMCU7XG5cdFx0XHRcdFx0cmlnaHQ6IC03cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2xvc2VGb3JtIGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHRcdH0gXG5cblx0XHRcdFx0LmdyYWNpYXMge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHR3aWR0aDogOTYlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuM3MgbGluZWFyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmdyYWNpYXMuYWN0aXZlIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG5cdFx0XHRcdFx0LkNvbnRhY3Qge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG5cdFx0XHRcdFx0LmFmaWxpYWNpb25Gb3JtLXRpdGxlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmFmaWxpYWNpb25Gb3JtLWZvcm0ge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMjBweCAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdCJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Contact.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

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
      className: "jsx-1077642533" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-1077642533" + " " + "df container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-1077642533" + " " + "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Danilo Viacava"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-1077642533" + " " + "header-socialNetwork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.facebook.com/profile.php?id=100009455848617",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/facebookIcon.svg",
      alt: "",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.instagram.com/danilojesusv/",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/instagramIcon.svg",
      alt: "",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/whatsapp.png",
      alt: "",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: this.down,
      href: "",
      className: "jsx-1077642533",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Cotizaci\xF3n Gratis")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1077642533",
      __self: this
    }, ".header.jsx-1077642533{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:999;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.header.jsx-1077642533 a.jsx-1077642533{color:white;}.header.jsx-1077642533 .container.jsx-1077642533{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-logo.jsx-1077642533{display:inline-block;margin:10px;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;}.header-logo.active.jsx-1077642533{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-socialNetwork.jsx-1077642533 li.jsx-1077642533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.header-socialNetwork.jsx-1077642533 li.active.jsx-1077642533{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header-socialNetwork.jsx-1077642533 a.jsx-1077642533{margin:5px;padding:5px;}.header-socialNetwork.jsx-1077642533 a.jsx-1077642533:hover img.jsx-1077642533{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}.header-socialNetwork.jsx-1077642533 figure.jsx-1077642533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-socialNetwork.jsx-1077642533 figcaption.jsx-1077642533{margin:10px;color:white;}.header-socialNetwork.jsx-1077642533 img.jsx-1077642533{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:15px;height:15px;}@media screen and (max-width:650px){.header-socialNetwork.jsx-1077642533 a.jsx-1077642533{margin:0;}}@media screen and (max-width:400px){.header.jsx-1077642533{font-size:12px;}.header.jsx-1077642533 a.jsx-1077642533{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDaUIsQUFHK0IsQUFVWCxBQUdrQixBQUdULEFBUVgsQUFJRyxBQU9ILEFBSUMsQUFJaUMsQUFHL0IsQUFJRCxBQUlNLEFBVVIsQUFNcUIsQUFHVCxTQVJ0QixBQVNZLENBakRZLEFBV0EsQ0FJWixDQTdCYixBQXdDYSxHQW9CQSxHQWhCSSxHQXRDSixFQWhCSSxBQXdDakIsQ0FXQSxTQWxDVyxDQXNDSyxLQXRERyxFQTBDbkIsRUF6QjRCLGNBaEJyQixNQUNDLE9BQ0ksRUFvRFcsRUE1QlosQUFrQlMsT0F6Q1AsR0F3QmUsU0F2QlIsQ0FtQnBCLEFBV0EsQUFxQlksV0FDQyxVQTdDYixFQThDQSxtQkF4Q2dCLCtCQTRCaEIsT0ExQkQsR0FTaUIsU0F2QmhCLDZCQXdCdUIsT0FWdkIsNkNBV0EiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdFxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuXHRcdFx0dmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWxvZ29cIilcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG5cdFx0XHR2YXIgc29jaWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXNvY2lhbE5ldHdvcmsgbGlcIilcblx0XHRcdHNvY2lhbHMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHR9LCA1MDApO1xuXG5cdH1cblxuXHRkb3duIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Ly8gZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gXHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiZGYgY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCIgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0RGFuaWxvIFZpYWNhdmFcblx0XHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlci1zb2NpYWxOZXR3b3JrXCI+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDAwOTQ1NTg0ODYxN1wiID5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZmFjZWJvb2tJY29uLnN2Z1wiIGFsdD1cIlwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGFuaWxvamVzdXN2L1wiID5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaW5zdGFncmFtSWNvbi5zdmdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01MTkzMTQ0NzA0MSZ0ZXh0PUhvbGEsJTIwcXVpZXJvJTIwcmVhbGl6YXIlMjBtaSUyMHByb3llY3RvXCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy93aGF0c2FwcC5wbmdcIiBhbHQ9XCJcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMuZG93bn0gaHJlZj1cIlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0Q290aXphY2nDs24gR3JhdGlzXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L25hdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyIGEge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyIC5jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLWxvZ28ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuNXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDFzXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLWxvZ28uYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGxpIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuNXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDEuNXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgbGkuYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGEge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDVweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhlYWRlci1zb2NpYWxOZXR3b3JrIGE6aG92ZXIgaW1nIHtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC44NSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgZmlndXJlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaGVhZGVyLXNvY2lhbE5ldHdvcmsgaW1nIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAuM3M7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5oZWFkZXItc29jaWFsTmV0d29yayBhIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0ICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuXHRcdFx0ICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG5cdFx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICAgICAgICAgIC5oZWFkZXIgYSB7XG5cdFx0XHQgICAgICAgICAgICAgICAgXHRtYXJnaW46IDA7XG5cdFx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Header.js */"));
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
    }, "@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'Montserrat';src:url('/static/fonts/Montserrat-Regular.woff2') format('woff2'), url('/static/fonts/Montserrat-Regular.woff') format('woff');font-weight:normal;font-style:normal;}body{overflow-x:hidden;}.Layout{height:100vh;font-family:'Viga';}.df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.container{max-width:960px;width:94%;margin:auto;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}.fp-controlArrow.fp-prev{width:30px !important;}@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}.firstSection{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(/static/img/bg1.svg) -233px 0px;background-size:cover;height:100%;position:relative;}.firstSection:before{content:\"\";background:url(/static/img/nubes1.svg) -35px 0px;background-size:cover;position:absolute;bottom:0;left:0;right:0;width:100%;height:30vh;}.firstSection:after{content:\"\";background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:30px;left:0;right:0;margin:auto;width:30px;height:30px;z-index:9;}.secondSection{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.section3{position:relative;}.section3:before{content:\"\";background:url(/static/img/nubes3.svg) center center no-repeat;background-size:cover;position:absolute;bottom:0;left:0;width:100%;z-index:9;height:30vh;}@media screen and (max-width:1024px){.section3:before{height:30vh;z-index:10;background-size:inherit;}}@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dc0IsQUFJd0IsQUFJTCxBQUtRLEFBV08sQUFRZixBQU9HLEFBa0JQLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSUosQUFLQyxBQUtNLEFBR0gsQUFHRCxBQVNBLEFBV0QsQUFVSCxBQVlBLEFBY1EsQUFPQSxBQUlQLEFBYUcsQUFRSSxBQUdILEFBR0QsQUFTQSxBQWFJLEFBSUEsQUFJSCxTQXpLZixFQXNCRyxBQXNEOEMsQUFZaEIsQUF5QjhCLENBL0YxRSxBQTRCd0QsQUFTQSxBQXVFaEMsQUFjZ0MsQUFTQSxDQXRNcEMsQUE0RlQsQUE4RkEsQ0FoSVgsQUFHQSxFQTlCVyxBQWlDWCxBQXlCVyxBQThGQSxFQTNMWCxBQTJKd0IsQUFPZixDQXpKcUMsQUE2Q3BDLEdBa0NWLENBNEZxQyxDQXhHckMsQ0F2RG9FLEFBMERsRCxDQTNDTCxFQW1CRyxJQWxEaEIsTUFnQ0EsSUEyQ0EsQ0F4QmMsSUE2SEgsR0FsR1csSUEyREMsQ0ExQ1ksQUFTQSxBQXFGQSxBQVNBLENBbEpWLElBeUVRLEVBckhzQixTQXVFdkQsR0F4RHdCLEFBMkZVLEFBZ0RELEVBeEJkLENBMUNLLEFBU0EsQUFxRkEsQUFTQSxHQWxKeEIsRUF5RTZCLEVBNEZqQixJQXpIYSxBQVNBLEFBcUZBLEFBU0EsSUFqRFMsQ0EyRHRCLEFBSUEsQ0EzRUMsQUFnRlosRUF4RDRCLElBakVRLEFBU0MsQUFvQmxCLEFBaUVpQixBQVNDLEdBVXJDLEFBSUEsR0EzRU8sR0FaVSxJQWFULENBdUJXLEVBbkNELEtBYU4sRUF1QkssQ0FuQ0ksTUFvQ0EsR0F2QlYsRUFaVyxNQW9DRixHQXZCUixHQVpKLElBb0NjLENBdkpBLElBZ0laLE9Bd0JGLEdBdkJBLEtBaElhLEVBTUYsQUEyRlUsV0FoQlAsQUE4RkEsR0FyRkMsQUE4RkEsRUF2THhCLEVBcUk4QixHQXBEbkIsQUE4RkEsSUFyRkEsQUE4RkEsNkNBbE1XLG1CQUNELElBZUYsQUEyRnVDLGNBekcxRCxJQWVBLEFBK0hTLDZCQXBDd0Isc0JBQ1YsWUFDTSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9kYW5pbG92aWFjYXZhLTQwZGFmLmZpcmViYXNlYXBwLmNvbS9zdGF0aWMvdmlkZW8vSXZhbk9zcGluYUZNWC5tcDRcIjtcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBkYXNoanMuTWVkaWFQbGF5ZXIoKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHBsYXllci5pbml0aWFsaXplKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW9QbGF5ZXJcIiksIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBwbGF5ZXIuc2V0QXV0b1BsYXkodHJ1ZSk7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG5cdHJlbmRlciAoKSB7XG5cblx0XHRjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgd2lkdGggfSA9IHRoaXMucHJvcHNcblx0XHRcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIj5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvc3RhdGljL2ltZy9GQVZJQ09OLURPTEFSLnBuZ1wiIC8+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhcnNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxuXG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5MYXlvdXQge1xuXHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdWaWdhJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBmb250LWZhY2V7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTonVmlnYSc7XG5cdFx0XHRcdCAgICBzcmM6dXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIuZW90dFwiKTtcblx0XHRcdFx0ICAgIHNyYzpsb2NhbCgn4pi6JyksXG5cdFx0XHRcdCAgICB1cmwoXCIvc3RhdGljL2ZvbnRzL1ZpZ2EtUmVndWxhci53b2ZmXCIpIGZvcm1hdCgnd29mZicpLFxuXHRcdFx0XHQgICAgdXJsKFwiL3N0YXRpYy9mb250cy9WaWdhLVJlZ3VsYXIudHRmXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcblx0XHRcdFx0ICAgIHVybChcIi9zdGF0aWMvZm9udHMvVmlnYS1SZWd1bGFyLnN2Z1wiKSBmb3JtYXQoJ3N2ZycpO1xuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuXHRcdFx0XHQgICAgZm9udC1zdHlsZTpub3JtYWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdEBmb250LWZhY2Uge1xuXHRcdFx0XHQgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0XHRcdFx0ICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcblx0XHRcdFx0ICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG5cdFx0XHRcdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHQgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmRmIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA5NjBweDtcblx0XHRcdFx0XHR3aWR0aDogOTQlO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcblx0XHRcdFx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuXHRcdFx0XHRhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5cdFx0XHRcdGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcblx0XHRcdFx0c21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcblx0XHRcdFx0YiwgdSwgaSwgY2VudGVyLFxuXHRcdFx0XHRkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuXHRcdFx0XHRmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcblx0XHRcdFx0dGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5cdFx0XHRcdGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuXHRcdFx0XHRmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5cdFx0XHRcdG1haW4sIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxuXHRcdFx0XHR0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEwMCU7XG5cdFx0XHRcdFx0Zm9udDogaW5oZXJpdDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcblx0XHRcdFx0Zm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0fVxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRvbCwgdWwge1xuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2txdW90ZSwgcSB7XG5cdFx0XHRcdFx0cXVvdGVzOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuXHRcdFx0XHRxOmJlZm9yZSwgcTphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdFx0Y29udGVudDogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YWJsZSB7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0XHRcdFx0XHRib3JkZXItc3BhY2luZzogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmZwLWNvbnRyb2xBcnJvdy5mcC1wcmV2IHtcblx0XHRcdFx0XHR3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0ICAgICAgICAgICAgICAuc2xpZGUge1xuXHQgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgLmZwLXJpZ2h0IHtcblx0ICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIC5mcC1jb250cm9sQXJyb3cuZnAtcHJldiB7XG5cdCAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5zdmcpO1xuXHQgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0ICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuXHQgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXHQgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXHQgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgLmZwLWNvbnRyb2xBcnJvdy5mcC1uZXh0IHtcblx0ICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuXHQgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLmZpcnN0U2VjdGlvbiB7XG5cdCAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblx0ICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9iZzEuc3ZnKSAtMjMzcHggMHB4O1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC5maXJzdFNlY3Rpb246YmVmb3JlIHtcblx0ICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XG5cdCAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL251YmVzMS5zdmcpIC0zNXB4IDBweDtcblx0ICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgICAgICAgICAgICBib3R0b206IDA7XG5cdCAgICAgICAgICAgICAgbGVmdDogMDtcblx0ICAgICAgICAgICAgICByaWdodDogMDtcblx0ICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblx0ICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAuZmlyc3RTZWN0aW9uOmFmdGVyIHtcblx0ICAgICAgICAgICAgXHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0Ym90dG9tOiAzMHB4O1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0XHR6LWluZGV4OiA5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLnNlY29uZFNlY3Rpb24ge1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAuc2VjdGlvbjMge1xuXHQgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC5zZWN0aW9uMzpiZWZvcmUge1xuXHQgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cdCAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL251YmVzMy5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgICAgICAgICAgIGJvdHRvbTogMDtcblx0ICAgICAgICAgICAgICBsZWZ0OiAwO1xuXHQgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG5cdCAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdCAgICAgICAgICAgICAgLnNlY3Rpb24zOmJlZm9yZSB7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG5cdCAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXHQgICAgICAgICAgICAgIC5zbGlkZSB7XG5cdCAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAuZnAtcmlnaHQge1xuXHQgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgLmZwLWNvbnRyb2xBcnJvdy5mcC1wcmV2IHtcblx0ICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9hcnJvdy1kb3duLnN2Zyk7XG5cdCAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdCAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAuZnAtY29udHJvbEFycm93LmZwLW5leHQge1xuXHQgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXHQgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL2Fycm93LWRvd24uc3ZnKTtcblx0ICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcblx0ICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcblx0ICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5cdCAgICAgICAgICAgICAgICByaWdodDogMTBweDtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXG5cdFx0XHRcdEBrZXlmcmFtZXMgdHJhbnNsYXRlQm90dG9tVG9Ub3Age1xuXHRcdFx0XHRcdDAlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDUwJSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQxMDAlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmRhc2hqcy5vcmcvbGF0ZXN0L2Rhc2guYWxsLm1pbi5qc1wiPjwvc2NyaXB0PlxuXHRcdDwvZGl2PlxuXG5cdH1cbn0iXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      src: "https://cdn.dashjs.org/latest/dash.all.min.js",
      className: "jsx-2187934518",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }));
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





class Portafolio extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
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
      className: "jsx-2085157460" + " " + "portafolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TitleBlack__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Nuestro trabajo, es nuestra pasi\xF3n.",
      subtitle: "Ver proyectos",
      classSubtitle: "white",
      subtitleStrong: "recientes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.profealtoque.com.pe/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/profe.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.sanpiox.edu.pe/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/sanpiox.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.deliperuano.com/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/deliperuano.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.pagadespues.pe",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/pagadespues.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.acuantoestaeldolar.com/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/cambiodolar.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.clinicainternacional.com.pe/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/clinicaInternacional.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.canalipe.tv/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/canalipe.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.mifuturogr.com",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/mifuturo.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.marina.mil.pe",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/marina.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.clubterrazas.com.pe/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/terrazas.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085157460",
      __self: this
    }, ".portafolio.jsx-2085157460{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:70px 0;box-sizing:border-box;}.portafolio-item.jsx-2085157460{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}.portafolio-item-mascara.jsx-2085157460{height:158px;overflow:hidden;position:relative;}.portafolio-item-img.jsx-2085157460{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}.portafolio.jsx-2085157460 .slick-dots.jsx-2085157460 li.jsx-2085157460 button.jsx-2085157460:before{background:green;}.slick-dots.jsx-2085157460 li.jsx-2085157460 button.jsx-2085157460:before{background;red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSGUsQUFHd0IsQUFRRCxBQVFKLEFBTUUsQUFlRSxBQUlQLFdBQUksRUF4QkUsRUFNTixBQW1CWCxFQWpDYyxBQTZCZCxDQXJDbUIsT0F1Qk4sSUFOTSxDQVJOLE1BUk8sQ0F1QkwsS0Fka0QsS0FRakUsSUFPbUIsSUF2QkgsY0F3Qk4sQ0F2QmEsUUF3QmQsUUFDRCxNQXhCUixDQXlCYSxZQUNNLENBbkJJLGlCQW9CVCxLQW5CZCxRQW9CdUIsc0JBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCJcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlQmxhY2snXG5cblxuY2xhc3MgUG9ydGFmb2xpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5yZW5kZXIoKSB7XG4gICAgdmFyIHNldHRpbmdzID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuXHQgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG5cdCAgcmVzcG9uc2l2ZTogW1xuXHQgICAge1xuXHQgICAgICBicmVha3BvaW50OiAxMDYwLFxuXHQgICAgICBzZXR0aW5nczoge1xuXHQgICAgICAgIHNsaWRlc1RvU2hvdzogMixcblx0ICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcblx0ICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIHtcblx0ICAgICAgYnJlYWtwb2ludDogNjQwLFxuXHQgICAgICBzZXR0aW5nczoge1xuXHQgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcblx0ICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgXVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW9cIj5cblxuXHRcdFx0PFRpdGxlIHRpdGxlPVwiTnVlc3RybyB0cmFiYWpvLCBlcyBudWVzdHJhIHBhc2nDs24uXCIgc3VidGl0bGU9XCJWZXIgcHJveWVjdG9zXCIgY2xhc3NTdWJ0aXRsZT1cIndoaXRlXCIgc3VidGl0bGVTdHJvbmc9XCJyZWNpZW50ZXNcIj48L1RpdGxlPlxuXG5cdFx0XHQ8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5wcm9mZWFsdG9xdWUuY29tLnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wcm9mZS5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5zYW5waW94LmVkdS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvc2FucGlveC5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPiBcblxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5kZWxpcGVydWFuby5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL2RlbGlwZXJ1YW5vLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5wYWdhZGVzcHVlcy5wZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wYWdhZGVzcHVlcy5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPiAgXG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5hY3VhbnRvZXN0YWVsZG9sYXIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9jYW1iaW9kb2xhci5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xpbmljYWludGVybmFjaW9uYWwuY29tLnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvY2xpbmljYUludGVybmFjaW9uYWwucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmNhbmFsaXBlLnR2L1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9jYW5hbGlwZS5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubWlmdXR1cm9nci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL21pZnV0dXJvLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXJpbmEubWlsLnBlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL21hcmluYS5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5jbHVidGVycmF6YXMuY29tLnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvdGVycmF6YXMucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvU2xpZGVyPlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5wb3J0YWZvbGlvIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luOiA2MHB4IDAgMCAwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0cGFkZGluZzogNzBweCAwO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtIHtcblx0XHRcdFx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0XHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvTWFjYm9vay5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLW1hc2NhcmEge1xuXHRcdFx0XHRcdGhlaWdodDogMTU4cHg7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLWltZyB7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHdpZHRoOiA3NiU7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTQzcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDsgcmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cbiAgIFx0XHQ8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhZm9saW87XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ }),

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Prices.js";



class Prices extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1637064357" + " " + "prices",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1637064357" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1637064357" + " " + "prices-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "\xBFQU\xC9 PLAN PREFIERES PARA TUS CLIENTES?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Empieza a ganar m\xE1s clientes ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "ahora"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1637064357" + " " + "price-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Dise\xF1o y Desarollo Web"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-1637064357" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-1637064357" + " " + "price-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Proyecto B\xE1sico"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "- De 1 a 5 tabs de p\xE1gina ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "(home, about, services, clientes, contact)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "- Contenido digital ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "(fotos - tipograf\xEDas - video)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "- No incluye hosting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "S/. 1,000.00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-1637064357" + " " + "price-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Proyecto PRO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "- De 5 a 10 tabs de p\xE1gina ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "(home, about, services, clientes, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), " contact ... )")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "- Contenido digital ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "(fotos - tipograf\xEDas - video)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "- Incluye hosting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "S/. 2,000.00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-1637064357" + " " + "price-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Proyecto BUSINESS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "- De 5 a 10 tabs de p\xE1gina ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "(home, about, services, clientes, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), " contact ... )")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "- Contenido digital ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "(fotos - tipograf\xEDas - video)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "- Incluye hosting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "S/. 4,000.00")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1637064357" + " " + "price-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Contenido Digital - Fotograf\xEDa y video a\xE9reo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-1637064357" + " " + "df even",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-1637064357" + " " + "price-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Proyecto B\xE1sico"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "- Video editado de 30 segundos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "- 30 minutos de grabaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "S/. 300.00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-1637064357" + " " + "price-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Proyecto PRO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "- Video editado de 60 segundos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "- 60 minutos de grabaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "S/. 600.00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1637064357",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-1637064357" + " " + "price-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Proyecto BUSINESS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "- Video editado de 120 segundos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-caracteristicas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "- 120 minutos de grabaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1637064357" + " " + "price-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "S/. 1,000.00"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1637064357",
      __self: this
    }, ".prices.jsx-1637064357{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;text-align:center;min-width:300px;color:white;padding:80px 0 10px 0;font-family:Montserrat;}.prices-container.jsx-1637064357{width:90%;margin:auto;}.prices-title.jsx-1637064357{font-family:Viga;color:black;}.prices-title.jsx-1637064357 h3.jsx-1637064357{font-size:22px;}.prices-title.jsx-1637064357 p.jsx-1637064357{color:gray;font-size:17px;margin-bottom:50px;margin-top:5px;font-family:Montserrat;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;}.prices-title.jsx-1637064357 strong.jsx-1637064357{color:black;font-weight:bold;}.price-table.jsx-1637064357{margin:30px 0 50px 0;}.price-table.jsx-1637064357 h3.jsx-1637064357{font-size:20px;margin-bottom:20px;font-family:Viga;color:gray;text-transform:uppercase;}.price-table.jsx-1637064357 ul.jsx-1637064357{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.price-table.jsx-1637064357 li.jsx-1637064357{box-shadow:0 10px 50px -25px rgba(0,0,0,.6);border-radius:4px;padding:40px 20px;width:31%;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;font-size:15px;background:#18d4e7;box-sizing:border-box;}.price-table.jsx-1637064357 li.jsx-1637064357:nth-child(odd){background:white;}.price-table.jsx-1637064357 li.jsx-1637064357:nth-child(odd) p.jsx-1637064357{color:gray;text-shadow:none;}.price-table.jsx-1637064357 li.jsx-1637064357:nth-child(odd) h4.jsx-1637064357{color:gray;text-shadow:none;}.price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(even){background:white;}.price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(odd){background:#18d4e7;color:white;}.price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(odd) h4.jsx-1637064357{color:white;text-shadow:1px 1px 7px rgba(0,0,0,0.3);}.price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(odd) p.jsx-1637064357{color:white;text-shadow:1px 1px 7px rgba(0,0,0,0.3);}.price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(even) p.jsx-1637064357{color:gray;text-shadow:none;}.price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(even) h4.jsx-1637064357{color:gray;text-shadow:none;}.price-title.jsx-1637064357{margin-bottom:20px;font-family:Viga;font-size:18px;text-shadow:1px 1px 7px rgba(0,0,0,0.31);text-transform:uppercase;}.price-number.jsx-1637064357{margin-top:20px;font-size:18px;text-shadow:1px 1px 7px rgba(0,0,0,0.31);}.price-caracteristicas.jsx-1637064357{margin-bottom:10px;text-shadow:1px 1px 7px rgba(0,0,0,0.3);font-size:14px;}.price-caracteristicas.jsx-1637064357 span.jsx-1637064357{font-size:12px;height:25px;display:block;margin-top:3px;}.price-caracteristicas.jsx-1637064357:last-child{margin-bottom:0px;}@media screen and (max-width:767px){.price-table.jsx-1637064357 ul.jsx-1637064357{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.price-table.jsx-1637064357 li.jsx-1637064357{width:80%;margin:10px auto;}}@media screen and (max-width:600px){.price-table.jsx-1637064357 li.jsx-1637064357{width:90%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIaUIsQUFHcUIsQUFZSCxBQUtPLEFBS0YsQUFJSixBQVNDLEFBS1MsQUFJTixBQVFlLEFBS2MsQUFXM0IsQUFJTixBQUtBLEFBS00sQUFJRSxBQUtQLEFBS0EsQUFLRCxBQUtBLEFBS1EsQUFRSCxBQU1HLEFBTUosQUFPRyxBQUtLLEFBR1osQUFPQSxVQTVJQyxBQXNJTSxBQU9sQixDQS9IZSxBQThDRSxBQUtBLEFBd0JBLEFBS0EsQ0F2RUEsQUF3RHVCLEFBS0EsR0ExRXpDLEFBc0JvQixBQXVGUCxDQVpHLENBdEdILEFBbURiLEFBY0EsQ0F3REEsQ0FwRGEsQUF5QkssQUFjdUIsRUFyRnpDLENBM0JBLElBY29CLENBeUdMLEFBZWQsQ0ExRUQsQUFLQSxBQXdCQSxBQUtBLENBekZBLEFBa0JBLEVBbURBLEFBaUMwQyxHQTNFeEIsRUFtRUYsS0FxQkEsR0E1RUcsQ0E3QkgsTUFrQkosQUFtRThCLENBckIxQyxBQUtBLElBcUNBLEdBUmdCLENBakdRLEVBa0JFLEFBV1AsVUErRG5CLEVBekh3QixBQStIeEIsSUFnQkMsRUFwRlUsR0E3QlksSUFrQnZCLEdBWXVCLEVBc0RHLHVCQTlETCxFQStEckIsd0RBbEhvQixlQThCcEIsT0E4QmdCLGVBQ0ksRUFUcEIsaUJBVXVCLHNCQUN2QixlQTlEbUIsa0JBQ0Esa0JBQ0YsZ0JBQ0osWUFDVSxzQkFDQyx1QkFDeEIiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9QcmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJwcmljZXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByaWNlcy10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDM+wr9RVcOJIFBMQU4gUFJFRklFUkVTIFBBUkEgVFVTIENMSUVOVEVTPzwvaDM+XG5cdFx0XHRcdFx0XHRcdDxwPkVtcGllemEgYSBnYW5hciBtw6FzIGNsaWVudGVzIDxzdHJvbmc+YWhvcmE8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljZS10YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDM+RGlzZcOxbyB5IERlc2Fyb2xsbyBXZWI8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZGZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwicHJpY2UtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0UHJveWVjdG8gQsOhc2ljb1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaWNlLWNhcmFjdGVyaXN0aWNhc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtIERlIDEgYSA1IHRhYnMgZGUgcMOhZ2luYSA8YnIvPiA8c3Bhbj4oaG9tZSwgYWJvdXQsIHNlcnZpY2VzLCBjbGllbnRlcywgY29udGFjdCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1jYXJhY3RlcmlzdGljYXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LSBDb250ZW5pZG8gZGlnaXRhbCA8YnIvPiA8c3Bhbj4oZm90b3MgLSB0aXBvZ3JhZsOtYXMgLSB2aWRlbyk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1jYXJhY3RlcmlzdGljYXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LSBObyBpbmNsdXllIGhvc3Rpbmdcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaWNlLW51bWJlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTLy4gMSwwMDAuMDBcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJwcmljZS10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQcm95ZWN0byBQUk9cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1jYXJhY3RlcmlzdGljYXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LSBEZSA1IGEgMTAgdGFicyBkZSBww6FnaW5hIDxici8+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj4oaG9tZSwgYWJvdXQsIHNlcnZpY2VzLCBjbGllbnRlcywgPGJyLz4gY29udGFjdCAuLi4gKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaWNlLWNhcmFjdGVyaXN0aWNhc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtIENvbnRlbmlkbyBkaWdpdGFsIDxici8+IDxzcGFuPihmb3RvcyAtIHRpcG9ncmFmw61hcyAtIHZpZGVvKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaWNlLWNhcmFjdGVyaXN0aWNhc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtIEluY2x1eWUgaG9zdGluZ1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpY2UtbnVtYmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFMvLiAyLDAwMC4wMFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInByaWNlLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFByb3llY3RvIEJVU0lORVNTXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpY2UtY2FyYWN0ZXJpc3RpY2FzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC0gRGUgNSBhIDEwIHRhYnMgZGUgcMOhZ2luYSA8YnIvPiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+KGhvbWUsIGFib3V0LCBzZXJ2aWNlcywgY2xpZW50ZXMsIDxici8+IGNvbnRhY3QgLi4uICk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1jYXJhY3RlcmlzdGljYXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LSBDb250ZW5pZG8gZGlnaXRhbCA8YnIvPiA8c3Bhbj4oZm90b3MgLSB0aXBvZ3JhZsOtYXMgLSB2aWRlbyk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1jYXJhY3RlcmlzdGljYXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LSBJbmNsdXllIGhvc3Rpbmdcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpY2UtbnVtYmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFMvLiA0LDAwMC4wMFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljZS10YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDM+Q29udGVuaWRvIERpZ2l0YWwgLSBGb3RvZ3JhZsOtYSB5IHZpZGVvIGHDqXJlbzwvaDM+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJkZiBldmVuXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInByaWNlLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFByb3llY3RvIELDoXNpY29cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1jYXJhY3RlcmlzdGljYXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LSBWaWRlbyBlZGl0YWRvIGRlIDMwIHNlZ3VuZG9zXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1jYXJhY3RlcmlzdGljYXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LSAzMCBtaW51dG9zIGRlIGdyYWJhY2nDs25cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaWNlLW51bWJlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTLy4gMzAwLjAwXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwicHJpY2UtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0UHJveWVjdG8gUFJPXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpY2UtY2FyYWN0ZXJpc3RpY2FzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC0gVmlkZW8gZWRpdGFkbyBkZSA2MCBzZWd1bmRvc1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpY2UtY2FyYWN0ZXJpc3RpY2FzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC0gNjAgbWludXRvcyBkZSBncmFiYWNpw7NuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcmljZS1udW1iZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Uy8uIDYwMC4wMFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInByaWNlLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFByb3llY3RvIEJVU0lORVNTXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHJpY2UtY2FyYWN0ZXJpc3RpY2FzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC0gVmlkZW8gZWRpdGFkbyBkZSAxMjAgc2VndW5kb3Ncblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaWNlLWNhcmFjdGVyaXN0aWNhc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtIDEyMCBtaW51dG9zIGRlIGdyYWJhY2nDs25cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByaWNlLW51bWJlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTLy4gMSwwMDAuMDBcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQucHJpY2VzIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDgwcHggMCAxMHB4IDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucHJpY2VzLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlcy10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZXMtdGl0bGUgaDMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZXMtdGl0bGUgcCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDUwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZXMtdGl0bGUgc3Ryb25nIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLXRhYmxlIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAzMHB4IDAgNTBweCAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucHJpY2UtdGFibGUgaDMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBWaWdhO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLXRhYmxlIHVsIHtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLXRhYmxlIGxpIHtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAxMHB4IDUwcHggLTI1cHggcmdiYSgwLDAsMCwuNik7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNDBweCAyMHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzElO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxOGQ0ZTc7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZS10YWJsZSBsaTpudGgtY2hpbGQob2RkKSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucHJpY2UtdGFibGUgbGk6bnRoLWNoaWxkKG9kZCkgcCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLXRhYmxlIGxpOm50aC1jaGlsZChvZGQpIGg0IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XG5cdFx0XHRcdFx0XHRcdHRleHQtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucHJpY2UtdGFibGUgLmV2ZW4gbGk6bnRoLWNoaWxkKGV2ZW4pIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZS10YWJsZSAuZXZlbiBsaTpudGgtY2hpbGQob2RkKSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxOGQ0ZTc7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLXRhYmxlIC5ldmVuIGxpOm50aC1jaGlsZChvZGQpIGg0e1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdHRleHQtc2hhZG93OiAxcHggMXB4IDdweCByZ2JhKDAsMCwwLDAuMyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZS10YWJsZSAuZXZlbiBsaTpudGgtY2hpbGQob2RkKSBwe1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdHRleHQtc2hhZG93OiAxcHggMXB4IDdweCByZ2JhKDAsMCwwLDAuMyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZS10YWJsZSAuZXZlbiBsaTpudGgtY2hpbGQoZXZlbikgcCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLXRhYmxlIC5ldmVuIGxpOm50aC1jaGlsZChldmVuKSBoNCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLXRpdGxlIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFZpZ2E7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdFx0dGV4dC1zaGFkb3c6IDFweCAxcHggN3B4IHJnYmEoMCwwLDAsMC4zMSk7XG5cdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wcmljZS1udW1iZXIge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdHRleHQtc2hhZG93OiAxcHggMXB4IDdweCByZ2JhKDAsMCwwLDAuMzEpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucHJpY2UtY2FyYWN0ZXJpc3RpY2FzIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdFx0dGV4dC1zaGFkb3c6IDFweCAxcHggN3B4IHJnYmEoMCwwLDAsMC4zKTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucHJpY2UtY2FyYWN0ZXJpc3RpY2FzIHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDNweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnByaWNlLWNhcmFjdGVyaXN0aWNhczpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG5cdFx0XHRcdFx0XHRcdC5wcmljZS10YWJsZSB1bCB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQucHJpY2UtdGFibGUgbGkge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuXHRcdFx0XHRcdFx0XHQucHJpY2UtdGFibGUgbGkge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Prices.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Prices);

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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _BannerServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BannerServices */ "./components/BannerServices.js");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services */ "./components/Services.js");
/* harmony import */ var _Portafolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Portafolio */ "./components/Portafolio.js");
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Prices */ "./components/Prices.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/ReactFullpageDesktop.js";









const Fullpage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "section",
  id: "section1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BannerServices__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "section",
  id: "section3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Portafolio__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Prices__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "section",
  id: "section3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, `

          `));

/* harmony default export */ __webpack_exports__["default"] = (Fullpage);

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Services.js";



class Services extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "df services-about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services-about-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services-about-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "QUI\xC9NES SOMOS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Mi nombre es Danilo y tengo 25 a\xF1os, estudi\xE9 en Lima, Per\xFA. He estado viajando con mi novia Emma durante 1 a\xF1o, trabajando de forma remota. La idea principal de la empresa es trabajar y viajar por todo el mundo. Ofrecemos webs profesionales y dise\xF1o de medios digitales."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "df container services-items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services-web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "WEB Y DISE\xD1O DE MEDIOS DIGITALES"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Su sitio web tiene solo unos segundos para interesar a posibles clientes. Con nosotros, su nuevo sitio web atraer\xE1 la atenci\xF3n y la pintar\xE1 en la direcci\xF3n correcta. Dise\xF1amos sitios web modernos y creamos una imagen profesional de su empresa. Nuestro trabajo es nuestra pasi\xF3n. Es por eso que nuestros sitios web est\xE1n en l\xEDnea con las \xFAltimas tendencias y tecnolog\xEDas."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "CREAR MI SITIO WEB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services-drone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "SERVICIO DE FOTOGRAFIA Y VIDEO A\xC9REO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Muestra tu resort, hotel o cualquier cosa que desees desde una perspectiva completamente diferente. Haga que su oferta se destaque en Booking.com o tripAdvisor entre otros."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Saber m\xE1s"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services-free-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4286572015" + " " + "services-free",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "SERVICIO GRATUITO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "\xBFQuieres un nuevo sitio web pero no tienes tiempo para administrarlo? \xBFNo tienes fotos o materiales? \xBFEs posible construir un sitio web de forma gratuita? En lugar de la oferta est\xE1ndar, elija la opci\xF3n Trabajo y viaje."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-4286572015",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Saber m\xE1s"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4286572015",
      __self: this
    }, ".services.jsx-4286572015{color:black;padding-top:80px;}.services-about.jsx-4286572015{-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.services-about-text.jsx-4286572015{text-align:left;width:50%;padding-top:3%;padding-left:4%;padding-right:2%;box-sizing:border-box;}.services-about-text.jsx-4286572015 h2.jsx-4286572015{font-size:22px;margin-bottom:10px;}.services-about-text.jsx-4286572015 p.jsx-4286572015{max-width:410px;font-size:15px;font-family:Montserrat;line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;color:#656565;}.services-about-bg.jsx-4286572015{background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/danilo.JPG?alt=media&token=61b5d63e-546a-4b31-ba07-c19312c264d5) center center no-repeat;background-size:cover;width:50%;height:280px;}.services-items.jsx-4286572015{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}.services-left.jsx-4286572015{color:white;width:70%;}.services-web.jsx-4286572015{background:#00BCD4;padding:80px 20px;box-sizing:border-box;text-align:left;margin-top:-20px;}.services-web.jsx-4286572015 h2.jsx-4286572015{font-size:22px;max-width:300px;margin:0 auto 10px;padding-right:70px;box-sizing:border-box;margin-left:100px;}.services-web.jsx-4286572015 p.jsx-4286572015{font-size:15px;font-family:Montserrat;line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;max-width:300px;font-size:14px;margin-left:100px;}.services-web.jsx-4286572015 a.jsx-4286572015{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:14px;border-radius:4px;}.services-drone.jsx-4286572015{background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/rupac.JPG?alt=media&token=b2993f85-b0fe-4ade-a815-96123eea063f) center left no-repeat;background-size:cover;max-width:230px;padding:80px 90px;margin:-60px 0px 0px 60px;text-align:left;position:relative;}.services-drone.jsx-4286572015:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.3;}.services-drone.jsx-4286572015 h2.jsx-4286572015{font-size:22px;max-width:180px;margin:0 auto 10px;box-sizing:border-box;position:relative;z-index:1;}.services-drone.jsx-4286572015 p.jsx-4286572015{max-width:300px;margin:0 auto 10px;padding-left:25px;box-sizing:border-box;position:relative;z-index:1;font-family:Montserrat;font-size:14px;line-height:1.2;}.services-drone.jsx-4286572015 a.jsx-4286572015{max-width:300px;padding-left:25px;box-sizing:border-box;margin-top:10px;position:relative;z-index:1;font-size:14px;}.services-free-bg.jsx-4286572015{width:40%;}.services-free.jsx-4286572015{background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/emma.JPG?alt=media&token=d97439c2-7bfe-4801-99cf-e860cbcd1a2a) -130px 0px no-repeat;background-size:cover;color:white;padding:280px 100px 230px 100px;box-sizing:border-box;margin-top:-50px;margin-left:-110px;text-align:right;max-width:410px;font-size:15px;position:relative;}.services-free.jsx-4286572015:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.4;}.services-free.jsx-4286572015 h2.jsx-4286572015{font-size:22px;margin-bottom:10px;position:relative;z-index:1;}.services-free.jsx-4286572015 p.jsx-4286572015{font-size:14px;font-family:Montserrat;margin-bottom:10px;position:relative;line-height:1.2;z-index:1;}.services-free.jsx-4286572015 a.jsx-4286572015{font-size:14px;position:relative;z-index:1;}@media screen and (max-width:900px){.services-about-text.jsx-4286572015{margin-right:2%;padding-top:5%;}.services-web.jsx-4286572015 h2.jsx-4286572015,.services-web.jsx-4286572015 p.jsx-4286572015,.services-web.jsx-4286572015 a.jsx-4286572015{margin-left:30px;}.services-drone.jsx-4286572015{margin-left:20px;}.services-drone.jsx-4286572015 h2.jsx-4286572015{margin-left:0px;}.services-drone.jsx-4286572015 p.jsx-4286572015,.services-drone.jsx-4286572015 a.jsx-4286572015{padding-left:0;}.services-free.jsx-4286572015{margin-left:-90px;padding:280px 60px 230px 60px;background-position:-170px 0px;}}@media screen and (max-width:767px){.services-about.jsx-4286572015{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:600px;margin:auto;text-align:center;}.services-about-bg.jsx-4286572015,.services-about-text.jsx-4286572015{width:100%;}.services-about.jsx-4286572015 p.jsx-4286572015{max-width:100%;}.services-items.jsx-4286572015{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-left.jsx-4286572015{width:100%;}.services-web.jsx-4286572015{margin-top:40px;padding:40px 120px;}.services-web.jsx-4286572015 h2.jsx-4286572015,.services-web.jsx-4286572015 p.jsx-4286572015{max-width:100%;}.services-drone.jsx-4286572015{margin:30px auto;max-width:100%;padding:80px 170px;}.services-drone.jsx-4286572015 h2.jsx-4286572015{margin-left:0;max-width:100%;}.services-drone.jsx-4286572015 a.jsx-4286572015,.services-drone.jsx-4286572015 p.jsx-4286572015{margin-left:0;}.services-free-bg.jsx-4286572015{width:100%;}.services-free.jsx-4286572015{margin:0;max-width:100%;padding:70px 210px;background-position:0 -80px;}.services-free.jsx-4286572015{margin:0;max-width:100%;padding:70px 140px;background-position:0 -80px;}}@media screen and (max-width:600px){.services.jsx-4286572015{padding-top:40px;}.services-web.jsx-4286572015{padding:40px 20px;}.services-web.jsx-4286572015 h2.jsx-4286572015,.services-web.jsx-4286572015 p.jsx-4286572015,.services-web.jsx-4286572015 a.jsx-4286572015{margin:10px 20px;}.services-drone.jsx-4286572015{padding:80px 50px;}.services-free.jsx-4286572015{padding:80px 50px;background-position:0px 0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvU2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURpQixBQUdvQixBQUlRLEFBR0osQUFRRCxBQUlDLEFBUXNLLEFBT3BLLEFBSU4sQUFLTyxBQVNKLEFBUUEsQUFTSCxBQWF1SyxBQVV4SyxBQVdJLEFBU0MsQUFZQSxBQVVOLEFBSXVLLEFBY3RLLEFBV0ksQUFPQSxBQVNBLEFBT0UsQUFPQyxBQUlBLEFBSUQsQUFJRCxBQUlHLEFBUUksQUFPWCxBQUdJLEFBSU8sQUFHWCxBQUdLLEFBS0QsQUFJRSxBQUtILEFBS0EsQUFJSCxBQUdGLEFBT0EsQUFTUSxBQUdDLEFBS0QsQUFHQyxBQUdBLFNBN0JILEFBT0EsQ0F4SWpCLENBMUNtQixBQTREQSxBQXdFbEIsQUFVQSxBQTBCQSxDQXBRaUIsQUFzQ1AsQUErQlcsRUFzTEwsQUFLaEIsQ0FqUG1CLEFBcUNILEFBUU8sQUEyQ1AsQUE0REcsQUFPSSxBQVNMLEFBMEJsQixBQXNCQSxBQWVBLENBM09VLEFBWUssQUE2RkksQUFZRCxBQThERixBQWVoQixBQW9Db0IsQ0E1Q3BCLEFBSUEsQUFpRGdCLEFBaUNoQixBQVFBLENBOUUrQixBQXlFL0IsQUFRQSxBQUc2QixDQTFQWCxHQUpuQixFQWlPcUIsQUFPQSxFQXZRTCxHQVBoQixBQTRGTyxBQTREQSxBQW1HTixFQXhPdUIsQUFpQ0osQUFtREEsQUFtRm5CLENBNERvQixDQWpMRixBQThHUixDQXBLWCxBQTZHdUIsQUF1Q0osQ0F0RVgsQUFtQlcsQUF5Q1gsQUFvRlAsRUFsTXNCLENBaUJOLEFBOEdHLEdBbEtILENBc0ZMLEFBNERBLENBMEJaLEFBb0Y4QixBQU9BLEdBc0I3QixFQXBGZ0MsRUE1SmIsQUFtREcsQ0FsQ0wsQUFpTGpCLENBbkZVLENBckVFLEFBa0JVLEFBMENWLENBdklJLEFBeUNNLEVBZ0VOLENBcEhDLEFBa0tDLEVBL0hGLEdBeUhqQixHQXJFa0IsQUE0REEsR0FyRkgsQ0FqQlEsQ0FqQ0EsQ0FvUHRCLEFBT0EsQ0F2S2tCLEFBcUJBLEVBcEhJLENBbUNMLEFBcUVDLEFBMERGLEdBNENDLEFBY2pCLENBcEJBLEdBMUlzQixBQXlCWCxBQTREQSxPQTVIWixDQXlFVyxBQXFCQSxDQXhFUSxBQXNIUixDQTlIWCxDQW1EQSxBQWlCVyxBQTJDWCxDQTJEYyxFQTlNZCxDQVJBLEdBd0dBLEFBcUJnQixDQThDaEIsRUExRHdCLENBM0NQLEVBaUpHLEdBbEtwQixNQXlFQSxLQXZEbUIsSUFpSmxCLEVBdEdlLFlBMUNBLEdBMkNDLFlBMUNFLElBMkNuQixFQXpEaUIsWUFlakIsSUF2RGUsQUF5Q0MsRUEwRU8sRUF4REEsR0F2REEsT0FIdkIsQ0F5Q21CLFNBMEVOLEVBeERJLEdBdkROLElBc0NYLEdBMEVpQyxHQS9HbkIsR0F1REssVUF0RG5CLFFBdUQyQixRQXdESixrQkF2RE4sSUF3REMsWUF2REMsS0F3REMsYUF2RHBCLE1Bd0RrQixpQkFDRCxnQkFDRCxlQUNHLGtCQUNuQiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL1NlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VydmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGYgc2VydmljZXMtYWJvdXRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy1hYm91dC1iZ1wiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLWFib3V0LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDI+UVVJw4lORVMgU09NT1M8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDxwPk1pIG5vbWJyZSBlcyBEYW5pbG8geSB0ZW5nbyAyNSBhw7FvcywgZXN0dWRpw6kgZW4gTGltYSwgUGVyw7ouIEhlIGVzdGFkbyB2aWFqYW5kbyBjb24gbWkgbm92aWEgRW1tYSBkdXJhbnRlIDEgYcOxbywgdHJhYmFqYW5kbyBkZSBmb3JtYSByZW1vdGEuIExhIGlkZWEgcHJpbmNpcGFsIGRlIGxhIGVtcHJlc2EgZXMgdHJhYmFqYXIgeSB2aWFqYXIgcG9yIHRvZG8gZWwgbXVuZG8uIE9mcmVjZW1vcyB3ZWJzIHByb2Zlc2lvbmFsZXMgeSBkaXNlw7FvIGRlIG1lZGlvcyBkaWdpdGFsZXMuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRmIGNvbnRhaW5lciBzZXJ2aWNlcy1pdGVtc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLXdlYlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPldFQiBZIERJU0XDkU8gREUgTUVESU9TIERJR0lUQUxFUzwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U3Ugc2l0aW8gd2ViIHRpZW5lIHNvbG8gdW5vcyBzZWd1bmRvcyBwYXJhIGludGVyZXNhciBhIHBvc2libGVzIGNsaWVudGVzLiBDb24gbm9zb3Ryb3MsIHN1IG51ZXZvIHNpdGlvIHdlYiBhdHJhZXLDoSBsYSBhdGVuY2nDs24geSBsYSBwaW50YXLDoSBlbiBsYSBkaXJlY2Npw7NuIGNvcnJlY3RhLiBEaXNlw7FhbW9zIHNpdGlvcyB3ZWIgbW9kZXJub3MgeSBjcmVhbW9zIHVuYSBpbWFnZW4gcHJvZmVzaW9uYWwgZGUgc3UgZW1wcmVzYS4gTnVlc3RybyB0cmFiYWpvIGVzIG51ZXN0cmEgcGFzacOzbi4gRXMgcG9yIGVzbyBxdWUgbnVlc3Ryb3Mgc2l0aW9zIHdlYiBlc3TDoW4gZW4gbMOtbmVhIGNvbiBsYXMgw7psdGltYXMgdGVuZGVuY2lhcyB5IHRlY25vbG9nw61hcy5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDUkVBUiBNSSBTSVRJTyBXRUJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtZHJvbmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5TRVJWSUNJTyBERSBGT1RPR1JBRklBIFkgVklERU8gQcOJUkVPPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRNdWVzdHJhIHR1IHJlc29ydCwgaG90ZWwgbyBjdWFscXVpZXIgY29zYSBxdWUgZGVzZWVzIGRlc2RlIHVuYSBwZXJzcGVjdGl2YSBjb21wbGV0YW1lbnRlIGRpZmVyZW50ZS4gSGFnYSBxdWUgc3Ugb2ZlcnRhIHNlIGRlc3RhcXVlIGVuIEJvb2tpbmcuY29tIG8gdHJpcEFkdmlzb3IgZW50cmUgb3Ryb3MuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2FiZXIgbcOhc1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlx0XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtZnJlZS1iZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtZnJlZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlNFUlZJQ0lPIEdSQVRVSVRPPC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHTCv1F1aWVyZXMgdW4gbnVldm8gc2l0aW8gd2ViIHBlcm8gbm8gdGllbmVzIHRpZW1wbyBwYXJhIGFkbWluaXN0cmFybG8/IMK/Tm8gdGllbmVzIGZvdG9zIG8gbWF0ZXJpYWxlcz8gwr9FcyBwb3NpYmxlIGNvbnN0cnVpciB1biBzaXRpbyB3ZWIgZGUgZm9ybWEgZ3JhdHVpdGE/IEVuIGx1Z2FyIGRlIGxhIG9mZXJ0YSBlc3TDoW5kYXIsIGVsaWphIGxhIG9wY2nDs24gVHJhYmFqbyB5IHZpYWplLlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNhYmVyIG3DoXNcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogODBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1hYm91dCB7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWFib3V0LXRleHQge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogNCU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDIlO1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWFib3V0LXRleHQgaDIge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc2VydmljZXMtYWJvdXQtdGV4dCBwIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA0MTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMjtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NTY1NjU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc2VydmljZXMtYWJvdXQtYmfCoHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvZGFuaWxvdmlhY2F2YS00MGRhZi5hcHBzcG90LmNvbS9vL2Rhbmlsby5KUEc/YWx0PW1lZGlhJnRva2VuPTYxYjVkNjNlLTU0NmEtNGIzMS1iYTA3LWMxOTMxMmMyNjRkNSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjgwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1pdGVtcyB7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBzdGFydDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWxlZnQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA3MCU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDBCQ0Q0O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA4MHB4IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yMHB4O1xuXHRcdFx0XHRcdFx0XHQvLyBtYXJnaW4tbGVmdDogLTUwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgaDIge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDEwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDcwcHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgcCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiBhIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEzcHggMTVweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDBCQ0Q0O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc2VydmljZXMtZHJvbmUge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9kYW5pbG92aWFjYXZhLTQwZGFmLmFwcHNwb3QuY29tL28vcnVwYWMuSlBHP2FsdD1tZWRpYSZ0b2tlbj1iMjk5M2Y4NS1iMGZlLTRhZGUtYTgxNS05NjEyM2VlYTA2M2YpIGNlbnRlciBsZWZ0IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAyMzBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogODBweCA5MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IC02MHB4IDBweCAwcHggNjBweDtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc2VydmljZXMtZHJvbmU6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAuMztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWRyb25lIGgyIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDE4MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byAxMHB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1kcm9uZSBwIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG8gMTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNXB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1kcm9uZSBhIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNXB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWUtYmcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc2VydmljZXMtZnJlZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9lbW1hLkpQRz9hbHQ9bWVkaWEmdG9rZW49ZDk3NDM5YzItN2JmZS00ODAxLTk5Y2YtZTg2MGNiY2QxYTJhKSAtMTMwcHggMHB4IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAyODBweCAxMDBweCAyMzBweCAxMDBweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTUwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMTEwcHg7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDQxMHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWU6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAuNDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWUgaDJ7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc2VydmljZXMtZnJlZSBwIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc2VydmljZXMtZnJlZSBhIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1hYm91dC10ZXh0IHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIlO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1JTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiBoMixcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiBwLFxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIGEge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWRyb25lIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1kcm9uZSBoMiB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtZHJvbmUgcCxcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWRyb25lIGEge1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTkwcHg7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMjgwcHggNjBweCAyMzBweCA2MHB4O1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0xNzBweCAwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWFib3V0IHtcblx0XHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNjAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtYWJvdXQtYmcsXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1hYm91dC10ZXh0IHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtYWJvdXQgcCB7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWl0ZW1zwqB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtbGVmdCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLXdlYiB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA0MHB4IDEyMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgaDIsXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgcCB7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWRyb25lIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDMwcHggYXV0bztcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogODBweCAxNzBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtZHJvbmUgaDIge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtZHJvbmUgYSxcblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWRyb25lIHAge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWZyZWUtYmcge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDcwcHggMjEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAtODBweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDcwcHggMTQwcHg7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAtODBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMge1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIge1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDQwcHggMjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIGgyLFxuXHRcdFx0XHRcdFx0XHQuc2VydmljZXMtd2ViIHAsXG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy13ZWIgYSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4IDIwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LnNlcnZpY2VzLWRyb25lwqB7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogODBweCA1MHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZXJ2aWNlcy1mcmVlIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA4MHB4IDUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cblxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlczsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Services.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Services);

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
      className: "jsx-4226909580" + " " + "title-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4226909580" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-4226909580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4226909580" + " " + (this.props.classSubtitle || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.subtitle, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-4226909580" + " " + (this.props.classSubtitle || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.subtitleStrong))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4226909580",
      __self: this
    }, ".title-container.jsx-4226909580{font-family:Viga;color:black;}.title.jsx-4226909580 h3.jsx-4226909580{font-size:22px;}.title.jsx-4226909580 p.jsx-4226909580{color:gray;font-size:17px;margin-bottom:50px;margin-top:5px;font-family:Montserrat;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;}.title.jsx-4226909580 .white.jsx-4226909580{color:white;}.title.jsx-4226909580 strong.jsx-4226909580{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVGl0bGVCbGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXaUIsQUFHeUIsQUFLRixBQUlKLEFBU0MsQUFJQSxXQVpHLENBU2hCLEFBSWtCLEdBakJsQixFQUxhLFNBVU8sR0FUcEIsQUFzQkEsZ0JBWmdCLGVBQ1EsdUJBQ0QseUdBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvVGl0bGVCbGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRpdGxlQmxhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzU3VidGl0bGV9Pnt0aGlzLnByb3BzLnN1YnRpdGxlfSA8c3Ryb25nIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1N1YnRpdGxlfT57dGhpcy5wcm9wcy5zdWJ0aXRsZVN0cm9uZ308L3N0cm9uZz5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC50aXRsZS1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogVmlnYTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQudGl0bGUgaDMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC50aXRsZSBwIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnRpdGxlIC53aGl0ZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnRpdGxlIHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZUJsYWNrOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/TitleBlack.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TitleBlack);

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);


const settings = {
  timestampsInSnapshots: false
};
const config = {
  apiKey: "AIzaSyANEVgK9gfjKQfqn_RopgWhAB8MP3CgkZc",
  authDomain: "daniloviacava-40daf.firebaseapp.com",
  databaseURL: "https://daniloviacava-40daf.firebaseio.com",
  projectId: "daniloviacava-40daf",
  storageBucket: "daniloviacava-40daf.appspot.com",
  messagingSenderId: "107745328618",
  appId: "1:107745328618:web:ca20c18f454da06d"
}; // firebase.firestore().settings(settings);

/* harmony default export */ __webpack_exports__["default"] = (!firebase__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config) : firebase__WEBPACK_IMPORTED_MODULE_0__["app"]());

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
/* harmony import */ var _components_ReactFullpageDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ReactFullpageDesktop */ "./components/ReactFullpageDesktop.js");
var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/pages/index.js";


 // import { i18n, withNamespaces } from '../i18n'

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  render() {
    let page = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReactFullpageDesktop__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Viaja con Danilo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, page);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

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
//# sourceMappingURL=index.js.map