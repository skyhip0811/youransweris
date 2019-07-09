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
      <el-row >
        <el-col :md=4 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      
        <el-col :md=16>
        <el-row>
        <el-col :md=6>
        <el-row>
          <el-col :span=6>
            <p>書名:</p>
          </el-col>
          <el-col :span=18>
            <remotesearch></remotesearch>
          </el-col>
        </el-row>

        </el-col>

         <el-col :md=6>
        <el-row>
          <el-col :span=6>
            <p>第一作者:</p>
          </el-col>
          <el-col :span=18>
            <remotesearch></remotesearch>
          </el-col>
        </el-row>

        </el-col>
        </el-row>
        
        
          <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>搜尋結果</h4></span>
          </div>
          <el-row>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book'  aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='/book' aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>

        </el-row>
        </el-card>
        </el-col>
      </el-row>
    </el-main>
    </el-container>

  </div>
</body>
  <script src="/js/searchbook.js"></script>
</html>