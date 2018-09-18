<template>
    <div>
       <upload-suc v-if="page===1" @listenType="nextpage">
           <div @click="nextpage">下一步</div>
       </upload-suc>
       <schedule-fail v-if="page===2"></schedule-fail>
    </div>
</template>

<script>
import uploadSuc from '@/views/pmUion/pmComponents/uploadSuc'
import scheduleFail from '@/views/pmUion/pmComponents/scheduleFail'

    export default {
        components:{
                uploadSuc,
                scheduleFail
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