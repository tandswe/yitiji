<template>
	<div class="ga-step0">
		<div class="crime-t-set" v-show="!isHadCard">
			<div class="crime-t-title pb98">
			请插入你的残疾人证 {{secCount}}s
			</div>
			<img src="../../../img/pmUion/idCard0@2x.png">
		</div>
		<div v-if="isHadCard">
			<div class="crime-t-set">
				<div class="crime-t-title pb98">
					请选择您的办理方式 60s
				</div>
			</div>
				<div class="passport-type-wrap">
					<div class="passport-type">
						<div v-for="(item,index) in tabs" @click="toDetail(item.id)">
							{{item.title}}
						</div>
					</div>
				</div>
		</div>
		<layout-dialog :isDialogShow="isDialogShow">
			<div class="lscancel-dialog">
			<div class="lscancel-dialog-t">
				校验通过
			</div>
			<div class="lscancel-dialog-b">
				<div>
					下一步 5s
				</div>
			</div>
			</div>
		</layout-dialog>
	</div>
</template>

<script>
	import layoutDialog from '@/components/layoutDialog.vue'
	export default{
		name:'passport',
		components:{
			layoutDialog
		},
		data(){
			return {
				secCount:10,
				isHadCard:true,
				isDialogShow:true,
				tabs:[{
					title:"在线申报",
					id:0
				},{
					title:"申报进度",
					id:1
				}]
			}
		},
		methods:{
			secCountFn(){
				var _this=this	
				var inv=setInterval(function(){
					_this.secCount--
					if(_this.secCount==0){
						clearInterval(inv)
					}
				},1000)
			},
			toDetail(id){
				if(id==1){
					this.$store.state.home.isSelfJump=true
					this.$store.state.home.headTabIndex=1					
					this.$gotoPages('/pmUion/lsCancelSubmission')
				}else{
					//控制显示当前资料
					this.supAidStepForm=1
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lscancel-dialog{
		width: 100%;
		height: 100%;
		.lscancel-dialog-t{
			font-size: 28px;
			color: #333333;
			line-height: 28px;
			font-weight: bold;
			padding-top: 67px;
			padding-left: 48px;
			padding-right: 48px;
			padding-bottom: 75px;
			text-align: left;
		}
		.lscancel-dialog-b{
			padding: 0 48px;
			text-align: right;
			div{
				display: inline-block;
				text-align: center;
				width:180px;
				height:56px;
				line-height: 56px;
				font-size:24px;
				border-radius:5px;
				background: #0070E0;
				color: #FFFFFF;
			}
		}
	}
	.crime-t-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 176px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
	}
	.crime-t-type{
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
	.crime-t-set{
		img{
			display: block;
			width: 560px;
			height: auto;
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
	}
</style>