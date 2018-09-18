<template>
    <div style="width:100%; padding:22px;  box-sizing: border-box;">   
        <div class="bill-center">
				  <h1>申报进度</h1>
				<table width="90%" border="1" cellspacing="0" cellpadding="0" border-color="#E6E6E6">
					<tr>
						<td colspan="2" style="text-align: center">气象证明打印</td>
					</tr>
					<tr>
						<td>业务编号：834763645637 </td>
						<td>办理日期：2018-12-22 15:22</td>
					</tr>
                    <tr>
						<td>申请人：周文涛</td>
						<td>业务状态：
                            <span v-if="stateManage" class="stateColor"> {{stateManages}}</span>
                            <span> {{state}}</span>
                        </td>
					</tr>
                    <tr  v-if="stateManage">
                        <td colspan="2">业务状态：<span  class="stateColor">不符合要求</span>   </td>
                    </tr>
				</table>
			</div>
    </div>
</template>

<script>
export default {
    props:{
        stateManage:{
            default: false,
            type: Boolean
        }
    },
  data() {
    return {
        
    };
  },
computed:{
    stateManages(){
       return this.stateManage ? '办理失败' : '办理成功'
    }
},
  methods: {}
};
</script>

<style lang="scss" scoped>
.bill-center {
    width: 80%;
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
        text-align: left;
        padding-left: 10px;
      }
      .lastTd {
        height: 260px;
      }
    }
   h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 48px;
    box-sizing: border-box;
  }
}
.stateColor{
    color: red;
}
</style>
