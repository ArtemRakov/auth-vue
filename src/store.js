import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    }
  },
  actions: {
    signup({ commit }, authData) {
      axios.post('/signupNewUser?key=AIzaSyCBkrJZ9H9cDhsxAsQH1c-MJvXHt6kvnBE', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
    },
    login({ commit }, authData) {
      axios.post('/verifyPassword?key=AIzaSyCBkrJZ9H9cDhsxAsQH1c-MJvXHt6kvnBE', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
    }
  },
  getters: {

  }
})