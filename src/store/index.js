import { createStore } from 'vuex'

export default createStore({
  state: {
    User: JSON.parse(localStorage.getItem('user')) || []
  },
  getters: {
    loggedIn(state)
    {
      console.log("vuex : " + !!state.User)
      return !!state.User
    }
  },
  mutations: {
    async SET_USER_DATA(state, user)
    {
      state.User = user.value
      localStorage.setItem('user', JSON.stringify(user.value))
      axios.defaults.headers.common['Authorization'] = user.value.token
    },
    CLEAR_USER_DATA(state)
    {
      state.User = null;
      localStorage.removeItem('user');
      axios.defaults.headers.common['Authorization'] = null
    }

  },
  actions: {
    Logout({ commit })
    {
      commit('CLEAR_USER_DATA');
    }
  },
  modules: {
  }
})
