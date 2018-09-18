<template>
    <div class="header">
        <div class="logo flex-start" @click="gotourl('/')">
            <img :src="logoimg">
            一体机
        </div>
       <div class="date">
           {{date}}
       </div>
        <div class="exit flex-end" @click="gotourl('/')">
            <div class="flex flex-center">
                <img :src="exit" alt="">
                退出
            </div>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
    export default {
        data() {
            return {
                date: moment(new Date()).format('YYYY年MM月DD日 dddd HH:mm'),
                logoimg:require('@/img/home/logo.png'),
                home:require('@/img/home/home.png'),
                exit:require('@/img/home/exit.png'),
                locate:require('@/img/home/locate.png'),
                call:require('@/img/home/call.png'),
            }
        },
        // watch: {
        //     date: (newv, old) => {
        //         this.date = moment(newv).format('YYYY年MM月DD日 HH:mm');
        //         console.log(this.date)
        //     }
        // },
        created () {
            this.trime = setInterval(() => {
                this.date = moment(new Date()).format('YYYY年MM月DD日 dddd HH:mm');
            }, 6000)
            // $(function(){
            //     $('.logo').click(function(){
            //         alert('JQ引入测试');
            //     });
            // })
        },
        methods:{
            gotourl(url){
                this.$router.push({path:url})
            }
           
        },
        destroyed(){
            if(this.timer){
                clearInterval(this.timer);  //在Vue实例销毁前，清除我们的定时器
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../css/column/layout";
.header{
        
        width:100%;
        border-bottom:2px solid rgba(255,255,255,0.3);
        box-sizing:border-box;
        display:flex;
        justify-content:space-between;
        .logo{
            width:16%;
            height:100%;
            box-sizing:border-box;
            color:rgba(255,255,255,1);
            display:flex;
            align-items: center;
            
            img{
                width:56px;
                height:56px;
                margin:0 20px;            
            }
        }
        .date{
           
            color:rgba(255,255,255,1);
            display:flex;
            align-items:center;

        }
        .exit{
            width:15%;
            height:100%;
            box-sizing:border-box;
            color:#fff;
            font-size:33px;
            display:flex;
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
                width:56px;
                height:56px;
            }
        }
        }

</style>
