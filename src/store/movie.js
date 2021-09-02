import axios from 'axios'

const state = {
    latestMovie: {},
    popularMovies: {}
  }

  const mutations ={
    setLatestMovie(state, payload){
      state.latestMovie = payload
    },
    setPopularMovie(state, payload){
        state.popularMovies = payload
      }
  }

  const actions = {
    loadLatestMovie({commit}){
      axios.get(`${process.env.VUE_APP_BASE_URL}/movie/latest?api_key=${process.env.VUE_APP_API_KEY}`).then(res=>{
       
        commit('setLatestMovie',res.data)
      })
    },
    loadPopularMovie({commit}){
        axios.get(`${process.env.VUE_APP_BASE_URL}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}`).then(res=>{
       
            commit('setPopularMovie',res.data)
          })
    }
  }

  const getters = {
      getLatestMovie(state){
        return state.latestMovie
      },
      getPopularMovies(state){
        return state.popularMovies
      }
  }

  export default{
      namespaced: true,
      state: state,
      mutations: mutations,
      actions: actions,
      getters: getters
  }