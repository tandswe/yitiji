<template>
    <div>
        <div class="bill-center">
            <p style="text-align:left;">请对准指纹口按压拇指 60s</p>
            <h1>缴费凭证</h1>
            <table width="90%" border="1" cellspacing="0" cellpadding="0" border-color="#E6E6E6">
                <tr>
                    <td colspan="3" align="center">居民身份证有效期满换领</td>
                </tr>
                <tr>
                    <td>业务编号：834763645637</td>
                    <td>办理日期：2018-12-22  15:22</td>
                    <td>应缴费用：工本费  ￥20.00  邮寄费  ￥16.00</td>
                </tr>
                <tr>
                    <td colspan="3" class="lastTd">
                        <p style="text-align: left;">电子签名：</p>	
                        <img :src="myphoto" alt="">
                    </td>
                </tr>
            </table>
             <div style="width:100%;text-align:center;margin-top:10px;">
                <router-link to="/idcardvalidityCommon/expense2">费用交纳：下一步</router-link>
            </div>
		</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                myphoto: require("@/img/views/timg@2x.png"),
            }
        }
        
    }
</script>

<style lang="scss"scoped>
  .bill-center {
    width: 80%;
    height: 670px;
    background: #fff;
    margin: 0 auto;
    border-radius: 9px;
    box-sizing: border-box;
     p{
            text-align:left; 
            margin-top:45px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;

        }
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
    h1 {
	  padding: 48px 0;
	justify-content: center;

    }
  }
</style>