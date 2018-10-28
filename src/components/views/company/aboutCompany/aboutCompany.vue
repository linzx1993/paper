<template>
	<div class="company-header">
		<header class="absolute pt-20 header" style="padding-left: 40px;">
			<router-link to="/index" class="logo fl pl-40"><img src="@/assets/images/logo1.png" alt=""></router-link>
			<span class="crumb">
				<div class="fr">
				<router-link class="header-link" to="/aboutCompany">企业简介</router-link>
				<router-link class="header-link" to="/companyHistory">发展历史</router-link>
				<router-link class="header-link" to="/companyCulture">企业文化</router-link>
				<router-link class="header-link" to="/recruitment">人才招聘</router-link>
				<router-link class="header-link" to="/contactUs">联系我们</router-link>
			</div>
			</span>
		</header>
		<div class="about-company">
			<div class="company-introduce pl-50 pr-50">
				<div class="wrap">
					<h3>企业简介</h3>
					<p class="mt-40">翔飞集团公司始于2010年，2010年先于经营状况成立了龙游翔飞纸业有限公司，是一家定位于生产“高档生活用纸”的现代化生活用纸制造企业。随着公司的不断发发展，规模的迅速发展，先后成立了龙游翔飞进出口有限公司，塑料注塑厂，塑料吹膜厂，造料厂，途料厂，棒冰厂，活性碳厂等子企业。龙游翔飞纸业有限公司于2010年1月成立并进驻西非加纳，开始了艰苦的创业历程，是中国造纸企业最早进入加纳的造纸企业，开始生产生活用纸卷筒纸。是目前加纳规模最大、产品种类最齐全的生活用纸制造企业之一。龙游翔飞纸业有限公司已在整个加纳建立了销售网络；并在周边几个国家也设有销售和原料采购公司。是一个生产在国外国内全方位服务的综合团队。2014年龙游翔飞集团在非洲随着企业的发展，走向了一个新的里程碑，形成了多家多元化的生产企业。  公司地址位于浙江省衢州市龙游县城，公司主要生产产品为纸巾纸、面巾纸、餐巾纸、卫生卷纸、卫生原纸等系列生活用纸。塑料制品，棒冰系列产品，活性碳生产等产品。公司主要设备从国内、台湾等地引进，并具备国际先进的技术水平与管理团队</p>
				</div>
			</div>
			<div class="real-time">
				<div class="item item-left icon">
					<em>/</em>
					<p>创新是翔飞公司的灵魂，翔飞公司的“工业物联网技术”经过8年调研和10年开发完善，取得了一系列的技术突破，于2011年、2015年分别获得A轮4000万和B轮1亿元的风险投资，目前处于上市准备中。2012年10月14日被中国工程院邬贺铨和吴澄院士等5位专家鉴定为国内领先，认为具有很高的推广应用价值，可为中国制造业的转型升级提供重要的技术支持。</p>
				</div>
				<div class="item item-right icon">
					<em>/</em>
					<p>迄今为止，翔飞公司凭借先进的物联技术和便利的操作功能迅速占领制造业的顶端客户，为外资企业、合资企业和国内的制造业上市公司等150多家企业提供了工业物联网技术的应用。力太科技物联网系统和服务能够帮助客户大大缩短产品生产周期、减少产品质量缺陷、提高库存周转率和生产效率。我们的客户正从力太智能制造物联网一体化解决方案中获益。</p>
				</div>
			</div>
			<div class="about-company-bottom">
				<img class="d-block m-auto" src="./bg-company.png" alt="">
				<p>作为中国智能制造的优秀企业、浙江省信息工程重点研究院以及省首批“机器换人”和“两化融合”服务单位，翔飞公司将竭诚为企业提供高科技、高品质、高效率的服务。</p>
				<p>为更快更好地满足市场的需求，利用先发优势，抓住中国制造业转型和物联网发展的有利机遇，真诚欢迎各路精英加盟翔飞公司，共同创业，共享创业成果和美好明天。</p>
			</div>
		</div>
	</div>


</template>

<script>
	'use strict'
export default {
    name : 'aboutCompany'
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.el-dropdown-menu__item{
		width: 120px;
		a{
			color: #666;
		}
	}
	.about-company{
		.company-introduce{
			height: 461px;
			padding-top: 200px;
			background: url("bg-about-company.jpg") no-repeat center top;
			background-size: cover;


			.wrap{ width: 1200px;  margin: 0 auto;  }
			h3{
				line-height: 35px;
				font-weight: bold;
				font-size: 24px;
				color: #fff;
				letter-spacing: 1px;
				text-align: center;
			}
			p{
				text-indent: 2em;
				line-height: 2.5;
				font-size: 18px;
				color: #fff;
			}
		}
		.real-time{
			display:flex;
			justify-content: space-around;
			height: 399px;
			padding-top: 125px;
			background: url(./bg-about-realtime.jpg) no-repeat center top;
			background-size: cover;

			em {
				position: absolute;
				top: 0;
				left: 65px;
				line-height: 30px;
				font-size: 25px;
				color: #fff;
			}

			p{
				line-height: 30px;
				font-size: 14px;
				color: #fff;
			}

			.item {
				position: relative;
				width: 480px;
				padding-left: 100px;

			}
			.item:before{
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 32px;
				height: 32px;
			}

			.item-left:before{
				background-position: -9px -159px;
			}
			.item-right:before{
				background-position: -59px -159px
			}
		}
		.about-company-bottom{
			height: 740px;
			position: relative;
			&:before{
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 570px;
				background: #eee;
			}
			img{
				position: relative;
				width: 631px;
			}
			p{
				position: relative;
				margin: 0 auto;
				width: 1000px;
				line-height: 30px;
				text-indent: 2em;
				color: #666;
				font-size: 16px;
			}
		}
	}

</style>
