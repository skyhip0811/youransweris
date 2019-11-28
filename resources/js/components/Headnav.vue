<template>
<div class='head-menu' style="height:100%">
<el-row class='hidden-md-and-down'>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >

   <el-menu-item><a href="/"><img src='/logo.png'/></a></el-menu-item>
  <el-submenu index="1">
    <template slot="title">故事分類</template>
    <el-menu-item index="1-1"><a href="/category/1">懸疑故事</a></el-menu-item>
    <el-menu-item index="1-2"><a href="/category/2">都市社會</a></el-menu-item>
    <el-menu-item index="1-3"><a href="/category/3">玄幻奇幻</a></el-menu-item>
    <el-menu-item index="1-3"><a href="/category/4">搞笑故事</a></el-menu-item>
    <el-menu-item index="1-3"><a href="/category/5">遊戲人生</a></el-menu-item>
    <el-menu-item index="1-3"><a href="/category/6">浪漫愛情</a></el-menu-item>
    <el-menu-item index="1-3"><a href="/category/7">熱血冒險</a></el-menu-item>
  </el-submenu>
<!--   <el-submenu index="2">
  <template slot="title">搜尋</template>
  <el-menu-item index="2-1">作者</el-menu-item>
  <el-menu-item index="2-2">故事</el-menu-item>
</el-submenu> -->
<!--   <el-submenu index="3" v-if='loggedin'>
  <template slot="title">你追蹤的</template>
  <el-menu-item index="3-1">作者</el-menu-item>
  <el-menu-item index="3-2">故事進度</el-menu-item>
</el-submenu> -->

  <el-submenu index="4" v-if='loggedin'>
    <template slot="title">會員管理</template>
<!--     <el-menu-item index="4-1">你的創作</el-menu-item> -->
    <el-menu-item index="4-2"><a href="/createbook">創作新故事</a></el-menu-item>
    <el-menu-item index="4-3"><a href="/published">你的章節</a></el-menu-item>
    <!-- <el-menu-item index="4-2">更改會員資料</el-menu-item> -->
    <el-menu-item index="4-4"><a href="/logout">登出</a></el-menu-item>
  </el-submenu>

  <el-menu-item index ="5" v-else='loggedin'><a href="/login">會員登入</a></el-menu-item>
  <el-menu-item index ="6"><a href="/recent">觀看記錄</a></el-menu-item>
  <el-menu-item index ="7"><a href="/liked">你愛過的</a></el-menu-item>
<el-menu-item index ="8" ><a href="https://m.me/butterfliessay?fbclid=IwAR0nxyyODL7WsUQvm0XkpGqlBZUKTiBkfD_ik9om1B2pINF86nfNXkQf0Jo">聯絡蝴說</a></el-menu-item>



</el-menu>
</el-row>
<el-row class='hidden-lg-and-up' style="height:100%">

<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
  
  <el-submenu index="1">
    <template slot="title">菜單</template>
    <el-submenu index="1-1">
	    <template slot="title">故事分類</template>
	    <el-menu-item index="1-1"><a href="/category/1">懸疑故事</a></el-menu-item>
      <el-menu-item index="1-2"><a href="/category/2">都市社會</a></el-menu-item>
      <el-menu-item index="1-3"><a href="/category/3">玄幻奇幻</a></el-menu-item>
      <el-menu-item index="1-3"><a href="/category/4">搞笑故事</a></el-menu-item>
      <el-menu-item index="1-3"><a href="/category/5">遊戲人生</a></el-menu-item>
      <el-menu-item index="1-3"><a href="/category/6">浪漫愛情</a></el-menu-item>
      <el-menu-item index="1-3"><a href="/category/7">熱血冒險</a></el-menu-item>
  	</el-submenu>
<!--   	<el-submenu index="1-2">
	  <template slot="title">你追蹤的</template>
	  <el-menu-item index="1-2-1">作者</el-menu-item>
	  <el-menu-item index="1-2-2">故事進度</el-menu-item>
	</el-submenu> -->
  <el-submenu index="1-3" v-if='loggedin'>
    <template slot="title">會員管理</template>
<!--     <el-menu-item index="1-3-1">你的創作</el-menu-item> -->
    <!-- <el-menu-item index="1-3-2">更改會員資料</el-menu-item> -->
    <el-menu-item index="1-3-3"><a href="/createbook">創作新故事</a></el-menu-item>
    <el-menu-item index="1-3-3"><a href="/published">你的章節</a></el-menu-item>
    <!-- <el-menu-item index="4-2">更改會員資料</el-menu-item> -->
    <el-menu-item index="1-3-4"><a href="/logout">登出</a></el-menu-item>
  </el-submenu>

  <el-menu-item v-else='loggedin' index ="1-4" ><a href="/login">會員登入</a></el-menu-item>
  <el-menu-item index ="1-5"><a href="/recent">觀看記錄</a></el-menu-item>
  <el-menu-item index ="1-6"><a href="/liked">你愛過的</a></el-menu-item>
  <el-menu-item index ="1-7" ><a href="https://m.me/butterfliessay?fbclid=IwAR0nxyyODL7WsUQvm0XkpGqlBZUKTiBkfD_ik9om1B2pINF86nfNXkQf0Jo">聯絡蝴說</a></el-menu-item>
  </el-submenu>

  <el-menu-item style="width:50%;padding:auto">
  <div style="width:100%;margin-left: auto;
    margin-right: auto;height:100%;text-aglin:center;">
   <a href="/" style="height:100%;P"><img src='/logo.png'/></a>
</div>
</el-menu-item>
</el-menu>


</el-row>
</div>
</template>
<script>
import Remotesearch from './Remotesearch';

  export default {
    props: {
      'loggedin':Boolean,
      'bookTypes':Array
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',  
      };
    },
    components: {
	    Remotesearch
	  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

.head-menu{
  position: sticky;
  top:0;
  z-index: 99;
}

</style>