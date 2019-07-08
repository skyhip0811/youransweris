<template>
<div style="height:100%">
<el-row class='hidden-md-and-down'>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >

   <el-menu-item><a href="/"><img src='https://www.deluxe.com/sites/www.deluxe.com/files/logo_design/logo/large/logo-samples-28.png'/></a></el-menu-item>
  <el-submenu index="1">
    <template slot="title">故事分類</template>
    <el-menu-item index="1-1">懸疑故事</el-menu-item>
    <el-menu-item index="1-2">都市社會</el-menu-item>
    <el-menu-item index="1-3">玄幻奇幻</el-menu-item>
    <el-menu-item index="1-3">搞笑故事</el-menu-item>
    <el-menu-item index="1-3">遊戲人生</el-menu-item>
    <el-menu-item index="1-3">浪漫愛情</el-menu-item>
    <el-menu-item index="1-3">熱血冒險</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
  <template slot="title">搜尋</template>
  <el-menu-item index="2-1">作者</el-menu-item>
  <el-menu-item index="2-2">故事</el-menu-item>
</el-submenu>
  <el-submenu index="3">
  <template slot="title">你追蹤的</template>
  <el-menu-item index="3-1">作者</el-menu-item>
  <el-menu-item index="3-2">故事進度</el-menu-item>
</el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">會員管理</a></el-menu-item>


</el-menu>
</el-row>
<el-row class='hidden-lg-and-up' style="height:100%">

<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
  
  <el-submenu index="1">
    <template slot="title">菜單</template>
    <el-submenu index="1-1">
	    <template slot="title">故事分類</template>
	    <el-menu-item index="1-1">懸疑故事</el-menu-item>
      <el-menu-item index="1-2">都市社會</el-menu-item>
      <el-menu-item index="1-3">玄幻奇幻</el-menu-item>
      <el-menu-item index="1-3">搞笑故事</el-menu-item>
      <el-menu-item index="1-3">遊戲人生</el-menu-item>
      <el-menu-item index="1-3">浪漫愛情</el-menu-item>
      <el-menu-item index="1-3">熱血冒險</el-menu-item>
  	</el-submenu>
  	<el-submenu index="1-2">
	  <template slot="title">你追蹤的</template>
	  <el-menu-item index="1-2-1">作者</el-menu-item>
	  <el-menu-item index="1-2-2">故事進度</el-menu-item>
	</el-submenu>
	<el-menu-item index="1-3"><a href="https://www.ele.me" target="_blank">會員管理</a></el-menu-item>
  </el-submenu>

  <el-menu-item style="width:50%;padding:auto">
  <div style="width:100%;margin-left: auto;
    margin-right: auto;height:100%;text-aglin:center;">
   <a href="/" style="height:100%;P"><img src='https://www.deluxe.com/sites/www.deluxe.com/files/logo_design/logo/large/logo-samples-28.png'/></a>
</div>
</el-menu-item>
</el-menu>


</el-row>
</div>
</template>
<script>
import Remotesearch from './Remotesearch';

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
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