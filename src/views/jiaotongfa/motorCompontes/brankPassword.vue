<template>
    <div>   
		<h1>请输入银联卡密码 10s</h1>
			<div class="myBank">
				请输入银行卡密码<input type="password" name="" id="">
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
      mybank: require("@/img/views/yinhangka.png")
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
