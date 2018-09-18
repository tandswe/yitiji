<template>
	<div class="data-wrap">   
     
       <div v-if="isShow">
           <checkBtn></checkBtn>
       </div>
       <div  v-if="isShow">
           <flieSignature></flieSignature>
       </div>
         <div style="height: 100%" v-if="isShow">
           <printSucceed cardText="预计15个工作日内审核完成"></printSucceed>
         </div>
         <div v-if="isShow">
             <detailPrintTable></detailPrintTable>
         </div>
         <div>
             <detailPrint></detailPrint>
         </div>
    </div>
</template>

<script>
import checkBtn from './weatherComponents/checkBtn'
import flieSignature from './weatherComponents/flieSignature'
import printSucceed from './weatherComponents/printSucceed'
import detailPrintTable from './weatherComponents/detailPrintTable'
import detailPrint from './weatherComponents/detailPrint'
export default{
    name:'entryDndexit',
    components:{
        printSucceed,
        flieSignature,
        checkBtn,
        detailPrintTable,
        detailPrint
    },
	data(){
		return{
            isShow: false
        }
	},
	methods:{
		
	}
}
</script>
<style lang="scss" scoped>
.data-wrap{
    height: 100%;
}
.center-btn{
    width:460px;
    margin: 0 auto;
    button{
        width:460px;
        height:80px;
        background:rgba(0,112,224,1);
        border-radius:6px;
        margin-bottom: 30px;
        color: #fff;
    }
}
h1{
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
	align-items: center;
    padding-left: 98px;
    padding-top: 48px;
    padding-bottom: 30px;
}
</style>
