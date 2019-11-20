<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <title>{{$book->name}} | {{$chapter->name}}</title>
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css?v={{ env('js_version_number') }}">
  <link rel="stylesheet" type="text/css" href="/css/chapterdetail.css?v={{ env('js_version_number') }}">
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

          <el-row >
         <el-col :md=4 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      
        <el-col :md=16>
            <el-row>
            <el-col :md=8 style="padding:10px;"><img src="{{asset('storage/'.$book->cover)}}" /></el-col>
            <el-col :md=16 style="padding:10px;" >
            <h4>{{$book->name}}</h4>
	        <p>第一作者: <a>{{$aurthor->name}} <!--(129)--> <!-- implement this later--> </a><br>
	        其他聯合作者: 
          @foreach( $other_aurthors as $aurthor)
          <a >{{$aurthor->aurthor->name}} <!--(28)--></a>,
          @endforeach
          <br>總章節數: {{$chapter_count}}
          <!-- <br>總字數: 98272  -->
	    	</p>
	        <p>{{$book->desc}}</p>
	    	</el-col>

	        
			</el-row>
          <el-row class='breadcrumb-row'>
          <el-breadcrumb separator=">">
            <el-breadcrumb-item><a href='/'>首页</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href= "/book/{{$book->id}}">{{$book->name}}</a></el-breadcrumb-item>
            <el-breadcrumb-item>{{$chapter->name}}</el-breadcrumb-item>
          </el-breadcrumb>

          </el-row>
          <el-row  class="small-text">
            <i class='el-icon-s-custom'></i> 此章節作者: <span style="margin-right:50px">{{$chapter->aurthor->name}}</span>
  
        閱讀數: <span style="margin-right:50px">{{$chapter->readnum}}</span>
    
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
               readnum={{$answer->readnum}} chapterid='{{$answer->id}}' answer='{{$answer->answer}}' aurthor='{{$answer->aurthor->name}}' love_num={{$answer->like_count}}></answerbox>
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
    <chapteractionmenu chapterid='{{$chapter->id}}' text ='{{$chapter->additionalinfo}}' 
      likes = {{$likes}} 
      liked = {{$liked}} 
      @auth
          logined = "1"
      @endauth

      @guest
          logined = "0"
      @endguest
      ></chapteractionmenu>
  </div>
</body>
  <script src="/js/chapterdetail.js?v={{ env('js_version_number') }}"></script>
</html>