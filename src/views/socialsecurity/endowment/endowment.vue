<template>
    <div class="wrap">   
        <layoutHeart>Header</layoutHeart>
        <layout-subject title="养老保险领取资格证" :stepDatas="stepData" :paths="pathArr"  ></layout-subject>
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
                stepData: ["01 填写表单信息","02 扫描身份证","03 拍摄申请人动作","04 完成"],
                active:0,
                pathArrs: ['enInfo','enScan','enShoot','enFinish'],
                pathName:"endowment" 
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
