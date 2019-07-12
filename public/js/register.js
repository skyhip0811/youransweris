(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/register"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registerform.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Registerform.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    var validatePass = function validatePass(rule, value, callback) {
      if (value !== _this.ruleForm.password) {
        callback(new Error('两次輸入密碼不一致!'));
      } else {
        callback();
      }
    };

    return {
      emailerror: '',
      nameerror: '',
      ruleForm: {
        password: '',
        password_confirmation: '',
        email: '',
        name: '',
        gender: ''
      },
      rules: {
        name: [{
          required: true,
          message: '請輸入筆名, 有名有姓才是品質保證',
          trigger: 'blur'
        }, {
          min: 3,
          max: 8,
          message: '長度必須是6-8位',
          trigger: 'change'
        }],
        gender: [{
          required: true,
          message: '人定係妖?',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: '請輸入電郵',
          trigger: 'blur'
        }, {
          type: 'email',
          message: '請輸入正确的電郵地址',
          trigger: ['blur', 'change']
        }],
        password: [{
          required: true,
          message: '請輸入密碼',
          trigger: 'blur'
        }, {
          min: 6,
          max: 8,
          message: '密码长度必须是6-8位',
          trigger: 'change'
        }],
        password_confirmation: [{
          required: true,
          message: '請再次輸入密碼',
          trigger: 'blur'
        }, {
          validator: validatePass,
          trigger: 'change'
        }]
      }
    };
  },
  methods: {
    submitForm: function submitForm(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var self = _this2;
          _this2.nameerror = '';
          _this2.emailerror = '';
          window.axios.post('/register', _this2.ruleForm).then(function (response) {
            console.log('success');
          })["catch"](function (error) {
            // console.log(error.response.data);
            self.promptError(error.response.data.errors);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    promptError: function promptError(msg) {
      if (msg.email) {
        this.nameerror = msg.email[0];
      }

      if (msg.name) {
        this.nameerror = msg.name[0];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registerform.vue?vue&type=template&id=75685a52&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Registerform.vue?vue&type=template&id=75685a52& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "ruleForm",
      staticClass: "demo-ruleForm",
      attrs: {
        model: _vm.ruleForm,
        rules: _vm.rules,
        "label-width": "100px",
        action: "register",
        method: "post"
      }
    },
    [
      _c(
        "el-form-item",
        {
          ref: "email",
          attrs: { label: "電郵", prop: "email", error: _vm.emailerror }
        },
        [
          _c("el-input", {
            attrs: { "auto-complete": "off" },
            model: {
              value: _vm.ruleForm.email,
              callback: function($$v) {
                _vm.$set(_vm.ruleForm, "email", $$v)
              },
              expression: "ruleForm.email"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        {
          ref: "name",
          attrs: { label: "筆名", prop: "name", error: _vm.nameerror }
        },
        [
          _c("el-input", {
            attrs: { "auto-complete": "off" },
            model: {
              value: _vm.ruleForm.name,
              callback: function($$v) {
                _vm.$set(_vm.ruleForm, "name", $$v)
              },
              expression: "ruleForm.name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "性別", prop: "gender" } },
        [
          _c(
            "el-select",
            {
              attrs: { placeholder: "请选择" },
              model: {
                value: _vm.ruleForm.gender,
                callback: function($$v) {
                  _vm.$set(_vm.ruleForm, "gender", $$v)
                },
                expression: "ruleForm.gender"
              }
            },
            [
              _c("el-option", { key: "m", attrs: { label: "男", value: "m" } }),
              _vm._v(" "),
              _c("el-option", { key: "f", attrs: { label: "女", value: "f" } })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "密碼", prop: "password" } },
        [
          _c("el-input", {
            attrs: { type: "password", "auto-complete": "off" },
            model: {
              value: _vm.ruleForm.password,
              callback: function($$v) {
                _vm.$set(_vm.ruleForm, "password", $$v)
              },
              expression: "ruleForm.password"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "確認密碼", prop: "password_confirmation" } },
        [
          _c("el-input", {
            attrs: { type: "password", "auto-complete": "off" },
            model: {
              value: _vm.ruleForm.password_confirmation,
              callback: function($$v) {
                _vm.$set(_vm.ruleForm, "password_confirmation", $$v)
              },
              expression: "ruleForm.password_confirmation"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  return _vm.submitForm("ruleForm")
                }
              }
            },
            [_vm._v("提交")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              on: {
                click: function($event) {
                  return _vm.resetForm("ruleForm")
                }
              }
            },
            [_vm._v("重置")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Registerform.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Registerform.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registerform_vue_vue_type_template_id_75685a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registerform.vue?vue&type=template&id=75685a52& */ "./resources/js/components/Registerform.vue?vue&type=template&id=75685a52&");
/* harmony import */ var _Registerform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registerform.vue?vue&type=script&lang=js& */ "./resources/js/components/Registerform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registerform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registerform_vue_vue_type_template_id_75685a52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registerform_vue_vue_type_template_id_75685a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Registerform.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Registerform.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Registerform.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registerform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Registerform.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registerform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registerform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Registerform.vue?vue&type=template&id=75685a52&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Registerform.vue?vue&type=template&id=75685a52& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registerform_vue_vue_type_template_id_75685a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Registerform.vue?vue&type=template&id=75685a52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registerform.vue?vue&type=template&id=75685a52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registerform_vue_vue_type_template_id_75685a52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registerform_vue_vue_type_template_id_75685a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/register.js":
/*!**********************************!*\
  !*** ./resources/js/register.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Registerform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Registerform */ "./resources/js/components/Registerform.vue");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBookmark"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileAlt"]);
Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"]); // Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({
  el: '#app',
  components: {
    Registerform: _components_Registerform__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
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

/***/ 7:
/*!****************************************!*\
  !*** multi ./resources/js/register.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\youransweris\youransweris\resources\js\register.js */"./resources/js/register.js");


/***/ })

},[[7,"/js/manifest","/js/vendor"]]]);