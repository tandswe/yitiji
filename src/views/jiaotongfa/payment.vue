<template>
	<div class="wrap">  
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart></layoutHeart>
        <layout-subject title="您正在办理驾驶人交通违法缴费业务" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
			stepData:['01 违法及缴费信息','02 确认插入银行卡','03 请输入密码','04 完成'],
            pathArr: ['/jiaotongfa/payment/pay1','/jiaotongfa/payment/pay2','/jiaotongfa/payment/pay3','/jiaotongfa/payment/pay4']
		}
	}
}
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
