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
    bugComments: [],
    pageContent: 4
  },
  mutations: {
    setBugs(state, data = []) {
      state.bugs = data
    },
    setBug(state, data = []) {
      state.bugs = data
    },
    setPageContent(state, data) {
      state.pageContent = data
    }
  },
  actions: {

    paginate({ commit, dispatch }, data) {
      let listLength = $('#bug-list-group .loop-this').length;
      let limitPerPage = 4;
      let itemsHide = $("#bug-list-group .loop-this:gt(" + (limitPerPage - 1) + ")")
      alert($('#bug-list-group .loop-this').length);
      itemsHide.hide();
    },

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
