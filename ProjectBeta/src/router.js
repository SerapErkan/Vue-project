 import Vue from "vue"
 import VueRouter from "vue-router"
 import Auth from "./components/auth/Auth"

 Vue.use(VueRouter);

 const routes=[
    {
        path:"/" ,component:Auth

    }
 ]

 
 export const router=new VueRouter({

    mode:"history",
    routes
 })