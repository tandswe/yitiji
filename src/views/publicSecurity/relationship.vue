<template>
    <div class="wrap"> 
          
       <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">  
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="亲属关系证明" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
                stepData: ["01 选择办理方式","02 身份证录入","03 户口本录入","04 材料录入","05 完成"],
                active:0,
                pathArrs: ['pl1','pl2','pl3','pl4','pl5'],
                pathName:"publicSecurity"
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
