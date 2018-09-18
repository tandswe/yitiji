<template>
    <div class="wrap">   
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="农村特困人员供养预约申请" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
                stepData: ["01 本人身份证登录","02 面部特征识别","03 优待卡续卡"],
                active:0,
                pathArrs: ['secCardLogin','secCardScan','socialAccredit'],
                pathName:"secCardEntrance" 
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
