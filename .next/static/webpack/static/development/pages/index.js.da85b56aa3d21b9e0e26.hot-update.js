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
      src: "https://daniloviacava-40daf.firebaseapp.com/static/video/IvanOspinaFMX.mp4",
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
    }, ".vimeo-wrapper.jsx-3832097984{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-3832097984:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.6;z-index:1;}.vimeo-wrapper.jsx-3832097984 video.jsx-3832097984{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.videoBanner-text.jsx-3832097984{position:absolute;left:0;right:0;width:100%;top:-100px;bottom:0;height:130px;color:white;z-index:9;font-family:Montserrat;text-align:center;}.videoBanner-title.jsx-3832097984{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;}.videoBanner-title.active.jsx-3832097984{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-3832097984 br.jsx-3832097984{display:none;}.videoBanner-skills.jsx-3832097984{font-size:17px;box-sizing:border-box;position:absolute;bottom:0;left:0;right:0;font-size:12px;z-index:99;text-align:left;font-family:Montserrat;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.videoBanner-skills.active.jsx-3832097984{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-3832097984 li.jsx-3832097984{margin-bottom:35px;background:white;padding:25px 20px;margin:0 .5px;min-height:60px;box-sizing:border-box;width:25%;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.videoBanner-skills.jsx-3832097984 li.jsx-3832097984{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-3832097984 figure.jsx-3832097984{margin-bottom:15px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.videoBanner-skills.jsx-3832097984 img.jsx-3832097984{width:30px;height:30px;margin-right:10px;}.videoBanner-skills.jsx-3832097984 h2.jsx-3832097984{font-size:13px;font-family:Viga;color:black;text-align:left;}.videoBanner-skills.jsx-3832097984 p.jsx-3832097984{color:black;line-height:1.2;}@media screen and (max-width:768px){.videoBanner-title.jsx-3832097984 br.jsx-3832097984{display:block;}}@media screen and (max-width:600px){.vimeo-wrapper.jsx-3832097984 video.jsx-3832097984{left:80%;}.videoBanner-text.jsx-3832097984{top:-130px;}.videoBanner-title.jsx-3832097984{font-size:35px;}.videoBanner-skills.jsx-3832097984{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-3832097984 li.jsx-3832097984{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-3832097984 p.jsx-3832097984 span.jsx-3832097984{display:none;}}@media screen and (max-width:400px){.videoBanner-text.jsx-3832097984{top:-60px;height:80px;}.videoBanner-title.jsx-3832097984{font-size:25px;}.videoBanner-skills.jsx-3832097984 figure.jsx-3832097984{margin-bottom:10px;}.videoBanner-skills.jsx-3832097984 img.jsx-3832097984{width:25px;height:25px;}.videoBanner-skills.jsx-3832097984 h2.jsx-3832097984{font-size:11px;}.videoBanner-skills.jsx-3832097984 p.jsx-3832097984{font-size:9px;}}@-webkit-keyframes translateBottomToTop-jsx-3832097984{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop-jsx-3832097984{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVpQixBQUkyQyxBQVNQLEFBWUMsQUFXTSxBQWNILEFBU0wsQUFLRyxBQUlFLEFBa0JMLEFBS1MsQUFjVCxBQUtTLEFBS1IsQUFNSSxBQU9ILEFBTU0sQUFNTCxBQUdFLEFBR0ksQUFHQSxBQUdMLEFBS0csQUFNSCxBQUlLLEFBR0ksQUFHUixBQUlJLEFBR0QsQUFPYSxBQUlBLEFBSUgsU0F0RDVCLENBakZ3QixBQTJCRSxBQW1CQSxBQStDSyxBQVdmLENBdEpFLEFBc0dOLEFBNEJaLEFBOEJnQixDQXBKRCxBQXVHQyxDQWhFcEIsQUE2RkksQ0F2QkEsQUE4Q0EsQ0FsSWlCLEFBa0JLLEFBcURMLEFBeUJqQixBQXFCQSxBQVVBLEdBN0tNLEFBZ0NDLENBdURVLEFBbUJLLEFBNER0QixHQU5BLENBaERrQixBQTBEbEIsQ0F6S08sQ0FnQ0MsRUFYUyxDQXVHckIsQ0FuSFUsRUFSSyxDQTZDRCxBQXVFRSxDQXBGRCxFQXZCTCxDQTZFWSxDQXZCQSxBQW9GSSxJQXBDMUIsQ0E5R2dCLEFBU0EsQUFvQ2UsRUF6QlIsQUFZUixBQW9GSyxVQW5ITCxBQVNBLEFBNEVHLENBckRMLEFBOEJBLEFBb0ZULEVBTEEsR0F6QkosR0FoR3NCLENBYUwsQUE4Qk4sQ0E5RFMsQUFTQyxHQTRFRCxHQXRCUixNQTlCSSxFQStCRyxFQS9EbkIsQUFtQlksQ0FWSSxFQTRFVSxBQW9HUixLQXJLTCxBQWFDLElBZ0pJLEFBSUEsQ0EzS0osQUF3Q2QsQUFjZSxBQTBIWCxJQXJLZ0MsQ0FhVCxDQTJDM0IsQUFtQkEsR0FrRkksQUFJQSxDQTNLSixDQXNEb0IsQ0FxQk4sUUFlZCxFQWRjLEtBckJhLENBL0JMLElBcURTLFNBN0NaLEtBUG5CLElBK0J3Qiw2QkF2QkEsOEJBdEJ4QixnQkFtRW1CLEVBNUNuQixvQkF1QmMsVUFDaUIsTUFxQkwsb0RBQzFCLG1DQXJCbUIsc0NBQ08sb0RBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYW5uZXJTZXJ2aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgdmFyIHZpZGVvQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb0Jhbm5lci10aXRsZVwiKVxuICAgICAgICAgICAgdmlkZW9CYW5uZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAgICAgdmFyIHZpZGVvQmFubmVyU2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb0Jhbm5lci1za2lsbHNcIilcbiAgICAgICAgICAgIHZpZGVvQmFubmVyU2tpbGxzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICB9XG5cblx0aGFuZGxlRG93biAoKSB7XG5cdFx0ZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gXHQ8ZGl2IGNsYXNzTmFtZT1cInZpZGVvQmFubmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lci1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aW1lby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGRhdGEtZGFzaGpzLXBsYXllciBhdXRvUGxheSBzcmM9XCJodHRwczovL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuZmlyZWJhc2VhcHAuY29tL3N0YXRpYy92aWRlby9JdmFuT3NwaW5hRk1YLm1wNFwiIGNvbnRyb2xzIHBvc3Rlcj1cIi9zdGF0aWMvaW1nL2ZteC5qcGdcIj48L3ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHZpZGVvQmFubmVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpZGVvQmFubmVyLXRpdGxlXCI+wr9OZWNlc2l0YSBtb3N0cmFyIDxici8+IHN1IHByb3llY3RvIGVmaWNpZW50ZW1lbnRlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkZiBjb250YWluZXIgdmlkZW9CYW5uZXItc2tpbGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcmVzcG9uc2l2ZS5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5ERVNBUlJPTExPIFdFQjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFDDoWdpbmFzIHdlYiBwcm9mZXNpb25hbGVzIHkgw7puaWNhcyBzb24gbnVlc3RybyBzZXJ2aWNpbyBjbGF2ZS4gPHNwYW4+RGlzcG9uaWJsZSBlbiBkaXNwb3NpdGl2b3MgbcOzdmlsZXMsIGxpc3RvIHBhcmEgU0VPIChHb29nbGUpLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZHJvbmUuc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SU3DgUdFTkVTIERFIERST05FUzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyaW5kYW1vcyBzZXJ2aWNpb3MgZGUgZm90b2dyYWbDrWEgeSB2aWRlbyBhw6lyZW8gY29uIGRyb25lcy4gPHNwYW4+Q2VydGlmaWNhZG9zIGNvbiBsaWNlbmNpYSBwYXJhIGNvbmR1Y2lyIGRyb25lcy48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJkZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3Byb2ZpbGVzLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlBPUlRBRk9MSU88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZWEgbnVlc3Ryb3Mgw7psdGltb3MgcHJveWVjdG9zIGRlIHNpdGlvcyB3ZWIgeSB2aWRlb3MgYcOpcmVvcy4gPHNwYW4+w5puYXNlIGEgbnVlc3RyYSBsaXN0YSBkZSBjbGllbnRlcyBzYXRpc2ZlY2hvcy48L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJkZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2hhbmRzaGFrZS5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TRVJWSUNJTyBHUkFUVUlUTzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlIG51ZXN0cmEgb2ZlcnRhIGRlIHRyYWJham8geSB2aWFqZSA8c3Bhbj5wYXJhIG9idGVuZXIgaW5mb3JtYWNpw7NuIGFob3JhIHkgb2J0ZW5lciBudWVzdHJvcyBzZXJ2aWNpb3MgZ3JhdHVpdG9zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciB2aWRlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2LjI1dnc7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDkvMTYqMTAwID0gNTYuMjUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNzcuNzd2aDsgLyogR2l2ZW4gYSAxNjo5IGFzcGVjdCByYXRpbywgMTYvOSoxMDAgPSAxNzcuNzcgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZS5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSBiciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjVzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscy5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgLjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjVzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVmlnYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSBiciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciB2aWRlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBwIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgZmlndXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgdHJhbnNsYXRlQm90dG9tVG9Ub3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJTZXJ2aWNlczsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServices.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BannerServices);

/***/ })

})
//# sourceMappingURL=index.js.da85b56aa3d21b9e0e26.hot-update.js.map