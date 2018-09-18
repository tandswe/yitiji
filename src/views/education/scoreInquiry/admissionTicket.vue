<template>
    <div class="article clearfix">   
        <article>
          <p style="text-align:left;">请将您的第二代身份证放入感应区</p>
              <div>
                  <div>准考证号：<input type="text"></div>
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
            margin:97px auto;
            width:720px;
            height:330px;
            background:rgba(246,246,246,1);
            border:1px solid rgba(221,221,221,1);
            border-radius:20px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:24px;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:36px;
            input{
                width:360px;
                height:54px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(204,204,204,1);
                font-size:24px;
                font-family:MicrosoftYaHei;
                font-weight:400;
            }

         }
         
        }
    }
// }
</style>
