import router from '../router/index'
import store from '../store/index'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
    store.state.title=to.meta.title
  }
  next()
})
