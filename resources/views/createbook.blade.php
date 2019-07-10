<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <script src="/js/manifest.js"></script>
 <script src="/js/vendor.js"></script>
</head>
<body>
  <div id="app" name="" >
    <el-container>
    <el-header  class='head-menu'><headnav></headnav></el-header>
    <el-main>
    <el-row>
      <el-col :md=6 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :lg=12 :sm=24>
      <el-card>
      <div slot="header" class="clearfix">
            <span><h4>故事創作</h4></span>
          </div>
      <el-form label-width="90px" ref="form" :model="form" label-width="80px">
        <el-form-item label="故事名稱" >
          <el-input v-model="form.name" placeholder="故事名稱"></el-input>
        </el-form-item>
        <el-form-item label="故事簡介" >
          <el-input v-model="form.desc" placeholder="故事簡介"></el-input>
        </el-form-item>
         <el-form-item label="故事封面" >
          <imageupload name='bookcover' width="640" height='360' icon-width="160" icon-height="90"></imageupload>
          <span>封面必須是jpg format, 1 mb以下, 640 x 360px</span>
        </el-form-item>
        <el-form-item label="第一章節">
          <el-input  placeholder="章節名稱"  v-model="form.chaptername"></el-input>
        </el-form-item>
        <el-form-item label="章節內容">
          <el-input  type="textarea" :rows="30" placeholder="章節內容"    v-model="form.content" value = ></el-input>
        </el-form-item>
        <el-form-item label="補充資料 ">
          <el-input  type="textarea" :rows="10" placeholder="上一手作者沒有留下補充資料"  v-model="form.additionalinfo" value = ></el-input>
          <span>補充資料是章節作者留給下一章節作者作為劇情提示作用 , 並不會直接顯示給讀者, 下一手作者可基於上手的資料進行更改。<br> 通常是角色資料，故事發展背景大綱要等資料</span>
        </el-form-item>

        <el-form-item label="章節問題">
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

  <script src="/js/createbook.js"></script>
</html>