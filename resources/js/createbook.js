require('./bootstrap');
import Headnav from './components/Headnav'
import Imageupload from './components/Imageupload'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faBookmark, faPlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHeart,faBookmark,faPlus,faFileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

ga('send', 'pageview');
var app = new Vue({
  el: '#app',
  props:{
    'test':String
  },
  components: { Headnav,Imageupload },
  data: function() {


    return { 
      imgurl:'',
      form: {
          name: '',
          additionalinfo:'',
          content:'',
          chaptername:'',
          endchapter:false,
          question:'',
          type:'',
          desc:'',
          bookcover:'',

        },
        rules: {
          name:[
                  { required: true, message: '請輸入書名', trigger: 'blur' },
                  { min: 2, max: 8, message: '長度必須是2-8位', trigger: ['change','blur'] }
          ],
          desc:[
                { required: true, message: '請輸入簡介', trigger: 'blur' },
                 { min: 5, max: 30, message: '長度必須是5-30位', trigger: ['change','blur'] }
          ],
          type:[
                { required: true, message: '請選擇類型', trigger: 'blur' },
          ],
          bookcover:[
               
          ],
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
              { required: true, message: '請輸入問題', trigger: 'blur' },
              { min: 2, max: 50, message: '長度必須是2-50位', trigger: ['change','blur'] }
          ]

        },
        options: options,
        booknameerror:'',
        covernameerror:''
    }
  },
  methods:{

    onUploaded(value){

      this.imgurl = value;
    },
    promptError(msg){
            if(msg.name){this.booknameerror = msg.name[0];}
            if(msg.cover){this.covernameerror = msg.cover[0];}
            
        },
  	onSubmit(formName) {

        this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    let form = this.$refs['form'].$el
                    let formData = new FormData()
                    formData.append('file', this.imgurl)

                    formData.append('additionalinfo', this.form.additionalinfo)
                    formData.append('content', this.form.content)
                    formData.append('chaptername', this.form.chaptername)
                    formData.append('endchapter', this.form.endchapter)
                    formData.append('question',this.form.question)
                    formData.append('type',this.form.type)
                    formData.append('desc',this.form.desc)
                    formData.append('name',this.form.name)
                    console.log(formData)
                    window.axios.post('/createbook', formData,{
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                      }
                    ).then(function (response) {
                        console.log('success')
                        console.log(response.data)
                        window.location='/book/'+response.data.id;
                      })
                      .catch(function (error) {
                        // console.log(error.response.data);
                        self.promptError(error.response.data.errors);
                      });
                } else {
                    console.log('error submit!!');
                    return false;
                }
      })
    }
  },
  mounted: function () {

  }
});
