<template>
	<div>
			<app-materials v-if="page===1" @listenType="nextpage"></app-materials>
		    <photo-receipt @listenType="nextpage" v-if="page===2"></photo-receipt>
			<reapply-form v-if="page===3"  @listenType="nextpage" title="请放置好中华人民共和国残疾人证补办申请表 60S"></reapply-form>
			<reapply-form v-if="page===4"  @listenType="nextpage" title="请放置好中华人民共和国残疾人评定表 60s"></reapply-form>
			<payment v-if="page===5" @listenType="nextpage"></payment>
			<mailing-add v-if="page===6" @listenType="nextpage"></mailing-add>
			<paymentVouch v-if="page===7" @listenType="nextpage"></paymentVouch>
			<bankcard v-if="page===8" @listenType="nextpage"></bankcard>
			<declare v-if="page===9" @listenType="nextpage"></declare>
            <schedule v-if="page===10"></schedule>
			<password v-if="page===11"></password>
	</div>
</template>

<script>
import appMaterials from '@/views/pmUion/pmComponents/appMaterials'
import photoReceipt from "@/views/pmUion/pmComponents/photoReceipt"
import reapplyForm from "@/views/pmUion/pmComponents/reapplyForm"
import payment from "@/views/pmUion/pmComponents/payment"
import declare from "@/views/pmUion/pmComponents/declare"
import schedule from "@/views/pmUion/pmComponents/schedule"
import mailingAdd from "@/views/pmUion/pmComponents/mailingAdd"
import paymentVouch from "@/views/pmUion/pmComponents/paymentVouch"
import bankcard from "@/views/pmUion/pmComponents/bankcard"
import password from "@/views/pmUion/pmComponents/password"
	export default {
		name: 'informationSubmission',
		components:{
			appMaterials,
			photoReceipt,
			reapplyForm,
			payment,
			declare,
			schedule,
			mailingAdd,
			paymentVouch,
			bankcard,
			password
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
				page:11
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