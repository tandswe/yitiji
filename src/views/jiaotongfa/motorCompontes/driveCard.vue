<template>
    <div>   
		<h1>请插入您的机动车驾驶证</h1>
			<div class="expenses-center">
				<img :src="idCard" alt="">
			</div>
    </div>
</template>

<script>

export default {

  components: {},
  data() {
    return {
		idCard: require("@/img/views/iden@2x.png")
    };
  },
  computed: {},
  methods: {}
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
