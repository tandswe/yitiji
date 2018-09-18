<template>
    <div class="wrap">   
        <layoutHeart>Header</layoutHeart>
        <div class="main">
            <section class="main-left"></section>
            <section class="main-center">
                
                <p>正在办理：高考成绩查询</p>
              
                <div class="content">
                    
                     <div class="article clearfix">   
                         
                        <div>
                             <p style="text-align:left;color:#000;">选择你要查询的时间</p>
                             <div class="time ">
                                 <span>高考成绩查询时间是：</span>
                                 <div class="date clearfix">
                                     <p style="">
                                         6月25日
                                     </p>
                                     <p>
                                         吉时快到，请您等候！
                                     </p>
                                 </div>
                             </div>
                                                  
                        </div>
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
    div{
        width:87%;
        margin:0 auto;
        p{
        color:#000;
        }
        .time{
            width:560px;
            margin:100px auto;
            .date{
                width:560px;
                height:213px;
                background:rgba(231,241,251,1);
                border-radius:8px;
                margin-top:50px;
                p{
                  text-align: center;
                  
                  &:nth-of-type(1){
                     color:rgba(255,37,37,1);
                     font-size:36px;
                     margin-top:30px;
                  }
                  &:nth-of-type(2){
                    font-size:32px;
                    color:rgba(51,51,51,1);
                    margin-top:40px;
                  }
                }
            }

        }

        }
}
</style>
