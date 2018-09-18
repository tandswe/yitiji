<template>
    <div>   
		<h1>请刷身份证 60s</h1>
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
		idCard: require("@/img/views/spring-icon@2x.png")
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
    margin-top: 98px;
    width:560px;
    height:420px;
    background:rgba(238,249,255,1);
    border:2px solid rgba(212,231,249,1);
    margin: 0 auto;
    img {
      width: 234px;
      height: 264px;
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
