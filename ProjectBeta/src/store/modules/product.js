import Vue from "vue";
import { router } from "../../router";
import axios from "axios"; 

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
    return key =>
      state.products.filter(el => {
        return el.key == key;
      });
  }
};
const mutations = {
  //state güncellemek için -senkron
  updateProductList(state, product) {
    state.products.push(product);
  }
};
const actions = {
  // asenkron
  initApp({ commit }) {
    // vue Resource işlemleri
    axios
      .get(
        "https://projectbeta-001-default-rtdb.firebaseio.com/products.json"
      )
      .then(res => {
        let data = res.body;

        //  console.log("res-body",data);
        for (let key in data) {
          data[key].key = key;
          // console.log("key",data[key]);

          commit("updateProductList", data[key]);
        }
      });
  },
  saveProduct({ dispatch, commit, state }, payload) {
    // vue Resource işlemleri
    // this.$http -- vue import
    // http ile geçiçi tanımlayalım


    axios
      .post(
        " https://beta-000-49f5e-default-rtdb.firebaseio.com/products.json",
       
        payload
      )
      .then(response => {
        /* ürünleri güncellemek için*/

        //? payload.key = response.body.name;
        //? commit("updateProductList", payload);

         console.log(response);

        //  alıştış bakiye bilgilerini güncelleyelim

        //? let tradeResult = {
        //   purchase: payload.price,
        //   count: payload.count,
        //   sale: 0.0
        // };

        //? dispatch("setTradeResult", tradeResult);
        //? router.replace("/");
      });
  },
  sellProduct({ comit, state,dispatch }, payload) {
    // patch -arry pass by reference- pass by value..

    let product = state.products.filter(el => {
      return el.key == payload.key;
    });
    // console.log("count işlemleri", product);

    if (product) {
      let totalCount = product[0].count - payload.count;
      //Updating Data
      // console.log(totalCount,product[0].count,payload.count);


      //  const token =localStorage.getItem("Token"); // Firebase'tan token alma
      // // console.log("tokennn",token)
      //  const headers = { Authorization: `Bearer ${token}` }; // Başlıkta token'ı ekleyin
  


      axios
        .patch(
          " https://beta-000-49f5e-default-rtdb.firebaseio.com/products/" +
            payload.key +
            ".json",
          { count: totalCount } 
        )
        .then(res => {
          // console.log(res);
          // verileri anlık güncellemek için
          product[0].count = totalCount;

          //satış bakiye bilgisi güncelleme 
          let tradeResult = {
            purchase: 0,
            count: payload.count,
            sale: product[0].price,
          };
          dispatch("setTradeResult", tradeResult);
          router.replace("/");

        });
    }

    //
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
