(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(e,r,n){e.exports=n(219)},212:function(e,r,n){"use strict";var t=n(48);n.n(t).a},213:function(e,r,n){(e.exports=n(8)(!1)).push([e.i,".avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  text-align: center;\n}\n.avatar {\n  width: 100px;\n  height: 100px;\n  display: block;\n}",""])},219:function(e,r,n){"use strict";n.r(r);var t=n(6),o={data:function(){return{imageUrl:"",file:""}},props:["name","width","height","iconWidth","iconHeight"],methods:{handleAvatarSuccess:function(e,r){this.imageUrl=URL.createObjectURL(r.raw),this.$emit("uploaded",r.raw)},beforeAvatarUpload:function(e){var r=this,n="image/jpeg"===e.type,t=e.size/1024/1024<1,o=this.width,a=this.height;n||this.$message.error("上传图片只能是 JPG 格式!"),t||this.$message.error("上传图片大小不能超过 1MB!");var i=new Promise(function(r,n){var t=window.URL||window.webkitURL,i=new Image;i.onload=function(){console.log([this.width,this.height]),i.width==o&&i.height==a?r():n()},i.src=t.createObjectURL(e)}).then(function(){return e},function(e){return console.log(e),r.$message.error("上傳的image必须是等于"+o+"*"+a+"!"),Promise.reject()});return n&&t&&i}}},a=(n(212),n(1)),i=Object(a.a)(o,function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("el-upload",{staticClass:"avatar-uploader",style:{width:e.iconWidth+"px",height:e.iconHeight+"px"},attrs:{action:"upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,name:e.name}},[e.imageUrl?n("img",{staticClass:"avatar",style:{width:e.iconWidth+"px",height:e.iconHeight+"px"},attrs:{src:e.imageUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon",style:{lineHeight:e.iconHeight+"px",width:e.iconWidth+"px",height:e.iconHeight+"px"}})])},[],!1,null,null,null).exports,s=n(2),c=n(0),d=n(3);n(11),s.c.add(c.c,c.a,c.d,c.b),Vue.component("font-awesome-icon",d.a);new Vue({el:"#app",props:{test:String},components:{Headnav:t.a,Imageupload:i},data:function(){return{imgurl:"",form:{name:"",additionalinfo:"",content:"",chaptername:"",endchapter:!1,question:"",type:"",desc:"",bookcover:""},rules:{name:[{required:!0,message:"請輸入書名",trigger:"blur"},{min:2,max:8,message:"長度必須是2-8位",trigger:["change","blur"]}],desc:[{required:!0,message:"請輸入簡介",trigger:"blur"},{min:5,max:30,message:"長度必須是5-30位",trigger:["change","blur"]}],type:[{required:!0,message:"請選擇類型",trigger:"blur"}],bookcover:[],chaptername:[{required:!0,message:"請輸入章節名",trigger:"blur"},{min:2,max:8,message:"長度必須是2-8位",trigger:["change","blur"]}],content:[{required:!0,message:"請輸入內容",trigger:"blur"},{min:100,max:3e3,message:"長度必須是100-3000",trigger:["change","blur"]}],additionalinfo:[],question:[{required:!0,message:"請輸入問題",trigger:"blur"},{min:2,max:50,message:"長度必須是2-50位",trigger:["change","blur"]}]},options:options,booknameerror:"",covernameerror:""}},methods:{onUploaded:function(e){this.imgurl=e},promptError:function(e){e.name&&(this.booknameerror=e.name[0]),e.cover&&(this.covernameerror=e.cover[0])},onSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var n=r,t=(r.$refs.form.$el,new FormData);t.append("file",r.imgurl),t.append("additionalinfo",r.form.additionalinfo),t.append("content",r.form.content),t.append("chaptername",r.form.chaptername),t.append("endchapter",r.form.endchapter),t.append("question",r.form.question),t.append("type",r.form.type),t.append("desc",r.form.desc),t.append("name",r.form.name),console.log(t),window.axios.post("/createbook",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log("success"),console.log(e.data),window.location="/book/"+e.data.id}).catch(function(e){n.promptError(e.response.data.errors)})})}},mounted:function(){}})},48:function(e,r,n){var t=n(213);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(t,o);t.locals&&(e.exports=t.locals)}},[[211,0,1]]]);