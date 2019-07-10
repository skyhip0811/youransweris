require('./bootstrap');
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faBookmark, faPlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHeart,faBookmark,faPlus,faFileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
  el: '#app',
  components: { },
  data: function() {
    return { 
    	form: {
	    	email:'',
	    	password:''
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
})