<template>
    <div>   
		<h1>请放置好机动车驾驶人身体条件证明</h1>
			<div class="expenses-center">
				<img :src="mybank" alt="">
			</div>
      <div @click="settypeId" style="margin-top:5vh">
		    下一步
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
</style>
