<template>
    <div class="wrap"> 
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">   
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="重度残疾人护理补贴" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
                stepData: ["01 选择办理方式","02身份证录入","03 户口本录入","04 材料录入","05 提交申请"],
                active:0,
                pathArrs: ['severLogin','severID','severMaterials',"severRegkstered","severSub"],
                pathName:"education/peopleCommon" 
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
