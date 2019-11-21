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
/* harmony import */ var _components_Remotesearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Remotesearch */ "./resources/js/components/Remotesearch.vue");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBookmark"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"]);
Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"]); // Vue.component('example-component', require('./components/ExampleComponent.vue').default);

var app = new Vue({
  el: '#app',
  components: {
    Headnav: _components_Headnav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Remotesearch: _components_Remotesearch__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this = this;

    var validateQuestion = function validateQuestion(rule, value, callback) {
      if (_this.form.endchapter == false) {
        if (_this.form.question.length == 0) {
          callback(new Error('不是最終章必須填引導問題。'));
        } else {
          if (_this.form.question.length < 2 || _this.form.question.length > 50) {
            callback(new Error('長度必須是2-50'));
          } else {
            callback();
          }
        }
      } else {
        callback();
      }
    };

    return {
      chapters_options: chapters_options,
      rules: {
        chaptername: [{
          required: true,
          message: '請輸入章節名',
          trigger: 'blur'
        }, {
          min: 2,
          max: 8,
          message: '長度必須是2-8位',
          trigger: ['change', 'blur']
        }],
        content: [{
          required: true,
          message: '請輸入內容',
          trigger: 'blur'
        }, {
          min: 100,
          max: 3000,
          message: '長度必須是100-3000',
          trigger: ['change', 'blur']
        }],
        additionalinfo: [],
        question: [{
          validator: validateQuestion,
          trigger: 'change'
        }],
        answer: [{
          required: true,
          message: '請輸入回應上一條問題的答案',
          trigger: 'blur'
        }, {
          min: 2,
          max: 30,
          message: '長度必須是2-30位',
          trigger: ['change', 'blur']
        }]
      },
      form: {
        name: '',
        periouscontent: '',
        periouschaptername: '',
        periousquestion: '',
        answer: '',
        additionalinfo: '',
        content: '',
        chaptername: '',
        endchapter: false,
        question: '',
        previouschapterid: '',
        redirect_option: false,
        redirect_id: ''
      }
    };
  },
  methods: {
    test: function test(bookname) {
      this.form.name = bookname;
    },
    onSubmit: function onSubmit(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this2.$refs['redirectselect']) {
            _this2.form.redirect_id = _this2.$refs['redirectselect'].value;
          }

          console.log('submit!');
          window.axios.post('/createchapter/' + _this2.form.previouschapterid, _this2.form).then(function (response) {
            window.location = document.referrer;
          })["catch"](function (error) {
            // console.log(error.response.data);
            self.promptError(error.response.data.errors);
          });
        } else {
          console.log('error submit');
        }
      });
    }
  },
  mounted: function mounted() {
    this.form.name = this.$el.attributes.name.value;
    this.form.previouschapterid = this.$el.attributes.previouschapterid.value;
    this.form.periouscontent = unescape(this.$el.attributes.periouscontent.value);
    this.form.periouschaptername = this.$el.attributes.periouschaptername.value;
    this.form.periousquestion = this.$el.attributes.previousquestion.value;
    this.form.additionalinfo = this.$el.attributes.additionalinfo.value;
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