<template>
    <div class="article clearfix">   
        <article>
            <div class="weather-warp"><h1>请仔细阅读业务办理须知</h1></div>
            <section class="notice">
                <center><h4>本业务只适用于肇庆市流动人口申报居住登记条款</h4></center>
                <div class="noticew">
                    <p > 内容待定 </p> 
                   
                </div>

            </section>
           
           
        </article>
        <div @click="substep"  style="margin-top:1%">
                <button-sub btname="同意"></button-sub>
            </div> 
    </div>
</template>

<script>
 import buttonSub from "@/components/base/buttonSub"
    export default {
        components:{buttonSub},
        data() {
            return {
                ruleForm: '',
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

 @media screen and (max-width:1200px){
    .txt{height: 850px !important;
            }
      .weather-warp{
                    margin-top: 1vh;
                    margin-bottom: 1vh;}
    .weather-warp  h1{
                font-size: 1.6vh;
                text-align:left;
             }
        }
.article{      
    padding-top:20px;
    text-align: left;
    font-size:24px;
    width:100%;
    article{
        width:1169px;
        margin:0 auto;
        height:100%;
       
        p{
            margin-bottom:20px;
        }
        .notice{
            width:1169px;
            height:35vh;
            background:#eef9ff;
            border:1px solid #d4e7f9;
            margin:20px auto;
            padding:25px 55px;
            box-sizing: border-box;
            overflow-y:auto;
            @media screen and (max-width:1200px) {
                font-size:42px;
            }
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
                 @media screen and (max-width:1200px) {
                    p{
                        font-size:30px !important;
                        line-height:50px;
                    }
                }
        
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



