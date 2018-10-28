<template>
	<div>
		<company-header></company-header>
		<!--<div id="allmap" class="map mt-30" style="height: 300px;"></div>-->
		<div class="about-contact">
			<div class="about-contact-main">
				<div class="about-contact-main-content clearfix">
					<div class="fl">
						<ul>
							<li class="company-title">龙游翔飞进出口有限公司</li>
							<li class="address">地址：浙江省衢州市龙游县龙洲街道赤步墈头102号</li>
							<li class="zip">邮编：324400</li>
							<li class="mobile">电话：137-5701-4411</li>
							<!--<li>传真:浙江翔飞科技有限公司</li>-->
							<li class="mail">邮箱：369229528@qq.com</li>
						</ul>
					</div>
					<div class="fr mr-40">
						<div class="fl weixin mr-50">
							<h6>微信号:lxbq12345</h6>
							<img src="./weixin.png" alt="">
						</div>
						<div class="fl qq">
							<h6>QQ号：369229528</h6>
							<img src="./qq.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-white block-map">
			<span class="el-icon-location address">公司地址：浙江省衢州市龙游县龙洲街道赤步墈头102号</span>
			<div style="width: 1020px;margin: 0 auto">
				<div id="allmap" class="about-contact-map"></div>
			</div>
		</div>
	</div>
</template>

<script>
'use strict'
export default {
    name : 'contactUs',
	mounted(){
        this.$nextTick(function () {
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(119.179922,29.04904);
            var marker = new BMap.Marker(point);  // 创建标注
            let label = new BMap.Label('龙游翔飞进出口有限公司', {
                offset: new BMap.Size(-100, -75),
                position: point
            });

            map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
//			debugger;
            map.addOverlay(label);              // 将标注添加到地图中
            map.addOverlay(marker);              // 将标注添加到地图中

            var opts = {
                width : 200,     // 信息窗口宽度
                height: 100,     // 信息窗口高度
                title : "龙游翔飞进出口有限公司" , // 信息窗口标题
                enableMessage:true,//设置允许信息窗发送短息
            }
            var infoWindow = new BMap.InfoWindow("地址：浙江省衢州市龙游县龙洲街道赤步墈头102号", opts);  // 创建信息窗口对象
            marker.addEventListener("click", function(){
                map.openInfoWindow(infoWindow,point); //开启信息窗口
            });

            // 添加带有定位的导航控件
            var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
            });
            map.addControl(navigationControl);
        })
	}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.about-contact{
		padding: 140px 0 40px;
		background: url(./bg-concact.jpg) no-repeat right 0 #fff;

		.about-contact-main {
			width: 1000px;
			padding: 8px;
			box-shadow: 0 0 10px 5px rgba(137,137,137,.2);
			margin: 0 auto;
			background: #fff;
		}

		.about-contact-main-content{
			padding: 35px 30px;
			border: 1px solid #c1dae5;

			.company-title{
				font-size: 22px;
				color: #016695;
				font-weight: bold;
				margin-bottom: 30px;
				padding-left: 0;
			}
			li{
				font-size: 16px;
				color: #666;
				line-height: 30px;
				padding-left: 40px;
				margin-bottom: 10px;
			}
			.address{
				background: url(./address.png) no-repeat left center;
			}
			.zip{
				background: url(./zip.png) no-repeat left center;
			}
			.mobile{
				background: url(./tel.png) no-repeat left center;
			}
			.mail{
				background: url(./mail.png) no-repeat left center;
			}
			.weixin h6, .qq h6{
				font-size: 16px;
				color: #666;
				margin-bottom: 45px;
				margin-top: 10px;
			}
			.weixin img, .qq img{
				width: 134px;
				height: 134px;
			}
		}
	}
	.about-contact-map{
		width: 100%;
		height: 400px;
		margin: 0 auto;
	}
	.block-map{
		padding-bottom: 50px;
	}
	.block-map>span{
		display: block;
		box-sizing: border-box;
		width: 1020px;
		margin: 0 auto;
		line-height: 32px;
		color: #409eff;
	}
	.BMapLabel[style*="display: inline"]{
		padding: 0 8px !important;
		background: #fff !important;
		border: none !important;
		box-shadow: 1px 1px 5px rgba(100, 100, 100, .2), -1px 1px 5px rgba(100, 100, 100, .2);
		font: bold 14px/40px "SimHei" !important;
		color: #333 !important;
		text-align: center !important;
	}


</style>
