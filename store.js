import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      form: {
        name: '',
        zipcode: '',
        address: '',
        state: '',
        city: '',
        doubts: '',
      },
    };
  },
  mutations: {
    updateForm(state, value) {
      for (let i = 0; i < Object.keys(value).length; i++) {
        state.form[Object.keys(value)[i]] = value[Object.keys(value)[i]]
      }
      console.log(state.form)
    },
  },
  actions: {
    updateForm({commit}, objectValue) {
      commit('updateForm', objectValue)
    },
    getCep({state}) {
      return axios.get(`https://viacep.com.br/ws/${state.form.zipcode}/json/`)
    }
  },
});

// Install the store instance as a plugin
export default store