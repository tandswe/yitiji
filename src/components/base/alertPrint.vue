<template>
  <transition name="fade">
    <div>
      
        <div id="dialog1">
        </div>
         
        <div  id="dialog2" align="center" >
            <div><img :src="pic1" ></div>
            <br />正在打印请稍后<br/>
        </div>
       
    </div>
     </transition>
</template>

<script>
    export default {
        data() {
            return {
                pic1: require("@/img/views/print1.png")
            }
        },
        methods:{
            show(){

            }
        }
    }
</script>

<style scoped>
   #dialog1
{
    position:fixed;
    top: 0px;
    left: 0pt;
    width: 100%;
    height: 100%;
    background-color:#959698;
    text-align: center;
	z-index:3000;
}
#dialog2
{   
    padding-top:116px;
    border-radius:8px;
    position:fixed;
    background: white;
    width: 38vw;
    height: 30vh;
	left:0;
	right:0;
    margin:auto;
	top:30vh; 
	z-index:3003;
    font-size:28px;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s  linear; }
.fade-enter, .fade-leave-to { opacity: 0; }
</style>