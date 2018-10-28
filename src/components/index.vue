<template>
	<div>
		<header class="index-header">
			<div class="header-wrap">
				<router-link class="logo" to="/index">
					<img src="@/assets/images/logo.png">
				</router-link>
				<nav class="header-nav">
					<ul class="clearfix">
						<li class="fl"><router-link class="index-header-link" to="/index">首&nbsp;&nbsp;页</router-link></li>
						<li class="fl"><router-link class="index-header-link" to="/product">产品介绍</router-link></li>
						<li class="fl">
							<el-dropdown class="d-block">
							  	<div class="el-dropdown-link tc ">
									<router-link class="index-header-link" to="/aboutCompany">关于翔飞<i class="el-icon-arrow-down el-icon--right"></i></router-link>
							  	</div>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item><router-link class="header-link" to="/aboutCompany">企业简介</router-link></el-dropdown-item>
									<el-dropdown-item><router-link class="header-link" to="/companyHistory">发展历史</router-link></el-dropdown-item>
									<el-dropdown-item><router-link class="header-link" to="/companyCulture">企业文化</router-link></el-dropdown-item>
									<el-dropdown-item><router-link class="header-link" to="/recruitment">人才招聘</router-link></el-dropdown-item>
									<el-dropdown-item><router-link class="header-link" to="/contactUs">联系我们</router-link></el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</li>
						<li class="fl">
							<el-dropdown class="d-block">
								<div class="el-dropdown-link tc ">
									<router-link class="index-header-link" to="/news">新闻资讯<i class="el-icon-arrow-down el-icon--right"></i></router-link>
								</div>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item><router-link class="header-link" to="/aboutCompany">公司新闻</router-link></el-dropdown-item>
									<el-dropdown-item><router-link class="header-link" to="/companyHistory">行业动态</router-link></el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						<li class="fl"><router-link class="index-header-link" to="/recruitment">人才招聘</router-link></li>
					</ul>
				</nav>
				<el-dropdown class="select-language">
					<div class="el-dropdown-link tc ">
						<a href="javascript:void(0)" class="iconfont icon-language">语言选择</a>
					</div>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>中文</el-dropdown-item>
						<el-dropdown-item>english</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</header>
		<section class="index-banner">
			<div class="swiper-container">
				<div class="wrap banner-wrap swiper-wrapper">
					<div class="swiper-slide">
						<!--<h3 class="banner-title">您的问题，我们帮您一站搞定</h3>-->
						<!--<p class="banner-text">20多家世界五百强客户，成熟的客户督促我们成长。<br/>以全情的投入，达成严苛的标准。</p>-->
						<img src="../assets/images/banner.jpg" alt="">
					</div>
					<div class="swiper-slide">
						<img src="../assets/images/banner-zhaopin.jpg" alt="">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>

				<!-- 如果需要导航按钮 -->
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
				<!--</div>-->
			</div>
		</section>
		<section class="wrap index-product-list mb-50">
			<div class="banner-title">
				<h3><span class="banner-title-icon"></span>品牌产品
					<a class="active" href="javascript:;">全部产品</a>
					<a href="javascript:;">生活用纸</a>
					<a href="javascript:;">女性护理</a>
				</h3>
			</div>
			<nav>
				<ul class="clearfix">
					<li class="fl">
						<img src="../assets/images/blank.gif" alt="" data-echo="assets/images/paper-product1.jpg">
						<h6 class="mb-5 mt-30">纸巾产品A</h6><p class="mt-20 mb-30">翔飞的纸巾采用A技术，A泉的自来水和B地的木头</p><a class="theme-btn" href="./view/product/product-introduce.html">了解详情</a>
					</li>
					<li class="fl">
						<img src="../assets/images/blank.gif" alt="" data-echo="assets/images/b.jpg">
						<h6 class="mb-5 mt-30">纸巾产品B</h6><p class="mt-20 mb-30">翔飞的纸巾采用A技术，A泉的自来水和B地的木头</p><a class="theme-btn" href="./view/product/product-introduce.html">了解详情</a>
					</li>
					<li class="fl">
						<img src="../assets/images/blank.gif" alt="" data-echo="assets/images/c.jpg">
						<h6 class="mb-5 mt-30">纸巾产品C</h6><p class="mt-20 mb-30">翔飞的纸巾采用A技术，A泉的自来水和B地的木头</p><a class="theme-btn" href="./view/product/product-introduce.html">了解详情</a>
					</li>
					<li class="fl">
						<img src="../assets/images/blank.gif" alt="" data-echo="assets/images/d.jpg">
						<h6 class="mb-5 mt-30">纸巾产品D</h6><p class="mt-20 mb-30">翔飞的纸巾采用A技术，A泉的自来水和B地的木头</p><a class="theme-btn" href="./view/product/product-introduce.html">了解详情</a>
					</li>
				</ul>
			</nav>
		</section>
		<section class="banner-middle">
			<img src="../assets/images/blank.gif" data-echo="assets/images/banner-middle.jpg" alt="">
		</section>
		<section class="company-section wrap clearfix">
			<div class="banner-title">
				<h3><span class="banner-title-icon company-icon" title="公司" alt="翔飞公司"></span>公司历程<a class="active" href="javascript:;">公司历程</a></h3>
			</div>
			<section class="fl mac-box">
				<div class="slide-box swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><img src="../assets/images/blank.gif" data-echo="assets/images/mac-b.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../assets/images/blank.gif" data-echo="assets/images/mac-a.jpg" alt=""></div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>

					<!-- 如果需要导航按钮 -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</section>
			<article class="fr slider-right">
				<h6 class="mb-25">30年的风雨兼程</h6>
				<p class="mb-45">灵感来自亚平宁半岛的小雏菊，如温和的地中海阳光滋养美妙的生活。全新翔飞细韧系列，精选100%优质原生木浆，纸质纯净，更采用全新3D-DECO压花工艺，细腻柔韧，亲肤无刺激，健康更安心，最适合追求健康与安全的您！</p>
				<a class="theme-btn" href="javascript:;">了解详情</a>
			</article>
		</section>
		<section class="wrap index-section recruitment-section">
			<div class="banner-title">
				<h3><span class="banner-title-icon recruitment-icon" title="公司"></span>诚聘英才<a class="active" href="javascript:void(0);">诚聘英才</a></h3>
			</div>
		</section>
	</div>
</template>

<script>
'use strict';
export default {
    name : 'index',
	mounted(){
	}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.index-header{
		position: relative;
		background-color: #fff;
		.logo{
			position: absolute;
			top: 15px;
			left: 30px;
		}
		.header-nav {
			width: 42%;
			margin: 0 auto;
			li{
				width: 20%;
			}
			.index-header-link{
				width: 100%;
				text-align: center;
				font-size: 16px;
				line-height: 80px;
			}
		}
		.select-language{
			position: absolute;
			right: 15px;
			top: 30px;
		}
	}

	@media (max-width: 1330px){
		.index-header .header {
			width: 52%;
		}
	}

	@media (max-width: 1430px){
		.index-header .header {
			width: 57%;
		}
	}

</style>
