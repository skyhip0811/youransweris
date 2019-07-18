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
    <el-header  class='head-menu'><headnav

    @auth
        loggedin
      @endauth
    ></headnav></el-header>
    <el-main>
      <el-row >
        <el-col :md=4 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      
        <el-col :md=16>
          <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span><h4>{{$category->cn_name}}</h4></span>
          </div>
          <el-row>
          @if($books)
          @foreach($books as $book)
          <el-col :md=6>
            <editorfavourite image='{{$book->cover}}' link='/book/{{$book->id}}'  aurthor="{{$book->aurthor->name}}" book="{{$book->name}}" desc="{{$book->desc}}"></editorfavourite>
          </el-col>

          @endforeach
          @endif

        </el-row>
        </el-card>
        </el-col>
      </el-row>
    </el-main>
    </el-container>

  </div>
</body>
  <script src="/js/chapterdetail.js"></script>
</html>