<template>
	<div class="ga-step0">
		<layoutDialog :isDialogShow="false">
			<div>
				XXXXXXXXXXXXXXXX
			</div>
		</layoutDialog>
		<div v-if="!isPassPortStep0Show">
			<div class="passport-title">
			请选择签注类型
			</div>
			<div class="passport-type">
				<div v-for="(item,index) in passPortTypes" @click="passPortSel(item.id)" :key="index">
					{{item.title}}
				</div>
			</div>
		</div>
		<div v-if="isPassPortStep0Show" class="passport-set">
			<div class="passport-title pb98">
			请按照正确方向插入港澳通行证{{secCount}}s
			</div>
			<img src="../../../img/passport/passport-guide.png">
		</div>
	</div>
</template>

<script>
	import layoutDialog from '@/components/layoutDialog.vue'
	export default{
		components:{
			layoutDialog
		},
		data(){
			return {
				passPortSelIndex:0,
				isPassPortStep0Show:false,
				secCount:10,
				passPortTypes:[{
					title:"香港、澳门签注",
					id:0
				},{
					title:"台湾签注",
					id:1
				}]
			}
		},
		methods:{
			passPortSel(id){
				this.passPortSelIndex=id
				this.isPassPortStep0Show=true
				this.secCountFn()
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
		padding-bottom: 176px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
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
	.passport-set{
		img{
			display: block;
			width: 560px;
			height: 420px;
			margin: 0 auto;
		}
	}
</style>