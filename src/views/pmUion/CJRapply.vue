<template>
	<div class="wrap passportApplication">
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">    
        <layoutHeart></layoutHeart>
        <layout-subject title="残疾人证补办" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
            pathArr: ['/pmUion/reapply/window','/pmUion/reapply/sub','/pmUion/reapply/finish']
		}
	},
	computed:{
       headtitle(){
		   return this.$store.state.home.headTabTitle
	   }
	},
	created(){
        
	},
	watch:{
        headtitle(newv,oldv){
           this.stepData[1]=newv
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
