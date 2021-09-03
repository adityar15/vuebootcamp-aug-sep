import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      layout:'Default'
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta:{
      layout:'Default'
    }
  },
  {
    path: '/browse',
    name: 'Browse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browse" */ '../views/Browse.vue'),
    meta:{
      layout:'Authenticated',
      authenticated: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from)=>{
  if(to.meta.authenticated)
  {
    if(!localStorage.getItem('_token'))
    {
      return '/'
    }
  }
  console.log("Router", to)
  console.log("from", from)
})

export default router
