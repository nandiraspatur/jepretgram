import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import UploadPhoto from '@/components/UploadPhoto'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
