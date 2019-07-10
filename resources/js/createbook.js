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
          question:''
        } 
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
