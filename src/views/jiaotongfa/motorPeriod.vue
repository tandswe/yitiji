<template>
    <div class="wrap">   
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="机动车驾驶证转入换证" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
                stepData: ["01 认证身份","02 资料提交","03 缴费", "04 完成"],
                active:0,
                pathArrs: ['periodCheck','periodSub','periodFees','periodSucceed','advancedContact'],
                pathName:"jiaotongfa/motorCommon" 
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
