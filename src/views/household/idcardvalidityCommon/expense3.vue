<template>
    <div>
        <div class="bill-center">
            <p style="text-align:left;">请输入您的银行卡密码 60s</p>
            <div class="login-next-center">
			   <div>
                   请输入你的密码：<input type="password" class="password">
               </div>
		    </div>
             <div style="width:100%;text-align:center;margin-top:10px;">
                <router-link to="/idcardvalidityCommon/expense4">费用交纳：下一步</router-link>
            </div>
		</div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss"scoped>
.bill-center {
  width: 80%;
  height: 670px;
  background: #fff;
  margin: 0 auto;
  border-radius: 9px;
  box-sizing: border-box;
  p {
    text-align: left;
    margin-top: 45px;
    height: 28px;
    font-size: 28px;
    font-family: MicrosoftYaHei;
    color: rgba(51, 51, 51, 1);
    line-height: 36px;
  }
  .login-next-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 98px;
    font-size: 24px;
    width: 720px;
    height: 360px;
    margin: 130px;
    background: rgba(246, 246, 246, 1);
    border: 2px solid rgba(221, 221, 221, 1);
    border-radius: 20px;
    .password {
      width: 360px;
      height: 54px;
      font-size: 24px;
    }
  }
}
</style>