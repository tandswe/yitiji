<template>
    <div class="sub-warp">  
	  <div v-if="number==1" style="background:#f5f5f5; width:100%; height: 100%; padding:22px;  box-sizing: border-box;">
			  <div class="bill-center">
				  <h1>缴费凭证</h1>
				<table width="95%" border="1" cellspacing="0" cellpadding="0" border-color="#E6E6E6">
					<tr>
						<td colspan="3" align="center">港澳通行证团队游签注</td>
					</tr>
					<tr>
						<td>办理日期：2018-12-22 </td>
						<td>业务编号：897321482462476</td>
						<td>应缴费用：工本费￥100.00</td>
					</tr>
					<tr>
						<td colspan="3" align="center">签注详情</td>
					</tr>
					<tr>
						<td>前往地区：香港 + 澳门</td>
						<td>香港签注：一年二次有效</td>
						<td>澳门签注：三个月二次有效</td>
					</tr>
					<tr>
						<td colspan="3" class="lastTd">
							<p style="text-align: left;">电子签名：</p>	
							<img :src="myphoto" alt="">
						</td>
					</tr>
				</table>
			  </div>
        <!-- <button @click="next">确认提交</button> -->

          <div @click="next"  style="margin-top:5%">
              <button-sub btname="确认提交"></button-sub>
          </div>
	  </div> 
		<div v-else-if="number==2">
			<!-- <h1>请插入银联卡 10s</h1>
			<div class="expenses-center">
				<img :src="mybank" alt="">
			</div> -->
			<!-- <button @click="next">插卡成功</button> -->
      
      <pay></pay>
      <div @click="next"  style="margin-top:5%">
             <button-sub btname="支付"></button-sub>
      </div> 
		</div>
		<div v-else-if="number==3">
			<!-- <h1>请插入输入您的联系电话</h1>
			<div class="myiphone">
				联系电话<input type="text">
        
			</div> -->
      <entryBankCenter></entryBankCenter>
		</div>
		<!-- <div v-else-if="number==4">
			<entryPasswordCenter></entryPasswordCenter>
		</div> -->
		<!-- <div v-else-if="number==5">
			<div class="expenses-btn">
				<button @click="acceptNext">受理派出所领取</button>
				<button>邮寄领取</button>
			</div>
		</div> -->
		<!-- <button @click="next()">这里点下一步</button> -->
    </div>
</template>

<script>
import entryBankCenter from "../entryComponents/entryBankCenter";
import entryPasswordCenter from "../entryComponents/entryPasswordCenter";
import buttonSub from "@/components/base/buttonSub";
import pay from "@/views/pay/PayTypeChoose"
export default {
  components: {pay, entryBankCenter, entryPasswordCenter,buttonSub },
  data() {
    return {
      showText: true,
      number: 1,
      myphoto: require("@/img/views/timg@2x.png"),
      mybank: require("@/img/views/yinhangka.png")
    };
  },
  computed: {},
  methods: {
    next() {
      this.number++;
      console.log(this.number)
      if (this.number == 5) {
        this.number = 5;
      }
    },
    acceptNext() {}
  }
};
</script>

<style lang="scss" scoped>
button{
  width:154px;
  height:56px;
  background:rgba(0,140,255,1);
  border-radius:28px;
  color: #fff;
  margin: 20px;
}
.sub-warp {
  height: 100%;
  .bill-center {
    width:80%;
    background: #fff;
    margin: 0 auto;
    border-radius: 9px;
    box-sizing: border-box;
    @media screen and (max-width: 1200px){
      width:100%;
    }
    table {
      margin: 0 auto;
      font-size: 19px;
      @media screen and (max-width: 1200px){
       font-size:2vw;
    }

      td {
        height: 60px;
        border: 1px solid #eeeeee;
          @media screen and (max-width: 1200px){
               height: 90px;
          }
      }
      .lastTd {
        height: 260px;
      }
    }
    h1 {
      padding: 48px 0;
      justify-content: center;
    }
  }
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
    align-items: center;
    padding-left: 98px;
    padding-top: 48px;
  }
  .expenses-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 98px;
    img {
      width: 560px;
      height: 420px;
    }
  }
  .myiphone {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 162px;
    font-size: 24px;
    input {
      outline: none;
      width: 480px;
      height: 50px;
      border: 1px solid #cccccc;
      background: #f8f8f8;
      margin-left: 21px;
    }
  }
  .myBank {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 720px;
    height: 360px;
    background: #f6f6f6;
    text-align: center;
    margin: 98px auto 0;
    border-radius: 20px;
    border: 1px solid #dddddd;
    input {
      margin-left: 21px;
    }
  }
  .expenses-btn {
    width: 460px;
    margin: 0 auto 0;
    padding-top: 209px;
    button {
      margin-bottom: 46px;
      width: 460px;
      height: 80px;
      background: rgba(5, 117, 222, 1);
      border-radius: 6px;
      color: #fff;
    }
  }
}
</style>
