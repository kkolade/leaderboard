/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://leaderboard/./src/css/reset.css?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://leaderboard/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _modules_leaderboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/leaderboard.js */ \"./src/modules/leaderboard.js\");\n/* harmony import */ var _modules_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view.js */ \"./src/modules/view.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n\n\nconst name = document.querySelector('#name');\nconst score = document.querySelector('#score');\nconst submitBtn = document.querySelector('#submit');\nconst refreshBtn = document.querySelector('#refresh');\n\nconst url =\n  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/npI1n6Hh3zxhpmmzNdO1';\nconst api = new _modules_leaderboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](url);\n\n// On Page Load\nconst scoreURL = `${url}/scores/`;\napi.getScore(scoreURL);\n\nsetTimeout(() => {\n  document.addEventListener('DOMContentLoaded', () => {\n    api.getScore(scoreURL);\n  });\n}, 1000);\n\nconst view = new _modules_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n// Submit Button Event\nsubmitBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n\n  api.addScore(scoreURL, name.value, score.value);\n  submitBtn.setCustomValidity('Score added successfully');\n  submitBtn.reportValidity();\n  name.value = '';\n  score.value = '';\n\n  setTimeout(() => {\n    api.getScore(scoreURL);\n    const arr = JSON.parse(localStorage.getItem('data'));\n    view.scoreList(arr);\n  }, 1500);\n});\n\n// Refresh Button Event\nrefreshBtn.addEventListener('click', () => {\n  api.getScore(scoreURL);\n  if (localStorage.getItem('data')) {\n    const arr = JSON.parse(localStorage.getItem('data'));\n    view.scoreList(arr);\n  }\n});\n\n// On Page Load\nwindow.onload = () => {\n  if (localStorage.getItem('data')) {\n    const arr = JSON.parse(localStorage.getItem('data'));\n    view.scoreList(arr);\n  }\n};\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/leaderboard.js":
/*!************************************!*\
  !*** ./src/modules/leaderboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Leaderboard {\n  constructor(url) {\n    this.url = url;\n  }\n\n  createGameID = async (url) => {\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ name: 'The new K_Boy Game' }),\n    })\n      .then((response) => response.json())\n      .then((data) => {\n        localStorage.setItem('gameID', JSON.stringify(data));\n      });\n  };\n\n  getScore = async (url) => {\n    await fetch(url, {\n      method: 'GET',\n    })\n      .then((response) => response.json())\n      .then((data) => {\n        localStorage.setItem('data', JSON.stringify(data));\n      });\n  };\n\n  addScore = async (url, name, score) => {\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify({ user: name, score }),\n    }).then((response) => response.json());\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leaderboard);\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/leaderboard.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass View {\n  scoreList = (arr) => {\n    const list = document.querySelector('.scores');\n    list.innerHTML = '';\n    const li = [];\n    let i = 0;\n    arr.result = arr.result.sort((a, b) => b.score - a.score);\n    arr.result.forEach((element) => {\n      li[i] = document.createElement('li');\n      li[i].textContent = `${element.user}: ${element.score}`;\n      list.append(li[i]);\n      i += 1;\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/view.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;