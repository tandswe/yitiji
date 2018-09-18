<template>
    <div>
        <div class="bill-center">
            <p style="text-align:left;">请输入您的银行卡密码 60</p>
            <div class="login-next-center">
			   <div class="pass-a">
                   请输入你的密码：<input type="password" class="password">
               </div>
		    </div>
               <!-- <button @click="next" class="buttonStyle">下一步</button> -->

                <div @click="next"  style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
        </div> 
		</div>
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
  components: {buttonSub},
  data() {
    return {};
  },
  mounted(){},
  methods:{
    next(){
      this.$store.commit('changeheadTabIndex',{count:1})
    }
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
    margin: 98px auto 0;
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
 @media screen and (max-width:1200px){
  .login-next-center{
    width: 80% !important;
    height:20vh !important;
    
   }
   .pass-a{
     font-size: 1.2vh;
   }
   .password{
     width: 28vw !important;
   }
   .bill-center p{
    font-size: 1.6vh !important;
    margin-top: 5vw;
   }
   .password{
     font-size:3vw !important;
   }
 }
</style>