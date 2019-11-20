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
  <div id="app">
    <el-container>
    <el-header  class='head-menu'><headnav></headnav></el-header>
    <el-main>
     
    </el-main>

    </el-container>
  </div>


</body>

  <script src="/js/template.js?v={{ env('js_version_number') }}"></script>
  <script>

  </script>
</html>