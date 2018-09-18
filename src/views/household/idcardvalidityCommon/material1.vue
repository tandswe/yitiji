<template>
    <div class="article clearfix">   
        <article>
          <p style="text-align:left;">请对准指纹口按压拇指 60s</p>
            <div class="phone">
                <ul style="color:#fff;" >

                                  <li>受理派出所领取</li>
                                  <li>邮寄领取</li>
                </ul>
                    
            </div>

            <div style="width:100%;text-align:center;margin-top:10px;">
                <router-link to="/idcardvalidityCommon/material2">资料提交：下一步(第3步)</router-link>
            </div>

        </article>
        
    </div>
</template>

<script>
    export default {
        components:{},
        data() {
            return {
                id:require('@/img/views/fingerprint.png')
               
            }
        },
        computed:{
           
        },
        methods:{
          back(){
              this.$router.push({path:'/'})
          },
          open() {
            this.$alert('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                type: 'info',
                message: `action: ${ action }`
                });
            }
        });
      }
        }
    }
</script>

<style lang="scss" scoped>
.article{
 
    text-align:center;
    vertical-align: middle;
    position: relative;
    display: flex;

    article{
        width:85%;
        margin:0 auto;
        
        p{
            text-align:left; 
            margin-top:45px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;

        }
        // div{
        //     margin-top:97px;
            .phone{
                display:flex;
                justify-content:center;
                margin-top:150px;
                 ul{
                    width:460px;
                    margin:0 auto;
                    li{
                        width:100%;
                        height:76px;
                        line-height: 76px;
                        margin-bottom:30px;
                        background:rgba(0,112,224,1);
                        border-radius:6px;
                        text-align: center;
                        cursor: pointer;

                    }
                }
            }
        }
    }
// }
</style>
