import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import UploadPhoto from '@/components/UploadPhoto'
import Login from '@/components/Login'
import PhotoContent from '@/components/PhotoContent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        {
          path: '',
          name: 'PhotoContent',
          component: PhotoContent
        },
        {
          path: '/upload',
          name: 'UploadPhoto',
          component: UploadPhoto,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem('accesstoken')) {
              next()
            } else {
              next('/login')
            }
          }
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
