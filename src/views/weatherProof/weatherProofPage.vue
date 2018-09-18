<template>
	<div class="wrap">   
        <layoutHeart></layoutHeart>
        <div class="main">
            <section class="main-left"></section>
            <section class="main-center">
                
                <p>正在办理：气象证明打印业务</p>
              
                <div class="content">
                    
                     <div class="article clearfix">   
                        <router-link to="/weatherEntrance">
                            <article>
                                <button>气象证明打印</button>
                            </article>
                        </router-link>

                     </div>
                </div>
            </section>
            
            <section class="main-right">
                <div class="buttons">

                        <button>返回首页</button>
                </div>
            </section>      
        </div>
        <layoutfoot></layoutfoot>

    </div>
</template>

<script>
import layoutHeart from '@/components/layoutHeart'
import layoutfoot from "@/components/layoutfoot"
export default{
	name:'entryDndexit',
	components:{layoutHeart,layoutfoot},
	data(){
		return{
        }
	},
	methods:{
	
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
   
    text-align: left;
    font-size:24px;
    width:100%;
    height: 100%;
    article{
        width:90%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:0 auto;
        p{
        color:#000;
        }
        button{
            width:360px;
            height:80px;
            background:rgba(0,112,224,1);
            border-radius:6px;
            color: #fff;
        }
        }
}
</style>
