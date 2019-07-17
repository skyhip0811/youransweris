<template>
  <el-form ref="form" :model="form" label-width="50px" style="margin-top:30px">
     <el-form-item label="電郵" prop="email" :rules="[
        { required: true, message: '請輸入電郵地址', trigger: 'blur' },
        { type: 'email', message: '請輸入正确的電郵地址', trigger: ['blur', 'change'] }
      ]">
      <el-input  v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="密碼" prop="password" :rules="[
        { required: true, message: '請輸入密碼', trigger: 'blur' },
        { min: 6,  message: '長度最少 6 個字符', trigger: ['blur','change'] }
      ]">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">登入</el-button>
      <a href="/register">注冊 </a>
      <a href="#">忘記密碼</a>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email:'',
          password:''
        } 

      }
    },
    methods:{
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        window.axios.post('/login', this.form)
                      .then(function (response) {
                        window.location=document.referrer;
                      })
                      .catch(function (error) {
                        // console.log(error)
                        // console.log(error.response.data);
                        if(error.response.status == 401){
                          alert("錯誤的電郵或密碼")
                        }
                        
                        // self.promptError(error.response.data.errors);
                      });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
          }
      }
  }
</script>