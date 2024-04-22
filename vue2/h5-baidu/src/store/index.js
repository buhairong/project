import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countrySummary: null,
    countryPowers: null,
  },
  mutations: {
    setCountrySummary(state, countrySummary) {
      state.countrySummary = countrySummary
    },

    setCountryPowers(state, countryPowers) {
      state.countryPowers = countryPowers
    },
  },
  actions: {
  },
  modules: {}
})
