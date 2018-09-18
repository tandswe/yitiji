<template>
    <div id="band-pay" class="passport-set">
        <div class="passport-title pb98">
            请插入您的银联卡 {{times}}s
        </div>
        <img src="../../img/passport/passport-guide.png">
    </div>
</template>

<script>
    export default {
        name: 'BandPay',
        data() {
            return {
                times: 60
            }
        },
        methods: {},
        created() {
            setInterval(() => {
                this.times -= 1
                if (this.times <= 0) {
                    // todo
                    this.times = 0
                }
            }, 1000)
        }
    }
</script>

<style lang="scss" scoped>
    .passport-title{
        font-size: 28px;
        color: #333333;
        padding-left: 100px;
        padding-top: 48px;
        padding-bottom: 176px;
        text-align: left;
    }
    .pb98{
        padding-bottom: 98px;
    }
    .passport-set{
        img{
            display: block;
            width: 560px;
            height: 420px;
            margin: 0 auto;
        }
    }
</style>