import Vue from 'vue'
import Vuex from 'vuex'

import load from './load'

import routerlists from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    load,
    routerlists
  },
  state: {
    siteId: 1
  },
  mutations: {

  },
  actions: {

  }
})
