<template>
	<div class="recruitment-job icon mt-35 relative">
		<h3 class="recruitment-title" :class="{'active' : active}" @click="slideToggle">
			<strong>{{job.title}}</strong>
			<span>{{job.department}}</span>
			<span>{{job.location}}</span>
		</h3>
		<div ref="content" class="recruitment-content" :class="{'active' : active}">
			<div class="date">
				<span class="top">发布日期</span>
				<span class="day">27</span>
				<span class="year-month">2018-08</span>
			</div>
			<div class="wrapper">
				<dl>
					<dt class="dt">job.title</dt>
					<dd class="dd">月薪范围：面议</dd>
					<dd class="dd">招聘人数：1</dd>
					<dd class="dd">福利介绍：面议</dd>
					<dd class="dd">工作年龄：3-5年</dd>
					<dd class="dd">截止日期：2018-12-01</dd>
				</dl>

				<p>岗位职责： 工作地点为西非加纳共和国，在西非加纳做英语翻译 有法语能力者优先，最好有非洲工作经历</p>
				<p>薪资待遇： 年薪在10万到16万之间 随着工作年限的增加每年还会增加工资 每年有一个月的回国探亲假</p>
				<p>加分项： 非洲工作经历 法语能力</p>
			</div>
		</div>
	</div>
</template>

<script>
'use strict'
export default {
    name : 'collapse',
	data(){
        return {
			active: false
		}
	},
	props: ['job'],
	methods: {
        slideToggle(){
            if(this.active){
                $(this.$refs.content).slideUp()
                this.active = false
			} else {
                console.log()
                $(this.$refs.content).slideDown()
//                this.$refs.content.style.display = "block";
//                $(this.$refs.content).animate({height: $(this.$refs.content).height() + "px"})
                this.active = true
			}
		},
	}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	body .recruitment-job:before{
		content: "";
		position: absolute;
		width: 22px;
		height: 22px;
		top: 15px;
		background-position: -464px -64px;
		right: 30px;
		z-index: 100;
	}
	.recruitment-title{
		height: 52px;
		background: #b3b3b3;
		color: #fff;
		position: relative;
		cursor: pointer;
		&.active{
			background: #0084ce;
		}
		strong{
			float: left;
			line-height: 20px;
			font-size: 18px;
			font-weight: bold;
			margin-top: 16px;
			margin-left: 45px;
		}
		span{
			position: relative;
			margin-top: 16px;
			margin-left: 35px;
			float: left;
			line-height: 20px;
			&:before{
				content: "";
				position: absolute;
				top: 4px;
				left: -17px;
				border-left: 1px solid #fff;
				height: 12px;
			}
		}
	}
	.recruitment-content{
		display: none;
		padding: 24px 45px 20px;
		background: #fff;
		overflow: hidden;
		box-shadow: 1px 1px 5px rgba(100, 100, 100, .2), -1px 1px 5px rgba(100, 100, 100, .2);
		&.active{
			/*display: block;*/
		}

		.date{
			float: left;
			width: 94px;
			text-align: center;

			.top{
				display: block;
				line-height: 30px;
				font-size: 14px;
			}
			.day{
				display: block;
				line-height: 80px;
				font-size: 54px;
				color: #fff;
				background: #0084ce;
			}
			.year-month{
				display: block;
				border: 1px solid #eee;
				line-height: 45px;
				font-size: 14px;
				color: #999;
			}
		}
		.wrapper{
			float: left;
			width: calc(100% - 144px);
			margin-left: 50px;

			dl{
				overflow: hidden;
				margin-top: 30px;
				margin-bottom: 30px;
			}
			.dt{
				line-height: 28px;
				font-size: 18px;
				border-bottom: 1px solid #eee;
				color: #333;
				padding-bottom: 10px;
			}

			.dd{
				margin-top: 15px;
				line-height: 20px;
				margin-right: 50px;
				font-size: 14px;
				color: #999;
				position: relative;
				float: left;
				&:after{
					content: "";
					position: absolute;
					top: 4px;
					right: -25px;
					height: 12px;
					border-right: 1px solid #ccc;
				}

				&.last {
					float: right;
					margin-right: 0;
				}
			}

			p{
				color: #999;
				line-height: 32px;
			}
		}
	}
</style>
