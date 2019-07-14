import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import router from './router';
import { stat } from 'fs';

Vue.use(Vuex)

const api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Demo/'
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
    setComments(state, data = []) {
      state.bugComments = data
      console.log('setcomments output, data, state', data, state)
    },
    setBug(state, data) {
      state.bug = data
      console.log('bug Obj in setBug', state.bug)
    }
  },
  actions: {
    getBugs({ commit, dispatch }, data) {
      api.get("Bugs/")
        .then(res => {
          commit('setBugs', res.data.results)
          console.log(res)
        })
        .catch(re => {
          console.error(re)
        })
    },
    getDetailedView({ commit, dispatch }, id) {
      router.push({ name: 'detailed', params: { id: id } })
    },
    getBugById({ commit, dispatch }, id) {
      api.get("Bugs/" + id)
        .then(res => {
          commit('setBug', res.data.results)
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      // console.log("Bugs/" + id)
    },
    getComments({ commit, dispatch }, id) {
      api.get("Bugs/" + id + "/notes")
        .then(res => {
          commit('setComments', res.data.results)
          console.log('getComments', res)
        })
        .catch(err => {
          console.error(err)
        })
    },
    reportBug({ commit, dispatch }, data) {
      api.post('Bugs/', data)
        .then(res => {
          dispatch('getBugs')
        })
        .catch(err => {
          console.log(err)
        })
    },
    postComment({ commit, dispatch }, data) {
      api.post('Bugs/' + data.id + "/notes", data.data)
        .then(res => {
          dispatch('getComments', data.id)
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBug({ commit, dispatch }, id) {
      api.delete("Bugs/" + id)
        .then(res => {
          dispatch('getBugs')
        })
        .catch(err => {
          console.error(err)
        })
    },
    deleteComment({ commit, dispatch }, id) {
      api.delete("Bugs/" + id.id + "/notes" + "/" + id.cid)
        .then(res => {
          dispatch('getComments', id.id)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
