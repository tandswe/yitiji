<template>
    <div class="wrap">   
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="驾驶人审验（不含校车驾驶人）" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
        components:{layoutSubject,layoutHeart,layoutfoot,eHeadsp},
        mounted(){
            
            
        },
        data() {
            return {
                stepData: ["01 身份证录入","02 面部特征识别","03 材料录入","04 审验"],
                active:0,
                pathArrs: ['driverCheck','driverSub','driverFees','driverSucceed'],
                pathName:"jiaotongfa/driverInspectCommon" 
            }
        },
        computed:{
            pathArr(){
                return this.pathArrs.map((val,index)=>{
                    return `/${this.pathName}/${val}`
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
