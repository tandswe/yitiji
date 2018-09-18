<template>
    <div class="wrap">   
        <layoutHeart>Header</layoutHeart>
        <div class="main">
            <section class="main-left"></section>
            <section class="main-center">                
                <p>正在办理：税务</p>
                <div class="content">
                    
                     <div class="article clearfix">   
                         
                        <article>
                             <p style="text-align:left;color:#000;">请选择办理选项</p>
                             <ul style="color:#fff;" class="flex educationList">
                                  <router-link :to="{path:'/taxation/individualtaxList'}"><li>个税清单打印</li></router-link>
                                  <router-link :to="{path:'/taxation/individualtaxProve'}"><li>个税完税证明打印</li></router-link>
                                  <router-link :to="{path:'/taxation/individualtaxOther'}"><li>个人其他税费证明打印</li></router-link>
                                  <router-link :to="{path:'/taxation/boatcartTax'}"><li>车船税缴纳</li></router-link>
                             </ul>                        
                        </article>
                     </div>
                </div>
            </section>
            
            <section class="main-right">
                <div class="buttons">
                    <router-link to="/">
                  <button type="button" class="callback" @click="back">返回首页</button>
                    </router-link>
                 </div>
            </section>      
        </div>
        <layoutfoot></layoutfoot>
    </div>
</template>

<script>
    import layoutHeart from '@/components/layoutHeart'
    import layoutSubject from "@/components/layoutSubject"
    import layoutfoot from "@/components/layoutfoot"
    export default {
        components:{layoutSubject,layoutHeart,layoutfoot},
        mounted(){
  
        },
        //  watch: {
        // '$route'(to, from) {
        //     this.getStatus(this.$route.path)
        // }},
        mothods:{
         
        },
        data() {
            return {
               
            }
        },
        computed:{
          
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
.main{
  
    box-sizing: border-box;
    height:81.6%;
    display:flex;
    section{
        flex:1;
        height: 100%;
    }
    .main-left{
        flex: 0 0 14%;   
    }
    .main-center{
        height:100%;
      
        p{
            color:#fff;
            height:9%;
            font-size:26px;
            font-family:MicrosoftYaHei-Bold;
            color:#fff;
            line-height:82px;
            text-align: left;
        }
        .steps{
          height:10%;
          //overflow: hidden;
        }
        .content{
          width: 100%;
          height:91%;
          background: #fff;
          /*border-top-left-radius:10px;
          border-top-right-radius:10px;*/
          border-radius:10px;
          box-sizing: border-box;
          overflow: auto;
          .educationList{
              width:460px;
              margin:0 auto;
          }
        }
    }
    .main-right{
        flex: 0 0 14%;
        position: relative;
        .buttons{
          position:absolute;
          bottom:0;
          width:72%;
          margin-left:26px;
            button{
              cursor: pointer;
              outline: none;
              width:100%;
              margin-top:19px;
              height:80px;
              color: #0573DE;
              border: none;
              border-radius:40px;
              text-align: center;
              background:rgba(248,249,252,1);
              font-size:32px;
                  &.callback{
                    background:#afd3f3;
                  }
            }
        }

    }
}


.article{
   
    
    padding-top: 51px;
    text-align: left;
    font-size:24px;
    width:100%;
    
    article{
        width:90%;
        margin:0 auto;
        p{
        color:#000;
        }
        ul{
         
              li{
                margin-right:40px;
                width:360px;
                height:76px;
                line-height: 76px;
                margin-bottom:30px;
                background:#fff;
                border:1px solid  rgba(0,112,224,1);
                border-radius:6px;
                text-align: center;
                cursor: pointer;
                color:rgba(0,112,224,1);
                &:hover{
                    color: #fff;
                    background: rgba(0,112,224,1);
                    height: 76px;
                }
                
            }
          
           
        }
        }
}
</style>
