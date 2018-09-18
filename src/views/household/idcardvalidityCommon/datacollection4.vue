<template>
    <div class="article clearfix">   
        <article>
          <p style="text-align:left;">请对准指纹口按压拇指 60s</p>
          
                 <img :src="id">
            <div class="sure">
               请确保本人指纹，放置入录入口
            </div>

            <div style="width:100%;text-align:center;margin-top:20px;">
                数据采集：(完毕)
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
            img{
                width: 560px;
                height:420px;
                margin-top: 120px;
            }
            div{
                font-size: 28px;
                color: #333;
                margin-top: 45px;
            }
            .sure{
                width:100%;
                text-align:center;
                font-size:18px;

            }
        }
    }
// }
</style>
