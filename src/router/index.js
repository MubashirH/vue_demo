import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/about'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})