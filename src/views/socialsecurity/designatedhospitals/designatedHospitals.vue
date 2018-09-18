<template>
    <div class="wrap">   
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="社保查询及打印 / 医疗保险 / 缴费历史汇总表" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
                stepData: ["01 选择登陆方式"],
                active:0,
                pathArrs: ['designstipSearch'],
                pathName:"designatedhospitals" 
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

