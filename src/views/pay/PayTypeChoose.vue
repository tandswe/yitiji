<template>
    <div id="pay-type-choose">
        <div class="title">
            请选择缴费方式 60s
        </div>
        <div class="pay-content">
            <div class="pay-num">应缴费用：{{payMoney}}元</div>
            <ul class="type-list">
                <li @click="toWeixinPay"><i class="wx-logo"></i>微信缴费</li>
                <li @click="toAliPay"><i class="ali-logo"></i>支付宝缴费</li>
                <li @click="toBandPay"><i class="band-logo"></i>银行卡缴费</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PayTypeChoose',
        data() {
            return {
                payMoney: '20.00'
            }
        },
        methods: {
            toWeixinPay() {
                this.$router.push({name: 'weixinPay'})
            },
            toAliPay() {
                this.$router.push({name: 'aliPay'})
            },
            toBandPay() {
                this.$router.push({name: 'bandPay'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    #pay-type-choose {
        @media screen and(max-width: 1200px){
            font-size: 2.5vw;
        }
        .title {
            color: #333333;
            padding: 48px 100px 58px;
            text-align: left;
        }
        .pay-content {
            padding: 0 60px;
            text-align: center;

            .pay-num {
                margin-bottom: 30px;
                color: #333333;
                text-align: center;
            }
            ul {
                width: 460px;
                margin: 0 auto;
                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 80px;
                    line-height: 80px;
                    margin: 0 auto 30px;
                    color: #FFFFFF;
                    background: #0070E0;
                    border-radius:6px;
                    @media screen and(max-width: 1200px){
                        height: 120px;
                        line-height: 120px;
                    }
                    &:hover {
                        cursor: pointer;
                    }

                    i {
                        display: inline-block;
                        width: 44px;
                        margin-right: 17px;
                        background-size: cover;
                        &.wx-logo {
                            height: 38px;
                            background-image: url(../../img/weixin_logo.png);
                        }
                        &.ali-logo {
                            height: 44px;
                            background-image: url(../../img/ali_logo.png);
                        }
                        &.band-logo {
                            height: 33px;
                            background-image: url(../../img/band_logo.png);
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:1200px){

        #pay-type-choose {
            .pay-content {
                margin-top: 140px;
                ul.type-list {
                    li {
                        margin-bottom: 70px;
                    }
                }
            }
        }
    }

    /*@media screen and (min-width:1200px){*/
        /*ul.type-list {*/
            /*li {*/
                /*margin-bottom: 20px;*/
            /*}*/
        /*}*/
    /*}*/
</style>