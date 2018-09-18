<template>
    <div class="article clearfix">   
        <article> 
            <div class="finish ">
              <div class="wait ">
                   <div class="wfinish">
                       您好，系统查询不到您的居住证信息</div>
                   <div class="wwait">
                       如需帮助，请联系工作人员！
                       </div>
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
        height:100%;
        margin:0 auto;
        .finish{
            margin:170px auto 0;
            width:720px;
            height:360px;
            background:rgba(246,246,246,1);
            border-radius:20px;
            border:1px solid #ddd;
            .wait{
                margin:138px auto 0;
                width:60%;
                height:100px;
                background:url('~@/img/views/不开心@2x.png') no-repeat;
                background-size: 80px 80px;
                .wfinish{
                    margin-left:100px;
                    width:380px;
                    height:32px;
                    font-size:20px;
                    font-family:MicrosoftYaHei-Bold;
                    color:rgba(51,51,51,1);
                    line-height:36px;
                    font-weight: 600;
                }
                .wwait{
                    margin-top:15px;
                    margin-left:100px;
                    width:310px;
                    height:28px;
                    font-size:19px;
                    color:rgba(51,51,51,1);
                    line-height:36px;
                }
            }
        }
    }     
}


</style>
