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
      className: "jsx-979562070" + " " + "videoBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-979562070" + " " + "videoBanner-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-979562070" + " " + "vimeo-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/xJAwnCMgqCg?autoplay=1&controls=0&loop=1&playlist=xJAwnCMgqCg",
      frameborder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-979562070" + " " + "container videoBanner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-979562070" + " " + "videoBanner-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "\xBFNecesita mostrar ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), " su proyecto eficientemente?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-979562070" + " " + "df container videoBanner-skills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-979562070" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/responsive.svg",
      alt: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "DESARROLLO WEB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "P\xE1ginas web profesionales y \xFAnicas son nuestro servicio clave. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Disponible en dispositivos m\xF3viles, listo para SEO (Google).")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-979562070" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/drone.svg",
      alt: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "IM\xC1GENES DE DRONES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Brindamos servicios de fotograf\xEDa y video a\xE9reo con drones. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Certificados con licencia para conducir drones.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-979562070" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/profiles.svg",
      alt: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "PORTAFOLIO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Vea nuestros \xFAltimos proyectos de sitios web y videos a\xE9reos. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "\xDAnase a nuestra lista de clientes satisfechos.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "jsx-979562070" + " " + "df",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/img/handshake.svg",
      alt: "",
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "SERVICIO GRATUITO")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Consulte nuestra oferta de trabajo y viaje ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-979562070",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "para obtener informaci\xF3n ahora y obtener nuestros servicios gratuitos"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "979562070",
      __self: this
    }, ".videoBanner.jsx-979562070{height:100vh;}.vimeo-wrapper.jsx-979562070{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}.vimeo-wrapper.jsx-979562070:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.6;z-index:1;pointer-events:none;}.vimeo-wrapper.jsx-979562070 iframe.jsx-979562070{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.videoBanner-text.jsx-979562070{position:absolute;left:0;right:0;width:100%;top:-100px;bottom:0;height:130px;color:white;z-index:9;font-family:Montserrat;text-align:center;}.videoBanner-title.jsx-979562070{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;}.videoBanner-title.active.jsx-979562070{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.videoBanner-title.jsx-979562070 br.jsx-979562070{display:none;}.videoBanner-skills.jsx-979562070{font-size:17px;box-sizing:border-box;position:absolute;bottom:1;left:0;right:0;font-size:12px;z-index:99;text-align:left;font-family:Montserrat;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.videoBanner-skills.active.jsx-979562070{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-979562070 li.jsx-979562070{margin-bottom:35px;background:white;padding:25px 20px;margin:0 .5px;min-height:60px;box-sizing:border-box;width:25%;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}.videoBanner-skills.jsx-979562070 li.jsx-979562070{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.videoBanner-skills.jsx-979562070 figure.jsx-979562070{margin-bottom:15px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.videoBanner-skills.jsx-979562070 img.jsx-979562070{width:30px;height:30px;margin-right:10px;}.videoBanner-skills.jsx-979562070 h2.jsx-979562070{font-size:13px;font-family:Viga;color:black;text-align:left;}.videoBanner-skills.jsx-979562070 p.jsx-979562070{color:black;line-height:1.2;}@media screen and (max-width:768px){.videoBanner-title.jsx-979562070 br.jsx-979562070{display:block;}}@media screen and (max-width:600px){.vimeo-wrapper.jsx-979562070 video.jsx-979562070{left:80%;}.videoBanner-text.jsx-979562070{top:-130px;}.videoBanner-title.jsx-979562070{font-size:35px;}.videoBanner-skills.jsx-979562070{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-979562070 li.jsx-979562070{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-979562070 p.jsx-979562070 span.jsx-979562070{display:none;}}@media screen and (max-width:400px){.videoBanner-text.jsx-979562070{top:-60px;height:80px;}.videoBanner-title.jsx-979562070{font-size:25px;}.videoBanner-skills.jsx-979562070 figure.jsx-979562070{margin-bottom:10px;}.videoBanner-skills.jsx-979562070 img.jsx-979562070{width:25px;height:25px;}.videoBanner-skills.jsx-979562070 h2.jsx-979562070{font-size:11px;}.videoBanner-skills.jsx-979562070 p.jsx-979562070{font-size:9px;}}@-webkit-keyframes translateBottomToTop-jsx-979562070{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes translateBottomToTop-jsx-979562070{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvQmFubmVyU2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVpQixBQUlzQyxBQUlLLEFBU1AsQUFhQyxBQVdNLEFBY0gsQUFTTCxBQUtHLEFBSUUsQUFrQkwsQUFLUyxBQWNULEFBS1MsQUFLUixBQU1JLEFBT0gsQUFNTSxBQU1MLEFBR0UsQUFHSSxBQUdBLEFBR0wsQUFLRyxBQU1ILEFBSUssQUFHSSxBQUdSLEFBSUksQUFHRCxBQU9hLEFBSUEsQUFJSCxTQXRENUIsQ0FqRndCLEFBMkJFLEFBbUJBLEFBK0NLLEFBV2YsQ0F2SkUsQUF1R04sQUE0QlosQUE4QmdCLENBcEpELEFBdUdDLENBaklwQixBQWlFQSxBQTZGSSxDQXZCQSxBQThDQSxDQWxJaUIsQUFrQkssQUFxREwsQUF5QmpCLEFBcUJBLEFBVUEsR0E5S00sQUFpQ0MsQ0F1RFUsQUFtQkssQUE0RHRCLEdBTkEsQ0FoRGtCLEFBMERsQixDQTFLTyxDQWlDQyxFQVhTLENBdUdyQixDQXBIVSxFQVJLLENBOENELEFBdUVFLENBcEZELEVBeEJMLENBOEVZLENBdkJBLEFBb0ZJLElBcEMxQixDQS9HZ0IsQUFTQSxBQXFDZSxFQXpCUixBQVlSLEFBb0ZLLFVBcEhMLEFBU0EsQUE2RUcsQ0FyREwsQUE4QkEsQUFvRlQsRUFMQSxHQXpCSixHQWhHc0IsQ0FhTCxBQThCTixDQS9EUyxBQVNDLEdBNkVELEdBdEJSLE1BOUJJLEVBK0JHLEVBaEVuQixBQW9CWSxDQVhJLEVBNkVVLEFBb0dSLEtBcktMLEFBYUMsSUFnSkksQUFJQSxDQTVLSixBQXlDZCxBQWNlLEFBMEhYLElBcktnQyxDQWFULENBMkMzQixBQW1CQSxHQWtGSSxBQUlBLENBNUtvQixDQXVESixDQXFCTixRQWVkLEVBZGMsS0FyQmEsQ0EvQkwsRUF4QnRCLEVBNkUrQixTQTdDWixLQVBuQixJQStCd0IsNkJBdkJBLDhCQXRCeEIsZ0JBbUVtQixFQTVDbkIsb0JBdUJjLFVBQ2lCLE1BcUJMLG9EQUMxQixtQ0FyQm1CLHNDQUNPLG9EQUMxQiIsImZpbGUiOiIvVXNlcnMvZGFuaWxvdmlhY2F2YXZpemFycmV0YS9EZXNrdG9wL2Ryb25lLXdlYi9jb21wb25lbnRzL0Jhbm5lclNlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFubmVyU2VydmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgIHZhciB2aWRlb0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9CYW5uZXItdGl0bGVcIilcbiAgICAgICAgICAgIHZpZGVvQmFubmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgICAgIHZhciB2aWRlb0Jhbm5lclNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9CYW5uZXItc2tpbGxzXCIpXG4gICAgICAgICAgICB2aWRlb0Jhbm5lclNraWxscy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgfVxuXG5cdGhhbmRsZURvd24gKCkge1xuXHRcdGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIFx0PGRpdiBjbGFzc05hbWU9XCJ2aWRlb0Jhbm5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlkZW9CYW5uZXItY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmltZW8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3hKQXduQ01ncUNnP2F1dG9wbGF5PTEmY29udHJvbHM9MCZsb29wPTEmcGxheWxpc3Q9eEpBd25DTWdxQ2dcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdmlkZW9CYW5uZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW9CYW5uZXItdGl0bGVcIj7Cv05lY2VzaXRhIG1vc3RyYXIgPGJyLz4gc3UgcHJveWVjdG8gZWZpY2llbnRlbWVudGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRmIGNvbnRhaW5lciB2aWRlb0Jhbm5lci1za2lsbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9yZXNwb25zaXZlLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRFU0FSUk9MTE8gV0VCPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUMOhZ2luYXMgd2ViIHByb2Zlc2lvbmFsZXMgeSDDum5pY2FzIHNvbiBudWVzdHJvIHNlcnZpY2lvIGNsYXZlLiA8c3Bhbj5EaXNwb25pYmxlIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcywgbGlzdG8gcGFyYSBTRU8gKEdvb2dsZSkuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9kcm9uZS5zdmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JTcOBR0VORVMgREUgRFJPTkVTPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJpbmRhbW9zIHNlcnZpY2lvcyBkZSBmb3RvZ3JhZsOtYSB5IHZpZGVvIGHDqXJlbyBjb24gZHJvbmVzLiA8c3Bhbj5DZXJ0aWZpY2Fkb3MgY29uIGxpY2VuY2lhIHBhcmEgY29uZHVjaXIgZHJvbmVzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcHJvZmlsZXMuc3ZnXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UE9SVEFGT0xJTzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlYSBudWVzdHJvcyDDumx0aW1vcyBwcm95ZWN0b3MgZGUgc2l0aW9zIHdlYiB5IHZpZGVvcyBhw6lyZW9zLiA8c3Bhbj7Dmm5hc2UgYSBudWVzdHJhIGxpc3RhIGRlIGNsaWVudGVzIHNhdGlzZmVjaG9zLjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaGFuZHNoYWtlLnN2Z1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNFUlZJQ0lPIEdSQVRVSVRPPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGUgbnVlc3RyYSBvZmVydGEgZGUgdHJhYmFqbyB5IHZpYWplIDxzcGFuPnBhcmEgb2J0ZW5lciBpbmZvcm1hY2nDs24gYWhvcmEgeSBvYnRlbmVyIG51ZXN0cm9zIHNlcnZpY2lvcyBncmF0dWl0b3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgICAgIC52aW1lby13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAudmltZW8td3JhcHBlciBpZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1Ni4yNXZ3OyAvKiBHaXZlbiBhIDE2OjkgYXNwZWN0IHJhdGlvLCA5LzE2KjEwMCA9IDU2LjI1ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTc3Ljc3dmg7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDE2LzkqMTAwID0gMTc3Ljc3ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUgYnIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC41cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBmaWd1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZpZ2E7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXNraWxscyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItdGl0bGUgYnIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLnZpbWVvLXdyYXBwZXIgdmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci10aXRsZSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgcCBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQmFubmVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0Jhbm5lci1za2lsbHMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9CYW5uZXItc2tpbGxzIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHRyYW5zbGF0ZUJvdHRvbVRvVG9wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyU2VydmljZXM7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/BannerServices.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BannerServices);

/***/ })

})
//# sourceMappingURL=index.js.d94c88ef81281d14131a.hot-update.js.map