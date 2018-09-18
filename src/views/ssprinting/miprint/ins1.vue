<template>  
<div>
      <layoutHeart></layoutHeart>
      <div class="main-center"><p>正在办理：医保信息查询打印</p></div>
       <div class="entry-warp">
        <div class="title-q">医保账户余额查询：</div>
       <div class="ssprint-b">
          <ul>
                <li>姓名：###</li>
                <li>当年账户总额：8848元</li>
                <li>当年账户支付累计：2233元</li>
                <li>历年账户总额：8848元</li>
                <li>历年账户支付累计：2233元</li>
          </ul>
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
        // data() {
        //     return {
        //         HKtext:['医保信息查询打印', '社保清单打印'],
              
        //         path: '/ssprinting/psetp'
        //     }
        // },
      
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
	padding: 190px 40px 40px 0;
    width:1366px;
    height: 460px;
    background-color: #fff;
    border-radius:8px;
    margin-left: auto;
    margin-right: auto;
}
.ssprint-b{
    width:558px;
    height:270px;
    background:rgba(231,241,251,1);
    border-radius:8px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 52px;
    padding-top:40px;
    ul{
        margin: 0;
        padding: 0;
    }
     li{
         font-size: 24px;
         color: #333;
         line-height: 40px;
         text-align: left;
     }           
}
.title-q{
    width:558px;
    margin: 0 auto;
    text-align: left;
    font-size: 28px;
    color: #333;
}
</style>
