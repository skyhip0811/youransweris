(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(t,n,e){t.exports=e("kfkV")},"6vjL":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.el-message-box{\n  max-width: 90%;\n  margin: 10px;\n  width: 700px;\n}\na{\n  color :#3490dc;\n}\n.el-message-box__message{\n  white-space: pre-line\n}\n",""])},CBO3:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.love_num{\r\n    margin-left:10px;\n}\n.ansbox-aurthor{\r\n    margin-left: 10px;\n}\n.secondrow{\r\n    color:#888  ;\n}\n.secondrow:hover{\r\n    text-decoration:none;\n}\r\n",""])},CYfe:function(t,n,e){var a=e("6vjL");"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,o);a.locals&&(t.exports=a.locals)},LC3J:function(t,n,e){"use strict";var a=e("eh3B");e.n(a).a},eBu2:function(t,n,e){"use strict";var a=e("CYfe");e.n(a).a},eh3B:function(t,n,e){var a=e("CBO3");"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,o);a.locals&&(t.exports=a.locals)},gM9W:function(t,n,e){var a=e("oLIn");"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,o);a.locals&&(t.exports=a.locals)},kfkV:function(t,n,e){"use strict";e.r(n);var a=e("byrS"),o=e("ToZk"),s=e("Z54N"),r=e("WHKT"),i={props:["text"],methods:{open:function(){this.$alert(this.text,"補充資料")}}},c=(e("eBu2"),e("KHd+")),l=Object(c.a)(i,function(){var t=this.$createElement,n=this._self._c||t;return n("a",{attrs:{href:"#"},on:{click:this.open}},[n("div",{staticClass:"center"},[n("font-awesome-icon",{attrs:{icon:"file-alt"}}),n("span",{staticClass:"action_number"},[this._v("資料")])],1)])},[],!1,null,null,null).exports,u={props:["text"],data:function(){return{gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],dialogTableVisible:!1,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}},methods:{}},d=Object(c.a)(u,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-button",{attrs:{type:"text"},on:{click:function(n){t.dialogTableVisible=!0}}},[t._v("Comment")])],1)},[],!1,null,null,null).exports,p={props:["chapterid","text","likes","liked","logined"],data:function(){return{isLiked:"1"==this.liked,likescount:this.likes?parseInt(this.likes):0}},methods:{likechapter:function(t){var n=this;window.axios.get("/likechapter/"+this.chapterid).then(function(t){t.data.status?(n.isLiked=!0,n.likescount+=1):(n.isLiked=!1,n.likescount-=1)}).catch(function(t){console.log(t),401==t.response.status&&(window.location="/login")})}}},h=(e("utcG"),Object(c.a)(p,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu_action"},[e("el-row",{staticClass:"menu_action_content"},[e("el-col",{staticClass:"hidden-md-and-down",attrs:{md:8}},[e("div",{staticStyle:{visibility:"hidden"}},[t._v(".")])]),t._v(" "),e("el-col",{attrs:{md:8}},[e("el-col",{attrs:{span:6}},[e("a",{attrs:{href:"#"},on:{click:t.likechapter}},[e("div",{staticClass:"center"},[e("font-awesome-icon",{class:{liked:t.isLiked},attrs:{icon:"heart"}}),e("span",{staticClass:"action_number"},[t._v(t._s(t.likescount))])],1)])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("a",{attrs:{href:"/createchapter/"+t.chapterid}},[e("div",{staticClass:"center"},[e("font-awesome-icon",{attrs:{icon:"plus"}}),e("span",{staticClass:"action_number"},[t._v("加分支")])],1)])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("infoboxbutton",{attrs:{text:t.text}})],1)],1)],1)],1)},[],!1,null,null,null).exports),m={props:["aurthor","answer","love_num","seen","chapterid","bookaurthor","readnum"],data:function(){return{}}},v=(e("LC3J"),Object(c.a)(m,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"/chapter/"+t.chapterid}},[e("el-card",{staticClass:"box-card answer-box"},[e("el-row",[t._v(t._s(t.answer))]),t._v(" "),e("el-row",{staticClass:"secondrow"},[e("font-awesome-icon",{attrs:{icon:"heart"}}),t._v(" "),e("span",{staticClass:"love_num"},[t._v(t._s(t.love_num))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("作者: "+t._s(t.aurthor)),e("span",{directives:[{name:"show",rawName:"v-show",value:t.bookaurthor,expression:"bookaurthor"}]},[t._v(" (第一作者)")]),e("br"),t._v(" "),e("span",[t._v("閱讀數: "+t._s(t.readnum))])])],1),t._v(" "),e("el-row")],1)],1)},[],!1,null,null,null).exports),f=e("hyJ6"),_=e("7O5W"),b=e("wHSu"),x=e("rT2p");e("9Wh1"),_.c.add(b.d,b.a,b.e,b.c,b.b),Vue.component("Infoboxbutton",l),Vue.component("Commentboxbutton",d),Vue.component("font-awesome-icon",x.a),new Vue({el:"#app",components:{Headnav:o.a,Chapterrow:s.a,Commentboxbutton:d,Bookrow:r.a,Remotesearch:a.a,Chapteractionmenu:h,Answerbox:v,Editorfavourite:f.a},data:function(){return{visible:!1,dialogTableVisible:!1,gridData:[]}}})},oLIn:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.menu_action{\r\n\twidth: 100%;\r\n\tposition: fixed;\r\n\theight: 60px;\r\n\tbackground: white;\r\n\tfont-size: 15px;\r\n\tpadding-top:15px;\n}\n.menu_action_content{\r\n\tposition: absolute;\r\n\twidth: 100%;\n}\n.liked{\r\n\tcolor:red;\n}\n.center {\r\n  margin: auto;\r\n  text-align: center;\n}\n.action_number{\r\n\tmargin-left: 10px;\n}\r\n",""])},utcG:function(t,n,e){"use strict";var a=e("gM9W");e.n(a).a}},[[1,0,1]]]);