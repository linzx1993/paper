<template>
	<footer class="footer">
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
	</footer>
</template>

<script>
	export default {
	    name : "xfFooter",
	}
</script>
<style rel="stylesheet/scss" lang="scss">
	.footer {
		height: 300px;
		color: #696969;
		background: url("./footer-bg.png") repeat 50% 50% scroll;
	}

	.footer .wrap {
		padding-top: 90px;
	}

	.footer section {
		width: 30%;
	}

	.footer h6 {
		margin-bottom: 30px;
		font-size: 16px;
		color: #ccc;
	}

	.footer .concat-way {
		flex-direction: column;
	}

	.footer .concat-way span {
		line-height: 24px;
	}

	.footer-middle {
		width: 345px;
	}

	.page_title {
		height: 50px;
		color: #1cacf4;
		font-size: 18px;
	}
</style>