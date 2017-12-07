import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import UploadPhoto from '@/components/UploadPhoto'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/upload',
          name: 'UploadPhoto',
          component: UploadPhoto
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
