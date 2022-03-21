import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/index/Tpl.vue'], resolve)
        }
    },
    {
		path: '/jisuan',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/jisuan/Tpl.vue'], resolve)
        }
    },
    {
		path: '/message',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/message/Tpl.vue'], resolve)
        },
        beforeEnter: (to, from, next) => {
            console.log(to)
            console.log(from)
            return
        },
        beforeLeave: (to, from, next) => {
            console.log(111) 
        }
    },
    {
		path: '/register',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/register/Tpl.vue'], resolve)
        }
    },
    {
		path: '/login',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/login/Tpl.vue'], resolve)
        }
    },
    {
		path: '/roomList',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/roomList/Tpl.vue'], resolve)
        }
    },
    {
		path: '/phone',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/phone/Tpl.vue'], resolve)
        }
    },
    {
		path: '/getBuffer',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/getBuffer/Tpl.vue'], resolve)
        }
    },
    {
        path: '/game',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/game/Tpl.vue'], resolve)
        }
    },
    {
        path: '/readme',
        name: '',
        component: (resolve) => {
            require(['@/view/vue/readme/Tpl.vue'], resolve)
        }
    }
    
  ]
})

