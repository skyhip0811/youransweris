(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/login"],{

/***/ "./resources/js/login.js":
/*!*******************************!*\
  !*** ./resources/js/login.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBookmark"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileAlt"]);
Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"]); // Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({
  el: '#app',
  components: {},
  data: function data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    test: function test(bookname) {
      this.form.name = bookname;
    },
    onSubmit: function onSubmit(formName) {
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./resources/js/login.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\youransweris\youransweris\resources\js\login.js */"./resources/js/login.js");


/***/ })

},[[6,"/js/manifest","/js/vendor"]]]);