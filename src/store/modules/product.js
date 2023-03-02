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
  stete.products.push(product)
}  

};
const actions = {
// asenkron 
initApp({commit}){
    // vue Resource işlemleri 
},
saveProduct({comit},payload){
  // vue Resource işlemleri 
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
