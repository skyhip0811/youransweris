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

    saveForm(){
      if(this.form.question) localStorage.setItem(this.form.previouschapterid+"_question", encodeURIComponent(this.form.question)) ;
      if(this.form.answer) localStorage.setItem(this.form.previouschapterid+"_answer", encodeURIComponent(this.form.answer)) ;
      if(this.form.additionalinfo) localStorage.setItem(this.form.previouschapterid+"_additionalinfo", encodeURIComponent(this.form.additionalinfo));
      if(this.form.content) localStorage.setItem(this.form.previouschapterid+"_content", encodeURIComponent(this.form.content));
      if(this.form.endchapter) localStorage.setItem(this.form.previouschapterid+"_endchapter", encodeURIComponent(this.form.endchapter)) ;
      if(this.form.chaptername) localStorage.setItem(this.form.previouschapterid+"_chaptername", encodeURIComponent(this.form.chaptername));
      this.$alert("Saved");
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
        this.form.additionalinfo =  localStorage.getItem(this.form.previouschapterid+"_additionalinfo")?decodeURIComponent(localStorage.getItem(this.form.previouschapterid+"_additionalinfo")):"";
        this.form.answer = localStorage.getItem(this.form.previouschapterid+"_answer")?decodeURIComponent(localStorage.getItem(this.form.previouschapterid+"_answer")):"";
        this.form.question = localStorage.getItem(this.form.previouschapterid+"_question")?decodeURIComponent(localStorage.getItem(this.form.previouschapterid+"_question")):"";
        this.form.endchapter = (localStorage.getItem(this.form.previouschapterid+"_endchapter") == 'true');
        this.form.content =  localStorage.getItem(this.form.previouschapterid+"_content")?decodeURIComponent(localStorage.getItem(this.form.previouschapterid+"_content")):"";

        this.form.chaptername = localStorage.getItem(this.form.previouschapterid+"_chaptername")?decodeURIComponent(localStorage.getItem(this.form.previouschapterid+"_chaptername")):"";

  }
});

