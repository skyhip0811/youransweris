<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <meta name="google-site-verification" content="-aHBTAJnBgoPa3Gi8-Uaugq7p3JYXj7rqZUxXrFb1ig" />
  <title>蝴說 - {{$title}}</title>
  <meta name='description' content ="蝴說是一個集體創作互動小說平台，每個章節後面都有一個問題，每個人可以有不同答案，不同答案成就不同的故事，最後匯聚成無限的平行世界。">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css?v={{ env('js_version_number') }}">
  <link rel="stylesheet" type="text/css" href="/css/app.css?v={{ env('js_version_number') }}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="/js/manifest.js?v={{ env('js_version_number') }}"></script>
 <script src="/js/vendor.js?v={{ env('js_version_number') }}"></script>


</head>
<body>
  <div id="app">
    <el-container>
    <el-header  class='head-menu'><headnav 
      @auth
      loggedin
      @endauth
      ></headnav></el-header>
    <el-main>
      <el-row>
        <el-col :md=3 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
        <el-col :lg=18 :sm=24>

        
        <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>{{$title}}</h4></span>
          </div>
          <div  class="text item">
            <el-row>
              <!-- <el-col :span="3"><h5> 更新時間 </h5></el-col> -->
              <el-col :span="6"><h5> 書名 </h5></el-col>
              <el-col :span="7"><h5> 章節 </h5></el-col>
              <el-col :span="7"><h5> 前章節 </h5></el-col>
              <el-col :span="4"><h5> 層數 </h5></el-col>
            </el-row>
            @foreach($recent_chapters as $chapter)
            <chapterrow updatedat="{{ $chapter->newdate}}" 
              @if($chapter->previous_chapter)
              previouschapter='{{$chapter->previous_chapter->name}}' 
              previous_chapter_id='{{$chapter->previous_chapter->id}}'
              @else
              previouschapter='-'
              @endif
               chapter_id = '{{$chapter->id}}' book_id='{{$chapter->book->id}}' book='{{$chapter->book->name}}' chapter='{{$chapter->name}}' aurthor='{{$chapter->level}}'></chapterrow>
            @endforeach

          </div>
        </el-card>
      </el-col>
    </el-col>
  </el-row>
   
    </el-main>
    </el-container>
  </div>
</body>
  <script src="/js/homepage.js?v={{ env('js_version_number') }}"></script>
</html>