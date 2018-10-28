<template>
	<div class="relative">
		<header  class="absolute pt-20 header" style="padding-left: 40px;">
			<router-link to="/index" class="logo fl pl-40"><img src="@/assets/images/logo1.png" alt=""></router-link>
			<span class="crumb">
			关于翔飞 <em class="ml-10 mr-10">/</em>
			<el-dropdown :hide-on-click="false" placement="bottom-start">
			  <span class="el-dropdown-link">
				企业简介<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
				<el-dropdown-item><router-link to="/companyHistory">发展历程</router-link></el-dropdown-item>
				<el-dropdown-item><router-link to="/companyCulture">企业文化</router-link></el-dropdown-item>
				<el-dropdown-item><router-link to="/contactUs">联系我们</router-link></el-dropdown-item>
				<el-dropdown-item><router-link to="/recruitment">人才招聘</router-link></el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</span>
		</header>
		<div class="company-culture">
			<div class="wrap">
				<h3 class="company-culture-title relative">
					<span class="headline cn">企业文化</span>
					<span class="en">culture</span>
				</h3>

				<ul class="flex justify-space-around" style="margin-top: 100px;">
					<li class="item item-1">
						<h3 class="icon">使命</h3>
						<p class="culture-introduce">通过为企业提供专业化、标准化和高水准的制造物联平台及解决方案，帮助广大的制造型企业快速、持续地提高管理水平、经营绩效和综合竞争力。</p>
					</li>
					<li class="item item-1">
						<h3 class="icon">使命</h3>
						<p class="culture-introduce">通过为企业提供专业化、标准化和高水准的制造物联平台及解决方案，帮助广大的制造型企业快速、持续地提高管理水平、经营绩效和综合竞争力。</p>
					</li>
					<li class="item item-1">
						<h3 class="icon">使命</h3>
						<p class="culture-introduce">通过为企业提供专业化、标准化和高水准的制造物联平台及解决方案，帮助广大的制造型企业快速、持续地提高管理水平、经营绩效和综合竞争力。</p>
					</li>
					<li class="item item-1">
						<h3 class="icon">使命</h3>
						<p class="culture-introduce">通过为企业提供专业化、标准化和高水准的制造物联平台及解决方案，帮助广大的制造型企业快速、持续地提高管理水平、经营绩效和综合竞争力。</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
'use strict'
export default {
    name : 'companyCulture'
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.company-culture{
		padding-top: 130px;
		height: 686px;
		background: url("./bg-about-culture.jpg") no-repeat center top;
		background-size: cover;

		.headline {
			position: relative;
			display: block;
			width: 280px;
			line-height: 35px;
			margin: 0 auto;
			font-weight: bold;
			font-size: 30px;
			color: #fff;
			text-align: center;
			letter-spacing: 1px;

			&:before, &:after {
				content: "";
				position: absolute;
				top: 17px;
				width: 56px;
				border-bottom: 1px dashed #fff;
			}
			&:before {  left: 0;  }
			&:after {  right: 0;  }
		}

		.en {
			display: block;
			line-height: 60px;
			margin-top: 24px;
			opacity: .2;
			font-weight: bold;
			font-size: 72px;
			color: #fff;
			text-align: center;
			text-transform: uppercase;
		}

		.item{
			width: 25%;
			padding: 0 20px;
			text-align: center;
		}

		.item h3{
			line-height: 25px;
			font-weight: bold;
			font-size: 24px;
			color: #fff;
			letter-spacing: 1px;
		}
		.item .icon:before {
			content: "";
			display: block;
			width: 62px;
			height: 62px;
			margin: 0 auto 48px;
		}
		.item-1 .icon:before {
			background-position: -19px -219px;
		}

		.culture-introduce{
			line-height: 32px;
			margin-top: 18px;
			font-size: 14px;
			color: #fff;
		}

	}
</style>
