require('./bootstrap');
import Remotesearch from './components/Remotesearch'
import Headnav from './components/Headnav'
import Chapterrow from './components/Chapterrow'
import Bookrow from './components/Bookrow'

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
  el: '#app',
  components: { Headnav ,Chapterrow,Bookrow,Remotesearch},
  data: function() {
    return { visible: false }
  }
})