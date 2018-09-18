<template>
    <div class="wrap">   
         <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart></layoutHeart>
        <layout-subject title="签注居住证" :stepDatas="stepData" :paths="pathArr" :isShowSub="true"></layout-subject>
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
                stepData: ["01 选择办理方式","02身份证录入","03 面部特征识别","04 材料录入","05 签注"],
                active:0,
                pathArr: [
                    '/endorsementres/residenceApplyAudit',
                    '/endorsementres/residenceApplyMaterial',
                    '/endorsementres/residenceApplyQualification',
                    '/endorsementres/residenceApplyUploading',
                    '/endorsementres/residenceEndorsement']
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
