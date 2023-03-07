
import Vue from "vue";
import {router } from "../../router";

const state = {
  products: []
};

const getters = {
  getPoducts(state) {
    //ürünleri getir
    return state.products;
  },
  getPoduct(state) {
//ürünün detaylarını getiricek   
//  filter ile gelene key değerine eşitse detay getir 
// özel bir durum 
return key =>state.products.filter(el=>{
return el.key==key;
  
})

  }


};
const mutations = {
    //state güncellemek için -senkron
updateProductList(state,product){
  state.products.push(product)
}  

};
const actions = {
// asenkron 
initApp({commit}){
    // vue Resource işlemleri 
Vue.http.get("https://productoperations-deece-default-rtdb.firebaseio.com/products.json")
.then((res)=>{
 let data=res.body;

//  console.log("res-body",data);
for (let key in data){

  data[key].key=key;
  // console.log("key",data[key]);

  commit("updateProductList",data[key]);
}

})
},
saveProduct({dispatch,commit,state},payload){
  // vue Resource işlemleri 
  // this.$http -- vue import
  // http ile geçiçi tanımlayalım 
 
    Vue.http.post("https://productoperations-deece-default-rtdb.firebaseio.com/products.json",payload)
    .then((response)=>{
    
  /* ürünleri güncellemek için*/
  
  payload.key=response.body.name;
  commit('updateProductList',payload);
  console.log(response,state);

//  alıştış bakiye bilgilerini güncelleyelim
let tradeResult={

  purchase:payload.price,
  count:payload.count,
  sale:0.0

}
dispatch("setTradeResult",tradeResult);
router.replace("/");

    })
  
  
},
sellProduct({comit},payload){
    // vue Resource işlemleri 
  },



};

export default {
  state,
  getters,
  mutations,
  actions
};
