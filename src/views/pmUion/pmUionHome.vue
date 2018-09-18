<template>
	<div class="wrap passportApplication">   
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
        <layoutHeart></layoutHeart>
        <layout-subject title="省残联" :stepDatas="stepData" :paths="pathArr" :btnshow="false"></layout-subject>
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
			stepData:[],
            pathArr: ['/pmUion/pmUionHomeSub']
		}
	}
}
</script>



<style lang="scss" scoped>

.wrap{
    height:100%;
}
</style>
