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


/* styles */
__webpack_require__(1)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  "data-v-56903538",
  /* cssModules */
  null
)
Component.options.__file = "D:\\BM_Work\\web_app_work\\FbVueDemo\\pingAnFaceBank_1.5.5\\pa-ui-src\\components\\icon\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56903538", Component.options)
  } else {
    hotAPI.reload("data-v-56903538", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("63fc595c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-56903538\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-56903538\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: pinganfont;\n  src: url(" + __webpack_require__(4) + ");\n  font-weight: normal;\n  font-style: normal;\n}\n.font-icon[data-v-56903538] {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.icon-user[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E619';\n}\n.icon-home[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E620';\n}\n.icon-direction-left-single[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E617';\n}\n.icon-bank-card[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E618';\n}\n.icon-navigator[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E616';\n}\n.icon-bluetooth[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E61F';\n}\n.icon-close-btn[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E623';\n}\n.icon-photograph[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E62A';\n}\n.icon-add-photo[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E628';\n}\n.icon-delete[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E629';\n}\n.icon-result-success[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E624';\n}\n.icon-result-fail[data-v-56903538]:after {\n  font-family: pinganfont;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  content: '\\E625';\n}\n", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            // type: `icon-${this.iconType}`
        };
    },

    props: {
        iconType: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        iconClass: {
            type: String,
            default: function _default() {
                return '';
            }
        }
    },
    computed: {
        type: function type() {
            return 'icon-' + this.iconType + ' ' + this.iconClass;
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.type
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-56903538", module.exports)
  }
}

/***/ })
/******/ ]);
});