<template>
    <div class="article clearfix">   
        <article>
            <p style="text-align:left;">请拿好小票，等待认证结果</p>
           
            <div class="finish clearfix">
              <div class="wait ">
                   <div class="wfinish">
                       完成</div>
                   <div class="wwait">
                       缴费成功<br>
                       请取回您的银行卡</div>
              </div>
            </div>
           
           
        </article>
    </div>
</template>

<script>
    export default {
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

 

.article{
   
    
    padding-top: 51px;
    text-align: left;
    font-size:24px;
    width:100%;
    article{
        width:90%;
        margin:0 auto;
        p{
            margin-bottom:90px;
        }
        .finish{
            margin:0 auto;
            width:720px;
            height:360px;
            background:rgba(246,246,246,1);
            border-radius:20px;
            border:1px solid #ddd;
            .wait{
                margin:138px auto;
                width:275px;
                height:100px;
                background:url('~@/img/views/finish@2x.png') no-repeat;
                background-size: 80px 80px;
                .wfinish{
                    margin-left:100px;
                    width:180px;
                    height:32px;
                    font-size:32px;
                    font-family:MicrosoftYaHei-Bold;
                    color:rgba(51,51,51,1);
                    line-height:36px;
                    font-weight: 600;
                }
                .wwait{
                    margin-top:15px;
                    margin-left:100px;
                    width:245px;
                    height:28px;
                    font-size:28px;
                    color:rgba(51,51,51,1);
                    line-height:36px;
                }
            }
        }
    }
    

    
     
}


</style>
