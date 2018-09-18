<template>
    <div>
       <disability-cert v-if="page===1" @listenType="nextpage" title="请将您的残疾人证放入感应区"></disability-cert>
       <visatype v-if="page===2" @listenType="nextpage"></visatype>
       <reapply-form title="请放置好您的录取通知书" v-if="page===3" @listenType="nextpage"></reapply-form>
       <reapply-form title="请放置好您的学生注册证明" v-if="page===4" @listenType="nextpage"></reapply-form>
       <reapply-form title="请放置好您的南粤扶残助学工程申请书" v-if="page===5" @listenType="nextpage"></reapply-form>
       <bankcard-place v-if="page===6" @listenType="nextpage"></bankcard-place>
       <payment-vouch v-if="page===7" @listenType="nextpage" title="申报凭证"></payment-vouch>
    </div>
</template>

<script>
import disabilityCert from '@/views/pmUion/pmComponents/disabilityCert'
import visatype from '@/views/pmUion/pmComponents/visatype'
import reapplyForm from '@/views/pmUion/pmComponents/reapplyForm'
import bankcardPlace from '@/views/pmUion/pmComponents/bankcardPlace'
import paymentVouch from '@/views/pmUion/pmComponents/paymentVouch'
    export default {
        components:{
                disabilityCert,
                visatype,
                reapplyForm,
                bankcardPlace,
                paymentVouch,
        },
        data(){
			return {
				page:1,
			}
		},
        methods:{
			nextpage(){
				this.page++;
            }
        }
        
    }
</script>

<style scoped>

</style>