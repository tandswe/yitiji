<template>
    <div class="article clearfix">   
        <article>
          <p style="text-align:left;">请将您的第二代身份证放入感应区</p>
              <id-card class="idcard">

              </id-card>
        </article>
       
    </div>
</template>

<script>
    import idCard from '@/views/taxation/taxComponents/idCard.vue'
    export default {
        components:{idCard},
        data() {
            return {
               
               
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
            margin-top:30px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;

        }
        .idcard{
            margin:97px auto 0;
            width:625px;
            height:370px;
            background:#e7f1fb;
            display:flex;
            justify-content:center;
            align-items:center;
            // img{
            //     width:448px;
            //     height:269px;
            // }

         }
         
        }
    }
</style>
