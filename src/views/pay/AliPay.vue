<template>
    <div id="ali-pay">
        <div class="title">
            请打开手机用支付宝扫一扫二维码 {{times}}s
        </div>
        <div class="content">
            <div class="qr-code-wrap">
                <div class="qr-code">
                    <div>
                        <img src="../../img/ali_qrcode@2x.png" height="307" width="305"/>
                    </div>
                    <div class="money">
                        &yen;12.00
                    </div>
                </div>
            </div>
            <div class="pay-text">
                <img src="../../img/ali_pay_text@2x.png" height="65" width="182"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AliPay',
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
    #ali-pay {
        .title {
            font-size: 28px;
            color: #333333;
            padding: 48px 100px 58px;
            text-align: left;
        }
        .content {
            .qr-code {
                width: 406px;
                height: 430px;
                margin: 0 auto;
                background-color: #019FE8;
                border: 1px dashed #cccccc;
                img {
                    width: 318px;
                    height: 315px;
                    margin: 43px 0 22px;
                }
                .money {
                    color: #ffffff;
                    font-size: 28px;
                }
            }
            .pay-text {
                img {
                    width: 182px;
                    height: 65px;
                    margin-top: 20px;
                }
            }
        }
    }
</style>