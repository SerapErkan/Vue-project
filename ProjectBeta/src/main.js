import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import  Vuelidate from "vuelidate"

Vue.use(Vuelidate);


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
