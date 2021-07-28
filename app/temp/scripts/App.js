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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_Assure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_ImageFadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_ZoomOutOnScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _modules_GrowRightOnScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _modules_SlideCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






var slideCarousel = new _modules_SlideCarousel__WEBPACK_IMPORTED_MODULE_5__["default"]("slide-carousel__item", "carouselContainer");
var growRightOnScroll = new _modules_GrowRightOnScroll__WEBPACK_IMPORTED_MODULE_4__["default"]("form__input-grow", "home");
var zoomOutOnScroll = new _modules_ZoomOutOnScroll__WEBPACK_IMPORTED_MODULE_3__["default"]("our-services--each", "home");
var imageFadeIn = new _modules_ImageFadeIn__WEBPACK_IMPORTED_MODULE_2__["default"]();
var assure = new _modules_Assure__WEBPACK_IMPORTED_MODULE_1__["default"]();
var mobileScreen = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.menuOpen = document.getElementById("menu-icon");
    this.menuContent = document.getElementById("menu-content");
    this.phoneMenu = document.getElementById("mobile-menu");
    this.menuClose = document.getElementById("x-close");
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      this.menuOpen.addEventListener("click", this.openMobileMenu.bind(this));
      this.menuClose.addEventListener("click", this.closeMobileMenu.bind(this));
    }
  }, {
    key: "openMobileMenu",
    value: function openMobileMenu(e) {
      console.log(e);
      this.phoneMenu.classList.add("mobile-menu--show");
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      this.phoneMenu.classList.remove("mobile-menu--show");
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Assure = /*#__PURE__*/function () {
  function Assure() {
    _classCallCheck(this, Assure);

    this.assurance = document.getElementById('sure');
    this.home = document.getElementById('home');
    this.defState = true;
    this.sureCount = 0;
    this.sureArr = ["hero__Aff--show", "hero__Rel--show", "hero__Acc--show"];
    this.events();
  }

  _createClass(Assure, [{
    key: "events",
    value: function events() {
      if (this.home) {
        this.assure();
      }
    }
  }, {
    key: "assure",
    value: function assure() {
      setInterval(this.sure.bind(this), 1300);
    }
  }, {
    key: "sure",
    value: function sure() {
      if (this.sureCount == 0 && this.defState) {
        this.assurance.classList.remove(this.sureArr[0]);
        this.assurance.classList.add(this.sureArr[1]);
        this.sureCount++;
        this.defState = false;
      } else if (this.sureCount == 2) {
        this.assurance.classList.remove(this.sureArr[1]);
        this.assurance.classList.add(this.sureArr[2]);
        this.sureCount = 0;
      } else if (this.sureCount == 0 && !this.defState) {
        this.assurance.classList.remove(this.sureArr[2]);
        this.assurance.classList.add(this.sureArr[this.sureCount]);
        this.sureCount++;
      } else {
        this.assurance.classList.remove(this.sureArr[0]);
        this.assurance.classList.add(this.sureArr[this.sureCount]);
        this.sureCount++;
      }
    }
  }]);

  return Assure;
}();

/* harmony default export */ __webpack_exports__["default"] = (Assure);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageFadeIn = /*#__PURE__*/function () {
  function ImageFadeIn() {
    _classCallCheck(this, ImageFadeIn);

    this.deliverMan = document.getElementById("deliver-man");
    this.count = 0;
    this.deliArr = ["about-us__deliveryman-con--1", "about-us__deliveryman-con--2", "about-us__deliveryman-con--3", "about-us__deliveryman-con--4", "about-us__deliveryman-con--5", "about-us__deliveryman-con--6", "about-us__deliveryman-con--7"];
    this.events();
  }

  _createClass(ImageFadeIn, [{
    key: "events",
    value: function events() {
      if (this.deliverMan) {
        this.callFadeToggle();
      }
    }
  }, {
    key: "callFadeToggle",
    value: function callFadeToggle() {
      setInterval(this.fadeToggle.bind(this), 4000);
    }
  }, {
    key: "fadeToggle",
    value: function fadeToggle() {
      this.deliverMan.classList.add(this.deliArr[this.count]);

      if (this.count > 6) {
        this.count = 0;
        this.deliverMan.className = "about-us__deliveryman-con";
      } else {
        this.count++;
      }
    }
  }]);

  return ImageFadeIn;
}();

/* harmony default export */ __webpack_exports__["default"] = (ImageFadeIn);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ZoomOutOnScroll = /*#__PURE__*/function () {
  function ZoomOutOnScroll(eachElementclassName, bodyId) {
    _classCallCheck(this, ZoomOutOnScroll);

    this.body = document.getElementById(bodyId);
    this.allElements = document.getElementsByClassName(eachElementclassName);
    this.allElementsLength = this.allElements.length;
    this.windowContentAreaHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.counter = "";
    this.events();
  }

  _createClass(ZoomOutOnScroll, [{
    key: "events",
    value: function events() {
      // window.body.onscroll = this.zoomElementOut.bind(this);
      window.addEventListener("scroll", this.zoomElementOut.bind(this));
    }
  }, {
    key: "zoomElementOut",
    value: function zoomElementOut(e) {
      for (this.counter = 0; this.counter < this.allElementsLength; this.counter++) {
        var topWindowToElementBottom = void 0,
            elementHeight = void 0,
            pointToReveal = void 0,
            presentElement = void 0,
            isClass = void 0;
        presentElement = this.allElements[this.counter];
        isClass = !this.allElements[this.counter].classList.contains("zoom-out");
        topWindowToElementBottom = this.allElements[this.counter].getBoundingClientRect().bottom;
        elementHeight = this.allElements[this.counter].getBoundingClientRect().height;
        pointToReveal = topWindowToElementBottom - elementHeight / 5;

        if (this.windowContentAreaHeight > pointToReveal) {
          if (isClass) {
            presentElement.classList.add("zoom-out");
          }
        }
      }
    }
  }]);

  return ZoomOutOnScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (ZoomOutOnScroll);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GrowRightOnScroll = /*#__PURE__*/function () {
  function GrowRightOnScroll(eachElementclassName, bodyId) {
    _classCallCheck(this, GrowRightOnScroll);

    this.body = document.getElementById(bodyId);
    this.allElements = document.getElementsByClassName(eachElementclassName);
    this.allElementsLength = this.allElements.length;
    this.windowContentAreaHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.counter = "";
    this.events(eachElementclassName);
  }

  _createClass(GrowRightOnScroll, [{
    key: "events",
    value: function events(x) {
      window.addEventListener("scroll", this.growRight.bind(this));
    }
  }, {
    key: "growRight",
    value: function growRight(e) {
      for (this.counter = 0; this.counter < this.allElementsLength; this.counter++) {
        var topWindowToElementBottom = void 0,
            elementHeight = void 0,
            pointToReveal = void 0,
            presentElement = void 0,
            isClass = void 0;
        presentElement = this.allElements[this.counter];
        isClass = !this.allElements[this.counter].classList.contains("grow-right");
        topWindowToElementBottom = this.allElements[this.counter].getBoundingClientRect().bottom;
        elementHeight = this.allElements[this.counter].getBoundingClientRect().height;
        pointToReveal = topWindowToElementBottom - elementHeight / 5;

        if (this.windowContentAreaHeight > pointToReveal) {
          if (isClass) {
            presentElement.classList.add("grow-right");
          }
        }
      }
    }
  }]);

  return GrowRightOnScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (GrowRightOnScroll);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SlideCarousel = /*#__PURE__*/function () {
  function SlideCarousel(carouselsubitemclassname, carouselContainerId) {
    _classCallCheck(this, SlideCarousel);

    this.carouselContainer = document.getElementById(carouselContainerId);
    this.items = document.getElementsByClassName(carouselsubitemclassname);
    this.itemsLen = this.items.length;
    this.itemsLastIndex = this.itemsLen - 1;
    this.activeTrans = [];
    this.itemInView = this.items[0];
    this.itemInViewPos = "";
    this.itemInViewNext = "";
    this.itemInViewNextPos = "";
    this.itemInViewPrev = "";
    this.events();
  }

  _createClass(SlideCarousel, [{
    key: "events",
    value: function events() {
      this.computInitialTrans();
      this.initiateSlider();
    }
  }, {
    key: "computInitialTrans",
    value: function computInitialTrans() {
      var counter, initial;
      initial = 0;

      for (counter = 0; counter < this.itemsLen; counter++) {
        if (counter > 1) {
          initial -= 100;
          this.items[counter].style.transform = "translateX(" + initial + "%" + ")";
        }

        this.activeTrans.push(initial);
      }
    }
  }, {
    key: "initiateSlider",
    value: function initiateSlider() {
      setInterval(this.slider.bind(this), 1500);
    }
  }, {
    key: "slider",
    value: function slider() {
      this.itemInViewPos = this.itemInView.dataset.pos;
      this.activeTrans[this.itemInViewPos] -= 100;
      this.itemInView.style.transform = "translateX(" + this.activeTrans[this.itemInViewPos] + "%" + ")";
      this.itemInViewPrev = this.itemInView;
      this.itemInViewPrev.dataset.side = "left";
      this.itemInViewNextPos = parseInt(this.itemInViewPos) + 1;

      if (this.itemInViewNextPos > this.itemsLastIndex) {
        this.itemInViewNextPos = 0;
        this.itemInViewNext = this.items[this.itemInViewNextPos];
        this.activeTrans[this.itemInViewNextPos] = 100;
        this.itemInViewNext.style.transform = "translateX(" + this.activeTrans[this.itemInViewNextPos] + "%" + ")";
        this.itemInViewNext.dataset.side = "right";
      } // console.log(this.itemInViewNextPos);


      this.itemInViewNext = this.items[this.itemInViewNextPos];

      if (this.itemInViewNext.dataset.side == "left") {
        this.activeTrans[this.itemInViewNextPos] += 200;
        this.itemInViewNext.style.transform = "translateX(" + this.activeTrans[this.itemInViewNextPos] + "%" + ")";
        this.itemInViewNext.dataset.side = "right";
      }

      this.activeTrans[this.itemInViewNextPos] -= 100;
      this.itemInViewNext.style.transform = "translateX(" + this.activeTrans[this.itemInViewNextPos] + "%" + ")";
      this.itemInViewNext.dataset.side = "middle";
      this.itemInView = this.itemInViewNext;
    }
  }]);

  return SlideCarousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (SlideCarousel);

/***/ })
/******/ ]);