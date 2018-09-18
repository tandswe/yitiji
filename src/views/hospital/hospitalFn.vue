<template>
	<div class="wrap hospital-fn">   
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart></layoutHeart>
        <layout-subject title="定点医院查询" :stepDatas="stepData" :paths="pathArr" :isShowBtn="false"></layout-subject>
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
	name:'hispitalSearch',
	components:{layoutSubject,layoutHeart,layoutfoot,eHeadsp},
	data(){
		return{
			active:0,
			stepData:[],
            pathArr: ['/hospital/hospitalSearch']
		}
	}
}
</script>
<style>
.hospital-fn .main .main-center .content{
	padding: 0;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}
</style>
<style lang="scss" scoped>

.wrap{
    height:100%;
}
</style>
