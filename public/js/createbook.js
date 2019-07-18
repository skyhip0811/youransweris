(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/createbook"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Imageupload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
    return {
      imageUrl: '',
      file: ''
    };
  },
  props: ['name', 'width', 'height', 'iconWidth', 'iconHeight'],
  methods: {
    handleAvatarSuccess: function handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$emit('uploaded', file.raw);
    },
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      var _this = this;

      var isJPG = file.type === 'image/jpeg';
      var isLt2M = file.size / 1024 / 1024 < 1;
      var width = this.width;
      var height = this.height;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!');
      }

      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 1MB!');
      }

      var isSize = new Promise(function (resolve, reject) {
        var _URL = window.URL || window.webkitURL;

        var img = new Image();

        img.onload = function () {
          console.log([this.width, this.height]);
          var valid = img.width == width && img.height == height;
          valid ? resolve() : reject();
        };

        img.src = _URL.createObjectURL(file);
      }).then(function () {
        return file;
      }, function (err) {
        console.log(err);

        _this.$message.error('上傳的image必须是等于' + width + '*' + height + '!');

        return Promise.reject();
      });
      return isJPG && isLt2M && isSize;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  text-align: center;\n}\n.avatar {\n  width: 100px;\n  height: 100px;\n  display: block;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Imageupload.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=template&id=18e51401&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Imageupload.vue?vue&type=template&id=18e51401& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "el-upload",
    {
      staticClass: "avatar-uploader",
      style: { width: _vm.iconWidth + "px", height: _vm.iconHeight + "px" },
      attrs: {
        action: "upload",
        "show-file-list": false,
        "on-success": _vm.handleAvatarSuccess,
        "before-upload": _vm.beforeAvatarUpload,
        name: _vm.name
      }
    },
    [
      _vm.imageUrl
        ? _c("img", {
            staticClass: "avatar",
            style: {
              width: _vm.iconWidth + "px",
              height: _vm.iconHeight + "px"
            },
            attrs: { src: _vm.imageUrl }
          })
        : _c("i", {
            staticClass: "el-icon-plus avatar-uploader-icon",
            style: {
              lineHeight: _vm.iconHeight + "px",
              width: _vm.iconWidth + "px",
              height: _vm.iconHeight + "px"
            }
          })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Imageupload.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Imageupload.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Imageupload_vue_vue_type_template_id_18e51401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Imageupload.vue?vue&type=template&id=18e51401& */ "./resources/js/components/Imageupload.vue?vue&type=template&id=18e51401&");
/* harmony import */ var _Imageupload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Imageupload.vue?vue&type=script&lang=js& */ "./resources/js/components/Imageupload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Imageupload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Imageupload.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Imageupload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Imageupload_vue_vue_type_template_id_18e51401___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Imageupload_vue_vue_type_template_id_18e51401___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Imageupload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Imageupload.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Imageupload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Imageupload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Imageupload.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Imageupload.vue?vue&type=template&id=18e51401&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Imageupload.vue?vue&type=template&id=18e51401& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_template_id_18e51401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Imageupload.vue?vue&type=template&id=18e51401& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Imageupload.vue?vue&type=template&id=18e51401&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_template_id_18e51401___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Imageupload_vue_vue_type_template_id_18e51401___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/createbook.js":
/*!************************************!*\
  !*** ./resources/js/createbook.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Headnav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Headnav */ "./resources/js/components/Headnav.vue");
/* harmony import */ var _components_Imageupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Imageupload */ "./resources/js/components/Imageupload.vue");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBookmark"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"]);
Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"]); // Vue.component('example-component', require('./components/ExampleComponent.vue').default);

var app = new Vue({
  el: '#app',
  props: {
    'test': String
  },
  components: {
    Headnav: _components_Headnav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Imageupload: _components_Imageupload__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      imgurl: '',
      form: {
        name: '',
        additionalinfo: '',
        content: '',
        chaptername: '',
        endchapter: false,
        question: '',
        type: '',
        desc: '',
        bookcover: ''
      },
      rules: {
        name: [{
          required: true,
          message: '請輸入書名',
          trigger: 'blur'
        }, {
          min: 2,
          max: 8,
          message: '長度必須是2-8位',
          trigger: ['change', 'blur']
        }],
        desc: [{
          required: true,
          message: '請輸入簡介',
          trigger: 'blur'
        }, {
          min: 5,
          max: 30,
          message: '長度必須是5-30位',
          trigger: ['change', 'blur']
        }],
        type: [{
          required: true,
          message: '請選擇類型',
          trigger: 'blur'
        }],
        bookcover: [],
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
          required: true,
          message: '請輸入問題',
          trigger: 'blur'
        }, {
          min: 2,
          max: 50,
          message: '長度必須是2-50位',
          trigger: ['change', 'blur']
        }]
      },
      options: options,
      booknameerror: '',
      covernameerror: ''
    };
  },
  methods: {
    onUploaded: function onUploaded(value) {
      this.imgurl = value;
    },
    promptError: function promptError(msg) {
      if (msg.name) {
        this.booknameerror = msg.name[0];
      }

      if (msg.cover) {
        this.covernameerror = msg.cover[0];
      }
    },
    onSubmit: function onSubmit(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var self = _this;
          var form = _this.$refs['form'].$el;
          var formData = new FormData();
          formData.append('file', _this.imgurl);
          formData.append('additionalinfo', _this.form.additionalinfo);
          formData.append('content', _this.form.content);
          formData.append('chaptername', _this.form.chaptername);
          formData.append('endchapter', _this.form.endchapter);
          formData.append('question', _this.form.question);
          formData.append('type', _this.form.type);
          formData.append('desc', _this.form.desc);
          formData.append('name', _this.form.name);
          console.log(formData);
          window.axios.post('/createbook', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (response) {
            console.log('success');
            console.log(response.data);
            window.location = '/book/' + response.data.id;
          })["catch"](function (error) {
            // console.log(error.response.data);
            self.promptError(error.response.data.errors);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./resources/js/createbook.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\youransweris\laravel-app\resources\js\createbook.js */"./resources/js/createbook.js");


/***/ })

},[[5,"/js/manifest","/js/vendor"]]]);