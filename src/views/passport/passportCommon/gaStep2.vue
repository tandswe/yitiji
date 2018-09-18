<template>
	<div class="ga-step0">
        <router-view></router-view>



		<!--<div  class="passport-set" v-if="!isHadIntoBankCar">-->
			<!--<div class="passport-title pb98">-->
			<!--请插入银联卡 {{secCount}}s-->
			<!--</div>-->
			<!--<img src="../../../img/passport/passport-guide.png">-->
		<!--</div>-->
		<!--<div v-if="isHadIntoBankCar">-->
			<!--<div class="passport-title pb98">-->
			<!--请输入银联卡密码 {{secCount}}s-->
			<!--</div>-->
			<!--<div class="password-box">-->
				<!--<div class="flex-start pb36">-->
					<!--<div>-->
						<!--本次签注费用-->
					<!--</div>-->
					<!--<div>-->
						<!--{{expense}}-->
					<!--</div>-->
				<!--</div>-->
				<!--<div class="flex-start">-->
					<!--<div>-->
						<!--请输入银行卡密码-->
					<!--</div>-->
					<!--<div>-->
						<!--<input type="text">-->
					<!--</div>-->
				<!--</div>-->
				<!--<div class="password-err">-->
					<!--密码错误，请重新输入-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
	</div>
</template>

<script>
    import payTypeChoose from '@/views/pay/PayTypeChoose'

	export default{
		name:'passport',
        components: {
            payTypeChoose
        },
		data(){
			return {
				isHadIntoBankCar:true,
				passPortSelIndex:0,
				secCount:'',
				expense:15
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
		created(){
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
		padding-bottom: 176px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 80px;
	}
	.pb36{
		padding-bottom: 36px;
	}
	.passport-set{
		img{
			display: block;
			width: 560px;
			height: 420px;
			margin: 0 auto;
		}
	}
	.password-box{
		color: #333333;
		padding: 87px 0;
		box-sizing: border-box;
		width: 720px;
		height: 360px;
		margin: 0 auto;
		background:rgba(246,246,246,1);
		border: 1px solid #DDDDDD;
		border-radius: 20px;
		>div{
			font-size: 24px;
		}
		.flex-start{
			>div:first-child{
				width: 283px;
				box-sizing: border-box;
				padding-right: 20px;
				text-align: right;
			}
		}
		input {
			background: #FFFFFF;
			border: 1px solid #ccc;
			height: 52px;
			line-height: 52px;
			outline: none;
			padding: 0 20px;
			box-sizing: border-box;
			width: 360px;
			font-size: 24px;
		}
	}
	.password-err{
		padding-top: 55px;
		color:#E82222;
		text-align: center;
	}
</style>