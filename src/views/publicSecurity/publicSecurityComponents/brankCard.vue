<template>
    <div>   
		<h1>请插入银联卡 10s</h1>
			<div class="expenses-center">
				<img :src="mybank" alt="">
			</div>
      <slot></slot>
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
  methods: {}
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
   @media screen and (max-width:1200px){
     img{
       zoom: 200%;
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
