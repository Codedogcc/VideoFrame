import VueRouter from "vue-router"
import HomePage from '../components/HomePage'
const router = new VueRouter({
  routes: [
    //配置路由的路径
    {
      path: '/',
      component: HomePage
    }
  ]
})
export default router;