<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooter></appFooter>

  </div>
</template>

<script>
import Footer from "./components/shared/Footer.vue"
import Header from "./components/shared/Header.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appFooter:Footer,
    appHeader:Header
  },
  created(){
    this.$store.dispatch("isAuth");
  }



}
</script>

