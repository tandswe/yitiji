<template>
	<div class="wrap crimeTestifyFn">  
		 <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
        <layoutHeart></layoutHeart>
        <layout-subject title="因私来往香港、澳门、台湾地区通行证业务" :stepDatas="stepData" :paths="pathArr"></layout-subject>
        <layoutfoot></layoutfoot>
    </div>
	</div>
</template>

<script>
import layoutHeart from '@/components/layoutHeart'
import layoutSubject from "@/components/layoutSubject"
import layoutfoot from "@/components/layoutfoot"
import eHeadsp from "@/views/eHeadsp"
export default {
	name:'crimeTestifyFn',
	components:{layoutSubject,layoutHeart,layoutfoot,eHeadsp},
	data(){
		return{
			active:0,
			stepData:[],
            pathArr: ['/jiaotongCenter']
		}
	}
}
</script>
<style>
.wrap{
	height:100%;
}
/*.crimeTestifyFn .main .main-center .content{
	padding: 0;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}*/
.crimeTestifyFn .main .main-center .content{
	padding: 0;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.but-tt li:nth-child(3n){
            margin-right: inherit;
        }
</style>
<style lang="scss" scoped>
    .wrap{
        width: 100%;
		height: 100%;
    }
</style>
