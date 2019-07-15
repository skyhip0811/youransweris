require('./bootstrap');
import Headnav from './components/Headnav'
import Imageupload from './components/Imageupload'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faBookmark, faPlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHeart,faBookmark,faPlus,faFileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


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
        options: options
    }
  },
  methods:{

    onUploaded(value){

      this.imgurl = value;
    },
  	onSubmit(formName) {

        this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    let form = form = document.getElementById('form');
                    let formData = new FormData(form)
                    formData.append('file', this.imgurl)
                    console.log(formData)
                    window.axios.post('/createbook', formData,{
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                      }
                    ).then(function (response) {
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
      })
    }
  },
  mounted: function () {

  }
});
