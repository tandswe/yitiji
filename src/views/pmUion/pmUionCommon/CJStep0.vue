<template>
	<div class="ga-step0">
		<div v-if="!isPassPortStep0Show">
			<div class="passport-title">
			请仔细阅读业务办理须知
			</div>
			<div class="pm-box">
				XXXX
			</div>
		</div>
		<div v-if="isPassPortStep0Show">
			<visatype></visatype>
		</div>
	</div>
</template>

<script>
//	import layoutDialog from '@/components/layoutDialog.vue'
import visatype from '@/views/pmUion/pmComponents/visatype'
	export default{
		name:'passport',
		components:{
//			layoutDialog
		},
		components:{
			visatype
		},
		data(){
			return {
				passPortSelIndex:0,
				isPassPortStep0Show:true,
				secCount:10,
				
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
		margin: 0 100px;
		text-align: left;
		height: 570px;
		background: #D4E7F9;
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