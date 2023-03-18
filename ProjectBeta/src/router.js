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
import userOrders from "./components/user/userOrders"
import user from ".//components/user/user"
import NotFound from "./components/shared/NotFound";
import productPurchase from "./components/admin/productPurchase"



// admin
// product add
// product delete
// total bakiye
// user kontrol
// user listesi edit delete

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    exact: true,
    component: ProductsList
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
    component:user,
    name: "user",
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },
    children: [
      { path: ":id", component: userDetail }, //user/1
      {
        path: ":id/userFavorite",
        component: userFavorite
      },
      {
        path: ":id/userCard",
        component: userCard
      },
      {
        path: ":id/userOrders",
        component: userOrders
      }
    ]
  },

  {path:"/admin", component:productPurchase},

  {
    path: "*",
    component: NotFound
  }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
