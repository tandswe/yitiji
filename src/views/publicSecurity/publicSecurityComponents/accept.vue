<template>
	<div class="wrap">   
        <h1>请选择你需要领取方式</h1>
        <div class="expenses-btn">
				<button @click="localtNext">受理派出所领取</button>
				<button @click="acceptNext">邮寄领取</button>
			</div>
    </div>
</template>

<script>
export default{
    components: {},
  data() {
    return {
    };
  },
	methods:{
    acceptNext() {
      this.$emit('nextChange', 1)
    },
    localtNext(){
        this.$emit('localtNexts', 0)
    }
	}
}
</script>
<style>
/*.crimeTestifyFn .main .main-center .content{
	padding: 0;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}*/
</style>
<style lang="scss" scoped>
h1{
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
	align-items: center;
    padding-left: 98px;
    padding-top: 48px;
}
.expenses-btn {
    width: 460px;
    margin: 0 auto 0;
    padding-top: 116px;
    button {
      margin-bottom: 46px;
      width: 460px;
      height: 80px;
      background: rgba(5, 117, 222, 1);
      border-radius: 6px;
      color: #fff;
    }
  }

</style>
