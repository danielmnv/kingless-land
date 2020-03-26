import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Activity from '../views/Dashboard/Activity.vue'
import Favorites from '../views/Dashboard/Favorites.vue'
import Library from '../views/Dashboard/Library.vue'
import Settings from '../views/Dashboard/Settings.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'Activity',
                component: Activity
            },
            {
                path: 'favorites',
                name: 'Favorites',
                component: Favorites
            },
            {
                path: 'games',
                name: 'Library',
                component: Library
            },
            {
                path: 'settings',
                name: 'Settings',
                component: Settings
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
