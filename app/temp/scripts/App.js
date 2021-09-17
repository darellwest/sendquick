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
/* harmony import */ var _modules_HeaderBgOnScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _modules_ScrollIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _modules_QuotePrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _modules_OfficeMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);







 // import ApiKeys from "./modules/ApiKeys";


 // import GetCountries from "./modules/GetCountries";
// import MoveInOnHover from "./modules/MoveInOnHover";
// let moveInOnHover  = new MoveInOnHover();
// let getCountries  = new GetCountries();
// let apiKeys  = new ApiKeys();

var officeMap = new _modules_OfficeMap__WEBPACK_IMPORTED_MODULE_9__["default"]();
var quotePrice = new _modules_QuotePrice__WEBPACK_IMPORTED_MODULE_8__["default"]();
var scrollIndicator = new _modules_ScrollIndicator__WEBPACK_IMPORTED_MODULE_7__["default"]("indicator");
var headerBgOnScroll = new _modules_HeaderBgOnScroll__WEBPACK_IMPORTED_MODULE_6__["default"]("site-header", "site-header--addbg");
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
    this.containerRight = this.carouselContainer.getBoundingClientRect().right;
    this.anyRight = true;
    this.checkIf = true;
    this.addOne = 0;
    this.items = document.getElementsByClassName(carouselsubitemclassname);
    this.itemsLen = this.items.length;
    this.itemsLastIndex = this.itemsLen - 1;
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
      this.initiateSlider();
    }
  }, {
    key: "initiateSlider",
    value: function initiateSlider() {
      setInterval(this.slider.bind(this), 4000);
    }
  }, {
    key: "slider",
    value: function slider() {
      this.itemInViewPos = this.itemInView.dataset.pos;
      this.itemInView.classList.add("slide-carousel__item--left");
      this.itemInViewPrev = this.itemInView;
      this.itemInViewNextPos = parseInt(this.itemInViewPos) + 1;
      this.itemInViewNext = this.items[this.itemInViewNextPos];

      if (this.itemInViewNextPos > this.itemsLastIndex) {
        this.itemInViewNextPos = 0;
      }

      this.itemInViewNext = this.items[this.itemInViewNextPos];
      this.itemInViewNext.style.opacity = "1";
      this.itemInViewNext.classList.remove("slide-carousel__item--middle", "slide-carousel__item--left");
      this.itemInViewNext.classList.add("slide-carousel__item--middle");
      this.itemInView = this.itemInViewNext;

      if (this.itemInViewNextPos == this.itemsLastIndex && this.checkIf) {
        this.checkIf = false;
        this.anyRight = false;
      }

      if (!this.anyRight) {
        if (this.itemInViewNextPos == this.itemsLastIndex) {
          this.items[0].style.opacity = "0";
          this.items[0].classList.remove("slide-carousel__item--middle", "slide-carousel__item--left");
          this.items[0].classList.add("slide-carousel__item--right");
        } else {
          this.addOne = this.items[this.itemInViewNextPos + 1];
          this.addOne.style.opacity = "0";
          this.addOne.classList.remove("slide-carousel__item--middle", "slide-carousel__item--left");
          this.addOne.classList.add("slide-carousel__item--right");
        }
      }
    }
  }]);

  return SlideCarousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (SlideCarousel);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HeaderBgOnScroll = /*#__PURE__*/function () {
  function HeaderBgOnScroll(headerId, bgAdderClass) {
    _classCallCheck(this, HeaderBgOnScroll);

    this.header = document.getElementById(headerId);
    this.headerHeight = this.header.getBoundingClientRect().height;
    this.isClass = this.header.classList.contains(bgAdderClass);
    this.bgClass = bgAdderClass;
    this.events();
  }

  _createClass(HeaderBgOnScroll, [{
    key: "events",
    value: function events() {
      window.addEventListener("scroll", this.addHeaderBg.bind(this));
    }
  }, {
    key: "addHeaderBg",
    value: function addHeaderBg() {
      if ((document.body.scrollTop > this.headerHeight || document.documentElement.scrollTop > this.headerHeight) && !this.isClass) {
        this.header.classList.add(this.bgClass);
      } else {
        this.header.classList.remove(this.bgClass);
      }
    }
  }]);

  return HeaderBgOnScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (HeaderBgOnScroll);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollIndicator = /*#__PURE__*/function () {
  function ScrollIndicator(indicatorId) {
    _classCallCheck(this, ScrollIndicator);

    this.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrolled = this.winScroll / this.height * 100;
    this.indicator = indicatorId;
    this.events();
  }

  _createClass(ScrollIndicator, [{
    key: "events",
    value: function events() {
      window.addEventListener("scroll", this.indicate.bind(this));
    }
  }, {
    key: "indicate",
    value: function indicate() {
      this.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrolled = this.winScroll / this.height * 100;
      document.getElementById(this.indicator).style.width = this.scrolled + "%";
    }
  }]);

  return ScrollIndicator;
}();

/* harmony default export */ __webpack_exports__["default"] = (ScrollIndicator);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QuotePrice = /*#__PURE__*/function () {
  function QuotePrice() {
    _classCallCheck(this, QuotePrice);

    this.chargeRate = {
      Air: 400,
      Sea: 300,
      Land: 200,
      Express: 800,
      Normal: 200
    };
    this.submitCick = document.getElementById("get-quote");
    this.closeQuote = document.getElementsByClassName("fa-times-circle")[0];
    this.quoteModal = document.getElementById("quote-modal");
    this.spinner = document.getElementsByClassName("fa-spinner")[0];
    this.Urgency;
    this.freightType;
    this.quoteNotify = document.getElementById("quote-notify");
    this.alertBox = document.getElementsByClassName("quote-modal__alert-box")[0];
    this.success = document.getElementsByClassName("quote-modal__success")[0];
    this.failure = document.getElementsByClassName("quote-modal__failure")[0];
    this.successQuote = document.getElementsByClassName("quote-modal__success--quote")[0];
    this.promise;
    this.isNotValid;
    this.allInputs;
    this.fromAddress;
    this.toAddress;
    this.distance;
    this.totalCharge;
    this.events();
  }

  _createClass(QuotePrice, [{
    key: "events",
    value: function events() {
      this.submitCick.addEventListener("click", this.call.bind(this));
      this.closeQuote.addEventListener("click", this.closeQuotePrice.bind(this));
      google.maps.event.addDomListener(window, 'load', this.autoCompleteInput());
    }
  }, {
    key: "autoCompleteInput",
    value: function autoCompleteInput() {
      this.fromAddress = new google.maps.places.Autocomplete(document.getElementById('from-country'));
      this.toAddress = new google.maps.places.Autocomplete(document.getElementById('to-country'));
      google.maps.event.addListener(this.fromAddress, 'place_changed', this.autoCompleteFrom.bind(this));
      google.maps.event.addListener(this.toAddress, 'place_changed', this.autoCompleteTo.bind(this));
    }
  }, {
    key: "autoCompleteFrom",
    value: function autoCompleteFrom() {
      this.fromAddress = this.fromAddress.getPlace().formatted_address; // this.fromAddress = from_place.formatted_address;
      //.replace(/\s+/g,"+")

      console.log(this.fromAddress.length);
    }
  }, {
    key: "autoCompleteTo",
    value: function autoCompleteTo() {
      this.toAddress = this.toAddress.getPlace().formatted_address; //replace(/\s+/g,"+")
      // this.toAddress = this.toPlaces.formatted_address;
    }
  }, {
    key: "closeQuotePrice",
    value: function closeQuotePrice() {
      this.quoteModal.classList.remove("quote-modal--show");
      window.location.reload();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var toAddress, fromAddress;
      toAddress = this.toAddress;
      fromAddress = this.fromAddress; // console.log(this.fromAddress + "as at calculate function");

      return new Promise(function (resolve, reject) {
        var xhttp, response, baseLink, i, geoPara;
        geoPara = [];
        baseLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";

        for (i = 0; i < 2; i++) {
          // to_address = this.toAddress.replace(/\s+/g,"+");
          // from_address = this.fromAddress.replace(/\s+/g,"+");
          // console.log(to_address);
          // console.log(from_address);
          xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              response = JSON.parse(this.responseText);
              console.log(this.response);
              geoPara.push(response.results[0].geometry.location); // geoPara.push(response);
            }
          };

          if (i == 0) {
            xhttp.open("GET", baseLink + fromAddress + "&key=AIzaSyBgUcqDp3Qb37vgJXsgy3_NiV8DwLrt51Q");
          } else if (i == 1) {
            xhttp.open("GET", baseLink + toAddress + "&key=AIzaSyBgUcqDp3Qb37vgJXsgy3_NiV8DwLrt51Q");
          }

          xhttp.send();
        }

        setTimeout(function () {
          var geoParaLent; // this.spinner.style.display = "none";

          geoParaLent = geoPara.length;

          if (geoParaLent > 1) {
            console.log(geoParaLent);
            resolve(geoPara);
          } else {
            reject();
          }
        }, 6000);
      });
    } // promiseTimeout(){
    // }

  }, {
    key: "checkIt",
    value: function checkIt() {
      return this.allInputs.some(function (item) {
        return item == "Select" || item == undefined;
      });
    }
  }, {
    key: "call",
    value: function call(e) {
      var _this = this;

      e.preventDefault();
      this.Urgency = document.getElementById("urgency").value;
      console.log(this.Urgency);
      this.freightType = document.getElementById("freight-type").value;
      this.allInputs = [this.fromAddress, this.toAddress, this.Urgency, this.freightType];
      this.isNotValid = this.checkIt();
      console.log(this.isNotValid);

      if (this.isNotValid) {
        this.quoteNotify.classList.add("form__notify--show");
      } else {
        console.log("Are we running else"); // this.alertBox.remove("quote-modal__alert-box--show");

        this.spinner.style.display = "block";
        console.log(this.spinner.style.display);
        this.quoteModal.classList.add("quote-modal--show");
        this.promise = this.calculate();
        this.promise.then(function (result) {
          console.log(_this + " why");
          console.log(result);
          _this.distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(result[0].lat, result[0].lng), new google.maps.LatLng(result[1].lat, result[1].lng));
          _this.distance = Math.ceil(_this.distance * 0.0001);
          _this.totalCharge = _this.distance + _this.chargeRate[_this.Urgency] + _this.chargeRate[_this.freightType];
          _this.success.style.display = "block";
          _this.failure.style.display = "none";
          _this.spinner.style.display = "none";
          _this.successQuote.textContent = "$" + _this.totalCharge;

          _this.alertBox.classList.add("quote-modal__alert-box--show");
        }, function (error) {
          console.log(error + "we got");
          _this.spinner.style.display = "none";
          _this.success.style.display = "none";
          _this.failure.style.display = "block";

          _this.alertBox.classList.add("quote-modal__alert-box--show");
        });
      }
    }
  }]);

  return QuotePrice;
}();

/* harmony default export */ __webpack_exports__["default"] = (QuotePrice);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OfficeMap = /*#__PURE__*/function () {
  function OfficeMap() {
    _classCallCheck(this, OfficeMap);

    this.initMap();
  } // Initialize and add the map


  _createClass(OfficeMap, [{
    key: "initMap",
    value: function initMap() {
      // The location of Uluru
      var abuja = {
        lat: 9.056097099999999,
        lng: 7.481895999999999
      }; // The map, centered at Uluru

      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: abuja
      }); // The marker, positioned at Uluru

      var marker = new google.maps.Marker({
        position: abuja,
        map: map
      });
    }
  }]);

  return OfficeMap;
}();

/* harmony default export */ __webpack_exports__["default"] = (OfficeMap);

/***/ })
/******/ ]);