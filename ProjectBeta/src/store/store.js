import auth from "./modules/auth";
import admin from "./modules/admin";
import product from "./modules/product";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    admin,
    product
  }
});
