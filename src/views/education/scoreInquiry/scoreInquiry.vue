<template>
    <div class="wrap">   
        <layoutHeart>Header</layoutHeart>
        <div class="main">
            <section class="main-left"></section>
            <section class="main-center">
                
                <p>正在办理：居民身份证补办</p>
              
                <div class="content">
                    
                     <div class="article clearfix">   
                         
                        <article>
                             <p style="text-align:left;color:#000;">请选择办理选项</p>
                             <ul style="color:#fff;" class="flex-start">
                                  <li class="active" @click="gotoDate()">2018年</li>
                                  <li>2017年</li>
                                  <li>2016年</li>
                                  <li>2015年</li>
                                  <li>2014年</li>
                                  <li>2013年</li>
                                  <li>2012年</li>
                                  <li>2011年</li>
                             </ul>                        
                        </article>
                     </div>
                </div>
            </section>
            
            <section class="main-right">
            
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
        data() {
           
        },
        computed:{
          
        },
        methods:{
            gotoDate(){
                this.$router.push({path:'/'})
            }
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
        width:87%;
        margin:0 auto;
        p{
        color:#000;
        }
        ul{
            width:87%;
            margin:0 auto;
              li{
                margin-left:20px;
                margin-right:20px;
                width:460px;
                height:76px;
                line-height: 76px;
                margin-bottom:30px;
                background:#fff;
                border:1px solid  rgba(0,112,224,1);
                border-radius:6px;
                text-align: center;
                cursor: pointer;
                color:rgba(0,112,224,1);
                &.active{
                    background:rgba(0,112,224,1);
                    color:#fff;
                }
                &:hover{
                    background:rgba(0,112,224,1);
                    color:#fff;
                }
            }
          
           
        }
        }
}
</style>
