<template>
  <div>
    <appHeader></appHeader>
    <transition name="fade" mode="out-in">
       <router-view></router-view> 
    </transition>
  
    <appFooter></appFooter>
    <appCompanies></appCompanies>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import Companies from "./components/shared/Companies.vue"
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appCompanies:Companies
  },
  created(){
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  }


};
</script>
<style>

.fade-enter{
opacity: 0;
}
.fade-enter-activr{
transition:opasity .3s ease-in-out;
}
.fade-leave{

}
.fade-leave-active{
transition: opacity .3s ease-out ;
opacity: 0;
}

</style>
