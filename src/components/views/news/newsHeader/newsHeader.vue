<template>
	<xf-header>
		<template slot="header">
			<el-dropdown :hide-on-click="false" placement="bottom-start">
				  <span class="el-dropdown-link">
					新闻<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item><router-link to="/aboutCompany">公司新闻</router-link></el-dropdown-item>
					<el-dropdown-item><router-link to="/companyHistory">行业动态</router-link></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</template>
		<template slot="footer">
			<span class="cn">
				新闻
			</span>
			<span class="en">NEWS</span>
		</template>
	</xf-header>

</template>

<script>
'use strict'
export default {
    name : 'newsHeader'
}
</script>
<style rel="stylesheet/scss" lang="scss">
		
</style>
