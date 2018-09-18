<template>
	<div class="wrap crimeTestifyFn">  
	 
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
        <layoutHeart></layoutHeart>
        <layout-subject title="办理往来台湾通行证个人游签注" :stepDatas="stepData" :paths="pathArr"></layout-subject>
        <layoutfoot></layoutfoot>
    </div>
		</div>
</template>

<script>
import layoutHeart from '@/components/layoutHeart'
import layoutSubject from "@/components/layoutSubject"
import layoutfoot from "@/components/layoutfoot"
import eHeadsp from "@/views/eHeadsp"
export default{
	name:'entryDndexit',
	components:{layoutSubject,layoutHeart,layoutfoot,eHeadsp},
	data(){
		return{
			active:0,
			stepData:['01 通行证登入','02 资料提交','03 费用交纳','04 芯片擦写','05 完成'],
            pathArr: ['/entyDndexitPage/TWIndividualLogin','/entyDndexitPage/TWIndividualSubmit','/entyDndexitPage/TWIndividualExpenses','/entyDndexitPage/TWIndividualChip','/entyDndexitPage/TWIndividualFinish']
		}
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
.wrap{
    height:100%;
}
</style>
