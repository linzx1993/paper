<template>
	<div>
		<company-header></company-header>
		<div class="company-history">
			<div class="wrap">
				<h3 class="company-history-title">发展历程</h3>
				<div class="mt-45 text-center">
					<a :class="{active: active === '0'}" @click="active = '0'" class="history-time-link" href="javascript:void(0)">present-2016</a>
					<a :class="{active: active === '1'}" @click="active = '1'" class="history-time-link" href="javascript:void(0)">2015-2010</a>
					<a :class="{active: active === '2'}" @click="active = '2'" class="history-time-link" href="javascript:void(0)">2010-2008</a>
				</div>
				<div class="paimai_list">
					<div v-show="active === '0'" class="paimai_content">
						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2018年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./shanghui.jpg" alt=""></a>
							<dl>
								<dt><p class="title">参加中国商会活动</p></dt>
								<dd class="pm_organ">简介：<span>与当地加纳群众一起壮大中国商会</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>

						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2017年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./shanghui.jpg" alt=""></a>
							<dl>
								<dt><p class="title">参加中国商会活动</p></dt>
								<dd class="pm_organ">简介：<span>与当地加纳群众一起壮大中国商会</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>

						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2016年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./shanghui.jpg" alt=""></a>
							<dl>
								<dt><p class="title">参加中国商会活动</p></dt>
								<dd class="pm_organ">简介：<span>与当地加纳群众一起壮大中国商会</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>
					</div>
					<div v-show="active === '1'" class="paimai_content">
						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2018年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./big.jpg" alt=""></a>
							<dl>
								<dt><p class="title">扩大工厂生产力</p></dt>
								<dd class="pm_organ">简介：<span>随着发展，不断扩大工厂生产力</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>

						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2017年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./shanghui.jpg" alt=""></a>
							<dl>
								<dt><p class="title">参加中国商会活动</p></dt>
								<dd class="pm_organ">简介：<span>与当地加纳群众一起壮大中国商会</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>

						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2016年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./shanghui.jpg" alt=""></a>
							<dl>
								<dt><p class="title">参加中国商会活动</p></dt>
								<dd class="pm_organ">简介：<span>与当地加纳群众一起壮大中国商会</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>
					</div>
					<div v-show="active === '2'" class="paimai_content">
						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2008年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./init.jpg" alt=""></a>
							<dl>
								<dt><p class="title">问苍茫大地，谁主沉浮</p></dt>
								<dd class="pm_organ">简介：<span>初到加纳，开创加纳新时代</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>

						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2009年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./dashiguang.jpg" alt=""></a>
							<dl>
								<dt><p class="title">与加纳大使馆会面</p></dt>
								<dd class="pm_organ">简介：<span>与当地中国政府一起</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>

						<div class="list_head">
							<div class="time_box" ></div><div class="time_content"><em></em><span>2010年</span></div>
							<div class="clear"></div>
						</div>
						<div class="list_content">
							<a href="#"><img src="./touzi.jpg" alt=""></a>
							<dl>
								<dt><p class="title">接见中国商业部领导视察</p></dt>
								<dd class="pm_organ">简介：<span>商讨加大对中国对加纳投资</span></dd>
							</dl>
							<div class="pm_date">
								<h2>05</h2>
								<h3>十一月</h3>
								<h3>2014</h3>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
'use strict'

export default {
    name : 'companyHistory',
	data(){
        return {
            active: '0'
		}
	}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.company-history{
		.company-history-title{
			margin-top: 65px;
			font-weight: bold;
			font-size: 40px;
			line-height: 40px;
			text-align: center;
			text-transform: uppercase;
			color: #333;
			letter-spacing: 1px;
		}

		.history-time-link{
			text-align: center;
			width: 318px;
			height: 48px;
			font-size: 14px;
			line-height: 48px;
			border: 1px solid #d8d8d8;
			border-right: 0;
			transition: all .5s;
			&:hover, &.active{
				color: #fff;
				background: #666;
			}
		}
	}

	.clear{clear:both;}
	.paimai_list{width:1180px;margin:30px auto;padding-left:20px;}
	.paimai_content{border-left:1px solid #c1c1c1;}
	.list_content{margin:15px 0 15px 30px;height:200px;background:#eeeeee;border:1px solid #dddcdc;}
	.list_content a{display:block;float:left;}
	.list_content dl{float:left;margin-top:20px;margin-left:20px;}
	.list_content dl dt .title{font-size:28px;color:#666666;line-height:34px;}
	.list_content dl .pm_organ{margin-top:20px;font-size:14px;line-height:16px;color:#666666;}
	.list_content dl .pm_time{margin-top:65px;}
	.list_content dl .pm_time em{font-size:28px;font-style:normal;color:#d10311;line-height:34px;}
	.list_content .pm_date{float:right;width:80px;height:119px;margin-right:15px;margin-top:25px;text-align:center;color:#fff;}
	.list_content .pm_date h2{font-size:52px;line-height:34px;margin-top:15px;}
	.list_content .pm_date h3{font-size:18px;line-height:34px;}
	.list_head .time_content{height:42px;padding-left: 60px}
	.list_head .time_content span{font-size: 16px;line-height: 42px}
	.list_head {margin-left:-20px;}
	.list_head .time_box{
		margin-top: 13px;
		margin-left: 13px;
		float: left;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #409eff;}
	.list_content img{
		height: 200px;
	}
</style>
