<template>
    <div class="wrap">   
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="高龄老人津贴发放资格" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
                stepData: ["01 身份证登录","02 户口本扫描","03 津贴申请表", "04 开户存折/卡","05 联系方式"],
                active:0,
                pathArrs: ['advanceLogin','advancedScan','advancedAllowance','advancedOpen','advancedContact'],
                pathName:"advancedEntrance" 
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
