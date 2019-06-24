require('./bootstrap');

import Headnav from './components/Headnav'
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
  el: '#app',
  components: { Headnav },
  data: function() {
    return { visible: false }
  }
})