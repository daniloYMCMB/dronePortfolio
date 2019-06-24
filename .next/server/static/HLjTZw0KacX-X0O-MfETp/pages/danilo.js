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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+623");


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
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        className: "jsx-2187934518"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        className: "jsx-2187934518"
      })), children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2187934518"
      }, ["@font-face{font-family:'Viga';src:url(\"/static/fonts/Viga-Regular.eott\");src:local('\u263A'), url(\"/static/fonts/Viga-Regular.woff\") format('woff'), url(\"/static/fonts/Viga-Regular.ttf\") format('truetype'), url(\"/static/fonts/Viga-Regular.svg\") format('svg');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Montserrat';src:url('/static/fonts/Montserrat-Regular.woff2') format('woff2'), url('/static/fonts/Montserrat-Regular.woff') format('woff');font-weight:normal;font-style:normal;}", "body{overflow-x:hidden;}", ".Layout{height:100vh;font-family:'Viga';}", ".df{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}", ".container{max-width:960px;width:94%;margin:auto;}", "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}", "article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}", "body{line-height:1;}", "ol,ul{list-style:none;}", "blockquote,q{quotes:none;}", "blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}", "table{border-collapse:collapse;border-spacing:0;}", "a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}", ".fp-controlArrow.fp-prev{width:30px !important;}", "@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}", ".firstSection{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(/static/img/bg1.svg) -233px 0px;background-size:cover;height:100%;position:relative;}", ".firstSection:before{content:\"\";background:url(/static/img/nubes1.svg) -35px 0px;background-size:cover;position:absolute;bottom:0;left:0;right:0;width:100%;height:30vh;}", ".firstSection:after{content:\"\";background:url(/static/img/arrow-down.svg);background-size:cover;position:absolute;bottom:30px;left:0;right:0;margin:auto;width:30px;height:30px;z-index:9;}", ".secondSection{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".section3{position:relative;}", ".section3:before{content:\"\";background:url(/static/img/nubes3.svg) center center no-repeat;background-size:cover;position:absolute;bottom:0;left:0;width:100%;z-index:9;height:30vh;}", "@media screen and (max-width:1024px){.section3:before{height:30vh;z-index:10;background-size:inherit;}}", "@media screen and (max-width:767px){.slide{overflow:hidden;}.fp-right{display:none;}.fp-controlArrow.fp-prev{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);left:10px;}.fp-controlArrow.fp-next{border:none;background:url(/static/img/arrow-down.svg);background-size:cover;width:30px;height:30px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);right:10px;}}", "@-webkit-keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes translateBottomToTop{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}"]), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "https://apps.elfsight.com/p/platform.js",
        defer: true,
        className: "jsx-2187934518"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



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

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "UOkd":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("cQhG") });


/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ge64");

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

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

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

/***/ "gRaj":
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage");

/***/ }),

/***/ "ge64":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mlGW");
module.exports = __webpack_require__("p9MR").Object.assign;


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
    value: function handleDown() {// fullpage_api.moveSectionDown();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-576890789" + " " + "videoBanner"
      }, external_react_default.a.createElement("div", {
        className: "jsx-576890789" + " " + "videoBanner-container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-576890789" + " " + "vimeo-wrapper"
      }, external_react_default.a.createElement("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/xJAwnCMgqCg?autoplay=1&controls=0&loop=1&mute=1&playlist=xJAwnCMgqCg",
        frameBorder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        className: "jsx-576890789"
      }), external_react_default.a.createElement("div", {
        className: "jsx-576890789" + " " + "container videoBanner-text"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-576890789" + " " + "videoBanner-title"
      }, "\xBFNecesita mostrar ", external_react_default.a.createElement("br", {
        className: "jsx-576890789"
      }), " su proyecto eficientemente?")), external_react_default.a.createElement("ul", {
        className: "jsx-576890789" + " " + "df container videoBanner-skills"
      }, external_react_default.a.createElement("li", {
        className: "jsx-576890789"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-576890789"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-576890789" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/responsive.svg",
        alt: "",
        className: "jsx-576890789"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-576890789"
      }, "DESARROLLO WEB")), external_react_default.a.createElement("p", {
        className: "jsx-576890789"
      }, "P\xE1ginas web profesionales y \xFAnicas son nuestro servicio clave. ", external_react_default.a.createElement("span", {
        className: "jsx-576890789"
      }, "Disponible en dispositivos m\xF3viles, listo para SEO (Google).")))), external_react_default.a.createElement("li", {
        className: "jsx-576890789"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-576890789"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-576890789" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/drone.svg",
        alt: "",
        className: "jsx-576890789"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-576890789"
      }, "IM\xC1GENES DE DRONES")), external_react_default.a.createElement("p", {
        className: "jsx-576890789"
      }, "Brindamos servicios de fotograf\xEDa y video a\xE9reo con drones. ", external_react_default.a.createElement("span", {
        className: "jsx-576890789"
      }, "Certificados con licencia para conducir drones.")))), external_react_default.a.createElement("li", {
        className: "jsx-576890789"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-576890789"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-576890789" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/profiles.svg",
        alt: "",
        className: "jsx-576890789"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-576890789"
      }, "PORTAFOLIO")), external_react_default.a.createElement("p", {
        className: "jsx-576890789"
      }, "Vea nuestros \xFAltimos proyectos de sitios web y videos a\xE9reos. ", external_react_default.a.createElement("span", {
        className: "jsx-576890789"
      }, "\xDAnase a nuestra lista de clientes satisfechos.")))), external_react_default.a.createElement("li", {
        className: "jsx-576890789"
      }, external_react_default.a.createElement("a", {
        href: "",
        className: "jsx-576890789"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-576890789" + " " + "df"
      }, external_react_default.a.createElement("img", {
        src: "/static/img/handshake.svg",
        alt: "",
        className: "jsx-576890789"
      }), external_react_default.a.createElement("h2", {
        className: "jsx-576890789"
      }, "SERVICIO GRATUITO")), external_react_default.a.createElement("p", {
        className: "jsx-576890789"
      }, "Consulte nuestra oferta de trabajo y viaje ", external_react_default.a.createElement("span", {
        className: "jsx-576890789"
      }, "para obtener informaci\xF3n ahora y obtener nuestros servicios gratuitos"))))))), external_react_default.a.createElement(style_default.a, {
        id: "576890789"
      }, [".videoBanner.jsx-576890789{height:100vh;box-shadow:0 40px 120px -20px rgba(0,0,0,.6);}", ".vimeo-wrapper.jsx-576890789{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}", ".vimeo-wrapper.jsx-576890789:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.6;z-index:1;pointer-events:none;}", ".vimeo-wrapper.jsx-576890789 iframe.jsx-576890789{width:100vw;height:56.25vw;min-height:106vh;min-width:201.77vh;position:absolute;top:47%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".videoBanner-text.jsx-576890789{position:absolute;left:0;right:0;width:100%;top:-100px;bottom:0;height:130px;color:white;z-index:9;font-family:Montserrat;text-align:center;}", ".videoBanner-title.jsx-576890789{font-size:55px;font-weight:bold;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2s;transition-delay:2s;}", ".videoBanner-title.active.jsx-576890789{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".videoBanner-title.jsx-576890789 br.jsx-576890789{display:none;}", ".videoBanner-skills.jsx-576890789{font-size:17px;box-sizing:border-box;position:absolute;bottom:1px;left:0;right:0;font-size:12px;z-index:99;text-align:left;font-family:Montserrat;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:2.5s;transition-delay:2.5s;}", ".videoBanner-skills.active.jsx-576890789{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}", ".videoBanner-skills.jsx-576890789 li.jsx-576890789{margin-bottom:35px;background:white;padding:25px 20px;margin:0 .5px;min-height:60px;box-sizing:border-box;width:25%;opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s;transition:.5s;-webkit-transition-delay:1.5s;transition-delay:1.5s;}", ".videoBanner-skills.jsx-576890789 li.jsx-576890789:hover{background:#00BCD4;}", ".videoBanner-skills.jsx-576890789 li.jsx-576890789{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}", ".videoBanner-skills.jsx-576890789 figure.jsx-576890789{margin-bottom:15px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}", ".videoBanner-skills.jsx-576890789 img.jsx-576890789{width:30px;height:30px;margin-right:10px;}", ".videoBanner-skills.jsx-576890789 h2.jsx-576890789{font-size:13px;font-family:Viga;color:black;text-align:left;}", ".videoBanner-skills.jsx-576890789 p.jsx-576890789{color:black;line-height:1.2;}", ".html5-video-player.jsx-576890789 .video-stream.jsx-576890789{top:0 !important;}", "@media screen and (max-width:768px){.videoBanner-title.jsx-576890789 br.jsx-576890789{display:block;}}", "@media screen and (max-width:600px){.videoBanner.jsx-576890789{box-shadow:none;}.vimeo-wrapper.jsx-576890789 video.jsx-576890789{left:80%;}.videoBanner-text.jsx-576890789{top:-130px;}.videoBanner-title.jsx-576890789{font-size:35px;}.videoBanner-skills.jsx-576890789{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.videoBanner-skills.jsx-576890789 li.jsx-576890789{width:49%;border-top:1px solid black;padding:15px 10px;}.videoBanner-skills.jsx-576890789 p.jsx-576890789 span.jsx-576890789{display:none;}}", "@media screen and (max-width:400px){.videoBanner-text.jsx-576890789{top:-60px;height:80px;}.videoBanner-title.jsx-576890789{font-size:25px;}.videoBanner-skills.jsx-576890789 figure.jsx-576890789{margin-bottom:10px;}.videoBanner-skills.jsx-576890789 img.jsx-576890789{width:25px;height:25px;}.videoBanner-skills.jsx-576890789 h2.jsx-576890789{font-size:11px;}.videoBanner-skills.jsx-576890789 p.jsx-576890789{font-size:9px;}}", "@-webkit-keyframes translateBottomToTop-jsx-576890789{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes translateBottomToTop-jsx-576890789{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);opacity:0;}50%{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}"]));
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
        className: "jsx-3181498281" + " " + "services"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + ""
      }, external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "df services-about"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "services-about-bg"
      }), external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "services-about-text"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3181498281"
      }, "QUI\xC9NES SOMOS"), external_react_default.a.createElement("p", {
        className: "jsx-3181498281"
      }, "Mi nombre es Danilo y tengo 25 a\xF1os, estudi\xE9 en Lima, Per\xFA. He estado viajando con mi novia Emma durante 1 a\xF1o, trabajando de forma remota. La idea principal de la empresa es trabajar y viajar por todo el mundo. Ofrecemos webs profesionales y dise\xF1o de medios digitales."))), external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "df container services-items"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "services-left"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "services-web"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3181498281"
      }, "WEB Y DISE\xD1O DE MEDIOS DIGITALES"), external_react_default.a.createElement("p", {
        className: "jsx-3181498281"
      }, "Su sitio web tiene solo unos segundos para interesar a posibles clientes. Con nosotros, su nuevo sitio web atraer\xE1 la atenci\xF3n y la pintar\xE1 en la direcci\xF3n correcta. Dise\xF1amos sitios web modernos y creamos una imagen profesional de su empresa. Nuestro trabajo es nuestra pasi\xF3n. Es por eso que nuestros sitios web est\xE1n en l\xEDnea con las \xFAltimas tendencias y tecnolog\xEDas."), external_react_default.a.createElement("a", {
        className: "jsx-3181498281"
      }, "CREAR MI SITIO WEB")), external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "services-drone"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3181498281"
      }, "SERVICIO DE FOTOGRAFIA Y VIDEO A\xC9REO"), external_react_default.a.createElement("p", {
        className: "jsx-3181498281"
      }, "Muestra tu resort, hotel o cualquier cosa que desees desde una perspectiva completamente diferente. Haga que su oferta se destaque en Booking.com o tripAdvisor entre otros."), external_react_default.a.createElement("a", {
        className: "jsx-3181498281"
      }, "Saber m\xE1s"))), external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "services-free-bg"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3181498281" + " " + "services-free"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3181498281"
      }, "SERVICIO GRATUITO"), external_react_default.a.createElement("p", {
        className: "jsx-3181498281"
      }, "\xBFQuieres un nuevo sitio web pero no tienes tiempo para administrarlo? \xBFNo tienes fotos o materiales? \xBFEs posible construir un sitio web de forma gratuita? En lugar de la oferta est\xE1ndar, elija la opci\xF3n Trabajo y viaje."), external_react_default.a.createElement("a", {
        className: "jsx-3181498281"
      }, "Saber m\xE1s"))))), external_react_default.a.createElement(style_default.a, {
        id: "3181498281"
      }, [".services.jsx-3181498281{color:black;padding-top:80px;}", ".services-about.jsx-3181498281{-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", ".services-about-text.jsx-3181498281{text-align:left;width:50%;padding-top:3%;padding-left:4%;padding-right:2%;box-sizing:border-box;}", ".services-about-text.jsx-3181498281 h2.jsx-3181498281{font-size:22px;margin-bottom:10px;}", ".services-about-text.jsx-3181498281 p.jsx-3181498281{max-width:410px;font-size:15px;font-family:Montserrat;line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;color:#656565;}", ".services-about-bg.jsx-3181498281{background:url(/static/img/daniloviacava.jpg) center center no-repeat;background-size:cover;width:50%;height:280px;}", ".services-items.jsx-3181498281{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}", ".services-left.jsx-3181498281{color:white;width:70%;}", ".services-web.jsx-3181498281{background:#00BCD4;padding:80px 20px;box-sizing:border-box;text-align:left;margin-top:-20px;}", ".services-web.jsx-3181498281 h2.jsx-3181498281{font-size:22px;max-width:300px;margin:0 auto 10px;padding-right:70px;box-sizing:border-box;margin-left:100px;}", ".services-web.jsx-3181498281 p.jsx-3181498281{font-size:15px;font-family:Montserrat;line-height:1.2;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;max-width:300px;font-size:14px;margin-left:100px;}", ".services-web.jsx-3181498281 a.jsx-3181498281{margin:auto;display:inline-block;padding:13px 15px;background:white;color:#00BCD4;box-sizing:border-box;margin-top:10px;margin-left:100px;font-size:14px;border-radius:4px;}", ".services-drone.jsx-3181498281{background:url(static/img/rupac.jpg) center left no-repeat;background-size:cover;max-width:230px;padding:80px 90px;margin:-60px 0px 0px 60px;text-align:left;position:relative;}", ".services-drone.jsx-3181498281:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.3;}", ".services-drone.jsx-3181498281 h2.jsx-3181498281{font-size:22px;max-width:180px;margin:0 auto 10px;box-sizing:border-box;position:relative;z-index:1;}", ".services-drone.jsx-3181498281 p.jsx-3181498281{max-width:300px;margin:0 auto 10px;padding-left:25px;box-sizing:border-box;position:relative;z-index:1;font-family:Montserrat;font-size:14px;line-height:1.2;}", ".services-drone.jsx-3181498281 a.jsx-3181498281{max-width:300px;padding-left:25px;box-sizing:border-box;margin-top:10px;position:relative;z-index:1;font-size:14px;}", ".services-free-bg.jsx-3181498281{width:40%;}", ".services-free.jsx-3181498281{background:url(static/img/emmaPetersen.JPG) -130px 0px no-repeat;background-size:cover;color:white;padding:280px 100px 230px 100px;box-sizing:border-box;margin-top:-50px;margin-left:-110px;text-align:right;max-width:410px;font-size:15px;position:relative;}", ".services-free.jsx-3181498281:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.4;}", ".services-free.jsx-3181498281 h2.jsx-3181498281{font-size:22px;margin-bottom:10px;position:relative;z-index:1;}", ".services-free.jsx-3181498281 p.jsx-3181498281{font-size:14px;font-family:Montserrat;margin-bottom:10px;position:relative;line-height:1.2;z-index:1;}", ".services-free.jsx-3181498281 a.jsx-3181498281{font-size:14px;position:relative;z-index:1;}", "@media screen and (max-width:900px){.services-about-text.jsx-3181498281{margin-right:2%;padding-top:5%;}.services-web.jsx-3181498281 h2.jsx-3181498281,.services-web.jsx-3181498281 p.jsx-3181498281,.services-web.jsx-3181498281 a.jsx-3181498281{margin-left:30px;}.services-drone.jsx-3181498281{margin-left:20px;}.services-drone.jsx-3181498281 h2.jsx-3181498281{margin-left:0px;}.services-drone.jsx-3181498281 p.jsx-3181498281,.services-drone.jsx-3181498281 a.jsx-3181498281{padding-left:0;}.services-free.jsx-3181498281{margin-left:-90px;padding:280px 60px 230px 60px;background-position:-170px 0px;}}", "@media screen and (max-width:767px){.services-about.jsx-3181498281{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:600px;margin:auto;text-align:center;}.services-about-bg.jsx-3181498281,.services-about-text.jsx-3181498281{width:100%;}.services-about.jsx-3181498281 p.jsx-3181498281{max-width:100%;}.services-items.jsx-3181498281{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-left.jsx-3181498281{width:100%;}.services-web.jsx-3181498281{margin-top:40px;padding:40px 120px;}.services-web.jsx-3181498281 h2.jsx-3181498281,.services-web.jsx-3181498281 p.jsx-3181498281{max-width:100%;}.services-drone.jsx-3181498281{margin:30px auto;max-width:100%;padding:80px 170px;}.services-drone.jsx-3181498281 h2.jsx-3181498281{margin-left:0;max-width:100%;}.services-drone.jsx-3181498281 a.jsx-3181498281,.services-drone.jsx-3181498281 p.jsx-3181498281{margin-left:0;}.services-free-bg.jsx-3181498281{width:100%;}.services-free.jsx-3181498281{margin:0;max-width:100%;padding:70px 210px;background-position:0 -80px;}.services-free.jsx-3181498281{margin:0;max-width:100%;padding:70px 140px;background-position:0 -80px;}}", "@media screen and (max-width:600px){.services.jsx-3181498281{padding-top:40px;}.services-web.jsx-3181498281{padding:40px 20px;}.services-web.jsx-3181498281 h2.jsx-3181498281,.services-web.jsx-3181498281 p.jsx-3181498281,.services-web.jsx-3181498281 a.jsx-3181498281{margin:10px 20px;}.services-drone.jsx-3181498281{padding:80px 50px;}.services-free.jsx-3181498281{padding:80px 50px;background-position:0px 0px;}}"]));
    }
  }]);

  return Services;
}(external_react_default.a.Component);

/* harmony default export */ var components_Services = (Services_Services);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/TitleBlack.js








var TitleBlack_TitleBlack =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TitleBlack, _React$Component);

  function TitleBlack() {
    Object(classCallCheck["a" /* default */])(this, TitleBlack);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TitleBlack).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(TitleBlack, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-4226909580" + " " + "title-container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4226909580" + " " + "title"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-4226909580"
      }, this.props.title), external_react_default.a.createElement("p", {
        className: "jsx-4226909580" + " " + (this.props.classSubtitle || "")
      }, this.props.subtitle, " ", external_react_default.a.createElement("strong", {
        className: "jsx-4226909580" + " " + (this.props.classSubtitle || "")
      }, this.props.subtitleStrong))), external_react_default.a.createElement(style_default.a, {
        id: "4226909580"
      }, [".title-container.jsx-4226909580{font-family:Viga;color:black;}", ".title.jsx-4226909580 h3.jsx-4226909580{font-size:22px;}", ".title.jsx-4226909580 p.jsx-4226909580{color:gray;font-size:17px;margin-bottom:50px;margin-top:5px;font-family:Montserrat;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;}", ".title.jsx-4226909580 .white.jsx-4226909580{color:white;}", ".title.jsx-4226909580 strong.jsx-4226909580{color:black;font-weight:bold;}"]));
    }
  }]);

  return TitleBlack;
}(external_react_default.a.Component);

/* harmony default export */ var components_TitleBlack = (TitleBlack_TitleBlack);
// CONCATENATED MODULE: ./components/Portafolio.js









 // import Instafeed from 'instafeed.js'

var Portafolio_Portafolio =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Portafolio, _React$Component);

  function Portafolio() {
    Object(classCallCheck["a" /* default */])(this, Portafolio);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Portafolio).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Portafolio, [{
    key: "componentDidMount",
    value: function componentDidMount() {// var feed = new Instafeed({
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
  }, {
    key: "render",
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        arrows: false,
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
      return external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio"
      }, external_react_default.a.createElement(components_TitleBlack, {
        title: "Nuestro trabajo, es nuestra pasi\xF3n.",
        subtitle: "Ver proyectos",
        classSubtitle: "white",
        subtitleStrong: "recientes"
      }), external_react_default.a.createElement(external_react_slick_default.a, _extends({}, settings, {
        className: "container"
      }), external_react_default.a.createElement("a", {
        href: "https://www.profealtoque.com.pe/",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/profe.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "http://www.sanpiox.edu.pe/",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/sanpiox.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "http://www.deliperuano.com/",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/deliperuano.png) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "https://www.pagadespues.pe",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/pagadespues.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "https://www.acuantoestaeldolar.com/",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/cambiodolar.png) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "https://www.clinicainternacional.com.pe/",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/clinicaInternacional.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "https://www.canalipe.tv/",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/canalipe.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "https://www.mifuturogr.com",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/mifuturo.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "https://www.marina.mil.pe",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/marina.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      })))), external_react_default.a.createElement("a", {
        href: "http://www.clubterrazas.com.pe/",
        target: "_blank",
        className: "jsx-2085157460"
      }, external_react_default.a.createElement("figure", {
        className: "jsx-2085157460" + " " + "portafolio-item"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2085157460" + " " + "portafolio-item-mascara"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "url(static/img/portafolio/terrazas.jpg) center center no-repeat",
          backgroundSize: 'cover'
        },
        className: "jsx-2085157460" + " " + "portafolio-item-img"
      }))))), external_react_default.a.createElement("div", {
        class: "elfsight-app-8a863662-90b2-482c-a0ee-88aa2c740771",
        className: "jsx-2085157460"
      }), external_react_default.a.createElement(style_default.a, {
        id: "2085157460"
      }, [".portafolio.jsx-2085157460{text-align:center;margin:60px 0 0 0;background:#00BCD4;padding:70px 0;box-sizing:border-box;}", ".portafolio-item.jsx-2085157460{margin:10px auto;height:180px;width:300px;background:url(/static/img/Macbook.svg) center center no-repeat;background-size:cover;}", ".portafolio-item-mascara.jsx-2085157460{height:158px;overflow:hidden;position:relative;}", ".portafolio-item-img.jsx-2085157460{max-width:100%;width:76%;height:auto;display:block;position:absolute;top:12px;right:0;left:0;margin:auto;border-radius:2px;height:143px;background-size:cover;}", ".portafolio.jsx-2085157460 .slick-dots.jsx-2085157460 li.jsx-2085157460 button.jsx-2085157460:before{background:green;}", ".slick-dots.jsx-2085157460 li.jsx-2085157460 button.jsx-2085157460:before{background;red;}"]));
    }
  }]);

  return Portafolio;
}(external_react_default.a.Component);

/* harmony default export */ var components_Portafolio = (Portafolio_Portafolio);
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


var firebase_settings = {
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
        className: "jsx-906141295" + " " + "Contact"
      }, external_react_default.a.createElement("div", {
        className: "jsx-906141295" + " " + "vimeo-wrapper"
      }, external_react_default.a.createElement("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/oTALBxiERRQ?autoplay=1&controls=0&loop=1&mute=1&playlist=xJAwnCMgqCg",
        frameBorder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        className: "jsx-906141295"
      })), external_react_default.a.createElement("div", {
        className: "jsx-906141295" + " " + "container"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-906141295" + " " + "afiliacionForm-title"
      }, "\xBFTiene un proyecto en el que ", external_react_default.a.createElement("br", {
        className: "jsx-906141295"
      }), " ", external_react_default.a.createElement("strong", {
        className: "jsx-906141295"
      }, "podamos ayudarlo?")), external_react_default.a.createElement("div", {
        className: "jsx-906141295" + " " + "afiliacionForm-form"
      }, external_react_default.a.createElement("form", {
        onSubmit: this.sendContact,
        className: "jsx-906141295"
      }, external_react_default.a.createElement("div", {
        className: "jsx-906141295" + " " + "afiliacionForm-formInput"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Nombres*",
        name: "nombres",
        value: this.state.nombres,
        onChange: this.updateInput,
        required: true,
        className: "jsx-906141295"
      }), external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Empresa*",
        name: "empresa",
        value: this.state.apellidos,
        onChange: this.updateInput,
        required: true,
        className: "jsx-906141295"
      })), external_react_default.a.createElement("div", {
        className: "jsx-906141295" + " " + "afiliacionForm-formInput"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Email*",
        name: "email",
        value: this.state.email,
        onChange: this.updateInput,
        required: true,
        className: "jsx-906141295"
      }), external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Celular*",
        name: "celular",
        value: this.state.celular,
        onChange: this.updateInput,
        required: true,
        className: "jsx-906141295"
      })), external_react_default.a.createElement("div", {
        className: "jsx-906141295" + " " + "afiliacionForm-formInput"
      }, external_react_default.a.createElement("textarea", {
        id: "",
        cols: "30",
        rows: "3",
        placeholder: "Cu\xE9ntanos cu\xE1l es tu empresa y te contactaremos.",
        name: "mensaje",
        value: this.state.mensaje,
        onChange: this.updateInput,
        required: true,
        className: "jsx-906141295"
      }), external_react_default.a.createElement("p", {
        className: "jsx-906141295"
      }, "*Todos los Campos son Obligatorios")), external_react_default.a.createElement("button", {
        className: "jsx-906141295" + " " + "btnRosa"
      }, "Enviar")))), external_react_default.a.createElement("div", {
        id: "thanks",
        className: "jsx-906141295" + " " + "gracias"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-906141295" + " " + "afiliacionForm-title"
      }, "\xA1Gracias! ", external_react_default.a.createElement("br", {
        className: "jsx-906141295"
      }), " ", external_react_default.a.createElement("strong", {
        className: "jsx-906141295"
      }, "Te Contactaremos")), external_react_default.a.createElement("button", {
        onClick: this.handleCloseForm,
        className: "jsx-906141295" + " " + "btnRosa"
      }, "Entendido")), external_react_default.a.createElement(style_default.a, {
        id: "906141295"
      }, [".vimeo-wrapper.jsx-906141295{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99;overflow:hidden;}", ".vimeo-wrapper.jsx-906141295:before{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;background:black;opacity:0.3;z-index:1;pointer-events:none;}", ".vimeo-wrapper.jsx-906141295 iframe.jsx-906141295{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".Contact.jsx-906141295{background:url(static/img/contacto.jpg) center center no-repeat;background-size:cover;text-align:center;padding:80px 0 60px 0;color:black;position:relative;z-index:99;box-sizing:border-box;}", ".Contact.jsx-906141295 .container.jsx-906141295{position:relative;z-index:99;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;}", ".afiliacionForm-title.jsx-906141295{font-size:22px;text-transform:uppercase;text-align:center;color:white;}", ".afiliacionForm-form.jsx-906141295{padding:20px;box-sizing:border-box;max-width:500px;margin:auto;}", ".afiliacionForm-formInput.jsx-906141295 input.jsx-906141295,.afiliacionForm-formInput.jsx-906141295 textarea.jsx-906141295{max-width:45%;width:100%;margin:2%;height:35px;line-height:35px;padding-left:20px;box-sizing:border-box;border-radius:3px;border:none;box-shadow:0px 1px 10px rgba(0,0,0,0.05);font-family:Montserrat;font-size:13px;}", ".afiliacionForm-formInput.jsx-906141295 input.jsx-906141295:focus{box-shadow:2px 3px 30px rgba(228,55,118,0.1);}", ".afiliacionForm-formInput.jsx-906141295 textarea.jsx-906141295{height:auto;width:94%;max-width:100%;}", ".afiliacionForm-formInput.jsx-906141295 p.jsx-906141295{text-align:left;font-size:14px;padding-left:10px;font-family:Montserrat;padding-left:20px;color:white;}", ".btnRosa.jsx-906141295{background:#00bcd4;text-align:center;line-height:30px;color:white;padding:5px 40px;margin-top:20px;border:none;font-size:17px;border-radius:4px;text-transform:uppercase;font-family:Viga;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".closeForm.jsx-906141295{position:absolute;top:0;bottom:0;margin:auto;left:-30px;height:40px;width:40px;background:white;padding:10px;cursor:pointer;border-radius:20px 0 0 20px;box-shadow:2px 3px 30px rgba(228,55,118,0.1);}", ".closeForm.jsx-906141295:before{content:\"\";position:absolute;top:-4px;background:#fffdfe;width:17px;height:110%;right:-7px;}", ".closeForm.jsx-906141295 img.jsx-906141295{width:70%;margin-top:8px;}", ".gracias.jsx-906141295{position:absolute;top:0;left:0;right:0;width:96%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;visibility:hidden;-webkit-transition:.3s linear;transition:.3s linear;background:white;}", ".gracias.active.jsx-906141295{opacity:1;visibility:visible;}", "@media screen and (max-width:767px){.Contact.jsx-906141295{margin-top:0;}}", "@media screen and (max-width:600px){.afiliacionForm-title.jsx-906141295{font-size:19px;}.afiliacionForm-form.jsx-906141295{padding:20px 0;}}"]));
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
  }, external_react_default.a.createElement(components_Services, null)), external_react_default.a.createElement(components_Portafolio, null), external_react_default.a.createElement(components_Prices, null), external_react_default.a.createElement("div", {
    className: "section",
    id: "section3"
  }, external_react_default.a.createElement(components_Contact, null)), external_react_default.a.createElement("style", null, "\n\n          "));
};

/* harmony default export */ var ReactFullpageDesktop = __webpack_exports__["a"] = (ReactFullpageDesktop_Fullpage);

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

/***/ "mlGW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("0T/a");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("nkTw") });


/***/ }),

/***/ "nkTw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("fZVS");
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
var toObject = __webpack_require__("AYVP");
var IObject = __webpack_require__("i6sE");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("14Ie")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


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

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

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