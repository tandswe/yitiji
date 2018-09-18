<template>

 
    
    <div class="home">
        <div class="scroll">
            <!-- <img :src="require('@/img/home/banner02.png')"> -->
        <eHeadsp></eHeadsp>
        </div>
        <header>
            <e-head></e-head>
        </header>
        <main>
         <keep-alive>
          <component :is="showList"></component>
         </keep-alive>
          <!-- <HomeContent v-if="listindex==0"></HomeContent>
          <listCommon v-if="listindex==1"></listCommon>
          <listContent v-if="listindex==2"></listContent> -->

        </main>
        <footer class="flex-start-end">
            <e-foot></e-foot>
        </footer>
    </div>
   
</template>

<script>
import  '@/css/flex.scss'
import  '@/css/index.scss'
import HomeContent from './HomeContent'
import listCommon from './listCommon'
import listContent from './listContent'
import eHead from './eHead'
import eHeadsp from './eHeadsp'
import eFoot from './eFoot'
    export default {
        components:{
            HomeContent,
            eHead,
            eFoot,
            eHeadsp,
            listCommon,
            listContent
        },
        data() {
            return {
                logoimg:require('@/img/home/logo.png'),
                home:require('@/img/home/home.png'),
                exit:require('@/img/home/exit.png'),
                locate:require('@/img/home/locate.png'),
                call:require('@/img/home/call.png'),
                listView:['HomeContent','listCommon',"listContent"],
               // listindex:0,
               // dataindex:0,
                
            }
        },
        created(){
             
        },
        computed:{
            showList(){
                return this.listView[this.$store.state.home.navindex];
            }
        },
        methods:{
            // changehead(data){
            //     this.listindex=data.sindex;
            //     this.dataindex=data.dataindex
            // }
        }
       
    }
</script>

<style scoped lang="scss">
@import "../css/column/home";


header{
       
        border-bottom:2px solid rgba(255,255,255,0.3);
        box-sizing:border-box;
        display:flex;
        .logo{
            width:16%;
            height:100%;
            box-sizing:border-box;
            font-size:32px;
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
            li{
                padding:0 40px;
                &:nth-of-type(1){
                    width:174px;
                    height:100%;
                    background:rgba(75,184,243,1);
                    padding:0;
                    img{
                        width:50px;
                        height:50px;
                    }
                }
            }
        }
        .exit{
            width:15%;
            height:100%;
            box-sizing:border-box;
            color:#fff;
            font-size:33px;
            div{
                width:168px;
                height:68px;
                line-height:68px;
                background:rgba(0,0,0,.3);
                border-radius:40px;
                margin-right:27px;
                
            }

        }
        }
main{
    
    box-sizing:border-box;
}

        
</style>