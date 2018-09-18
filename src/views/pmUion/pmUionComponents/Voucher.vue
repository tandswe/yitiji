<template>
    <div style=" width:100%; padding:22px;  box-sizing: border-box;">   
        <div class="bill-center">
				  <h1>请确认您的申报内容 60s </h1>
				  <h2>残疾人证申请办理</h2>
				<table width="90%" border="1" cellspacing="0" cellpadding="0" border-color="#E6E6E6">
					<tr>
						<td >业务编号：834763645637</td>
						<td>办理日期：2018-12-22 15:22</td>
					</tr>
                    <tr>
						<td>申请人：周文涛</td>
						<td>业务状态：提交审核</td>
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
