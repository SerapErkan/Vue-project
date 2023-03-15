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
  }
};
const actions = {
  //vuexContext = dispatch, commit, state

  isAuth({ dispatch, commit, state }) {
    let token = localStorage.getItem("Token");
    let currentPath ="";
    if (token) {
      //token varmı expiresIn geçerlimi
      let expires = localStorage.getItem("ExpiresIn");
      let time = new Date().getTime();
     
      if (time >= +expires) {
        console.log("Geçersiz Token");
        // dispatch("logout");
      } else {
        commit("setToken", token);
        // timer kaldıgı yerden saymaya devam etmeli 
        dispatch("expiresInTimer", +expires-time);

        currentPath = router.history.current.path;
        if (currentPath !== "/") {
          router.push("/");
        }
      }

    } 
    else {
      currentPath = router.history.current.path;
      if (currentPath !== "/auth") {
        router.push("/auth");
      }
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
          console.log("data",res.data);
          commit("setToken", res.data.idToken);

          // localStorage
          localStorage.setItem("Token", res.data.idToken);
          // token dolma süresi time + expiresIn 
          localStorage.setItem("ExpiresIn",new Date().getTime()+ +res.data.expiresIn*1000 );
          dispatch("expiresInTimer", +res.data.expiresIn*1000);

          // // ---deneme
          // localStorage.setItem("ExpiresIn",new Date().getTime() + 10000 );
          // dispatch("expiresInTimer", +10000); 

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
          console.log("data", res.data);
          commit("setToken", res.data.idToken);

          //  localStorage
          localStorage.setItem("Token",res.data.token);
          localStorage.setItem("ExpiresIn",new Date().getTime()+ +res.data.expiresIn*1000);
          dispatch("expiresInTimer", +res.data.expiresIn*1000);
          // user işlemleri
          // user localID 
        });
    }
  },
  logout({ commit }) {
    commit("clearToken");
    localStorage.removeItem("Token");
    localStorage.removeItem("ExpiresIn");
    const currentPath = router.history.current.path;
    if (currentPath !== "/") {
      router.replace("/");
    }
  },
  expiresInTimer({ dispatch }, expiresIn) {
    setTimeout(() => {
      //süre doldugunda token silinmeli
      // token varsa hala geçerlimi bakmamızlazım
      // token gibi expiresIn de suanki time  token süresini ekleyelim
      // ve o süreyi geçmişse token silme yapalım 
      // expire olacagı süreyi localstorage de tutalım

      dispatch("logout");
    }, expiresIn);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
