<template>
	<div>
		<need-mat v-if="page===1" @listenType="nextpage"></need-mat>
        <selBus v-if="page===2" @listenType="nextpage"></selBus>
        <IDCard v-if="page===3" @listenType="nextpage"></IDCard>
        <faceCheck v-if="page===4" @listenType="nextpage"></faceCheck>
        <idPreview v-if="page===5" @listenType="nextpage"></idPreview>
        <residence v-if="page===6" @listenType="nextpage"></residence>
        <accountPre v-if="page===7" @listenType="nextpage"></accountPre>
	</div>
</template>

<script>
import needMat from '@/views/peoplePass/peoplePassComponents/needMat'
import selBus from '@/views/peoplePass/peoplePassComponents/selBus'
import IDCard from '@/views/peoplePass/peoplePassComponents/IDCard'
import faceCheck from '@/views/peoplePass/peoplePassComponents/faceCheck'
import idPreview from '@/views/peoplePass/peoplePassComponents/idPreview'
import residence from '@/views/peoplePass/peoplePassComponents/residence'
import accountPre from '@/views/peoplePass/peoplePassComponents/accountPre'
	export default{
		name:'',
		components:{
             needMat,
             selBus,
             IDCard,
             faceCheck,
             idPreview,
             residence,
             accountPre
		},
		data(){
			return {
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