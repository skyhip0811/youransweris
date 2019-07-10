<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css">
  <link rel="stylesheet" type="text/css" href="/css/chapterdetail.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <script src="/js/manifest.js"></script>
 <script src="/js/vendor.js"></script>
</head>
<body>
  <div id="app" previousquestion='電話對面的人說了什麼?' name="在世界某處" 
  periouscontent='在世界某處，有一對很甜蜜的小情侶。女孩長得清秀，眼睛亮晶晶的，很可愛。男孩很俊俏，也很專一。他們倆在一起，真是天作之合。他們一起吃飯、一起看電影、一起笑...可是這幸福的生活持續不久，為什麼？他們各因工作關係需要分開，而且是很遠、很遠...... 女孩是個設計師，她的上司看好她，願意帶她一起去法國展覽會研討，有機會的話還能替知名模特兒設計服飾呢！到那時她就能賺到很多、很多金錢，然後跟男孩一起過著快樂的生活...這麼巧的，誰也會爭奪這機會啊！為了她和他的未來，她決心跟他分開，飛到法國去...「只是一陣子而且，只是一陣子而且！！我這樣為我們的未來著想，你怎麼不會鼓勵一下我？你呢！什麼又不會作！又不想想我......」女孩正在想著。 %0A%0A 女孩終於飛到法國了！所有的疲勞沖走了她的生氣。現在的她，只想跟男孩談一談話，只想聽一聽他的聲音。她的上司把她分配到一間小房間，就讓她暫時委屈一下。她剛放下行李，就聽見門外有一陣聲音，像是幾把雄壯的男漢，是想偷東西？打劫？哎！她都沒時間想了，就只想起男孩。。。對喔！立刻打電話給他！她就拿起手提電話，按著號碼。心急起來，就按錯電話號碼，但她只想更快聽見男孩的聲音，他的聲音，就像一個平安符。 %0A%0A  嘟。。。嘟。。。。。。嘟。。。嘟。。 %0A%0A 此時電話通了!' 
  periouschaptername='山上有座廟'>
    <el-container>
    <el-header  class='head-menu'><headnav></headnav></el-header>
    <el-main>
    <el-row>
      <el-col :md=6 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :lg=12 :sm=24>
      <el-card>
      <div slot="header" class="clearfix">
            <span><h4>章節創作</h4></span>
          </div>
      <el-form label-width="90px" ref="form" :model="form" label-width="80px">
        <el-form-item label="故事名稱">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="前章節名稱">
          <el-input disabled v-model="form.periouschaptername" placeholder="沒有前章節名稱"></el-input>
        </el-form-item>
        <el-form-item label="前章節內容">
          <el-input  type="textarea" :rows="10" placeholder="沒有前章節內容" disabled  v-model="form.periouscontent" value = ></el-input>
        </el-form-item>
        <el-form-item label="前章節問題">
          <el-input  placeholder="沒有前章節問題" disabled  v-model="form.periousquestion" value = ></el-input>
        </el-form-item>

        <el-form-item label="你的答案">
          <el-input  placeholder="你的答案是..."   v-model="form.answer" value = ></el-input>
        </el-form-item>
        <el-form-item label="章節名稱">
          <el-input  placeholder="章節名稱"  v-model="form.chaptername"></el-input>
        </el-form-item>
        <el-form-item label="章節內容">
          <el-input  type="textarea" :rows="30" placeholder="章節內容"    v-model="form.content" value = ></el-input>
        </el-form-item>
        <el-form-item label="補充資料 ">
          <el-input  type="textarea" :rows="10" placeholder="上一手作者沒有留下補充資料"  v-model="form.additionalinfo" value = ></el-input>
          <span>補充資料是章節作者留給下一章節作者作為劇情提示作用 , 並不會直接顯示給讀者, 下一手作者可基於上手的資料進行更改。<br> 通常是角色資料，故事發展背景大綱要等資料</span>
        </el-form-item>



        <el-form-item label="最終回?">
        <el-checkbox v-model="form.endchapter">是</el-checkbox>
        <span>如是最終回將沒有章節問題及往下發展的分支章節</span>
        </el-form-item>
        <el-form-item v-if="form.endchapter!=true" label="章節問題">
          <el-input  placeholder="章節問題"  v-model="form.question"></el-input>
          <span>章節問題是給下一手作者的引導問題</span>
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="onSubmit">遞交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
      </el-form>
      </el-card>
      </el-col>
    </el-row>
     
    </el-main>

    </el-container>
  </div>


</body>

  <script src="/js/createchapter.js"></script>
</html>