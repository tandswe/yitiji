<template>
    <div>   
		<h1>{{hearText}}</h1>
			<div class="expenses-center">
				<img :src="idCard" alt="">
			</div>
                <slot></slot>
    </div>
</template>

<script>

export default {
  props:{
      hearText:{default:'请放身份证',type:String}
  },
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
    margin: 68px auto;
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
  button{
    width:154px;
    height:56px;
    background:rgba(0,140,255,1);
    border-radius:30px;
    font-size:26px;
    line-height: 56px;
    color: #fff;
    margin: 20px auto;
}
</style>
