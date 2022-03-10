import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      form: {},
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
  },
});

// Install the store instance as a plugin
export default store