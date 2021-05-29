import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
// import Error from '../components/Error'

Vue.use(VueRouter)

export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ],
})
