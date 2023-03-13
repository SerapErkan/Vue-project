import Vue from "vue";
import { router } from "../../router";
import axios from "axios";

const state = {
  users: [],
  apiKey: "AIzaSyAWzj8V82J22cIfv8JCaFtuNmzqqpWYkXg",
  token:""
};

const getters = {
 getCounter(){

 }
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken() {
    state.token = " ";
  },
  setUser(state, form) {
    state.users = form;
  }
};
const actions = {
  //vuexContext

  login({commit, state ,dispatch }, authData) {

    let authLink
    if (authData.isUser) {
      //login-true
     authLink ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= "+
        state.apiKey;
      return axios
        .post(authLink, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res.data);
          commit("setToken",res.data.idToken);

        });
    } else {
      authLink =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        state.apiKey;
      return axios
        .post(authLink, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: authData.true
        })
        .then(res => {
          console.log(res.data);
          commit("setToken",res.data.idToken);
          commit("setUser",authData);

        });
    }




  },
  logout({commit,dispatch,state}) {}
};


export default {
  state,
  mutations,
  actions,
  getters
};
