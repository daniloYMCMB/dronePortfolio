webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

  handleDown() {
    fullpage_api.moveSectionDown();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3832097984" + " " + "videoBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3832097984" + " " + "videoBanner-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3832097984" + " " + "vimeo-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
      "data-dashjs-player": true,
      autoPlay: true,
      src: "/static/video/IvanOspinaFMX.mp4",
      controls: true,
      poster: "/static/img/fmx.jpg",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3832097984" + " " + "container videoBanner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3832097984" + " " + "videoBanner-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "\xBFNecesita mostrar ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), " su proyecto eficientemente?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-3832097984" + " " + "df container videoBanner-skills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-3832097984" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/responsive.svg",
      alt: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "DESARROLLO WEB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "P\xE1ginas web profesionales y \xFAnicas son nuestro servicio clave. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Disponible en dispositivos m\xF3viles, listo para SEO (Google).")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-3832097984" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/drone.svg",
      alt: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "IM\xC1GENES DE DRONES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Brindamos servicios de fotograf\xEDa y video a\xE9reo con drones. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Certificados con licencia para conducir drones.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-3832097984" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/profiles.svg",
      alt: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "PORTAFOLIO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Vea nuestros \xFAltimos proyectos de sitios web y videos a\xE9reos. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "\xDAnase a nuestra lista de clientes satisfechos.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-3832097984" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/handshake.svg",
      alt: "",
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "SERVICIO GRATUITO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Consulte nuestra oferta de trabajo y viaje ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3832097984",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "para obtener informaci\xF3n ahora y obtener nuestros servicios gratuitos"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3832097984",
      __self: this
    }, ".vimeo-wrapper.jsx-3832097984{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-3832097984:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.6;z-index:1;}.vimeo-wrapper.jsx-3832097984 video.jsx-3832097984{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.videoBanner-text.jsx-3832097984{position:absolute;left:0;right:0;width:100%;top:-100px;bottom:0;height:130px;color:white;z-index:9;font-family:Montserrat;text-align:center;}.videoBanner-title.jsx-3832097984{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;}.videoBanner-title.active.jsx-3832097984{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-3832097984 br.jsx-3832097984{display:none;}.videoBanner-skills.jsx-3832097984{font-size:17px;box-sizing:border-box;position:absolute;bottom:0;left:0;right:0;font-size:12px;z-index:99;text-align:left;font-family:Montserrat;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.videoBanner-skills.active.jsx-3832097984{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-3832097984 li.jsx-3832097984{margin-bottom:35px;background:white;padding:25px 20px;margin:0 .5px;min-height:60px;box-sizing:border-box;width:25%;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.videoBanner-skills.jsx-3832097984 li.jsx-3832097984{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-3832097984 figure.jsx-3832097984{margin-bottom:15px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.videoBanner-skills.jsx-3832097984 img.jsx-3832097984{width:30px;height:30px;margin-right:10px;}.videoBanner-skills.jsx-3832097984 h2.jsx-3832097984{font-size:13px;font-family:Viga;color:black;text-align:left;}.videoBanner-skills.jsx-3832097984 p.jsx-3832097984{color:black;line-height:1.2;}@media screen and (max-width:768px){.videoBanner-title.jsx-3832097984 br.jsx-3832097984{display:block;}}@media screen and (max-width:600px){.vimeo-wrapper.jsx-3832097984 video.jsx-3832097984{left:80%;}.videoBanner-text.jsx-3832097984{top:-130px;}.videoBanner-title.jsx-3832097984{font-size:35px;}.videoBanner-skills.jsx-3832097984{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-3832097984 li.jsx-3832097984{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-3832097984 p.jsx-3832097984 span.jsx-3832097984{display:none;}}@media screen and (max-width:400px){.videoBanner-text.jsx-3832097984{top:-60px;height:80px;}.videoBanner-title.jsx-3832097984{font-size:25px;}.videoBanner-skills.jsx-3832097984 figure.jsx-3832097984{margin-bottom:10px;}.videoBanner-skills.jsx-3832097984 img.jsx-3832097984{width:25px;height:25px;}.videoBanner-skills.jsx-3832097984 h2.jsx-3832097984{font-size:11px;}.videoBanner-skills.jsx-3832097984 p.jsx-3832097984{font-size:9px;}}@-webkit-keyframes translateBottomToTop-jsx-3832097984{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop-jsx-3832097984{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVpQixBQUkyQyxBQVNQLEFBWUMsQUFXTSxBQWNILEFBU0wsQUFLRyxBQUlFLEFBa0JMLEFBS1MsQUFjVCxBQUtTLEFBS1IsQUFNSSxBQU9ILEFBTU0sQUFNTCxBQUdFLEFBR0ksQUFHQSxBQUdMLEFBS0csQUFNSCxBQUlLLEFBR0ksQUFHUixBQUlJLEFBR0QsQUFPYSxBQUlBLEFBSUgsU0F0RDVCLENBakZ3QixBQTJCRSxBQW1CQSxBQStDSyxBQVdmLENBdEpFLEFBc0dOLEFBNEJaLEFBOEJnQixDQXBKRCxBQXVHQyxDQWhFcEIsQUE2RkksQ0F2QkEsQUE4Q0EsQ0FsSWlCLEFBa0JLLEFBcURMLEFBeUJqQixBQXFCQSxBQVVBLEdBN0tNLEFBZ0NDLENBdURVLEFBbUJLLEFBNER0QixHQU5BLENBaERrQixBQTBEbEIsQ0F6S08sQ0FnQ0MsRUFYUyxDQXVHckIsQ0FuSFUsRUFSSyxDQTZDRCxBQXVFRSxDQXBGRCxFQXZCTCxDQTZFWSxDQXZCQSxBQW9GSSxJQXBDMUIsQ0E5R2dCLEFBU0EsQUFvQ2UsRUF6QlIsQUFZUixBQW9GSyxVQW5ITCxBQVNBLEFBNEVHLENBckRMLEFBOEJBLEFBb0ZULEVBTEEsR0F6QkosR0FoR3NCLENBYUwsQUE4Qk4sQ0E5RFMsQUFTQyxHQTRFRCxHQXRCUixNQTlCSSxFQStCRyxFQS9EbkIsQUFtQlksQ0FWSSxFQTRFVSxBQW9HUixLQXJLTCxBQWFDLElBZ0pJLEFBSUEsQ0EzS0osQUF3Q2QsQUFjZSxBQTBIWCxJQXJLZ0MsQ0FhVCxDQTJDM0IsQUFtQkEsR0FrRkksQUFJQSxDQTNLSixDQXNEb0IsQ0FxQk4sUUFlZCxFQWRjLEtBckJhLENBL0JMLElBcURTLFNBN0NaLEtBUG5CLElBK0J3Qiw2QkF2QkEsOEJBdEJ4QixnQkFtRW1CLEVBNUNuQixvQkF1QmMsVUFDaUIsTUFxQkwsb0RBQzFCLG1DQXJCbUIsc0NBQ08sb0RBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYW5uZXJTZXJ2aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgdmFyIHZpZGVvQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb0Jhbm5lci10aXRsZVwiKVxuICAgICAgICAgICAgdmlkZW9CYW5uZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAgICAgdmFyIHZpZGVvQmFubmVyU2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb0Jhbm5lci1za2lsbHNcIilcbiAgICAgICAgICAgIHZpZGVvQmFubmVyU2tpbGxzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICB9XG5cblx0aGFuZGxlRG93biAoKSB7XG5cdFx0ZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gXHQ8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQmFubmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lci1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aW1lby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGRhdGEtZGFzaGpzLXBsYXllciBhdXRvUGxheSBzcmM9XCIvc3RhdGljL3ZpZGVvL0l2YW5Pc3BpbmFGTVgubXA0XCIgY29udHJvbHMgcG9zdGVyPVwiL3N0YXRpYy9pbWcvZm14LmpwZ1wiPjwvdmlkZW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdmlkZW9CYW5uZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW9CYW5uZXItdGl0bGVcIj7Cv05lY2VzaXRhIG1vc3RyYXIgPGJyLz4gc3UgcHJveWVjdG8gZWZpY2llbnRlbWVudGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRmIGNvbnRhaW5lciB2aWRlb0Jhbm5lci1za2lsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9yZXNwb25zaXZlLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRFU0FSUk9MTE8gV0VCPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUMOhZ2luYXMgd2ViIHByb2Zlc2lvbmFsZXMgeSDDum5pY2FzIHNvbiBudWVzdHJvIHNlcnZpY2lvIGNsYXZlLiA8c3Bhbj5EaXNwb25pYmxlIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcywgbGlzdG8gcGFyYSBTRU8gKEdvb2dsZSkuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9kcm9uZS5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JTcOBR0VORVMgREUgRFJPTkVTPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJpbmRhbW9zIHNlcnZpY2lvcyBkZSBmb3RvZ3JhZsOtYSB5IHZpZGVvIGHDqXJlbyBjb24gZHJvbmVzLiA8c3Bhbj5DZXJ0aWZpY2Fkb3MgY29uIGxpY2VuY2lhIHBhcmEgY29uZHVjaXIgZHJvbmVzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcHJvZmlsZXMuc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UE9SVEFGT0xJTzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlYSBudWVzdHJvcyDDumx0aW1vcyBwcm95ZWN0b3MgZGUgc2l0aW9zIHdlYiB5IHZpZGVvcyBhw6lyZW9zLiA8c3Bhbj7Dmm5hc2UgYSBudWVzdHJhIGxpc3RhIGRlIGNsaWVudGVzIHNhdGlzZmVjaG9zLjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaGFuZHNoYWtlLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNFUlZJQ0lPIEdSQVRVSVRPPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGUgbnVlc3RyYSBvZmVydGEgZGUgdHJhYmFqbyB5IHZpYWplIDxzcGFuPnBhcmEgb2J0ZW5lciBpbmZvcm1hY2nDs24gYWhvcmEgeSBvYnRlbmVyIG51ZXN0cm9zIHNlcnZpY2lvcyBncmF0dWl0b3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTYuMjV2dzsgLyogR2l2ZW4gYSAxNjo5IGFzcGVjdCByYXRpbywgOS8xNioxMDAgPSA1Ni4yNSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE3Ny43N3ZoOyAvKiBHaXZlbiBhIDE2OjkgYXNwZWN0IHJhdGlvLCAxNi85KjEwMCA9IDE3Ny43NyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIGJyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgZmlndXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWaWdhO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIGJyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC02MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBmaWd1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyB0cmFuc2xhdGVCb3R0b21Ub1RvcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclNlcnZpY2VzOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServices.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BannerServices);

/***/ })

})
//# sourceMappingURL=index.js.a29ce03dccdbb79463a7.hot-update.js.map