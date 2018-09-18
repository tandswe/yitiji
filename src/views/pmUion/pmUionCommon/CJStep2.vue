<template>
	<div class="ga-step0">
		<div class="passport-title">
			<!--打印结果-->
		</div>
		<div class="succ-box">
			<div class="flex-sa">
				<div>
					<!-- <img src="../../../img/passport/succ.png"> -->
				</div>
				<div class="pay-succ">
					<div>
						您的事项已办理完成
					</div>
					<div>
						预计5个工作日内审核完<br>届时请前往受理点查询和领取
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'passport',
		data(){
			return {
				secCount:''
			}
		},
		methods:{
			secCountFn(){
				var _this=this	
				_this.secCount=10
				var inv=setInterval(function(){
					_this.secCount--
					if(_this.secCount==0){
						clearInterval(inv)
					}
				},1000)
			}
		},
		mounted(){
			this.secCountFn()
		}
	}
</script>

<style lang="scss" scoped>
	.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 96px;
		text-align: left;
	}
	.succ-box{
		width: 720px;
		height: 360px;
		margin: 0 auto;
		text-align: center;
		background:rgba(246,246,246,1);
		border-radius:20px;
		border: 1px solid #DDDDDD;
		.flex-sa{
			padding-top: 90px;
			display: inline-flex;
		}
	}
	.passport-type{
		padding: 0 60px;
		text-align: center;
		
		div{
			width: 460px;
			height: 80px;
			line-height: 80px;
			margin: 0 auto;
			margin-top: 30px;
			color: #FFFFFF;
			font-size: 28px;
			background: #0070E0;
		}
	}
	.pay-succ{
		color: #333333;
		
		margin: 0 auto;
		img{
			width: 90px;
			height: 90px;
			display: block;
		}
		>div{
			font-size: 32px;
			font-weight: 700;
			padding-bottom: 16px;
			padding-left: 18px;
			text-align: left;
		}
		>div:last-child{
			font-size: 28px;
			font-weight: normal;
			padding-bottom: 0;
		}
	}
</style>