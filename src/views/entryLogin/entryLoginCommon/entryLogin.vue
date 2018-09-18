<template>
    <div class="login-warp">  

		 <h1>请插入你的港澳通行证</h1>
		 <div class="login-next-center">
			 <img :src="myphoto" alt="">
		 </div>
		</div>
  
</template>

<script>
export default {
  components: {},
  data() {
    return {
		showText: false,
		myphoto: require('@/img/views/yinhangka.png')
	};
  },
  computed: {},
  methods: {
	  next() {
		  this.showText =!this.showText
	  }
  }
};
</script>

<style lang="scss" scoped>
.login-warp {
  height: 100%;
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
    align-items: center;
	padding-left: 98px;
	padding-top: 48px;
  }
  .login-next-center{
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  margin-top: 98px;
	  img{
		  width: 560px;
		  height: 420px;
	  }
  }
}
</style>
