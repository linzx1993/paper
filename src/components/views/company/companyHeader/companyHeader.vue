<template>
	<xf-header>
		<template slot="header">
			<div class="fr">
				<router-link class="header-link" to="/aboutCompany">首&nbsp;&nbsp;页</router-link>
				<router-link class="header-link" to="/aboutCompany">企业简介</router-link>
				<router-link class="header-link" to="/companyHistory">发展历程</router-link>
				<router-link class="header-link" to="/companyCulture">企业文化</router-link>
				<router-link class="header-link" to="/recruitment">人才招聘</router-link>
				<router-link class="header-link" to="/contactUs">联系我们</router-link>
			</div>
		</template>
		<template slot="footer">
			<span class="cn">
				关于翔飞
			</span>
			<span class="en">about</span>
		</template>
	</xf-header>

</template>

<script>
'use strict';
export default {
    name : 'companyHeader'
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.header-link{
		position: relative;
		padding: 0 15px;
		font-size: 16px;
		color: #fff;
		&:before{
			content: "";
			position: absolute;
			top: 10px;
			right: 0;
			width: 1px;
			height: 16px;
			background-color: #fff;
		}
		&:last-child:before{
			display: none;
		}
		&.active{
			color: #ccc;
			cursor: default;
		}
	}
</style>
