// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routers'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
    /* eslint-disable no-new */
    //自定义指令
    // Vue.directive('rainbow', {
    //     bind(el, binding, vnode) {
    //         el.style.color = '#' + Math.random().toString(16).slice(2, 8);
    //     }
    // })
Vue.directive('theme', {
        bind(el, binding, vnode) {
            if (binding.value == 'wide') {
                el.style.maxWidth = '1260px'
            }
            if (binding.arg == 'column') {
                el.style.background = '#132456'
            }
        }
    })
    //过滤器
    // Vue.filter('to-uppercase', function(value) {
    //     return value.toUpperCase()
    // })
Vue.filter('snippet', function(value) {
        return value.slice(0, 200).concat('...')
    })
    //创建路由
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router: router
})