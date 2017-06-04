/**
 * Created by linzx on 2017/6/4.
 */

Vue.component('test', {
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
var vm = new Vue({
    el : "#app",
    data (){
        return {
            "index" : "123"
        }
    }
});