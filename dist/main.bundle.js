/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Tektur&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tektur', cursive;
}

.screen {
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #010518, #081a2c, #010518);
}

.intro {
  text-align: center;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.title_wrapper {
  display: flex;
  justify-content: center;
  position: relative;
  height: 150px;
  width: 100%;
}

.intro_title--animation {
  position: absolute;
  top: -30px;
  animation: showUp 5s ease-in-out;
}

.intro_title {
  font-family: 'Vina Sans', 'cursive';
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 0.1rem;
  color: #d3d3cb;
  text-shadow: 5px 2px 3px #9b95955d;
}

.display_wrapper {
  display: flex;
  justify-content: center;
  padding: 0 0.8rem;
}

.display {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 4rem;
  width: 1000px;
  max-width: 100%;
  background-image: linear-gradient(90deg, #2b2a2a, #2c2b2b, #2b2a2a);
  border-radius: 1rem;
  border: 3px outset rgb(156, 154, 154);
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.display_text {
  max-width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: rgb(219, 218, 218);
  word-wrap: break-word;
}

.gameboard_wrapper {
  flex: 1;
  display: flex;
  margin-inline: auto;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 0 1rem;
  gap: 1rem;
}

.gameboard_wrapper--center {
  justify-content: center;
}

.gameboard {
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: 1fr;
  width: 500px;
  height: 500px;
}

.gameboard > div {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgb(241, 236, 236);
  margin: 2px;
  color: white;
}

#computer_board > div {
  cursor: crosshair;
}

.col h2 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 1.7rem;
  color: white;
}

.initial_wrapper {
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.big_font {
  font-size: clamp(5vw, 10rem, 20vw);
}

.button {
  margin-top: 2rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: clamp(1.5rem, 5vw, 2rem);
  padding: 0.3rem 2.5rem;
  border-radius: 0.2rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
  
}

.button--animation {
  animation: buttonAnimation 2s linear 4s;
}

.button--small {
  font-size: 1.3rem;
}

.button:hover {
  background-color: #859fb67a;
}

.game_over-screen {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.212);
  backdrop-filter: blur(5px);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  background-color: #00000088;
  min-height: 300px;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.295);
}

.modal_text {
  color: white;
  font-size: 3.5rem;
}

.wrapper {
  flex-direction: column;
  min-height: 100vh;
 
}

.wrapper_header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px;
}

.wrapper_text {
  font-size: 2rem;
  color: white;
}

.has_ship {
  background-color: rgb(35, 177, 35);
}

.missed {
  background-color: rgba(145, 145, 145, 0.753);
}

.hit {
  background-color: rgb(192, 32, 32);
}

.invalid {
  cursor: not-allowed;
}

.posible_position {
  background-color: #507c50c0;
}

@media (max-width: 1100px) {
  .gameboard {
    width: 430px;
    height: 430px;
  }
}

@media (max-width: 910px) {
  .gameboard_wrapper {
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 1rem;
  }
}

@media (max-width: 450px) {
  .display_text {
    font-size: 1.2rem;
  }

  .gameboard {
    width: 310px;
    height: 310px;
  }

  .modal_text {
    font-size: 3rem;
  }

  .title_wrapper {
    height: 100px;
  }
}

@keyframes showUp {
  to {
    top: -30px;
    opacity: 1;
  }
  from {
    top: -300px;
    opacity: 0;
  }
}

@keyframes buttonAnimation {
  0% {
    background-color: transparent;
  }
  20% {
    background-color: #859fb67a;
  }

  30% {
    background-color: transparent;
  }

  50% {
    background-color: #859fb67a;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Tektur&display=swap');\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Tektur', cursive;\r\n}\r\n\r\n.screen {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  background-image: linear-gradient(90deg, #010518, #081a2c, #010518);\r\n}\r\n\r\n.intro {\r\n  text-align: center;\r\n  margin-bottom: 1.5rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.title_wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: relative;\r\n  height: 150px;\r\n  width: 100%;\r\n}\r\n\r\n.intro_title--animation {\r\n  position: absolute;\r\n  top: -30px;\r\n  animation: showUp 5s ease-in-out;\r\n}\r\n\r\n.intro_title {\r\n  font-family: 'Vina Sans', 'cursive';\r\n  text-transform: uppercase;\r\n  font-size: 4rem;\r\n  letter-spacing: 0.1rem;\r\n  color: #d3d3cb;\r\n  text-shadow: 5px 2px 3px #9b95955d;\r\n}\r\n\r\n.display_wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 0 0.8rem;\r\n}\r\n\r\n.display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  min-height: 4rem;\r\n  width: 1000px;\r\n  max-width: 100%;\r\n  background-image: linear-gradient(90deg, #2b2a2a, #2c2b2b, #2b2a2a);\r\n  border-radius: 1rem;\r\n  border: 3px outset rgb(156, 154, 154);\r\n  margin-bottom: 2rem;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.display_text {\r\n  max-width: 100%;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  color: rgb(219, 218, 218);\r\n  word-wrap: break-word;\r\n}\r\n\r\n.gameboard_wrapper {\r\n  flex: 1;\r\n  display: flex;\r\n  margin-inline: auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1200px;\r\n  padding: 0 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.gameboard_wrapper--center {\r\n  justify-content: center;\r\n}\r\n\r\n.gameboard {\r\n  flex-shrink: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-auto-rows: 1fr;\r\n  width: 500px;\r\n  height: 500px;\r\n}\r\n\r\n.gameboard > div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1.5px solid rgb(241, 236, 236);\r\n  margin: 2px;\r\n  color: white;\r\n}\r\n\r\n#computer_board > div {\r\n  cursor: crosshair;\r\n}\r\n\r\n.col h2 {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 1.7rem;\r\n  color: white;\r\n}\r\n\r\n.initial_wrapper {\r\n  display: flex;\r\n  height: 80vh;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.big_font {\r\n  font-size: clamp(5vw, 10rem, 20vw);\r\n}\r\n\r\n.button {\r\n  margin-top: 2rem;\r\n  background-color: transparent;\r\n  border: 1px solid white;\r\n  color: white;\r\n  font-size: clamp(1.5rem, 5vw, 2rem);\r\n  padding: 0.3rem 2.5rem;\r\n  border-radius: 0.2rem;\r\n  transition: background-color 0.3s ease;\r\n  cursor: pointer;\r\n  \r\n}\r\n\r\n.button--animation {\r\n  animation: buttonAnimation 2s linear 4s;\r\n}\r\n\r\n.button--small {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #859fb67a;\r\n}\r\n\r\n.game_over-screen {\r\n  position: fixed;\r\n  top: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.212);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  width: 100%;\r\n  background-color: #00000088;\r\n  min-height: 300px;\r\n  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.295);\r\n}\r\n\r\n.modal_text {\r\n  color: white;\r\n  font-size: 3.5rem;\r\n}\r\n\r\n.wrapper {\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n \r\n}\r\n\r\n.wrapper_header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 250px;\r\n}\r\n\r\n.wrapper_text {\r\n  font-size: 2rem;\r\n  color: white;\r\n}\r\n\r\n.has_ship {\r\n  background-color: rgb(35, 177, 35);\r\n}\r\n\r\n.missed {\r\n  background-color: rgba(145, 145, 145, 0.753);\r\n}\r\n\r\n.hit {\r\n  background-color: rgb(192, 32, 32);\r\n}\r\n\r\n.invalid {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.posible_position {\r\n  background-color: #507c50c0;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .gameboard {\r\n    width: 430px;\r\n    height: 430px;\r\n  }\r\n}\r\n\r\n@media (max-width: 910px) {\r\n  .gameboard_wrapper {\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    padding-bottom: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .display_text {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .gameboard {\r\n    width: 310px;\r\n    height: 310px;\r\n  }\r\n\r\n  .modal_text {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .title_wrapper {\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n@keyframes showUp {\r\n  to {\r\n    top: -30px;\r\n    opacity: 1;\r\n  }\r\n  from {\r\n    top: -300px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes buttonAnimation {\r\n  0% {\r\n    background-color: transparent;\r\n  }\r\n  20% {\r\n    background-color: #859fb67a;\r\n  }\r\n\r\n  30% {\r\n    background-color: transparent;\r\n  }\r\n\r\n  50% {\r\n    background-color: #859fb67a;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/audio/fire_shot.mp3":
/*!****************************************!*\
  !*** ./src/assets/audio/fire_shot.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dafc55db3d149326086a.mp3";

/***/ }),

/***/ "./src/assets/audio/intro_music.mp3":
/*!******************************************!*\
  !*** ./src/assets/audio/intro_music.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d52c4557859262c59dc.mp3";

/***/ }),

/***/ "./src/assets/audio/shot_hit.mp3":
/*!***************************************!*\
  !*** ./src/assets/audio/shot_hit.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb709c35c821effbefbd.mp3";

/***/ }),

/***/ "./src/assets/audio/shot_miss.mp3":
/*!****************************************!*\
  !*** ./src/assets/audio/shot_miss.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3e493640fd6e4b47736.mp3";

/***/ }),

/***/ "./src/components/audio.mjs":
/*!**********************************!*\
  !*** ./src/components/audio.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_intro_music_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/intro_music.mp3 */ "./src/assets/audio/intro_music.mp3");
/* harmony import */ var _assets_audio_fire_shot_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audio/fire_shot.mp3 */ "./src/assets/audio/fire_shot.mp3");
/* harmony import */ var _assets_audio_shot_miss_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audio/shot_miss.mp3 */ "./src/assets/audio/shot_miss.mp3");
/* harmony import */ var _assets_audio_shot_hit_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/audio/shot_hit.mp3 */ "./src/assets/audio/shot_hit.mp3");





const audios = {
  intro_music: new Audio(_assets_audio_intro_music_mp3__WEBPACK_IMPORTED_MODULE_0__),
  fire_shot: new Audio(_assets_audio_fire_shot_mp3__WEBPACK_IMPORTED_MODULE_1__),
  shot_miss: new Audio(_assets_audio_shot_miss_mp3__WEBPACK_IMPORTED_MODULE_2__),
  shot_hit: new Audio(_assets_audio_shot_hit_mp3__WEBPACK_IMPORTED_MODULE_3__),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audios);


/***/ }),

/***/ "./src/components/game_screen.mjs":
/*!****************************************!*\
  !*** ./src/components/game_screen.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameOverModal: () => (/* binding */ gameOverModal),
/* harmony export */   game_screen: () => (/* binding */ game_screen),
/* harmony export */   initial_screen: () => (/* binding */ initial_screen),
/* harmony export */   place_ship_screen: () => (/* binding */ place_ship_screen)
/* harmony export */ });
const initial_screen = document.createElement('div');
initial_screen.innerHTML = `
  <div class="initial_wrapper">
      <div class="title_wrapper"><h1 class="intro_title intro_title--animation big_font">Battleship</h1></div>
      <div>
        <button class="button button--animation" id="start_button">Start</button>
      </div>
    </div>
`;

const game_screen = document.createElement('div');
game_screen.innerHTML = `
 <div class="intro">
    <h1 class="intro_title">Battleship</h1>
  </div>
  <div class="display_wrapper">
      <div class="display">
        <span class="display_text"></span>
      </div>
  </div>
   <div class="gameboard_wrapper">
    <div class="col">
        <h2>Your Waters</h2>
         <div class="gameboard" id="player_board"></div>
      </div>
      <div class="col">
        <h2>Enemy Waters</h2>
         <div class="gameboard" id="computer_board"></div>
      </div>
  </div> 
`;

const place_ship_screen = document.createElement('div');
place_ship_screen.innerHTML = `
    <div class="wrapper">
      <div class="wrapper_header">
        <div class="wrapper_text">Set your <span id="ship_name">Battleship</span></div>
        <button class="button button--small" id="toggle_axis">Toggle axis</button>
      </div>
      <div class="gameboard_wrapper gameboard_wrapper--center">
        <div class="gameboard"></div>
      </div>
    </div>`;

const gameOverModal = document.createElement('div');
gameOverModal.innerHTML = `
    <div class="game_over-screen">
      <div class="modal">
        <div class="modal_text"></div>
        <button class="button" id="reset">Try Again</button>
      </div>
    </div>`;




/***/ }),

/***/ "./src/dom/audioController.mjs":
/*!*************************************!*\
  !*** ./src/dom/audioController.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/audio.mjs */ "./src/components/audio.mjs");
/* harmony import */ var _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub/evets.mjs */ "./src/pubsub/evets.mjs");



const audioController = () => {
  function playIntroMusic() {
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].intro_music.loop = true;
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].intro_music.currentTime = 0;
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].intro_music.play();
  }

  function stopIntroMusic() {
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].intro_music.pause();
  }

  function playShot() {
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].fire_shot.currentTime = 0;
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].fire_shot.play();
  }

  function playShotMiss() {
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].shot_miss.currentTime = 0;
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].shot_miss.play();
  }

  function playShotHit() {
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].shot_hit.currentTime = 0;
    _components_audio_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].shot_hit.play();
  }

  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('playIntro', playIntroMusic);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('stopIntro', stopIntroMusic);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('fire_shot', playShot);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('shot_miss', playShotMiss);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('shot_hit', playShotHit);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioController);


/***/ }),

/***/ "./src/dom/displayController.mjs":
/*!***************************************!*\
  !*** ./src/dom/displayController.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub/evets.mjs */ "./src/pubsub/evets.mjs");


const displayController = () => {
  let display;

  function write(msg) {
    let msgSplit = msg.split('');
    clear();

    msgSplit.forEach((letter, index) => {
      setTimeout(() => {
        display.textContent += letter;
      }, index * 45);
    });
  }

  function clear() {
    display.textContent = '';
  }

  function init() {
    display = document.querySelector('.display_text');
    write('Await orders...');
  }

  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].on('initDisplay', init);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].on('write', write);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


/***/ }),

/***/ "./src/dom/dom.mjs":
/*!*************************!*\
  !*** ./src/dom/dom.mjs ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/game_screen.mjs */ "./src/components/game_screen.mjs");
/* harmony import */ var _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub/evets.mjs */ "./src/pubsub/evets.mjs");
/* harmony import */ var _gameBoard_controller_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard_controller.mjs */ "./src/dom/gameBoard_controller.mjs");
/* harmony import */ var _audioController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audioController.mjs */ "./src/dom/audioController.mjs");
/* harmony import */ var _displayController_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayController.mjs */ "./src/dom/displayController.mjs");
/* harmony import */ var _setShip_controller_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setShip_controller.mjs */ "./src/dom/setShip_controller.mjs");







const Dom = () => {
  const main_screen = document.querySelector('.screen');
  (0,_gameBoard_controller_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_audioController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_displayController_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_setShip_controller_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])();

  const setButtonEvent = () => {
    const startButton = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_0__.initial_screen.querySelector('#start_button');
    startButton.addEventListener('click', () => {
      _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].emit('newGame');
      _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].emit('stopIntro');
      _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].emit('fire_shot');
    });

    const reset = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_0__.gameOverModal.querySelector('button');
    reset.addEventListener('click', () => {
      setInitialScreen();
    });
  };

  const setInitialScreen = () => {
    cleanScreen();
    main_screen.appendChild(_components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_0__.initial_screen);
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].emit('playIntro');
  };

  const setScreen = (screen) => {
    cleanScreen();
    main_screen.appendChild(screen);
  };

  const cleanScreen = () => {
    main_screen.innerHTML = '';
  };

  const setGameOverModal = (data) => {
    const text = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_0__.gameOverModal.querySelector('.modal_text');
    text.innerText = `${data.name} Wins!`;

    main_screen.appendChild(_components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_0__.gameOverModal);
  };

  const setShipScreen = () => {
    setScreen(_components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_0__.place_ship_screen);
  };

  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('gameOver', setGameOverModal);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('setGameScreen', setScreen);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('setShipScreen', setShipScreen);
  setButtonEvent();

  return {
    setInitialScreen,
    setGameOverModal,
    setShipScreen,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);


/***/ }),

/***/ "./src/dom/gameBoard_controller.mjs":
/*!******************************************!*\
  !*** ./src/dom/gameBoard_controller.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub/evets.mjs */ "./src/pubsub/evets.mjs");
/* harmony import */ var _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game_screen.mjs */ "./src/components/game_screen.mjs");



const gameboard_controller = () => {
  const playerBoardElement = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__.game_screen.querySelector('#player_board');
  const computerBoardElement = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__.game_screen.querySelector('#computer_board');
  let playerBoard;
  let computerBoard;
  let game;

  function setGameboard() {
    cleanHTML(playerBoardElement);
    cleanHTML(computerBoardElement);
    fillPlayer(playerBoardElement, playerBoard);
    fillComputerBoard(computerBoardElement, computerBoard);

    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('setGameScreen', _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__.game_screen);
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('initDisplay');
  }

  function cleanHTML(element) {
    element.innerHTML = '';
  }

  function fillPlayer(boardELement, gameboard) {
    for (let i in gameboard) {
      for (let j in gameboard[i]) {
        const cell = document.createElement('div');
        cell.dataset.position = gameboard[i][j].position;
        if (gameboard[i][j].ship) {
          cell.classList.add('has_ship');
        }
        boardELement.appendChild(cell);
      }
    }
  }

  function fillComputerBoard(boardELement, gameboard) {
    for (let i in gameboard) {
      for (let j in gameboard[i]) {
        const cell = document.createElement('div');
        cell.dataset.position = gameboard[i][j].position;
        cell.addEventListener('click', () => {
          attackEvent(gameboard[i][j].position);
        });
        boardELement.appendChild(cell);
      }
    }
  }

  async function attackEvent(position) {
    if (game.getCurrentPlayer() !== 'player') return;
    if (computerBoard[position[0]][position[1]].isHit) return;

    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('write', 'Aim on the enemy waters...');
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('togglePlayer');
    markPosition(position);

    await deleyEvent(1200)
      .then(() => {
        playerAttck(position);

        return deleyEvent(800);
      })
      .then(() => {
        let data = game.getPlayerShotData();
        _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('write', data.text);
        _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit(data.sound);
        updateComputerBoard();

        if (game.isGameOver()) return stopDeleyEvent(500);
        return deleyEvent(800);
      })
      .then(() => {
        _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('write', 'Enemy Aim on ours waters...');
        return deleyEvent(1400);
      })
      .then(() => {
        computerAttck();
        let data = game.getComputerShotData();
        _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('write', data.text);
        _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit(data.sound);

        return deleyEvent(900);
      })
      .then(() => {
        upadatePlayerBoard();
        _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('write', 'Await orders...');
        return deleyEvent(700);
      })
      .then(() => {
        _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('togglePlayer');
      })
      .catch((err) => {});
  }

  function deleyEvent(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      });
    });
  }

  function stopDeleyEvent(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('gameOver');
      }, time);
    });
  }

  function markPosition(position) {
    let cells = computerBoardElement.querySelectorAll('div');

    for (let i in cells) {
      if (cells[i].dataset.position === position.join()) {
        cells[i].textContent = 'X';
        return;
      }
    }
  }

  function playerAttck(position) {
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('playerAttack', position);
  }

  function computerAttck() {
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('computerAttack');
  }

  function updateComputerBoard() {
    upadateBoard(computerBoardElement, computerBoard);
  }

  function upadatePlayerBoard() {
    upadateBoard(playerBoardElement, playerBoard);
  }

  function upadateBoard(boardELement, gameBoard) {
    const cells = [...boardELement.querySelectorAll('div')];

    cells.forEach((cell) => {
      const position = cell.dataset.position.split(',');
      updateCell(cell, gameBoard[position[0]][position[1]]);
    });
  }

  function updateCell(cellElement, gameboardCell) {
    if (!gameboardCell.isHit) return;

    if (gameboardCell.ship) {
      cellElement.classList.add('hit');
      return;
    }

    cellElement.classList.add('missed');
  }

  function init(newGame) {
    playerBoard = newGame.getPlayerBoard().getGameboard();
    computerBoard = newGame.getComputerBoard().getGameboard();
    game = newGame;
    setGameboard();
  }

  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].on('setGameboards', init);

  return {
    init,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard_controller);


/***/ }),

/***/ "./src/dom/setShip_controller.mjs":
/*!****************************************!*\
  !*** ./src/dom/setShip_controller.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub/evets.mjs */ "./src/pubsub/evets.mjs");
/* harmony import */ var _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game_screen.mjs */ "./src/components/game_screen.mjs");
/* harmony import */ var _game_helpers_ships_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game_helpers/ships.mjs */ "./src/game_helpers/ships.mjs");




const setShipController = () => {
  const gameboardElement = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__.place_ship_screen.querySelector('.gameboard');
  let shipsObj = (0,_game_helpers_ships_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])();
  let isVertical = false;
  let shipsNames = [];
  let playerBoard;
  let cells;

  const fillGameboard = () => {
    const board = playerBoard.getGameboard();

    for (let i in board) {
      for (let j in board[i]) {
        const cell = document.createElement('div');
        cell.dataset.position = board[i][j].position;
        gameboardElement.appendChild(cell);

        cell.addEventListener('mouseover', () => {
          setPossiblePosition(board[i][j].position, cell);
        });

        cell.addEventListener('mouseout', removeClass);

        cell.addEventListener('click', () => {
          setShip(board[i][j].position, cell);
          changeShip();
          setShipPosition();
          isAllShipsSets();
        });
      }
    }
  };

  const setPossiblePosition = (position, cell) => {
    if (shipsNames.length === 0) return;

    const length = shipsObj[shipsNames[0]].getShipLength();
    const coords = playerBoard.getShipCoords(
      position[0],
      position[1],
      length,
      isVertical
    );
    const invalidCoord = playerBoard.overFlowGameboard(
      coords[0],
      length,
      isVertical
    );

    if (invalidCoord || playerBoard.hasShip(coords)) {
      cell.classList.add('invalid');
      return;
    }

    markCoords(coords);
  };

  const markCoords = (coords) => {
    for (let i in cells) {
      for (let j in coords) {
        if (cells[i].dataset.position === coords[j].join(',')) {
          cells[i].classList.add('posible_position');
        }
      }
    }
  };

  const removeClass = () => {
    cells.forEach((cell) => {
      cell.classList.remove('invalid');
      cell.classList.remove('posible_position');
    });
  };

  const fillShipNames = () => {
    for (let i in shipsObj) {
      shipsNames.push(i);
    }
  };

  const addButtonEvent = () => {
    const button = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__.place_ship_screen.querySelector('button');
    button.addEventListener('click', toggleAxis);
  };

  const toggleAxis = () => {
    isVertical === true ? (isVertical = false) : (isVertical = true);
  };

  const changeShip = () => {
    const playerShips = playerBoard.getShips();

    playerShips.forEach(({ name }) => {
      if (name === shipsNames[0]) {
        shipsNames.shift();
      }
    });

    updateShipDisplay();
  };

  const updateShipDisplay = () => {
    const span = _components_game_screen_mjs__WEBPACK_IMPORTED_MODULE_1__.place_ship_screen.querySelector('#ship_name');
    span.textContent = shipsNames[0];
  };

  const setShip = (position) => {
    const shipName = shipsNames[0];
    playerBoard.setShip(position, shipsObj[shipName], isVertical);
  };

  const isAllShipsSets = () => {
    if (shipsNames.length !== 0) return;
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].emit('allShipSet');
  };

  const setShipPosition = () => {
    const shipCells = playerBoard.getShipCells();

    for (let i in cells) {
      for (let j in shipCells) {
        if (cells[i].dataset.position === shipCells[j].join(',')) {
          cells[i].classList.add('has_ship');
        }
      }
    }
  };

  const cleanGameboard = () => {
    gameboardElement.innerHTML = '';
  };

  const init = (game) => {
    playerBoard = game.getPlayerBoard();
    cleanGameboard();
    fillGameboard();
    fillShipNames();
    addButtonEvent();
    changeShip();
    cells = [...gameboardElement.querySelectorAll('div')];
    shipsObj = (0,_game_helpers_ships_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])();
  };

  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].on('setShipScreen', init);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setShipController);


/***/ }),

/***/ "./src/game_helpers/placeShips.mjs":
/*!*****************************************!*\
  !*** ./src/game_helpers/placeShips.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ships_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.mjs */ "./src/game_helpers/ships.mjs");


const placeShips = ({ gameboard }) => {
  let shipsObj = (0,_ships_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])();

  for (let i in shipsObj) {
    gameboard.setRandomShip(shipsObj[i]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShips);


/***/ }),

/***/ "./src/game_helpers/ships.mjs":
/*!************************************!*\
  !*** ./src/game_helpers/ships.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_logic_ship_ship_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game_logic/ship/ship.mjs */ "./src/game_logic/ship/ship.mjs");


const ships = () => {
  return {
    Carrier: (0,_game_logic_ship_ship_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])('Carrier', 5),
    Battleship: (0,_game_logic_ship_ship_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])('Battleship', 4),
    Destroyer: (0,_game_logic_ship_ship_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])('Destroyer', 3),
    Submarine: (0,_game_logic_ship_ship_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])('Submarine', 3),
    'Patrol Boat': (0,_game_logic_ship_ship_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])('Patrol Boat', 2),
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);


/***/ }),

/***/ "./src/game_logic/IA/computer_IA.mjs":
/*!*******************************************!*\
  !*** ./src/game_logic/IA/computer_IA.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player_player_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/player.mjs */ "./src/game_logic/player/player.mjs");


const AttackTrack = (player, gameboard) => {
  let track = [];

  const fillAttackTrack = (position) => {
    let ship = gameboard.getGameboard()[position[0]][position[1]].ship;
    if (ship) {
      if (ship.isSunk()) {
        track = [];
        return;
      }
    }

    if (player.getLastShot() !== 'hit') return;

    let coords =
      ship.getAxis() === false
        ? getHorizontalCoords(position)
        : getVerticalCoords(position);

    coords = removeOverFlowCoord(coords);
    coords = removeHitCells(coords);

    coords.forEach((cell) => track.push(cell));
  };

  const getHorizontalCoords = (position) => {
    let x = position[0];
    let y = position[1];

    return [
      [x, y + 1],
      [x, y - 1],
    ];
  };

  const getVerticalCoords = (position) => {
    let x = position[0];
    let y = position[1];

    return [
      [x + 1, y],
      [x - 1, y],
    ];
  };

  const removeOverFlowCoord = (arr) => {
    return arr.filter((coord) => {
      return coord[0] < 10 && coord[1] < 10 && coord[0] >= 0 && coord[1] >= 0;
    });
  };

  const removeHitCells = (arr) => {
    return arr.filter((coord) => {
      return gameboard.getGameboard()[coord[0]][coord[1]].isHit === false;
    });
  };

  const getCell = () => {
    if (track.length === 0) return null;
    const index = Math.floor(Math.random() * track.length);
    const cell = track[index];
    remove(index);
    return cell;
  };

  const remove = (index) => {
    track.splice(index, 1);
  };

  return {
    fillAttackTrack,
    getCell,
  };
};

const Ia = (enemy) => {
  const enemyGameboard = enemy.gameboard;
  const iaPlayer = (0,_player_player_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])('Computer');
  const attackTrack = AttackTrack(iaPlayer, enemyGameboard);
  let hack = true;

  const randomAttack = () => {
    const possibleAttckCell =
      attackTrack.getCell() || hackCells() || getPossibleAttackCell();
    iaPlayer.attack(possibleAttckCell, enemyGameboard);
    attackTrack.fillAttackTrack(possibleAttckCell);
  };

  const hackCells = () => {
    if (!hack) return null;
    const shipCells = enemyGameboard.getShipCells();
    const index = Math.floor(Math.random() * shipCells.length);
    hack = false;
    return shipCells[index];
  };

  const getPossibleAttackCell = () => {
    const emptyCells = enemyGameboard.freeShotCells();
    const index = Math.floor(Math.random() * emptyCells.length);

    return emptyCells[index];
  };

  return {
    gameboard: iaPlayer.gameboard,
    name: iaPlayer.name,
    randomAttack,
    getLastShot: iaPlayer.getLastShot,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ia);


/***/ }),

/***/ "./src/game_logic/game.mjs":
/*!*********************************!*\
  !*** ./src/game_logic/game.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player_player_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player.mjs */ "./src/game_logic/player/player.mjs");
/* harmony import */ var _IA_computer_IA_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IA/computer_IA.mjs */ "./src/game_logic/IA/computer_IA.mjs");
/* harmony import */ var _game_helpers_placeShips_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game_helpers/placeShips.mjs */ "./src/game_helpers/placeShips.mjs");
/* harmony import */ var _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pubsub/evets.mjs */ "./src/pubsub/evets.mjs");





const gameOverData = (name) => {
  return {
    name,
  };
};

const shotData = {
  miss: {
    text: "It's a miss...",
    sound: 'shot_miss',
  },

  hit: {
    text: "It's a hit!",
    sound: 'shot_hit',
  },
};

const Game = () => {
  let player;
  let computer;
  let playerBoard;
  let computerBoard;
  let currentPlayer;
  let gameOver = false;

  function playerAttack(position) {
    if (gameOver) return;
    if (computerBoard.getGameboard()[position[0]][position[1]].isHit) return;

    player.attack(position, computerBoard);
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].emit('fire_shot');

    if (verifyForGameOver(computer)) {
      gameOver = true;
      setGameOverData('Player');
      return;
    }
  }

  function computerAttack() {
    if (gameOver) return;

    computer.randomAttack();
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].emit('fire_shot');

    if (verifyForGameOver(player)) {
      gameOver = true;
      setGameOverData('Computer');
      return;
    }
  }

  function verifyForGameOver(enemy) {
    return enemy.gameboard.allShipsSunk();
  }

  function setGameOverData(winner) {
    _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].emit('gameOver', gameOverData(winner));
  }

  function getComputerBoard() {
    return computerBoard;
  }

  function getPlayerBoard() {
    return playerBoard;
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  function init() {
    player = (0,_player_player_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])('Player');
    computer = (0,_IA_computer_IA_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(player);
    playerBoard = player.gameboard;
    computerBoard = computer.gameboard;
    currentPlayer = 'player';
    gameOver = false;
    (0,_game_helpers_placeShips_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(computer);
  }

  function toggleCurrentPlayer() {
    currentPlayer === 'player'
      ? (currentPlayer = 'computer')
      : (currentPlayer = 'player');
  }

  function getPlayerShotData() {
    return shotData[player.getLastShot()];
  }

  function getComputerShotData() {
    return shotData[computer.getLastShot()];
  }

  function isGameOver() {
    return gameOver;
  }

  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].on('playerAttack', playerAttack);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].on('computerAttack', computerAttack);
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].on('togglePlayer', toggleCurrentPlayer);

  return {
    init,
    playerAttack,
    computerAttack,
    verifyForGameOver,
    getComputerBoard,
    getPlayerBoard,
    getCurrentPlayer,
    getComputerShotData,
    getPlayerShotData,
    isGameOver,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/game_logic/gameboard/gameboard.mjs":
/*!************************************************!*\
  !*** ./src/game_logic/gameboard/gameboard.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Cell = (position) => {
  return {
    position,
    isHit: false,
    ship: false,
  };
};

const Gameboard = () => {
  const missedShoots = [];
  const ships = [];
  const getShips = () => ships;
  const getMissedShots = () => missedShoots;
  const allShipsSunk = () => ships.every((ship) => ship.isSunk() === true);
  const makeGameboard = () => {
    let gameboard = [];

    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push(Cell([i, j]));
      }
      gameboard.push(row);
    }

    return gameboard;
  };

  const gameboard = makeGameboard();
  const getGameboard = () => gameboard;

  const setShip = (coord, ship, isVertical = false) => {
    let length = ship.getShipLength();
    let coords = getShipCoords(coord[0], coord[1], length, isVertical);

    if (hasShip(coords) || overFlowGameboard(coord, length, isVertical)) {
      return false;
    }

    ship.setAxis(isVertical);
    coords.forEach((coord) => (gameboard[coord[0]][coord[1]].ship = ship));
    ships.push(ship);

    return true;
  };

  const overFlowGameboard = (coord, length, isVertical) => {
    return isVertical === true
      ? coord[0] + length > 10
      : coord[1] + length > 10;
  };

  const hasShip = (coords) => {
    let fillCells = getFillCells();

    for (let i in fillCells) {
      for (let j in coords) {
        if (
          fillCells[i][0] === coords[j][0] &&
          fillCells[i][1] === coords[j][1]
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const getShipCoords = (x, y, length, isVertical) => {
    return isVertical === true
      ? getVerticalPosition(x, y, length)
      : getHorizontalPosition(x, y, length);
  };

  const getVerticalPosition = (x, y, length) => {
    let coords = [];

    for (let i = x; i < x + length; i++) {
      coords.push([i, y]);
    }

    return coords;
  };

  const getHorizontalPosition = (x, y, length) => {
    let coords = [];

    for (let i = y; i < y + length; i++) {
      coords.push([x, i]);
    }

    return coords;
  };

  const getFillCells = () => {
    return filter((cell) => cell.ship);
  };

  const getEmptyCells = () => {
    return filter((cell) => cell.ship === false);
  };

  const receiveAttack = (coord) => {
    const cell = gameboard[coord[0]][coord[1]];

    if (cell.isHit) return;

    cell.isHit = true;

    if (!cell.ship) {
      missedShoots.push(coord);
      return;
    }

    cell.ship.hit();
  };

  const filter = (fun) => {
    let filltred = [];
    for (let i in gameboard) {
      for (let j in gameboard[i])
        if (fun(gameboard[i][j])) filltred.push(gameboard[i][j].position);
    }

    return filltred;
  };

  const setRandomShip = (ship) => {
    const emptyCells = getEmptyCells();

    while (emptyCells.length > 0) {
      const position = Math.floor(Math.random() * emptyCells.length);
      let assis = Math.floor(Math.random() * 2) === 1 ? true : false;

      if (setShip(emptyCells[position], ship, assis) === false) {
        assis = assis === true ? false : true;

        if (setShip(emptyCells[position], ship, assis) === false) {
          emptyCells.splice(position, 1);
          continue;
        }
      }

      return;
    }
  };

  const freeShotCells = () => {
    return filter((cell) => cell.isHit === false);
  };

  const getShipCells = () => {
    return filter((cell) => cell.ship !== false);
  };

  return {
    getGameboard,
    setShip,
    receiveAttack,
    getMissedShots,
    allShipsSunk,
    setRandomShip,
    getEmptyCells,
    freeShotCells,
    getShips,
    getShipCells,
    getShipCoords,
    overFlowGameboard,
    hasShip,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/game_logic/player/player.mjs":
/*!******************************************!*\
  !*** ./src/game_logic/player/player.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard.mjs */ "./src/game_logic/gameboard/gameboard.mjs");


function Player(name) {
  let lastShot;
  let missedShots;

  const attack = (position, gameboard) => {
    setMissedshots(gameboard);
    gameboard.receiveAttack(position);
    updateLastShoot(gameboard);
  };

  const setMissedshots = (gameboard) => {
    missedShots = gameboard.getMissedShots().length;
  };

  const updateLastShoot = (gameboard) => {
    gameboard.getMissedShots().length > missedShots
      ? (lastShot = 'miss')
      : (lastShot = 'hit');
  };

  const getLastShot = () => {
    return lastShot;
  };

  return {
    name,
    gameboard: (0,_gameboard_gameboard_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    attack,
    getLastShot,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/game_logic/ship/ship.mjs":
/*!**************************************!*\
  !*** ./src/game_logic/ship/ship.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (name, length) => {
  let hits = 0;
  let sunk = false;
  let isVertical;

  const getHits = () => {
    return hits;
  };

  const hit = () => {
    if (isSunk()) return;
    hits++;
    verifyForSunk();
  };

  const isSunk = () => {
    return sunk;
  };

  const verifyForSunk = () => {
    sunk = length - hits === 0 ? true : false;
  };

  const getShipLength = () => {
    return length;
  };

  const setAxis = (axis) => {
    isVertical = axis;
  };

  const getAxis = () => {
    return isVertical;
  };

  return {
    name,
    getHits,
    getShipLength,
    hit,
    isSunk,
    setAxis,
    getAxis,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/pubsub/evets.mjs":
/*!******************************!*\
  !*** ./src/pubsub/evets.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function (eventName, fn) {
    if (this.events[eventName]) {
      for (element in this.events[eventName]) {
        if (this.events[eventName][element] === fn) {
          this.events[eventName].splice(element, 1);
          break;
        }
      }
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => fn(data));
    } else {
      console.log(`${eventName} doesn't exist`);
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_dom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/dom.mjs */ "./src/dom/dom.mjs");
/* harmony import */ var _game_logic_game_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_logic/game.mjs */ "./src/game_logic/game.mjs");
/* harmony import */ var _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub/evets.mjs */ "./src/pubsub/evets.mjs");





const DomModule = (0,_dom_dom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])();
const game = (0,_game_logic_game_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])();
DomModule.setInitialScreen();

function newGame() {
  game.init();
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].emit('setShipScreen', game);
}

function initGame() {
  _pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].emit('setGameboards', game);
}

_pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].on('allShipSet', initGame);
_pubsub_evets_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].on('newGame', newGame);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUg7QUFDdkgsb0hBQW9IO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUss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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0swQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9FQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlDcEI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUJBQXFCLFdBQVc7QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3pCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVztBQUNTO0FBQ0Q7QUFDeEM7QUFDQSxrQkFBa0Isd0RBQUc7QUFDckIsYUFBYSxnRUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFNO0FBQ1I7QUFDQTtBQUNBLHlEQUFNO0FBQ04seURBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9hdWRpby5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVfc2NyZWVuLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9hdWRpb0NvbnRyb2xsZXIubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2Rpc3BsYXlDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9kb20ubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL2dhbWVCb2FyZF9jb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9zZXRTaGlwX2NvbnRyb2xsZXIubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZV9oZWxwZXJzL3BsYWNlU2hpcHMubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZV9oZWxwZXJzL3NoaXBzLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVfbG9naWMvSUEvY29tcHV0ZXJfSUEubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZV9sb2dpYy9nYW1lLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVfbG9naWMvZ2FtZWJvYXJkL2dhbWVib2FyZC5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lX2xvZ2ljL3BsYXllci9wbGF5ZXIubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZV9sb2dpYy9zaGlwL3NoaXAubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcHVic3ViL2V2ZXRzLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZpbmErU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWt0dXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGVrdHVyJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLnNjcmVlbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAxMDUxOCwgIzA4MWEyYywgIzAxMDUxOCk7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGl0bGVfd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmludHJvX3RpdGxlLS1hbmltYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zMHB4O1xyXG4gIGFuaW1hdGlvbjogc2hvd1VwIDVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW50cm9fdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnVmluYSBTYW5zJywgJ2N1cnNpdmUnO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgY29sb3I6ICNkM2QzY2I7XHJcbiAgdGV4dC1zaGFkb3c6IDVweCAycHggM3B4ICM5Yjk1OTU1ZDtcclxufVxyXG5cclxuLmRpc3BsYXlfd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDAuOHJlbTtcclxufVxyXG5cclxuLmRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWluLWhlaWdodDogNHJlbTtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyYjJhMmEsICMyYzJiMmIsICMyYjJhMmEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyOiAzcHggb3V0c2V0IHJnYigxNTYsIDE1NCwgMTU0KTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuLmRpc3BsYXlfdGV4dCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDIxOSwgMjE4LCAyMTgpO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmdhbWVib2FyZF93cmFwcGVyIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkX3dyYXBwZXItLWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmQge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmdhbWVib2FyZCA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiKDI0MSwgMjM2LCAyMzYpO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NvbXB1dGVyX2JvYXJkID4gZGl2IHtcclxuICBjdXJzb3I6IGNyb3NzaGFpcjtcclxufVxyXG5cclxuLmNvbCBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmluaXRpYWxfd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmlnX2ZvbnQge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoNXZ3LCAxMHJlbSwgMjB2dyk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCA1dncsIDJyZW0pO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxufVxyXG5cclxuLmJ1dHRvbi0tYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IGJ1dHRvbkFuaW1hdGlvbiAycyBsaW5lYXIgNHM7XHJcbn1cclxuXHJcbi5idXR0b24tLXNtYWxsIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1OWZiNjdhO1xyXG59XHJcblxyXG4uZ2FtZV9vdmVyLXNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIxMik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBib3gtc2hhZG93OiAxcHggNHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjk1KTtcclxufVxyXG5cclxuLm1vZGFsX3RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiBcclxufVxyXG5cclxuLndyYXBwZXJfaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLndyYXBwZXJfdGV4dCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhhc19zaGlwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDE3NywgMzUpO1xyXG59XHJcblxyXG4ubWlzc2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NSwgMTQ1LCAxNDUsIDAuNzUzKTtcclxufVxyXG5cclxuLmhpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMzIsIDMyKTtcclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5wb3NpYmxlX3Bvc2l0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3YzUwYzA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuZ2FtZWJvYXJkIHtcclxuICAgIHdpZHRoOiA0MzBweDtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTEwcHgpIHtcclxuICAuZ2FtZWJvYXJkX3dyYXBwZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuZGlzcGxheV90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLmdhbWVib2FyZCB7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlX3dyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvd1VwIHtcclxuICB0byB7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ1dHRvbkFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU5ZmI2N2E7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1OWZiNjdhO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFx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O0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZpbmErU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWt0dXImZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1Rla3R1cicsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMTA1MTgsICMwODFhMmMsICMwMTA1MTgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlX3dyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm9fdGl0bGUtLWFuaW1hdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0zMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBzaG93VXAgNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbnRyb190aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1ZpbmEgU2FucycsICdjdXJzaXZlJztcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgY29sb3I6ICNkM2QzY2I7XFxyXFxuICB0ZXh0LXNoYWRvdzogNXB4IDJweCAzcHggIzliOTU5NTVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheV93cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWluLWhlaWdodDogNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyYjJhMmEsICMyYzJiMmIsICMyYjJhMmEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlcjogM3B4IG91dHNldCByZ2IoMTU2LCAxNTQsIDE1NCk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheV90ZXh0IHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHJnYigyMTksIDIxOCwgMjE4KTtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZF93cmFwcGVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZF93cmFwcGVyLS1jZW50ZXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2IoMjQxLCAyMzYsIDIzNik7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXB1dGVyX2JvYXJkID4gZGl2IHtcXHJcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluaXRpYWxfd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ19mb250IHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNXZ3LCAxMHJlbSwgMjB2dyk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAyLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLS1hbmltYXRpb24ge1xcclxcbiAgYW5pbWF0aW9uOiBidXR0b25BbmltYXRpb24gMnMgbGluZWFyIDRzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLS1zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU5ZmI2N2E7XFxyXFxufVxcclxcblxcclxcbi5nYW1lX292ZXItc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg4O1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICBib3gtc2hhZG93OiAxcHggNHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX3RleHQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlcl90ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhc19zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTc3LCAzNSk7XFxyXFxufVxcclxcblxcclxcbi5taXNzZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjc1Myk7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMzIsIDMyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmFsaWQge1xcclxcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc2libGVfcG9zaXRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwN2M1MGMwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAuZ2FtZWJvYXJkIHtcXHJcXG4gICAgd2lkdGg6IDQzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTEwcHgpIHtcXHJcXG4gIC5nYW1lYm9hcmRfd3JhcHBlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxyXFxuICAuZGlzcGxheV90ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2FtZWJvYXJkIHtcXHJcXG4gICAgd2lkdGg6IDMxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsX3RleHQge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGVfd3JhcHBlciB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hvd1VwIHtcXHJcXG4gIHRvIHtcXHJcXG4gICAgdG9wOiAtMzBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIGZyb20ge1xcclxcbiAgICB0b3A6IC0zMDBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBidXR0b25BbmltYXRpb24ge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIDIwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTlmYjY3YTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDMwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1OWZiNjdhO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGludHJvX211c2ljIGZyb20gJy4uL2Fzc2V0cy9hdWRpby9pbnRyb19tdXNpYy5tcDMnO1xyXG5pbXBvcnQgZmlyZV9zaG90IGZyb20gJy4uL2Fzc2V0cy9hdWRpby9maXJlX3Nob3QubXAzJztcclxuaW1wb3J0IHNob3RfbWlzcyBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2hvdF9taXNzLm1wMyc7XHJcbmltcG9ydCBzaG90X2hpdCBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2hvdF9oaXQubXAzJztcclxuXHJcbmNvbnN0IGF1ZGlvcyA9IHtcclxuICBpbnRyb19tdXNpYzogbmV3IEF1ZGlvKGludHJvX211c2ljKSxcclxuICBmaXJlX3Nob3Q6IG5ldyBBdWRpbyhmaXJlX3Nob3QpLFxyXG4gIHNob3RfbWlzczogbmV3IEF1ZGlvKHNob3RfbWlzcyksXHJcbiAgc2hvdF9oaXQ6IG5ldyBBdWRpbyhzaG90X2hpdCksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdWRpb3M7XHJcbiIsImNvbnN0IGluaXRpYWxfc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmluaXRpYWxfc2NyZWVuLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaW5pdGlhbF93cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV93cmFwcGVyXCI+PGgxIGNsYXNzPVwiaW50cm9fdGl0bGUgaW50cm9fdGl0bGUtLWFuaW1hdGlvbiBiaWdfZm9udFwiPkJhdHRsZXNoaXA8L2gxPjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1hbmltYXRpb25cIiBpZD1cInN0YXJ0X2J1dHRvblwiPlN0YXJ0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBnYW1lX3NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5nYW1lX3NjcmVlbi5pbm5lckhUTUwgPSBgXHJcbiA8ZGl2IGNsYXNzPVwiaW50cm9cIj5cclxuICAgIDxoMSBjbGFzcz1cImludHJvX3RpdGxlXCI+QmF0dGxlc2hpcDwvaDE+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImRpc3BsYXlfd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheV90ZXh0XCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cImdhbWVib2FyZF93cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgPGgyPllvdXIgV2F0ZXJzPC9oMj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVib2FyZFwiIGlkPVwicGxheWVyX2JvYXJkXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgPGgyPkVuZW15IFdhdGVyczwvaDI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lYm9hcmRcIiBpZD1cImNvbXB1dGVyX2JvYXJkXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PiBcclxuYDtcclxuXHJcbmNvbnN0IHBsYWNlX3NoaXBfc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnBsYWNlX3NoaXBfc2NyZWVuLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyX2hlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyX3RleHRcIj5TZXQgeW91ciA8c3BhbiBpZD1cInNoaXBfbmFtZVwiPkJhdHRsZXNoaXA8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXNtYWxsXCIgaWQ9XCJ0b2dnbGVfYXhpc1wiPlRvZ2dsZSBheGlzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FtZWJvYXJkX3dyYXBwZXIgZ2FtZWJvYXJkX3dyYXBwZXItLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lYm9hcmRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5nYW1lT3Zlck1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJnYW1lX292ZXItc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF90ZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwicmVzZXRcIj5UcnkgQWdhaW48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuZXhwb3J0IHsgaW5pdGlhbF9zY3JlZW4sIHBsYWNlX3NoaXBfc2NyZWVuLCBnYW1lX3NjcmVlbiwgZ2FtZU92ZXJNb2RhbCB9O1xyXG4iLCJpbXBvcnQgYXVkaW9zIGZyb20gJy4uL2NvbXBvbmVudHMvYXVkaW8ubWpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9wdWJzdWIvZXZldHMubWpzJztcclxuXHJcbmNvbnN0IGF1ZGlvQ29udHJvbGxlciA9ICgpID0+IHtcclxuICBmdW5jdGlvbiBwbGF5SW50cm9NdXNpYygpIHtcclxuICAgIGF1ZGlvcy5pbnRyb19tdXNpYy5sb29wID0gdHJ1ZTtcclxuICAgIGF1ZGlvcy5pbnRyb19tdXNpYy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhdWRpb3MuaW50cm9fbXVzaWMucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RvcEludHJvTXVzaWMoKSB7XHJcbiAgICBhdWRpb3MuaW50cm9fbXVzaWMucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlTaG90KCkge1xyXG4gICAgYXVkaW9zLmZpcmVfc2hvdC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhdWRpb3MuZmlyZV9zaG90LnBsYXkoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlTaG90TWlzcygpIHtcclxuICAgIGF1ZGlvcy5zaG90X21pc3MuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW9zLnNob3RfbWlzcy5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5U2hvdEhpdCgpIHtcclxuICAgIGF1ZGlvcy5zaG90X2hpdC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhdWRpb3Muc2hvdF9oaXQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzLm9uKCdwbGF5SW50cm8nLCBwbGF5SW50cm9NdXNpYyk7XHJcbiAgZXZlbnRzLm9uKCdzdG9wSW50cm8nLCBzdG9wSW50cm9NdXNpYyk7XHJcbiAgZXZlbnRzLm9uKCdmaXJlX3Nob3QnLCBwbGF5U2hvdCk7XHJcbiAgZXZlbnRzLm9uKCdzaG90X21pc3MnLCBwbGF5U2hvdE1pc3MpO1xyXG4gIGV2ZW50cy5vbignc2hvdF9oaXQnLCBwbGF5U2hvdEhpdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdWRpb0NvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL2V2ZXRzLm1qcyc7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgpID0+IHtcclxuICBsZXQgZGlzcGxheTtcclxuXHJcbiAgZnVuY3Rpb24gd3JpdGUobXNnKSB7XHJcbiAgICBsZXQgbXNnU3BsaXQgPSBtc2cuc3BsaXQoJycpO1xyXG4gICAgY2xlYXIoKTtcclxuXHJcbiAgICBtc2dTcGxpdC5mb3JFYWNoKChsZXR0ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgKz0gbGV0dGVyO1xyXG4gICAgICB9LCBpbmRleCAqIDQ1KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gJyc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5X3RleHQnKTtcclxuICAgIHdyaXRlKCdBd2FpdCBvcmRlcnMuLi4nKTtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5vbignaW5pdERpc3BsYXknLCBpbml0KTtcclxuICBldmVudHMub24oJ3dyaXRlJywgd3JpdGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XHJcbiIsImltcG9ydCB7XHJcbiAgaW5pdGlhbF9zY3JlZW4sXHJcbiAgcGxhY2Vfc2hpcF9zY3JlZW4sXHJcbiAgZ2FtZU92ZXJNb2RhbCxcclxufSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWVfc2NyZWVuLm1qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL2V2ZXRzLm1qcyc7XHJcbmltcG9ydCBnYW1lYm9hcmRfY29udHJvbGxlciBmcm9tICcuL2dhbWVCb2FyZF9jb250cm9sbGVyLm1qcyc7XHJcbmltcG9ydCBhdWRpb0NvbnRyb2xsZXIgZnJvbSAnLi9hdWRpb0NvbnRyb2xsZXIubWpzJztcclxuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXIubWpzJztcclxuaW1wb3J0IHNldFNoaXBDb250cm9sbGVyIGZyb20gJy4vc2V0U2hpcF9jb250cm9sbGVyLm1qcyc7XHJcblxyXG5jb25zdCBEb20gPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbl9zY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XHJcbiAgZ2FtZWJvYXJkX2NvbnRyb2xsZXIoKTtcclxuICBhdWRpb0NvbnRyb2xsZXIoKTtcclxuICBkaXNwbGF5Q29udHJvbGxlcigpO1xyXG4gIHNldFNoaXBDb250cm9sbGVyKCk7XHJcblxyXG4gIGNvbnN0IHNldEJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBpbml0aWFsX3NjcmVlbi5xdWVyeVNlbGVjdG9yKCcjc3RhcnRfYnV0dG9uJyk7XHJcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZXZlbnRzLmVtaXQoJ25ld0dhbWUnKTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ3N0b3BJbnRybycpO1xyXG4gICAgICBldmVudHMuZW1pdCgnZmlyZV9zaG90Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNldCA9IGdhbWVPdmVyTW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc2V0SW5pdGlhbFNjcmVlbigpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0SW5pdGlhbFNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNsZWFuU2NyZWVuKCk7XHJcbiAgICBtYWluX3NjcmVlbi5hcHBlbmRDaGlsZChpbml0aWFsX3NjcmVlbik7XHJcbiAgICBldmVudHMuZW1pdCgncGxheUludHJvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0U2NyZWVuID0gKHNjcmVlbikgPT4ge1xyXG4gICAgY2xlYW5TY3JlZW4oKTtcclxuICAgIG1haW5fc2NyZWVuLmFwcGVuZENoaWxkKHNjcmVlbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYW5TY3JlZW4gPSAoKSA9PiB7XHJcbiAgICBtYWluX3NjcmVlbi5pbm5lckhUTUwgPSAnJztcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRHYW1lT3Zlck1vZGFsID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHRleHQgPSBnYW1lT3Zlck1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF90ZXh0Jyk7XHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9IGAke2RhdGEubmFtZX0gV2lucyFgO1xyXG5cclxuICAgIG1haW5fc2NyZWVuLmFwcGVuZENoaWxkKGdhbWVPdmVyTW9kYWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFNoaXBTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JlZW4ocGxhY2Vfc2hpcF9zY3JlZW4pO1xyXG4gIH07XHJcblxyXG4gIGV2ZW50cy5vbignZ2FtZU92ZXInLCBzZXRHYW1lT3Zlck1vZGFsKTtcclxuICBldmVudHMub24oJ3NldEdhbWVTY3JlZW4nLCBzZXRTY3JlZW4pO1xyXG4gIGV2ZW50cy5vbignc2V0U2hpcFNjcmVlbicsIHNldFNoaXBTY3JlZW4pO1xyXG4gIHNldEJ1dHRvbkV2ZW50KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXRJbml0aWFsU2NyZWVuLFxyXG4gICAgc2V0R2FtZU92ZXJNb2RhbCxcclxuICAgIHNldFNoaXBTY3JlZW4sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbTtcclxuIiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9wdWJzdWIvZXZldHMubWpzJztcclxuaW1wb3J0IHsgZ2FtZV9zY3JlZW4gfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWVfc2NyZWVuLm1qcyc7XHJcblxyXG5jb25zdCBnYW1lYm9hcmRfY29udHJvbGxlciA9ICgpID0+IHtcclxuICBjb25zdCBwbGF5ZXJCb2FyZEVsZW1lbnQgPSBnYW1lX3NjcmVlbi5xdWVyeVNlbGVjdG9yKCcjcGxheWVyX2JvYXJkJyk7XHJcbiAgY29uc3QgY29tcHV0ZXJCb2FyZEVsZW1lbnQgPSBnYW1lX3NjcmVlbi5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXJfYm9hcmQnKTtcclxuICBsZXQgcGxheWVyQm9hcmQ7XHJcbiAgbGV0IGNvbXB1dGVyQm9hcmQ7XHJcbiAgbGV0IGdhbWU7XHJcblxyXG4gIGZ1bmN0aW9uIHNldEdhbWVib2FyZCgpIHtcclxuICAgIGNsZWFuSFRNTChwbGF5ZXJCb2FyZEVsZW1lbnQpO1xyXG4gICAgY2xlYW5IVE1MKGNvbXB1dGVyQm9hcmRFbGVtZW50KTtcclxuICAgIGZpbGxQbGF5ZXIocGxheWVyQm9hcmRFbGVtZW50LCBwbGF5ZXJCb2FyZCk7XHJcbiAgICBmaWxsQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkRWxlbWVudCwgY29tcHV0ZXJCb2FyZCk7XHJcblxyXG4gICAgZXZlbnRzLmVtaXQoJ3NldEdhbWVTY3JlZW4nLCBnYW1lX3NjcmVlbik7XHJcbiAgICBldmVudHMuZW1pdCgnaW5pdERpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFuSFRNTChlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsbFBsYXllcihib2FyZEVMZW1lbnQsIGdhbWVib2FyZCkge1xyXG4gICAgZm9yIChsZXQgaSBpbiBnYW1lYm9hcmQpIHtcclxuICAgICAgZm9yIChsZXQgaiBpbiBnYW1lYm9hcmRbaV0pIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnBvc2l0aW9uID0gZ2FtZWJvYXJkW2ldW2pdLnBvc2l0aW9uO1xyXG4gICAgICAgIGlmIChnYW1lYm9hcmRbaV1bal0uc2hpcCkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXNfc2hpcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2FyZEVMZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbGxDb21wdXRlckJvYXJkKGJvYXJkRUxlbWVudCwgZ2FtZWJvYXJkKSB7XHJcbiAgICBmb3IgKGxldCBpIGluIGdhbWVib2FyZCkge1xyXG4gICAgICBmb3IgKGxldCBqIGluIGdhbWVib2FyZFtpXSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQucG9zaXRpb24gPSBnYW1lYm9hcmRbaV1bal0ucG9zaXRpb247XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGF0dGFja0V2ZW50KGdhbWVib2FyZFtpXVtqXS5wb3NpdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYm9hcmRFTGVtZW50LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhdHRhY2tFdmVudChwb3NpdGlvbikge1xyXG4gICAgaWYgKGdhbWUuZ2V0Q3VycmVudFBsYXllcigpICE9PSAncGxheWVyJykgcmV0dXJuO1xyXG4gICAgaWYgKGNvbXB1dGVyQm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5pc0hpdCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50cy5lbWl0KCd3cml0ZScsICdBaW0gb24gdGhlIGVuZW15IHdhdGVycy4uLicpO1xyXG4gICAgZXZlbnRzLmVtaXQoJ3RvZ2dsZVBsYXllcicpO1xyXG4gICAgbWFya1Bvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBhd2FpdCBkZWxleUV2ZW50KDEyMDApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBwbGF5ZXJBdHRjayhwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWxleUV2ZW50KDgwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGdhbWUuZ2V0UGxheWVyU2hvdERhdGEoKTtcclxuICAgICAgICBldmVudHMuZW1pdCgnd3JpdGUnLCBkYXRhLnRleHQpO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KGRhdGEuc291bmQpO1xyXG4gICAgICAgIHVwZGF0ZUNvbXB1dGVyQm9hcmQoKTtcclxuXHJcbiAgICAgICAgaWYgKGdhbWUuaXNHYW1lT3ZlcigpKSByZXR1cm4gc3RvcERlbGV5RXZlbnQoNTAwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXlFdmVudCg4MDApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoJ3dyaXRlJywgJ0VuZW15IEFpbSBvbiBvdXJzIHdhdGVycy4uLicpO1xyXG4gICAgICAgIHJldHVybiBkZWxleUV2ZW50KDE0MDApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29tcHV0ZXJBdHRjaygpO1xyXG4gICAgICAgIGxldCBkYXRhID0gZ2FtZS5nZXRDb21wdXRlclNob3REYXRhKCk7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoJ3dyaXRlJywgZGF0YS50ZXh0KTtcclxuICAgICAgICBldmVudHMuZW1pdChkYXRhLnNvdW5kKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlbGV5RXZlbnQoOTAwKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHVwYWRhdGVQbGF5ZXJCb2FyZCgpO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KCd3cml0ZScsICdBd2FpdCBvcmRlcnMuLi4nKTtcclxuICAgICAgICByZXR1cm4gZGVsZXlFdmVudCg3MDApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoJ3RvZ2dsZVBsYXllcicpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXlFdmVudCh0aW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdG9wRGVsZXlFdmVudCh0aW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZWplY3QoJ2dhbWVPdmVyJyk7XHJcbiAgICAgIH0sIHRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYXJrUG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgIGxldCBjZWxscyA9IGNvbXB1dGVyQm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gY2VsbHMpIHtcclxuICAgICAgaWYgKGNlbGxzW2ldLmRhdGFzZXQucG9zaXRpb24gPT09IHBvc2l0aW9uLmpvaW4oKSkge1xyXG4gICAgICAgIGNlbGxzW2ldLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheWVyQXR0Y2socG9zaXRpb24pIHtcclxuICAgIGV2ZW50cy5lbWl0KCdwbGF5ZXJBdHRhY2snLCBwb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb21wdXRlckF0dGNrKCkge1xyXG4gICAgZXZlbnRzLmVtaXQoJ2NvbXB1dGVyQXR0YWNrJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVDb21wdXRlckJvYXJkKCkge1xyXG4gICAgdXBhZGF0ZUJvYXJkKGNvbXB1dGVyQm9hcmRFbGVtZW50LCBjb21wdXRlckJvYXJkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwYWRhdGVQbGF5ZXJCb2FyZCgpIHtcclxuICAgIHVwYWRhdGVCb2FyZChwbGF5ZXJCb2FyZEVsZW1lbnQsIHBsYXllckJvYXJkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwYWRhdGVCb2FyZChib2FyZEVMZW1lbnQsIGdhbWVCb2FyZCkge1xyXG4gICAgY29uc3QgY2VsbHMgPSBbLi4uYm9hcmRFTGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpXTtcclxuXHJcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2VsbC5kYXRhc2V0LnBvc2l0aW9uLnNwbGl0KCcsJyk7XHJcbiAgICAgIHVwZGF0ZUNlbGwoY2VsbCwgZ2FtZUJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVDZWxsKGNlbGxFbGVtZW50LCBnYW1lYm9hcmRDZWxsKSB7XHJcbiAgICBpZiAoIWdhbWVib2FyZENlbGwuaXNIaXQpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZ2FtZWJvYXJkQ2VsbC5zaGlwKSB7XHJcbiAgICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KG5ld0dhbWUpIHtcclxuICAgIHBsYXllckJvYXJkID0gbmV3R2FtZS5nZXRQbGF5ZXJCb2FyZCgpLmdldEdhbWVib2FyZCgpO1xyXG4gICAgY29tcHV0ZXJCb2FyZCA9IG5ld0dhbWUuZ2V0Q29tcHV0ZXJCb2FyZCgpLmdldEdhbWVib2FyZCgpO1xyXG4gICAgZ2FtZSA9IG5ld0dhbWU7XHJcbiAgICBzZXRHYW1lYm9hcmQoKTtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5vbignc2V0R2FtZWJvYXJkcycsIGluaXQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkX2NvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL2V2ZXRzLm1qcyc7XHJcbmltcG9ydCB7IHBsYWNlX3NoaXBfc2NyZWVuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lX3NjcmVlbi5tanMnO1xyXG5pbXBvcnQgc2hpcHMgZnJvbSAnLi4vZ2FtZV9oZWxwZXJzL3NoaXBzLm1qcyc7XHJcblxyXG5jb25zdCBzZXRTaGlwQ29udHJvbGxlciA9ICgpID0+IHtcclxuICBjb25zdCBnYW1lYm9hcmRFbGVtZW50ID0gcGxhY2Vfc2hpcF9zY3JlZW4ucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCcpO1xyXG4gIGxldCBzaGlwc09iaiA9IHNoaXBzKCk7XHJcbiAgbGV0IGlzVmVydGljYWwgPSBmYWxzZTtcclxuICBsZXQgc2hpcHNOYW1lcyA9IFtdO1xyXG4gIGxldCBwbGF5ZXJCb2FyZDtcclxuICBsZXQgY2VsbHM7XHJcblxyXG4gIGNvbnN0IGZpbGxHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2FyZCA9IHBsYXllckJvYXJkLmdldEdhbWVib2FyZCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gYm9hcmQpIHtcclxuICAgICAgZm9yIChsZXQgaiBpbiBib2FyZFtpXSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQucG9zaXRpb24gPSBib2FyZFtpXVtqXS5wb3NpdGlvbjtcclxuICAgICAgICBnYW1lYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKGNlbGwpO1xyXG5cclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgIHNldFBvc3NpYmxlUG9zaXRpb24oYm9hcmRbaV1bal0ucG9zaXRpb24sIGNlbGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgcmVtb3ZlQ2xhc3MpO1xyXG5cclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hpcChib2FyZFtpXVtqXS5wb3NpdGlvbiwgY2VsbCk7XHJcbiAgICAgICAgICBjaGFuZ2VTaGlwKCk7XHJcbiAgICAgICAgICBzZXRTaGlwUG9zaXRpb24oKTtcclxuICAgICAgICAgIGlzQWxsU2hpcHNTZXRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRQb3NzaWJsZVBvc2l0aW9uID0gKHBvc2l0aW9uLCBjZWxsKSA9PiB7XHJcbiAgICBpZiAoc2hpcHNOYW1lcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwc09ialtzaGlwc05hbWVzWzBdXS5nZXRTaGlwTGVuZ3RoKCk7XHJcbiAgICBjb25zdCBjb29yZHMgPSBwbGF5ZXJCb2FyZC5nZXRTaGlwQ29vcmRzKFxyXG4gICAgICBwb3NpdGlvblswXSxcclxuICAgICAgcG9zaXRpb25bMV0sXHJcbiAgICAgIGxlbmd0aCxcclxuICAgICAgaXNWZXJ0aWNhbFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGludmFsaWRDb29yZCA9IHBsYXllckJvYXJkLm92ZXJGbG93R2FtZWJvYXJkKFxyXG4gICAgICBjb29yZHNbMF0sXHJcbiAgICAgIGxlbmd0aCxcclxuICAgICAgaXNWZXJ0aWNhbFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoaW52YWxpZENvb3JkIHx8IHBsYXllckJvYXJkLmhhc1NoaXAoY29vcmRzKSkge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtDb29yZHMoY29vcmRzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXJrQ29vcmRzID0gKGNvb3JkcykgPT4ge1xyXG4gICAgZm9yIChsZXQgaSBpbiBjZWxscykge1xyXG4gICAgICBmb3IgKGxldCBqIGluIGNvb3Jkcykge1xyXG4gICAgICAgIGlmIChjZWxsc1tpXS5kYXRhc2V0LnBvc2l0aW9uID09PSBjb29yZHNbal0uam9pbignLCcpKSB7XHJcbiAgICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdwb3NpYmxlX3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc2libGVfcG9zaXRpb24nKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbGxTaGlwTmFtZXMgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpIGluIHNoaXBzT2JqKSB7XHJcbiAgICAgIHNoaXBzTmFtZXMucHVzaChpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRCdXR0b25FdmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHBsYWNlX3NoaXBfc2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQXhpcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQXhpcyA9ICgpID0+IHtcclxuICAgIGlzVmVydGljYWwgPT09IHRydWUgPyAoaXNWZXJ0aWNhbCA9IGZhbHNlKSA6IChpc1ZlcnRpY2FsID0gdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlU2hpcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllclNoaXBzID0gcGxheWVyQm9hcmQuZ2V0U2hpcHMoKTtcclxuXHJcbiAgICBwbGF5ZXJTaGlwcy5mb3JFYWNoKCh7IG5hbWUgfSkgPT4ge1xyXG4gICAgICBpZiAobmFtZSA9PT0gc2hpcHNOYW1lc1swXSkge1xyXG4gICAgICAgIHNoaXBzTmFtZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdXBkYXRlU2hpcERpc3BsYXkoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTaGlwRGlzcGxheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNwYW4gPSBwbGFjZV9zaGlwX3NjcmVlbi5xdWVyeVNlbGVjdG9yKCcjc2hpcF9uYW1lJyk7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gc2hpcHNOYW1lc1swXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRTaGlwID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBzTmFtZXNbMF07XHJcbiAgICBwbGF5ZXJCb2FyZC5zZXRTaGlwKHBvc2l0aW9uLCBzaGlwc09ialtzaGlwTmFtZV0sIGlzVmVydGljYWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzQWxsU2hpcHNTZXRzID0gKCkgPT4ge1xyXG4gICAgaWYgKHNoaXBzTmFtZXMubGVuZ3RoICE9PSAwKSByZXR1cm47XHJcbiAgICBldmVudHMuZW1pdCgnYWxsU2hpcFNldCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFNoaXBQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNoaXBDZWxscyA9IHBsYXllckJvYXJkLmdldFNoaXBDZWxscygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gY2VsbHMpIHtcclxuICAgICAgZm9yIChsZXQgaiBpbiBzaGlwQ2VsbHMpIHtcclxuICAgICAgICBpZiAoY2VsbHNbaV0uZGF0YXNldC5wb3NpdGlvbiA9PT0gc2hpcENlbGxzW2pdLmpvaW4oJywnKSkge1xyXG4gICAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgnaGFzX3NoaXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhbkdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGdhbWVib2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdCA9IChnYW1lKSA9PiB7XHJcbiAgICBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0UGxheWVyQm9hcmQoKTtcclxuICAgIGNsZWFuR2FtZWJvYXJkKCk7XHJcbiAgICBmaWxsR2FtZWJvYXJkKCk7XHJcbiAgICBmaWxsU2hpcE5hbWVzKCk7XHJcbiAgICBhZGRCdXR0b25FdmVudCgpO1xyXG4gICAgY2hhbmdlU2hpcCgpO1xyXG4gICAgY2VsbHMgPSBbLi4uZ2FtZWJvYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKV07XHJcbiAgICBzaGlwc09iaiA9IHNoaXBzKCk7XHJcbiAgfTtcclxuXHJcbiAgZXZlbnRzLm9uKCdzZXRTaGlwU2NyZWVuJywgaW5pdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRTaGlwQ29udHJvbGxlcjtcclxuIiwiaW1wb3J0IHNoaXBzIGZyb20gJy4vc2hpcHMubWpzJztcclxuXHJcbmNvbnN0IHBsYWNlU2hpcHMgPSAoeyBnYW1lYm9hcmQgfSkgPT4ge1xyXG4gIGxldCBzaGlwc09iaiA9IHNoaXBzKCk7XHJcblxyXG4gIGZvciAobGV0IGkgaW4gc2hpcHNPYmopIHtcclxuICAgIGdhbWVib2FyZC5zZXRSYW5kb21TaGlwKHNoaXBzT2JqW2ldKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGFjZVNoaXBzO1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuLi9nYW1lX2xvZ2ljL3NoaXAvc2hpcC5tanMnO1xyXG5cclxuY29uc3Qgc2hpcHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIENhcnJpZXI6IFNoaXAoJ0NhcnJpZXInLCA1KSxcclxuICAgIEJhdHRsZXNoaXA6IFNoaXAoJ0JhdHRsZXNoaXAnLCA0KSxcclxuICAgIERlc3Ryb3llcjogU2hpcCgnRGVzdHJveWVyJywgMyksXHJcbiAgICBTdWJtYXJpbmU6IFNoaXAoJ1N1Ym1hcmluZScsIDMpLFxyXG4gICAgJ1BhdHJvbCBCb2F0JzogU2hpcCgnUGF0cm9sIEJvYXQnLCAyKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcHM7XHJcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcGxheWVyL3BsYXllci5tanMnO1xyXG5cclxuY29uc3QgQXR0YWNrVHJhY2sgPSAocGxheWVyLCBnYW1lYm9hcmQpID0+IHtcclxuICBsZXQgdHJhY2sgPSBbXTtcclxuXHJcbiAgY29uc3QgZmlsbEF0dGFja1RyYWNrID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICBsZXQgc2hpcCA9IGdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKVtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLnNoaXA7XHJcbiAgICBpZiAoc2hpcCkge1xyXG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHRyYWNrID0gW107XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBsYXllci5nZXRMYXN0U2hvdCgpICE9PSAnaGl0JykgcmV0dXJuO1xyXG5cclxuICAgIGxldCBjb29yZHMgPVxyXG4gICAgICBzaGlwLmdldEF4aXMoKSA9PT0gZmFsc2VcclxuICAgICAgICA/IGdldEhvcml6b250YWxDb29yZHMocG9zaXRpb24pXHJcbiAgICAgICAgOiBnZXRWZXJ0aWNhbENvb3Jkcyhwb3NpdGlvbik7XHJcblxyXG4gICAgY29vcmRzID0gcmVtb3ZlT3ZlckZsb3dDb29yZChjb29yZHMpO1xyXG4gICAgY29vcmRzID0gcmVtb3ZlSGl0Q2VsbHMoY29vcmRzKTtcclxuXHJcbiAgICBjb29yZHMuZm9yRWFjaCgoY2VsbCkgPT4gdHJhY2sucHVzaChjZWxsKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SG9yaXpvbnRhbENvb3JkcyA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgbGV0IHggPSBwb3NpdGlvblswXTtcclxuICAgIGxldCB5ID0gcG9zaXRpb25bMV07XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgW3gsIHkgKyAxXSxcclxuICAgICAgW3gsIHkgLSAxXSxcclxuICAgIF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VmVydGljYWxDb29yZHMgPSAocG9zaXRpb24pID0+IHtcclxuICAgIGxldCB4ID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgeSA9IHBvc2l0aW9uWzFdO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIFt4ICsgMSwgeV0sXHJcbiAgICAgIFt4IC0gMSwgeV0sXHJcbiAgICBdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZU92ZXJGbG93Q29vcmQgPSAoYXJyKSA9PiB7XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcigoY29vcmQpID0+IHtcclxuICAgICAgcmV0dXJuIGNvb3JkWzBdIDwgMTAgJiYgY29vcmRbMV0gPCAxMCAmJiBjb29yZFswXSA+PSAwICYmIGNvb3JkWzFdID49IDA7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVIaXRDZWxscyA9IChhcnIpID0+IHtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKChjb29yZCkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpW2Nvb3JkWzBdXVtjb29yZFsxXV0uaXNIaXQgPT09IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2VsbCA9ICgpID0+IHtcclxuICAgIGlmICh0cmFjay5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0cmFjay5sZW5ndGgpO1xyXG4gICAgY29uc3QgY2VsbCA9IHRyYWNrW2luZGV4XTtcclxuICAgIHJlbW92ZShpbmRleCk7XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmUgPSAoaW5kZXgpID0+IHtcclxuICAgIHRyYWNrLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZpbGxBdHRhY2tUcmFjayxcclxuICAgIGdldENlbGwsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IElhID0gKGVuZW15KSA9PiB7XHJcbiAgY29uc3QgZW5lbXlHYW1lYm9hcmQgPSBlbmVteS5nYW1lYm9hcmQ7XHJcbiAgY29uc3QgaWFQbGF5ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJyk7XHJcbiAgY29uc3QgYXR0YWNrVHJhY2sgPSBBdHRhY2tUcmFjayhpYVBsYXllciwgZW5lbXlHYW1lYm9hcmQpO1xyXG4gIGxldCBoYWNrID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zc2libGVBdHRja0NlbGwgPVxyXG4gICAgICBhdHRhY2tUcmFjay5nZXRDZWxsKCkgfHwgaGFja0NlbGxzKCkgfHwgZ2V0UG9zc2libGVBdHRhY2tDZWxsKCk7XHJcbiAgICBpYVBsYXllci5hdHRhY2socG9zc2libGVBdHRja0NlbGwsIGVuZW15R2FtZWJvYXJkKTtcclxuICAgIGF0dGFja1RyYWNrLmZpbGxBdHRhY2tUcmFjayhwb3NzaWJsZUF0dGNrQ2VsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFja0NlbGxzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFoYWNrKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHNoaXBDZWxscyA9IGVuZW15R2FtZWJvYXJkLmdldFNoaXBDZWxscygpO1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGlwQ2VsbHMubGVuZ3RoKTtcclxuICAgIGhhY2sgPSBmYWxzZTtcclxuICAgIHJldHVybiBzaGlwQ2VsbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFBvc3NpYmxlQXR0YWNrQ2VsbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBlbmVteUdhbWVib2FyZC5mcmVlU2hvdENlbGxzKCk7XHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5Q2VsbHMubGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4gZW1wdHlDZWxsc1tpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdhbWVib2FyZDogaWFQbGF5ZXIuZ2FtZWJvYXJkLFxyXG4gICAgbmFtZTogaWFQbGF5ZXIubmFtZSxcclxuICAgIHJhbmRvbUF0dGFjayxcclxuICAgIGdldExhc3RTaG90OiBpYVBsYXllci5nZXRMYXN0U2hvdCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWE7XHJcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvcGxheWVyLm1qcyc7XHJcbmltcG9ydCBJYSBmcm9tICcuL0lBL2NvbXB1dGVyX0lBLm1qcyc7XHJcbmltcG9ydCBwbGFjZVNoaXBzIGZyb20gJy4uL2dhbWVfaGVscGVycy9wbGFjZVNoaXBzLm1qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL2V2ZXRzLm1qcyc7XHJcblxyXG5jb25zdCBnYW1lT3ZlckRhdGEgPSAobmFtZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzaG90RGF0YSA9IHtcclxuICBtaXNzOiB7XHJcbiAgICB0ZXh0OiBcIkl0J3MgYSBtaXNzLi4uXCIsXHJcbiAgICBzb3VuZDogJ3Nob3RfbWlzcycsXHJcbiAgfSxcclxuXHJcbiAgaGl0OiB7XHJcbiAgICB0ZXh0OiBcIkl0J3MgYSBoaXQhXCIsXHJcbiAgICBzb3VuZDogJ3Nob3RfaGl0JyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9ICgpID0+IHtcclxuICBsZXQgcGxheWVyO1xyXG4gIGxldCBjb21wdXRlcjtcclxuICBsZXQgcGxheWVyQm9hcmQ7XHJcbiAgbGV0IGNvbXB1dGVyQm9hcmQ7XHJcbiAgbGV0IGN1cnJlbnRQbGF5ZXI7XHJcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFjayhwb3NpdGlvbikge1xyXG4gICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XHJcbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5nZXRHYW1lYm9hcmQoKVtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLmlzSGl0KSByZXR1cm47XHJcblxyXG4gICAgcGxheWVyLmF0dGFjayhwb3NpdGlvbiwgY29tcHV0ZXJCb2FyZCk7XHJcbiAgICBldmVudHMuZW1pdCgnZmlyZV9zaG90Jyk7XHJcblxyXG4gICAgaWYgKHZlcmlmeUZvckdhbWVPdmVyKGNvbXB1dGVyKSkge1xyXG4gICAgICBnYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgIHNldEdhbWVPdmVyRGF0YSgnUGxheWVyJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xyXG4gICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgY29tcHV0ZXIucmFuZG9tQXR0YWNrKCk7XHJcbiAgICBldmVudHMuZW1pdCgnZmlyZV9zaG90Jyk7XHJcblxyXG4gICAgaWYgKHZlcmlmeUZvckdhbWVPdmVyKHBsYXllcikpIHtcclxuICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICBzZXRHYW1lT3ZlckRhdGEoJ0NvbXB1dGVyJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZlcmlmeUZvckdhbWVPdmVyKGVuZW15KSB7XHJcbiAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0R2FtZU92ZXJEYXRhKHdpbm5lcikge1xyXG4gICAgZXZlbnRzLmVtaXQoJ2dhbWVPdmVyJywgZ2FtZU92ZXJEYXRhKHdpbm5lcikpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXJCb2FyZCgpIHtcclxuICAgIHJldHVybiBjb21wdXRlckJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGxheWVyQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gcGxheWVyQm9hcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgcGxheWVyID0gUGxheWVyKCdQbGF5ZXInKTtcclxuICAgIGNvbXB1dGVyID0gSWEocGxheWVyKTtcclxuICAgIHBsYXllckJvYXJkID0gcGxheWVyLmdhbWVib2FyZDtcclxuICAgIGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlci5nYW1lYm9hcmQ7XHJcbiAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcic7XHJcbiAgICBnYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgcGxhY2VTaGlwcyhjb21wdXRlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVDdXJyZW50UGxheWVyKCkge1xyXG4gICAgY3VycmVudFBsYXllciA9PT0gJ3BsYXllcidcclxuICAgICAgPyAoY3VycmVudFBsYXllciA9ICdjb21wdXRlcicpXHJcbiAgICAgIDogKGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRQbGF5ZXJTaG90RGF0YSgpIHtcclxuICAgIHJldHVybiBzaG90RGF0YVtwbGF5ZXIuZ2V0TGFzdFNob3QoKV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDb21wdXRlclNob3REYXRhKCkge1xyXG4gICAgcmV0dXJuIHNob3REYXRhW2NvbXB1dGVyLmdldExhc3RTaG90KCldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcclxuICAgIHJldHVybiBnYW1lT3ZlcjtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5vbigncGxheWVyQXR0YWNrJywgcGxheWVyQXR0YWNrKTtcclxuICBldmVudHMub24oJ2NvbXB1dGVyQXR0YWNrJywgY29tcHV0ZXJBdHRhY2spO1xyXG4gIGV2ZW50cy5vbigndG9nZ2xlUGxheWVyJywgdG9nZ2xlQ3VycmVudFBsYXllcik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0LFxyXG4gICAgcGxheWVyQXR0YWNrLFxyXG4gICAgY29tcHV0ZXJBdHRhY2ssXHJcbiAgICB2ZXJpZnlGb3JHYW1lT3ZlcixcclxuICAgIGdldENvbXB1dGVyQm9hcmQsXHJcbiAgICBnZXRQbGF5ZXJCb2FyZCxcclxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXHJcbiAgICBnZXRDb21wdXRlclNob3REYXRhLFxyXG4gICAgZ2V0UGxheWVyU2hvdERhdGEsXHJcbiAgICBpc0dhbWVPdmVyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJjb25zdCBDZWxsID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgaXNIaXQ6IGZhbHNlLFxyXG4gICAgc2hpcDogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBtaXNzZWRTaG9vdHMgPSBbXTtcclxuICBjb25zdCBzaGlwcyA9IFtdO1xyXG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XHJcbiAgY29uc3QgZ2V0TWlzc2VkU2hvdHMgPSAoKSA9PiBtaXNzZWRTaG9vdHM7XHJcbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkgPT09IHRydWUpO1xyXG4gIGNvbnN0IG1ha2VHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZ2FtZWJvYXJkID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2goQ2VsbChbaSwgal0pKTtcclxuICAgICAgfVxyXG4gICAgICBnYW1lYm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2FtZWJvYXJkID0gbWFrZUdhbWVib2FyZCgpO1xyXG4gIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3Qgc2V0U2hpcCA9IChjb29yZCwgc2hpcCwgaXNWZXJ0aWNhbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBsZXQgbGVuZ3RoID0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XHJcbiAgICBsZXQgY29vcmRzID0gZ2V0U2hpcENvb3Jkcyhjb29yZFswXSwgY29vcmRbMV0sIGxlbmd0aCwgaXNWZXJ0aWNhbCk7XHJcblxyXG4gICAgaWYgKGhhc1NoaXAoY29vcmRzKSB8fCBvdmVyRmxvd0dhbWVib2FyZChjb29yZCwgbGVuZ3RoLCBpc1ZlcnRpY2FsKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hpcC5zZXRBeGlzKGlzVmVydGljYWwpO1xyXG4gICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiAoZ2FtZWJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uc2hpcCA9IHNoaXApKTtcclxuICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3ZlckZsb3dHYW1lYm9hcmQgPSAoY29vcmQsIGxlbmd0aCwgaXNWZXJ0aWNhbCkgPT4ge1xyXG4gICAgcmV0dXJuIGlzVmVydGljYWwgPT09IHRydWVcclxuICAgICAgPyBjb29yZFswXSArIGxlbmd0aCA+IDEwXHJcbiAgICAgIDogY29vcmRbMV0gKyBsZW5ndGggPiAxMDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYXNTaGlwID0gKGNvb3JkcykgPT4ge1xyXG4gICAgbGV0IGZpbGxDZWxscyA9IGdldEZpbGxDZWxscygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gZmlsbENlbGxzKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gY29vcmRzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZmlsbENlbGxzW2ldWzBdID09PSBjb29yZHNbal1bMF0gJiZcclxuICAgICAgICAgIGZpbGxDZWxsc1tpXVsxXSA9PT0gY29vcmRzW2pdWzFdXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2hpcENvb3JkcyA9ICh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwpID0+IHtcclxuICAgIHJldHVybiBpc1ZlcnRpY2FsID09PSB0cnVlXHJcbiAgICAgID8gZ2V0VmVydGljYWxQb3NpdGlvbih4LCB5LCBsZW5ndGgpXHJcbiAgICAgIDogZ2V0SG9yaXpvbnRhbFBvc2l0aW9uKHgsIHksIGxlbmd0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VmVydGljYWxQb3NpdGlvbiA9ICh4LCB5LCBsZW5ndGgpID0+IHtcclxuICAgIGxldCBjb29yZHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb29yZHMucHVzaChbaSwgeV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb29yZHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SG9yaXpvbnRhbFBvc2l0aW9uID0gKHgsIHksIGxlbmd0aCkgPT4ge1xyXG4gICAgbGV0IGNvb3JkcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvb3Jkcy5wdXNoKFt4LCBpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvb3JkcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRGaWxsQ2VsbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVyKChjZWxsKSA9PiBjZWxsLnNoaXApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEVtcHR5Q2VsbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVyKChjZWxsKSA9PiBjZWxsLnNoaXAgPT09IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XHJcblxyXG4gICAgaWYgKGNlbGwuaXNIaXQpIHJldHVybjtcclxuXHJcbiAgICBjZWxsLmlzSGl0ID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIWNlbGwuc2hpcCkge1xyXG4gICAgICBtaXNzZWRTaG9vdHMucHVzaChjb29yZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjZWxsLnNoaXAuaGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyID0gKGZ1bikgPT4ge1xyXG4gICAgbGV0IGZpbGx0cmVkID0gW107XHJcbiAgICBmb3IgKGxldCBpIGluIGdhbWVib2FyZCkge1xyXG4gICAgICBmb3IgKGxldCBqIGluIGdhbWVib2FyZFtpXSlcclxuICAgICAgICBpZiAoZnVuKGdhbWVib2FyZFtpXVtqXSkpIGZpbGx0cmVkLnB1c2goZ2FtZWJvYXJkW2ldW2pdLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsbHRyZWQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0UmFuZG9tU2hpcCA9IChzaGlwKSA9PiB7XHJcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gZ2V0RW1wdHlDZWxscygpO1xyXG5cclxuICAgIHdoaWxlIChlbXB0eUNlbGxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eUNlbGxzLmxlbmd0aCk7XHJcbiAgICAgIGxldCBhc3NpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHNldFNoaXAoZW1wdHlDZWxsc1twb3NpdGlvbl0sIHNoaXAsIGFzc2lzKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhc3NpcyA9IGFzc2lzID09PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoc2V0U2hpcChlbXB0eUNlbGxzW3Bvc2l0aW9uXSwgc2hpcCwgYXNzaXMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZW1wdHlDZWxscy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZnJlZVNob3RDZWxscyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmaWx0ZXIoKGNlbGwpID0+IGNlbGwuaXNIaXQgPT09IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTaGlwQ2VsbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVyKChjZWxsKSA9PiBjZWxsLnNoaXAgIT09IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0R2FtZWJvYXJkLFxyXG4gICAgc2V0U2hpcCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBnZXRNaXNzZWRTaG90cyxcclxuICAgIGFsbFNoaXBzU3VuayxcclxuICAgIHNldFJhbmRvbVNoaXAsXHJcbiAgICBnZXRFbXB0eUNlbGxzLFxyXG4gICAgZnJlZVNob3RDZWxscyxcclxuICAgIGdldFNoaXBzLFxyXG4gICAgZ2V0U2hpcENlbGxzLFxyXG4gICAgZ2V0U2hpcENvb3JkcyxcclxuICAgIG92ZXJGbG93R2FtZWJvYXJkLFxyXG4gICAgaGFzU2hpcCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4uL2dhbWVib2FyZC9nYW1lYm9hcmQubWpzJztcclxuXHJcbmZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XHJcbiAgbGV0IGxhc3RTaG90O1xyXG4gIGxldCBtaXNzZWRTaG90cztcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKHBvc2l0aW9uLCBnYW1lYm9hcmQpID0+IHtcclxuICAgIHNldE1pc3NlZHNob3RzKGdhbWVib2FyZCk7XHJcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XHJcbiAgICB1cGRhdGVMYXN0U2hvb3QoZ2FtZWJvYXJkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRNaXNzZWRzaG90cyA9IChnYW1lYm9hcmQpID0+IHtcclxuICAgIG1pc3NlZFNob3RzID0gZ2FtZWJvYXJkLmdldE1pc3NlZFNob3RzKCkubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUxhc3RTaG9vdCA9IChnYW1lYm9hcmQpID0+IHtcclxuICAgIGdhbWVib2FyZC5nZXRNaXNzZWRTaG90cygpLmxlbmd0aCA+IG1pc3NlZFNob3RzXHJcbiAgICAgID8gKGxhc3RTaG90ID0gJ21pc3MnKVxyXG4gICAgICA6IChsYXN0U2hvdCA9ICdoaXQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRMYXN0U2hvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsYXN0U2hvdDtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIGdhbWVib2FyZDogR2FtZUJvYXJkKCksXHJcbiAgICBhdHRhY2ssXHJcbiAgICBnZXRMYXN0U2hvdCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgbGV0IGhpdHMgPSAwO1xyXG4gIGxldCBzdW5rID0gZmFsc2U7XHJcbiAgbGV0IGlzVmVydGljYWw7XHJcblxyXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gaGl0cztcclxuICB9O1xyXG5cclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNTdW5rKCkpIHJldHVybjtcclxuICAgIGhpdHMrKztcclxuICAgIHZlcmlmeUZvclN1bmsoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc3VuaztcclxuICB9O1xyXG5cclxuICBjb25zdCB2ZXJpZnlGb3JTdW5rID0gKCkgPT4ge1xyXG4gICAgc3VuayA9IGxlbmd0aCAtIGhpdHMgPT09IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2hpcExlbmd0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0QXhpcyA9IChheGlzKSA9PiB7XHJcbiAgICBpc1ZlcnRpY2FsID0gYXhpcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBeGlzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGlzVmVydGljYWw7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBnZXRIaXRzLFxyXG4gICAgZ2V0U2hpcExlbmd0aCxcclxuICAgIGhpdCxcclxuICAgIGlzU3VuayxcclxuICAgIHNldEF4aXMsXHJcbiAgICBnZXRBeGlzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCJjb25zdCBldmVudHMgPSB7XHJcbiAgZXZlbnRzOiB7fSxcclxuICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xyXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuICB9LFxyXG4gIG9mZjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGZvciAoZWxlbWVudCBpbiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1bZWxlbWVudF0gPT09IGZuKSB7XHJcbiAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShlbGVtZW50LCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBkb2Vzbid0IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IERvbSBmcm9tICcuL2RvbS9kb20ubWpzJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lX2xvZ2ljL2dhbWUubWpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YnN1Yi9ldmV0cy5tanMnO1xyXG5cclxuY29uc3QgRG9tTW9kdWxlID0gRG9tKCk7XHJcbmNvbnN0IGdhbWUgPSBHYW1lKCk7XHJcbkRvbU1vZHVsZS5zZXRJbml0aWFsU2NyZWVuKCk7XHJcblxyXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xyXG4gIGdhbWUuaW5pdCgpO1xyXG4gIGV2ZW50cy5lbWl0KCdzZXRTaGlwU2NyZWVuJywgZ2FtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRHYW1lKCkge1xyXG4gIGV2ZW50cy5lbWl0KCdzZXRHYW1lYm9hcmRzJywgZ2FtZSk7XHJcbn1cclxuXHJcbmV2ZW50cy5vbignYWxsU2hpcFNldCcsIGluaXRHYW1lKTtcclxuZXZlbnRzLm9uKCduZXdHYW1lJywgbmV3R2FtZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==