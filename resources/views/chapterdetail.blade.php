<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">


  <title> 蝴說 | {{$book->name}} | {{$chapter->name}}</title>

   <!-- You can use open graph tags to customize link previews.
    Learn more: https://developers.facebook.com/docs/sharing/webmasters -->
  <meta property="og:url"           content="https://butterfliessay.com/chapter/{{$chapter->id}}" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="蝴說 | {{$book->name}} | {{$chapter->name}}" />
  <meta property="og:description"   content="{{substr ($chapter->content, 0, 100)}}" />
  <meta property="og:image"         content="{{asset('storage/'.$book->cover)}}" />
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css?v={{ env('js_version_number') }}">
    <link rel="stylesheet" type="text/css" href="/css/chapterdetail.css?v={{ env('js_version_number') }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <script src="/js/manifest.js?v={{ env('js_version_number') }}"></script>
 <script src="/js/vendor.js?v={{ env('js_version_number') }}"></script>
 <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
 <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=1033646243639089&autoLogAppEvents=1"></script> <!-- Your like button code -->
</head>
<body>
  <div id="app" chapterid = {{$chapter->id}}>
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
            <el-breadcrumb-item><a href="/book/{{$book->id}}">{{$first_chapter_name}}</a></el-breadcrumb-item>
            @endif
            @if ($previous_chapter && $previous_chapter->previous_chapter_id!=0)
            <el-breadcrumb-item>...</el-breadcrumb-item>
            
            
            <el-breadcrumb-item><a href="/chapter/{{$previous_chapter->id}}">{{$previous_chapter->name}}</a></el-breadcrumb-item>
            @endif
            <el-breadcrumb-item>{{$chapter->name}}</el-breadcrumb-item>
          </el-breadcrumb>

          </el-row>
          <el-row  class="small-text">

            <i class='el-icon-s-custom'></i> 此章節作者: <span style="margin-right:50px">{{$aurthor->name}}</span>
        <!-- disable the like function  -->
        閱讀數: <span style="margin-right:50px">{{$chapter->readnum}}</span>
       
            <i class='el-icon-s-custom'></i> 更新日期: <span style="margin-right:50px">{{$chapter->created_at}}</span>
          </el-row>
          <el-row class='chapter-text'  style="white-space: pre-line">
          {{$chapter->content}}
          </el-row>
          <br><br>
           <!-- Load Facebook SDK for JavaScript -->
          <el-row>
          <div id="fb-root"></div>
          
          <!-- <div class="fb-like" data-href="https://butterfliessay/chapter/{{$chapter->id}}" data-width="" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div> -->
       
          <div class="fb-like" data-href="https://butterfliessay.com/chapter/{{$chapter->id}}" data-width="" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
         </el-row>
          <!--likecoin button not launch yet-->
          <!-- <el-row>
          <iframe id="likecoin_btn" scrolling="no" frameborder="0" src = "https://button.like.co/in/embed/butterfliessay/button?referrer={{Request::url()}}&type=omit"></iframe>
          </el-row> -->
          
          @if (!$chapter->endchapter && !$chapter->redirect)

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
                      readnum={{$answer->readnum}}  chapterid='{{$answer->id}}' answer='{{$answer->answer}}' aurthor='{{$answer->aurthor->name}}' love_num={{$answer->like_count}}></answerbox>
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
                @if($chapter->redirect)
                <h4>此故事線導向另一章節 >>> <a href='/chapter/{{$chapter->redirect}}'>{{$redirect_chapter->name}} </a></h4>
                @else
                <h4>此故事線完 ! <a href='javascript:history.back()'>回上一頁 </a></h4>
                @endif
                </el-row>


              
          @endif

        </el-col>
      </el-row>  

    </el-main>

    </el-container>

    <el-dialog title="留言" :visible.sync="dialogTableVisible" class="comment-dialog">

      <el-row>
        <div style="overflow-x: hidden; overflow-y:scroll;height: 450px;" id='comments-box'>
        @foreach($comments as $comment)
        <el-row style="padding:20px 0px;"><el-col :span=6>{{$comment->user->name}} :</el-col><el-col :span=18 style="text-align: left;">{{$comment->comment}} </el-col></el-row>
        <el-row style="text-align:right;border-bottom: 1px dotted grey;">{{$comment->created_at}}</el-row>
        @endforeach

        
        </div>
      </el-row>
      <el-row>
        <el-col :span=18 ><el-input maxlength="100" show-word-limit style="padding:0 5px" v-model='comment'></el-input></el-col><el-col :span=6> <el-button @click='leavecomment'>提交</el-button></el-col>
      </el-row>
     
    </el-dialog>

    <chapteractionmenu v-on:commentbtnclicked='triggerComments'  chapterid='{{$chapter->id}}' text ='{{$chapter->additionalinfo}}' 
      likes = {{$likes}} 
      liked = {{$liked}} 
      @auth
          logined = "1"
      @endauth

      @guest
          logined = "0"
      @endguest

      commentsnum = {{sizeof($comments)}}
      ></chapteractionmenu>
  </div>


</body>

  <script src="/js/chapterdetail.js?v={{ env('js_version_number') }}"></script>
  <script>

  </script>
</html>