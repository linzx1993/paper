<template>
	<div class=" company-header">
		<img src="./company-banner.jpg" alt="">
		<header  class="absolute pt-20 header" style="padding-left: 40px;">
			<h1 class="fl"><router-link to="/index" class="logo fl pl-40"><img src="@/assets/images/logo.png" alt=""></router-link></h1>
			<span class="crumb">
				<slot name="header"></slot>
			</span>
		</header>
		<div class="company-header-title">
			<slot name="footer"></slot>

		</div>
	</div>

</template>

<script>
'use strict';
export default {
    name : 'xfHeader'
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.company-header{
		position: relative;
		.header{
			position: absolute;
			top: 0;
			left: 0;
			width: calc(100% - 40px);
		}
		.logo img{
			width: 148px;
			height: 44px;
		}
	}
	.company-header-title{
		position: absolute;
		right: 60px;
		text-align: center;
		bottom: 20px;
		min-width: 220px;

		.cn{
			position: relative;
			display: block;
			line-height: 30px;
			font-weight: bold;
			font-size: 24px;
			color: #fff;
			letter-spacing: 2px;

			&:before, &:after{
				content: "";
				position: absolute;
				top: 17px;
				width: 72px;
				border-bottom: 1px dashed #fff;
			}
			&:before {
				left: 0;
			}
			&:after {
				right: 0;
			}
		}

		.en{
			display: block;
			line-height: 40px;
			font-weight: bold;
			font-size: 44px;
			color: #fff;
			letter-spacing: 5px;
			text-transform: uppercase;
			margin-top: 15px;
		}
	}
	.crumb {
		float: right;
		line-height: 32px;
		height: 32px;
		padding-left: 20px;
		font-size: 16px;
		color: #fff;
		margin-left: 30px;
		margin-top: 4px;
	}
</style>
