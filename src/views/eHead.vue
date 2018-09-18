<template>
    <div class="header">
      
        <div class="logo flex-start" @click="golist(0,0)">
            <img :src="logoimg">
            一体机
        </div>
        <ul class="flex-start nav" >
            <!-- <li @click="golist(0)" :class="{active:1}"><img src=""<span ref="homes">首页</span></li> -->
         
            <li @click="golist(index,item.comp)" 
            :class="{active:active===index}" 
            v-for="(item,index) in navdata" 
            :key="index" 
            v-html="item.content"
            ></li>
            
        </ul>
        
        <div class="exit flex-end">
            <div class="flex flex-center" @click="isDialogShow">
                <img :src="exit" alt="">
                登陆
            </div>
        </div>

        <!-- <div class="exit flex-end">
            <div class="flex flex-center">
                <img :src="exit" alt="">
                退出
            </div>
        </div> -->
        <layoutLogin :Dialog="Dialog" @hideDialog="hideDialog" :width="width" :height="height" ></layoutLogin>
       <!-- 登陆选择效果 -->
        <!-- <div v-if="Dialog" class="dialog-wrap">
	     <div class="dialog-shadow fadeIn"  @click="hideDialog"></div>
		  <div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">		
			<div class="dialog-content">
                <div class="dialog-close" @click="hideDialog"><i class="el-icon-circle-close"></i></div> -->
			  <!-- <img :src="id2"> -->
              <!-- <div class="dialog-list">
                  <ul>
                    <li><img :src="zhiwen">指纹登录</li>
                    <li><img :src="shenfen">身份证登录</li>
                    <li><img :src="renlian">人脸登录</li>
                  </ul>
              </div>

			</div>
		  </div>
    	</div> -->
  

    </div>
</template>

<script>
// var imgurl="require('@/img/home/home.png')"
// var navdata =[
// {
// id:1,
// content:`<img src="data:image/png;base64,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">
// <span >首页</span>
// <style>
// img{
// width:2.6vw;
// height:4.6vh;
// }
// </style>
// `,
// comp:0
// },
// {
// id:2,
// content:"热点事项",
// comp:1,
// },
// {
// id:3,
// content:"按部门分类",
// comp:2
// },
// {
// id:4,
// content:"按主题分类",
// comp:1,
// },
// {
// id:5,
// content:"按主题分类",
// comp:1,
// }
// ]
import layoutLogin from '@/components/layoutLogin'
    export default {
        name:"",
        components:{
            layoutLogin
        },
        props: {
		    width:{
		    	type: Number,
		      	default:300
		    },
		    height:{
		    	type: Number,
		      	default:10
		    },
	  },
       data(){
            return {
                logoimg:require('@/img/home/logo.png'),
                home:require('@/img/home/home.png'),
                exit:require('@/img/home/exit.png'),
                locate:require('@/img/home/locate.png'),
                call:require('@/img/home/call.png'),
                zhiwen:require('@/img/home/zhiwen@2x.png'),
                shenfen:require('@/img/home/shenfen@2x.png'),
                renlian:require('@/img/home/renlian@2x.png'),
               // active:0,
                Dialog:false,
                id2:require('@/img/views/sp-list-icon.png')

            }
       },
       computed:{
           navdata(){
               return this.$store.state.home.homedatas
           },
           active(){
               return this.$store.state.home.checkindex
           }

       },
       created(){
           


       },
       mounted(){
          
           
       },
       methods:{
           golist(index,uname){
               this.$store.commit("changecheckindex",{index})
               this.$store.commit('listengo',{
                   sindex:uname,
                   dataindex:index
                   
               })
           },
           isDialogShow:function(){
		    this.Dialog = !this.Dialog		
		   },
		 dialogControl(){
				this.Dialog=false
			},
		hideDialog(){
				this.Dialog=false
			},  

       }
        
    }
</script>

<style scoped lang="scss">
 @import "../css/column/home";
 @media screen and (max-width:1200px){
    .logo{
        font-size: 2vw !important;
    }
}
.header{
        height:100%;
        width:100%;
        border-bottom:2px solid rgba(255,255,255,0.3);
        box-sizing:border-box;
        display:flex;
        .logo{
            width:15%;
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
            width:73%;
            height:100%;
            box-sizing:border-box;
            text-align: center;
            
            color:#fff;
            flex-wrap:nowrap;
            li{
                
                height:100%;
                display:flex;
                justify-content: center;
                align-items:center;
                cursor: pointer;
                &:nth-of-type(1){
                    width:174px;
                    padding:0 1px;
                    img{
                        width:50px;
                        height:50px;
                    }
                    span{
                        display:flex;
                        justify-content: center;
                        align-items:center;
                        &:before{
                            content:"";
                            background-image:url(~@/img/home/home.png);
                            background-size:50px 50px;
                            width:50px;
                            height:50px;
                            display:inline-block;
                           

                        }
                    }
                }
                &.active{
                    background:rgba(75,184,243,1);
                }
            }
        }
        .exit{
            flex-grow: 1;
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

.homes{
    bakcground:#fff;
}

</style>