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
      id: "portafolio",
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
      href: "https://www.clinicainternacional.com.pe/",
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
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/clinicaInternacional.jpg?alt=media&token=c367036f-5b56-43b9-bf3c-aaf74ad08b95) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.canalipe.tv/",
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
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/canalipe.jpg?alt=media&token=a6774d89-f051-4614-bf8c-ad43b0c2d536) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.mifuturogr.com",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
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
        lineNumber: 84
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.marina.mil.pe",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/marina.jpg?alt=media&token=9f68e122-ad8c-4275-8986-88d75c0a05b4) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.profealtoque.com.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
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
        lineNumber: 98
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.sanpiox.edu.pe/",
      target: "_blank",
      className: "jsx-3808336935",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
      className: "jsx-3808336935" + " " + "portafolio-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3808336935" + " " + "portafolio-item-mascara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
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
        lineNumber: 105
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "http://www.deliperuano.com/",
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
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/deliperuano.png?alt=media&token=42939ff5-1a28-4670-8994-8e50d7f1f4b2) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.pagadespues.pe",
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
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/pagadespues.jpg?alt=media&token=1102af10-f293-4492-9c94-d84a64016c74) center center no-repeat",
        backgroundSize: 'cover'
      },
      className: "jsx-3808336935" + " " + "portafolio-item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "https://www.acuantoestaeldolar.com/",
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
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/cambiodolar.png?alt=media&token=46f05c5e-49fb-4e1f-a415-2d42de2cc066) center center no-repeat",
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
        background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/terrazas.jpg?alt=media&token=94c03751-ab06-4e2e-89fd-33efabce4117) center center no-repeat",
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
    }, ".portafolio{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:60px 0 20px 0;box-sizing:border-box;}.portafolio .web{overflow:hidden;}.portafolio .slick-next:before,.portafolio .slick-prev:before{font-size:30px;}.portafolio .slick-next{right:10px;z-index:9;}.portafolio .slick-prev{left:0px;z-index:9;}.portafolio-item{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}.portafolio-item-mascara{height:158px;overflow:hidden;position:relative;}.portafolio-item-img{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}.portafolio .slick-dots li button:before{background:green;}.slick-dots li button:before{background;red;}.instagramWidget{position:relative;}.instagramWidget:before{content:\"\";position:absolute;bottom:0px;right:0;width:100%;height:44px;background:#00BCD4;z-index:999999;}.instagramWidget:after{content:\"\";position:absolute;top:10px;right:0;left:0;width:250px;height:60px;background:#00bcd4;z-index:999999;margin:auto;display:none;}.eapps-instagram-feed-title{font-size:17px !important;font-family:Poppins;color:white;padding:40px 20px;}.eapps-instagram-feed-container{position:relative;z-index:999999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL0Rlc2t0b3AvZHJvbmUtd2ViL2NvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SThCLEFBR3lCLEFBT0YsQUFJRCxBQUdKLEFBSUYsQUFJUSxBQVFKLEFBTUUsQUFlRSxBQUlQLEFBSVEsQUFHUCxBQVVBLEFBY2UsQUFNUixTQXpFUixFQUpBLEFBd0NJLEFBUUksQUFVQSxFQTFDRixFQW5CakIsQUF5QlcsQUFtQlgsQ0FoREEsQ0FlYyxBQTZCZCxDQW5EbUIsQUEyRG5CLEFBaUNnQixDQXpFaEIsRUFKQSxJQXNCYSxDQWlEUSxHQXZERixBQWdDUCxBQVVGLENBbERHLEdBc0ViLEdBNUZvQixDQXFDTCxDQW9DTixFQVZBLEVBeEN3RCxJQW1EekQsQUFZSyxDQXZEYixDQWlDWSxHQTFCTyxFQXFDTixFQTFFVSxHQXNGSixDQXRCTixNQVdBLElBckNILEVBMkJVLEtBc0JwQixDQXRGdUIsQUEyRUgsQ0FyQ1gsUUFDRCxJQTBCUSxHQXpCSCxHQW9DRyxHQTNFaEIsTUF3Q21CLEFBeUJuQixDQTVDdUIsS0F1RFYsWUFuQ0MsQUFvQ0EsS0F2RGQsUUFvQnVCLEFBb0N2QixzQkFuQ0EiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvRGVza3RvcC9kcm9uZS13ZWIvY29tcG9uZW50cy9Qb3J0YWZvbGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVCbGFjaydcbi8vIGltcG9ydCBJbnN0YWZlZWQgZnJvbSAnaW5zdGFmZWVkLmpzJ1xuXG5jbGFzcyBQb3J0YWZvbGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH1cblx0XHQvLyB0aGlzLmZldGNoSW5zdGFncmFtYSgpXG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cdFx0Ly8gYXdhaXQgdGhpcy5mZXRjaEluc3RhZ3JhbWEoKVxuXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHQvLyBcdHZhciBteUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cImVsZnNpZ2h0LWFwcC04YTg2MzY2Mi05MGIyLTQ4MmMtYTBlZS04OGFhMmM3NDA3NzFcIj48L2Rpdj5gXG5cdFx0Ly8gXHR2YXIgaW5zdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiNpbnN0YVwiKVxuXHRcdC8vIFx0aW5zdGEuYXBwZW5kQ2hpbGQobXlFbGVtZW50KVxuXHRcdC8vIFx0Y29uc29sZS5sb2coaW5zdGEpXG5cdFx0Ly8gfSwgNTAwKTtcblx0XHRcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblx0XHQvLyBhd2FpdCB0aGlzLmZldGNoSW5zdGFncmFtYSgpXG5cdH1cblx0Ly8gYXN5bmMgZmV0Y2hJbnN0YWdyYW1hICgpIHtcblx0Ly8gXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vYXBwcy5lbGZzaWdodC5jb20vcC9wbGF0Zm9ybS5qc1wiKVxuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHtcblx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0XHRhcnJvd3M6IHRydWUsXG5cdFx0XHRzcGVlZDogNTAwLFxuXHRcdFx0c2xpZGVzVG9TaG93OiAzLFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDIsXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG5cdFx0XHRyZXNwb25zaXZlOiBbXG5cdFx0ICAgIHtcblx0XHQgICAgICBicmVha3BvaW50OiAxMDYwLFxuXHRcdCAgICAgIHNldHRpbmdzOiB7XG5cdFx0ICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG5cdFx0ICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcblx0XHQgICAgICAgIGluZmluaXRlOiB0cnVlLFxuXHRcdCAgICAgIH1cblx0XHQgICAgfSxcblx0XHQgICAge1xuXHRcdCAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcblx0XHQgICAgICBzZXR0aW5nczoge1xuXHRcdCAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuXHRcdCAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcblx0XHQgICAgICB9XG5cdFx0ICAgIH1cblx0XHQgIF1cblx0ICAgIH07XG4gICAgXHRyZXR1cm4gKFxuXHQgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvXCIgaWQ9XCJwb3J0YWZvbGlvXCI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgd2ViXCI+XG5cdFx0XHRcdFx0PFRpdGxlIHRpdGxlPVwiTnVlc3RybyB0cmFiYWpvLCBlcyBudWVzdHJhIHBhc2nDs24uXCIgY2xhc3NUaXRsZT1cIndoaXRlXCIgc3VidGl0bGU9XCJQcm95ZWN0b3MgV2ViXCIgY2xhc3NTdWJ0aXRsZT1cIndoaXRlIG1iMjBcIiBzdWJ0aXRsZVN0cm9uZz1cIlwiPjwvVGl0bGU+XG5cdFx0XHRcdFx0PFNsaWRlciB7Li4uc2V0dGluZ3N9IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmNsaW5pY2FpbnRlcm5hY2lvbmFsLmNvbS5wZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9jbGluaWNhSW50ZXJuYWNpb25hbC5qcGc/YWx0PW1lZGlhJnRva2VuPWMzNjcwMzZmLTViNTYtNDNiOS1iZjNjLWFhZjc0YWQwOGI5NSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2FuYWxpcGUudHYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9jYW5hbGlwZS5qcGc/YWx0PW1lZGlhJnRva2VuPWE2Nzc0ZDg5LWYwNTEtNDYxNC1iZjhjLWFkNDNiMGMyZDUzNikgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubWlmdXR1cm9nci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9taWZ1dHVyby5qcGc/YWx0PW1lZGlhJnRva2VuPWI2YTc3NDgyLWJiY2UtNDdjYi1iZjM0LTMwN2M3ZjE1NmQ2NCkgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaW5hLm1pbC5wZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9kYW5pbG92aWFjYXZhLTQwZGFmLmFwcHNwb3QuY29tL28vbWFyaW5hLmpwZz9hbHQ9bWVkaWEmdG9rZW49OWY2OGUxMjItYWQ4Yy00Mjc1LTg5ODYtODhkNzVjMGEwNWI0KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5wcm9mZWFsdG9xdWUuY29tLnBlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9kYW5pbG92aWFjYXZhLTQwZGFmLmFwcHNwb3QuY29tL28vcHJvZmUuanBnP2FsdD1tZWRpYSZ0b2tlbj1lMDJhYzZhOS01NjY1LTRlODUtOThjZS1jMjcyYjBkZTk2OTMpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly93d3cuc2FucGlveC5lZHUucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW0taW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2Rhbmlsb3ZpYWNhdmEtNDBkYWYuYXBwc3BvdC5jb20vby9zYW5waW94LmpwZz9hbHQ9bWVkaWEmdG9rZW49NTU5NDQzODItOGMyNC00OWJiLWI3ZTMtMmQxMzg0ZmI3MmQzKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT4gXG5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmRlbGlwZXJ1YW5vLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvZGFuaWxvdmlhY2F2YS00MGRhZi5hcHBzcG90LmNvbS9vL2RlbGlwZXJ1YW5vLnBuZz9hbHQ9bWVkaWEmdG9rZW49NDI5MzlmZjUtMWEyOC00NjcwLTg5OTQtOGU1MGQ3ZjFmNGIyKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5wYWdhZGVzcHVlcy5wZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9kYW5pbG92aWFjYXZhLTQwZGFmLmFwcHNwb3QuY29tL28vcGFnYWRlc3B1ZXMuanBnP2FsdD1tZWRpYSZ0b2tlbj0xMTAyYWYxMC1mMjkzLTQ0OTItOWM5NC1kODRhNjQwMTZjNzQpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPiAgXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuYWN1YW50b2VzdGFlbGRvbGFyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3J0YWZvbGlvLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1tYXNjYXJhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcnRhZm9saW8taXRlbS1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwidXJsKGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvZGFuaWxvdmlhY2F2YS00MGRhZi5hcHBzcG90LmNvbS9vL2NhbWJpb2RvbGFyLnBuZz9hbHQ9bWVkaWEmdG9rZW49NDZmMDVjNWUtNDlmYi00ZTFmLWE0MTUtMmQ0MmRlMmNjMDY2KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmNsdWJ0ZXJyYXphcy5jb20ucGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLW1hc2NhcmFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9ydGFmb2xpby1pdGVtLWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJ1cmwoaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9kYW5pbG92aWFjYXZhLTQwZGFmLmFwcHNwb3QuY29tL28vdGVycmF6YXMuanBnP2FsdD1tZWRpYSZ0b2tlbj05NGMwMzc1MS1hYjA2LTRlMmUtODlmZC0zM2VmYWJjZTQxMTcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvU2xpZGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPVwidHJ1ZVwiPntgXG5cdFx0XHRcdFx0LnBvcnRhZm9saW8ge1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiA2MHB4IDAgMCAwO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwQkNENDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDYwcHggMCAyMHB4IDA7XG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucG9ydGFmb2xpbyAud2ViIHtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvIC5zbGljay1uZXh0OmJlZm9yZSxcblx0XHRcdFx0XHQucG9ydGFmb2xpbyAuc2xpY2stcHJldjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucG9ydGFmb2xpbyAuc2xpY2stbmV4dCB7XG5cdFx0XHRcdFx0XHRyaWdodDogMTBweDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0XHQucG9ydGFmb2xpbyAuc2xpY2stcHJldiB7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucG9ydGFmb2xpby1pdGVtIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMTBweCBhdXRvO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxODBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9NYWNib29rLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3J0YWZvbGlvLWl0ZW0tbWFzY2FyYSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE1OHB4O1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9ydGFmb2xpby1pdGVtLWltZyB7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogNzYlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE0M3B4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9ydGFmb2xpbyAuc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDsgcmVkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbnN0YWdyYW1XaWRnZXQge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0Lmluc3RhZ3JhbVdpZGdldDpiZWZvcmUge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogNDRweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMEJDRDQ7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk5OTk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pbnN0YWdyYW1XaWRnZXQ6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogNjBweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMGJjZDQ7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk5OTk7XG5cdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdH0gXG5cblx0XHRcdFx0XHQuZWFwcHMtaW5zdGFncmFtLWZlZWQtdGl0bGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogUG9wcGlucztcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDQwcHggMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmVhcHBzLWluc3RhZ3JhbS1mZWVkLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk5OTk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWZvbGlvO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/Desktop/drone-web/components/Portafolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portafolio);

/***/ })

})
//# sourceMappingURL=portafolio.js.1bd30cb40450c8b8c076.hot-update.js.map