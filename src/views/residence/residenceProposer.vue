<template>
    <div class="wrap">   
         <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
                    <layoutHeart></layoutHeart>
                <layout-subject title="申报居住登记" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
                stepData: ["1 资格校验","2 填写资料","3 上传文件","4 提交审核"],
                active:0,
                pathArr: ['/residenceAudit','/residenceMaterial','/residenceQualification','/residenceUploading']
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}

</style>
