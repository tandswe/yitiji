<template>  
<div>
     <layoutHeart></layoutHeart>
      <div class="main-center"><p>正在办理：社保</p></div>
       <div class="entry-warp">
        <div class="entry-tit">选择业务办理所在的地区</div>
          <div class="cur-city">当前城市：<button>广州</button></div>
         <div class="but-tt">
         <button v-for="(item,index) of HKtext" :key="index">
               <router-link :to="path[index]">
                    {{item}}
               </router-link>
             </button>
          <!-- <button v-for="(item,index) of HKtext" :key="index"><router-link :to="path">{{item}}</router-link></button> -->
        </div>
      </div>
    <layoutfoot></layoutfoot>
 </div>    
</template>

<script>
import layoutHeart from '@/components/layoutHeart'
import layoutfoot from "@/components/layoutfoot"
    export default {
        components:{
            layoutHeart,
            layoutfoot
        },
        data() {
    return {
        HKtext: [
        "深圳市",
        "珠海市",
        "东莞市",
        "佛山市", 
        "中山市",
        "惠州市",
        "汕头市",
        "江门市",
        "茂名市",
        "肇庆市",
        "湛江市",
        "梅州市",
        "汕尾市",
        "河源市",
        "清远市",
        "韶关市",
        "揭阳市",
        "阳江市",
        "潮州市",
        "云浮市"
      ],
      path: ["/ssprinting/miprint","/ssprinting/psetp","","","","","","","","","","","","","","","","","",""]
   };
  },
    }
</script>

<style lang="scss" scoped>
.header{
    height: 80px !important;
}
.main-center p{
    color: #fff;
    font-size: 1.354vw;
    height: 9%;
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
    line-height: 4.271vw;
    text-align: left;
}
.entry-warp{
    position: relative;
	padding: 30px 40px;
    width:1366px;
    background-color: #fff;
    border-radius:8px;
    margin-left: auto;
    margin-right: auto;
}
.entry-tit{
    height:60px;
    font-size:28px;
    color:#333;
    line-height:36px;
    padding-left:60px;
    text-align: left;
}
.cur-city{
    font-size:28px;
    color:#333;
    line-height:36px;
   button {
        width:220px;
        height:80px;
        font-size: 28px;
        background:rgba(0,112,224,1);
        border-radius:6px;
        margin: 16px;
        color: #fff;
        }
}
.but-tt{
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   padding: 10px 40px;
   //height: 550px;
   overflow-x: auto;
    button {
        font-size: 28px;
        width:220px;
        height:80px;
        border: 1px solid rgba(0, 105, 211, 1);
        border-radius: 6px;
        color: #0476de;
        background: #fff;
        margin: 16px;
        &:hover {
            background: #0474de;
            color: #fff;
        }
        }
}
</style>
