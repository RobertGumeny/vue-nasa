import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let _apiApod = axios.create({
  baseURL:
    "https://api.nasa.gov/planetary/apod?api_key=K2V52KlgPBkNAq893AgzPHNPR8ZG2Lkeb5iW9DbH",
  timeout: 3000,
});

export default new Vuex.Store({
  state: {
    apod: [],
    epic: [],
  },
  mutations: {
    setApod(state, apod) {
      state.apod = apod;
    },
  },
  actions: {
    async getApod({ commit, dispatch }) {
      try {
        let res = await _apiApod.get("");
        commit("setApod", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
