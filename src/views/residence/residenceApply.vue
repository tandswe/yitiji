<template>
    <div class="wrap">   
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart></layoutHeart>
        <layout-subject title="申领居住证" :stepDatas="stepData" :paths="pathArr" :isShowSub="true"></layout-subject>
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
        data() {
            return {
                stepData: ["01 资格校验","02 填写资料","03 上传文件","04 提交审核"],
                active:0,
                pathArr: ['/residenceApplyAudit','/residenceApplyMaterial','/residenceApplyQualification','/residenceApplyUploading']
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
