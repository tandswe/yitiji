<template>
    <div style=" width:100%; padding:22px;  box-sizing: border-box;">   
        <div class="bill-center">
				  <h1>申报进度 60s</h1>
				  <h2>申报凭证</h2>
				<table width="90%" border="1" cellspacing="0" cellpadding="0" border-color="#E6E6E6">
					<tr>
						<td colspan="2" style="text-align:center">无犯罪证明申报</td>
					</tr>
					<tr>
						<td >业务编号：834763645637</td>
						<td>业务名称：无犯罪证明开具</td>
					</tr>
                    <tr>
						<td>办理日期：2018-12-22 15:22</td>
						<td>申请人：王信息</td>
					</tr>
                    <tr>
						<td colspan="2" align="left">业务状态：提交申报</td>
					</tr>
				</table>
			</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
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
        padding-left: 20px;
        text-align: left;
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
    padding-left: 98px;
    padding-top: 48px;
    box-sizing: border-box;
  }
  h1{
      text-align: left;
  }
}
</style>
