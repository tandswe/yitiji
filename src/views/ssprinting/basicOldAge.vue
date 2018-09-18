<template>
	<div class="wrap">  
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">  
        <layoutHeart></layoutHeart>
        <layout-subject title="基本养老金领取资格认证（生存认证）" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
	//name:'zongye',
	components:{layoutSubject,layoutHeart,layoutfoot,eHeadsp},
	data(){
		return{
			active:0,
			stepData:['01 事项窗口 ','02 认证身份','03 资料认证','04 完成'],
            pathArr: ['/ssprinting/basicOldAge/bo1','/ssprinting/basicOldAge/bo2','/ssprinting/basicOldAge/bo3','/ssprinting/basicOldAge/bo4']
		}
	}
}
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
