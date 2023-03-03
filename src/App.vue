<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
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
  }
};
</script>
<style></style>
