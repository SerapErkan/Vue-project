import Vue from "vue";
import VueRouter from "vue-router";
import  Auth from "./components/auth/Auth"

import ProductList from "./components/products/ProductList"
import ProductSell from "./components/products/ProductSell"
import ProductPurchase from "./components/products/ProductPurchase"

Vue.use(VueRouter);

const routes=[
    {path:"/" ,component:ProductList},
    {path:"/auth",component:Auth},

    {path:"/p-sell",component:ProductSell},
    {path:"/p-purchase",component:ProductPurchase},
    // {path:"/cv",component:},
      
]

  


export const router=new VueRouter({
    mode:"history",
    routes
})