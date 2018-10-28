<template>
    <div class="company-news">
        <news-header></news-header>
        <div class="text-center">
            <div class="category">
                <a  class="category-tab active" href="javascript:void (0);">公司新闻</a>
                <a  class="category-tab" href="javascript:void (0);">行业动态</a>
            </div>
        </div>
        <div class="company-new-list clearfix wrap">
            <router-link class="company-new-link animated"
                         ref="news"
                         to="/newDetail"
                         v-for="news in newsList"
            >
                <img class="link-img" :src="news.img" alt="">
                <span class="link-time">{{news.time}}</span>
                <h3 class="link-title">{{news.title}}</h3>
                <div class="line"></div>
                <p class="link-p">{{news.content}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
'use strict'
export default {
    name : 'companyNews',
    data(){
        return {
            newsList: [
                {
                    img: require('@/components/views/news/companyNews/init.jpg'),
                    time: '2009-06-07',
                    content: '于今日，浙江龙游翔飞公司的第一批开创者，来到了这片荒芜的土地上，前路茫茫，却将百折不挠的走下去',
                    title: '问苍茫大地，谁主沉浮'
                },
                {
                    img: require('./shanghui.jpg'),
                    time: '2010-06-07',
                    content: '公司第一届表彰大会，为翔飞未来的成功继续努力',
                    title: '公司表彰大会，谁主沉浮'
                },
                {
                    img: require('./touzi.jpg'),
                    time: '2009-06-07',
                    content: '于今日，浙江龙游翔飞公司的第一批开创者，来到了这片荒芜的土地上，前路茫茫，却将百折不挠的走下去',
                    title: '问苍茫大地，谁主沉浮'
                },
                {
                    img: require('./big.jpg'),
                    time: '2009-06-07',
                    content: '于今日，浙江龙游翔飞公司的第一批开创者，来到了这片荒芜的土地上，前路茫茫，却将百折不挠的走下去',
                    title: '问苍茫大地，谁主沉浮'
                },
            ]
        }
    },
    mounted(){
        this.$nextTick(function () {
            this.$refs.news.forEach((node, index) => {
                let time = 200* index
                console.log(time)
                setTimeout(function () {
                    node.$el.classList.add("active")
                }, time)

            })
        })
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
    @-webkit-keyframes fadeInUp100 {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100px, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: none;
        }
    }
    .company-news{
        .category{
            margin: 80px auto 0;
            display: inline-block;
            overflow: hidden;
            border-radius: 25px;
            border: 1px solid #ccc;
        }
        .category-tab{
            float: left;
            width: 200px;
            line-height: 48px;
            background: #f5f5f5;
            color: #333;
            text-align: center;
            font-size: 16px;
            &.active{
                background: url(./bg-page-category.jpg) no-repeat;
                font-weight: bold;
                color: #fff;
            }
        }

        .company-new-link{
            float: left;
            width: 380px;
            height: 425px;
            margin: 0 30px 60px 0;
            padding: 28px 25px 0;
            box-sizing: border-box;
            transition: all .5s;
            opacity: 0;
            &.active{
                animation-name: fadeInUp100;
                /*animation: fadeUpIn100 .5s;*/
                /*transition: all .5s;*/
                /*opacity: 1;*/
            }
            &:nth-child(3n) {
                margin-right: 0;
            }

            .link-img{
                position: relative;
                overflow: hidden;
                width: 100%;
                height: 165px;
            }

            .link-time{
                display: block;
                line-height: 15px;
                margin-top: 30px;
                font-size: 14px;
                color: #999;
            }

            .link-title{
                margin-top: 10px;
                padding-left: 10px;
                line-height: 20px;
                text-align: left;
                overflow: hidden;
                border-left: 4px solid #0a70c6;
                font-size: 16px;
                color: #333;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .line{
                position: relative;
                margin-top: 30px;
                border-bottom: 1px solid #999;

                &:before{
                    content: "";
                    position: absolute;
                    left: 50px;
                    border: 6px solid transparent;
                    border-top: 5px solid #999;
                }

                &:after{
                    content: "";
                    position: absolute;
                    left: 51px;
                    border: 5px solid transparent;
                    border-top: 4px solid #fafafa;
                }
            }
            .link-p{
                display: -webkit-box;
                line-height: 30px;
                margin-top: 10px;
                font-size: 14px;
                color: #999;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                height: 60px;
            }
        }
    }
</style>
