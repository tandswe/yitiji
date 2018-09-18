<template>
	<div class="wrap passportApplication"> 
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">  
        <layoutHeart></layoutHeart>
        <layout-subject title="南粤扶残助学" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
            pathArr: ['/pmUion/poverty/supAidTips','/pmUion/poverty/supAidCardCheck','/pmUion/poverty/supAidFinished']
		}
	},
	methods:{
		changeStepData(){
//			this.$set(this.stepData, 2, '02 进度查询')
			this.active=2
			console.log(11111)
		}		
	},
	mounted(){
		this.$bus.on("flowChange",this.changeStepData)
	}
}
</script>
<style lang="scss" scoped>

.wrap{
    height:100%;
}
</style>
