<template>
    <div>   
		<h1>请输入银联卡密码 10s</h1>
			<div class="myBank">
				<span>请输入银行卡密码</span><el-input type="password" name="" id=""></el-input>
			</div>
      <slot></slot>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      mybank: require("@/img/views/yinhangka.png")
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss">
.myBank{
    .el-input{
        width: 65%;
    }
}



</style>

<style lang="scss" scoped>
 @media screen and (max-width:1200px){
   .myBank {
     width:80% !important;
   }
   span{
     font-size:1.6vh;
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
h1 {
  font-size: 28px;
  color: #333;
  height: 20%;
  display: flex;
  align-items: center;
  padding-left: 98px;
  padding-top: 48px;
}
</style>
