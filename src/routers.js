import ShowBlogs from './components/ShowBlogs.vue'
import addblog from './components/addblog.vue'
import singleblog from './components/singleblog.vue'
export default [
    { path: '/', component: ShowBlogs },
    { path: '/add', component: addblog },
    { path: '/blog/:id', component: singleblog }
]