<template>
    <div class="warp-details">   
        <h1>付款结果 10s</h1>
        <div class="chilp-card">
			<img :src="succeedIcon" alt="">
			<div class="chilp-text">
				<h3>付款成功</h3>
				<p>请取走您的卡片</p>
				<p :class="succeed ? 'proceed': 'suceed'">{{cardText}}</p>
			</div>
        </div>
        <!-- <button @click="next" class="buttonStyle" v-if="succeed">下一步</button>
        <button @click="cllaBack" class="buttonStyle" v-else>返回</button> -->
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    succeed: {
      default: true
    },
    cardText: String
  },
  data() {
    return {
      succeedIcon: require("@/img/views/finish@2x.png")
    };
  },
  computed: {},
  methods: {
    next(){
      this.$store.commit('changeheadTabIndex',{count:1})
    },
    cllaBack(){
      this.$router.push('/')
      this.$store.commit('changeTabIndex',{count:0})
    }
  }
};
</script>

<style lang="scss" scoped>
.warp-details {
  height: 100%;
  text-align: center;
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    padding-left: 98px;
    margin-bottom: 144px;
    padding-top: 48px;
    text-align: left;
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
       @media screen and (max-width: 1200px){
         width:80%;
         height:20vh;
       }
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
.proceed {
  color: #e82222;
}
.suceed {
  color: #10951f;
}

</style>
