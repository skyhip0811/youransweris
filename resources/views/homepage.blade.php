<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <title>蝴說 - 集體創作互動小說平台</title>
  <meta name='description' content ="蝴說是一個集體創作互動小說平台，每個章節後面都有一個問題，每個人可以有不同答案，不同答案成就不同的故事，最後匯聚成無限的平行世界。">
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
    <el-header  class='head-menu'><headnav 
      @auth
      loggedin
      @endauth
      ></headnav></el-header>
    <el-main>
      
    <el-row>
      <el-col :md=3 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :md=18>
        <el-row>
        <mastercomment></mastercomment>
        </el-row>
        <el-row>
        <el-col :lg=14 :sm=24>

        
        <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>最近更新</h4></span>
          </div>
          <div  class="text item">
            <el-row>
              <!-- <el-col :span="3"><h5> 更新時間 </h5></el-col> -->
              <el-col :span="6"><h5> 書名 </h5></el-col>
              <el-col :span="7"><h5> 章節 </h5></el-col>
              <el-col :span="7"><h5> 前章節 </h5></el-col>
              <el-col :span="4"><h5> 作者 </h5></el-col>
            </el-row>
            @foreach($latest_chapters as $chapter)
            <chapterrow updatedat="{{ $chapter->newdate}}" 
              @if($chapter->previous_chapter)
              previouschapter='{{$chapter->previous_chapter->name}}' 
              previous_chapter_id='{{$chapter->previous_chapter->id}}'
              @else
              previouschapter='-'
              @endif
               chapter_id = '{{$chapter->id}}' book_id='{{$chapter->book->id}}' book='{{$chapter->book->name}}' chapter='{{$chapter->name}}' aurthor='{{$chapter->aurthor->name}}'></chapterrow>
            @endforeach

          </div>
        </el-card>
      </el-col>

      <el-col :lg=10 :sm=24>
        <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>最多章節故事</h4></span>
          </div>
          <div  class="text item">
           <el-row>
              <el-col :span="14"><h5> 書名 </h5></el-col>
              <el-col :span="6"><h5> 第一作者 </h5></el-col>
              <el-col :span="4"><h5> 章節數量 </h5></el-col>
            </el-row>
            @foreach($books_with_most_chapters as $book)
            <bookrow book_id="{{$book->id}}" book="{{$book->name}}" aurthor='{{$book->aurthor->name}}' ticket='{{$book->total_chapter_numbers}}'></bookrow>
            @endforeach

          </div>

        </el-card>
        <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>最多Like章節</h4></span>
          </div>
          <div  class="text item">
           <el-row>
              <el-col :span="14"><h5> 書名 </h5></el-col>
              <el-col :span="6"><h5> 作者 </h5></el-col>
              <el-col :span="4"><h5> <font-awesome-icon  icon="heart" /> </h5></el-col>
            </el-row>
            @foreach($most_like_chapters as $chapter)
            <chapterlikerow chapter_id="{{$chapter->id}}" chapter="{{$chapter->name}}" aurthor='{{$chapter->aurthor->name}}' like='{{$chapter->like_count}}'></chapterlikerow>
            @endforeach

          </div>

        </el-card>
      </el-col>
      </el-row>
      </el-col>

    </el-row>
    <!-- 未開發
    <el-row>
    <el-col :md=3 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :lg=18>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span><h4>小編精選</h4></span>
        </div>
        <el-row>
          <el-col :md=6>
            <editorfavourite link='book' aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book' aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book' aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>
          <el-col :md=6>
            <editorfavourite link='book' aurthor="作者一號" book="我是高手" desc="我是高手高手高高手,打遍天下无敌手,斟满美酒,今夜不醉不罢休,我会传球带球任意球,还有狮子滚绣球,蹴鞠当头,照亮满天的星斗"></editorfavourite>
          </el-col>

        </el-row>
      </el-card>
      </el-col>
    </el-row>
  -->
    </el-main>
    </el-container>
  </div>
</body>
  <script src="/js/homepage.js"></script>
</html>