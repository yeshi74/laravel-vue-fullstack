import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage'
import secondPage from './components/pages/secondRoute'

const routes = [
    {
        path: '/my-new-vue-route',
        component: firstPage
    },
    {
        path: '/secondRoute',
        component: secondPage
    }
]

export default new Router ({
    mode: 'history',
    routes
})
