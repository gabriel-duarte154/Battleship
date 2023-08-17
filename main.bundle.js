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
    let x = position[0];
    let y = position[1];

    let arr = [
      [x + 1, y],
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    arr = removeOverFlowCoord(arr);
    arr = removeHitCells(arr);

    arr.forEach((cell) => track.push(cell));
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

  return {
    name,
    getHits,
    getShipLength,
    hit,
    isSunk,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUg7QUFDdkgsb0hBQW9IO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOERBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakd1QjtBQUNIO0FBQ2tCO0FBQ2Y7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOERBQU07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QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUN6QnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDUztBQUNEO0FBQ3hDO0FBQ0Esa0JBQWtCLHdEQUFHO0FBQ3JCLGFBQWEsZ0VBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBTTtBQUNSO0FBQ0E7QUFDQSx5REFBTTtBQUNOLHlEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8ubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lX3NjcmVlbi5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vYXVkaW9Db250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9kaXNwbGF5Q29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZG9tLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9nYW1lQm9hcmRfY29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vc2V0U2hpcF9jb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVfaGVscGVycy9wbGFjZVNoaXBzLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVfaGVscGVycy9zaGlwcy5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lX2xvZ2ljL0lBL2NvbXB1dGVyX0lBLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVfbG9naWMvZ2FtZS5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lX2xvZ2ljL2dhbWVib2FyZC9nYW1lYm9hcmQubWpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZV9sb2dpYy9wbGF5ZXIvcGxheWVyLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVfbG9naWMvc2hpcC9zaGlwLm1qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YnN1Yi9ldmV0cy5tanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9BcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WaW5hK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrdHVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1Rla3R1cicsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5zY3JlZW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMTA1MTgsICMwODFhMmMsICMwMTA1MTgpO1xyXG59XHJcblxyXG4uaW50cm8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpdGxlX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnRyb190aXRsZS0tYW5pbWF0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzBweDtcclxuICBhbmltYXRpb246IHNob3dVcCA1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmludHJvX3RpdGxlIHtcclxuICBmb250LWZhbWlseTogJ1ZpbmEgU2FucycsICdjdXJzaXZlJztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIGNvbG9yOiAjZDNkM2NiO1xyXG4gIHRleHQtc2hhZG93OiA1cHggMnB4IDNweCAjOWI5NTk1NWQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5X3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAwLjhyZW07XHJcbn1cclxuXHJcbi5kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1pbi1oZWlnaHQ6IDRyZW07XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMmIyYTJhLCAjMmMyYjJiLCAjMmIyYTJhKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogM3B4IG91dHNldCByZ2IoMTU2LCAxNTQsIDE1NCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi5kaXNwbGF5X3RleHQge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYigyMTksIDIxOCwgMjE4KTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmRfd3JhcHBlciB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmdhbWVib2FyZF93cmFwcGVyLS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmQgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYigyNDEsIDIzNiwgMjM2KTtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjb21wdXRlcl9ib2FyZCA+IGRpdiB7XHJcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbn1cclxuXHJcbi5jb2wgaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbml0aWFsX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpZ19mb250IHtcclxuICBmb250LXNpemU6IGNsYW1wKDV2dywgMTByZW0sIDIwdncpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcclxuICBwYWRkaW5nOiAwLjNyZW0gMi41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbn1cclxuXHJcbi5idXR0b24tLWFuaW1hdGlvbiB7XHJcbiAgYW5pbWF0aW9uOiBidXR0b25BbmltYXRpb24gMnMgbGluZWFyIDRzO1xyXG59XHJcblxyXG4uYnV0dG9uLS1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTlmYjY3YTtcclxufVxyXG5cclxuLmdhbWVfb3Zlci1zY3JlZW4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI5NSk7XHJcbn1cclxuXHJcbi5tb2RhbF90ZXh0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gXHJcbn1cclxuXHJcbi53cmFwcGVyX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oYXNfc2hpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNzcsIDM1KTtcclxufVxyXG5cclxuLm1pc3NlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjc1Myk7XHJcbn1cclxuXHJcbi5oaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDMyLCAzMik7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4ucG9zaWJsZV9wb3NpdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwN2M1MGMwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLmdhbWVib2FyZCB7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgLmdhbWVib2FyZF93cmFwcGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLmRpc3BsYXlfdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5nYW1lYm9hcmQge1xyXG4gICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMTBweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbF90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC50aXRsZV93cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3dVcCB7XHJcbiAgdG8ge1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIGZyb20ge1xyXG4gICAgdG9wOiAtMzAwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidXR0b25BbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1OWZiNjdhO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTlmYjY3YTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVB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WCxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WaW5hK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrdHVyJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdUZWt0dXInLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDEwNTE4LCAjMDgxYTJjLCAjMDEwNTE4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50aXRsZV93cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvX3RpdGxlLS1hbmltYXRpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMzBweDtcXHJcXG4gIGFuaW1hdGlvbjogc2hvd1VwIDVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm9fdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWaW5hIFNhbnMnLCAnY3Vyc2l2ZSc7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG4gIGNvbG9yOiAjZDNkM2NiO1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCAycHggM3B4ICM5Yjk1OTU1ZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlfd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMmIyYTJhLCAjMmMyYjJiLCAjMmIyYTJhKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3JkZXI6IDNweCBvdXRzZXQgcmdiKDE1NiwgMTU0LCAxNTQpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlfdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjE5LCAyMTgsIDIxOCk7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmRfd3JhcHBlciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmRfd3JhcHBlci0tY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiKDI0MSwgMjM2LCAyMzYpO1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNjb21wdXRlcl9ib2FyZCA+IGRpdiB7XFxyXFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbCBoMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pbml0aWFsX3dyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaWdfZm9udCB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDV2dywgMTByZW0sIDIwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDV2dywgMnJlbSk7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMi41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0tYW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbjogYnV0dG9uQW5pbWF0aW9uIDJzIGxpbmVhciA0cztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0tc21hbGwge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1OWZiNjdhO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9vdmVyLXNjcmVlbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI5NSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF90ZXh0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlcl9oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXJfdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5oYXNfc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDE3NywgMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC43NTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDMyLCAzMik7XFxyXFxufVxcclxcblxcclxcbi5pbnZhbGlkIHtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5wb3NpYmxlX3Bvc2l0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdjNTBjMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgLmdhbWVib2FyZCB7XFxyXFxuICAgIHdpZHRoOiA0MzBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkxMHB4KSB7XFxyXFxuICAuZ2FtZWJvYXJkX3dyYXBwZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgLmRpc3BsYXlfdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdhbWVib2FyZCB7XFxyXFxuICAgIHdpZHRoOiAzMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbF90ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlX3dyYXBwZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNob3dVcCB7XFxyXFxuICB0byB7XFxyXFxuICAgIHRvcDogLTMwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdG9wOiAtMzAwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYnV0dG9uQW5pbWF0aW9uIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuICAyMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU5ZmI2N2E7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAzMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTlmYjY3YTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbnRyb19tdXNpYyBmcm9tICcuLi9hc3NldHMvYXVkaW8vaW50cm9fbXVzaWMubXAzJztcclxuaW1wb3J0IGZpcmVfc2hvdCBmcm9tICcuLi9hc3NldHMvYXVkaW8vZmlyZV9zaG90Lm1wMyc7XHJcbmltcG9ydCBzaG90X21pc3MgZnJvbSAnLi4vYXNzZXRzL2F1ZGlvL3Nob3RfbWlzcy5tcDMnO1xyXG5pbXBvcnQgc2hvdF9oaXQgZnJvbSAnLi4vYXNzZXRzL2F1ZGlvL3Nob3RfaGl0Lm1wMyc7XHJcblxyXG5jb25zdCBhdWRpb3MgPSB7XHJcbiAgaW50cm9fbXVzaWM6IG5ldyBBdWRpbyhpbnRyb19tdXNpYyksXHJcbiAgZmlyZV9zaG90OiBuZXcgQXVkaW8oZmlyZV9zaG90KSxcclxuICBzaG90X21pc3M6IG5ldyBBdWRpbyhzaG90X21pc3MpLFxyXG4gIHNob3RfaGl0OiBuZXcgQXVkaW8oc2hvdF9oaXQpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXVkaW9zO1xyXG4iLCJjb25zdCBpbml0aWFsX3NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5pbml0aWFsX3NjcmVlbi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImluaXRpYWxfd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfd3JhcHBlclwiPjxoMSBjbGFzcz1cImludHJvX3RpdGxlIGludHJvX3RpdGxlLS1hbmltYXRpb24gYmlnX2ZvbnRcIj5CYXR0bGVzaGlwPC9oMT48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tYW5pbWF0aW9uXCIgaWQ9XCJzdGFydF9idXR0b25cIj5TdGFydDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgZ2FtZV9zY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZ2FtZV9zY3JlZW4uaW5uZXJIVE1MID0gYFxyXG4gPGRpdiBjbGFzcz1cImludHJvXCI+XHJcbiAgICA8aDEgY2xhc3M9XCJpbnRyb190aXRsZVwiPkJhdHRsZXNoaXA8L2gxPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJkaXNwbGF5X3dyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXlcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImRpc3BsYXlfdGV4dFwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9XCJnYW1lYm9hcmRfd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgIDxoMj5Zb3VyIFdhdGVyczwvaDI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lYm9hcmRcIiBpZD1cInBsYXllcl9ib2FyZFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgIDxoMj5FbmVteSBXYXRlcnM8L2gyPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZWJvYXJkXCIgaWQ9XCJjb21wdXRlcl9ib2FyZFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj4gXHJcbmA7XHJcblxyXG5jb25zdCBwbGFjZV9zaGlwX3NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wbGFjZV9zaGlwX3NjcmVlbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlcl9oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlcl90ZXh0XCI+U2V0IHlvdXIgPHNwYW4gaWQ9XCJzaGlwX25hbWVcIj5CYXR0bGVzaGlwPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zbWFsbFwiIGlkPVwidG9nZ2xlX2F4aXNcIj5Ub2dnbGUgYXhpczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdhbWVib2FyZF93cmFwcGVyIGdhbWVib2FyZF93cmFwcGVyLS1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZWJvYXJkXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbmNvbnN0IGdhbWVPdmVyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZ2FtZU92ZXJNb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZV9vdmVyLXNjcmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfdGV4dFwiPjwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInJlc2V0XCI+VHJ5IEFnYWluPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbmV4cG9ydCB7IGluaXRpYWxfc2NyZWVuLCBwbGFjZV9zaGlwX3NjcmVlbiwgZ2FtZV9zY3JlZW4sIGdhbWVPdmVyTW9kYWwgfTtcclxuIiwiaW1wb3J0IGF1ZGlvcyBmcm9tICcuLi9jb21wb25lbnRzL2F1ZGlvLm1qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL2V2ZXRzLm1qcyc7XHJcblxyXG5jb25zdCBhdWRpb0NvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgZnVuY3Rpb24gcGxheUludHJvTXVzaWMoKSB7XHJcbiAgICBhdWRpb3MuaW50cm9fbXVzaWMubG9vcCA9IHRydWU7XHJcbiAgICBhdWRpb3MuaW50cm9fbXVzaWMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW9zLmludHJvX211c2ljLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0b3BJbnRyb011c2ljKCkge1xyXG4gICAgYXVkaW9zLmludHJvX211c2ljLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5U2hvdCgpIHtcclxuICAgIGF1ZGlvcy5maXJlX3Nob3QuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW9zLmZpcmVfc2hvdC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5U2hvdE1pc3MoKSB7XHJcbiAgICBhdWRpb3Muc2hvdF9taXNzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGF1ZGlvcy5zaG90X21pc3MucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVNob3RIaXQoKSB7XHJcbiAgICBhdWRpb3Muc2hvdF9oaXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW9zLnNob3RfaGl0LnBsYXkoKTtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5vbigncGxheUludHJvJywgcGxheUludHJvTXVzaWMpO1xyXG4gIGV2ZW50cy5vbignc3RvcEludHJvJywgc3RvcEludHJvTXVzaWMpO1xyXG4gIGV2ZW50cy5vbignZmlyZV9zaG90JywgcGxheVNob3QpO1xyXG4gIGV2ZW50cy5vbignc2hvdF9taXNzJywgcGxheVNob3RNaXNzKTtcclxuICBldmVudHMub24oJ3Nob3RfaGl0JywgcGxheVNob3RIaXQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXVkaW9Db250cm9sbGVyO1xyXG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL3B1YnN1Yi9ldmV0cy5tanMnO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgbGV0IGRpc3BsYXk7XHJcblxyXG4gIGZ1bmN0aW9uIHdyaXRlKG1zZykge1xyXG4gICAgbGV0IG1zZ1NwbGl0ID0gbXNnLnNwbGl0KCcnKTtcclxuICAgIGNsZWFyKCk7XHJcblxyXG4gICAgbXNnU3BsaXQuZm9yRWFjaCgobGV0dGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ICs9IGxldHRlcjtcclxuICAgICAgfSwgaW5kZXggKiA0NSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheV90ZXh0Jyk7XHJcbiAgICB3cml0ZSgnQXdhaXQgb3JkZXJzLi4uJyk7XHJcbiAgfVxyXG5cclxuICBldmVudHMub24oJ2luaXREaXNwbGF5JywgaW5pdCk7XHJcbiAgZXZlbnRzLm9uKCd3cml0ZScsIHdyaXRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQge1xyXG4gIGluaXRpYWxfc2NyZWVuLFxyXG4gIHBsYWNlX3NoaXBfc2NyZWVuLFxyXG4gIGdhbWVPdmVyTW9kYWwsXHJcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lX3NjcmVlbi5tanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uL3B1YnN1Yi9ldmV0cy5tanMnO1xyXG5pbXBvcnQgZ2FtZWJvYXJkX2NvbnRyb2xsZXIgZnJvbSAnLi9nYW1lQm9hcmRfY29udHJvbGxlci5tanMnO1xyXG5pbXBvcnQgYXVkaW9Db250cm9sbGVyIGZyb20gJy4vYXVkaW9Db250cm9sbGVyLm1qcyc7XHJcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyLm1qcyc7XHJcbmltcG9ydCBzZXRTaGlwQ29udHJvbGxlciBmcm9tICcuL3NldFNoaXBfY29udHJvbGxlci5tanMnO1xyXG5cclxuY29uc3QgRG9tID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW5fc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpO1xyXG4gIGdhbWVib2FyZF9jb250cm9sbGVyKCk7XHJcbiAgYXVkaW9Db250cm9sbGVyKCk7XHJcbiAgZGlzcGxheUNvbnRyb2xsZXIoKTtcclxuICBzZXRTaGlwQ29udHJvbGxlcigpO1xyXG5cclxuICBjb25zdCBzZXRCdXR0b25FdmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gaW5pdGlhbF9zY3JlZW4ucXVlcnlTZWxlY3RvcignI3N0YXJ0X2J1dHRvbicpO1xyXG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGV2ZW50cy5lbWl0KCduZXdHYW1lJyk7XHJcbiAgICAgIGV2ZW50cy5lbWl0KCdzdG9wSW50cm8nKTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ2ZpcmVfc2hvdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzZXQgPSBnYW1lT3Zlck1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHNldEluaXRpYWxTY3JlZW4oKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEluaXRpYWxTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICBjbGVhblNjcmVlbigpO1xyXG4gICAgbWFpbl9zY3JlZW4uYXBwZW5kQ2hpbGQoaW5pdGlhbF9zY3JlZW4pO1xyXG4gICAgZXZlbnRzLmVtaXQoJ3BsYXlJbnRybycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFNjcmVlbiA9IChzY3JlZW4pID0+IHtcclxuICAgIGNsZWFuU2NyZWVuKCk7XHJcbiAgICBtYWluX3NjcmVlbi5hcHBlbmRDaGlsZChzY3JlZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFuU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgbWFpbl9zY3JlZW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0R2FtZU92ZXJNb2RhbCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ID0gZ2FtZU92ZXJNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfdGV4dCcpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSBgJHtkYXRhLm5hbWV9IFdpbnMhYDtcclxuXHJcbiAgICBtYWluX3NjcmVlbi5hcHBlbmRDaGlsZChnYW1lT3Zlck1vZGFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRTaGlwU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgc2V0U2NyZWVuKHBsYWNlX3NoaXBfc2NyZWVuKTtcclxuICB9O1xyXG5cclxuICBldmVudHMub24oJ2dhbWVPdmVyJywgc2V0R2FtZU92ZXJNb2RhbCk7XHJcbiAgZXZlbnRzLm9uKCdzZXRHYW1lU2NyZWVuJywgc2V0U2NyZWVuKTtcclxuICBldmVudHMub24oJ3NldFNoaXBTY3JlZW4nLCBzZXRTaGlwU2NyZWVuKTtcclxuICBzZXRCdXR0b25FdmVudCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2V0SW5pdGlhbFNjcmVlbixcclxuICAgIHNldEdhbWVPdmVyTW9kYWwsXHJcbiAgICBzZXRTaGlwU2NyZWVuLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb207XHJcbiIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL2V2ZXRzLm1qcyc7XHJcbmltcG9ydCB7IGdhbWVfc2NyZWVuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lX3NjcmVlbi5tanMnO1xyXG5cclxuY29uc3QgZ2FtZWJvYXJkX2NvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxheWVyQm9hcmRFbGVtZW50ID0gZ2FtZV9zY3JlZW4ucXVlcnlTZWxlY3RvcignI3BsYXllcl9ib2FyZCcpO1xyXG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRFbGVtZW50ID0gZ2FtZV9zY3JlZW4ucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyX2JvYXJkJyk7XHJcbiAgbGV0IHBsYXllckJvYXJkO1xyXG4gIGxldCBjb21wdXRlckJvYXJkO1xyXG4gIGxldCBnYW1lO1xyXG5cclxuICBmdW5jdGlvbiBzZXRHYW1lYm9hcmQoKSB7XHJcbiAgICBjbGVhbkhUTUwocGxheWVyQm9hcmRFbGVtZW50KTtcclxuICAgIGNsZWFuSFRNTChjb21wdXRlckJvYXJkRWxlbWVudCk7XHJcbiAgICBmaWxsUGxheWVyKHBsYXllckJvYXJkRWxlbWVudCwgcGxheWVyQm9hcmQpO1xyXG4gICAgZmlsbENvbXB1dGVyQm9hcmQoY29tcHV0ZXJCb2FyZEVsZW1lbnQsIGNvbXB1dGVyQm9hcmQpO1xyXG5cclxuICAgIGV2ZW50cy5lbWl0KCdzZXRHYW1lU2NyZWVuJywgZ2FtZV9zY3JlZW4pO1xyXG4gICAgZXZlbnRzLmVtaXQoJ2luaXREaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhbkhUTUwoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbGxQbGF5ZXIoYm9hcmRFTGVtZW50LCBnYW1lYm9hcmQpIHtcclxuICAgIGZvciAobGV0IGkgaW4gZ2FtZWJvYXJkKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gZ2FtZWJvYXJkW2ldKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNlbGwuZGF0YXNldC5wb3NpdGlvbiA9IGdhbWVib2FyZFtpXVtqXS5wb3NpdGlvbjtcclxuICAgICAgICBpZiAoZ2FtZWJvYXJkW2ldW2pdLnNoaXApIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGFzX3NoaXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9hcmRFTGVtZW50LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWxsQ29tcHV0ZXJCb2FyZChib2FyZEVMZW1lbnQsIGdhbWVib2FyZCkge1xyXG4gICAgZm9yIChsZXQgaSBpbiBnYW1lYm9hcmQpIHtcclxuICAgICAgZm9yIChsZXQgaiBpbiBnYW1lYm9hcmRbaV0pIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnBvc2l0aW9uID0gZ2FtZWJvYXJkW2ldW2pdLnBvc2l0aW9uO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBhdHRhY2tFdmVudChnYW1lYm9hcmRbaV1bal0ucG9zaXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvYXJkRUxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gYXR0YWNrRXZlbnQocG9zaXRpb24pIHtcclxuICAgIGlmIChnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKSAhPT0gJ3BsYXllcicpIHJldHVybjtcclxuICAgIGlmIChjb21wdXRlckJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0uaXNIaXQpIHJldHVybjtcclxuXHJcbiAgICBldmVudHMuZW1pdCgnd3JpdGUnLCAnQWltIG9uIHRoZSBlbmVteSB3YXRlcnMuLi4nKTtcclxuICAgIGV2ZW50cy5lbWl0KCd0b2dnbGVQbGF5ZXInKTtcclxuICAgIG1hcmtQb3NpdGlvbihwb3NpdGlvbik7XHJcblxyXG4gICAgYXdhaXQgZGVsZXlFdmVudCgxMjAwKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyQXR0Y2socG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVsZXlFdmVudCg4MDApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBnYW1lLmdldFBsYXllclNob3REYXRhKCk7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoJ3dyaXRlJywgZGF0YS50ZXh0KTtcclxuICAgICAgICBldmVudHMuZW1pdChkYXRhLnNvdW5kKTtcclxuICAgICAgICB1cGRhdGVDb21wdXRlckJvYXJkKCk7XHJcblxyXG4gICAgICAgIGlmIChnYW1lLmlzR2FtZU92ZXIoKSkgcmV0dXJuIHN0b3BEZWxleUV2ZW50KDUwMCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV5RXZlbnQoODAwKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KCd3cml0ZScsICdFbmVteSBBaW0gb24gb3VycyB3YXRlcnMuLi4nKTtcclxuICAgICAgICByZXR1cm4gZGVsZXlFdmVudCgxNDAwKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbXB1dGVyQXR0Y2soKTtcclxuICAgICAgICBsZXQgZGF0YSA9IGdhbWUuZ2V0Q29tcHV0ZXJTaG90RGF0YSgpO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KCd3cml0ZScsIGRhdGEudGV4dCk7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoZGF0YS5zb3VuZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWxleUV2ZW50KDkwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB1cGFkYXRlUGxheWVyQm9hcmQoKTtcclxuICAgICAgICBldmVudHMuZW1pdCgnd3JpdGUnLCAnQXdhaXQgb3JkZXJzLi4uJyk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV5RXZlbnQoNzAwKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KCd0b2dnbGVQbGF5ZXInKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV5RXZlbnQodGltZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RvcERlbGV5RXZlbnQodGltZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KCdnYW1lT3ZlcicpO1xyXG4gICAgICB9LCB0aW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFya1Bvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBsZXQgY2VsbHMgPSBjb21wdXRlckJvYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIGNlbGxzKSB7XHJcbiAgICAgIGlmIChjZWxsc1tpXS5kYXRhc2V0LnBvc2l0aW9uID09PSBwb3NpdGlvbi5qb2luKCkpIHtcclxuICAgICAgICBjZWxsc1tpXS50ZXh0Q29udGVudCA9ICdYJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXllckF0dGNrKHBvc2l0aW9uKSB7XHJcbiAgICBldmVudHMuZW1pdCgncGxheWVyQXR0YWNrJywgcG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcHV0ZXJBdHRjaygpIHtcclxuICAgIGV2ZW50cy5lbWl0KCdjb21wdXRlckF0dGFjaycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQ29tcHV0ZXJCb2FyZCgpIHtcclxuICAgIHVwYWRhdGVCb2FyZChjb21wdXRlckJvYXJkRWxlbWVudCwgY29tcHV0ZXJCb2FyZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGFkYXRlUGxheWVyQm9hcmQoKSB7XHJcbiAgICB1cGFkYXRlQm9hcmQocGxheWVyQm9hcmRFbGVtZW50LCBwbGF5ZXJCb2FyZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGFkYXRlQm9hcmQoYm9hcmRFTGVtZW50LCBnYW1lQm9hcmQpIHtcclxuICAgIGNvbnN0IGNlbGxzID0gWy4uLmJvYXJkRUxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKV07XHJcblxyXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNlbGwuZGF0YXNldC5wb3NpdGlvbi5zcGxpdCgnLCcpO1xyXG4gICAgICB1cGRhdGVDZWxsKGNlbGwsIGdhbWVCb2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQ2VsbChjZWxsRWxlbWVudCwgZ2FtZWJvYXJkQ2VsbCkge1xyXG4gICAgaWYgKCFnYW1lYm9hcmRDZWxsLmlzSGl0KSByZXR1cm47XHJcblxyXG4gICAgaWYgKGdhbWVib2FyZENlbGwuc2hpcCkge1xyXG4gICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdChuZXdHYW1lKSB7XHJcbiAgICBwbGF5ZXJCb2FyZCA9IG5ld0dhbWUuZ2V0UGxheWVyQm9hcmQoKS5nZXRHYW1lYm9hcmQoKTtcclxuICAgIGNvbXB1dGVyQm9hcmQgPSBuZXdHYW1lLmdldENvbXB1dGVyQm9hcmQoKS5nZXRHYW1lYm9hcmQoKTtcclxuICAgIGdhbWUgPSBuZXdHYW1lO1xyXG4gICAgc2V0R2FtZWJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICBldmVudHMub24oJ3NldEdhbWVib2FyZHMnLCBpbml0KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZF9jb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL3B1YnN1Yi9ldmV0cy5tanMnO1xyXG5pbXBvcnQgeyBwbGFjZV9zaGlwX3NjcmVlbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZV9zY3JlZW4ubWpzJztcclxuaW1wb3J0IHNoaXBzIGZyb20gJy4uL2dhbWVfaGVscGVycy9zaGlwcy5tanMnO1xyXG5cclxuY29uc3Qgc2V0U2hpcENvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2FtZWJvYXJkRWxlbWVudCA9IHBsYWNlX3NoaXBfc2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQnKTtcclxuICBsZXQgc2hpcHNPYmogPSBzaGlwcygpO1xyXG4gIGxldCBpc1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgbGV0IHNoaXBzTmFtZXMgPSBbXTtcclxuICBsZXQgcGxheWVyQm9hcmQ7XHJcbiAgbGV0IGNlbGxzO1xyXG5cclxuICBjb25zdCBmaWxsR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXJCb2FyZC5nZXRHYW1lYm9hcmQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIGJvYXJkKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gYm9hcmRbaV0pIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnBvc2l0aW9uID0gYm9hcmRbaV1bal0ucG9zaXRpb247XHJcbiAgICAgICAgZ2FtZWJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcclxuXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRQb3NzaWJsZVBvc2l0aW9uKGJvYXJkW2ldW2pdLnBvc2l0aW9uLCBjZWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlbW92ZUNsYXNzKTtcclxuXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHNldFNoaXAoYm9hcmRbaV1bal0ucG9zaXRpb24sIGNlbGwpO1xyXG4gICAgICAgICAgY2hhbmdlU2hpcCgpO1xyXG4gICAgICAgICAgc2V0U2hpcFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICBpc0FsbFNoaXBzU2V0cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0UG9zc2libGVQb3NpdGlvbiA9IChwb3NpdGlvbiwgY2VsbCkgPT4ge1xyXG4gICAgaWYgKHNoaXBzTmFtZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcHNPYmpbc2hpcHNOYW1lc1swXV0uZ2V0U2hpcExlbmd0aCgpO1xyXG4gICAgY29uc3QgY29vcmRzID0gcGxheWVyQm9hcmQuZ2V0U2hpcENvb3JkcyhcclxuICAgICAgcG9zaXRpb25bMF0sXHJcbiAgICAgIHBvc2l0aW9uWzFdLFxyXG4gICAgICBsZW5ndGgsXHJcbiAgICAgIGlzVmVydGljYWxcclxuICAgICk7XHJcbiAgICBjb25zdCBpbnZhbGlkQ29vcmQgPSBwbGF5ZXJCb2FyZC5vdmVyRmxvd0dhbWVib2FyZChcclxuICAgICAgY29vcmRzWzBdLFxyXG4gICAgICBsZW5ndGgsXHJcbiAgICAgIGlzVmVydGljYWxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGludmFsaWRDb29yZCB8fCBwbGF5ZXJCb2FyZC5oYXNTaGlwKGNvb3JkcykpIHtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQ29vcmRzKGNvb3Jkcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWFya0Nvb3JkcyA9IChjb29yZHMpID0+IHtcclxuICAgIGZvciAobGV0IGkgaW4gY2VsbHMpIHtcclxuICAgICAgZm9yIChsZXQgaiBpbiBjb29yZHMpIHtcclxuICAgICAgICBpZiAoY2VsbHNbaV0uZGF0YXNldC5wb3NpdGlvbiA9PT0gY29vcmRzW2pdLmpvaW4oJywnKSkge1xyXG4gICAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgncG9zaWJsZV9wb3NpdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdwb3NpYmxlX3Bvc2l0aW9uJyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWxsU2hpcE5hbWVzID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSBpbiBzaGlwc09iaikge1xyXG4gICAgICBzaGlwc05hbWVzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkQnV0dG9uRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBwbGFjZV9zaGlwX3NjcmVlbi5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUF4aXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUF4aXMgPSAoKSA9PiB7XHJcbiAgICBpc1ZlcnRpY2FsID09PSB0cnVlID8gKGlzVmVydGljYWwgPSBmYWxzZSkgOiAoaXNWZXJ0aWNhbCA9IHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNoaXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJTaGlwcyA9IHBsYXllckJvYXJkLmdldFNoaXBzKCk7XHJcblxyXG4gICAgcGxheWVyU2hpcHMuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcclxuICAgICAgaWYgKG5hbWUgPT09IHNoaXBzTmFtZXNbMF0pIHtcclxuICAgICAgICBzaGlwc05hbWVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHVwZGF0ZVNoaXBEaXNwbGF5KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2hpcERpc3BsYXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzcGFuID0gcGxhY2Vfc2hpcF9zY3JlZW4ucXVlcnlTZWxlY3RvcignI3NoaXBfbmFtZScpO1xyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHNoaXBzTmFtZXNbMF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0U2hpcCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwc05hbWVzWzBdO1xyXG4gICAgcGxheWVyQm9hcmQuc2V0U2hpcChwb3NpdGlvbiwgc2hpcHNPYmpbc2hpcE5hbWVdLCBpc1ZlcnRpY2FsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc0FsbFNoaXBzU2V0cyA9ICgpID0+IHtcclxuICAgIGlmIChzaGlwc05hbWVzLmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xyXG4gICAgZXZlbnRzLmVtaXQoJ2FsbFNoaXBTZXQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRTaGlwUG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwQ2VsbHMgPSBwbGF5ZXJCb2FyZC5nZXRTaGlwQ2VsbHMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIGNlbGxzKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gc2hpcENlbGxzKSB7XHJcbiAgICAgICAgaWYgKGNlbGxzW2ldLmRhdGFzZXQucG9zaXRpb24gPT09IHNoaXBDZWxsc1tqXS5qb2luKCcsJykpIHtcclxuICAgICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2hhc19zaGlwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYW5HYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBnYW1lYm9hcmRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoZ2FtZSkgPT4ge1xyXG4gICAgcGxheWVyQm9hcmQgPSBnYW1lLmdldFBsYXllckJvYXJkKCk7XHJcbiAgICBjbGVhbkdhbWVib2FyZCgpO1xyXG4gICAgZmlsbEdhbWVib2FyZCgpO1xyXG4gICAgZmlsbFNoaXBOYW1lcygpO1xyXG4gICAgYWRkQnV0dG9uRXZlbnQoKTtcclxuICAgIGNoYW5nZVNoaXAoKTtcclxuICAgIGNlbGxzID0gWy4uLmdhbWVib2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JyldO1xyXG4gICAgc2hpcHNPYmogPSBzaGlwcygpO1xyXG4gIH07XHJcblxyXG4gIGV2ZW50cy5vbignc2V0U2hpcFNjcmVlbicsIGluaXQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0U2hpcENvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBzaGlwcyBmcm9tICcuL3NoaXBzLm1qcyc7XHJcblxyXG5jb25zdCBwbGFjZVNoaXBzID0gKHsgZ2FtZWJvYXJkIH0pID0+IHtcclxuICBsZXQgc2hpcHNPYmogPSBzaGlwcygpO1xyXG5cclxuICBmb3IgKGxldCBpIGluIHNoaXBzT2JqKSB7XHJcbiAgICBnYW1lYm9hcmQuc2V0UmFuZG9tU2hpcChzaGlwc09ialtpXSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxhY2VTaGlwcztcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi4vZ2FtZV9sb2dpYy9zaGlwL3NoaXAubWpzJztcclxuXHJcbmNvbnN0IHNoaXBzID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBDYXJyaWVyOiBTaGlwKCdDYXJyaWVyJywgNSksXHJcbiAgICBCYXR0bGVzaGlwOiBTaGlwKCdCYXR0bGVzaGlwJywgNCksXHJcbiAgICBEZXN0cm95ZXI6IFNoaXAoJ0Rlc3Ryb3llcicsIDMpLFxyXG4gICAgU3VibWFyaW5lOiBTaGlwKCdTdWJtYXJpbmUnLCAzKSxcclxuICAgICdQYXRyb2wgQm9hdCc6IFNoaXAoJ1BhdHJvbCBCb2F0JywgMiksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoaXBzO1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllci9wbGF5ZXIubWpzJztcclxuXHJcbmNvbnN0IEF0dGFja1RyYWNrID0gKHBsYXllciwgZ2FtZWJvYXJkKSA9PiB7XHJcbiAgbGV0IHRyYWNrID0gW107XHJcblxyXG4gIGNvbnN0IGZpbGxBdHRhY2tUcmFjayA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgbGV0IHNoaXAgPSBnYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKClbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5zaGlwO1xyXG4gICAgaWYgKHNoaXApIHtcclxuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICB0cmFjayA9IFtdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF5ZXIuZ2V0TGFzdFNob3QoKSAhPT0gJ2hpdCcpIHJldHVybjtcclxuICAgIGxldCB4ID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgeSA9IHBvc2l0aW9uWzFdO1xyXG5cclxuICAgIGxldCBhcnIgPSBbXHJcbiAgICAgIFt4ICsgMSwgeV0sXHJcbiAgICAgIFt4IC0gMSwgeV0sXHJcbiAgICAgIFt4LCB5IC0gMV0sXHJcbiAgICAgIFt4LCB5ICsgMV0sXHJcbiAgICBdO1xyXG5cclxuICAgIGFyciA9IHJlbW92ZU92ZXJGbG93Q29vcmQoYXJyKTtcclxuICAgIGFyciA9IHJlbW92ZUhpdENlbGxzKGFycik7XHJcblxyXG4gICAgYXJyLmZvckVhY2goKGNlbGwpID0+IHRyYWNrLnB1c2goY2VsbCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZU92ZXJGbG93Q29vcmQgPSAoYXJyKSA9PiB7XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcigoY29vcmQpID0+IHtcclxuICAgICAgcmV0dXJuIGNvb3JkWzBdIDwgMTAgJiYgY29vcmRbMV0gPCAxMCAmJiBjb29yZFswXSA+PSAwICYmIGNvb3JkWzFdID49IDA7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVIaXRDZWxscyA9IChhcnIpID0+IHtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKChjb29yZCkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpW2Nvb3JkWzBdXVtjb29yZFsxXV0uaXNIaXQgPT09IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2VsbCA9ICgpID0+IHtcclxuICAgIGlmICh0cmFjay5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0cmFjay5sZW5ndGgpO1xyXG4gICAgY29uc3QgY2VsbCA9IHRyYWNrW2luZGV4XTtcclxuICAgIHJlbW92ZShpbmRleCk7XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmUgPSAoaW5kZXgpID0+IHtcclxuICAgIHRyYWNrLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZpbGxBdHRhY2tUcmFjayxcclxuICAgIGdldENlbGwsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IElhID0gKGVuZW15KSA9PiB7XHJcbiAgY29uc3QgZW5lbXlHYW1lYm9hcmQgPSBlbmVteS5nYW1lYm9hcmQ7XHJcbiAgY29uc3QgaWFQbGF5ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJyk7XHJcbiAgY29uc3QgYXR0YWNrVHJhY2sgPSBBdHRhY2tUcmFjayhpYVBsYXllciwgZW5lbXlHYW1lYm9hcmQpO1xyXG4gIGxldCBoYWNrID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zc2libGVBdHRja0NlbGwgPVxyXG4gICAgICBhdHRhY2tUcmFjay5nZXRDZWxsKCkgfHwgaGFja0NlbGxzKCkgfHwgZ2V0UG9zc2libGVBdHRhY2tDZWxsKCk7XHJcbiAgICBpYVBsYXllci5hdHRhY2socG9zc2libGVBdHRja0NlbGwsIGVuZW15R2FtZWJvYXJkKTtcclxuICAgIGF0dGFja1RyYWNrLmZpbGxBdHRhY2tUcmFjayhwb3NzaWJsZUF0dGNrQ2VsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFja0NlbGxzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFoYWNrKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHNoaXBDZWxscyA9IGVuZW15R2FtZWJvYXJkLmdldFNoaXBDZWxscygpO1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGlwQ2VsbHMubGVuZ3RoKTtcclxuICAgIGhhY2sgPSBmYWxzZTtcclxuICAgIHJldHVybiBzaGlwQ2VsbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFBvc3NpYmxlQXR0YWNrQ2VsbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBlbmVteUdhbWVib2FyZC5mcmVlU2hvdENlbGxzKCk7XHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5Q2VsbHMubGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4gZW1wdHlDZWxsc1tpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdhbWVib2FyZDogaWFQbGF5ZXIuZ2FtZWJvYXJkLFxyXG4gICAgbmFtZTogaWFQbGF5ZXIubmFtZSxcclxuICAgIHJhbmRvbUF0dGFjayxcclxuICAgIGdldExhc3RTaG90OiBpYVBsYXllci5nZXRMYXN0U2hvdCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWE7XHJcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvcGxheWVyLm1qcyc7XHJcbmltcG9ydCBJYSBmcm9tICcuL0lBL2NvbXB1dGVyX0lBLm1qcyc7XHJcbmltcG9ydCBwbGFjZVNoaXBzIGZyb20gJy4uL2dhbWVfaGVscGVycy9wbGFjZVNoaXBzLm1qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL2V2ZXRzLm1qcyc7XHJcblxyXG5jb25zdCBnYW1lT3ZlckRhdGEgPSAobmFtZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzaG90RGF0YSA9IHtcclxuICBtaXNzOiB7XHJcbiAgICB0ZXh0OiBcIkl0J3MgYSBtaXNzLi4uXCIsXHJcbiAgICBzb3VuZDogJ3Nob3RfbWlzcycsXHJcbiAgfSxcclxuXHJcbiAgaGl0OiB7XHJcbiAgICB0ZXh0OiBcIkl0J3MgYSBoaXQhXCIsXHJcbiAgICBzb3VuZDogJ3Nob3RfaGl0JyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9ICgpID0+IHtcclxuICBsZXQgcGxheWVyO1xyXG4gIGxldCBjb21wdXRlcjtcclxuICBsZXQgcGxheWVyQm9hcmQ7XHJcbiAgbGV0IGNvbXB1dGVyQm9hcmQ7XHJcbiAgbGV0IGN1cnJlbnRQbGF5ZXI7XHJcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFjayhwb3NpdGlvbikge1xyXG4gICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XHJcbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5nZXRHYW1lYm9hcmQoKVtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLmlzSGl0KSByZXR1cm47XHJcblxyXG4gICAgcGxheWVyLmF0dGFjayhwb3NpdGlvbiwgY29tcHV0ZXJCb2FyZCk7XHJcbiAgICBldmVudHMuZW1pdCgnZmlyZV9zaG90Jyk7XHJcblxyXG4gICAgaWYgKHZlcmlmeUZvckdhbWVPdmVyKGNvbXB1dGVyKSkge1xyXG4gICAgICBnYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgIHNldEdhbWVPdmVyRGF0YSgnUGxheWVyJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xyXG4gICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XHJcblxyXG4gICAgY29tcHV0ZXIucmFuZG9tQXR0YWNrKCk7XHJcbiAgICBldmVudHMuZW1pdCgnZmlyZV9zaG90Jyk7XHJcblxyXG4gICAgaWYgKHZlcmlmeUZvckdhbWVPdmVyKHBsYXllcikpIHtcclxuICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICBzZXRHYW1lT3ZlckRhdGEoJ0NvbXB1dGVyJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZlcmlmeUZvckdhbWVPdmVyKGVuZW15KSB7XHJcbiAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0R2FtZU92ZXJEYXRhKHdpbm5lcikge1xyXG4gICAgZXZlbnRzLmVtaXQoJ2dhbWVPdmVyJywgZ2FtZU92ZXJEYXRhKHdpbm5lcikpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXJCb2FyZCgpIHtcclxuICAgIHJldHVybiBjb21wdXRlckJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGxheWVyQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gcGxheWVyQm9hcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgcGxheWVyID0gUGxheWVyKCdQbGF5ZXInKTtcclxuICAgIGNvbXB1dGVyID0gSWEocGxheWVyKTtcclxuICAgIHBsYXllckJvYXJkID0gcGxheWVyLmdhbWVib2FyZDtcclxuICAgIGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlci5nYW1lYm9hcmQ7XHJcbiAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcic7XHJcbiAgICBnYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgcGxhY2VTaGlwcyhjb21wdXRlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVDdXJyZW50UGxheWVyKCkge1xyXG4gICAgY3VycmVudFBsYXllciA9PT0gJ3BsYXllcidcclxuICAgICAgPyAoY3VycmVudFBsYXllciA9ICdjb21wdXRlcicpXHJcbiAgICAgIDogKGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRQbGF5ZXJTaG90RGF0YSgpIHtcclxuICAgIHJldHVybiBzaG90RGF0YVtwbGF5ZXIuZ2V0TGFzdFNob3QoKV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDb21wdXRlclNob3REYXRhKCkge1xyXG4gICAgcmV0dXJuIHNob3REYXRhW2NvbXB1dGVyLmdldExhc3RTaG90KCldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcclxuICAgIHJldHVybiBnYW1lT3ZlcjtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5vbigncGxheWVyQXR0YWNrJywgcGxheWVyQXR0YWNrKTtcclxuICBldmVudHMub24oJ2NvbXB1dGVyQXR0YWNrJywgY29tcHV0ZXJBdHRhY2spO1xyXG4gIGV2ZW50cy5vbigndG9nZ2xlUGxheWVyJywgdG9nZ2xlQ3VycmVudFBsYXllcik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0LFxyXG4gICAgcGxheWVyQXR0YWNrLFxyXG4gICAgY29tcHV0ZXJBdHRhY2ssXHJcbiAgICB2ZXJpZnlGb3JHYW1lT3ZlcixcclxuICAgIGdldENvbXB1dGVyQm9hcmQsXHJcbiAgICBnZXRQbGF5ZXJCb2FyZCxcclxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXHJcbiAgICBnZXRDb21wdXRlclNob3REYXRhLFxyXG4gICAgZ2V0UGxheWVyU2hvdERhdGEsXHJcbiAgICBpc0dhbWVPdmVyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJjb25zdCBDZWxsID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgaXNIaXQ6IGZhbHNlLFxyXG4gICAgc2hpcDogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBtaXNzZWRTaG9vdHMgPSBbXTtcclxuICBjb25zdCBzaGlwcyA9IFtdO1xyXG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XHJcbiAgY29uc3QgZ2V0TWlzc2VkU2hvdHMgPSAoKSA9PiBtaXNzZWRTaG9vdHM7XHJcbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkgPT09IHRydWUpO1xyXG4gIGNvbnN0IG1ha2VHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZ2FtZWJvYXJkID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgcm93LnB1c2goQ2VsbChbaSwgal0pKTtcclxuICAgICAgfVxyXG4gICAgICBnYW1lYm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2FtZWJvYXJkID0gbWFrZUdhbWVib2FyZCgpO1xyXG4gIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3Qgc2V0U2hpcCA9IChjb29yZCwgc2hpcCwgaXNWZXJ0aWNhbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBsZXQgbGVuZ3RoID0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XHJcbiAgICBsZXQgY29vcmRzID0gZ2V0U2hpcENvb3Jkcyhjb29yZFswXSwgY29vcmRbMV0sIGxlbmd0aCwgaXNWZXJ0aWNhbCk7XHJcblxyXG4gICAgaWYgKGhhc1NoaXAoY29vcmRzKSB8fCBvdmVyRmxvd0dhbWVib2FyZChjb29yZCwgbGVuZ3RoLCBpc1ZlcnRpY2FsKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiAoZ2FtZWJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uc2hpcCA9IHNoaXApKTtcclxuICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3ZlckZsb3dHYW1lYm9hcmQgPSAoY29vcmQsIGxlbmd0aCwgaXNWZXJ0aWNhbCkgPT4ge1xyXG4gICAgcmV0dXJuIGlzVmVydGljYWwgPT09IHRydWVcclxuICAgICAgPyBjb29yZFswXSArIGxlbmd0aCA+IDEwXHJcbiAgICAgIDogY29vcmRbMV0gKyBsZW5ndGggPiAxMDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYXNTaGlwID0gKGNvb3JkcykgPT4ge1xyXG4gICAgbGV0IGZpbGxDZWxscyA9IGdldEZpbGxDZWxscygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gZmlsbENlbGxzKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gY29vcmRzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZmlsbENlbGxzW2ldWzBdID09PSBjb29yZHNbal1bMF0gJiZcclxuICAgICAgICAgIGZpbGxDZWxsc1tpXVsxXSA9PT0gY29vcmRzW2pdWzFdXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2hpcENvb3JkcyA9ICh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwpID0+IHtcclxuICAgIHJldHVybiBpc1ZlcnRpY2FsID09PSB0cnVlXHJcbiAgICAgID8gZ2V0VmVydGljYWxQb3NpdGlvbih4LCB5LCBsZW5ndGgpXHJcbiAgICAgIDogZ2V0SG9yaXpvbnRhbFBvc2l0aW9uKHgsIHksIGxlbmd0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VmVydGljYWxQb3NpdGlvbiA9ICh4LCB5LCBsZW5ndGgpID0+IHtcclxuICAgIGxldCBjb29yZHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb29yZHMucHVzaChbaSwgeV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb29yZHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SG9yaXpvbnRhbFBvc2l0aW9uID0gKHgsIHksIGxlbmd0aCkgPT4ge1xyXG4gICAgbGV0IGNvb3JkcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvb3Jkcy5wdXNoKFt4LCBpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvb3JkcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRGaWxsQ2VsbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVyKChjZWxsKSA9PiBjZWxsLnNoaXApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEVtcHR5Q2VsbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVyKChjZWxsKSA9PiBjZWxsLnNoaXAgPT09IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XHJcblxyXG4gICAgaWYgKGNlbGwuaXNIaXQpIHJldHVybjtcclxuXHJcbiAgICBjZWxsLmlzSGl0ID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIWNlbGwuc2hpcCkge1xyXG4gICAgICBtaXNzZWRTaG9vdHMucHVzaChjb29yZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjZWxsLnNoaXAuaGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyID0gKGZ1bikgPT4ge1xyXG4gICAgbGV0IGZpbGx0cmVkID0gW107XHJcbiAgICBmb3IgKGxldCBpIGluIGdhbWVib2FyZCkge1xyXG4gICAgICBmb3IgKGxldCBqIGluIGdhbWVib2FyZFtpXSlcclxuICAgICAgICBpZiAoZnVuKGdhbWVib2FyZFtpXVtqXSkpIGZpbGx0cmVkLnB1c2goZ2FtZWJvYXJkW2ldW2pdLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsbHRyZWQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0UmFuZG9tU2hpcCA9IChzaGlwKSA9PiB7XHJcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gZ2V0RW1wdHlDZWxscygpO1xyXG5cclxuICAgIHdoaWxlIChlbXB0eUNlbGxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eUNlbGxzLmxlbmd0aCk7XHJcbiAgICAgIGxldCBhc3NpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHNldFNoaXAoZW1wdHlDZWxsc1twb3NpdGlvbl0sIHNoaXAsIGFzc2lzKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhc3NpcyA9IGFzc2lzID09PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoc2V0U2hpcChlbXB0eUNlbGxzW3Bvc2l0aW9uXSwgc2hpcCwgYXNzaXMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZW1wdHlDZWxscy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZnJlZVNob3RDZWxscyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmaWx0ZXIoKGNlbGwpID0+IGNlbGwuaXNIaXQgPT09IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTaGlwQ2VsbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVyKChjZWxsKSA9PiBjZWxsLnNoaXAgIT09IGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0R2FtZWJvYXJkLFxyXG4gICAgc2V0U2hpcCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBnZXRNaXNzZWRTaG90cyxcclxuICAgIGFsbFNoaXBzU3VuayxcclxuICAgIHNldFJhbmRvbVNoaXAsXHJcbiAgICBnZXRFbXB0eUNlbGxzLFxyXG4gICAgZnJlZVNob3RDZWxscyxcclxuICAgIGdldFNoaXBzLFxyXG4gICAgZ2V0U2hpcENlbGxzLFxyXG4gICAgZ2V0U2hpcENvb3JkcyxcclxuICAgIG92ZXJGbG93R2FtZWJvYXJkLFxyXG4gICAgaGFzU2hpcCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4uL2dhbWVib2FyZC9nYW1lYm9hcmQubWpzJztcclxuXHJcbmZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XHJcbiAgbGV0IGxhc3RTaG90O1xyXG4gIGxldCBtaXNzZWRTaG90cztcclxuXHJcbiAgY29uc3QgYXR0YWNrID0gKHBvc2l0aW9uLCBnYW1lYm9hcmQpID0+IHtcclxuICAgIHNldE1pc3NlZHNob3RzKGdhbWVib2FyZCk7XHJcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XHJcbiAgICB1cGRhdGVMYXN0U2hvb3QoZ2FtZWJvYXJkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRNaXNzZWRzaG90cyA9IChnYW1lYm9hcmQpID0+IHtcclxuICAgIG1pc3NlZFNob3RzID0gZ2FtZWJvYXJkLmdldE1pc3NlZFNob3RzKCkubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUxhc3RTaG9vdCA9IChnYW1lYm9hcmQpID0+IHtcclxuICAgIGdhbWVib2FyZC5nZXRNaXNzZWRTaG90cygpLmxlbmd0aCA+IG1pc3NlZFNob3RzXHJcbiAgICAgID8gKGxhc3RTaG90ID0gJ21pc3MnKVxyXG4gICAgICA6IChsYXN0U2hvdCA9ICdoaXQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRMYXN0U2hvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsYXN0U2hvdDtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIGdhbWVib2FyZDogR2FtZUJvYXJkKCksXHJcbiAgICBhdHRhY2ssXHJcbiAgICBnZXRMYXN0U2hvdCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgbGV0IGhpdHMgPSAwO1xyXG4gIGxldCBzdW5rID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gaGl0cztcclxuICB9O1xyXG5cclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNTdW5rKCkpIHJldHVybjtcclxuICAgIGhpdHMrKztcclxuICAgIHZlcmlmeUZvclN1bmsoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc3VuaztcclxuICB9O1xyXG5cclxuICBjb25zdCB2ZXJpZnlGb3JTdW5rID0gKCkgPT4ge1xyXG4gICAgc3VuayA9IGxlbmd0aCAtIGhpdHMgPT09IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2hpcExlbmd0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBnZXRIaXRzLFxyXG4gICAgZ2V0U2hpcExlbmd0aCxcclxuICAgIGhpdCxcclxuICAgIGlzU3VuayxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcclxuIiwiY29uc3QgZXZlbnRzID0ge1xyXG4gIGV2ZW50czoge30sXHJcbiAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcclxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XHJcbiAgfSxcclxuICBvZmY6IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICBmb3IgKGVsZW1lbnQgaW4gdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdW2VsZW1lbnRdID09PSBmbikge1xyXG4gICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoZWxlbWVudCwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGVtaXQ6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke2V2ZW50TmFtZX0gZG9lc24ndCBleGlzdGApO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBEb20gZnJvbSAnLi9kb20vZG9tLm1qcyc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZV9sb2dpYy9nYW1lLm1qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJzdWIvZXZldHMubWpzJztcclxuXHJcbmNvbnN0IERvbU1vZHVsZSA9IERvbSgpO1xyXG5jb25zdCBnYW1lID0gR2FtZSgpO1xyXG5Eb21Nb2R1bGUuc2V0SW5pdGlhbFNjcmVlbigpO1xyXG5cclxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcclxuICBnYW1lLmluaXQoKTtcclxuICBldmVudHMuZW1pdCgnc2V0U2hpcFNjcmVlbicsIGdhbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0R2FtZSgpIHtcclxuICBldmVudHMuZW1pdCgnc2V0R2FtZWJvYXJkcycsIGdhbWUpO1xyXG59XHJcblxyXG5ldmVudHMub24oJ2FsbFNoaXBTZXQnLCBpbml0R2FtZSk7XHJcbmV2ZW50cy5vbignbmV3R2FtZScsIG5ld0dhbWUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=