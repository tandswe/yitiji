<template>
    <div class="article clearfix">   
        <article>
            <!-- <p >
               请根据提示作出相应动作
            </p> -->
          
                 <img :src="id">
                 <div>请刷身份证</div>
           
            
        </article>
        
    </div>
</template>

<script>
    export default {
        components:{},
        data() {
            return {
                id:require('@/img/views/id@2x.png')
               
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
        // p{
        //     text-align:left; 
        //     margin-top:45px;

        // }
        // div{
        //     margin-top:97px;
            img{
                width: 388px;
                height:232px;
                margin-top: 120px;
            }
            div{
                font-size: 28px;
                color: #333;
                margin-top: 45px;
            }
        }
    }
// }
</style>
