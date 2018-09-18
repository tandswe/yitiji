<template>
    <div class="home">
        <header>
            <div class="logo flex-start">
               <img :src="logoimg">
               一体机
            </div>
            <ul class="flex-start nav" >
                <li class="flex-start flex-center"><img :src="home">首页</li>
                <li style="cursor: pointer;">热点事项</li>
                <li class="active">按部门分类</li>
                <li>按主题分类</li>
                <li>按特定对象</li>
            </ul>
            <div class="exit flex-end">
                <div class="flex flex-center">
                    <img :src="exit" alt="">
                    退出
                </div>
            </div>
        </header>
        <main>
          <more-list></more-list>
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
import  '@/css/index.scss'
import morelist from '@/views/gonganzy/morelist.vue'
    export default {
        components:{
            listContent
        },
        data() {
            return {
                logoimg:require('@/img/home/logo.png'),
                home:require('@/img/home/home.png'),
                exit:require('@/img/home/exit.png'),
                locate:require('@/img/home/locate.png'),
                call:require('@/img/home/call.png')

            }
        },
       
    }
</script>

<style scoped lang="scss">
.home{
    height:100%;
    background:url('~@/img/home/background.png');
    background-size:cover;
    text-align:left;
}
header{
        height:9%;
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
                padding:0 57px;
                height:100%;
                display:flex;
                align-items:center;
                &:nth-of-type(1){
                    width:174px;
                    padding:0;
                    img{
                        width:50px;
                        height:50px;
                    }
                }
                &.active{
                    background:rgba(75,184,243,1);
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
    height:83%;
    box-sizing:border-box;
}
footer{
    height:8%;
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