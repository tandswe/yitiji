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
						<div v-for="(item,index) in tabs">
							{{item.title}}
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
				secCount:10,
				isHadCard:true,
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
			}
		}
	}
</script>

<style lang="scss" scoped>
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