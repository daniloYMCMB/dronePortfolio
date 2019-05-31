webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ReactFullpageDesktop.js":
/*!********************************************!*\
  !*** ./components/ReactFullpageDesktop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
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
        lineNumber: 22
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VideoBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      id: "section2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderColor__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "secondSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: "./static/img/paso1.svg",
      footerFirst: "BASIC",
      footerStrong: "30 minutos de grabaci\xF3n",
      footerEnd: "video de 30 segundos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title2: "\xBFC\xF3mo prefieres que te vean?",
      subtitle: "Empieza a ganar m\xE1s clientes",
      subtitleStrong: "ahora",
      style: "margin-top: -70px;",
      image: "./static/img/paso2.svg",
      footerFirst: "PRO",
      footerStrong: "60 minutos de grabaci\xF3n",
      footerEnd: "video de 60 segundos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paso3__WEBPACK_IMPORTED_MODULE_5__["default"], {
      image: "./static/img/paso3.svg",
      footerFirst: "BUSINESS",
      footerStrong: "180 minutos de grabaci\xF3n",
      footerEnd: "video de 180 segundos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
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

/***/ })

})
//# sourceMappingURL=index.js.49825bb9a9867cb85ea8.hot-update.js.map