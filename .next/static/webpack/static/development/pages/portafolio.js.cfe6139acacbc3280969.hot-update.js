webpackHotUpdate("static/development/pages/portafolio.js",{

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
  constructor(props) {
    super(props);
    this.state = {
      loading: true // this.fetchInstagrama()

    };
  }

  async componentDidMount() {// await this.fetchInstagrama()
    // setTimeout(function(){ 
    // 	var myElement = `<div class="elfsight-app-8a863662-90b2-482c-a0ee-88aa2c740771"></div>`
    // 	var insta = document.getElementById("#insta")
    // 	insta.appendChild(myElement)
    // 	console.log(insta)
    // }, 500);
  }

  async componentWillUnmount() {} // await this.fetchInstagrama()
  // async fetchInstagrama () {
  // 	const { data } = await axios.get("https://apps.elfsight.com/p/platform.js")
  // }


  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
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
      className: "jsx-3808336935" + " " + "portafolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "container web",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TitleBlack__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Nuestro trabajo, es nuestra pasi\xF3n.",
      classTitle: "white",
      subtitle: "Proyectos Web",
      classSubtitle: "white mb20",
      subtitleStrong: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.profealtoque.com.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/profe.jpg?alt=media&token=e02ac6a9-5665-4e85-98ce-c272b0de9693) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.sanpiox.edu.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/sanpiox.jpg?alt=media&token=55944382-8c24-49bb-b7e3-2d1384fb72d3) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.deliperuano.com/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/deliperuano.png?alt=media&token=42939ff5-1a28-4670-8994-8e50d7f1f4b2) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.pagadespues.pe",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/pagadespues.jpg?alt=media&token=1102af10-f293-4492-9c94-d84a64016c74) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.acuantoestaeldolar.com/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/cambiodolar.png?alt=media&token=46f05c5e-49fb-4e1f-a415-2d42de2cc066) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.clinicainternacional.com.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/clinicaInternacional.jpg?alt=media&token=c367036f-5b56-43b9-bf3c-aaf74ad08b95) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.canalipe.tv/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/canalipe.jpg?alt=media&token=a6774d89-f051-4614-bf8c-ad43b0c2d536) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.mifuturogr.com",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/mifuturo.jpg?alt=media&token=b6a77482-bbce-47cb-bf34-307c7f156d64) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.marina.mil.pe",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/marina.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.clubterrazas.com.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(static/img/portafolio/terrazas.jpg) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3808336935",
      __self: this
    }, ".portafolio{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:60px 0 20px 0;box-sizing:border-box;}.portafolio .web{overflow:hidden;}.portafolio .slick-next:before,.portafolio .slick-prev:before{font-size:30px;}.portafolio .slick-next{right:10px;z-index:9;}.portafolio .slick-prev{left:0px;z-index:9;}.portafolio-item{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}.portafolio-item-mascara{height:158px;overflow:hidden;position:relative;}.portafolio-item-img{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}.portafolio .slick-dots li button:before{background:green;}.slick-dots li button:before{background;red;}.instagramWidget{position:relative;}.instagramWidget:before{content:\"\";position:absolute;bottom:0px;right:0;width:100%;height:44px;background:#00BCD4;z-index:999999;}.instagramWidget:after{content:\"\";position:absolute;top:10px;right:0;left:0;width:250px;height:60px;background:#00bcd4;z-index:999999;margin:auto;display:none;}.eapps-instagram-feed-title{font-size:17px !important;font-family:Poppins;color:white;padding:40px 20px;}.eapps-instagram-feed-container{position:relative;z-index:999999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SThCLEFBR3lCLEFBT0YsQUFJRCxBQUdKLEFBSUYsQUFJUSxBQVFKLEFBTUUsQUFlRSxBQUlQLEFBSVEsQUFHUCxBQVVBLEFBY2UsQUFNUixTQXpFUixFQUpBLEFBd0NJLEFBUUksQUFVQSxFQTFDRixFQW5CakIsQUF5QlcsQUFtQlgsQ0FoREEsQ0FlYyxBQTZCZCxDQW5EbUIsQUEyRG5CLEFBaUNnQixDQXpFaEIsRUFKQSxJQXNCYSxDQWlEUSxHQXZERixBQWdDUCxBQVVGLENBbERHLEdBc0ViLEdBNUZvQixDQXFDTCxDQW9DTixFQVZBLEVBeEN3RCxJQW1EekQsQUFZSyxDQXZEYixDQWlDWSxHQTFCTyxFQXFDTixFQTFFVSxHQXNGSixDQXRCTixNQVdBLElBckNILEVBMkJVLEtBc0JwQixDQXRGdUIsQUEyRUgsQ0FyQ1gsUUFDRCxJQTBCUSxHQXpCSCxHQW9DRyxHQTNFaEIsTUF3Q21CLEFBeUJuQixDQTVDdUIsS0F1RFYsWUFuQ0MsQUFvQ0EsS0F2RGQsUUFvQnVCLEFBb0N2QixzQkFuQ0EiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9Qb3J0YWZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVCbGFjaydcbi8vIGltcG9ydCBJbnN0YWZlZWQgZnJvbSAnaW5zdGFmZWVkLmpzJ1xuXG5jbGFzcyBQb3J0YWZvbGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH1cblx0XHQvLyB0aGlzLmZldGNoSW5zdGFncmFtYSgpXG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cdFx0Ly8gYXdhaXQgdGhpcy5mZXRjaEluc3RhZ3JhbWEoKVxuXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHQvLyBcdHZhciBteUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cImVsZnNpZ2h0LWFwcC04YTg2MzY2Mi05MGIyLTQ4MmMtYTBlZS04OGFhMmM3NDA3NzFcIj48L2Rpdj5gXG5cdFx0Ly8gXHR2YXIgaW5zdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiNpbnN0YVwiKVxuXHRcdC8vIFx0aW5zdGEuYXBwZW5kQ2hpbGQobXlFbGVtZW50KVxuXHRcdC8vIFx0Y29uc29sZS5sb2coaW5zdGEpXG5cdFx0Ly8gfSwgNTAwKTtcblx0XHRcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblx0XHQvLyBhd2FpdCB0aGlzLmZldGNoSW5zdGFncmFtYSgpXG5cdH1cblx0Ly8gYXN5bmMgZmV0Y2hJbnN0YWdyYW1hICgpIHtcblx0Ly8gXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vYXBwcy5lbGZzaWdodC5jb20vcC9wbGF0Zm9ybS5qc1wiKVxuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHtcblx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0XHRhcnJvd3M6IHRydWUsXG5cdFx0XHRzcGVlZDogNTAwLFxuXHRcdFx0c2xpZGVzVG9TaG93OiAzLFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDIsXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG5cdFx0XHRyZXNwb25zaXZlOiBbXG5cdFx0ICAgIHtcblx0XHQgICAgICBicmVha3BvaW50OiAxMDYwLFxuXHRcdCAgICAgIHNldHRpbmdzOiB7XG5cdFx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG5cdFx0ICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcblx0XHQgICAgICAgIGluZmluaXRlOiB0cnVlLFxuXHRcdCAgICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAge1xuXHRcdCAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcblx0XHQgICAgICBzZXR0aW5nczoge1xuXHRcdCAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuXHRcdCAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcblx0XHQgICAgICB9XG5cdFx0ICAgIH1cblx0XHQgIF1cblx0ICAgIH07XG4gICAgXHRyZXR1cm4gKFxuXHQgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvXCI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgd2ViXCI+XG5cdFx0XHRcdFx0PFRpdGxlIHRpdGxlPVwiTnVlc3RybyB0cmFiYWpvLCBlcyBudWVzdHJhIHBhc2nDs24uXCIgY2xhc3NUaXRsZT1cIndoaXRlXCIgc3VidGl0bGU9XCJQcm95ZWN0b3MgV2ViXCIgY2xhc3NTdWJ0aXRsZT1cIndoaXRlIG1iMjBcIiBzdWJ0aXRsZVN0cm9uZz1cIlwiPjwvVGl0bGU+XG5cdFx0XHRcdFx0PFNsaWRlciB7Li4uc2V0dGluZ3N9IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LnByb2ZlYWx0b3F1ZS5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9wcm9mZS5qcGc/YWx0PW1lZGlhJnRva2VuPWUwMmFjNmE5LTU2NjUtNGU4NS05OGNlLWMyNzJiMGRlOTY5MykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5zYW5waW94LmVkdS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvZGFuaWxvdmlhY2F2YS00MGRhZi5hcHBzcG90LmNvbS9vL3NhbnBpb3guanBnP2FsdD1tZWRpYSZ0b2tlbj01NTk0NDM4Mi04YzI0LTQ5YmItYjdlMy0yZDEzODRmYjcyZDMpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPiBcblxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly93d3cuZGVsaXBlcnVhbm8uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9kYW5pbG92aWFjYXZhLTQwZGFmLmFwcHNwb3QuY29tL28vZGVsaXBlcnVhbm8ucG5nP2FsdD1tZWRpYSZ0b2tlbj00MjkzOWZmNS0xYTI4LTQ2NzAtODk5NC04ZTUwZDdmMWY0YjIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhZ2FkZXNwdWVzLnBlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9wYWdhZGVzcHVlcy5qcGc/YWx0PW1lZGlhJnRva2VuPTExMDJhZjEwLWYyOTMtNDQ5Mi05Yzk0LWQ4NGE2NDAxNmM3NCkgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+ICBcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5hY3VhbnRvZXN0YWVsZG9sYXIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9kYW5pbG92aWFjYXZhLTQwZGFmLmFwcHNwb3QuY29tL28vY2FtYmlvZG9sYXIucG5nP2FsdD1tZWRpYSZ0b2tlbj00NmYwNWM1ZS00OWZiLTRlMWYtYTQxNS0yZDQyZGUyY2MwNjYpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmNsaW5pY2FpbnRlcm5hY2lvbmFsLmNvbS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9jbGluaWNhSW50ZXJuYWNpb25hbC5qcGc/YWx0PW1lZGlhJnRva2VuPWMzNjcwMzZmLTViNTYtNDNiOS1iZjNjLWFhZjc0YWQwOGI5NSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2FuYWxpcGUudHYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9jYW5hbGlwZS5qcGc/YWx0PW1lZGlhJnRva2VuPWE2Nzc0ZDg5LWYwNTEtNDYxNC1iZjhjLWFkNDNiMGMyZDUzNikgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubWlmdXR1cm9nci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9taWZ1dHVyby5qcGc/YWx0PW1lZGlhJnRva2VuPWI2YTc3NDgyLWJiY2UtNDdjYi1iZjM0LTMwN2M3ZjE1NmQ2NCkgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaW5hLm1pbC5wZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoc3RhdGljL2ltZy9wb3J0YWZvbGlvL21hcmluYS5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly93d3cuY2x1YnRlcnJhemFzLmNvbS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChzdGF0aWMvaW1nL3BvcnRhZm9saW8vdGVycmF6YXMuanBnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L1NsaWRlcj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD1cInRydWVcIj57YFxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdG1hcmdpbjogNjBweCAwIDAgMDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA2MHB4IDAgMjBweCAwO1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnBvcnRhZm9saW8gLndlYiB7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucG9ydGFmb2xpbyAuc2xpY2stbmV4dDpiZWZvcmUsXG5cdFx0XHRcdFx0LnBvcnRhZm9saW8gLnNsaWNrLXByZXY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnBvcnRhZm9saW8gLnNsaWNrLW5leHQge1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5O1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0LnBvcnRhZm9saW8gLnNsaWNrLXByZXYge1xuXHRcdFx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRcdFx0ei1pbmRleDogOTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnBvcnRhZm9saW8taXRlbSB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTgwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvTWFjYm9vay5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLW1hc2NhcmEge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNThweDtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvcnRhZm9saW8taXRlbS1pbWcge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDc2JTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNDNweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvcnRhZm9saW8gLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBncmVlbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ7IHJlZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaW5zdGFncmFtV2lkZ2V0IHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdC5pbnN0YWdyYW1XaWRnZXQ6YmVmb3JlIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRib3R0b206IDBweDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ0cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDBCQ0Q0O1xuXHRcdFx0XHRcdFx0ei1pbmRleDogOTk5OTk5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaW5zdGFncmFtV2lkZ2V0OmFmdGVyIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDBiY2Q0O1xuXHRcdFx0XHRcdFx0ei1pbmRleDogOTk5OTk5O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9IFxuXG5cdFx0XHRcdFx0LmVhcHBzLWluc3RhZ3JhbS1mZWVkLXRpdGxlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBvcHBpbnM7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0MHB4IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5lYXBwcy1pbnN0YWdyYW0tZmVlZC1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogOTk5OTk5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFmb2xpbztcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ })

})
//# sourceMappingURL=portafolio.js.cfe6139acacbc3280969.hot-update.js.map