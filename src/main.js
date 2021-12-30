import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

Vue.prototype.$counter = 1

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
