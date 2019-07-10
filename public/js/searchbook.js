(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/searchbook"],{

/***/ "./resources/js/searchbook.js":
/*!************************************!*\
  !*** ./resources/js/searchbook.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Remotesearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Remotesearch */ "./resources/js/components/Remotesearch.vue");
/* harmony import */ var _components_Headnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Headnav */ "./resources/js/components/Headnav.vue");
/* harmony import */ var _components_Editorfavourite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Editorfavourite */ "./resources/js/components/Editorfavourite.vue");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");


 // import Chapterrow from './components/Chapterrow'
// import Bookrow from './components/Bookrow'





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBookmark"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileAlt"]);
Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"]); // Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({
  el: '#app',
  components: {
    Headnav: _components_Headnav__WEBPACK_IMPORTED_MODULE_1__["default"],
    Chapterrow: Chapterrow,
    Bookrow: Bookrow,
    Remotesearch: _components_Remotesearch__WEBPACK_IMPORTED_MODULE_0__["default"],
    Chapteractionmenu: Chapteractionmenu,
    Answerbox: Answerbox,
    Editorfavourite: _components_Editorfavourite__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      visible: false
    };
  }
});

/***/ }),

/***/ 2:
/*!******************************************!*\
  !*** multi ./resources/js/searchbook.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\youransweris\youransweris\resources\js\searchbook.js */"./resources/js/searchbook.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);