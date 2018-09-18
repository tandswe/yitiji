<template>
    <div class="warp-details">   
        <h1>打印结果</h1>
        <div class="chilp-card">
			<img :src="succeedIcon" alt="">
			<div class="chilp-text">
				<h3>打印成功</h3>
				<p>{{cardText}}</p>
			</div>
        </div>
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
</template>

<script>
export default {
  components: {},
  props:{
      cardText:String
  },
  data() {
    return {
      succeedIcon: require("@/img/views/finish@2x.png")
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.warp-details {
  height: 100%;
  text-align: left;
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    padding-left: 98px;
	margin-bottom: 144px;
	padding-top: 48px;
  }
  .chilp-card {
    width: 720px;
    height: 360px;
    border-radius: 20px;
    background: #f6f6f6;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
    img {
      visibility: midden;
    }
    .chilp-text {
		h3{
			margin-bottom: 13px;
		}

    }
  }
}
    .proceed{
        color: #E82222;
    }
    .suceed{
        color:#10951F;
    }
</style>
