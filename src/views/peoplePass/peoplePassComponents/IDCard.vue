<template>
    <div>   
		<h1>请刷身份证 60s</h1>
			<div class="expenses-center">
				<img :src="idCard" alt="">
			</div>
      <!-- <div @click="substep">下一步</div> -->
    </div>
</template>

<script>

export default {

  components: {},
  data() {
    return {
		idCard: require("@/img/pmUion/idCard0@2x.png")
    };
  },
  computed: {},
  methods: {
     substep(){
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
    margin: 98px auto 0;
    width:560px;
    height:420px;
    background:rgba(238,249,255,1);
    border:2px solid rgba(212,231,249,1);
    img {
      width: 388px;
      height: 232px;
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
