(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pa-ui"] = factory();
	else
		root["pa-ui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\BM_Work\\web_app_work\\FbVueDemo\\pingAnFaceBank_1.5.5\\pa-ui-src\\components\\linkage\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f60036e0", Component.options)
  } else {
    hotAPI.reload("data-v-f60036e0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(3);

var _main = __webpack_require__(8);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = _main2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/index.js!./style.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/index.js!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/**\n  颜色\n*/\n/*\n大小\n*/\n.linkage-box {\n  display: flex;\n  justify-content: space-between;\n  height: 1.2rem;\n  position: relative;\n  overflow: hidden;\n}\n.linkage-li {\n  text-align: center;\n  flex: 1;\n  font-size: 0.18rem;\n  line-height: 0.4rem;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.linkage-items {\n  position: absolute;\n  top: 0.4rem;\n  left: 0;\n  width: 100%;\n  z-index: 20;\n}\n.linkage-line {\n  height: 0.4rem;\n  border: solid #52b786;\n  border-width: 1px 0;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  width: 100%;\n  z-index: 19;\n}\n.linkage-mask-bottom {\n  background: #ccc;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: -webkit-linear-gradient(top, #ffffff, #f0f0f0);\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _autoScroll = __webpack_require__(9);

var _autoScroll2 = _interopRequireDefault(_autoScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		var styleTop = [];
		for (var i = 0; i < this.level; i++) {
			styleTop[i] = {
				top: 0,
				maskBottom: 0
			};
		}
		return {
			listItemHeight: 40,
			autoScroll: new _autoScroll2.default({
				updateMove: this.updateMove,
				updateBottom: this.updateBottom,
				autoEnd: this.autoEnd
			}),
			styleTop: styleTop,
			scrollIndex: 0,
			controlList: this.list
		};
	},

	computed: {
		currentList: function currentList() {
			var current = [];
			var currentIndex = this.controlList;
			// set list
			for (var i = 0; i < this.level; i++) {
				current[i] = current[i] || {};
				current[i].list = currentIndex;
				// set active
				for (var j = 0; current[i].list[j]; j++) {
					if (current[i].list[j].active) {
						current[i].number = j;
						current[i].active = current[i].list[j];
						break;
					}
				}
				current[i].active = current[i].active || current[i].list[0];
				current[i].number = current[i].number || 0;
				current[i].top = -(current[i].number - 1) * this.itemHeight + 'px';

				currentIndex = current[i].active.children;
			}
			return current;
		}
	},
	methods: {
		test: function test() {
			this.currentList[0].active.active = false;
			this.controlList[4].active = true;
		},
		start: function start(event, index) {
			this.scrollIndex = index;
			var $this = event.currentTarget;
			event.$toBottom = $this.clientHeight - $this.offterHeight;
			event.$toTop = this.toTop($this);
			this.autoScroll.moveStart(event);
		},
		move: function move(event, index) {
			var $this = event.currentTarget;
			event.$toBottom = this.toBottom($this);
			event.$toTop = this.toTop($this);
			this.autoScroll.moveIng(event);
		},
		end: function end(event, index) {
			var $this = event.currentTarget;
			event.$toBottom = this.toBottom($this);
			event.$toTop = this.toTop($this);
			this.autoScroll.moveEnd(event);
		},
		updateMove: function updateMove(move) {
			this.styleTop[this.scrollIndex].top = move;
		},
		updateBottom: function updateBottom(move) {
			this.styleTop[this.scrollIndex].maskBottom = move;
		},
		toBottom: function toBottom($this) {
			return $this.clientHeight - $this.offsetParent.offsetHeight + this.listItemHeight;
		},
		toTop: function toTop($this) {
			return this.listItemHeight;
		},
		autoEnd: function autoEnd(height) {
			height -= this.listItemHeight;

			var index = height / this.listItemHeight;
			if (height % this.listItemHeight > this.listItemHeight / 2) {
				index++;
			}
			index = ~~index;
			this.styleTop[this.scrollIndex].top = index * this.listItemHeight + 'px';

			var listIndex = Math.abs(index);

			var current = this.controlList;
			var currentIndex = this.currentList[this.scrollIndex].number;
			for (var i = 0; i < this.scrollIndex; i++) {
				var number = this.currentList[i].number;
				current = current[number].children;
			}
			current[currentIndex].active = false;
			current[listIndex].active = true;

			var styleTop = [];
			for (var _i = 0; _i < this.level; _i++) {
				styleTop[_i] = {
					top: 0,
					maskBottom: 0
				};
			}
			this.styleTop = styleTop;

			var changeList = [];
			for (var _i2 = 0; _i2 < this.level; _i2++) {
				changeList.push(this.currentList[_i2].list[this.currentList[_i2].number]);
			}
			this.change(changeList);
		}
	},
	props: {
		itemHeight: {
			type: Number,
			default: function _default() {
				return 40;
			}
		},
		list: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		level: {
			type: Number,
			default: function _default() {
				return 1;
			}
		},
		change: {
			type: Function,
			default: function _default() {
				return function () {};
			}
		}
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** *************************************
 * @description
 *  this's a module about scroll algorithm
 *  it'll give smoother scroll
 * @author keller <kellerlong@163.com>
 ***************************************/

/**
 * auto scroll class
 * provide:
 * 1 moveStart
 * 2 moveIng
 * 3 moveEnd
 */
var _private = {
	empty: function empty() {},
	compatibleFilter: function compatibleFilter(event) {
		event.$point = {};
		if (event.touches) {
			event.$point.x = event.touches[0].clientX;
			event.$point.y = event.touches[0].clientY;
		} else {
			event.$point.x = event.clientX;
			event.$point.y = event.clientY;
		}
		// event.$point.y  += Math.abs( event.currentTarget.offsetTop );
		// event.$point.x  += Math.abs( event.currentTarget.offsetLeft);
		return event;
	},

	/**
   * move
   */
	// moveTop() {
	//   this.goVelocity       = '0s';
	//   this.overflowPoint    = this.overflowPoint || touches[0];
	//   this.moveOverflowDis  = this.getMoveDistance( this.overflowPoint, touches[0]);
	//   this.TopHeight        = `${this.moveOverflowDis / 2}px`;
	// }
	/**
   *  math
   */
	getMoveDistance: function getMoveDistance(start, move) {
		return move.y - start.y;
	},
	getMoveVelocity: function getMoveVelocity(startTime, moveTime, distance) {
		return Math.abs(distance / (moveTime - startTime));
	}
};

var AutoScroll = function () {
	/**
   * this constructor
   * @param option                <Object>    this's config about init
   * @param option.speedScroll    <Number>    speed of scroll
   * @param option.speedSubtract  <Number>    speed of subtract
   * @param option.speedTrigger   <Number>    speed of trigger
   * @param option.resilience     <Number>    max resilience height
   * @param option.afterScroll    <Function>  call function after scroll end
   * @param option.afterToTop     <Function>  call function to Top
   * @param option.afterToBottom  <Function>  call function to Bottom
   * @param option.updateTop      <Function>  update about top resilience, must
   * @param option.updateBottom   <Function>  update about bottom resilience, must
   * @param option.updateMove     <Function>  update about move, must
   */
	function AutoScroll(option) {
		_classCallCheck(this, AutoScroll);

		// default option
		var DEFAULT_OPTION = {
			speedScroll: 50,
			speedSubtract: 0.1,
			speedTrigger: 1,
			resilience: 50,
			afterScroll: _private.empty,
			afterToTop: _private.empty,
			afterToBottom: _private.empty,
			updateTop: _private.empty,
			updateBottom: _private.empty,
			updateMove: _private.empty,
			autoEnd: _private.empty
		};
		this.moveSwitch = false;
		this.option = DEFAULT_OPTION;
		for (var key in option) {
			this.option[key] = option[key] || this.option[key];
		}
	}

	/**
   *
   * @param event
   */


	_createClass(AutoScroll, [{
		key: "moveStart",
		value: function moveStart(event) {
			var $event = _private.compatibleFilter(event);

			// save point
			this.startPoint = $event.$point;
			// this.startPoint.y     += Math.abs(this.moveScrollTop || 0);
			this.startTime = new Date().getTime();

			this.startScrollTop = parseInt($event.currentTarget.style.top, 10);
			this.moveScrollTop = this.startScrollTop;
			this.moveSwitch = true;
			$event.preventDefault();
			$event.stopPropagation();
		}

		/**
    *
    * @param event
    */

	}, {
		key: "moveIng",
		value: function moveIng(event) {
			if (!this.moveSwitch) {
				return false;
			}
			var $event = _private.compatibleFilter(event);

			var $this = $event.currentTarget;
			this.movePoint = $event.$point;
			// get distance of move
			this.moveDistance = _private.getMoveDistance(this.startPoint, this.movePoint);
			// get velocity of move
			this.moveVelocity = _private.getMoveVelocity(this.startTime, new Date().getTime(), this.moveDistance);
			// set scroll
			// $this.style.top       = `${this.startScrollTop - this.moveDistance}px`;

			this.moveScrollTop = this.startScrollTop + this.moveDistance;
			this.option.updateMove(this.moveScrollTop + "px");
			// update start point
			if (this.moveVelocity < this.scrollVelocity) {
				this.startTime = new Date().getTime();
				this.startTouches = this.moveTouches;
				this.startScrollTop = $this.scrollTop;
			}
			if ($event.$toBottom <= -this.moveScrollTop) {
				this.moveScrollTop = -event.$toBottom;
				this.option.updateMove(this.moveScrollTop + "px");
			}
			if ($event.$toTop <= this.moveScrollTop) {
				this.moveScrollTop = $event.$toTop;
				this.option.updateMove(this.moveScrollTop + "px");
			}
			return true;
		}

		/**
    *
    * @param event
    */

	}, {
		key: "moveEnd",
		value: function moveEnd(event) {
			// let $event            = _private.compatibleFilter(event);
			// init
			// if move velocity max
			//
			this.moveSwitch = false;
			if (this.moveVelocity >= this.option.speedTrigger) {
				// auto scroll
				var $this = this;
				requestAnimationFrame(function () {
					$this.autoScroll($this, event);
				});
				return true;
			}
			this.option.autoEnd(this.moveScrollTop);
			return true;
		}
		/**
    *
    */

	}, {
		key: "autoScroll",
		value: function autoScroll($this, event) {
			// scroll over
			if ($this.moveVelocity <= 0) {
				// scroll over
				$this.option.autoEnd($this.moveScrollTop);
				return false;
			}

			var moveScrollTop = $this.moveScrollTop;
			// set scroll
			if ($this.moveDistance > 0) {
				moveScrollTop -= $this.moveVelocity * $this.option.speedScroll;
				$this.option.updateMove(moveScrollTop + "px");
			} else {
				moveScrollTop += $this.moveVelocity * $this.option.speedScroll;
				$this.option.updateMove(moveScrollTop + "px");
			}
			// update velocity
			$this.moveVelocity -= $this.option.speedSubtract;

			if (moveScrollTop <= 0) {
				// max Top
				// $this.autoScrollOverTop();
			}
			if (event.$toBottom <= -moveScrollTop) {
				// max bottom
				// console.log('到底' );
				// $this.autoScrollOverBottom();
				var bottomHeight = -moveScrollTop - event.$toBottom;
				if (bottomHeight > 50) {
					$this.moveVelocity = 0;
					return 0;
				}
				// $this.option.updateMove( `${-event.$toBottom}px` );
				// $this.option.updateBottom( `${bottomHeight}px` );
				// return 0;
			}
			return requestAnimationFrame(function () {
				$this.autoScroll($this, event);
			});
		}
	}]);

	return AutoScroll;
}();

exports.default = AutoScroll;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "linkage-box"
  }, [_c('div', {
    staticClass: "linkage-line"
  }), _vm._v(" "), _vm._l((_vm.level), function(index) {
    return _c('div', {
      staticClass: "linkage-li"
    }, [_c('div', {
      staticClass: "linkage-items",
      style: ({
        'top': _vm.styleTop[index - 1].top ? _vm.styleTop[index - 1].top : _vm.currentList[index - 1].top
      }),
      on: {
        "touchstart": function($event) {
          _vm.start($event, index - 1)
        },
        "touchmove": function($event) {
          _vm.move($event, index - 1)
        },
        "touchend": function($event) {
          _vm.end($event, index - 1)
        },
        "mousedown": function($event) {
          _vm.start($event, index - 1)
        },
        "mousemove": function($event) {
          _vm.move($event, index - 1)
        },
        "mouseup": function($event) {
          _vm.end($event, index - 1)
        },
        "mouseout": function($event) {
          _vm.end($event, index - 1)
        }
      }
    }, _vm._l((_vm.currentList[index - 1].list), function(items) {
      return _c('div', {
        staticClass: "linkage-item"
      }, [_vm._v("\n        " + _vm._s(items.text) + "\n      ")])
    })), _vm._v(" "), _c('div', {
      staticClass: "linkage-mask-bottom",
      style: ({
        'height': _vm.styleTop[index - 1].maskBottom
      })
    })])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f60036e0", module.exports)
  }
}

/***/ })
/******/ ]);
});