<template>
    <div class="wrap">   
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="气象证明打印业务" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
        <layoutfoot></layoutfoot>
    </div>
</template>

<script>
    import layoutHeart from '@/components/layoutHeart'
    import layoutSubject from "@/components/layoutSubject"
    import layoutfoot from "@/components/layoutfoot"
    export default {
        components:{layoutSubject,layoutHeart,layoutfoot},
        mounted(){
            
            
        },
        data() {
            return {
                stepData: ["01 事项窗口","02 资料提交","03 完成"],
                active:0,
                pathArrs: ['weatherWindow','weatherData','weatherSucceed'],
                pathName:"weatherEntrance" 
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
