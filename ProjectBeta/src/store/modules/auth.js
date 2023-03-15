import Vue from "vue";
import { router } from "../../router";
import axios from "axios";

const state = {
  users: [],
  apiKey: "AIzaSyAWzj8V82J22cIfv8JCaFtuNmzqqpWYkXg",
  token: ""
};

const getters = {
  isAuthenticated(state) {
    return state.token !== "";
  }
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken() {
    state.token = "";
  },
  setUser(state, form) {
    state.users = form;
  },
  setLocalStorage(state) {
    localStorage.setItem("Token", state.token);
  }
};
const actions = {
  //vuexContext = dispatch, commit, state

  isAuth({ dispatch, commit, state }) {
    let token = localStorage.getItem("Token");
    if (token) {
      commit("setToken", token);
      router.push("/");
    } else {
      router.push("/auth");
    }
  },
  login({ commit, state, dispatch }, authData) {
    let authLink;
    if (authData.isUser) {
      //login-true
      authLink =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= " +
        state.apiKey;
      return axios
        .post(authLink, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res.data);
          commit("setToken", res.data.idToken);
          commit("setLocalStorage", res.data.idToken);
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
          commit("setToken", res.data.idToken);
          commit("setUser", authData);
          commit("setLocalStorage", res.data.idToken);
          // user işlemlerinide yap user firebase yaz
          // user localID ile giriş yapıldıgında çek
        });
    }
  },
  logout({ commit, dispatch, state }) {
    commit("clearToken");
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
