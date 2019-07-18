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
  <div id="app">
    <el-container>
    <el-header  class='head-menu'><headnav
          @auth
        loggedin
      @endauth></headnav></el-header>
    <el-main>
      <el-row >
         <el-col :md=4 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      
        <el-col :md=16>
          <el-row class='breadcrumb-row'>
          <el-breadcrumb separator=">">
            <el-breadcrumb-item><a href="/">首頁</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="/book/{{$book->id}}">{{$book->name}}</a></el-breadcrumb-item>
            @if ($chapter->previous_chapter_id != 0)
            <el-breadcrumb-item>{{$first_chapter_name}}</el-breadcrumb-item>
            @endif
            @if ($previous_chapter && $previous_chapter->previous_chapter_id!=0)
            <el-breadcrumb-item>...</el-breadcrumb-item>
            
            
            <el-breadcrumb-item>{{$previous_chapter->name}}</el-breadcrumb-item>
            @endif
            <el-breadcrumb-item>{{$chapter->name}}</el-breadcrumb-item>
          </el-breadcrumb>

          </el-row>
          <el-row  class="small-text">
            <i class='el-icon-s-custom'></i> 此章節作者: <span style="margin-right:50px">{{$aurthor->name}}</span>
        <!-- disable the like function 
        <i class='el-icon-s-custom'></i> 讚賞數: <span style="margin-right:50px">98</span>
        -->
        <i class='el-icon-s-custom'></i> 更新日期: <span style="margin-right:50px">{{$chapter->updated_at}}</span>
          </el-row>
          <el-row class='chapter-text'  style="white-space: pre-line">
          {{$chapter->content}}
          </el-row>
          @if (!$chapter->endchapter)
          <el-row class='chapter-question'>
            <i class='el-icon-question'></i>{{$chapter->question}}
          </el-row>
          <el-row>
          @if (count($answers) >=1)
          @foreach( $answers as $answer)
            <el-col :md=8 :xs=24>
              <answerbox 
              @if($answer->aurthor->id == $book->author_id)
              bookaurthor=true
              @endif
               chapterid='{{$answer->id}}' answer='{{$answer->answer}}' aurthor='{{$answer->aurthor->name}}' love_num=14></answerbox>
            </el-col>
          @endforeach
          @else
            <br><br>
            <h4>還沒有下一章 ! <a href='/createchapter/{{$chapter->id}}'>創作下一章節 </a></h4>
          @endif
          </el-row>

          @else
          <el-row>
          <br><br>
          <h4>此故事線完 ! <a href='javascript:history.back()'>回上一頁 </a></h4>
          </el-row>
          @endif

        </el-col>
      </el-row>  

    </el-main>

    </el-container>
    <chapteractionmenu chapterid='{{$chapter->id}}' text ='{{$chapter->additionalinfo}}'></chapteractionmenu>
  </div>


</body>

  <script src="/js/chapterdetail.js"></script>
  <script>

  </script>
</html>