require('./bootstrap');
import Headnav from './components/Headnav'
import Remotesearch from './components/Remotesearch'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faBookmark, faPlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Cookies from 'js-cookie'

library.add(faHeart,faBookmark,faPlus,faFileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


var app = new Vue({
  el: '#app',
  components: { Headnav,Remotesearch },
  
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
      chapters_options:chapters_options,

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
          previouschapterid:'',
          redirect_option:false,
          redirect_id:''
        } 
    }
  },
  methods:{
  	test:function(bookname){
  		this.form.name = bookname;
  	},
    onAnswerChange(text){
      document.cookie = this.form.previouschapterid+"_answer="+text;
    },
    onNameChange(text){
      document.cookie = this.form.previouschapterid+"_name="+text;
    },
    onContentChange(text){
      document.cookie = this.form.previouschapterid+"_content="+text;
    },
    onAdditionalInfoChange(text){
      document.cookie = this.form.previouschapterid+"_additionalinfo="+text;
    },
    onEndChapterChange(text){
      document.cookie = this.form.previouschapterid+"_endchapter="+text;
    },
    onQuestionChange(text){
      document.cookie = this.form.previouschapterid+"_question="+text;
    },
  	onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.$refs['redirectselect']){
            this.form.redirect_id = this.$refs['redirectselect'].value;
          }
          console.log('submit!');

          window.axios.post('/createchapter/'+this.form.previouschapterid, this.form).then((response)=> {
                         Cookies.remove(this.form.previouschapterid+"_answer", { path: '' });
                         Cookies.remove(this.form.previouschapterid+"_additionalinfo", { path: '' });
                         Cookies.remove(this.form.previouschapterid+"_content", { path: '' });
                         Cookies.remove(this.form.previouschapterid+"_name", { path: '' });
                         Cookies.remove(this.form.previouschapterid+"_question", { path: '' });
                         Cookies.remove(this.form.previouschapterid+"_endchapter", { path: '' });
                         window.location=document.referrer;
                      })
                      .catch(function (error) {
                        console.log(error);
                        if(error.response.status == 401){
                            //alert("請先登入。");
                            window.location='/register';
                        };
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
        this.form.additionalinfo =  Cookies.get(this.form.previouschapterid+"_additionalinfo")?Cookies.get(this.form.previouschapterid+"_answer"):this.$el.attributes.additionalinfo.value;
        this.form.answer = Cookies.get(this.form.previouschapterid+"_answer");
        this.form.question = Cookies.get(this.form.previouschapterid+"_question")?Cookies.get(this.form.previouschapterid+"_question"):"";
        this.form.endchapter = (Cookies.get(this.form.previouschapterid+"_endchapter") == 'true');
        this.form.content = Cookies.get(this.form.previouschapterid+"_content");
        this.form.chaptername = Cookies.get(this.form.previouschapterid+"_name");

  }
});
