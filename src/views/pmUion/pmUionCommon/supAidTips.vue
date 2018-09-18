<template>
	<div class="ga-step0">
		<div>
			<div class="passport-title">
			请仔细阅读业务办理须知
			</div>
			<div class="pm-box">
				<div class="pm-box-content">
					<img src="../../../img/pmUion/supportAidStudent.png">
				</div>
			</div>
			<div class="button-group">
				<div>
					拒绝
				</div>
				<div>
					同意
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import layoutDialog from '@/components/layoutDialog.vue'
	export default{
		name:'passport',
		components:{
//			layoutDialog
		},
		data(){
			return {
				passPortSelIndex:0,
				secCount:10,
				passPortTypes:[{
					title:"在线申报",
					id:0
				},{
					title:"申报进度",
					id:1
				}]
			}
		},
		methods:{
			passPortSel(id){
				this.passPortSelIndex=id
				//this.isPassPortStep0Show=true
				//this.secCountFn()
			},
			secCountFn(){
				var _this=this	
				var inv=setInterval(function(){
					_this.secCount--
					if(_this.secCount==0){
						clearInterval(inv)
					}
				},1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button-group div{
		display: inline-block;
		background: #0070E0;
		font-size: 24px;
		color: #FFFFFF;
		width: 250px;
		height: 80px;
		line-height:80px ;
		
		border-radius:6px;
		margin:0  29px;
		margin-top: 40px;
	}
	.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
	}
	.pm-box{
		margin: 0 auto;
		text-align: left;
		width: 736px;
		height: 426px;
		background: #E7F1FB;
		position: relative;
		.pm-box-content{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 360px;
			height: 240px;
			background: rgba(248,251,253,1);
		}
		.pm-box-content img{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 86px;
			height: 120px;
			display: block;
		}
	}
	.passport-set{
		img{
			display: block;
			width: 560px;
			height: 420px;
			margin: 0 auto;
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
			margin-bottom: 30px;
			color: #FFFFFF;
			font-size: 28px;
			background: #0070E0;
		}
	}
	.passport-type-wrap{
		position: relative;
		padding-top: 150px;
	}
	.passport-type-wrap .passport-type{
		/*position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%,-50%);*/
	}
</style>