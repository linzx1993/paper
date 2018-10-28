<template>
    <div class="xf-nav">
		<div class="wraper">
			<ul>
				<li>
					<router-link to="/company">首页</router-link>
					<div></div>
				</li>
				<li>
					<router-link to="/company" class="icon item-1">关于公司</router-link>
					<div class="subnav nav-about-company">
						<h2 class="icon nav-about-company-title">关于公司</h2>
						<div class="box">
							<router-link class="item icon item-1" to="/aboutCompany">企业简介</router-link>
							<router-link class="item icon item-2" to="/companyHistory">发展历程</router-link>
							<router-link class="item icon item-3" to="/companyCulture">企业文化</router-link>
							<router-link class="item icon item-4" to="/recruitment">人才招聘</router-link>
							<router-link class="item icon item-5" to="/contactUs">联系我们</router-link>
						</div>
					</div>
				</li>
				<li>
					<router-link to="/product">产品</router-link>
					<div></div>
				</li>
				<li>
					<router-link to="/news">新闻资讯</router-link>
					<div></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
'use strict'
export default {
    name : 'xfNav'
}
</script>
<style rel="stylesheet/scss" lang="scss" scope>
	.xf-nav{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 50;
		width: 80px;
		height: 100%;
		box-shadow: 2px 0 5px rgba(0, 0, 0, .2);

		.wraper{
			position: relative;
			z-index: 3;
			height: 100%;
			padding: 18px 0;
			background: #f2f2f2;
		}

		li>a{
			position: relative;
			display: block;
			line-height: 16px;
			margin-bottom: 10px;
			overflow: hidden;
			color: #606872;
			text-align: center;
			padding: 15px 0;
			&:before{
				content: "";
				display: block;
				width: 30px;
				height: 30px;
				margin: 0 auto;
			}
			&.item-1:before{
				background-position: -310px -10px;
			}
		}
	}

	.subnav{
		position: absolute;
		top: 0;
		left: 80px;
		z-index: 2;
		width: 320px;
		height: 100%;
		background: #333;
		-webkit-transition: all .6s;
		transition: all .6s;
		&.active{
			left: 80px;
		}
	}
	.nav-about-company-title{
		line-height: 25px;
		margin: 40px 0 0 24px;
		font-weight: bold;
		font-size: 18px;
		color: #fff;

		&:before{
			display: inline-block;
			width: 25px;
			height: 25px;
			margin-right: 10px;
			vertical-align: -7px;
			background-position: -13px -863px;
		}
	}

	.nav-about-company .item{
		position: relative;
		display: -webkit-box;
		box-sizing: border-box;
		float: left;
		margin: 0 2px 2px 0;
		padding: 60px 5px 0 5px;
		width: 105px;
		height: 105px;
		color: #aaa;
		line-height: 19px;
		overflow: hidden;
		background: #2c2c2c;
		text-align: center;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		&:nth-child(3n) {
			margin-right: 0;
		}

		&.item:before{
			content: "";
			position: absolute;
			width: 36px;
			height: 36px;
			top: 20px;
			left: 50%;
			margin-left: -18px;
		}
		&.item-1:before{
			background-position: -8px -857px;
		}
		&.item-2:before{
			background-position: -58px -857px;
		}
		&.item-3:before{
			background-position: -158px -857px;
		}
		&.item-4:before{
			background-position: -208px -857px;
		}
		&.item-5:before{
			background-position: -308px -857px;
		}
	}
</style>
