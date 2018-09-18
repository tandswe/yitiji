<template>
    <div class="warp-details"> 
        <div class="chilp-card" :style="{marginTop:'100px'}">
			<div class="chilp-text">
				<h3>您好，您的居住证签注时间</h3>
				<p >####年##月##日~####年##月##日。请在规定时间内签注！！</p>
                <p style="text-align: right; margin-top:43px;">谢谢，请退出！</p>
			</div>
        </div>
        <slot></slot>
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
  text-align: center;
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
             text-align: left;
		}
        p{
            font-size: 20px;
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
