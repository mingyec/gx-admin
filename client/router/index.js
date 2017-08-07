import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import UserManager from '@/components/UserManager'
import NewAccount from '@/components/NewAccount'
import Company from '@/components/CompanyManager'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/index',
        name: 'Index',
        component: Index,
        children: [{
            path: 'user_manager',
            component: UserManager
        }, {
            path: 'new_account',
            component: NewAccount
        }, {
            path: 'company',
            component: Company
        }]
    }]
})