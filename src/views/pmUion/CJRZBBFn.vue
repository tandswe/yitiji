<template>
    <div class="wrap passportApplication">
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
        </div>
        <div class="layoutCon">
            <layoutHeart></layoutHeart>
            <layout-subject title="残疾人证申请办理" :stepDatas="stepData" :paths="pathArr"></layout-subject>
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
        name: 'passportApplication',
        components: {layoutSubject, layoutHeart, layoutfoot, eHeadsp},
        data() {
            return {
                active: 0,
                stepData: ['01 确认身份', '02 完善信息', '核对信息', '03 完成'],
                pathArr: ['/pmUion/apply/CJRZBBTips', '/pmUion/apply/informationSubmission', '/pmUion/CJRZBBFn', '/pmUion/apply/finish'] //todo: 继续修改
            }
        },
        computed: {
            headtitle() {
                return this.$store.state.home.headTabTitle
            }
        },
        created() {

        },
        watch: {
            headtitle(newv, oldv) {
                this.stepData[1] = newv
            }
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
    .wrap {
        height: 100%;
    }
</style>
