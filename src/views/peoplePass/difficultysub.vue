<template>
	<div class="wrap passportApplication">  
		 <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">  
        <layoutHeart></layoutHeart>
        <layout-subject title="困难残疾人生活补贴" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
			stepData:['01 事项窗口','02 资料提交','03 输入联系方式','04 完成'],
            pathArr: ['/education/difficultysub/manage','/education/difficultysub/idcard','/education/difficultysub/account','/education/difficultysub/materials','/education/difficultysub/materials']
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
