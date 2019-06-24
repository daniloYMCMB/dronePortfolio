webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TitleBlack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TitleBlack */ "./components/TitleBlack.js");
/* harmony import */ var instafeed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! instafeed.js */ "./node_modules/instafeed.js/instafeed.js");
/* harmony import */ var instafeed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(instafeed_js__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js";






class Portafolio extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  componentDidMount() {
    var feed = new instafeed_js__WEBPACK_IMPORTED_MODULE_5___default.a({
      get: 'user',
      tagName: 'instafeed',
      userId: '2082061113',
      accessToken: '2082061113.1677ed0.1fc0b170d58e49e389ad4a27a6064fbc',
      resolution: 'low_resolution',
      template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>'
    });
    feed.run();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: false,
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
      className: "jsx-4258113250" + " " + "portafolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TitleBlack__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Nuestro trabajo, es nuestra pasi\xF3n.",
      subtitle: "Ver proyectos",
      classSubtitle: "white",
      subtitleStrong: "recientes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.profealtoque.com.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/profe.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.sanpiox.edu.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/sanpiox.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.deliperuano.com/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/deliperuano.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.pagadespues.pe",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/pagadespues.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.acuantoestaeldolar.com/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/cambiodolar.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.clinicainternacional.com.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/clinicaInternacional.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.canalipe.tv/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/canalipe.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.mifuturogr.com",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/mifuturo.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.marina.mil.pe",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/marina.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.clubterrazas.com.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/terrazas.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-4258113250" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "instafeed",
      className: "jsx-4258113250" + " " + "instafeed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4258113250",
      __self: this
    }, ".portafolio.jsx-4258113250{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:70px 0;box-sizing:border-box;}.portafolio-item.jsx-4258113250{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}.portafolio-item-mascara.jsx-4258113250{height:158px;overflow:hidden;position:relative;}.portafolio-item-img.jsx-4258113250{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}.portafolio.jsx-4258113250 .slick-dots.jsx-4258113250 li.jsx-4258113250 button.jsx-4258113250:before{background:green;}.slick-dots.jsx-4258113250 li.jsx-4258113250 button.jsx-4258113250:before{background;red;}.instafeed.jsx-4258113250{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSWUsQUFHd0IsQUFRRCxBQVFKLEFBTUUsQUFlRSxBQUlQLEFBSUcsV0FKQyxFQXhCRSxFQU1OLEFBbUJYLEVBakNjLEFBNkJkLENBckNtQixPQXVCTixJQU5NLENBUk4sTUFSTyxDQXVCTCxLQWRrRCxLQVFqRSxJQU9tQixJQXZCSCxjQXdCTixDQXZCYSxJQTBDUCxJQWxCUCxRQUNELE1BeEJSLENBeUJhLFlBQ00sQ0FuQkksaUJBb0JULEtBbkJkLEdBa0NpQixLQWRNLFdBZXZCLFdBZEEiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9Qb3J0YWZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVCbGFjaydcbmltcG9ydCBJbnN0YWZlZWQgZnJvbSAnaW5zdGFmZWVkLmpzJ1xuXG5jbGFzcyBQb3J0YWZvbGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR2YXIgZmVlZCA9IG5ldyBJbnN0YWZlZWQoe1xuXHRcdFx0Z2V0OiAndXNlcicsXG5cdFx0XHR0YWdOYW1lOiAnaW5zdGFmZWVkJyxcblx0XHRcdHVzZXJJZDogJzIwODIwNjExMTMnLFxuXHRcdFx0YWNjZXNzVG9rZW46ICcyMDgyMDYxMTEzLjE2NzdlZDAuMWZjMGIxNzBkNThlNDllMzg5YWQ0YTI3YTYwNjRmYmMnLFxuXHRcdFx0cmVzb2x1dGlvbjogJ2xvd19yZXNvbHV0aW9uJyxcblx0XHRcdHRlbXBsYXRlOiAnPGxpPjxhIGhyZWY9XCJ7e2xpbmt9fVwiIHRhcmdldD1cIl9uZXdcIj48aW1nIHNyYz1cInt7aW1hZ2V9fVwiIC8+PC9hPjwvbGk+J1xuXHRcdH0pO1xuXHRcdGZlZWQucnVuKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNldHRpbmdzID0ge1xuXHRcdFx0ZG90czogdHJ1ZSxcblx0XHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdFx0YXJyb3dzOiBmYWxzZSxcblx0XHRcdHNwZWVkOiA1MDAsXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDMsXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMixcblx0XHRcdGF1dG9wbGF5OiBmYWxzZSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG5cdFx0XHRyZXNwb25zaXZlOiBbXG5cdFx0ICAgIHtcblx0XHQgICAgICBicmVha3BvaW50OiAxMDYwLFxuXHRcdCAgICAgIHNldHRpbmdzOiB7XG5cdFx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG5cdFx0ICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcblx0XHQgICAgICAgIGluZmluaXRlOiB0cnVlLFxuXHRcdCAgICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAge1xuXHRcdCAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcblx0XHQgICAgICBzZXR0aW5nczoge1xuXHRcdCAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuXHRcdCAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcblx0XHQgICAgICB9XG5cdFx0ICAgIH1cblx0XHQgIF1cblx0ICAgIH07XG4gICAgcmV0dXJuIChcbiAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW9cIj5cblxuXHRcdFx0PFRpdGxlIHRpdGxlPVwiTnVlc3RybyB0cmFiYWpvLCBlcyBudWVzdHJhIHBhc2nDs24uXCIgc3VidGl0bGU9XCJWZXIgcHJveWVjdG9zXCIgY2xhc3NTdWJ0aXRsZT1cIndoaXRlXCIgc3VidGl0bGVTdHJvbmc9XCJyZWNpZW50ZXNcIj48L1RpdGxlPlxuXG5cdFx0XHQ8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5wcm9mZWFsdG9xdWUuY29tLnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL3Byb2ZlLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LnNhbnBpb3guZWR1LnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL3NhbnBpb3guanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT4gXG5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly93d3cuZGVsaXBlcnVhbm8uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL2RlbGlwZXJ1YW5vLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5wYWdhZGVzcHVlcy5wZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL3BhZ2FkZXNwdWVzLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+ICBcblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFjdWFudG9lc3RhZWxkb2xhci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vY2FtYmlvZG9sYXIucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmNsaW5pY2FpbnRlcm5hY2lvbmFsLmNvbS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vY2xpbmljYUludGVybmFjaW9uYWwuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmNhbmFsaXBlLnR2L1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL2NhbmFsaXBlLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5taWZ1dHVyb2dyLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9taWZ1dHVyby5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaW5hLm1pbC5wZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL21hcmluYS5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5jbHVidGVycmF6YXMuY29tLnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby90ZXJyYXphcy5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9TbGlkZXI+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJpbnN0YWZlZWRcIiBjbGFzc05hbWU9XCJpbnN0YWZlZWRcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5wb3J0YWZvbGlvIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luOiA2MHB4IDAgMCAwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0cGFkZGluZzogNzBweCAwO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtIHtcblx0XHRcdFx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0XHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvTWFjYm9vay5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLW1hc2NhcmEge1xuXHRcdFx0XHRcdGhlaWdodDogMTU4cHg7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLWltZyB7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHdpZHRoOiA3NiU7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTQzcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDsgcmVkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lmluc3RhZmVlZCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogNjBweDtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXG4gICBcdFx0PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWZvbGlvO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ })

})
//# sourceMappingURL=index.js.f71a14a589e8e447a067.hot-update.js.map