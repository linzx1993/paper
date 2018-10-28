import Vue from "vue";
import App from "./App.vue";

import router from './router/index.js'
import { Collapse, CollapseItem,Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
import $ from 'jquery';
window.$ = $;

Vue.component(Dropdown.name, Dropdown );
Vue.component(DropdownMenu.name, DropdownMenu );
Vue.component(DropdownItem.name, DropdownItem );
Vue.component(Collapse.name, Collapse );
Vue.component(CollapseItem.name, CollapseItem );

import xfHeader from '@/components/common/xfHeader/xfHeader.vue';
import companyHeader from '@/components/views/company/companyHeader/companyHeader.vue';
import newsHeader from '@/components/views/news/newsHeader/newsHeader.vue';

Vue.component(xfHeader.name, xfHeader );
Vue.component(companyHeader.name, companyHeader );
Vue.component(newsHeader.name, newsHeader );

Vue.config.productionTip = false;
//css
import '@/styles/common.scss'
import '@/styles/swiper.min.css'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/animation.css'
import '@/assets/icons/iconfont.css'

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
