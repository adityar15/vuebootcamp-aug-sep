import { createStore } from 'vuex'
import movie from './movie'
import user from './user'
export default createStore({
 
  modules: {
    movie,
    user
  }
})
