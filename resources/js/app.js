require('./bootstrap');

window.Vue = require('vue')

import Vue from 'vue'

import Mainapp from './components/mainapp'

import router from './router'

const app = new Vue({
    el: '#app',
    router,
    components: { Mainapp },
})
