<template>
    <div class="warp">
        <div>
            <div class="essentialCenter">
                <h1>个人基本信息</h1>
                <p>姓名：苏东坡</p>
                <p>证件号码：440923199202156632</p>
            </div>
            <div class="warp-hr"></div>
            <div class="essentialCenter">
                <h1>可申领居住证的地区</h1>
                <p>居住登记地区：广东省肇庆市</p>
            </div>
            <div class="warp-hr"></div>
            <div class="btnCenter" @click="check">
                <buttonSub btname="确认并校验申领资格"></buttonSub>
            </div>
        </div>

        <layout-dialog :isDialogShow="isSuccessDialogShow">
            <div class="lscancel-dialog">
                <div class="lscancel-dialog-t">
                    校验通过
                </div>
                <div class="lscancel-dialog-b" @click="next">
                    <buttonSub btname="下一步 5s"></buttonSub>
                </div>
            </div>
        </layout-dialog>

        <layout-dialog :isDialogShow="isFailDialogShow">
            <div class="lscancel-dialog">
                <div class="lscancel-dialog-t no-pass-t">
                    校验不通过
                </div>
                <div class="lscancel-dialog-warn">
                    {{failText}}
                </div>
                <div class="lscancel-dialog-b" v-if="failType==1">
                    <button @click="backToHome">
                        返回首页
                    </button>
                </div>
                <div class="lscancel-dialog-b" v-if="failType==2">
                    <button @click="backToHome" class="no-active">
                        返回首页
                    </button>
                    <button @click="register">
                        申报居住登记
                    </button>
                </div>
            </div>
        </layout-dialog>
    </div>
</template>

<script>
    import layoutDialog from '@/components/layoutDialog'
    import buttonSub from "@/components/base/buttonSub"
    export default {
        components: {
            layoutDialog,
            buttonSub
        },
        data() {
            return {
                isSuccessDialogShow: false,
                isFailDialogShow: false,

                failType: 1,
                failText: '您的居住登记未满半年，申领资格校验不通过。如有疑问，请到受理机构咨询'
            }
        },
        computed: {},
        methods: {
            check() {
                // todo: 模拟数据返回结果后的操作，待完成
                // if (false) {
                    this.isSuccessDialogShow = true
                // } else {
                //     this.isFailDialogShow = true
                //     this.failType = 2
                //     this.failText = '您的居住登记已注销，请先申报居住登记'
                //
                // }
                // this.$axios.get('/inteGration/api/jzz/postqualifications?ywlx=0101&gmsfhm=1').then(res => {
                // })
            },
            next() {
                this.isSuccessDialogShow=false
                this.$store.commit('changeTabIndex', {count: 1})
            },
            backToHome() {
                this.$router.push('/')
            },
            register() { // 申报居住登记

            }
        },
        created() {
            this.$axios.get('/inteGration/api/jzz/getLiveAddress?gmsfhm=1').then(res => {
            })
        }
    }
</script>

<style lang="scss" scoped>
    .warp {
        height: 100%;
        width: 90%;
        margin: 47px auto 0;
        text-align: left;
        
       .essentialCenter{
           @media screen and (max-width: 1200px) {
                display:flex;
                flex-direction:column;
                p{
                    margin:1vh 0;
                }
            }
       }
        p {
            width: 50%;
            display: inline-block;
            // padding-bottom: 47px;
            font-size: 24px;
            color: #333;
            @media screen and (max-width: 1200px) {
                font-size:3vw;
                width:100%;
            }
        }
        h1 {
            margin-bottom: 47px;
            font-size: 28px;
        }
        .warp-hr {
            height: 1px;
            background-color: #ddd;
            width: 100%;
            margin: 48px 0;
        }
        .btnCenter {
            text-align: center;
            @media screen and (max-width:1200px){
                margin-top:4vh;
            }
            button {
                width: 280px;
                height: 56px;
                background: rgba(0, 112, 224, 1);
                border-radius: 8px;
                color: #ffffff;
            }
        }

    }

    .lscancel-dialog{
        width: 100%;
        height: 100%;
        padding-bottom: 36px;
        .lscancel-dialog-t{
            font-size: 28px;
            color: #333333;
            line-height: 28px;
            font-weight: bold;
            padding-top: 67px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 75px;
            text-align: left;

            &.no-pass-t {
                padding-bottom: 0;
            }
        }
        .red{
            color: #DE3434;
        }
        .lscancel-dialog-warn {
            padding: 20px 48px 64px;
            color: #E82222;
            line-height: 36px;
            font-size: 24px;
        }
        .lscancel-dialog-b{
            padding: 0 48px;
            text-align: right;
            button{
                display: inline-block;
                text-align: center;
                width:180px;
                height:56px;
                line-height: 56px;
                font-size:24px;
                border-radius:5px;
                background: #0070E0;
                color: #FFFFFF;

                &.no-active {
                    background: #EEEEEE;
                    color: #333333;
                    margin-right: 30px;
                }
            }
        }
    }
</style>
