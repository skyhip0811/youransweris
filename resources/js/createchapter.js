require('./bootstrap');
import Headnav from './components/Headnav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faBookmark, faPlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHeart,faBookmark,faPlus,faFileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


var app = new Vue({
  el: '#app',
  components: { Headnav },
  data: function() {
     var validateQuestion = (rule, value, callback) => {
          if (this.form.endchapter == false) {
            if(this.form.question.length == 0){
              callback(new Error('不是最終章必須填引導問題。'));
            }else{
              if(this.form.question.length < 2 || this.form.question.length > 50){
                callback(new Error('長度必須是2-50'));
              }else{
                 callback()
              }
             
            }
          } else {
              callback();
          }
      }; 
    return {

      rules: {

          chaptername:[
            { required: true, message: '請輸入章節名', trigger: 'blur' },
            { min: 2, max: 8, message: '長度必須是2-8位', trigger: ['change','blur'] }
          ],
          content:[
            { required: true, message: '請輸入內容', trigger: 'blur' },
            { min: 100, max: 3000, message: '長度必須是100-3000', trigger: ['change','blur'] }
          ],
          additionalinfo:[
          ],
          question:[
              { validator: validateQuestion, trigger: 'change' },

          ],
          answer:[
              { required: true, message: '請輸入回應上一條問題的答案', trigger: 'blur' },
              { min: 2, max: 30, message: '長度必須是2-30位', trigger: ['change','blur'] }
          ]

        },
      form: {
          name: '',
          periouscontent: '',
          periouschaptername: '',
          periousquestion:'',
          answer:'',
          additionalinfo:'',
          content:'',
          chaptername:'',
          endchapter:false,
          question:'',
          previouschapterid:''
        } 
    }
  },
  methods:{
  	test:function(bookname){
  		this.form.name = bookname;
  	},
  	onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          window.axios.post('/createchapter/'+this.form.previouschapterid, this.form).then(function (response) {
                        window.history.back();
                      })
                      .catch(function (error) {
                        // console.log(error.response.data);
                        self.promptError(error.response.data.errors);
                      });
        }else{
          console.log('error submit')
        }
      });
  }
  },
  mounted: function () {
        this.form.name = this.$el.attributes.name.value;
        this.form.previouschapterid = this.$el.attributes.previouschapterid.value;
        this.form.periouscontent = unescape(this.$el.attributes.periouscontent.value);
        this.form.periouschaptername = this.$el.attributes.periouschaptername.value;
        this.form.periousquestion = this.$el.attributes.previousquestion.value;
        this.form.additionalinfo = this.$el.attributes.additionalinfo.value;
  }
});
