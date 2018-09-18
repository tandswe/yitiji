<template>
	<div class="wrap">  
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart></layoutHeart>
        <layout-subject title="机动车驾驶证有效期满换证" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
			stepData:['01 认证身份','02 资料提交','03 缴费','04 完成'],
            pathArr: ['/jiaotongfa/evidence/e1','/jiaotongfa/evidence/e2','/jiaotongfa/evidence/e3','/jiaotongfa/evidence/e4']
		}
	}
}
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
