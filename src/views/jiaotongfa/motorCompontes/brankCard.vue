<template>
  <div>   
		  <h1>请插入银联卡 10s</h1>
			<div class="expenses-center">
				<img :src="mybank" alt="">
			</div>
      <div @click="settypeId" style="margin-top:5vh">
		    ---验证成功，下一步---
	    </div>
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
  methods: {
    settypeId(){
			this.$emit("listenType")
		}
  }
};
</script>

<style lang="scss" scoped>
.expenses-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 98px;
  img {
    width: 560px;
    height: 420px;
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
