(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{6:function(e,r,t){e.exports=t("NrJb")},NrJb:function(e,r,t){"use strict";t.r(r);var o={data:function(){return{form:{email:"",password:""}}},methods:{onSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;window.axios.post("/login",r.form).then(function(e){window.location=document.referrer}).catch(function(e){401==e.response.status&&alert("錯誤的電郵或密碼")})})}}},n=t("KHd+"),a=Object(n.a)(o,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"form",staticStyle:{"margin-top":"30px"},attrs:{model:e.form,"label-width":"50px"}},[t("el-form-item",{attrs:{label:"電郵",prop:"email",rules:[{required:!0,message:"請輸入電郵地址",trigger:"blur"},{type:"email",message:"請輸入正确的電郵地址",trigger:["blur","change"]}]}},[t("el-input",{model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密碼",prop:"password",rules:[{required:!0,message:"請輸入密碼",trigger:"blur"},{min:6,message:"長度最少 6 個字符",trigger:["blur","change"]}]}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.onSubmit("form")}}},[e._v("登入")]),e._v(" "),t("a",{attrs:{href:"/register"}},[e._v("注冊 ")])],1)],1)},[],!1,null,null,null).exports,s=t("7O5W"),i=t("wHSu"),l=t("rT2p");t("9Wh1"),s.c.add(i.d,i.a,i.e,i.c),Vue.component("font-awesome-icon",l.a),ga("send","pageview"),new Vue({el:"#app",components:{Loginform:a},data:function(){return{}}})}},[[6,0,1]]]);