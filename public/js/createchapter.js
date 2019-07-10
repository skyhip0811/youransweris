(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/createchapter"],{

/***/ "./resources/js/createchapter.js":
/*!***************************************!*\
  !*** ./resources/js/createchapter.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Headnav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Headnav */ "./resources/js/components/Headnav.vue");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBookmark"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileAlt"]);
Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"]); // Vue.component('example-component', require('./components/ExampleComponent.vue').default);

var app = new Vue({
  el: '#app',
  components: {
    Headnav: _components_Headnav__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['bookname', 'periouscontent', 'periouschaptername', 'periousquestion'],
  data: function data() {
    return {
      form: {
        name: '',
        periouscontent: '',
        periouschaptername: '山上有座廟',
        periousquestion: '',
        answer: '',
        additionalinfo: '',
        content: '',
        chaptername: '',
        endchapter: false,
        question: ''
      }
    };
  },
  methods: {
    test: function test(bookname) {
      this.form.name = bookname;
    },
    onSubmit: function onSubmit() {
      console.log('submit!');
    }
  },
  mounted: function mounted() {
    this.form.name = this.$el.attributes.name.value;
    this.form.periouscontent = unescape(this.$el.attributes.periouscontent.value);
    this.form.periouschaptername = this.$el.attributes.periouschaptername.value;
    this.form.periousquestion = this.$el.attributes.previousquestion.value;
  }
});

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./resources/js/createchapter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\youransweris\youransweris\resources\js\createchapter.js */"./resources/js/createchapter.js");


/***/ })

},[[4,"/js/manifest","/js/vendor"]]]);