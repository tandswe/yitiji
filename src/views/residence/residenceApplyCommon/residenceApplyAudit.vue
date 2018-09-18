<template>
    <div class="warp-details">
        <div v-if="!showText">
            <h1>请先阅读相关流程</h1>
            <div class="warp-text">
                <p>本业务只适用于流动人口申领居住证</p>
            </div>
            <button-sub btname="下一步" @click.native="next" class="next-btn"></button-sub>
        </div>
        <apply-audit-two v-else></apply-audit-two>
    </div>
</template>

<script>
    import ApplyAuditTwo from './ApplyAuditTwo'
    import buttonSub from "@/components/base/buttonSub"

    export default {
        components: {
            ApplyAuditTwo,
            buttonSub
        },
        data() {
            return {
                showText: false
            }
        },
        computed: {},
        methods: {
            next() {
                this.showText = !this.showText
            }
        }
    }
</script>

<style lang="scss" scoped>
    .warp-details {
        height:100%;
        overflow: hidden;
        h1 {
            padding: 51px 0 47px 65px;
            text-align: left;
            font-size: 28px;
        }
        >div{
           height: 100%; 
        }
        .warp-text {
            width: 1170px;
            height: 70%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #EEF9FF;
            border: 1px solid #D4E7F9;
            color: #8BCAFF;
        }
        .next-btn {
            margin-top: 40px;
        }
    }
</style>
