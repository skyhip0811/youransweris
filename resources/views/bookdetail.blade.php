<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css">
  <link rel="stylesheet" type="text/css" href="/css/chapterdetail.css">
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
            <el-col :md=8 style="padding:10px;"><img src="/placeholder-image.jpg" /></el-col>
            <el-col :md=16 style="padding:10px;" >
            <h4>在世界某處</h4>
	        <p>第一作者: <a href='#'>作者二號 (129)</a><br>
	        其他聯合作者: <a href='#'>專搞破壞 (28)</a>,<a href='#'>中二病 (72)</a><br>
	        總章節數: 229<br>
	        總字數: 98272 
	    	</p>
	        <p>這是一個發生在世界某處的故事。而且是一個有無限可能的故事。</p>
	    	</el-col>

	        
			</el-row>
          <el-row class='breadcrumb-row'>
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">在世界某處</a></el-breadcrumb-item>
            <el-breadcrumb-item>山裡有座廟</el-breadcrumb-item>
          </el-breadcrumb>

          </el-row>
          <el-row  class="small-text">
            <i class='el-icon-s-custom'></i> 此章節作者: <span style="margin-right:50px">作者二號</span>
  
        <i class='el-icon-s-custom'></i> 讚賞數: <span style="margin-right:50px">98</span>
    
        <i class='el-icon-s-custom'></i> 更新日期: <span style="margin-right:50px">2019/06/27</span>
          </el-row>
          <el-row class='chapter-text'>
            在世界某處，有一對很甜蜜的小情侶。女孩長得清秀，眼睛亮晶晶的，很可愛。男孩很俊俏，也很專一。他們倆在一起，真是天作之合。他們一起吃飯、一起看電影、一起笑...可是這幸福的生活持續不久，為什麼？他們各因工作關係需要分開，而且是很遠、很遠......
<br><br>
女孩是個設計師，她的上司看好她，願意帶她一起去法國展覽會研討，有機會的話還能替知名模特兒設計服飾呢！到那時她就能賺到很多、很多金錢，然後跟男孩一起過著快樂的生活...這麼巧的，誰也會爭奪這機會啊！為了她和他的未來，她決心跟他分開，飛到法國去...「只是一陣子而且，只是一陣子而且！！我這樣為我們的未來著想，你怎麼不會鼓勵一下我？你呢！什麼又不會作！又不想想我......」女孩正在想著。
<br><br>
女孩終於飛到法國了！所有的疲勞沖走了她的生氣。現在的她，只想跟男孩談一談話，只想聽一聽他的聲音。她的上司把她分配到一間小房間，就讓她暫時委屈一下。她剛放下行李，就聽見門外有一陣聲音，像是幾把雄壯的男漢，是想偷東西？打劫？哎！她都沒時間想了，就只想起男孩。。。對喔！立刻打電話給他！她就拿起手提電話，按著號碼。心急起來，就按錯電話號碼，但她只想更快聽見男孩的聲音，他的聲音，就像一個平安符。
<br><br>
嘟。。。嘟。。。。。。嘟。。。嘟。。
<br><br>此時電話通了!

          </el-row>
          <el-row class='chapter-question'>
            <i class='el-icon-question'></i>電話對面的人說了什麼?
          </el-row>
          <el-row>
            <el-col :md=8 :xs=24>
              <answerbox answer='"喂..." 是他很溫柔的聲音!' aurthor='作者二號' love_num=14></answerbox>
            </el-col>
             <el-col :md=8 :xs=24>
              <answerbox answer='"叫糊叫糊，喂搵邊個呀？"　對面傳來打麻將的聲音。' aurthor='徐薇薇' love_num=9></answerbox>
            </el-col>
             <el-col :md=8 :xs=24>

              <answerbox answer='＂喂...＂ 是一把很溫和的聲音，但是是女的。' aurthor='搞破壞' love_num=98237></answerbox>
            </el-col>
            <el-col :md=8 :xs=24>

              <answerbox answer='＂二姑二姑！！＂對面有一個女的一直在找姑媽。' aurthor='中二生' love_num=98237></answerbox>
            </el-col>
          </el-row>

        </el-col>
      </el-row>  
    </el-main>
    </el-container>
    <chapteractionmenu></chapteractionmenu>
  </div>
</body>
  <script src="/js/chapterdetail.js"></script>
</html>