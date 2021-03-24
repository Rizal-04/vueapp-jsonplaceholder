import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/landing'

Vue.use(VueRouter)

const routes = [];

function configRouters(){
  return [
    {
      path: "/landing",
      name: "landing",
      component: Landing 
    }
  ]
}

const router = new VueRouter({
  mode: 'history',
  routes : configRouters(),
  scrollBehavior:() => ({y:0})
});



export default router