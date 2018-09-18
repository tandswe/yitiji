<template>
    <div class="article clearfix">   
        <article>    
            <p style="text-align:left;color:#000;">打印结果 <span style="color:#0070e0">10</span> s</p>      
            <div class="finish ">
              <div class="wait ">
                   <div class="wfinish">
                       打印成功</div>
                  
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
                rules: '',
                
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
            margin:170px auto;
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
                    height:100px;
                    line-height: 100px;
                    font-size:32px;
                    font-family:MicrosoftYaHei-Bold;
                    color:rgba(51,51,51,1);
                    font-weight: 600;
                }
               
            }
        }
    }     
}


</style>
