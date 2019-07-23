var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Resources/sketch-tokens.json":
/*!******************************************!*\
  !*** ./src/Resources/sketch-tokens.json ***!
  \******************************************/
/*! exports provided: colors, prominence, radius, spacing, breakpoints, text, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"colors\":[{\"name\":\"cdr-color-text-primary-lightmode\",\"value\":\"#292929\",\"type\":\"text\"},{\"name\":\"cdr-color-text-primary-darkmode\",\"value\":\"#fafafa\",\"type\":\"text\"},{\"name\":\"cdr-color-text-secondary-lightmode\",\"value\":\"#616161\",\"type\":\"text\"},{\"name\":\"cdr-color-text-secondary-darkmode\",\"value\":\"#999999\",\"type\":\"text\"},{\"name\":\"cdr-color-text-disabled-lightmode\",\"value\":\"#b8b8b8\",\"type\":\"text\"},{\"name\":\"cdr-color-text-disabled-darkmode\",\"value\":\"#616161\",\"type\":\"text\"},{\"name\":\"cdr-color-text-link-lightmode\",\"value\":\"#3278ae\",\"type\":\"text\"},{\"name\":\"cdr-color-text-link-darkmode\",\"value\":\"#5197cd\",\"type\":\"text\"},{\"name\":\"cdr-color-text-error-lightmode\",\"value\":\"#b5292b\",\"type\":\"text\"},{\"name\":\"cdr-color-text-error-darkmode\",\"value\":\"#e86868\",\"type\":\"text\"},{\"name\":\"cdr-color-text-form-label-lightmode\",\"value\":\"#292929\",\"type\":\"text\"},{\"name\":\"cdr-color-text-form-label-darkmode\",\"value\":\"#fafafa\",\"type\":\"text\"},{\"name\":\"cdr-color-text-form-placeholder-lightmode\",\"value\":\"#616161\",\"type\":\"text\"},{\"name\":\"cdr-color-text-form-placeholder-darkmode\",\"value\":\"#999999\",\"type\":\"text\"},{\"name\":\"cdr-color-text-form-disabled-lightmode\",\"value\":\"#b8b8b8\",\"type\":\"text\"},{\"name\":\"cdr-color-text-form-disabled-darkmode\",\"value\":\"#616161\",\"type\":\"text\"},{\"name\":\"cdr-color-icon-primary-lightmode\",\"value\":\"#616161\",\"type\":\"icon\"},{\"name\":\"cdr-color-icon-primary-darkmode\",\"value\":\"#999999\",\"type\":\"icon\"},{\"name\":\"cdr-color-icon-emphasis-lightmode\",\"value\":\"#292929\",\"type\":\"icon\"},{\"name\":\"cdr-color-icon-emphasis-darkmode\",\"value\":\"#fafafa\",\"type\":\"icon\"},{\"name\":\"cdr-color-background-dark\",\"value\":\"#292929\",\"type\":\"background\"},{\"name\":\"cdr-color-background-darker\",\"value\":\"#1a1a1a\",\"type\":\"background\"},{\"name\":\"cdr-color-background-light\",\"value\":\"#f7f7f7\",\"type\":\"background\"},{\"name\":\"cdr-color-background-lighter\",\"value\":\"#fafafa\",\"type\":\"background\"},{\"name\":\"cdr-color-background-lightest\",\"value\":\"#ffffff\",\"type\":\"background\"},{\"name\":\"cdr-color-background-form-lightmode\",\"value\":\"#ffffff\",\"type\":\"background\"},{\"name\":\"cdr-color-background-form-darkmode\",\"value\":\"#292929\",\"type\":\"background\"},{\"name\":\"cdr-color-background-form-input-lightmode\",\"value\":\"#ffffff\",\"type\":\"background\"},{\"name\":\"cdr-color-background-form-input-darkmode\",\"value\":\"#292929\",\"type\":\"background\"},{\"name\":\"cdr-color-border-primary-lightmode\",\"value\":\"#616161\",\"type\":\"border\"},{\"name\":\"cdr-color-border-primary-darkmode\",\"value\":\"#fafafa\",\"type\":\"border\"},{\"name\":\"cdr-color-border-secondary-lightmode\",\"value\":\"#b8b8b8\",\"type\":\"border\"},{\"name\":\"cdr-color-border-secondary-darkmode\",\"value\":\"#999999\",\"type\":\"border\"},{\"name\":\"cdr-color-border-disabled-lightmode\",\"value\":\"#dadada\",\"type\":\"border\"},{\"name\":\"cdr-color-border-disabled-darkmode\",\"value\":\"#dadada\",\"type\":\"border\"},{\"name\":\"cdr-color-border-error-lightmode\",\"value\":\"#e86868\",\"type\":\"border\"},{\"name\":\"cdr-color-border-selected-lightmode\",\"value\":\"#2b6692\",\"type\":\"border\"}],\"prominence\":[{\"name\":\"cdr-prominence-flat\",\"value\":[{\"x\":0,\"y\":0,\"blur\":0,\"spread\":0,\"color\":\" #1a1a1a\"}]},{\"name\":\"cdr-prominence-raised\",\"value\":[{\"x\":2,\"y\":2,\"blur\":2,\"spread\":0,\"color\":\" #1a1a1a33\"}]},{\"name\":\"cdr-prominence-elevated\",\"value\":[{\"x\":4,\"y\":4,\"blur\":4,\"spread\":0,\"color\":\" #1a1a1a33\"}]},{\"name\":\"cdr-prominence-floating\",\"value\":[{\"x\":8,\"y\":8,\"blur\":8,\"spread\":0,\"color\":\" #1a1a1a33\"}]},{\"name\":\"cdr-prominence-lifted\",\"value\":[{\"x\":16,\"y\":16,\"blur\":16,\"spread\":0,\"color\":\" #1a1a1a33\"}]}],\"radius\":[{\"name\":\"cdr-radius-sharp\",\"value\":0},{\"name\":\"cdr-radius-soft\",\"value\":2},{\"name\":\"cdr-radius-softer\",\"value\":4},{\"name\":\"cdr-radius-round\",\"value\":\"50%\"}],\"spacing\":{\"inset\":[{\"name\":\"cdr-space-inset-eighth-x\",\"value\":[2]},{\"name\":\"cdr-space-inset-quarter-x\",\"value\":[4]},{\"name\":\"cdr-space-inset-half-x\",\"value\":[8]},{\"name\":\"cdr-space-inset-three-quarter-x\",\"value\":[12]},{\"name\":\"cdr-space-inset-one-x\",\"value\":[16]},{\"name\":\"cdr-space-inset-one-and-a-half-x\",\"value\":[24]},{\"name\":\"cdr-space-inset-two-x\",\"value\":[32]},{\"name\":\"cdr-space-inset-four-x\",\"value\":[64]},{\"name\":\"cdr-space-inset-eighth-x-squish\",\"value\":[0,2]},{\"name\":\"cdr-space-inset-eighth-x-stretch\",\"value\":[4,2]},{\"name\":\"cdr-space-inset-quarter-x-squish\",\"value\":[2,4]},{\"name\":\"cdr-space-inset-quarter-x-stretch\",\"value\":[6,4]},{\"name\":\"cdr-space-inset-half-x-squish\",\"value\":[4,8]},{\"name\":\"cdr-space-inset-half-x-stretch\",\"value\":[12,8]},{\"name\":\"cdr-space-inset-three-quarter-x-squish\",\"value\":[6,12]},{\"name\":\"cdr-space-inset-three-quarter-x-stretch\",\"value\":[18,12]},{\"name\":\"cdr-space-inset-one-x-squish\",\"value\":[8,16]},{\"name\":\"cdr-space-inset-one-x-stretch\",\"value\":[24,16]},{\"name\":\"cdr-space-inset-one-and-a-half-x-squish\",\"value\":[12,24]},{\"name\":\"cdr-space-inset-one-and-a-half-x-stretch\",\"value\":[36,24]},{\"name\":\"cdr-space-inset-two-x-squish\",\"value\":[16,32]},{\"name\":\"cdr-space-inset-two-x-stretch\",\"value\":[48,32]},{\"name\":\"cdr-space-inset-four-x-squish\",\"value\":[32,64]},{\"name\":\"cdr-space-inset-four-x-stretch\",\"value\":[96,64]}],\"space\":[{\"name\":\"cdr-space-eighth-x\",\"value\":2},{\"name\":\"cdr-space-quarter-x\",\"value\":4},{\"name\":\"cdr-space-half-x\",\"value\":8},{\"name\":\"cdr-space-three-quarter-x\",\"value\":12},{\"name\":\"cdr-space-one-x\",\"value\":16},{\"name\":\"cdr-space-one-and-a-half-x\",\"value\":24},{\"name\":\"cdr-space-two-x\",\"value\":32},{\"name\":\"cdr-space-four-x\",\"value\":64},{\"name\":\"cdr-space-inset-eighth-x-squish-top-bottom\",\"value\":0},{\"name\":\"cdr-space-inset-eighth-x-squish-left-right\",\"value\":2},{\"name\":\"cdr-space-inset-eighth-x-stretch-top-bottom\",\"value\":4},{\"name\":\"cdr-space-inset-eighth-x-stretch-left-right\",\"value\":2},{\"name\":\"cdr-space-inset-quarter-x-squish-top-bottom\",\"value\":2},{\"name\":\"cdr-space-inset-quarter-x-squish-left-right\",\"value\":4},{\"name\":\"cdr-space-inset-quarter-x-stretch-top-bottom\",\"value\":6},{\"name\":\"cdr-space-inset-quarter-x-stretch-left-right\",\"value\":4},{\"name\":\"cdr-space-inset-half-x-squish-top-bottom\",\"value\":4},{\"name\":\"cdr-space-inset-half-x-squish-left-right\",\"value\":8},{\"name\":\"cdr-space-inset-half-x-stretch-top-bottom\",\"value\":12},{\"name\":\"cdr-space-inset-half-x-stretch-left-right\",\"value\":8},{\"name\":\"cdr-space-inset-three-quarter-x-squish-top-bottom\",\"value\":6},{\"name\":\"cdr-space-inset-three-quarter-x-squish-left-right\",\"value\":12},{\"name\":\"cdr-space-inset-three-quarter-x-stretch-top-bottom\",\"value\":18},{\"name\":\"cdr-space-inset-three-quarter-x-stretch-left-right\",\"value\":12},{\"name\":\"cdr-space-inset-one-x-squish-top-bottom\",\"value\":8},{\"name\":\"cdr-space-inset-one-x-squish-left-right\",\"value\":16},{\"name\":\"cdr-space-inset-one-x-stretch-top-bottom\",\"value\":24},{\"name\":\"cdr-space-inset-one-x-stretch-left-right\",\"value\":16},{\"name\":\"cdr-space-inset-one-and-a-half-x-squish-top-bottom\",\"value\":12},{\"name\":\"cdr-space-inset-one-and-a-half-x-squish-left-right\",\"value\":24},{\"name\":\"cdr-space-inset-one-and-a-half-x-stretch-top-bottom\",\"value\":36},{\"name\":\"cdr-space-inset-one-and-a-half-x-stretch-left-right\",\"value\":24},{\"name\":\"cdr-space-inset-two-x-squish-top-bottom\",\"value\":16},{\"name\":\"cdr-space-inset-two-x-squish-left-right\",\"value\":32},{\"name\":\"cdr-space-inset-two-x-stretch-top-bottom\",\"value\":48},{\"name\":\"cdr-space-inset-two-x-stretch-left-right\",\"value\":32},{\"name\":\"cdr-space-inset-four-x-squish-top-bottom\",\"value\":32},{\"name\":\"cdr-space-inset-four-x-squish-left-right\",\"value\":64},{\"name\":\"cdr-space-inset-four-x-stretch-top-bottom\",\"value\":96},{\"name\":\"cdr-space-inset-four-x-stretch-left-right\",\"value\":64}]},\"breakpoints\":[{\"name\":\"cdr-breakpoint-xs\",\"value\":0},{\"name\":\"cdr-breakpoint-sm\",\"value\":768},{\"name\":\"cdr-breakpoint-md\",\"value\":992},{\"name\":\"cdr-breakpoint-lg\",\"value\":1232}],\"text\":[{\"name\":\"cdr-text-default\",\"value\":{\"fontFamily\":\"Roboto\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":400,\"fontWeight\":3,\"letterSpacing\":\"normal\",\"fontSize\":16,\"lineHeight\":26}},{\"name\":\"cdr-text-default-compact\",\"value\":{\"fontFamily\":\"Roboto\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":400,\"fontWeight\":3,\"letterSpacing\":\"normal\",\"fontSize\":14,\"lineHeight\":24}},{\"name\":\"cdr-text-editorial\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":400,\"fontWeight\":3,\"letterSpacing\":\"normal\",\"fontSize\":20,\"lineHeight\":32}},{\"name\":\"cdr-text-editorial-compact\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":400,\"fontWeight\":3,\"letterSpacing\":\"normal\",\"fontSize\":18,\"lineHeight\":28}},{\"name\":\"cdr-text-header-1\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":600,\"fontWeight\":5,\"letterSpacing\":0.2,\"fontSize\":56,\"lineHeight\":60}},{\"name\":\"cdr-text-header-2\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":600,\"fontWeight\":5,\"letterSpacing\":0.2,\"fontSize\":40,\"lineHeight\":48}},{\"name\":\"cdr-text-header-3\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":600,\"fontWeight\":5,\"letterSpacing\":0.2,\"fontSize\":32,\"lineHeight\":40}},{\"name\":\"cdr-text-header-4\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":600,\"fontWeight\":5,\"letterSpacing\":0.2,\"fontSize\":28,\"lineHeight\":36}},{\"name\":\"cdr-text-header-5\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":600,\"fontWeight\":5,\"letterSpacing\":0.2,\"fontSize\":24,\"lineHeight\":32}},{\"name\":\"cdr-text-header-6\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":600,\"fontWeight\":5,\"letterSpacing\":0.2,\"fontSize\":20,\"lineHeight\":28}},{\"name\":\"cdr-text-header-7\",\"value\":{\"fontFamily\":\"Sentinel\",\"fontStyle\":\"normal\",\"fontWeightOriginal\":600,\"fontWeight\":5,\"letterSpacing\":0.2,\"fontSize\":18,\"lineHeight\":24}}]}");

/***/ }),

/***/ "./src/Resources/sketchTokens.js":
/*!***************************************!*\
  !*** ./src/Resources/sketchTokens.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // SHADOWS //
  prominence: [{
    name: "cdr-prominence-00",
    value: []
  }, {
    name: "cdr-prominence-10",
    value: [{
      color: "#00000022",
      x: 0,
      y: 0,
      blur: 4
    }, {
      color: "#00000011",
      x: 0,
      y: 2,
      blur: 4
    }]
  }, {
    name: "cdr-prominence-20",
    value: [{
      color: "#00000022",
      x: 0,
      y: 2,
      blur: 4
    }, {
      color: "#00000011",
      x: 0,
      y: 3,
      blur: 9
    }]
  }, {
    name: "cdr-prominence-30",
    value: [{
      color: "#00000022",
      x: 0,
      y: 4,
      blur: 8
    }, {
      color: "#00000011",
      x: 0,
      y: 4,
      blur: 16
    }]
  }, {
    name: "cdr-prominence-40",
    value: [{
      color: "#00000022",
      x: 0,
      y: 8,
      blur: 16
    }, {
      color: "#00000011",
      x: 0,
      y: 5,
      blur: 25
    }]
  }],
  // TYPOGRAPHY //
  text: [// HEADINGS //
  {
    name: "cdr-text-heading-800",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 48,
      lineHeight: 60,
      letterSpacing: 0.01
    }
  }, {
    name: "cdr-text-heading-700",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 38,
      lineHeight: 48,
      letterSpacing: 0.0075
    }
  }, {
    name: "cdr-text-heading-600",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: 0.005
    }
  }, {
    name: "cdr-text-heading-500",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 28,
      lineHeight: 32,
      letterSpacing: -0.0025
    }
  }, {
    name: "cdr-text-heading-400",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 0
    }
  }, {
    name: "cdr-text-heading-300",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 20,
      lineHeight: 26,
      letterSpacing: 0.005
    }
  }, {
    name: "cdr-text-heading-200",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: 0.01
    }
  }, {
    name: "cdr-text-heading-100",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 10,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.015
    }
  }, // SUBHEADING ?? //
  // DAT BOD //
  {
    name: "cdr-text-body-400",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 6,
      fontSize: 20,
      lineHeight: 32,
      letterSpacing: 0
    }
  }, {
    name: "cdr-text-body-300",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 6,
      fontSize: 18,
      lineHeight: 28,
      letterSpacing: 0
    }
  }, {
    name: "cdr-text-body-200",
    value: {
      fontFamily: "REI Stuart App",
      fontWeight: 6,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0
    }
  }, {
    name: "cdr-text-body-sans-400",
    value: {
      fontFamily: "Graphik App",
      fontWeight: 6,
      fontSize: 20,
      lineHeight: 32,
      letterSpacing: 0
    }
  }, {
    name: "cdr-text-body-sans-300",
    value: {
      fontFamily: "Graphik App",
      fontWeight: 6,
      fontSize: 18,
      lineHeight: 28,
      letterSpacing: 0
    }
  }, {
    name: "cdr-text-body-sans-200",
    value: {
      fontFamily: "Graphik App",
      fontWeight: 6,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0
    }
  }, {
    name: "cdr-text-body-sans-100",
    value: {
      fontFamily: "Graphik App",
      fontWeight: 6,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0
    }
  }, // UTIL //
  {
    name: "cdr-text-heading-label-150",
    value: {
      fontFamily: "Graphik App",
      fontWeight: 8,
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0,
      textTransform: "uppercase"
    }
  }],
  // COLORS //
  colors: [{
    name: "cdr-color-text-primary-lightmode",
    type: "text",
    value: "#292929"
  }, {
    name: "cdr-color-text-primary-darkmode",
    type: "text",
    value: "#fafafa"
  }, {
    name: "cdr-color-text-secondary-lightmode",
    type: "text",
    value: "#616161"
  }, {
    name: "cdr-color-text-secondary-darkmode",
    type: "text",
    value: "#999999"
  }, {
    name: "cdr-color-text-disabled-lightmode",
    type: "text",
    value: "#b8b8b8"
  }, {
    name: "cdr-color-text-disabled-darkmode",
    type: "text",
    value: "#616161"
  }, {
    name: "cdr-color-text-link-lightmode",
    type: "text",
    value: "#3278ae"
  }, {
    name: "cdr-color-text-link-darkmode",
    type: "text",
    value: "#5197cd"
  }, {
    name: "cdr-color-text-error-lightmode",
    type: "text",
    value: "#b5292b"
  }, {
    name: "cdr-color-text-error-darkmode",
    type: "text",
    value: "#e86868"
  }, {
    name: "cdr-color-text-form-label-lightmode",
    type: "text",
    value: "#292929"
  }, {
    name: "cdr-color-text-form-label-darkmode",
    type: "text",
    value: "#fafafa"
  }, {
    name: "cdr-color-text-form-placeholder-lightmode",
    type: "text",
    value: "#616161"
  }, {
    name: "cdr-color-text-form-placeholder-darkmode",
    type: "text",
    value: "#999999"
  }, {
    name: "cdr-color-text-form-disabled-lightmode",
    type: "text",
    value: "#b8b8b8"
  }, {
    name: "cdr-color-text-form-disabled-darkmode",
    type: "text",
    value: "#616161"
  }, {
    name: "cdr-color-icon-primary-lightmode",
    type: "icon",
    value: "#616161"
  }, {
    name: "cdr-color-icon-primary-darkmode",
    type: "icon",
    value: "#999999"
  }, {
    name: "cdr-color-icon-emphasis-lightmode",
    type: "icon",
    value: "#292929"
  }, {
    name: "cdr-color-icon-emphasis-darkmode",
    type: "icon",
    value: "#fafafa"
  }, {
    name: "cdr-color-background-dark",
    type: "background",
    value: "#292929"
  }, {
    name: "cdr-color-background-darker",
    type: "background",
    value: "#1a1a1a"
  }, {
    name: "cdr-color-background-light",
    type: "background",
    value: "#f7f7f7"
  }, {
    name: "cdr-color-background-lighter",
    type: "background",
    value: "#fafafa"
  }, {
    name: "cdr-color-background-lightest",
    type: "background",
    value: "#ffffff"
  }, {
    name: "cdr-color-background-form-lightmode",
    type: "background",
    value: "#ffffff"
  }, {
    name: "cdr-color-background-form-darkmode",
    type: "background",
    value: "#292929"
  }, {
    name: "cdr-color-background-form-input-lightmode",
    type: "background",
    value: "#ffffff"
  }, {
    name: "cdr-color-background-form-input-darkmode",
    type: "background",
    value: "#292929"
  }, {
    name: "cdr-color-border-primary-lightmode",
    type: "border",
    value: "#616161"
  }, {
    name: "cdr-color-border-primary-darkmode",
    type: "border",
    value: "#fafafa"
  }, {
    name: "cdr-color-border-secondary-lightmode",
    type: "border",
    value: "#b8b8b8"
  }, {
    name: "cdr-color-border-secondary-darkmode",
    type: "border",
    value: "#999999"
  }, {
    name: "cdr-color-border-disabled-lightmode",
    type: "border",
    value: "#dadada"
  }, {
    name: "cdr-color-border-disabled-darkmode",
    type: "border",
    value: "#dadada"
  }, {
    name: "cdr-color-border-error-lightmode",
    type: "border",
    value: "#e86868"
  }, {
    name: "cdr-color-border-selected-lightmode",
    type: "border",
    value: "#2b6692"
  }],
  // SIZING //
  sizing: {
    space: [{
      name: "cdr-space-four-x",
      value: 64 // more...

    }],
    inset: [{
      name: "cdr-space-inset-eighth-x-squish",
      value: [0, 2] // "0 0.2rem"

    }, {
      name: "cdr-space-inset-eighth-x-stretch",
      value: [4, 2] // "0.4rem 0.2rem"

    }]
  },
  // RADIUS //
  radius: [{
    name: "cdr-radius-sharp",
    value: 0
  }, {
    name: "cdr-radius-soft",
    value: 2
  }, {
    name: "cdr-radius-softer",
    value: 4
  }, {
    name: "cdr-radius-round",
    value: 32
  }],
  // BREAKPOINTS //
  breakpoints: [{
    name: "cdr-breakpoint-xs",
    value: 0
  }, {
    name: "cdr-breakpoint-sm",
    value: 768
  }, {
    name: "cdr-breakpoint-md",
    value: 992
  }, {
    name: "cdr-breakpoint-lg",
    value: 1232
  }]
};

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: overwriteAll, deleteAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overwriteAll", function() { return overwriteAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAll", function() { return deleteAll; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources_sketch_tokens_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resources/sketch-tokens.json */ "./src/Resources/sketch-tokens.json");
var _Resources_sketch_tokens_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Resources/sketch-tokens.json */ "./src/Resources/sketch-tokens.json", 1);
/* harmony import */ var _Resources_sketchTokens_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resources/sketchTokens.js */ "./src/Resources/sketchTokens.js");
/* harmony import */ var _Resources_sketchTokens_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Resources_sketchTokens_js__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();

console.log(_Resources_sketch_tokens_json__WEBPACK_IMPORTED_MODULE_1___namespace);

var colorTokens = _Resources_sketchTokens_js__WEBPACK_IMPORTED_MODULE_2___default.a.colors;
var textTokens = _Resources_sketchTokens_js__WEBPACK_IMPORTED_MODULE_2___default.a.text;
var prominenceTokens = _Resources_sketchTokens_js__WEBPACK_IMPORTED_MODULE_2___default.a.prominence; // https://developer.sketch.com/reference/api/

function overwriteAll(context) {
  overwriteColors();
  overwriteTextStyles();
  overwriteLayerStyles();
}
function deleteAll(context) {
  document.colors = [];
  document.sharedTextStyles = [];
  document.sharedLayerStyles = [];
}

function overwriteColors(context) {
  document.colors = generateColors();
}

function overwriteTextStyles(context) {
  setStyles(document.sharedTextStyles, generateTextStyles(), true);
}

function overwriteLayerStyles(context) {
  setStyles(document.sharedLayerStyles, generateLayerStyles());
}

function generateColors() {
  return colorTokens.map(function (color) {
    return {
      name: cssNameToSketch(color.name.substring(10)),
      color: color.value
    };
  });
}

function generateTextStyles(context) {
  var textStyles = [];
  var textColorTokens = colorTokens.filter(function (color) {
    return color.type === 'text';
  });
  var textAlignment = [{
    name: 'left',
    value: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text.Alignment.left
  }, {
    name: 'center',
    value: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text.Alignment.center
  }, {
    name: 'right',
    value: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text.Alignment.right
  }];
  textTokens.forEach(function (textToken) {
    textColorTokens.forEach(function (textColor) {
      var textColorName = textColor.name.substring(15);
      textAlignment.forEach(function (textAlign) {
        var styleName = "".concat(textToken.name.substring(9), "-").concat(textColorName, "-").concat(textAlign.name);
        textStyles.push({
          name: cssNameToSketch(styleName),
          style: {
            lineHeight: textToken.value.lineHeight,
            fontSize: textToken.value.fontSize,
            fontFamily: textToken.value.fontFamily,
            fontWeight: textToken.value.fontWeight,
            textTransform: textToken.value.textTransform,
            textColor: textColor.value,
            alignment: textAlign.value,
            borders: []
          }
        });
      });
    });
  });
  return textStyles;
}

function generateLayerStyles() {
  var fillStyles = [];
  var borderStyles = [];
  var lineStyles = [];
  colorTokens // .filter(color=>color.docs.type !== 'text') // keeping text styles for flexibility
  .forEach(function (color) {
    if (color.type === 'border') {
      // Borders with inset lines
      borderStyles.push({
        name: cssNameToSketch(color.name.substring(10)),
        style: {
          borders: [{
            color: color.value,
            position: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Style.BorderPosition.Inside
          }]
        }
      }); // Lines have centered line positions

      lineStyles.push({
        name: cssNameToSketch(color.name.substring(10).replace('border', 'line')),
        style: {
          borders: [{
            color: color.value,
            position: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Style.BorderPosition.Center
          }]
        }
      });
    } else {
      fillStyles.push({
        name: cssNameToSketch(color.name.substring(10)),
        style: {
          fills: [{
            color: color.value
          }],
          borders: []
        }
      });
    }
  });
  var prominenceStyles = prominenceTokens.map(function (prom) {
    return {
      name: cssNameToSketch(prom.name.substring(4)),
      style: {
        shadows: prom.value,
        borders: []
      }
    };
  });
  var noneStyle = [{
    name: 'None',
    style: {
      fills: [],
      borders: []
    }
  }];
  var layerStyles = [].concat(fillStyles, borderStyles, // lineStyles, // replace 'border' with 'line' tokens will be confuse?
  prominenceStyles, noneStyle);
  return layerStyles;
}

function setStyles(currentStyles, newStyles) {
  var isText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // map name to id
  var currentStylesNameToIdMap = {};
  currentStyles.forEach(function (currentStyle) {
    currentStylesNameToIdMap[currentStyle.name] = currentStyle.id;
  });
  newStyles.forEach(function (newStyle) {
    var newStyleId = currentStylesNameToIdMap[newStyle.name];

    if (newStyleId == null) {
      // it doesn't exist, so add it
      currentStyles.push(newStyle);
    } else {
      // it does exist, so update it
      var currentStyle = isText ? document.getSharedTextStyleWithID(newStyleId) : document.getSharedLayerStyleWithID(newStyleId); // set current style by merging with newStyle

      currentStyle.style = _objectSpread({}, currentStyle.style, {}, newStyle.style);
    }
  });
} // UTIL FUNCTIONS // 


var cssNameToSketch = function cssNameToSketch(string) {
  return string.split('-').map(function (substring) {
    return stringCapitalizeFistLetter(substring);
  }).join('/');
};

var stringCapitalizeFistLetter = function stringCapitalizeFistLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else if (typeof exports[key] !== 'function') {
    throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
  } else {
    exports[key](context);
  }
}
globalThis['overwriteAll'] = __skpm_run.bind(this, 'overwriteAll');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['deleteAll'] = __skpm_run.bind(this, 'deleteAll')

//# sourceMappingURL=script.js.map