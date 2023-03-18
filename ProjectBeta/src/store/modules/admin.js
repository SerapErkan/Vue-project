import axios from "axios";
import Vue from "vue";
import { router } from "../../router";

const state = {
  purchase: 0.0,
  sale: 0.0,
  blance: 0.0
};

const getters = {
  getTradeResult(state) {
    return {
      purchase: state.purchase,
      sale: state.sale,
      blance: state.blance
    };
  }
};
const mutations = {
  updateTradeResult(state, payload) {
    if (payload.count) {
      state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
      state.sale += parseFloat(payload.sale) * parseInt(payload.count);
    } else {
      state.purchase += parseFloat(payload.purchase);
      state.sale += parseFloat(payload.sale);
    }

    state.blance = parseFloat(state.sale) - parseFloat(state.purchase);
  }
};
const actions = {
  setTradeResult({ commit, state }, tradeResult) {
    //  güncelleme için
    commit("updateTradeResult", tradeResult);
    // sonuçları firebase yazdırmak için
    // var olan kayıdın üzerine yazması için

    let tradeData = {
      purchase: state.purchase,
      sale: state.sale
    };



    axios
      .put(
        "https://https://projectbeta-001-default-rtdb.firebaseio.com/trade-result.json",
        tradeData,headers
      )
      .then(response => {
        console.log(response);
      });
  },
  getTradeResult({ commit }) {
    // firebase baglan state güncelle

    axios
      .get(
        " https://beta-000-49f5e-default-rtdb.firebaseio.com/trade-result.json"
      )
      .then(response => {
        commit("updateTradeResult", response.body);
      });
  }
};
export default {
    state,
    getters,
    mutations,
    actions
  };