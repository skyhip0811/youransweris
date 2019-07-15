<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" action="register"  method="post">
        <el-form-item label="電郵" prop="email" ref="email" :error='emailerror'>
            <el-input  v-model="ruleForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="筆名" prop="name" ref="name" :error='nameerror'>
            <el-input  v-model="ruleForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性別" prop="gender">
        <el-select v-model="ruleForm.gender" placeholder="请选择">
          <el-option key="m" label="男" value="m"></el-option>
          <el-option key="f" label="女" value="f"></el-option>
        </el-select>
        </el-form-item>

        <el-form-item label="密碼" prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="確認密碼" prop="password_confirmation">
            <el-input type="password" v-model="ruleForm.password_confirmation" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
     data() {

        var validatePass = (rule, value, callback) => {
            if (value !== this.ruleForm.password) {
                callback(new Error('两次輸入密碼不一致!'));
            } else {
                callback();
            }
        };
        return {
            emailerror:'',
            nameerror:'',
            ruleForm: {
                password: '',
                password_confirmation: '',
                email:'',
                name:'',
                gender:''
            },
            rules: {
                name:[
                  { required: true, message: '請輸入筆名, 有名有姓才是品質保證', trigger: 'blur' },
                  { min: 3, max: 8, message: '長度必須是6-8位', trigger: 'change' }
                ],
                gender:[
                  { required: true, message: '人定係妖?', trigger: 'blur' },
                ],
                email:[
                    { required: true, message: '請輸入電郵', trigger: 'blur' },
                    { type: 'email', message: '請輸入正确的電郵地址', trigger: ['blur', 'change'] }
                ],
                password: [
                    { required: true, message: '請輸入密碼', trigger: 'blur' },
                    { min: 6, max: 8, message: '密码长度必须是6-8位', trigger: 'change' }
                ],
                password_confirmation: [
                    { required: true, message: '請再次輸入密碼', trigger: 'blur' },
                    { validator: validatePass, trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.nameerror = '';
                    this.emailerror = '';
                    window.axios.post('/register', this.ruleForm)
                      .then(function (response) {
                        console.log('success')
                      })
                      .catch(function (error) {
                        // console.log(error.response.data);
                        self.promptError(error.response.data.errors);
                      });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        promptError(msg){
            if(msg.email){this.emailerror = msg.email[0];}
            if(msg.name){this.nameerror = msg.name[0];}
            
        }
    }
  }
</script>