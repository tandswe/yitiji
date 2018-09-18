<template>
    <div class="warp-details"> 
        <div class="chilp-card">
			<img :src="succeedIcon" alt="">
			<div class="chilp-text">
				<h3>{{heardText}}</h3>
				<p>{{cardText}}<br>
                                {{cardTextB}}</p>
			</div>
        </div>
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
        <div style="text-align: center;">

        <!-- <button @click="next">打印凭证</button> -->

        <div @click="next"  style="margin-top:5%">
                <button-sub btname="打印凭证"></button-sub>
            </div> 
        <slot></slot>
        </div>
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
  components: {buttonSub},
  props:{
      cardText:String,
      cardTextB:String,
      heardText: String
  },
  data() {
    return {
      succeedIcon: require("@/img/views/finish@2x.png")
    };
  },
  computed: {},
  methods: {
      next(){
            this.$router.push('/')
            this.$store.commit('changeTabIndex',{count: 0})

      }
  }
};
</script>

<style lang="scss" scoped>
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
  @media screen and (max-width:1200px){
      .chilp-card {
          width: 80% !important;
          height: 20vh !important;
      }
  }
  .chilp-card {
    width: 720px;
    height: 360px;
    border-radius: 20px;
    background: #f6f6f6;
	margin: 100px auto 0;
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
        p{
            width: 363px;
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
