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
      userId: '2082061113',
      accessToken: '2082061113.1677ed0.1fc0b170d58e49e389ad4a27a6064fbc',
      target: 'instafeed',
      sortBy: 'most-liked',
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
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TitleBlack__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Nuestro trabajo, es nuestra pasi\xF3n.",
      subtitle: "Ver proyectos",
      classSubtitle: "white",
      subtitleStrong: "recientes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.profealtoque.com.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
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
        lineNumber: 57
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.sanpiox.edu.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
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
        lineNumber: 64
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.deliperuano.com/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
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
        lineNumber: 72
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.pagadespues.pe",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
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
        lineNumber: 79
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.acuantoestaeldolar.com/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
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
        lineNumber: 86
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.clinicainternacional.com.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
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
        lineNumber: 93
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.canalipe.tv/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
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
        lineNumber: 100
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.mifuturogr.com",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
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
        lineNumber: 107
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.marina.mil.pe",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
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
        lineNumber: 114
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.clubterrazas.com.pe/",
      target: "_blank",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-4258113250" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
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
        lineNumber: 121
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-4258113250" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "instafeed",
      className: "jsx-4258113250" + " " + "instafeed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      class: "elfsight-app-8a863662-90b2-482c-a0ee-88aa2c740771",
      className: "jsx-4258113250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4258113250",
      __self: this
    }, ".portafolio.jsx-4258113250{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:70px 0;box-sizing:border-box;}.portafolio-item.jsx-4258113250{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}.portafolio-item-mascara.jsx-4258113250{height:158px;overflow:hidden;position:relative;}.portafolio-item-img.jsx-4258113250{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}.portafolio.jsx-4258113250 .slick-dots.jsx-4258113250 li.jsx-4258113250 button.jsx-4258113250:before{background:green;}.slick-dots.jsx-4258113250 li.jsx-4258113250 button.jsx-4258113250:before{background;red;}.instafeed.jsx-4258113250{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSWUsQUFHd0IsQUFRRCxBQVFKLEFBTUUsQUFlRSxBQUlQLEFBSUcsV0FKQyxFQXhCRSxFQU1OLEFBbUJYLEVBakNjLEFBNkJkLENBckNtQixPQXVCTixJQU5NLENBUk4sTUFSTyxDQXVCTCxLQWRrRCxLQVFqRSxJQU9tQixJQXZCSCxjQXdCTixDQXZCYSxJQTBDUCxJQWxCUCxRQUNELE1BeEJSLENBeUJhLFlBQ00sQ0FuQkksaUJBb0JULEtBbkJkLEdBa0NpQixLQWRNLFdBZXZCLFdBZEEiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9Qb3J0YWZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVCbGFjaydcbmltcG9ydCBJbnN0YWZlZWQgZnJvbSAnaW5zdGFmZWVkLmpzJ1xuXG5jbGFzcyBQb3J0YWZvbGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR2YXIgZmVlZCA9IG5ldyBJbnN0YWZlZWQoe1xuXHRcdFx0Z2V0OiAndXNlcicsXG5cdFx0XHR1c2VySWQ6ICcyMDgyMDYxMTEzJyxcblx0XHRcdGFjY2Vzc1Rva2VuOiAnMjA4MjA2MTExMy4xNjc3ZWQwLjFmYzBiMTcwZDU4ZTQ5ZTM4OWFkNGEyN2E2MDY0ZmJjJyxcblx0XHRcdHRhcmdldDogJ2luc3RhZmVlZCcsXG5cdFx0XHRzb3J0Qnk6ICdtb3N0LWxpa2VkJyxcblx0XHRcdHJlc29sdXRpb246ICdsb3dfcmVzb2x1dGlvbicsXG5cdFx0XHR0ZW1wbGF0ZTogJzxsaT48YSBocmVmPVwie3tsaW5rfX1cIiB0YXJnZXQ9XCJfbmV3XCI+PGltZyBzcmM9XCJ7e2ltYWdlfX1cIiAvPjwvYT48L2xpPidcblx0XHR9KTtcblx0XHRmZWVkLnJ1bigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHtcblx0XHRcdGRvdHM6IHRydWUsXG5cdFx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRcdGFycm93czogZmFsc2UsXG5cdFx0XHRzcGVlZDogNTAwLFxuXHRcdFx0c2xpZGVzVG9TaG93OiAzLFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDIsXG5cdFx0XHRhdXRvcGxheTogZmFsc2UsXG5cdFx0XHRhdXRvcGxheVNwZWVkOiA1MDAwLFxuXHRcdFx0cmVzcG9uc2l2ZTogW1xuXHRcdCAgICB7XG5cdFx0ICAgICAgYnJlYWtwb2ludDogMTA2MCxcblx0XHQgICAgICBzZXR0aW5nczoge1xuXHRcdCAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuXHRcdCAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0ICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcblx0XHQgICAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHtcblx0XHQgICAgICBicmVha3BvaW50OiA2NDAsXG5cdFx0ICAgICAgc2V0dGluZ3M6IHtcblx0XHQgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcblx0XHQgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG5cdFx0ICAgICAgfVxuXHRcdCAgICB9XG5cdFx0ICBdXG5cdCAgICB9O1xuICAgIHJldHVybiAoXG4gICBcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvXCI+XG5cblx0XHRcdDxUaXRsZSB0aXRsZT1cIk51ZXN0cm8gdHJhYmFqbywgZXMgbnVlc3RyYSBwYXNpw7NuLlwiIHN1YnRpdGxlPVwiVmVyIHByb3llY3Rvc1wiIGNsYXNzU3VidGl0bGU9XCJ3aGl0ZVwiIHN1YnRpdGxlU3Ryb25nPVwicmVjaWVudGVzXCI+PC9UaXRsZT5cblxuXHRcdFx0PFNsaWRlciB7Li4uc2V0dGluZ3N9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cucHJvZmVhbHRvcXVlLmNvbS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9wcm9mZS5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5zYW5waW94LmVkdS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9zYW5waW94LmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+IFxuXG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmRlbGlwZXJ1YW5vLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9kZWxpcGVydWFuby5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cucGFnYWRlc3B1ZXMucGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9wYWdhZGVzcHVlcy5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPiAgXG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5hY3VhbnRvZXN0YWVsZG9sYXIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL2NhbWJpb2RvbGFyLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5jbGluaWNhaW50ZXJuYWNpb25hbC5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL2NsaW5pY2FJbnRlcm5hY2lvbmFsLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5jYW5hbGlwZS50di9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9jYW5hbGlwZS5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubWlmdXR1cm9nci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vbWlmdXR1cm8uanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcmluYS5taWwucGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9tYXJpbmEuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly93d3cuY2x1YnRlcnJhemFzLmNvbS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vdGVycmF6YXMuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvU2xpZGVyPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGlkPVwiaW5zdGFmZWVkXCIgY2xhc3NOYW1lPVwiaW5zdGFmZWVkXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0IDxkaXYgY2xhc3M9XCJlbGZzaWdodC1hcHAtOGE4NjM2NjItOTBiMi00ODJjLWEwZWUtODhhYTJjNzQwNzcxXCI+PC9kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LnBvcnRhZm9saW8ge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDYwcHggMCAwIDA7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwQkNENDtcblx0XHRcdFx0XHRwYWRkaW5nOiA3MHB4IDA7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3J0YWZvbGlvLWl0ZW0ge1xuXHRcdFx0XHRcdG1hcmdpbjogMTBweCBhdXRvO1xuXHRcdFx0XHRcdGhlaWdodDogMTgwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9NYWNib29rLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNThweDtcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3J0YWZvbGlvLWl0ZW0taW1nIHtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0d2lkdGg6IDc2JTtcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHRvcDogMTJweDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNDNweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvcnRhZm9saW8gLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogZ3JlZW47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOyByZWQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW5zdGFmZWVkIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA2MHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cbiAgIFx0XHQ8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhZm9saW87XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ })

})
//# sourceMappingURL=index.js.53ea8f6f1e1114daec58.hot-update.js.map