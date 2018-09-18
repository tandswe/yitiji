<template>
	<div class="wrap passportApplication">   
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
        <layoutHeart></layoutHeart>
        <layout-subject title="省妇联/残疾人证申请办理" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
	name:'passportApplication',
	components:{layoutSubject,layoutHeart,layoutfoot,eHeadsp},
	data(){
		return{
			active:0,
			stepData:['01 事项窗口','02 资料提交','03 完成'],
            pathArr: ['/pmUion/CJStep0','/pmUion/CJStep1','/pmUion/CJStep2']
		}
	},
	methods:{
		
	}
}
</script>
<style lang="scss" scoped>

.wrap{
    height:100%;
}
</style>
