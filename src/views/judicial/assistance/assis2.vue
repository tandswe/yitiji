<template>
 <div>
     <button @click="next()">这里点下一步</button>
     <div v-if="number==1">
    <div class="science">请填写您的申报材料 300s </div>  
    <div class="material-tab" >
       <table>
           <tr>
               <td><span class="spanc">姓名</span><input type="text"></td>
               <td>联系电话 <input type="text"></td>
           </tr>
           <tr>
               <td colspan="2">证件号码 <input type="text" style="width:90%"></td>
           </tr>
           <tr>
               <td>邮寄地址
            <select>
                <option value ="volvo">广东省</option>
                <option value ="saab">福建省</option>
                <option value="opel">江西省</option>
                <option value="audi">四川省</option>
             </select>
               <select style="margin-left:20px">
                <option value ="volvo">广州</option>
                <option value ="saab">佛山</option>
                <option value="opel">清远</option>
                <option value="audi">江门</option>
             </select>
                     </td>
               <td>街道(乡/镇)  
                <select style="width:75%">
                <option value ="volvo">天河区</option>
                <option value ="saab">荔湾区</option>
                <option value="opel">黄埔区</option>
                <option value="audi">从化区</option>
             </select>
                    </td>
           </tr>
           <tr>
               <td colspan="2">详细地址<input type="text" style="width:90%"></td>
           </tr>
       </table>
    </div>
    </div>

    <div v-if="number==2">
        <div class="science" >请放置好法律援助申请书 60s</div>
         <div class="rect-p">
            <img :src="id">
          </div>
    </div>
 <div v-if="number==3">
        <div class="science" >请放置好经济困难证明书 60s</div>
         <div class="rect-p">
            <img :src="id">
          </div>
 </div>

 <div v-if="number==4">
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

 </div>
</template>

<script>
export default {
   
     data() {
            return {
                   number: 1,
                id:require('@/img/views/spring-icon@2x.png'),   
                id2:require('@/img/views/timg@2x.png') 
            }
        },
 computed: {},
  methods: {
    next() {
      this.number++;
      if (this.number == 4) {
        this.number = 4;
      }
    },
    acceptNext() {}
  }
};

</script>

<style  lang="scss" scoped>
 .science{
     width: 90%;
     height: 120px;
     line-height: 120px;
     font-size: 28px;
     color: #333;
     text-align: left;
     margin: 0 auto;   
 }
.material-tab{
    width: 90%;
    margin: 0 auto; 
    font-size: 24px;
    color: #333;
    text-align: left;

    table{
       width: 100%;
    }
    td{
        height: 100px;
    }
    input{
        width: 80%;
        height:54px;
        background:rgba(248,248,248,1);
        border:1px solid rgba(204,204,204,1);
        font-size: 24px;
    }
    select{
         height:54px;
         width: 38%;
         border:1px solid rgba(204,204,204,1);
         font-size: 24px;
    }

}
    .spanc{
        width: 100px !important;
        margin-right: 53px;
    }
  .rect-p{
      width: 560px;
      height: 420px;
      border: 1px solid #d4e7f9;
      background-color: #eef9ff;
      margin: 0 auto;
      img{
          margin-top: 78px;
      }
  }
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
