<template>
	<div>
			<disability-cert v-if="page===1" @listenType="nextpage" title="请插入你的残疾人证 60s"></disability-cert>
		    <outinfo v-if="page===2" @listenType="nextpage"></outinfo>
			<out-place v-if="page===3" @listenType="nextpage" title="请放置好残疾人证注销申请表"></out-place>
			<paymentVouch v-if="page===4" @listenType="nextpage" title="注销凭证"></paymentVouch>
	</div>
</template>

<script>
import disabilityCert from '@/views/pmUion/pmComponents/disabilityCert'
import outinfo from '@/views/pmUion/pmComponents/outinfo'
import outPlace from '@/views/pmUion/pmComponents/outPlace'
import paymentVouch from '@/views/pmUion/pmComponents/paymentVouch'
	export default {
		name: 'informationSubmission',
		components:{
			disabilityCert,
			outinfo,
			outPlace,
			paymentVouch
		},
		mounted(){
               console.log(this.page)
		},
		computed:{
            typeId(){
				return this.$store.state.home.typeId
			}
		},
		data() {
			return {
				submissionForm: 1,
				page:1
			}
		},
		methods:{
			nextpage(){
				this.page++;
			},
			// nextStep(){
			// 	 this.$store.commit('changeheadTabIndex',{count:1})
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.pt20{
		margin-top: 66px;
	}
	.photo-card {
		width: 562px;
		height: 420px;
		position: relative;
		background: rgba(238, 249, 255, 1);
		margin: 0 auto;
		img {
			display: block;
			width: 234px;
			height: 264px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	
	.photo-title-input-wrap {
		display: inline-flex;
		position: relative;
		padding-bottom: 38px;
		margin-top: 20px;
		input {
			height: 54px;
			line-height: 52px;
			box-sizing: border-box;
			border: 1px solid #CCCCCC;
			width: 562px;
			padding-right: 140px;
			padding-left: 20px;
			background: rgba(248, 248, 248, 1);
		}
		.photo-btn-wrap {
			position: absolute;
			top: 0;
			right: 0;
			background: #35B0F3;
			height: 54px;
			line-height: 54px;
			color: #FFFFFF;
			border-radius: 10px;
			text-align: center;
			padding: 0 17px;
			font-size: 26px;
		}
	}
	
	.passport-title {
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
	
	.pb98 {
		padding-bottom: 98px;
	}
</style>