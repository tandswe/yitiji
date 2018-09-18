<template>
	<div class="wrap crimeTestifyFn">  
		
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
		
        <layoutHeart></layoutHeart>
        <layout-subject title="无犯罪记录预览" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
	name:'crimeTestifyFn',
	components:{layoutSubject,layoutHeart,layoutfoot,eHeadsp},
	data(){
		return{
			active:0,
			stepData:['01 扫描身份证','02 打印','03完成'],
            pathArr: ['/crimeTestify/crimeTStep0','/crimeTestify/crimeTStep1','/crimeTestify/crimeTStep2']
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
