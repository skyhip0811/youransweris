require('./bootstrap');
import Remotesearch from './components/Remotesearch'
import Headnav from './components/Headnav'
import Chapterrow from './components/Chapterrow'
import Bookrow from './components/Bookrow'
import Editorfavourite from './components/Editorfavourite'
import Mastercomment from './components/Mastercomment'

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
  el: '#app',
  components: {Mastercomment, Headnav ,Chapterrow,Bookrow,Remotesearch,Editorfavourite},
  data: function() {
    return { visible: false }
  }
})