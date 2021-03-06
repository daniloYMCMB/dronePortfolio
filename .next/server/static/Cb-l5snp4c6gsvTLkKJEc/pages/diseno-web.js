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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+EWW":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "+lRa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("s+ck");
var step = __webpack_require__("JFuE");
var Iterators = __webpack_require__("sipE");
var toIObject = __webpack_require__("aput");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("5Kld")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


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

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/JtU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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









var WebsiteFree =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(WebsiteFree, _React$Component);

  function WebsiteFree() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, WebsiteFree);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(WebsiteFree).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(WebsiteFree, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3562776806" + " " + "websitefree"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          alignItems: 'stretch'
        },
        className: "jsx-3562776806" + " " + "df"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
        style: {
          backgroundImage: this.props.bg
        },
        className: "jsx-3562776806" + " " + "websitefree-free-bg"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3562776806" + " " + "df websitefree-web"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3562776806" + " " + "websitefree-about"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3562776806" + " " + "websitefree-about-bg"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3562776806" + " " + "websitefree-about-text"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-3562776806"
      }, "CONSTRUYA SU SITIO WEB", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        className: "jsx-3562776806"
      }), " GRATIS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-3562776806"
      }, "El proyecto ser\xE1 gratuito a cambio de una estancia de vacaciones en su lugar. Tomaremos el equipo necesario para dise\xF1ar el sitio web y realizaremos materiales promocionales, fotos y videos de alta calidad."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/viaje-de-trabajo"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3562776806"
      }, "VIAJE DE TRABAJO")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3562776806"
      }, [".websitefree.jsx-3562776806{margin-top:60px;}", ".websitefree-web.jsx-3562776806{padding:70px 40px;box-sizing:border-box;width:50%;padding-left:50px;background:#f2f2f2;border:1px solid black;border-right:none;border-left:none;text-align:left;}", ".websitefree-web.jsx-3562776806 h2.jsx-3562776806{font-size:22px;margin-bottom:10px;box-sizing:border-box;font-family:Viga;position:relative;}", ".websitefree-web.jsx-3562776806 h2.jsx-3562776806:before{content:\"\";position:absolute;width:50px;height:3px;background:#00BCD4;top:-15px;left:0;}", ".websitefree-web.jsx-3562776806 p.jsx-3562776806{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:500px;}", ".websitefree-web.jsx-3562776806 a.jsx-3562776806{margin:auto;display:inline-block;padding:13px 15px;color:white;box-sizing:border-box;margin-top:10px;border-radius:4px;font-family:Viga;background:#00BCD4;}", ".websitefree-free-bg.jsx-3562776806{width:50%;background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/parlamento.jpg?alt=media&token=265feb04-2e73-4837-bf0e-b1cad36c1226) center center no-repeat;background-size:cover;}", "@media screen and (max-width:767px){.websitefree.jsx-3562776806{margin-top:40px;}.websitefree.jsx-3562776806 .df.jsx-3562776806{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.websitefree-free-bg.jsx-3562776806{width:100%;height:300px;}.websitefree-web.jsx-3562776806{width:100%;}}", "@media screen and (max-width:600px){.websitefree.jsx-3562776806{margin-top:20px;}.websitefree-web.jsx-3562776806{padding:70px 20px;}.websitefree-web.jsx-3562776806 h2.jsx-3562776806,.websitefree-web.jsx-3562776806 p.jsx-3562776806,.websitefree-web.jsx-3562776806 a.jsx-3562776806{margin:10px 20px;}.websitefree-web.jsx-3562776806 h2.jsx-3562776806 br.jsx-3562776806{display:none;}}"]));
    }
  }]);

  return WebsiteFree;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WebsiteFree);

/***/ }),

/***/ "/aHj":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("G1Wo");


/***/ }),

/***/ "/wxW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("Q8jq");
var toObject = __webpack_require__("AYVP");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "0Sc/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("CgoH")('asyncIterator');


/***/ }),

/***/ "0T/a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var ctx = __webpack_require__("vCXk");
var hide = __webpack_require__("jOCL");
var has = __webpack_require__("Q8jq");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


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

/***/ "0k/M":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("CgoH")('observable');


/***/ }),

/***/ "0lY0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("2jw7");
var has = __webpack_require__("Q8jq");
var DESCRIPTORS = __webpack_require__("fZVS");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var META = __webpack_require__("YndH").KEY;
var $fails = __webpack_require__("14Ie");
var shared = __webpack_require__("d3Kl");
var setToStringTag = __webpack_require__("wNhr");
var uid = __webpack_require__("ewAR");
var wks = __webpack_require__("G1Wo");
var wksExt = __webpack_require__("/aHj");
var wksDefine = __webpack_require__("CgoH");
var enumKeys = __webpack_require__("0tY/");
var isArray = __webpack_require__("taoM");
var anObject = __webpack_require__("D4ny");
var isObject = __webpack_require__("b4pn");
var toObject = __webpack_require__("AYVP");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var createDesc = __webpack_require__("+EWW");
var _create = __webpack_require__("cQhG");
var gOPNExt = __webpack_require__("Vl3p");
var $GOPD = __webpack_require__("Ym6j");
var $GOPS = __webpack_require__("McIs");
var $DP = __webpack_require__("OtwA");
var $keys = __webpack_require__("djPm");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("2HZK").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("1077").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("tFdt")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("jOCL")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0tY/":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "1077":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "14Ie":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2HZK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("JpU4");
var hiddenKeys = __webpack_require__("ACkF").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "2jw7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y2Qe");


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

/***/ "40Gw":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("fZVS"), 'Object', { defineProperty: __webpack_require__("OtwA").f });


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Kld":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("tFdt");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var $iterCreate = __webpack_require__("XOdh");
var setToStringTag = __webpack_require__("wNhr");
var getPrototypeOf = __webpack_require__("/wxW");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

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
      }, 1000);
      setTimeout(function () {
        var menu = document.querySelector(".header-menu");
        menu.classList.add('active');
      }, 1100);
      var widthScreen = window.innerWidth;

      if (widthScreen < 767) {
        setTimeout(function () {
          var menu = document.querySelector(".header-menu");
          menu.classList.remove('active');
        }, 1100);
      }
    }
  }, {
    key: "menuMobile",
    value: function menuMobile(e) {
      var header = document.getElementById("header");
      header.classList.toggle('active');
      var menu_mobile = document.getElementById("header_menu");
      menu_mobile.classList.toggle('active');
      var menu_mobile_btn = document.getElementById("menu-mobile-btn");
      menu_mobile_btn.classList.toggle('active');
      var cortina = document.getElementById("cortina");
      cortina.classList.toggle('active');
    }
  }, {
    key: "cortina",
    value: function cortina() {
      var menu_mobile = document.getElementById("header_menu");
      menu_mobile.classList.remove('active');
      var menu_mobile_btn = document.getElementById("menu-mobile-btn");
      menu_mobile_btn.classList.remove('active');
      var cortina = document.getElementById("cortina");
      cortina.classList.remove('active');
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-362146415" + " " + ""
      }, external_react_default.a.createElement("header", {
        id: "header",
        className: "jsx-362146415" + " " + "header"
      }, external_react_default.a.createElement("nav", {
        className: "jsx-362146415" + " " + "df container"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "jsx-362146415" + " " + "header-logo"
      }, "TECNOVA.IO", external_react_default.a.createElement("div", {
        className: "jsx-362146415" + " " + "services-icon"
      }, external_react_default.a.createElement("img", {
        width: "35",
        src: "/static/img/droneIcon.svg",
        className: "jsx-362146415" + " " + "services-icon-drone"
      })))), external_react_default.a.createElement("div", {
        onClick: this.menuMobile,
        id: "menu-mobile-btn",
        className: "jsx-362146415" + " " + "menu-mobile-btn"
      }), external_react_default.a.createElement("ul", {
        id: "header_menu",
        className: "jsx-362146415" + " " + "header-menu"
      }, external_react_default.a.createElement("li", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/diseno-web"
      }, external_react_default.a.createElement("a", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement("p", {
        className: "jsx-362146415"
      }, "Dise\xF1o web")))), external_react_default.a.createElement("li", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/imagenes-de-drones"
      }, external_react_default.a.createElement("a", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement("p", {
        className: "jsx-362146415"
      }, "Im\xE1genes de drones")))), external_react_default.a.createElement("li", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement("a", {
        href: "/portafolio",
        className: "jsx-362146415"
      }, external_react_default.a.createElement("p", {
        className: "jsx-362146415"
      }, "Portafolio"))), external_react_default.a.createElement("li", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/conocenos"
      }, external_react_default.a.createElement("a", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement("p", {
        className: "jsx-362146415"
      }, "Con\xF3cenos")))), external_react_default.a.createElement("li", {
        className: "jsx-362146415" + " " + "sub-menu-btn"
      }, external_react_default.a.createElement("a", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement("p", {
        className: "jsx-362146415"
      }, "#TECNOVA.IO")), external_react_default.a.createElement("div", {
        className: "jsx-362146415" + " " + "sub-menu"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/viaje-de-trabajo"
      }, external_react_default.a.createElement("a", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement("p", {
        className: "jsx-362146415"
      }, "Viaje de trabajo"))))), external_react_default.a.createElement("li", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/contacto"
      }, external_react_default.a.createElement("a", {
        className: "jsx-362146415"
      }, external_react_default.a.createElement("p", {
        className: "jsx-362146415"
      }, "Contacto")))))), external_react_default.a.createElement("div", {
        style: {
          display: 'none'
        },
        className: "jsx-362146415" + " " + "header-socialNetwork"
      }, external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://www.facebook.com/profile.php?id=100009455848617",
        className: "jsx-362146415"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/facebookIcon.svg",
        alt: "",
        className: "jsx-362146415"
      })), external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://www.instagram.com/danilojesusv/",
        className: "jsx-362146415"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/instagramIcon.svg",
        alt: "",
        className: "jsx-362146415"
      })), external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
        className: "jsx-362146415"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/whatsapp.png",
        alt: "",
        className: "jsx-362146415"
      })))), external_react_default.a.createElement("div", {
        onClick: this.cortina,
        id: "cortina",
        className: "jsx-362146415" + " " + "cortina"
      }), external_react_default.a.createElement(style_default.a, {
        id: "362146415"
      }, [".cortina.jsx-362146415{background:black;opacity:.7;position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:991;}", ".cortina.active.jsx-362146415{display:block;}", ".header.jsx-362146415{background:linear-gradient(180deg,#9292926b 0,#ffffff00);position:absolute;top:0;left:0;width:100%;z-index:999;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:13px;font-weight:bold;padding:10px 0;}", ".header.active.jsx-362146415{overflow:inherit;}", ".header.jsx-362146415 a.jsx-362146415{color:white;}", ".header.jsx-362146415 .container.jsx-362146415{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".header-logo.jsx-362146415{display:inline-block;margin:10px;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1s;transition-delay:1s;font-family:Viga;font-size:20px;}", ".header-logo.active.jsx-362146415{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".header-menu.jsx-362146415{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}", ".header-menu.active.jsx-362146415{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".header-menu.jsx-362146415 a.jsx-362146415,.header-socialNetwork.jsx-362146415 a.jsx-362146415{margin:5px;padding:5px;-webkit-transition:.25s linear;transition:.25s linear;position:relative;}", ".header-menu.jsx-362146415 a.jsx-362146415:before,.header-socialNetwork.jsx-362146415 a.jsx-362146415:before{content:\"\";position:absolute;background:white;bottom:0px;width:0%;height:2px;-webkit-transition:.25s ease;transition:.25s ease;right:0;left:0;margin:auto;}", ".header-menu.jsx-362146415 a.jsx-362146415:hover:before,.header-socialNetwork.jsx-362146415 a.jsx-362146415:hover:before{width:100%;}", ".sub-menu.jsx-362146415{position:absolute;font-size:10px;opacity:0;visibility:hidden;-webkit-transition:.25s linear;transition:.25s linear;}", ".sub-menu-btn.jsx-362146415{cursor:pointer;}", ".sub-menu-btn.jsx-362146415:hover .sub-menu.jsx-362146415{opacity:1;visibility:visible;}", ".header-socialNetwork.jsx-362146415{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header-socialNetwork.jsx-362146415 a.jsx-362146415:hover img.jsx-362146415{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}", ".header-socialNetwork.jsx-362146415 figure.jsx-362146415{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-socialNetwork.jsx-362146415 figcaption.jsx-362146415{margin:10px;color:white;}", ".header-socialNetwork.jsx-362146415 img.jsx-362146415{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:15px;height:15px;}", ".menu-mobile-btn.jsx-362146415{display:none;cursor:pointer;}", ".services-icon.jsx-362146415{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-animation:float-jsx-362146415 10s infinite ease;animation:float-jsx-362146415 10s infinite ease;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}", ".services-icon.jsx-362146415:before{content:\"\";position:absolute;top:10px;left:-1px;width:17px;height:1.2px;background:white;border-radius:4px;-webkit-animation:helice-jsx-362146415 .3s infinite;animation:helice-jsx-362146415 .3s infinite;}", ".services-icon.jsx-362146415:after{content:\"\";position:absolute;top:10px;left:20px;width:17px;height:1.2px;background:white;border-radius:4px;-webkit-animation:helice-jsx-362146415 .3s infinite;animation:helice-jsx-362146415 .3s infinite;}", "@-webkit-keyframes float-jsx-362146415{0%{-webkit-transform:translate(120px,-30px) rotate(5deg);-ms-transform:translate(120px,-30px) rotate(5deg);transform:translate(120px,-30px) rotate(5deg);}30%{-webkit-transform:translate(350px,10px) rotate(0deg);-ms-transform:translate(350px,10px) rotate(0deg);transform:translate(350px,10px) rotate(0deg);}50%{-webkit-transform:translate(470px,10px) rotate(5deg);-ms-transform:translate(470px,10px) rotate(5deg);transform:translate(470px,10px) rotate(5deg);}80%{-webkit-transform:translate(450px,400px) rotate(0deg);-ms-transform:translate(450px,400px) rotate(0deg);transform:translate(450px,400px) rotate(0deg);}100%{-webkit-transform:translate(120px,-30px) rotate(-5deg);-ms-transform:translate(120px,-30px) rotate(-5deg);transform:translate(120px,-30px) rotate(-5deg);}}", "@keyframes float-jsx-362146415{0%{-webkit-transform:translate(120px,-30px) rotate(5deg);-ms-transform:translate(120px,-30px) rotate(5deg);transform:translate(120px,-30px) rotate(5deg);}30%{-webkit-transform:translate(350px,10px) rotate(0deg);-ms-transform:translate(350px,10px) rotate(0deg);transform:translate(350px,10px) rotate(0deg);}50%{-webkit-transform:translate(470px,10px) rotate(5deg);-ms-transform:translate(470px,10px) rotate(5deg);transform:translate(470px,10px) rotate(5deg);}80%{-webkit-transform:translate(450px,400px) rotate(0deg);-ms-transform:translate(450px,400px) rotate(0deg);transform:translate(450px,400px) rotate(0deg);}100%{-webkit-transform:translate(120px,-30px) rotate(-5deg);-ms-transform:translate(120px,-30px) rotate(-5deg);transform:translate(120px,-30px) rotate(-5deg);}}", "@-webkit-keyframes rotate360-jsx-362146415{0%{-webkit-transform:rotateY(45deg);-ms-transform:rotateY(45deg);transform:rotateY(45deg);}100%{-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);}}", "@keyframes rotate360-jsx-362146415{0%{-webkit-transform:rotateY(45deg);-ms-transform:rotateY(45deg);transform:rotateY(45deg);}100%{-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);}}", "@-webkit-keyframes helice-jsx-362146415{0%{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}100%{-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);}}", "@keyframes helice-jsx-362146415{0%{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}100%{-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);}}", "@media screen and (max-width:900px){.header-menu.jsx-362146415 a.jsx-362146415{font-size:12px;margin:2px;padding:5px;}}", "@media screen and (max-width:767px){.header-menu.jsx-362146415{position:absolute;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;right:-185px;top:10px;background:#00bcd4;padding:20px;-webkit-transition-delay:inherit;transition-delay:inherit;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;-webkit-transform:inherit;-ms-transform:inherit;transform:inherit;}.header-menu.active.jsx-362146415{right:20px;}.menu-mobile-btn.jsx-362146415{display:block;position:absolute;top:12px;right:20px;width:30px;height:30px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;background:white;}.menu-mobile-btn.jsx-362146415:before{content:\"\";position:absolute;top:10px;left:0;right:0;margin:auto;background:#bababa;width:18px;height:2px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;}.menu-mobile-btn.jsx-362146415:after{content:\"\";position:absolute;top:18px;left:0;right:0;margin:auto;background:#bababa;width:18px;height:2px;border-radius:4px;-webkit-transition:.25s ease;transition:.25s ease;}.menu-mobile-btn.active.jsx-362146415:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:14px;}.menu-mobile-btn.active.jsx-362146415:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:14px;}.menu-mobile-btn.active.jsx-362146415{right:210px;}.sub-menu.jsx-362146415{position:relative;opacity:1;visibility:visible;}@-webkit-keyframes float-jsx-362146415{0%{-webkit-transform:translate(120px,-30px) rotate(5deg);-ms-transform:translate(120px,-30px) rotate(5deg);transform:translate(120px,-30px) rotate(5deg);}20%{-webkit-transform:translate(170px,100px) rotate(5deg);-ms-transform:translate(170px,100px) rotate(5deg);transform:translate(170px,100px) rotate(5deg);}50%{-webkit-transform:translate(300px,200px) rotate(-5deg);-ms-transform:translate(300px,200px) rotate(-5deg);transform:translate(300px,200px) rotate(-5deg);}80%{-webkit-transform:translate(150px,350px);-ms-transform:translate(150px,350px);transform:translate(150px,350px);}100%{-webkit-transform:translate(120px,-30px);-ms-transform:translate(120px,-30px);transform:translate(120px,-30px);}}@keyframes float-jsx-362146415{0%{-webkit-transform:translate(120px,-30px) rotate(5deg);-ms-transform:translate(120px,-30px) rotate(5deg);transform:translate(120px,-30px) rotate(5deg);}20%{-webkit-transform:translate(170px,100px) rotate(5deg);-ms-transform:translate(170px,100px) rotate(5deg);transform:translate(170px,100px) rotate(5deg);}50%{-webkit-transform:translate(300px,200px) rotate(-5deg);-ms-transform:translate(300px,200px) rotate(-5deg);transform:translate(300px,200px) rotate(-5deg);}80%{-webkit-transform:translate(150px,350px);-ms-transform:translate(150px,350px);transform:translate(150px,350px);}100%{-webkit-transform:translate(120px,-30px);-ms-transform:translate(120px,-30px);transform:translate(120px,-30px);}}}", "@media screen and (max-width:650px){.header-socialNetwork.jsx-362146415 a.jsx-362146415{margin:0;}}", "@media screen and (max-width:400px){.header.jsx-362146415{font-size:12px;padding-top:18px;}.header.jsx-362146415 a.jsx-362146415{margin:0;}}"]));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Footer.js









var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Footer, _React$Component);

  function Footer() {
    Object(classCallCheck["a" /* default */])(this, Footer);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Footer).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", {
        className: "jsx-2020664685" + " " + "footer header"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2020664685" + " " + "container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2020664685" + " " + "footer-left"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2020664685" + " " + "header-socialNetwork"
      }, external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://www.facebook.com/Tecnova-115217153207217",
        className: "jsx-2020664685"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/facebookIcon.svg",
        alt: "",
        className: "jsx-2020664685"
      })), external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://www.instagram.com/tecnova.io/",
        className: "jsx-2020664685"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/instagramIcon.svg",
        alt: "",
        className: "jsx-2020664685"
      })), external_react_default.a.createElement("a", {
        target: "_blank",
        href: "https://api.whatsapp.com/send?phone=51931447041&text=Hola,%20quiero%20realizar%20mi%20proyecto",
        className: "jsx-2020664685"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/whatsapp.png",
        alt: "",
        className: "jsx-2020664685"
      })))), external_react_default.a.createElement("div", {
        className: "jsx-2020664685" + " " + "footer-right"
      }, external_react_default.a.createElement("p", {
        className: "jsx-2020664685"
      }, "Privacy Policy | \xA9 TECNOVA.IO 2019"))), external_react_default.a.createElement(style_default.a, {
        id: "2020664685"
      }, [".footer.jsx-2020664685{background:#13130d;}", ".footer.jsx-2020664685 .container.jsx-2020664685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 0;}", ".footer-left.jsx-2020664685{text-align:left;}", ".footer-right.jsx-2020664685{-webkit-flex:1;-ms-flex:1;flex:1;text-align:right;color:white;font-size:14px;}", ".header-socialNetwork.jsx-2020664685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header-socialNetwork.jsx-2020664685 a.jsx-2020664685:hover img.jsx-2020664685{box-shadow:0px 1px 15px rgba(0,0,0,0.85);}", ".header-socialNetwork.jsx-2020664685 figure.jsx-2020664685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-socialNetwork.jsx-2020664685 figcaption.jsx-2020664685{margin:10px;color:white;}", ".header-socialNetwork.jsx-2020664685 img.jsx-2020664685{border-radius:6px;box-shadow:none;-webkit-transition:.3s;transition:.3s;box-sizing:border-box;width:18px;height:18px;}", ".header-socialNetwork.jsx-2020664685 a.jsx-2020664685{margin:0 15px;}", "@media screen and (max-width:450px){.footer.jsx-2020664685 .header-socialNetwork.jsx-2020664685 a.jsx-2020664685{margin:0 5px;}.footer-right.jsx-2020664685{font-size:12px;}}"]));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "react-gtm-module"
var external_react_gtm_module_ = __webpack_require__("hI02");
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_);

// CONCATENATED MODULE: ./components/Layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout_Layout; });











var tagManagerArgs = {
  gtmId: 'GTM-MS5Q8GM'
};

var Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Layout, _React$Component);

  function Layout() {
    Object(classCallCheck["a" /* default */])(this, Layout);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Layout).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var width = window.innerWidth;
      external_react_gtm_module_default.a.initialize(tagManagerArgs);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          width = _this$props.width;
      return external_react_default.a.createElement("div", {
        className: "jsx-191241664" + " " + "Layout"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
        className: "jsx-191241664"
      }, title), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, user-scalable=no",
        className: "jsx-191241664"
      }), external_react_default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "",
        className: "jsx-191241664"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        className: "jsx-191241664"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        className: "jsx-191241664"
      }), external_react_default.a.createElement("script", {
        src: "https://apps.elfsight.com/p/platform.js",
        defer: true,
        className: "jsx-191241664"
      })), external_react_default.a.createElement(components_Header, null), children, external_react_default.a.createElement(components_Footer, null), external_react_default.a.createElement(style_default.a, {
        id: "191241664"
      }, ["@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Poppins';src:url(\"/static/fonts/Poppins-ExtraLight.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraLight.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraLight.svg\") format('svg');}", "@font-face{font-family:'Poppins-Bold';src:url(\"/static/fonts/Poppins-ExtraBold.eot\");src:local('\u263A'), url(\"/static/fonts/Poppins-ExtraBold.woff\") format('woff'), url(\"/static/fonts/Poppins-ExtraBold.ttf\") format('truetype'), url(\"/static/fonts/Poppins-ExtraBold.svg\") format('svg');}", "body{overflow-x:hidden;}", "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".Layout{height:100vh;font-family:\"Poppins\",Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;font-weight:600;font-style:normal;}", ".df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}", ".container{max-width:960px;width:94%;margin:auto;}", "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}", "article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}", "body{line-height:1;}", "ol,ul{list-style:none;}", "blockquote,q{quotes:none;}", "blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}", "table{border-collapse:collapse;border-spacing:0;}", "a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;}", "img{max-width:100%;height:auto;display:block;}", "@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@media screen and (max-width:600px){.Layout{font-size:14px;}h2{font-size:20px !important;}}"]));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);



/***/ }),

/***/ "5foh":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "7FvJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("40Gw");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "8R6+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buttons; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Buttons =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Buttons, _React$Component);

  function Buttons() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Buttons);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Buttons).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Buttons, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.props.clase
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: this.props.href
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn-white"
      }, this.props.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", null, "\n\t\t\t      \t.btn-white {\n\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tpadding: 13px 15px;\n\t\t\t\t\t\tbackground: white;\n\t\t\t\t\t\tcolor: #00BCD4;\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t\t\tmargin-left: 100px;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\t\tfont-family: Viga;\n\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t\ttransition: .3s linear;\n\t\t\t      \t}\n\t\t\t      \t.btn-white:hover {\n\t\t\t\t\t\tbackground: hsla(0,0%,100%,.85);\n\t\t\t      \t}\n\n\t\t\t      \t.colorWhite a {\n\t\t\t      \t\tcolor: gray;\n\t\t\t      \t\tmargin: 10px 0 0;\n\n\t\t\t      \t}\n\n\t\t\t      \t@media screen and (max-width: 500px) {\n\t\t\t      \t\t.btn-white {\n\t\t\t      \t\t\tfont-size: 14px;\n\t\t\t      \t\t\tpadding: 10px 13px;\n\t\t\t      \t\t\tmargin-left: 20px;\n\t\t\t      \t\t}\n\t\t\t      \t}\n\t\t\t      "));
    }
  }]);

  return Buttons;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "8v5W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HAE9");

/***/ }),

/***/ "9Wj7":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var anObject = __webpack_require__("D4ny");
var getKeys = __webpack_require__("djPm");

module.exports = __webpack_require__("fZVS") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


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

/***/ "ACkF":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


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

/***/ "AYVP":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "B8g0":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("0T/a");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZJRo").set });


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cBdl");

/***/ }),

/***/ "CgoH":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var LIBRARY = __webpack_require__("tFdt");
var wksExt = __webpack_require__("/aHj");
var defineProperty = __webpack_require__("OtwA").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "D4ny":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "EDr4":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("2jw7").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "Ev2A":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
var document = __webpack_require__("2jw7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "Ev2V":
/***/ (function(module, exports) {



/***/ }),

/***/ "G1Wo":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("d3Kl")('wks');
var uid = __webpack_require__("ewAR");
var Symbol = __webpack_require__("2jw7").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "G492":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "HAE9":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("p9MR");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "IxLI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jOCL");


/***/ }),

/***/ "JBiz":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aput");
var toLength = __webpack_require__("pasi");
var toAbsoluteIndex = __webpack_require__("G492");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "JFuE":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "JpU4":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("Q8jq");
var toIObject = __webpack_require__("aput");
var arrayIndexOf = __webpack_require__("JBiz")(false);
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


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

/***/ "Kk5c":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var defined = __webpack_require__("5foh");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "LqFA":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b4pn");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


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

/***/ "McIs":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


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

/***/ "Orek":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("iHhI");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8R6+");












var BannerServices =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(BannerServices, _React$Component);

  function BannerServices(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, BannerServices);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BannerServices).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handlePlayPause", function (e) {
      _this.setState({
        playing: !_this.state.playing
      });
    });

    _this.state = {
      i1: "https://www.youtube.com/embed/",
      i2: _this.props.iframe + "",
      i3: "?autoplay=1&controls=0&loop=1&mute=1&playlist=xJAwnCMgqCg",
      playing: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BannerServices, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.innerWidth < 1000) {
        this.setState({
          playing: false
        });
      }

      setTimeout(function () {
        var videoBanner = document.querySelector(".videoBanner-title");
        videoBanner.classList.add('active');
        var videoBannerParagraph = document.querySelector(".videoBanner-paragraph");
        videoBannerParagraph.classList.add('active');
      }, 1000);
      setTimeout(function () {
        var btnWhite = document.querySelector(".btn-white");
        btnWhite.classList.add('active');
        var btnWhite = document.querySelector(".btn-white.mobile");
        btnWhite.classList.add('active');
      }, 3300);
    }
  }, {
    key: "render",
    value: function render() {
      var playing = this.state.playing;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: this.props.styleBg,
        id: this.props.contactBefore,
        className: "jsx-3030539338" + " " + "videoBanner"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "videoBanner-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "vimeo-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_9___default.a, {
        url: this.state.i1 + this.state.i2 + this.state.i3,
        playing: playing,
        onPause: this.handlePause,
        className: "react-player"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "container videoBanner-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3030539338" + " " + "videoBanner-title"
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handlePlayPause,
        className: "jsx-3030539338" + " " + "btn-white"
      }, playing ? 'Detener video' : 'Reanudar video'), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handlePlayPause,
        className: "jsx-3030539338" + " " + "btn-white mobile"
      }, playing ? 'Detener video' : 'Ver video'), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-3030539338"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: this.props.style,
        className: "jsx-3030539338" + " " + "videoBanner-paragraph"
      }, this.props.text), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        clase: "colorWhite",
        href: this.props.href,
        name: this.props.btn
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "section-down"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "cuadrado"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "arrow-down"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "left"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3030539338" + " " + "right"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3030539338"
      }, [".btn-white{margin:35px 15px 10px 0 !important;padding:10px 30px !important;outline:none;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;cursor:pointer;}", ".btn-white.mobile{display:none;}", ".btn-white.active{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", "#contactBefore .vimeo-wrapper:before{display:none;}", ".videoBanner{height:85vh;position:relative;}", ".vimeo-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}", ".vimeo-wrapper:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(to right top,transparent 33%,black 33%,black 66%,transparent 66%);background-size:3px 3px;opacity:0.6;z-index:1;pointer-events:none;}", ".vimeo-wrapper .react-player{width:100vw;height:56.25vw;min-height:106vh;min-width:201.77vh;position:absolute;top:47%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".react-player{width:100% !important;height:100% !important;}", ".videoBanner-text{position:absolute;left:0;right:0;width:100%;top:-70px;bottom:0;height:90px;color:white;z-index:9;font-family:Viga;padding-left:20px;box-sizing:border-box;}", ".videoBanner-paragraph{max-width:400px;font-family:Poppins;margin:10px 0;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2.4s;transition-delay:2.4s;}", ".videoBanner-paragraph.active{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".videoBanner-title{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2s;transition-delay:2s;}", ".videoBanner-title.active{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".videoBanner-title br{display:none;}", "@media screen and (max-width:768px){.btn-white{display:none !important;}.btn-white.mobile{display:inline-block !important;}.videoBanner-title br{display:block;}}", "@media screen and (max-width:600px){.videoBanner{box-shadow:none;}.vimeo-wrapper video{left:80%;}.videoBanner-text{top:-130px;}.videoBanner-text br{display:none;}.videoBanner-title{font-size:35px;}.videoBanner-skills{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills li{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills p span{display:none;}}", "@media screen and (max-width:400px){.videoBanner-text{top:-60px;height:80px;}.videoBanner-title{font-size:25px;}.videoBanner-skills figure{margin-bottom:10px;}.videoBanner-skills img{width:25px;height:25px;}.videoBanner-skills h2{font-size:11px;}.videoBanner-skills p{font-size:9px;}}", "@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", ".section-down{position:absolute;bottom:1px;height:60px;left:0;width:100%;z-index:9;}", ".cuadrado{width:60px;height:60px;border-radius:6px 0px 0px 0px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background:white;position:absolute;left:95px;bottom:-32px;}", ".arrow-down{width:30px;height:20px;margin:0 0 0 -30px;position:absolute;left:140px;bottom:0px;-webkit-animation:arrow .6s 1s infinite ease-out alternate;animation:arrow .6s 1s infinite ease-out alternate;}", ".arrow-down:hover{-webkit-animation-play-state:paused;animation-play-state:paused;}", ".left{position:absolute;height:3px;width:15px;background:gray;-webkit-transform:rotate(230deg);top:13px;left:8px;border-radius:4px;-webkit-transform-origin:5px 50%;-ms-transform-origin:5px 50%;transform-origin:5px 50%;}", ".right{position:absolute;height:3px;width:15px;background:gray;-webkit-transform:rotate(-50deg);top:13px;left:13px;border-radius:4px;-webkit-transform-origin:5px 50%;-ms-transform-origin:5px 50%;transform-origin:5px 50%;}", "@-webkit-keyframes arrow{0%{bottom:0px;}100%{bottom:10px;}}", "@keyframes arrow{0%{bottom:0px;}100%{bottom:10px;}}", "@-webkit-keyframes leftArrow{100%{-webkit-transform:rotate(225deg);}}", "@keyframes leftArrow{100%{-webkit-transform:rotate(225deg);}}", "@-webkit-keyframes rightArrow{100%{-webkit-transform:rotate(-45deg);}}", "@keyframes rightArrow{100%{-webkit-transform:rotate(-45deg);}}"]));
    }
  }]);

  return BannerServices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (BannerServices);

/***/ }),

/***/ "OtwA":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var toPrimitive = __webpack_require__("LqFA");
var dP = Object.defineProperty;

exports.f = __webpack_require__("fZVS") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "Q8jq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


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

module.exports = __webpack_require__("r36L");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pDh1");

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

/***/ "UHw7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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









var HowMuch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(HowMuch, _React$Component);

  function HowMuch() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, HowMuch);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(HowMuch).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HowMuch, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-921149448" + " " + "howMuch"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          alignItems: 'stretch'
        },
        className: "jsx-921149448" + " " + "df"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-921149448" + " " + "df howMuch-web"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-921149448" + " " + "howMuch-about"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-921149448" + " " + "howMuch-about-bg"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-921149448" + " " + "howMuch-about-text"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-921149448"
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-921149448"
      }, this.props.description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contacto"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-921149448"
      }, this.props.btn))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-921149448" + " " + "howMuch-free-bg"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "921149448"
      }, [".howMuch-web.jsx-921149448{padding:70px 10px;box-sizing:border-box;width:50%;background:#f2f2f2;border:1px solid black;border-right:none;border-left:none;}", ".howMuch-web.jsx-921149448 h2.jsx-921149448{font-size:22px;margin-bottom:10px;box-sizing:border-box;font-family:Viga;}", ".howMuch-web.jsx-921149448 p.jsx-921149448{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:500px;}", ".howMuch-web.jsx-921149448 a.jsx-921149448{margin:auto;display:inline-block;padding:13px 15px;color:white;box-sizing:border-box;margin-top:10px;border-radius:4px;font-family:Viga;background:#00BCD4;}", ".howMuch-web-item.jsx-921149448{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".howMuch-web-item.jsx-921149448 img.jsx-921149448{width:180px;height:180px;margin-left:20px;}", ".howMuch-free-bg.jsx-921149448{width:50%;background:url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/montana.jpg?alt=media&token=414e0dd5-712a-4935-85e1-0102100f54fb) top center no-repeat;background:url(/static/img/Concert-CardyB-banner.jpg) top center no-repeat;background-size:cover;}", ".howMuch-about-text.jsx-921149448{text-align:left;padding-top:3%;padding-left:4%;padding-right:2%;box-sizing:border-box;}", ".howMuch-about-text.jsx-921149448 h2.jsx-921149448{font-size:22px;margin-bottom:10px;font-family:Viga;position:relative;}", ".howMuch-about-text.jsx-921149448 h2.jsx-921149448:before{content:\"\";position:absolute;width:50px;height:3px;background:#00BCD4;top:-15px;left:0;}", ".howMuch-about-text.jsx-921149448 p.jsx-921149448{line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;color:#656565;}", "@media screen and (max-width:900px){.howMuch-web.jsx-921149448 h2.jsx-921149448,.howMuch-web.jsx-921149448 p.jsx-921149448,.howMuch-web.jsx-921149448 a.jsx-921149448{margin-left:30px;}}", "@media screen and (max-width:767px){.howMuch.jsx-921149448 .df.jsx-921149448{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.howMuch-web.jsx-921149448{width:100%;}.howMuch-free-bg.jsx-921149448{height:300px;width:100%;}.howMuch-about-text.jsx-921149448{padding:0 20px 0 0;}}"]));
    }
  }]);

  return HowMuch;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (HowMuch);

/***/ }),

/***/ "UOkd":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("cQhG") });


/***/ }),

/***/ "Vl3p":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("aput");
var gOPN = __webpack_require__("2HZK").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "WSfB":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("k8Q4");
__webpack_require__("tCzM");
module.exports = __webpack_require__("/aHj").f('iterator');


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

/***/ "XOdh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("cQhG");
var descriptor = __webpack_require__("+EWW");
var setToStringTag = __webpack_require__("wNhr");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("jOCL")(IteratorPrototype, __webpack_require__("G1Wo")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WSfB");

/***/ }),

/***/ "XY+j":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d3Kl")('keys');
var uid = __webpack_require__("ewAR");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "Y2Qe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./components/BannerServicesInterna.js
var BannerServicesInterna = __webpack_require__("Orek");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/DisenoEstetico.js









var DisenoEstetico_DisenoEstetico =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DisenoEstetico, _React$Component);

  function DisenoEstetico() {
    Object(classCallCheck["a" /* default */])(this, DisenoEstetico);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DisenoEstetico).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(DisenoEstetico, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-3848009774" + " " + "disenoEstetico"
      }, external_react_default.a.createElement("div", {
        style: {
          alignItems: 'flex-start'
        },
        className: "jsx-3848009774" + " " + "df"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3848009774" + " " + "disenoEstetico-web"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3848009774" + " " + "title-h2"
      }, "DISE\xD1O EST\xC9TICO"), external_react_default.a.createElement("p", {
        className: "jsx-3848009774" + " " + "paragraph-small"
      }, "Destacarse de la multitud. La mayor\xEDa de nosotros elegimos productos no solo por su funcionalidad, sino tambi\xE9n porque son agradables a la vista. Un buen sitio web es tambi\xE9n un dise\xF1o est\xE9tico. Nuestra empresa presta especial atenci\xF3n a los detalles. Sin \xE9l, ning\xFAn producto ser\xE1 perfecto."), external_react_default.a.createElement(link_default.a, {
        href: "/portafolio"
      }, external_react_default.a.createElement("a", {
        className: "jsx-3848009774" + " " + "btn-action"
      }, "DESCUBRIR"))), external_react_default.a.createElement("div", {
        className: "jsx-3848009774" + " " + "disenoEstetico-bg"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-3848009774" + " " + "disenoEstetico-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3848009774" + " " + "disenoEstetico-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/profe.jpg?alt=media&token=e02ac6a9-5665-4e85-98ce-c272b0de9693) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-3848009774" + " " + "disenoEstetico-item-img"
      }))))), external_react_default.a.createElement(style_default.a, {
        id: "3848009774"
      }, [".disenoEstetico.jsx-3848009774{margin:80px auto;}", ".disenoEstetico-web.jsx-3848009774{background:linear-gradient(to right,rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);padding:100px 130px 100px 40px;box-sizing:border-box;text-align:left;color:white;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);}", ".disenoEstetico-web.jsx-3848009774 h2.jsx-3848009774{font-size:22px;max-width:300px;margin:0 auto 10px;padding-right:70px;box-sizing:border-box;margin-left:100px;font-family:'Viga';}", ".disenoEstetico-web.jsx-3848009774 p.jsx-3848009774{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:300px;margin-left:100px;}", ".disenoEstetico-web.jsx-3848009774 a.jsx-3848009774{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:16px;border-radius:4px;font-family:Viga;}", ".disenoEstetico-bg.jsx-3848009774{width:40%;position:relative;}", ".disenoEstetico-item.jsx-3848009774{margin:10px auto;height:570px;width:950px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;position:absolute;left:-30px;}", ".disenoEstetico-item-mascara.jsx-3848009774{height:492px;overflow:hidden;position:relative;}", ".disenoEstetico-item-img.jsx-3848009774{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:41px;right:0;left:0;margin:auto;border-radius:2px;height:453px;background-size:cover;}", "@media screen and (max-width:1024px){.disenoEstetico-web.jsx-3848009774{padding:70px 50px 70px 0;margin-left:2%;}.disenoEstetico-web.jsx-3848009774 h2.jsx-3848009774{margin-left:70px;}.disenoEstetico-web.jsx-3848009774 p.jsx-3848009774{margin-left:70px;}.disenoEstetico-web.jsx-3848009774 a.jsx-3848009774{margin-left:70px;}.disenoEstetico-item.jsx-3848009774{height:490px;width:830px;}.disenoEstetico-item-mascara.jsx-3848009774{height:426px;}.disenoEstetico-item-img.jsx-3848009774{top:30px;}}", "@media screen and (max-width:767px){.disenoEstetico.jsx-3848009774{margin-bottom:0;margin-top:50px;}.disenoEstetico.jsx-3848009774 .df.jsx-3848009774{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.disenoEstetico-web.jsx-3848009774{width:80%;margin:auto;padding-right:0;}.disenoEstetico-web.jsx-3848009774 h2.jsx-3848009774{margin:0 auto 10px auto;padding:0;}.disenoEstetico-web.jsx-3848009774 p.jsx-3848009774{margin:auto;}.disenoEstetico-web.jsx-3848009774 a.jsx-3848009774{margin:10px auto 0;max-width:120px;display:block;}.disenoEstetico-bg.jsx-3848009774{width:530px;margin:auto;margin-top:40px;}.disenoEstetico-item.jsx-3848009774{position:inherit;left:0;width:auto;height:320px;}.disenoEstetico-item-mascara.jsx-3848009774{height:320px;}.disenoEstetico-item-img.jsx-3848009774{top:23px;height:256px;}}", "@media screen and (max-width:530px){.disenoEstetico-web.jsx-3848009774{padding:40px 20px;width:90%;}.disenoEstetico-bg.jsx-3848009774{width:300px;margin:auto;margin-top:40px;}.disenoEstetico-item.jsx-3848009774{height:180px;}.disenoEstetico-item-mascara.jsx-3848009774{height:160px;}.disenoEstetico-item-img.jsx-3848009774{top:13px;height:142px;}}"]));
    }
  }]);

  return DisenoEstetico;
}(external_react_default.a.Component);

/* harmony default export */ var components_DisenoEstetico = (DisenoEstetico_DisenoEstetico);
// CONCATENATED MODULE: ./components/AvailableMobiles.js









var AvailableMobiles_AvailableMobiles =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AvailableMobiles, _React$Component);

  function AvailableMobiles() {
    Object(classCallCheck["a" /* default */])(this, AvailableMobiles);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AvailableMobiles).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(AvailableMobiles, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile"
      }, external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "df"
      }, external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile-free-bg"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-365154154" + " " + "availableMobile-responsive"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/responsive.jpg",
        alt: "",
        className: "jsx-365154154"
      })), external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "df availableMobile-about"
      }, external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile-about-text"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-365154154"
      }, "DISPONIBLE EN M\xD3VILES"), external_react_default.a.createElement("p", {
        className: "jsx-365154154"
      }, "Nos especializamos en la creaci\xF3n de sitios web totalmente sensibles que se ajustan perfectamente a cualquier tipo de dispositivo. ", external_react_default.a.createElement("br", {
        className: "jsx-365154154"
      }), "El proyecto realizado en tal t\xE9cnica se muestra bien en tel\xE9fonos inteligentes, tabletas, pantallas grandes o incluso televisores.")))), external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile-web"
      }, external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile-web-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile-web-text"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-365154154"
      }, "GOOGLE ANALYTICS"), external_react_default.a.createElement("p", {
        className: "jsx-365154154"
      }, "Compruebe qui\xE9n y cu\xE1ndo ha visitado su sitio, c\xF3mo lo encontr\xF3 y qu\xE9 es lo que m\xE1s interesa a sus visitantes. Con Google Analytics integrado, tendr\xE1 acceso a todos los datos.")), external_react_default.a.createElement("img", {
        src: "https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/ico-results.svg?alt=media&token=40067b4a-3df3-4181-a66c-7219e4f91c43",
        alt: "",
        className: "jsx-365154154"
      })), external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile-web-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-365154154" + " " + "availableMobile-web-text"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-365154154"
      }, "SEO AMIGABLE"), external_react_default.a.createElement("p", {
        className: "jsx-365154154"
      }, "Nuestros proyectos est\xE1n dise\xF1ados y optimizados para posicionamiento en Google.")), external_react_default.a.createElement("img", {
        src: "https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/analysis.svg?alt=media&token=61b74837-9d32-41c5-b9cf-1d4e218d64da",
        alt: "",
        className: "jsx-365154154" + " " + "seo-img"
      })))), external_react_default.a.createElement(style_default.a, {
        id: "365154154"
      }, [".availableMobile.jsx-365154154{margin-top:140px;margin-bottom:0;}", ".availableMobile-web.jsx-365154154{background:#fca926;padding:50px 20px;box-sizing:border-box;text-align:right;color:white;width:45%;margin-left:4%;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);margin-top:40px;}", ".availableMobile-web.jsx-365154154 h2.jsx-365154154{font-size:22px;max-width:300px;margin-bottom:10px;box-sizing:border-box;font-family:Viga;}", ".availableMobile-web.jsx-365154154 p.jsx-365154154{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:300px;}", ".availableMobile-web.jsx-365154154 a.jsx-365154154{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:14px;border-radius:4px;}", ".availableMobile-web-item.jsx-365154154{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:10px 0;}", ".availableMobile-web-item.jsx-365154154 img.jsx-365154154{width:180px;height:180px;margin-left:20px;}", ".availableMobile-free-bg.jsx-365154154{width:40%;}", ".availableMobile-responsive.jsx-365154154{margin-left:-70px;}", ".availableMobile-about.jsx-365154154{-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", ".availableMobile-about-text.jsx-365154154{text-align:left;margin-top:40px;padding-top:3%;padding-left:4%;padding-right:2%;box-sizing:border-box;}", ".availableMobile-about-text.jsx-365154154 h2.jsx-365154154{font-size:22px;margin-bottom:10px;font-family:Viga;position:relative;}", ".availableMobile-about-text.jsx-365154154 h2.jsx-365154154:before{content:\"\";position:absolute;width:50px;height:3px;background:#00BCD4;top:-15px;left:0;}", ".availableMobile-about-text.jsx-365154154 p.jsx-365154154{line-height:1.3;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;color:#656565;}", ".availableMobile-web-item.jsx-365154154 .seo-img.jsx-365154154{width:150px;margin-left:40px;margin-right:20px;}", "@media screen and (max-width:1150px){.availableMobile-web-item.jsx-365154154 img.jsx-365154154{width:120px;height:120px;}.availableMobile-web-item.jsx-365154154 .seo-img.jsx-365154154{margin-left:10px;margin-right:-10px;width:110px;}}", "@media screen and (max-width:1024px){.availableMobile-web.jsx-365154154{width:50%;}}", "@media screen and (max-width:900px){.availableMobile-web.jsx-365154154{padding:50px 10px 50px 10px;}.availableMobile-web-item.jsx-365154154 img.jsx-365154154{width:90px;height:90px;}}", "@media screen and (max-width:767px){.availableMobile.jsx-365154154{margin-top:50px;}.availableMobile.jsx-365154154 .df.jsx-365154154{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.availableMobile-free-bg.jsx-365154154{width:90%;margin:auto;}.availableMobile-responsive.jsx-365154154{margin-left:0;}.availableMobile-web.jsx-365154154{width:80%;margin:40px auto;padding:30px 80px;}.availableMobile-items.jsx-365154154{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.availableMobile-web-item.jsx-365154154{margin:30px 0;}.availableMobile-left.jsx-365154154{width:100%;}.availableMobile-web.jsx-365154154 h2.jsx-365154154,.availableMobile-web.jsx-365154154 p.jsx-365154154{max-width:100%;}}", "@media screen and (max-width:600px){.availableMobile-web.jsx-365154154{padding:20px;width:90%;}.availableMobile-web.jsx-365154154 h2.jsx-365154154,.availableMobile-web.jsx-365154154 p.jsx-365154154,.availableMobile-web.jsx-365154154 a.jsx-365154154{margin:10px 0 5px 0;}.availableMobile-web-item.jsx-365154154{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;margin:15px auto;}.availableMobile-web-item.jsx-365154154 img.jsx-365154154{margin-left:0;margin-top:10px;}}"]));
    }
  }]);

  return AvailableMobiles;
}(external_react_default.a.Component);

/* harmony default export */ var components_AvailableMobiles = (AvailableMobiles_AvailableMobiles);
// EXTERNAL MODULE: ./components/WebsiteFree.js
var WebsiteFree = __webpack_require__("/JtU");

// CONCATENATED MODULE: ./components/UxEditable.js









var UxEditable_UxEditable =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(UxEditable, _React$Component);

  function UxEditable() {
    Object(classCallCheck["a" /* default */])(this, UxEditable);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UxEditable).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(UxEditable, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-2031570505" + " " + "UxEditable"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2031570505" + " " + "df"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2031570505" + " " + "services-web"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-2031570505"
      }, "EXPERIENCIA POSITIVA ", external_react_default.a.createElement("br", {
        className: "jsx-2031570505"
      }), "DE USUARIO"), external_react_default.a.createElement("p", {
        className: "jsx-2031570505"
      }, "Proyecto moderno e individual que se adapta a su negocio e industria. Estamos interesados \u200B\u200Ben el dise\xF1o web de tal manera que el producto sea funcional, intuitivo y atractivo para el usuario."), external_react_default.a.createElement(link_default.a, {
        href: "/portafolio"
      }, external_react_default.a.createElement("a", {
        className: "jsx-2031570505"
      }, "VER PORTAFOLIO"))), external_react_default.a.createElement("div", {
        className: "jsx-2031570505" + " " + "services-free-bg"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2031570505" + " " + "services-free"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-2031570505"
      }, "COMPLETAMENTE ", external_react_default.a.createElement("br", {
        className: "jsx-2031570505"
      }), "EDITABLE!"), external_react_default.a.createElement("p", {
        className: "jsx-2031570505"
      }, "Sistema de gesti\xF3n de contenido simple e intuitivo que le permite cambiar el contenido de su sitio web de forma independiente y gratuita.  Le ense\xF1aremos c\xF3mo editar su sitio web en el futuro.")))), external_react_default.a.createElement(style_default.a, {
        id: "2031570505"
      }, [".UxEditable.jsx-2031570505{margin:80px auto;}", ".UxEditable-item.jsx-2031570505{margin:10px auto;height:570px;width:950px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;position:absolute;left:-30px;}", ".UxEditable-item-mascara.jsx-2031570505{height:492px;overflow:hidden;position:relative;}", ".UxEditable-item-img.jsx-2031570505{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:41px;right:0;left:0;margin:auto;border-radius:2px;height:453px;background-size:cover;}", ".services.jsx-2031570505{padding-top:80px;}", ".services-web.jsx-2031570505{background:linear-gradient(to right,rgba(0,165,194,1) 0%,rgba(0,196,214,1) 100%);padding:100px 130px 100px 40px;box-sizing:border-box;text-align:left;color:white;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);}", ".services-web.jsx-2031570505 h2.jsx-2031570505{font-size:22px;max-width:300px;margin:0 auto 10px;box-sizing:border-box;margin-left:100px;font-family:'Viga';}", ".services-web.jsx-2031570505 p.jsx-2031570505{line-height:1.2;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;max-width:300px;margin-left:100px;}", ".services-web.jsx-2031570505 a.jsx-2031570505{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:16px;border-radius:4px;font-family:Viga;}", ".services-free-bg.jsx-2031570505{width:40%;position:relative;}", ".services-free.jsx-2031570505{background:linear-gradient(to right,rgba(255,255,255,0.2) 0%,rgba(237,237,237,0.4) 100%);position:relative;box-shadow:0 40px 120px -20px rgba(0,0,0,0.6);padding:70px 150px;text-align:left;position:absolute;left:-90px;box-sizing:border-box;top:-160px;}", ".services-free.jsx-2031570505 h2.jsx-2031570505{font-size:22px;margin-bottom:10px;position:relative;z-index:1;font-family:Viga;}", ".services-free.jsx-2031570505 p.jsx-2031570505{margin-bottom:10px;position:relative;line-height:1.2;z-index:1;}", ".services-free.jsx-2031570505 a.jsx-2031570505{margin:auto;display:inline-block;padding:13px 15px;background:#00BCD4;color:white;box-sizing:border-box;margin-top:10px;font-size:16px;border-radius:4px;font-family:Viga;}", "@media screen and (max-width:1180px){.services-web.jsx-2031570505{margin-left:30px;padding-left:10px;}.services-web.jsx-2031570505 h2.jsx-2031570505,.services-web.jsx-2031570505 p.jsx-2031570505,.services-web.jsx-2031570505 a.jsx-2031570505{margin-left:50px;}.services-free-bg.jsx-2031570505{width:45%;}.services-free.jsx-2031570505{top:-140px;padding:70px 40px 70px 80px;left:-60px;margin-right:30px;}}", "@media screen and (max-width:900px){.services-free.jsx-2031570505{top:-160px;}.services-web.jsx-2031570505{padding-right:70px;}}", "@media screen and (max-width:767px){.UxEditable.jsx-2031570505{margin:50px auto;}.UxEditable.jsx-2031570505 .df.jsx-2031570505{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-web.jsx-2031570505{margin:0;width:90%;padding:60px 110px;}.services-web.jsx-2031570505 h2.jsx-2031570505,.services-web.jsx-2031570505 p.jsx-2031570505,.services-web.jsx-2031570505 a.jsx-2031570505{margin-left:0px;max-width:100%;}.services-free-bg.jsx-2031570505{width:80%;}.services-free.jsx-2031570505{position:relative;top:-30px;width:100%;padding:80px 60px 50px 60px;left:0;right:0;margin:auto;}}", "@media screen and (max-width:530px){.UxEditable.jsx-2031570505 .df.jsx-2031570505{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-web.jsx-2031570505{padding:50px 30px;}.services-web.jsx-2031570505 a.jsx-2031570505{font-size:14px;}.services-free.jsx-2031570505{padding:50px 30px 40px 30px;}}"]));
    }
  }]);

  return UxEditable;
}(external_react_default.a.Component);

/* harmony default export */ var components_UxEditable = (UxEditable_UxEditable);
// EXTERNAL MODULE: ./components/HowMuch.js
var HowMuch = __webpack_require__("UHw7");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/diseno-web.js















var diseno_web_Disenoweb =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Disenoweb, _React$Component);

  function Disenoweb() {
    Object(classCallCheck["a" /* default */])(this, Disenoweb);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Disenoweb).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Disenoweb, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Layout["a" /* default */], {
        title: "Viaja con Danilo"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Dise\xF1o web profesional y est\xE9tico TECNOVA.IO - Tecnova.io"), external_react_default.a.createElement("meta", {
        name: "title",
        content: "Dise\xF1o web profesional y est\xE9tico TECNOVA.IO - Tecnova.io"
      }), external_react_default.a.createElement("meta", {
        name: "description",
        content: "El dise\xF1o web de TECNOVA.IO se distingue por: profesionalismo, dise\xF1o est\xE9tico, atenci\xF3n especial a los detalles, disponibilidad en tel\xE9fonos inteligentes, SEO amigable."
      }), external_react_default.a.createElement("meta", {
        property: "og:type",
        content: "website"
      }), external_react_default.a.createElement("meta", {
        property: "og:url",
        content: "https://www.tecnova.io/diseno-web"
      }), external_react_default.a.createElement("meta", {
        property: "og:title",
        content: "Dise\xF1o web profesional y est\xE9tico TECNOVA.IO - Tecnova.io"
      }), external_react_default.a.createElement("meta", {
        property: "og:description",
        content: "El dise\xF1o web de TECNOVA.IO se distingue por: profesionalismo, dise\xF1o est\xE9tico, atenci\xF3n especial a los detalles, disponibilidad en tel\xE9fonos inteligentes, SEO amigable."
      }), external_react_default.a.createElement("meta", {
        property: "og:image",
        content: ""
      }), external_react_default.a.createElement("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), external_react_default.a.createElement("meta", {
        property: "twitter:url",
        content: "https://www.tecnova.io/diseno-web"
      }), external_react_default.a.createElement("meta", {
        property: "twitter:title",
        content: "Dise\xF1o web profesional y est\xE9tico TECNOVA.IO - Tecnova.io"
      }), external_react_default.a.createElement("meta", {
        property: "twitter:description",
        content: "El dise\xF1o web de TECNOVA.IO se distingue por: profesionalismo, dise\xF1o est\xE9tico, atenci\xF3n especial a los detalles, disponibilidad en tel\xE9fonos inteligentes, SEO amigable."
      }), external_react_default.a.createElement("meta", {
        property: "twitter:image",
        content: ""
      })), external_react_default.a.createElement(BannerServicesInterna["a" /* default */], {
        iframe: "0AVP-nxv3aw",
        title: "Dise\xF1o web",
        text: "Brindamos servicios digitales frescos y creativos. A empresas que quieran crecer online. El dise\xF1o web es nuestro servicio clave.",
        btn: "Iniciar un proyecto",
        href: "/contacto"
      }), external_react_default.a.createElement(components_DisenoEstetico, null), external_react_default.a.createElement(components_AvailableMobiles, null), external_react_default.a.createElement(WebsiteFree["a" /* default */], null), external_react_default.a.createElement(components_UxEditable, null), external_react_default.a.createElement(HowMuch["a" /* default */], {
        title: "\xBFCU\xC1NTO CUESTA?",
        description: "No tenemos una lista de precios fijos. Cada proyecto se valora individualmente en funci\xF3n del n\xFAmero de pesta\xF1as y el nivel de complejidad del sitio web. Rellene el formulario para obtener la cotizaci\xF3n exacta.",
        btn: "COMENZAR PROYECTO"
      }));
    }
  }]);

  return Disenoweb;
}(external_react_default.a.Component);

/* harmony default export */ var diseno_web = __webpack_exports__["default"] = (diseno_web_Disenoweb);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Ym6j":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("1077");
var createDesc = __webpack_require__("+EWW");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var has = __webpack_require__("Q8jq");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("fZVS") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "YndH":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ewAR")('meta');
var isObject = __webpack_require__("b4pn");
var has = __webpack_require__("Q8jq");
var setDesc = __webpack_require__("OtwA").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("14Ie")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sli4");

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

/***/ "ZJRo":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("b4pn");
var anObject = __webpack_require__("D4ny");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("vCXk")(Function.call, __webpack_require__("Ym6j").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


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

/***/ "aput":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("i6sE");
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "b4pn":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


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

/***/ "bh8V":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cBdl":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("hc2F");
module.exports = __webpack_require__("p9MR").Object.getPrototypeOf;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cQhG":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("D4ny");
var dPs = __webpack_require__("9Wj7");
var enumBugKeys = __webpack_require__("ACkF");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Ev2A")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("EDr4").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


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

/***/ "d3Kl":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("p9MR");
var global = __webpack_require__("2jw7");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("tFdt") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "djPm":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("JpU4");
var enumBugKeys = __webpack_require__("ACkF");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "ewAR":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "fZVS":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("14Ie")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "hI02":
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "hc2F":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("AYVP");
var $getPrototypeOf = __webpack_require__("/wxW");

__webpack_require__("wWUK")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7FvJ");

/***/ }),

/***/ "i6sE":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("bh8V");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "iHhI":
/***/ (function(module, exports) {

module.exports = require("react-player");

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

/***/ "jOCL":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");
module.exports = __webpack_require__("fZVS") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "k8Q4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("Kk5c")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("5Kld")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "p9MR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "pDh1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("B8g0");
module.exports = __webpack_require__("p9MR").Object.setPrototypeOf;


/***/ }),

/***/ "pH/F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("fZVS") && !__webpack_require__("14Ie")(function () {
  return Object.defineProperty(__webpack_require__("Ev2A")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "pasi":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("qBJy");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "qBJy":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "r36L":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("UOkd");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s+ck":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


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

/***/ "sipE":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "sli4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0lY0");
__webpack_require__("Ev2V");
__webpack_require__("0Sc/");
__webpack_require__("0k/M");
module.exports = __webpack_require__("p9MR").Symbol;


/***/ }),

/***/ "tCzM":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+lRa");
var global = __webpack_require__("2jw7");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var TO_STRING_TAG = __webpack_require__("G1Wo")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "tFdt":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "taoM":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("bh8V");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "vCXk":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8v5W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ "wNhr":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("OtwA").f;
var has = __webpack_require__("Q8jq");
var TAG = __webpack_require__("G1Wo")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "wWUK":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("0T/a");
var core = __webpack_require__("p9MR");
var fails = __webpack_require__("14Ie");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });