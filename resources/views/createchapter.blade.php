<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css?v={{ env('js_version_number') }}">
  <link rel="stylesheet" type="text/css" href="/css/chapterdetail.css?v={{ env('js_version_number') }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <script src="/js/manifest.js?v={{ env('js_version_number') }}"></script>
 <script src="/js/vendor.js?v={{ env('js_version_number') }}"></script>
</head>
<body>
  <div id="app" previousquestion='{{$previous_chapter->question}}'  name="{{$book_name}}" 
  periouscontent='{{$previous_chapter->content}}' 
  periouschaptername='{{$previous_chapter->name}}'
  previouschapterid="{{$previous_chapter->id}}"
  additionalinfo = "{{ $previous_chapter->additionalinfo }}"
  >
    <el-container>
    <el-header  class='head-menu'><headnav
      @auth
      loggedin
      @endauth
    ></headnav></el-header>
    <el-main>
    <el-row>
      <el-col :md=6 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :lg=12 :sm=24>
      <el-card>
      <div slot="header" class="clearfix">
            <span><h4>章節創作</h4></span>
          </div>
      <el-form label-width="90px" ref="form" :model="form" label-width="80px" :rules="rules" >
        <el-form-item label="故事名稱" >
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

        @if(!$previous_chapter->endchapter && !$previous_chapter->redirect)
                <el-form-item label="補充資料" prop="additionalinfo">
          <el-input  type="textarea" :rows="10" placeholder="上一手作者沒有留下補充資料"  v-model="form.additionalinfo" value = ''></el-input>
          <span>補充資料是章節作者留給下一章節作者作為劇情提示作用 , 並不會直接顯示給讀者, 下一手作者可基於上手的資料進行更改。<br> 通常是角色資料，故事發展背景大綱要等資料</span>
        </el-form-item>

        <el-form-item label="你的答案" prop="answer">
          <el-input  placeholder="你的答案是..."   v-model="form.answer" value = ></el-input>
        </el-form-item>
        <el-form-item label="章節名稱" prop="chaptername">
          <el-input  placeholder="章節名稱"  v-model="form.chaptername"></el-input>
        </el-form-item>
        <el-form-item label="章節內容" prop="content">
          <el-input  type="textarea" :rows="30" placeholder="章節內容"  v-model="form.content" value = ''></el-input>
        </el-form-item>



        <el-form-item label="最終回?">
        <el-checkbox v-model="form.endchapter">是</el-checkbox>
        <span>如是最終回將沒有章節問題及往下發展的分支章節</span>
        </el-form-item>
        <el-form-item v-if="form.endchapter!=true" label="章節導向?">
        <el-checkbox v-model="form.redirect_option">是</el-checkbox>
        <span>章節導向是把此章節直接導向另一章節。</span>
        </el-form-item>
        <el-form-item v-if="form.redirect_option==true " label="章節" prop="redirect_id">
        <!--   <el-input  placeholder="章節問題"  v-model="form.redirect_id"></el-input> -->
        <remotesearch :states='chapters_options' ref='redirectselect' ></remotesearch>
          <span>選擇被導向的章節。</span>
        </el-form-item>
        <el-form-item v-if="form.endchapter!=true && form.redirect_option==false" label="章節問題" prop="question">
          <el-input  placeholder="章節問題"  v-model="form.question"></el-input>
          <span>章節問題是給下一手作者的引導問題</span>
        </el-form-item>

         <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">遞交</el-button>
            <br><span style="color:red">**一經遞交，將不能修改，因為會有其他作者會基於此章節創作。</span>
           <!--  <el-button>取消</el-button> -->
          </el-form-item>
          @else
            <h4>上一章節故事線已完或已被導向其他章節</h4>
          @endif

      </el-form>
      </el-card>
      </el-col>
    </el-row>
     
    </el-main>

    </el-container>
  </div>


</body>
<script>    
    var chapters_options =   JSON.parse('{!! json_encode($chapters_options, JSON_HEX_TAG) !!}');
</script>
  <script src="/js/createchapter.js?v={{ env('js_version_number') }}"></script>
</html>