/**
 * Created by linzx on 2017/6/4.
 */

Vue.component('headerItem', {
    template: `<header class="header">
    <div class="wrap header-wrap">
        <a class="fl logo" href="">
            <img class="wqd-img" :data-src="this.index" src="assert/images/logo.png">
        </a>
        <nav class="fr header-nav">
            <ul class="">
                <li class="fl header-nav-li active"><a href="./index.html">首页</a></li>
                <li class="fl header-nav-li"><a href="view/aboutUs/company.html">关于我们</a></li>
                <li class="fl header-nav-li"><a href="view/news/news.html">新闻资讯</a></li>
                <li class="fl header-nav-li"><a href="view/product/product-introduce.html">产品介绍</a></li>
            </ul>
        </nav>
    </div>
</header>`
});
Vue.component('footerItem', {
    template: `<footer class="footer">
        <div class="wrap clearfix">
            <section class="fl concat-way">
                <h6>联系我们</h6>
                <span>公司地址 ： 浙江省衢州市龙游县翔飞有限公司地址</span>
                <span>联系电话 ： 150-6874-6735</span>
                <span>我要合作 ： 150-6874-6735</span>
            </section>
            <section class="fl ml-60 footer-middle">
                <h6>您的成功梦想需要一包非同凡响的纸巾</h6>
                <p>韧-柔软与结实的出色演绎，纸巾要做到既柔软又结实并不容易，而翔飞产品永远在“韧”上追求卓越表现。全新韧性升级的翔飞超韧系列，精选进口优质原生木浆，超韧3层、湿水不易破，连金鱼也能轻松兜住！</p>
            </section>
            <section class="fl footer-middle ml-60">
                <h6>雕琢每一个面向用户的细节</h6>
                <p>时尚、高雅的蓝色主调配合象征幸福的动感立体扶郎花，运用全新翔飞品牌区，韧性品质给你带来前所未有的高端享受。</p>
            </section>
        </div>
        <p class="tc mt-20">龙游翔飞有限公司   Copyright 2012-2015 浙ICP10204942号</p>
    </footer>`
});
var vm = new Vue({
    el : "#app",
    data (){
        return {
            "index" : "123"
        }
    }
});