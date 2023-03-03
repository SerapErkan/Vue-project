
import Vue from "vue";

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
