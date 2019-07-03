<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="/js/manifest.js"></script>
 <script src="/js/vendor.js"></script>


</head>
<body>
  <div id="app">
    <el-container>
    <el-header  class='head-menu'><headnav></headnav></el-header>
    <el-main>
    <el-row>
      <el-col :md=3 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :lg=11 :sm=24>
        <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>最近更新</h4></span>
          </div>
          <div  class="text item">
            <el-row>
              <el-col :span="4"><h5> 更新時間 </h5></el-col>
              <el-col :span="8"><h5> 書名 </h5></el-col>
              <el-col :span="8"><h5> 章節 </h5></el-col>
              <el-col :span="4"><h5> 第一作者 </h5></el-col>
            </el-row>
           <chapterrow book='很久很久以前' chapter='山上有座廟' aurthor='作者二號'></chapterrow>
           <chapterrow book='中二病闖世界' chapter='我正式宣佈我有病' aurthor='他她牠'></chapterrow>
           <chapterrow book='那些年我們一起追的校長' chapter='我撞到人' aurthor='專搞破壞'></chapterrow>
           <chapterrow book='雖然你樣衰' chapter='我撞到人' aurthor='他他他'></chapterrow>
          </div>
        </el-card>
      </el-col>
      <el-col :lg=7 :sm=24>
        <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>最近熱門</h4></span>
          </div>
          <div  class="text item">
           <el-row>
              <el-col :span="14"><h5> 書名 </h5></el-col>
              <el-col :span="6"><h5> 第一作者 </h5></el-col>
              <el-col :span="4"><h5> 觀看數 </h5></el-col>
            </el-row>
            <bookrow book="很久很久以前" aurthor='作者二號' ticket='139'></bookrow>
            <bookrow book="中二病闖世界" aurthor='他她牠' ticket='139'></bookrow>
            <bookrow book="那些年我們一起追的校長" aurthor='專搞破壞' ticket='139'></bookrow>
          </div>

        </el-card>
      </el-col>
    </el-row>

    </el-main>
    </el-container>
  </div>
</body>
  <script src="/js/homepage.js"></script>
</html>