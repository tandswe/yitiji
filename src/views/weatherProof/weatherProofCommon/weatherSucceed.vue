<template>
	<div class="wrap">   
        <applyForTable :stateManage="stateManage"></applyForTable>
    </div>
</template>

<script>
import applyForTable from './weatherComponents/applyForTable'
export default{
    components:{
        applyForTable
    },
	data(){
		return{
            stateManage: true
        }
	},
	methods:{
		
	}
}
</script>
<style>
/*.crimeTestifyFn .main .main-center .content{
	padding: 0;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}*/
</style>
<style lang="scss" scoped>

</style>
