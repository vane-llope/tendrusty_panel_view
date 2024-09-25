import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    User: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
  },
  getters: {
    loggedIn(state)
    {
      return !!state.User;
    }
  },
  mutations: {
    async SET_USER_DATA(state, user)
    {
      state.User = user;
      localStorage.setItem('user', JSON.stringify(user));
      //axios.defaults.headers.common['Authorization'] = user.value.token;
    },
    CLEAR_USER_DATA(state)
    {
      state.User = null;
      localStorage.removeItem('user');
      delete axios.defaults.headers.common['Authorization'];
    }
  },
  actions: {
    Logout({ commit })
    {
      commit('CLEAR_USER_DATA');
    }
  },
  modules: {}
});
