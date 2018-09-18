<template>
    <div>   
		<h1>请放置好机动车驾驶证申请表</h1>
			<div class="expenses-center">
				<img :src="mybank" alt="">
			</div>
      <div class="app_tip">
        没有材料怎么办？点击打印即可
      </div>
      <div @click="settypeId" style="margin-top:5vh">
		    <button-sub btname="提交"></button-sub>
	    </div>
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
 
  components: {buttonSub},
  data() {
    return {
      mybank: require("@/img/views/photo.png")
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
.expenses-center {
    width: 560px;
    height: 420px;
    background: #eef9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 98px auto 0;
  img {
    width: 360px;
    height: 240px;
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
.app_tip{
  font-size:28px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:36px;
  height:36px;
  margin-top:5px;
}
</style>
