require('./bootstrap');
import Remotesearch from './components/Remotesearch'
import Headnav from './components/Headnav'
import Chapterrow from './components/Chapterrow'
import Bookrow from './components/Bookrow'
import Infoboxbutton from './components/Infoboxbutton'
import Commentboxbutton from './components/Commentboxbutton'
import Chapteractionmenu from './components/Chapteractionmenu'
import Answerbox from './components/Answerbox'
import Editorfavourite from './components/Editorfavourite'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart ,faComment , faBookmark, faPlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHeart,faBookmark,faPlus,faFileAlt,faComment)
Vue.component('Infoboxbutton', Infoboxbutton)
Vue.component('Commentboxbutton', Commentboxbutton)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
  el: '#app',
  components: { Headnav ,Chapterrow,Bookrow,Remotesearch,Chapteractionmenu,Answerbox,Editorfavourite},
  data: function() {
    return { visible: false ,dialogTableVisible :false , gridData :[], comment:"",chapterid:null}
  },
  methods:{
  	triggerComments(){
  		console.log("comment clicked");
  		this.dialogTableVisible = true;
  	},
    removeItem(array, item){
      for(var i in array){
          if(array[i]==item){
              array.splice(i,1);
              break;
          }
      }
    },
  	leavecomment(){
  		window.axios.post('/leavecomment/'+this.chapterid,
  			{
  				text:this.comment
  			}

  			).then((response)=>{
		  				console.log(response.data);
		  				document.getElementById("comments-box").innerHTML += 

		  				"<div class='el-row' style='padding: 20px 0px;''><div class='el-col el-col-6'>"+response.data.username+":</div><div class='el-col el-col-18' style='text-align: left;''>"+response.data.comment.comment+" </div></div>"+
		  				"<div class='el-row' style='text-align: right; border-bottom: 1px dotted grey;''>"+response.data.comment.created_at+"</div>";

		  				document.getElementById("comments-box").scrollTop = document.getElementById("comments-box").scrollHeight;
		  				this.comment = '';

                      })
                      .catch(function (error) {
                 		console.log(error);
                        if(error.response.status == 401){
                        	//alert("請先登入。");
                        	window.location='/register';
                    	};
                      });
  	}
  },
  mounted: function () {

        this.chapterid = this.$el.attributes.chapterid.value;
        let last20chapters = JSON.parse(localStorage.getItem("last_20_chapters"));
        if(last20chapters){
          console.log(last20chapters)
          if(last20chapters.includes(this.chapterid)){
            this.removeItem(last20chapters,this.chapterid);
          }
          
          last20chapters.unshift(this.chapterid);

          if(last20chapters.length>20){
            last20chapters.pop();
          }
          
          localStorage.setItem("last_20_chapters",JSON.stringify(last20chapters));
        }else{
          last20chapters = [];
          last20chapters.unshift(this.chapterid);
          localStorage.setItem("last_20_chapters",JSON.stringify(last20chapters));
        }
  }
})