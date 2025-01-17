<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" type="text/css" href="/css/app.css?v={{ env('js_version_number') }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <script src="/js/manifest.js?v={{ env('js_version_number') }}"></script>
 <script src="/js/vendor.js?v={{ env('js_version_number') }}"></script>
</head>
<body>
  <div id="app">
    <el-container>
    <el-main>
      <el-row >
      <img style="width:300px; margin-top:50px; margin-bottom:60px" src='logo.png'/>
      <el-row>
      <el-row>
      <el-col :md=6 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :lg=12>
        <el-card>
        <registerform></registerform>
        </el-card>
      </el-col>
      </el-row>
    </el-main>
    </el-container>
  </div>


</body>

  <script src="/js/register.js?v={{ env('js_version_number') }}"></script>
  <script>

  </script>
</html>