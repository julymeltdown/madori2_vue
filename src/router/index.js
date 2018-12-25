import Vue from 'vue'
import Login from '@/components/Login'
import MyRoom from '@/components/MyRoom'
import RoomList from '@/components/RoomList'
import RoomDetail from '@/components/RoomDetail'
import RoomApply from '@/components/RoomApply'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/myRoom',
      name: 'MyRoom',
      component: MyRoom
    },
    {
      path: '/room/:memberId',
      name: 'RoomDetail',
      component: RoomDetail,
      props: true
    },
    {
      path: '/room',
      name: 'RoomList',
      component: RoomList
    },
    {
        path: '/apply/:id',
        name: 'RoomApply',
        component: RoomApply,
        props: true
    },
    {
      path: '*',
      component: {
        template: '<div>Not Found</div>'
      }
    }
  ]
})
