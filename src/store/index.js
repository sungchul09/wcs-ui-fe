import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menuStatus: true,
  },
  getters: {
    getMenuStatus(state) {
      return state.menuStatus;
    },
  },
  mutations: {
    openMenu(state) {
      state.menuStatus = true;
    },
    closeMenu(state) {
      state.menuStatus = false;
    },
  },
});
