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
  <div id="app">
    <el-container>
    <el-main>
      <el-row >
      <img style="width:300px; margin-top:50px; margin-bottom:60px" src='placeholder.jpg'/>
      <el-row>
      <el-row>
      <el-col :md=6 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
      <el-col :lg=12>
        <el-card>
          <el-form ref="form" :model="form" label-width="50px" style="margin-top:30px">
             <el-form-item label="電郵" prop="email" :rules="[
                { required: true, message: '請輸入電郵地址', trigger: 'blur' },
                { type: 'email', message: '請輸入正确的電郵地址', trigger: ['blur', 'change'] }
              ]">
              <el-input  v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密碼" prop="password" :rules="[
                { required: true, message: '請輸入密碼', trigger: 'blur' }
              ]">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">遞交</el-button>
              <a href="#">注冊 </a>
              <a href="#">忘記密碼</a>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      </el-row>
    </el-main>
    </el-container>
  </div>


</body>

  <script src="/js/login.js"></script>
  <script>

  </script>
</html>