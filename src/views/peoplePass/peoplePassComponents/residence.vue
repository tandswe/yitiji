<template>
    <div class="weather-warp">   
		<h1>请放入您的户口本首页</h1>
			<div class="expenses-center">
                <div>
                   <img :src="idCard" alt="">
                </div>
				
			</div>
      <!-- <div @click="substep">下一步</div> -->
    </div>
</template>

<script>

export default {

  components: {},
  data() {
    return {
		idCard: require("@/img/views/supportAidStudent.png")
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
 @media screen and (max-width:1200px){
    .expenses-center{
    width:860px;
    height:620px;}
 }
 .expenses-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 98px auto 0;
    width:560px;
    height:420px;
    background:rgba(238,249,255,1);
    border:1px solid rgba(212,231,249,1);
    div{
        width:360px;
        height:240px;
        background:rgba(248,251,253,1);
        line-height:240px;
       img {
        width:86px;
        height:120px;
        }

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
