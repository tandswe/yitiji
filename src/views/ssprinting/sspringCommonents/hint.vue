<template>
    <div class="warp-details"> 
        <h1 v-if="!succeed">打印成功</h1>  
        <div class="chilp-card" :style="{marginTop:!succeed ? '':'100px'}">
			<div class="chilp-text">
				<h3>您好，##市基本养老金领取资格认证（生存认证），时间为：</h3>
				<p >####年##月##日~####年##月##日。请在规定时间内办理！</p>
				<p>如有疑问，请拨打12333进行咨询。</p>
                <p style="text-align: right; margin-top:43px;">谢谢，请退出！</p>
			</div>
        </div>
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
</template>

<script>
export default {
  components: {},
  props:{
      cardText:String,
      heardText: String,
      succeed: {
          default:false,
          type:Boolean
      }
  },
  data() {
    return {
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
        padding: 55px;
        box-sizing: border-box;
        font-size: 24px;
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
