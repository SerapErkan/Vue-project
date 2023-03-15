import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/store";

//auth-login

import Auth from "./components/auth/Auth";
//product
import ProductsList from "./components/products/ProductsList";
import ProductDetail from "./components/products/ProductDetail";

// user
import userDetail from "./components/user/userDetail";
import userCard from "./components/user/userCard";
import userFavorite from "./components/user/userFavorite";

import NotFound from "./components/shared/NotFound";

// admin
// product add
// product delete
// total bakiye
// user kontrol
// user listesi edit delete

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component:ProductsList
  },
  {
    path: "/auth",
    component: Auth

    
  },
  {
    path: "/pList",
    component: ProductsList
  },
  {
    path: "/pDetail",
    component: ProductDetail
  },

  {
    path: "/user",
    component: userDetail,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },

  },

  {
    path: "*",
    component: NotFound
  }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
