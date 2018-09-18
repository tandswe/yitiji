<template>
	<div class="wrap">  
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart></layoutHeart>
        <layout-subject title="社保清单打印" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
			stepData:['01 认证身份','02 查询/打印','03 完成'],
            pathArr: ['/ssprinting/print/print1','/ssprinting/print/print2','/ssprinting/print/print3']
		}
	}
}
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
