<template>
	<div>
		<pmbox v-if="page===1" @listenType="nextpage"></pmbox>
	</div>
</template>

<script>
import pmbox from '@/views/pmUion/pmComponents/pmbox'
	export default{
		name:'passport',
		components:{
                pmbox,
			
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
				}],
				page:1,
			}
		},
		methods:{
			nextpage(){
				this.page++;
			},
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

</style>