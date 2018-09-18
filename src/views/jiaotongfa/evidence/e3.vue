<template>
    <div>
 <div class="bu-a" >
    <div class="pay-bz">
        <h1>缴费凭证</h1>
        <div class="pay-cl1">驾驶人交通违法处理</div>
    <div class="pay-int">
        <ul>
             <li>处理日期：2018-12-22 15:22</li>
             <li>业务编号：897321482462476</li>
             <li>应缴费用：￥100.00</li> 
        </ul>
    </div>   
 </div>
 
  <div class="aut-p">
      <h3>签名</h3>
     <div class="aut-img"> <img :src="id2"></div>
  </div>
</div>
 
    </div>
</template>

<script>
export default {
    data() {
            return {
                     
                id2:require('@/img/views/timg@2x.png') 
            }
    }

}
</script>

<style  lang="scss" scoped>
  .bu-a{
      width: 80%;
      margin: 0 auto;
  }
.pay-bz{
    width: 100%;
    h1{
     text-align: center;
     line-height: 150px;
     color: #333;
     font-size: 32px;
    }
}
.pay-cl1{
    border: 1px solid #E6E6E6;
    border-bottom: none;
    text-align: center;
    font-size: 24px;
    color: #333;
    width: 99.4%;
    height: 60px;
    line-height: 60px;
    float: left;
}
.pay-int{
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-left: auto;
    margin-right: auto;
    ul {
        margin: 0;
        padding: 0;
    }
      li{
        font-size: 22px;
        color: #333;
        float: left;
        text-align: left;
        width: 32%;
        padding-left:1%;
        border: 1px solid #E6E6E6;
      }
}
.aut-p{
    width: 99.4%;
    height: 300px;
    border: 1px solid #E6E6E6;
    border-top: none;
    h3{
        float: left;
        font-size: 24px;
        font-weight: normal;
        width: 10%;
        margin-top: 20px;
    }
}
.aut-img{
    width: 250px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    clear: both;
    margin-top: 50px;
    img {
        background-size: 100%;
    }
}
</style>
