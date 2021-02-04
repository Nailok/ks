import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HelloWorld.vue'
import Login from './components/Authorization.vue'
import Register from './components/Registration.vue'
import p404 from './components/p404.vue'
// import ChangeStats from './components/ChangeStats.vue'


Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/p404',
            name: 'p404',
            component: p404
        },
        // {
        //     path: '/change_stats',
        //     name: 'change_stats',
        //     component: ChangeStats,
        // }
    ]
})

export default router