<template>
    <div class="home">
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        
        <header>
            <div class="logo flex-start">
               <router-link to="/"> <img :src="logoimg">
               一体机</router-link>
            </div>
            <div class="flex-start nav">
                <p>{{headText}}事项</p>   
            </div>
            <div class="exit">
                <router-link to="/">

                <div class="flex flex-center" @click="backhome" >
                    <img :src="back" alt="">
                    返回
                </div>
                </router-link>

                <div class="flex flex-center">
                    <img :src="exit" alt="">
                    退出
                </div>
            </div>
        </header>
        <main>
          <move-content></move-content>
        </main>
        <footer class="flex-start-end">
            <div>
               <img :src="locate">
                <span>天河区棠下村社区服务中心</span>
                <img :src="call">
                <span>服务热线：12345</span>
            </div>
            <div style="margin-right:20px;">
                <span>本机编号：G96423</span>
            </div>
            
        </footer>
    </div>
   
</template>

<script>
import  '@/css/flex.scss'

import moveContent from './moveContent'
 import eHeadsp from "@/views/eHeadsp"
    export default {
        components:{
            moveContent,
            eHeadsp
        },
        data() {
            return {
                logoimg:require('@/img/home/logo.png'),
                back:require('@/img/home/back-1.png'),
                exit:require('@/img/home/exit.png'),
                locate:require('@/img/home/locate.png'),
                call:require('@/img/home/call.png'),
                headText: ""
            }
        },
        created(){
           let dataID = this.$route.params.id
            let dataChoose = this.$store.state.selcetPage
            this.headText = dataChoose.data[dataID].heading
        },
        methods:{
            routerClick(){
                this.$router.push({path:'/list'})
                this.$store.state.home.clist = 0
            },
            backhome(){
                 this.$router.go(-1);//返回上一层
            //   this.$router.push({path:'/'})
            //   this.$store.state.home.navindex=0
            //   this.$store.commit("changecheckindex",{index:0})
          },
        }
       
    }
</script>

<style scoped lang="scss">
@import "../../css/column/more";
// @media screen and (max-width:1200px){
//     header .nav p{
//         font-size: 2vw;
//     }
// }
.home{
    height:100%;
    background:url('~@/img/home/background.png');
    background-size:cover;
    text-align:left;
}
@media screen and(max-width:1200px){
.home{
    height:100%;
    background:url('~@/img/home/background@2x.png');
    background-size:cover;
    text-align:left;
}

}
header{
       
        border-bottom:2px solid rgba(255,255,255,0.3);
        box-sizing:border-box;
        display:flex;
        .logo{
            width:16%;
            height:100%;
            box-sizing:border-box;
            
            color:rgba(255,255,255,1);
            
            img{
                width:56px;
                height:56px;
                margin:0 20px;            
            }
        }
        .nav{
            width:69%;
            height:100%;
            box-sizing:border-box;
            text-align: center;
            font-size:33px;
            color:#fff;
            p{
                text-align: center;
                width: 100%;
            }
        }
        .exit{
            width:22%;
            height:100%;
            box-sizing:border-box;
            color:#fff;
            font-size:33px;
            display:flex;
            justify-content: center;
            align-items: center;
            div{
                width:168px;
                height:68px;
                line-height:68px;
                background:rgba(0,0,0,.3);
                border-radius:40px;
                margin-right:27px;
                
            }
            img{
                width: 50px;
                height: 50px;
            }

        }
        }
main{
 
    box-sizing:border-box;
}
footer{
   
    box-sizing:border-box;
    color:rgba(255,255,255,.6);
    background:url('~@/img/home/footbg.png');
    background-size:cover;
    img{
        width:40px;
        height:40px;
        margin-left:40px;
    }
    span{
        &:nth-of-type(1){
            font-size:28px;
            margin-left:20px;
        }
        &:nth-of-type(2){
            font-size:24px;
            margin-left:20px;
        }
        &:nth-of-type(3){
            font-size:26px;
            
            
        }
    }
}
        
</style>