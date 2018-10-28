/**
 * Created by linzx on 2018/10/21.
 */
'use strict';
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

function load (url) {
    return () => import(`@/components/${url}`)
}

import index from '@/components/index.vue'
import aboutCompany from '@/components/views/company/aboutCompany/aboutCompany.vue'
import companyHistory from '@/components/views/company/companyHistory/companyHistory.vue'
import recruitment from '@/components/views/company/recruitment/recruitment.vue'
import companyCulture from '@/components/views/company/companyCulture/companyCulture.vue'
import contactUs from '@/components/views/company/contactUs/contactUs.vue'

const routes = [
    { path: '/', component: load('index.vue') },
    { path: '/index', component: load('index.vue') },
    { path: '/aboutCompany', component: aboutCompany },
    { path: '/companyHistory', component: companyHistory },
    { path: '/recruitment', component: recruitment },
    { path: '/companyCulture', component: companyCulture },
    { path: '/contactUs', component: contactUs },

    { path: '/companyNews', component: load('views/news/companyNews/companyNews.vue') },

]

const router = new VueRouter({
    routes
});

export default router;