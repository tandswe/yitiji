<template>
    <div class="article clearfix">   
        <div v-if="ruleForm">
                <article>
               <div class="weather-warp"><h1>请仔细阅读业务办理须知</h1></div>
                <section class="notice">
                    <center><h4>基本养老金领取资格认证（生存认证）办理须知</h4></center>
                    <div class="noticew">
                        <p > 内容待定 </p> 
                    

                    </div>

                </section>
            </article>
            <div @click="substep"  style="margin-top:5%">
                <button-sub btname="同意"></button-sub>
            </div>
        </div>
        <hint></hint>

    </div>
</template>

<script>
import hint from '../sspringCommonents/hint'
 import buttonSub from "@/components/base/buttonSub"
    export default {
        components:{
            hint,
            buttonSub
        },
        data() {
            return {
                ruleForm: false,
                rules: ''
            }
        },
        computed:{
           
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>


.article{      
    padding-top:20px;
    text-align: left;
    font-size:24px;
    width:100%;
    article{
        width:1169px;
        margin:0 auto;
        
        p{
            margin-bottom:20px;
        }
        .notice{
            width:1169px;
            height:420px;
            background:#eef9ff;
            border:1px solid #d4e7f9;
            margin:0 auto;
            padding:25px 55px;
            box-sizing: border-box;
            overflow-y:auto;
            h3{
                width:263px;
                height:25px;
                font-size:24px;
                color:rgba(51,51,51,1);
                line-height:36px;
            }
            .noticew{
                margin-top:10px;
                // font-size:20px;
    
                h2{
                    font-size: 24px;
                    color: #333;
                    line-height: 40px;
                     margin-left: 30px;
                }
                h3{
                    font-size: 20px;
                    color: #333;
                    line-height: 40px;
                    width: 100%;
                    height: 40px;
                    margin-left: 40px;
                }
                p{
                      margin: 0; padding: 0; 
                      line-height:24px;
                      font-size: 16px;
                      color: #333;
                }
            }
        }
    }    
}
.bot-but{
    width: 28%;
    margin: 30px auto;
    button{
        width:154px;
        height:56px;
        background:rgba(0,140,255,1);
        border-radius: 25px;
        color: #fff;
    }
}
.but-b{
    background:#ccc !important;
    margin-right: 40px;
}

</style>
