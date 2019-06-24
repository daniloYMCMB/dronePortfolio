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

var _jsxFileName = "/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js";



 // import Instafeed from 'instafeed.js'

class Portafolio extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  componentDidMount() {// var feed = new Instafeed({
    // 	get: 'user',
    // 	userId: '2082061113',
    // 	accessToken: '2082061113.1677ed0.1fc0b170d58e49e389ad4a27a6064fbc',
    // 	target: 'instafeed',
    // 	sortBy: 'most-liked',
    // 	resolution: 'low_resolution',
    // 	template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>'
    // });
    // feed.run();
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
      className: "jsx-2085157460" + " " + "portafolio",
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
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
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
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.sanpiox.edu.pe/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
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
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.deliperuano.com/",
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
        background: "url(static/img/portafolio/deliperuano.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.pagadespues.pe",
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
        background: "url(static/img/portafolio/pagadespues.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.acuantoestaeldolar.com/",
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
        background: "url(static/img/portafolio/cambiodolar.png) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.clinicainternacional.com.pe/",
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
        background: "url(static/img/portafolio/clinicaInternacional.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.canalipe.tv/",
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
        background: "url(static/img/portafolio/canalipe.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.mifuturogr.com",
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
        background: "url(static/img/portafolio/mifuturo.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.marina.mil.pe",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
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
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.clubterrazas.com.pe/",
      target: "_blank",
      className: "jsx-2085157460",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-2085157460" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "portafolio-item-mascara",
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
      className: "jsx-2085157460" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2085157460" + " " + "elfsight-app-8a863662-90b2-482c-a0ee-88aa2c740771",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085157460",
      __self: this
    }, ".portafolio.jsx-2085157460{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:70px 0;box-sizing:border-box;}.portafolio-item.jsx-2085157460{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}.portafolio-item-mascara.jsx-2085157460{height:158px;overflow:hidden;position:relative;}.portafolio-item-img.jsx-2085157460{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}.portafolio.jsx-2085157460 .slick-dots.jsx-2085157460 li.jsx-2085157460 button.jsx-2085157460:before{background:green;}.slick-dots.jsx-2085157460 li.jsx-2085157460 button.jsx-2085157460:before{background;red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSWUsQUFHd0IsQUFRRCxBQVFKLEFBTUUsQUFlRSxBQUlQLFdBQUksRUF4QkUsRUFNTixBQW1CWCxFQWpDYyxBQTZCZCxDQXJDbUIsT0F1Qk4sSUFOTSxDQVJOLE1BUk8sQ0F1QkwsS0Fka0QsS0FRakUsSUFPbUIsSUF2QkgsY0F3Qk4sQ0F2QmEsUUF3QmQsUUFDRCxNQXhCUixDQXlCYSxZQUNNLENBbkJJLGlCQW9CVCxLQW5CZCxRQW9CdUIsc0JBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCJcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlQmxhY2snXG4vLyBpbXBvcnQgSW5zdGFmZWVkIGZyb20gJ2luc3RhZmVlZC5qcydcblxuY2xhc3MgUG9ydGFmb2xpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Ly8gdmFyIGZlZWQgPSBuZXcgSW5zdGFmZWVkKHtcblx0XHQvLyBcdGdldDogJ3VzZXInLFxuXHRcdC8vIFx0dXNlcklkOiAnMjA4MjA2MTExMycsXG5cdFx0Ly8gXHRhY2Nlc3NUb2tlbjogJzIwODIwNjExMTMuMTY3N2VkMC4xZmMwYjE3MGQ1OGU0OWUzODlhZDRhMjdhNjA2NGZiYycsXG5cdFx0Ly8gXHR0YXJnZXQ6ICdpbnN0YWZlZWQnLFxuXHRcdC8vIFx0c29ydEJ5OiAnbW9zdC1saWtlZCcsXG5cdFx0Ly8gXHRyZXNvbHV0aW9uOiAnbG93X3Jlc29sdXRpb24nLFxuXHRcdC8vIFx0dGVtcGxhdGU6ICc8bGk+PGEgaHJlZj1cInt7bGlua319XCIgdGFyZ2V0PVwiX25ld1wiPjxpbWcgc3JjPVwie3tpbWFnZX19XCIgLz48L2E+PC9saT4nXG5cdFx0Ly8gfSk7XG5cdFx0Ly8gZmVlZC5ydW4oKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB7XG5cdFx0XHRkb3RzOiB0cnVlLFxuXHRcdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdFx0c3BlZWQ6IDUwMCxcblx0XHRcdHNsaWRlc1RvU2hvdzogMyxcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAyLFxuXHRcdFx0YXV0b3BsYXk6IGZhbHNlLFxuXHRcdFx0YXV0b3BsYXlTcGVlZDogNTAwMCxcblx0XHRcdHJlc3BvbnNpdmU6IFtcblx0XHQgICAge1xuXHRcdCAgICAgIGJyZWFrcG9pbnQ6IDEwNjAsXG5cdFx0ICAgICAgc2V0dGluZ3M6IHtcblx0XHQgICAgICAgIHNsaWRlc1RvU2hvdzogMixcblx0XHQgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdCAgICAgICAgaW5maW5pdGU6IHRydWUsXG5cdFx0ICAgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICB7XG5cdFx0ICAgICAgYnJlYWtwb2ludDogNjQwLFxuXHRcdCAgICAgIHNldHRpbmdzOiB7XG5cdFx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG5cdFx0ICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuXHRcdCAgICAgIH1cblx0XHQgICAgfVxuXHRcdCAgXVxuXHQgICAgfTtcbiAgICByZXR1cm4gKFxuICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpb1wiPlxuXG5cdFx0XHQ8VGl0bGUgdGl0bGU9XCJOdWVzdHJvIHRyYWJham8sIGVzIG51ZXN0cmEgcGFzacOzbi5cIiBzdWJ0aXRsZT1cIlZlciBwcm95ZWN0b3NcIiBjbGFzc1N1YnRpdGxlPVwid2hpdGVcIiBzdWJ0aXRsZVN0cm9uZz1cInJlY2llbnRlc1wiPjwvVGl0bGU+XG5cblx0XHRcdDxTbGlkZXIgey4uLnNldHRpbmdzfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LnByb2ZlYWx0b3F1ZS5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vcHJvZmUuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly93d3cuc2FucGlveC5lZHUucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vc2FucGlveC5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPiBcblxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5kZWxpcGVydWFuby5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vZGVsaXBlcnVhbm8ucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhZ2FkZXNwdWVzLnBlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vcGFnYWRlc3B1ZXMuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT4gIFxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuYWN1YW50b2VzdGFlbGRvbGFyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9jYW1iaW9kb2xhci5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xpbmljYWludGVybmFjaW9uYWwuY29tLnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKHN0YXRpYy9pbWcvcG9ydGFmb2xpby9jbGluaWNhSW50ZXJuYWNpb25hbC5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2FuYWxpcGUudHYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vY2FuYWxpcGUuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1pZnV0dXJvZ3IuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL21pZnV0dXJvLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXJpbmEubWlsLnBlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vbWFyaW5hLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmNsdWJ0ZXJyYXphcy5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL3RlcnJhemFzLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L1NsaWRlcj5cblxuXHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwiZWxmc2lnaHQtYXBwLThhODYzNjYyLTkwYjItNDgyYy1hMGVlLTg4YWEyYzc0MDc3MVwiPjwvZGl2PlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5wb3J0YWZvbGlvIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luOiA2MHB4IDAgMCAwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0cGFkZGluZzogNzBweCAwO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtIHtcblx0XHRcdFx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0XHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvTWFjYm9vay5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLW1hc2NhcmEge1xuXHRcdFx0XHRcdGhlaWdodDogMTU4cHg7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLWltZyB7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHdpZHRoOiA3NiU7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTQzcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDsgcmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cbiAgIFx0XHQ8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhZm9saW87XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ })

})
//# sourceMappingURL=index.js.bae0556445f85faff3cb.hot-update.js.map