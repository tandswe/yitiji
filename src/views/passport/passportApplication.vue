<template>
	<div class="wrap passportApplication"> 
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">  
        <layoutHeart></layoutHeart>
        <layout-subject title="港澳台签注" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
			stepData:['01 插入港澳通行证','02 选择签注选项','03 付款','04 完成'],
            pathArr: ['/passport/gaStep0','/passport/gaStep1','/passport/gaStep2/pay-type-choose','/passport/gaStep3']
		}
	}
}
</script>
<style lang="scss" scoped>

.wrap{
    height:100%;
}
</style>
