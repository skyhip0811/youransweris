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
  components: { Headnav,Imageupload },
  data: function() {
    return { form: {
          name: '',
          periouscontent: '',
          periouschaptername: '山上有座廟',
          periousquestion:'',
          answer:'',
          additionalinfo:'',
          content:'',
          chaptername:'',
          endchapter:false,
          question:'',
          type:'',
        },
        options: [{
          value: '懸疑故事',
          label: '懸疑故事'
        }, {
          value: '都市社會',
          label: '都市社會'
        }, {
          value: '玄幻奇幻',
          label: '玄幻奇幻'
        }, {
          value: '搞笑故事',
          label: '搞笑故事'
        }, {
          value: '遊戲人生',
          label: '遊戲人生'
        }, {
          value: '浪漫愛情',
          label: '浪漫愛情'
        }, {
          value: '熱血冒險',
          label: '熱血冒險'
        }]
    }
  },
  methods:{
  	test:function(bookname){
  		this.form.name = bookname;
  	},
  	onSubmit() {
        console.log('submit!');
      }
  },
  mounted: function () {

  }
});
