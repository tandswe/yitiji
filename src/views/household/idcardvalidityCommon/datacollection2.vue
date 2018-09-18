<template>
    <div class="article clearfix">   
        <article>
            <p style="text-align:left;">请放置好你的照相回执 60s</p>
            <div class="flex-start searchwrap">
                <div class="">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <button>手动输入</button>
                </div>
                <div class="back">
                    <img :src="pic1">
                </div>
            </div>
            <div style="width:100%;text-align:center;margin-top:10px;">
                <router-link to="/idcardvalidityCommon/datacollection3">数据采集：下一步(第3步)</router-link>
            </div>
           
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pic1:require('@/img/views/returnreceipt.png'),
                setTime:60,
                timer:'',
            }
        },
        created(){
              setTimeout(() => {
                this.setTime--;
                
            }, 1000)
        },
        watch:{
          setTime(newV,oldV){
            this.setTime=newV
          }
        },
        computed:{
          
        },
        methods:{

        }
    }
</script>
<style>
.el-input{
    font-size:24px;
}
</style>


<style lang="scss" scoped>

 

.article{
   
    
    padding-top:20px;
    text-align: left;
    font-size:24px;
    width:100%;
    article{
        width:1169px;
        margin:0 auto;
        p{
            margin-bottom:20px;
        }
        .searchwrap{
            
            width:560px;
            margin:55px auto;
            button{
               width:137px;
               height:52px;
               background:url(../../../img/views/search2.png);
               background-size:cover;
               color:#fff;
               font-size:24px;
            }
            
        }
        .back{
                width:650px;
                height:420px;
                margin:55px auto;
                background:#eef9ff;
                border:1px solid #d4e7f9;
                text-align:center;
                line-height: 420px;
                img{
                    width:234px;
                    height:264px;
                }
            }

    }
    

    
     
}


</style>
