import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    latestMovie: {}
  },
  mutations: {
    setLatestMovie(state, payload){
      state.latestMovie = payload
    }
  },
  actions: {
    loadLatestMovie({commit}){

    

      axios.get(`${process.env.VUE_APP_BASE_URL}/movie/latest?api_key=${process.env.VUE_APP_API_KEY}`).then(res=>{
        console.log(res.data)
        commit('setLatestMovie',res.data)
      })
    }
  },
  getters:{
      getLatestMovie(state){
        return state.latestMovie
      }
  },
  modules: {
  }
})
