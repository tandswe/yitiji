<template>
    <div class="warp-details">   
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
  props: {
    cardText: String
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
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 173px;
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
      h3 {
        margin-bottom: 13px;
      }
    }
  }
}
</style>
