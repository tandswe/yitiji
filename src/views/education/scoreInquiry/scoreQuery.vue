<template>
    <div class="article clearfix">   
        <article>

              <div>
                
                    <p>考生号：0104114858</p>
                    <p>姓名：易烊千玺</p>
                    <hr>
                    <ul class="flex">
                        <li>语文：100分</li>
                        <li>数学：100分</li>
                        <li>英语：100分</li>
                        <li>综合：200分</li>
                        <li>综合：200分</li>
                    </ul>
                
              </div>
        </article>
       
    </div>
</template>

<script>
    export default {
        components:{},
        data() {
            return {
                id:require('@/img/views/idcard03.png')
               
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
        text-align: center;
        p{
            text-align:left; 
            margin-top:45px;
            height:28px;
            font-size:28px;
            color:rgba(51,51,51,1);
            line-height:36px;

        }
        div{
            margin:70px auto;
            width:720px;
            height:400px;
            background:rgba(246,246,246,1);
            border:1px solid rgba(221,221,221,1);
            border-radius:20px;
            padding:45px 30px;
            box-sizing:border-box;
            p{
                margin:0;
                padding:0;
                font-size:24px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:36px;
                height:50px;
            }
            ul{
                width:100%;
                 
                li{
                    width:325px;
                    text-align: center;
                    margin-top:10px;
                    height:55px;
                    font-size:24px;
                    font-family:MicrosoftYaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:36px;
                }
            }

         

         }
         
        }
    }
// }
</style>
