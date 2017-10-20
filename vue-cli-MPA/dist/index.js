/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var zzz = {\n\ta: 1\n};\n\nmodule.exports = zzz;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb21tLmpzPzI5NmMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgenp6ID0ge1xyXG5cdGEgOjFcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB6eno7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NvbW0uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_comm__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_comm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_comm__);\n\n\nvar home = {\n\tdata: {},\n\toptions: {},\n\tpageEntryLoad: function pageEntryLoad() {\n\t\tconsole.log(2222);\n\t}\n};\nhome.pageEntryLoad();\nconsole.log(__WEBPACK_IMPORTED_MODULE_0__components_comm___default.a);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGFnZXMvaW5kZXgvaW5kZXguanM/OTM3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW0nXHJcblxyXG52YXIgaG9tZSA9IHtcclxuXHRkYXRhOntcclxuXHJcblx0fSxcclxuXHRvcHRpb25zOntcclxuXHJcblx0fSxcclxuXHRwYWdlRW50cnlMb2FkOmZ1bmN0aW9uKCl7XHJcblx0XHRjb25zb2xlLmxvZygyMjIyKVxyXG5cdH1cclxufTtcclxuaG9tZS5wYWdlRW50cnlMb2FkKCk7XHJcbmNvbnNvbGUubG9nKGMpXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);