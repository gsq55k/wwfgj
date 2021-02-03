import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'


Vue.use(VueRouter)


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//当重复点击跳转到同一个路由时 会报错，但是不影响
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


export default router
