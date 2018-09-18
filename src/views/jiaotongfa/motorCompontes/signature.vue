<template>
    <div style=" width:100%; padding:22px;  box-sizing: border-box;">   
        <div class="bill-center">
				  <h2>申报凭证</h2>
				<table width="90%" border="1" cellspacing="0" cellpadding="0" border-color="#E6E6E6">
					<tr>
						<td colspan="3" align="center">机动车驾驶证转入换证</td>
					</tr>
					<tr>
						<td align="left">&nbsp;&nbsp;&nbsp;业务编号：834763645637</td>
						<td align="left">&nbsp;&nbsp;&nbsp;办理日期：2018-12-22 15:22</td>
						<td align="left">&nbsp;&nbsp;&nbsp;申请人： 君子签</td>
					</tr>
                    <tr>
                        <td colspan="3" align="left">&nbsp;&nbsp;&nbsp; 应缴费用：工本费￥20.00 邮寄费￥16.00</td>
                    </tr>
					<tr>
						<td colspan="3" class="lastTd">
							<p style="text-align: left;">电子签名：</p>	
							<img :src="myphoto" alt="">
						</td>
					</tr>
				</table>
			</div>
      <div @click="settypeId">
		     <button-sub btname="提交"></button-sub>
	    </div>
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"

export default {
  components:{
    buttonSub
  },
  data() {
    return {
        myphoto: require("@/img/views/timg@2x.png")
    };
  },
  computed: {},
  methods: {
    settypeId(){
			this.$emit("listenType","OK")
		}
  }
};
</script>

<style lang="scss" scoped>
.bill-center {
    width: 90%;
    height: 670px;
    background: #fff;
    margin: 0 auto;
    border-radius: 9px;
    box-sizing: border-box;
    table {
      margin: 0 auto;
      font-size: 19px;
      td {
        height: 60px;
        border: 1px solid #eeeeee;
      }
      .lastTd {
        height: 260px;
      }
    }
   h2 {
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 48px;
    box-sizing: border-box;
  }
  h1{
      text-align: left;
  }
}
</style>
