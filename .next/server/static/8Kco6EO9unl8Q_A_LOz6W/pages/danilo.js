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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+623":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5Yp1");
/* harmony import */ var _components_ReactFullpageDesktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ijGC");









var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_default).call(this, props));
    _this.state = {
      width: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var width = window.innerWidth;
      console.log(width);
      this.setState({
        width: width
      });
    }
  }, {
    key: "render",
    value: function render() {
      // const isMobile = this.state.width
      // let page;
      // if (isMobile < 767) {
      // 	page = <ReactFullpage />
      // } else {
      // 	page = <ReactFullpageDesktop />
      // }
      var page = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ReactFullpageDesktop__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        title: "Viaja con Danilo"
      }, page);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+623");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);










var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var width = window.innerWidth;

      (function () {
        var url = "https://daniloviacava-40daf.firebaseapp.com/static/video/IvanOspinaFMX.mp4";
        var player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);
        player.setAutoPlay(true);
      })();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          width = _this$props.width;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2187934518" + " " + "Layout"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        className: "jsx-2187934518"
      }, title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, user-scalable=no",
        className: "jsx-2187934518"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/img/FAVICON-DOLAR.png",
        className: "jsx-2187934518"
      })), children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2187934518"
      }, ["@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Montserrat';src:url('/static/fonts/Montserrat-Regular.woff2') format('woff2'), url('/static/fonts/Montserrat-Regular.woff') format('woff');font-weight:normal;font-style:normal;}", "body{overflow-x:hidden;}", ".Layout{height:100vh;font-family:'Viga';}", ".df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}", ".container{max-width:960px;width:94%;margin:auto;}", "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}", "article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}", "body{line-height:1;}", "ol,ul{list-style:none;}", "blockquote,q{quotes:none;}", "blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}", "table{border-collapse:collapse;border-spacing:0;}", "a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}", ".fp-controlArrow.fp-prev{width:30px !important;}", "@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}", ".firstSection{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(/static/img/bg1.svg) -233px 0px;background-size:cover;height:100%;position:relative;}", ".firstSection:before{content:\"\";background:url(/static/img/nubes1.svg) -35px 0px;background-size:cover;position:absolute;bottom:0;left:0;right:0;width:100%;height:30vh;}", ".firstSection:after{content:\"\";background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:30px;left:0;right:0;margin:auto;width:30px;height:30px;z-index:9;}", ".secondSection{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".section3{position:relative;}", ".section3:before{content:\"\";background:url(/static/img/nubes3.svg) center center no-repeat;background-size:cover;position:absolute;bottom:0;left:0;width:100%;z-index:9;height:30vh;}", "@media screen and (max-width:1024px){.section3:before{height:30vh;z-index:10;background-size:inherit;}}", "@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}", "@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}"]), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "https://cdn.dashjs.org/latest/dash.all.min.js",
        className: "jsx-2187934518"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9kyW":
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

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

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

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

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

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bVZc":
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
var isProd = process.env && "production" === 'production';

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

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

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

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

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

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gRaj":
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

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

/***/ "ijGC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fullpage/react-fullpage"
var react_fullpage_ = __webpack_require__("gRaj");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/Header.js








var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Header, _React$Component);

  function Header() {
    Object(classCallCheck["a" /* default */])(this, Header);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        var header = document.querySelector(".header-logo");
        header.classList.add('active');
        var socials = document.querySelector(".header-socialNetwork li");
        socials.classList.add('active');
      }, 500);
    }
  }, {
    key: "down",
    value: function down(e) {
      e.preventDefault(); // fullpage_api.moveSectionDown();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("header", {
        className: "jsx-1077642533" + " " + "header"
      }, external_react_default.a.createElement("nav", {
        className: "jsx-1077642533" + " " + "df container"
      }, external_react_default.a.createElement("a", {
        href: "/",
        className: "jsx-1077642533" + " " + "header-logo"
      }, "Danilo Viacava"), external_react_default.a.createElement("ul", {
        className: "jsx-1077642533" + " " + "header-socialNetwork"
      }, external_react_default.a.createElement("li", {
        className: "jsx-1077642533"
      }, external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://www.facebook.com/profile.php?id=100009455848617",
        className: "jsx-1077642533"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/facebookIcon.svg",
        alt: "",
        className: "jsx-1077642533"
      })), external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://www.instagram.com/danilojesusv/",
        className: "jsx-1077642533"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/instagramIcon.svg",
        alt: "",
        className: "jsx-1077642533"
      })), external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
        className: "jsx-1077642533"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/whatsapp.png",
        alt: "",
        className: "jsx-1077642533"
      })), external_react_default.a.createElement("a", {
        onClick: this.down,
        href: "",
        className: "jsx-1077642533"
      }, "Cotizaci\xF3n Gratis")))), external_react_default.a.createElement(style_default.a, {
        id: "1077642533"
      }, [".header.jsx-1077642533{background:transparent;margin-top:10px;position:absolute;top:0;left:0;width:100%;z-index:999;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".header.jsx-1077642533 a.jsx-1077642533{color:white;}", ".header.jsx-1077642533 .container.jsx-1077642533{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".header-logo.jsx-1077642533{display:inline-block;margin:10px;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;}", ".header-logo.active.jsx-1077642533{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".header-socialNetwork.jsx-1077642533 li.jsx-1077642533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}", ".header-socialNetwork.jsx-1077642533 li.active.jsx-1077642533{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".header-socialNetwork.jsx-1077642533 a.jsx-1077642533{margin:5px;padding:5px;}", ".header-socialNetwork.jsx-1077642533 a.jsx-1077642533:hover img.jsx-1077642533{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}", ".header-socialNetwork.jsx-1077642533 figure.jsx-1077642533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-socialNetwork.jsx-1077642533 figcaption.jsx-1077642533{margin:10px;color:white;}", ".header-socialNetwork.jsx-1077642533 img.jsx-1077642533{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:15px;height:15px;}", "@media screen and (max-width:650px){.header-socialNetwork.jsx-1077642533 a.jsx-1077642533{margin:0;}}", "@media screen and (max-width:400px){.header.jsx-1077642533{font-size:12px;}.header.jsx-1077642533 a.jsx-1077642533{margin:0;}}"]));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/BannerServices.js








var BannerServices_BannerServices =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(BannerServices, _React$Component);

  function BannerServices() {
    Object(classCallCheck["a" /* default */])(this, BannerServices);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BannerServices).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(BannerServices, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        var videoBanner = document.querySelector(".videoBanner-title");
        videoBanner.classList.add('active');
        var videoBannerSkills = document.querySelector(".videoBanner-skills");
        videoBannerSkills.classList.add('active');
      }, 500);
    }
  }, {
    key: "handleDown",
    value: function handleDown() {
      fullpage_api.moveSectionDown();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-4087292747" + " " + "videoBanner"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4087292747" + " " + "videoBanner-container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4087292747" + " " + "vimeo-wrapper"
      }, external_react_default.a.createElement("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/xJAwnCMgqCg?autoplay=1 0&controls=0&loop=1&playlist=xJAwnCMgqCg",
        frameBorder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        className: "jsx-4087292747"
      }), external_react_default.a.createElement("div", {
        className: "jsx-4087292747" + " " + "container videoBanner-text"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-4087292747" + " " + "videoBanner-title"
      }, "\xBFNecesita mostrar ", external_react_default.a.createElement("br", {
        className: "jsx-4087292747"
      }), " su proyecto eficientemente?")), external_react_default.a.createElement("ul", {
        className: "jsx-4087292747" + " " + "df container videoBanner-skills"
      }, external_react_default.a.createElement("li", {
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-4087292747" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/responsive.svg",
        alt: "",
        className: "jsx-4087292747"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-4087292747"
      }, "DESARROLLO WEB")), external_react_default.a.createElement("p", {
        className: "jsx-4087292747"
      }, "P\xE1ginas web profesionales y \xFAnicas son nuestro servicio clave. ", external_react_default.a.createElement("span", {
        className: "jsx-4087292747"
      }, "Disponible en dispositivos m\xF3viles, listo para SEO (Google).")))), external_react_default.a.createElement("li", {
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-4087292747" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/drone.svg",
        alt: "",
        className: "jsx-4087292747"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-4087292747"
      }, "IM\xC1GENES DE DRONES")), external_react_default.a.createElement("p", {
        className: "jsx-4087292747"
      }, "Brindamos servicios de fotograf\xEDa y video a\xE9reo con drones. ", external_react_default.a.createElement("span", {
        className: "jsx-4087292747"
      }, "Certificados con licencia para conducir drones.")))), external_react_default.a.createElement("li", {
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-4087292747" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/profiles.svg",
        alt: "",
        className: "jsx-4087292747"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-4087292747"
      }, "PORTAFOLIO")), external_react_default.a.createElement("p", {
        className: "jsx-4087292747"
      }, "Vea nuestros \xFAltimos proyectos de sitios web y videos a\xE9reos. ", external_react_default.a.createElement("span", {
        className: "jsx-4087292747"
      }, "\xDAnase a nuestra lista de clientes satisfechos.")))), external_react_default.a.createElement("li", {
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-4087292747"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-4087292747" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/handshake.svg",
        alt: "",
        className: "jsx-4087292747"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-4087292747"
      }, "SERVICIO GRATUITO")), external_react_default.a.createElement("p", {
        className: "jsx-4087292747"
      }, "Consulte nuestra oferta de trabajo y viaje ", external_react_default.a.createElement("span", {
        className: "jsx-4087292747"
      }, "para obtener informaci\xF3n ahora y obtener nuestros servicios gratuitos"))))))), external_react_default.a.createElement(style_default.a, {
        id: "4087292747"
      }, [".videoBanner.jsx-4087292747{height:100vh;box-shadow:0 40px 120px -20px rgba(0,0,0,.6);}", ".vimeo-wrapper.jsx-4087292747{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}", ".vimeo-wrapper.jsx-4087292747:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.6;z-index:1;pointer-events:none;}", ".vimeo-wrapper.jsx-4087292747 iframe.jsx-4087292747{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".videoBanner-text.jsx-4087292747{position:absolute;left:0;right:0;width:100%;top:-100px;bottom:0;height:130px;color:white;z-index:9;font-family:Montserrat;text-align:center;}", ".videoBanner-title.jsx-4087292747{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2s;transition-delay:2s;}", ".videoBanner-title.active.jsx-4087292747{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".videoBanner-title.jsx-4087292747 br.jsx-4087292747{display:none;}", ".videoBanner-skills.jsx-4087292747{font-size:17px;box-sizing:border-box;position:absolute;bottom:1px;left:0;right:0;font-size:12px;z-index:99;text-align:left;font-family:Montserrat;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2.5s;transition-delay:2.5s;}", ".videoBanner-skills.active.jsx-4087292747{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}", ".videoBanner-skills.jsx-4087292747 li.jsx-4087292747{margin-bottom:35px;background:white;padding:25px 20px;margin:0 .5px;min-height:60px;box-sizing:border-box;width:25%;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}", ".videoBanner-skills.jsx-4087292747 li.jsx-4087292747{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}", ".videoBanner-skills.jsx-4087292747 figure.jsx-4087292747{margin-bottom:15px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}", ".videoBanner-skills.jsx-4087292747 img.jsx-4087292747{width:30px;height:30px;margin-right:10px;}", ".videoBanner-skills.jsx-4087292747 h2.jsx-4087292747{font-size:13px;font-family:Viga;color:black;text-align:left;}", ".videoBanner-skills.jsx-4087292747 p.jsx-4087292747{color:black;line-height:1.2;}", ".html5-video-player.jsx-4087292747 .video-stream.jsx-4087292747{top:0 !important;}", "@media screen and (max-width:768px){.videoBanner-title.jsx-4087292747 br.jsx-4087292747{display:block;}}", "@media screen and (max-width:600px){.videoBanner.jsx-4087292747{box-shadow:none;}.vimeo-wrapper.jsx-4087292747 video.jsx-4087292747{left:80%;}.videoBanner-text.jsx-4087292747{top:-130px;}.videoBanner-title.jsx-4087292747{font-size:35px;}.videoBanner-skills.jsx-4087292747{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-4087292747 li.jsx-4087292747{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-4087292747 p.jsx-4087292747 span.jsx-4087292747{display:none;}}", "@media screen and (max-width:400px){.videoBanner-text.jsx-4087292747{top:-60px;height:80px;}.videoBanner-title.jsx-4087292747{font-size:25px;}.videoBanner-skills.jsx-4087292747 figure.jsx-4087292747{margin-bottom:10px;}.videoBanner-skills.jsx-4087292747 img.jsx-4087292747{width:25px;height:25px;}.videoBanner-skills.jsx-4087292747 h2.jsx-4087292747{font-size:11px;}.videoBanner-skills.jsx-4087292747 p.jsx-4087292747{font-size:9px;}}", "@-webkit-keyframes translateBottomToTop-jsx-4087292747{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes translateBottomToTop-jsx-4087292747{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}"]));
    }
  }]);

  return BannerServices;
}(external_react_default.a.Component);

/* harmony default export */ var components_BannerServices = (BannerServices_BannerServices);
// CONCATENATED MODULE: ./components/Services.js








var Services_Services =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Services, _React$Component);

  function Services() {
    Object(classCallCheck["a" /* default */])(this, Services);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Services).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Services, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + ""
      }, external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "df services-about"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services-about-bg"
      }), external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services-about-text"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-4286572015"
      }, "QUI\xC9NES SOMOS"), external_react_default.a.createElement("p", {
        className: "jsx-4286572015"
      }, "Mi nombre es Danilo y tengo 25 a\xF1os, estudi\xE9 en Lima, Per\xFA. He estado viajando con mi novia Emma durante 1 a\xF1o, trabajando de forma remota. La idea principal de la empresa es trabajar y viajar por todo el mundo. Ofrecemos webs profesionales y dise\xF1o de medios digitales."))), external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "df container services-items"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services-left"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services-web"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-4286572015"
      }, "WEB Y DISE\xD1O DE MEDIOS DIGITALES"), external_react_default.a.createElement("p", {
        className: "jsx-4286572015"
      }, "Su sitio web tiene solo unos segundos para interesar a posibles clientes. Con nosotros, su nuevo sitio web atraer\xE1 la atenci\xF3n y la pintar\xE1 en la direcci\xF3n correcta. Dise\xF1amos sitios web modernos y creamos una imagen profesional de su empresa. Nuestro trabajo es nuestra pasi\xF3n. Es por eso que nuestros sitios web est\xE1n en l\xEDnea con las \xFAltimas tendencias y tecnolog\xEDas."), external_react_default.a.createElement("a", {
        className: "jsx-4286572015"
      }, "CREAR MI SITIO WEB")), external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services-drone"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-4286572015"
      }, "SERVICIO DE FOTOGRAFIA Y VIDEO A\xC9REO"), external_react_default.a.createElement("p", {
        className: "jsx-4286572015"
      }, "Muestra tu resort, hotel o cualquier cosa que desees desde una perspectiva completamente diferente. Haga que su oferta se destaque en Booking.com o tripAdvisor entre otros."), external_react_default.a.createElement("a", {
        className: "jsx-4286572015"
      }, "Saber m\xE1s"))), external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services-free-bg"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4286572015" + " " + "services-free"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-4286572015"
      }, "SERVICIO GRATUITO"), external_react_default.a.createElement("p", {
        className: "jsx-4286572015"
      }, "\xBFQuieres un nuevo sitio web pero no tienes tiempo para administrarlo? \xBFNo tienes fotos o materiales? \xBFEs posible construir un sitio web de forma gratuita? En lugar de la oferta est\xE1ndar, elija la opci\xF3n Trabajo y viaje."), external_react_default.a.createElement("a", {
        className: "jsx-4286572015"
      }, "Saber m\xE1s"))))), external_react_default.a.createElement(style_default.a, {
        id: "4286572015"
      }, [".services.jsx-4286572015{color:black;padding-top:80px;}", ".services-about.jsx-4286572015{-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", ".services-about-text.jsx-4286572015{text-align:left;width:50%;padding-top:3%;padding-left:4%;padding-right:2%;box-sizing:border-box;}", ".services-about-text.jsx-4286572015 h2.jsx-4286572015{font-size:22px;margin-bottom:10px;}", ".services-about-text.jsx-4286572015 p.jsx-4286572015{max-width:410px;font-size:15px;font-family:Montserrat;line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;color:#656565;}", ".services-about-bg.jsx-4286572015{background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/danilo.JPG?alt=media&token=61b5d63e-546a-4b31-ba07-c19312c264d5) center center no-repeat;background-size:cover;width:50%;height:280px;}", ".services-items.jsx-4286572015{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}", ".services-left.jsx-4286572015{color:white;width:70%;}", ".services-web.jsx-4286572015{background:#00BCD4;padding:80px 20px;box-sizing:border-box;text-align:left;margin-top:-20px;}", ".services-web.jsx-4286572015 h2.jsx-4286572015{font-size:22px;max-width:300px;margin:0 auto 10px;padding-right:70px;box-sizing:border-box;margin-left:100px;}", ".services-web.jsx-4286572015 p.jsx-4286572015{font-size:15px;font-family:Montserrat;line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;max-width:300px;font-size:14px;margin-left:100px;}", ".services-web.jsx-4286572015 a.jsx-4286572015{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:14px;border-radius:4px;}", ".services-drone.jsx-4286572015{background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/rupac.JPG?alt=media&token=b2993f85-b0fe-4ade-a815-96123eea063f) center left no-repeat;background-size:cover;max-width:230px;padding:80px 90px;margin:-60px 0px 0px 60px;text-align:left;position:relative;}", ".services-drone.jsx-4286572015:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.3;}", ".services-drone.jsx-4286572015 h2.jsx-4286572015{font-size:22px;max-width:180px;margin:0 auto 10px;box-sizing:border-box;position:relative;z-index:1;}", ".services-drone.jsx-4286572015 p.jsx-4286572015{max-width:300px;margin:0 auto 10px;padding-left:25px;box-sizing:border-box;position:relative;z-index:1;font-family:Montserrat;font-size:14px;line-height:1.2;}", ".services-drone.jsx-4286572015 a.jsx-4286572015{max-width:300px;padding-left:25px;box-sizing:border-box;margin-top:10px;position:relative;z-index:1;font-size:14px;}", ".services-free-bg.jsx-4286572015{width:40%;}", ".services-free.jsx-4286572015{background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/emma.JPG?alt=media&token=d97439c2-7bfe-4801-99cf-e860cbcd1a2a) -130px 0px no-repeat;background-size:cover;color:white;padding:280px 100px 230px 100px;box-sizing:border-box;margin-top:-50px;margin-left:-110px;text-align:right;max-width:410px;font-size:15px;position:relative;}", ".services-free.jsx-4286572015:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.4;}", ".services-free.jsx-4286572015 h2.jsx-4286572015{font-size:22px;margin-bottom:10px;position:relative;z-index:1;}", ".services-free.jsx-4286572015 p.jsx-4286572015{font-size:14px;font-family:Montserrat;margin-bottom:10px;position:relative;line-height:1.2;z-index:1;}", ".services-free.jsx-4286572015 a.jsx-4286572015{font-size:14px;position:relative;z-index:1;}", "@media screen and (max-width:900px){.services-about-text.jsx-4286572015{margin-right:2%;padding-top:5%;}.services-web.jsx-4286572015 h2.jsx-4286572015,.services-web.jsx-4286572015 p.jsx-4286572015,.services-web.jsx-4286572015 a.jsx-4286572015{margin-left:30px;}.services-drone.jsx-4286572015{margin-left:20px;}.services-drone.jsx-4286572015 h2.jsx-4286572015{margin-left:0px;}.services-drone.jsx-4286572015 p.jsx-4286572015,.services-drone.jsx-4286572015 a.jsx-4286572015{padding-left:0;}.services-free.jsx-4286572015{margin-left:-90px;padding:280px 60px 230px 60px;background-position:-170px 0px;}}", "@media screen and (max-width:767px){.services-about.jsx-4286572015{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:600px;margin:auto;text-align:center;}.services-about-bg.jsx-4286572015,.services-about-text.jsx-4286572015{width:100%;}.services-about.jsx-4286572015 p.jsx-4286572015{max-width:100%;}.services-items.jsx-4286572015{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-left.jsx-4286572015{width:100%;}.services-web.jsx-4286572015{margin-top:40px;padding:40px 120px;}.services-web.jsx-4286572015 h2.jsx-4286572015,.services-web.jsx-4286572015 p.jsx-4286572015{max-width:100%;}.services-drone.jsx-4286572015{margin:30px auto;max-width:100%;padding:80px 170px;}.services-drone.jsx-4286572015 h2.jsx-4286572015{margin-left:0;max-width:100%;}.services-drone.jsx-4286572015 a.jsx-4286572015,.services-drone.jsx-4286572015 p.jsx-4286572015{margin-left:0;}.services-free-bg.jsx-4286572015{width:100%;}.services-free.jsx-4286572015{margin:0;max-width:100%;padding:70px 210px;background-position:0 -80px;}.services-free.jsx-4286572015{margin:0;max-width:100%;padding:70px 140px;background-position:0 -80px;}}", "@media screen and (max-width:600px){.services.jsx-4286572015{padding-top:40px;}.services-web.jsx-4286572015{padding:40px 20px;}.services-web.jsx-4286572015 h2.jsx-4286572015,.services-web.jsx-4286572015 p.jsx-4286572015,.services-web.jsx-4286572015 a.jsx-4286572015{margin:10px 20px;}.services-drone.jsx-4286572015{padding:80px 50px;}.services-free.jsx-4286572015{padding:80px 50px;background-position:0px 0px;}}"]));
    }
  }]);

  return Services;
}(external_react_default.a.Component);

/* harmony default export */ var components_Services = (Services_Services);
// CONCATENATED MODULE: ./components/Prices.js








var Prices_Prices =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Prices, _React$Component);

  function Prices() {
    Object(classCallCheck["a" /* default */])(this, Prices);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Prices).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Prices, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-1637064357" + " " + "prices"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1637064357" + " " + "container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1637064357" + " " + "prices-title"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-1637064357"
      }, "\xBFQU\xC9 PLAN PREFIERES PARA TUS CLIENTES?"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357"
      }, "Empieza a ganar m\xE1s clientes ", external_react_default.a.createElement("strong", {
        className: "jsx-1637064357"
      }, "ahora"))), external_react_default.a.createElement("div", {
        className: "jsx-1637064357" + " " + "price-table"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-1637064357"
      }, "Dise\xF1o y Desarollo Web"), external_react_default.a.createElement("ul", {
        className: "jsx-1637064357" + " " + "df"
      }, external_react_default.a.createElement("li", {
        className: "jsx-1637064357"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1637064357" + " " + "price-title"
      }, "Proyecto B\xE1sico"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- De 1 a 5 tabs de p\xE1gina ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), " ", external_react_default.a.createElement("span", {
        className: "jsx-1637064357"
      }, "(home, about, services, clientes, contact)")), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Contenido digital ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), " ", external_react_default.a.createElement("span", {
        className: "jsx-1637064357"
      }, "(fotos - tipograf\xEDas - video)")), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- No incluye hosting"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-number"
      }, "S/. 1,000.00")), external_react_default.a.createElement("li", {
        className: "jsx-1637064357"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1637064357" + " " + "price-title"
      }, "Proyecto PRO"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- De 5 a 10 tabs de p\xE1gina ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1637064357"
      }, "(home, about, services, clientes, ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), " contact ... )")), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Contenido digital ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), " ", external_react_default.a.createElement("span", {
        className: "jsx-1637064357"
      }, "(fotos - tipograf\xEDas - video)")), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Incluye hosting"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-number"
      }, "S/. 2,000.00")), external_react_default.a.createElement("li", {
        className: "jsx-1637064357"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1637064357" + " " + "price-title"
      }, "Proyecto BUSINESS"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- De 5 a 10 tabs de p\xE1gina ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1637064357"
      }, "(home, about, services, clientes, ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), " contact ... )")), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Contenido digital ", external_react_default.a.createElement("br", {
        className: "jsx-1637064357"
      }), " ", external_react_default.a.createElement("span", {
        className: "jsx-1637064357"
      }, "(fotos - tipograf\xEDas - video)")), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Incluye hosting"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-number"
      }, "S/. 4,000.00")))), external_react_default.a.createElement("div", {
        className: "jsx-1637064357" + " " + "price-table"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-1637064357"
      }, "Contenido Digital - Fotograf\xEDa y video a\xE9reo"), external_react_default.a.createElement("ul", {
        className: "jsx-1637064357" + " " + "df even"
      }, external_react_default.a.createElement("li", {
        className: "jsx-1637064357"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1637064357" + " " + "price-title"
      }, "Proyecto B\xE1sico"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Video editado de 30 segundos"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- 30 minutos de grabaci\xF3n"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-number"
      }, "S/. 300.00")), external_react_default.a.createElement("li", {
        className: "jsx-1637064357"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1637064357" + " " + "price-title"
      }, "Proyecto PRO"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Video editado de 60 segundos"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- 60 minutos de grabaci\xF3n"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-number"
      }, "S/. 600.00")), external_react_default.a.createElement("li", {
        className: "jsx-1637064357"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1637064357" + " " + "price-title"
      }, "Proyecto BUSINESS"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- Video editado de 120 segundos"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-caracteristicas"
      }, "- 120 minutos de grabaci\xF3n"), external_react_default.a.createElement("p", {
        className: "jsx-1637064357" + " " + "price-number"
      }, "S/. 1,000.00"))))), external_react_default.a.createElement(style_default.a, {
        id: "1637064357"
      }, [".prices.jsx-1637064357{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;text-align:center;min-width:300px;color:white;padding:80px 0 10px 0;font-family:Montserrat;}", ".prices-container.jsx-1637064357{width:90%;margin:auto;}", ".prices-title.jsx-1637064357{font-family:Viga;color:black;}", ".prices-title.jsx-1637064357 h3.jsx-1637064357{font-size:22px;}", ".prices-title.jsx-1637064357 p.jsx-1637064357{color:gray;font-size:17px;margin-bottom:50px;margin-top:5px;font-family:Montserrat;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;}", ".prices-title.jsx-1637064357 strong.jsx-1637064357{color:black;font-weight:bold;}", ".price-table.jsx-1637064357{margin:30px 0 50px 0;}", ".price-table.jsx-1637064357 h3.jsx-1637064357{font-size:20px;margin-bottom:20px;font-family:Viga;color:gray;text-transform:uppercase;}", ".price-table.jsx-1637064357 ul.jsx-1637064357{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", ".price-table.jsx-1637064357 li.jsx-1637064357{box-shadow:0 10px 50px -25px rgba(0,0,0,.6);border-radius:4px;padding:40px 20px;width:31%;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;font-size:15px;background:#18d4e7;box-sizing:border-box;}", ".price-table.jsx-1637064357 li.jsx-1637064357:nth-child(odd){background:white;}", ".price-table.jsx-1637064357 li.jsx-1637064357:nth-child(odd) p.jsx-1637064357{color:gray;text-shadow:none;}", ".price-table.jsx-1637064357 li.jsx-1637064357:nth-child(odd) h4.jsx-1637064357{color:gray;text-shadow:none;}", ".price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(even){background:white;}", ".price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(odd){background:#18d4e7;color:white;}", ".price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(odd) h4.jsx-1637064357{color:white;text-shadow:1px 1px 7px rgba(0,0,0,0.3);}", ".price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(odd) p.jsx-1637064357{color:white;text-shadow:1px 1px 7px rgba(0,0,0,0.3);}", ".price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(even) p.jsx-1637064357{color:gray;text-shadow:none;}", ".price-table.jsx-1637064357 .even.jsx-1637064357 li.jsx-1637064357:nth-child(even) h4.jsx-1637064357{color:gray;text-shadow:none;}", ".price-title.jsx-1637064357{margin-bottom:20px;font-family:Viga;font-size:18px;text-shadow:1px 1px 7px rgba(0,0,0,0.31);text-transform:uppercase;}", ".price-number.jsx-1637064357{margin-top:20px;font-size:18px;text-shadow:1px 1px 7px rgba(0,0,0,0.31);}", ".price-caracteristicas.jsx-1637064357{margin-bottom:10px;text-shadow:1px 1px 7px rgba(0,0,0,0.3);font-size:14px;}", ".price-caracteristicas.jsx-1637064357 span.jsx-1637064357{font-size:12px;height:25px;display:block;margin-top:3px;}", ".price-caracteristicas.jsx-1637064357:last-child{margin-bottom:0px;}", "@media screen and (max-width:767px){.price-table.jsx-1637064357 ul.jsx-1637064357{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.price-table.jsx-1637064357 li.jsx-1637064357{width:80%;margin:10px auto;}}", "@media screen and (max-width:600px){.price-table.jsx-1637064357 li.jsx-1637064357{width:90%;}}"]));
    }
  }]);

  return Prices;
}(external_react_default.a.Component);

/* harmony default export */ var components_Prices = (Prices_Prices);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// CONCATENATED MODULE: ./firebase.js


var settings = {
  timestampsInSnapshots: false
};
var config = {
  apiKey: "AIzaSyANEVgK9gfjKQfqn_RopgWhAB8MP3CgkZc",
  authDomain: "daniloviacava-40daf.firebaseapp.com",
  databaseURL: "https://daniloviacava-40daf.firebaseio.com",
  projectId: "daniloviacava-40daf",
  storageBucket: "daniloviacava-40daf.appspot.com",
  messagingSenderId: "107745328618",
  appId: "1:107745328618:web:ca20c18f454da06d"
}; // firebase.firestore().settings(settings);

/* harmony default export */ var firebase = (!external_firebase_["apps"].length ? external_firebase_["initializeApp"](config) : external_firebase_["app"]());
// CONCATENATED MODULE: ./components/Contact.js











var Contact_Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Contact, _React$Component);

  function Contact(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Contact);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Contact).call(this, props));

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "updateInput", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "sendContact", function (e) {
      e.preventDefault();
      var db = firebase.firestore();
      var userRef = db.collection("form-contacto").add({
        nombres: _this.state.email,
        empresa: _this.state.empresa,
        email: _this.state.email,
        celular: _this.state.celular,
        mensaje: _this.state.mensaje
      }).then(function (docRef) {
        var thanks = document.getElementById("thanks");
        thanks.classList.add('active');
      }).catch(function (error) {
        console.log("Error: " + error);
      });

      _this.setState({
        nombres: '',
        empresa: '',
        email: '',
        celular: '',
        mensaje: ''
      });
    });

    _this.state = {
      nombres: '',
      empresa: '',
      email: '',
      celular: '',
      mensaje: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Contact, [{
    key: "handleCloseForm",
    value: function handleCloseForm(e) {
      e.preventDefault();
      var thanks = document.getElementById("thanks");
      thanks.classList.remove('active');
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-3588466859" + " " + "Contact"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3588466859" + " " + "container"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3588466859" + " " + "afiliacionForm-title"
      }, "\xBFTiene un proyecto en el que ", external_react_default.a.createElement("br", {
        className: "jsx-3588466859"
      }), " ", external_react_default.a.createElement("strong", {
        className: "jsx-3588466859"
      }, "podamos ayudarlo?")), external_react_default.a.createElement("div", {
        className: "jsx-3588466859" + " " + "afiliacionForm-form"
      }, external_react_default.a.createElement("form", {
        onSubmit: this.sendContact,
        className: "jsx-3588466859"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3588466859" + " " + "afiliacionForm-formInput"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Nombres*",
        name: "nombres",
        value: this.state.nombres,
        onChange: this.updateInput,
        required: true,
        className: "jsx-3588466859"
      }), external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Empresa*",
        name: "empresa",
        value: this.state.apellidos,
        onChange: this.updateInput,
        required: true,
        className: "jsx-3588466859"
      })), external_react_default.a.createElement("div", {
        className: "jsx-3588466859" + " " + "afiliacionForm-formInput"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Email*",
        name: "email",
        value: this.state.email,
        onChange: this.updateInput,
        required: true,
        className: "jsx-3588466859"
      }), external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Celular*",
        name: "celular",
        value: this.state.celular,
        onChange: this.updateInput,
        required: true,
        className: "jsx-3588466859"
      })), external_react_default.a.createElement("div", {
        className: "jsx-3588466859" + " " + "afiliacionForm-formInput"
      }, external_react_default.a.createElement("textarea", {
        id: "",
        cols: "30",
        rows: "3",
        placeholder: "Cu\xE9ntanos cu\xE1l es tu empresa y te contactaremos.",
        name: "mensaje",
        value: this.state.mensaje,
        onChange: this.updateInput,
        required: true,
        className: "jsx-3588466859"
      }), external_react_default.a.createElement("p", {
        className: "jsx-3588466859"
      }, "*Todos los Campos son Obligatorios")), external_react_default.a.createElement("button", {
        className: "jsx-3588466859" + " " + "btnRosa"
      }, "Enviar")))), external_react_default.a.createElement("div", {
        id: "thanks",
        className: "jsx-3588466859" + " " + "container gracias"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3588466859" + " " + "afiliacionForm-title"
      }, "\xA1Gracias! ", external_react_default.a.createElement("br", {
        className: "jsx-3588466859"
      }), " ", external_react_default.a.createElement("strong", {
        className: "jsx-3588466859"
      }, "Te Contactaremos")), external_react_default.a.createElement("button", {
        onClick: this.handleCloseForm,
        className: "jsx-3588466859" + " " + "btnRosa"
      }, "Entendido")), external_react_default.a.createElement(style_default.a, {
        id: "3588466859"
      }, [".Contact.jsx-3588466859{text-align:center;margin:40px 0;color:black;position:relative;}", ".afiliacionForm-title.jsx-3588466859{font-size:22px;text-transform:uppercase;text-align:center;}", ".afiliacionForm-form.jsx-3588466859{padding:20px;box-sizing:border-box;max-width:500px;margin:auto;}", ".afiliacionForm-formInput.jsx-3588466859 input.jsx-3588466859,.afiliacionForm-formInput.jsx-3588466859 textarea.jsx-3588466859{max-width:45%;width:100%;margin:2%;height:35px;line-height:35px;padding-left:20px;box-sizing:border-box;border-radius:3px;border:none;box-shadow:0px 1px 10px rgba(0,0,0,0.05);font-family:Montserrat;font-size:13px;}", ".afiliacionForm-formInput.jsx-3588466859 input.jsx-3588466859:focus{box-shadow:2px 3px 30px rgba(228,55,118,0.1);}", ".afiliacionForm-formInput.jsx-3588466859 textarea.jsx-3588466859{height:auto;width:94%;max-width:100%;}", ".afiliacionForm-formInput.jsx-3588466859 p.jsx-3588466859{text-align:left;font-size:14px;padding-left:10px;font-family:Montserrat;padding-left:20px;}", ".btnRosa.jsx-3588466859{background:#00bcd4;text-align:center;line-height:30px;color:white;padding:5px 40px;margin-top:20px;border:none;font-size:17px;border-radius:4px;text-transform:uppercase;font-family:Viga;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".closeForm.jsx-3588466859{position:absolute;top:0;bottom:0;margin:auto;left:-30px;height:40px;width:40px;background:white;padding:10px;cursor:pointer;border-radius:20px 0 0 20px;box-shadow:2px 3px 30px rgba(228,55,118,0.1);}", ".closeForm.jsx-3588466859:before{content:\"\";position:absolute;top:-4px;background:#fffdfe;width:17px;height:110%;right:-7px;}", ".closeForm.jsx-3588466859 img.jsx-3588466859{width:70%;margin-top:8px;}", ".gracias.jsx-3588466859{position:absolute;top:0;left:0;right:0;width:96%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;visibility:hidden;-webkit-transition:.3s linear;transition:.3s linear;background:white;}", ".gracias.active.jsx-3588466859{opacity:1;visibility:visible;}", "@media screen and (max-width:767px){.Contact.jsx-3588466859{margin-top:0;}}", "@media screen and (max-width:600px){.afiliacionForm-title.jsx-3588466859{font-size:19px;}.afiliacionForm-form.jsx-3588466859{padding:20px 0;}}"]));
    }
  }]);

  return Contact;
}(external_react_default.a.Component);

/* harmony default export */ var components_Contact = (Contact_Contact);
// CONCATENATED MODULE: ./components/ReactFullpageDesktop.js








var ReactFullpageDesktop_Fullpage = function Fullpage() {
  return external_react_default.a.createElement("div", {
    className: ""
  }, external_react_default.a.createElement("div", {
    className: "section",
    id: "section1"
  }, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(components_BannerServices, null)), external_react_default.a.createElement("div", {
    className: "section",
    id: "section3"
  }, external_react_default.a.createElement(components_Services, null)), external_react_default.a.createElement(components_Prices, null), external_react_default.a.createElement("div", {
    className: "section",
    id: "section3"
  }, external_react_default.a.createElement(components_Contact, null)), external_react_default.a.createElement("style", null, "\n\n          "));
};

/* harmony default export */ var ReactFullpageDesktop = __webpack_exports__["a"] = (ReactFullpageDesktop_Fullpage);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });