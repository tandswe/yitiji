<template>
    <div style=" width:100%; padding:22px;  box-sizing: border-box;">   
        <div class="bill-center">
				  <h1>请手写您的签名 60s</h1>
				  <h2>缴费凭证</h2>
				<table width="90%" border="1" cellspacing="0" cellpadding="0" border-color="#E6E6E6">
					<tr>
						<td colspan="3" align="center">居民身份证有效期满换领</td>
					</tr>
					<tr>
						<td>业务名称：无犯罪证明</td>
						<td>业务编号：2473463645</td>
						<td>应缴费用：工本费 ￥20.00 邮寄费 ￥16.00</td>
					</tr>
                    <tr>
                        <td colspan="3" align="left">&nbsp;&nbsp;&nbsp; 应缴费用：工本费 ￥20.00 邮寄费 ￥16.00</td>
                    </tr>
					<tr>
						<td colspan="3" class="lastTd">
							<p style="text-align: left;">电子签名：</p>	
							<img :src="myphoto" alt="">
						</td>
					</tr>
				</table>
			</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        myphoto: require("@/img/views/timg@2x.png")
    };
  },
  computed: {},
  methods: {}
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
