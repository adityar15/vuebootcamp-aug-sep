

const state = {
    user: {},

  }

  const mutations ={
    setUser(state, payload){
      state.user = payload
    },
   
  }

  const actions = {
   
  }

  const getters = {
      getUser(state){
        return state.user
      },

  }

  export default{
      namespaced: true,
      state: state,
      mutations: mutations,
      actions: actions,
      getters: getters
  }