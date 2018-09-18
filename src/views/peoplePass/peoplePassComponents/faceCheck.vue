<template>
    <div>   
		<h1>面部特征采集</h1>
        <div class="head">请点头</div>
			<div class="expenses-center">
				<img :src="idCard" alt="">
			</div>
      <div @click="substep">下一步</div>
    </div>
</template>

<script>
export default {
  components: {},
    data(){
        return {
            idCard: require("@/img/views/id@4x.png")
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
    margin: 50px auto 0;
    width:560px;
    height:420px;
    background:rgba(238,249,255,1);
    border:2px solid rgba(212,231,249,1);
    img {
      width:278px;
      height:300px;
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
  .head{
    margin:20px auto 0;
    width:191px;
    height:60px;
    line-height:60px;
    text-align:center;
    background:rgba(255,255,255,1);
    border:1px solid rgba(204,204,204,1);
  }
</style>
