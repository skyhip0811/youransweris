require('./bootstrap');
import Remotesearch from './components/Remotesearch'
import Headnav from './components/Headnav'
import Chapterrow from './components/Chapterrow'
import Bookrow from './components/Bookrow'
import Chapteractionmenu from './components/Chapteractionmenu'
import Answerbox from './components/Answerbox'
import Editorfavourite from './components/Editorfavourite'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faBookmark, faPlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHeart,faBookmark,faPlus,faFileAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
  el: '#app',
  components: { Headnav ,Chapterrow,Bookrow,Remotesearch,Chapteractionmenu,Answerbox,Editorfavourite},
  data: function() {
    return { visible: false }
  }
})