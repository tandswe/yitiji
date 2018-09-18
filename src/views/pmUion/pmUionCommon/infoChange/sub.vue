<template>
    <div>
       <app-materials v-if="page===1" @listenType="nextpage" title="请填写您的变更申报材料 300s"></app-materials>
       <photoReceipt v-if="page===2" @listenType="nextpage"></photoReceipt>
       <reapply-form  v-if="page===3" @listenType="nextpage" title="请放置好中华人民共和国残疾人证基本信息变更申请表 60s"></reapply-form>
       <payment v-if="page===4" @listenType="nextpage"></payment>
       <declare v-if="page===5" @listenType="nextpage"></declare>
       <declare v-if="page===6" @listenType="nextpage"></declare>
    </div>
</template>

<script>
import appMaterials from '@/views/pmUion/pmComponents/appMaterials'
import photoReceipt from '@/views/pmUion/pmComponents/photoReceipt'
import reapplyForm from '@/views/pmUion/pmComponents/reapplyForm'
import payment from '@/views/pmUion/pmComponents/payment'
import declare from '@/views/pmUion/pmComponents/declare'
import schedule from '@/views/pmUion/pmComponents/schedule'
    export default {
        components:{
             appMaterials,
             photoReceipt,
             reapplyForm,
             payment,
             declare,
             schedule
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