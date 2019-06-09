import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/MichaelJackson/Bugs'
})




export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {},
    bugComments: []
  },
  mutations: {
    setBugs(state, data = []) {
      state.bugs = data
    },
    setBug(state, data = []) {
      state.bugs = data
    }
  },
  actions: {
    getBugs({ commit, dispatch }, data) {
      api.get("")
        .then(res => {
          commit('setBugs', res.data.results)
          console.log(res)
        })
        .catch(re => {
          console.error(re)
        })
    },
    getBugById({ commit, dispatch }, id) {
      api.get(id)
        .then(res => {
          commit('setBug', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    reportBug({ commit, dispatch }, data) {
      api.post('', data)
        .then(res => {
          dispatch('getBugs')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBug({ commit, dispatch }, id) {
      api.delete(id)
        .then(res => {
          dispatch('getBugs')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
