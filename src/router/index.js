import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'HelloWorld',
      component: () => import('@/components/headCommon'), /*懒加载路由 防止路由过多页面加载慢*/
      redirect:"/index",
      children: [
        {
          path: '/navL',
          //name: 'HelloWorld',
          component: () => import('@/components/nav'),/*懒加载路由 防止路由过多页面加载慢*/
          meta: {
            title: '导航栏目'
          }
        },
        {
          path: '/index',
          //name: 'HelloWorld',
          component: () => import('@/components/index'),/*懒加载路由 防止路由过多页面加载慢*/
          meta: {
            title: '登陆'
          }
        },
        {
          path: '/weather',
          //name: 'HelloWorld',
          component: () => import('@/components/weather'),/*懒加载路由 防止路由过多页面加载慢*/
          meta: {
            title: '天气查询'
          }
        },
        {
          path: '/listenSong',
          //name: 'HelloWorld',
          component: () => import('@/components/listenSong'),/*懒加载路由 防止路由过多页面加载慢*/
          meta: {
            title: '音悦台'
          }
        },
      ]
    }

  ]
})
