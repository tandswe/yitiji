<template>
    <div class="login-warp">  
	  <div v-if="showText">
        <h1>请仔细阅读业务办理须知</h1>
        <div class="login-center">
					
    <h3>办理对象：</h3>
		<p>广东省户口居民（满16周岁）</p>
		<h3>办理条件：</h3>
		<h3>一、换发</h3>
		<p>⒈证件签注页用完或者即将有完的;</p>
		<p>⒉证件被损坏或出现质量不合格问题的;</p>
		<p>⒊其他经原审批机关或上级主管部门认可的特殊情形。</p>
		<h3>二、补发</h3>
		<p>遗失往来港澳通行证。</p>
		<p>办理手续 ：</p>
		<h3>一、换发</h3>
				<p>⒈申请人居民身份证验证;</p>
				<p>2.申请人通行证验证</p>
				<p>3.拍摄申请人近期正面照片</p>　 
				<p>4.申请人居民面部和指纹验证;</p>
				<p>5.提交申请资料</p>
				<p>6.效验资料成功后缴纳相关费用</p>
				<p>7.完成</p>
			　<h3>二、补发</h3>
			  	<p>⒈申请人居民身份证验证;</p>
					<p>2.申请人通行证号码验证</p>
					<p>3.拍摄申请人近期正面照片</p>　 
					<p>4.申请人居民面部和指纹验证;</p>
					<p>5.提交申请资料</p>
					<p>6.效验资料成功后缴纳相关费用</p>
			   	<p>7.完成</p>
			　<h3> 办理期限</h3>
			　　<p>正常换发：15个工作日</p>
			　　<p>证件损毁换发及补发：</p>
			　　<p>原则上自受理申请之日起满3个月发证(奔丧、探病、治病等急事急办情形除外)，如有其他理由确需特事特办提前补发的，由受理单位科领导审批后可最短缩至一个月后补发。</p>
			　　<p>服务收费：</p>
			　　<p>根据办理的签注种类收费。</p>
	  	<p>已满16周岁的签发10年有效《往来港澳通行证》，未满16周岁的签发5年；个人旅游签注：分为1年多次有效签注（香港）、1年一次有效港澳签注、1年二次香港有效签注、3个月一次有效港澳签注及3个月二次香港有效签注。</p>
			<h4>特别提示</h4>
			<p>（一）持往来港澳通行证再次签注无需采集及核验指纹信息。</p> <p>（二）申请澳门个人游签注距上一次申办间隔不足两个月的，则不能同时申请香港和澳门个人游签注，只能单独申请赴香港个人游签注。 </p><p>（三）可申请的签注种类，其中香港签注分为：三个月一次、一年一次、三个月两次、一年两次、一年多次（登记备案国家工作人员和军人不能申请一年多次签注）；澳门签注分为：三个月一次、一年一次。每次在香港或澳门逗留不超过7天。</p>
        </div>
		  <!-- <button  style="background:#ccc;">拒绝</button>
  		<button  @click="next()">同意</button> -->

       <div @click="next()"  style="margin-top:5%">
                <button-sub btname="同意"></button-sub>
       </div> 
	  </div> 
		<div v-else>
		 <h1 class="hSt">请插入你的港澳通行证</h1>
		 <div class="login-next-center">
			 <img :src="myphoto" alt="">
		 </div>
     <!-- <button @click="bigNext" style="margin-right:0;">下一步</button> -->

       <div @click="bigNext"  style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
       </div> 
		</div>

    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
  components: {buttonSub},
  data() {
    return {
      showText: true,
      myphoto: require("@/img/views/yinhangka.png")
    };
  },
  computed: {},
  methods: {
    next() {
      this.showText = !this.showText;
    },
    bigNext(){
      this.$store.commit('changeheadTabIndex',{count:1})
    }
  }
};
</script>

<style lang="scss" scoped>
button{
  width:154px;
  height:56px;
  background:rgba(0,140,255,1);
  border-radius:28px;
  color: #ffffff;
  margin-right:145px;
  margin-top:50px;
}

.login-warp {
  height: 80%;
  .hSt{
    text-align: left;
    padding-left: 98px;
  }
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    align-items: center;
    padding-top: 48px;
    text-align: center;
  }
  h3 {
    font-size: 24px;
    color: #333;
    margin-left: 35px;
    line-height: 50px;
  }
  h4 {
    font-size: 20px;
    color: #333;
    margin-left: 40px;
    line-height: 50px;
  }
  p {
    font-size: 18px;
    color: #333;
    line-height: 35px;
    margin-left: 60px;
  }
  .login-center {
    width: 1169px;
    height: 571px;
    background: rgba(238, 249, 255, 1);
    overflow: auto;
    white-space: pre-wrap;
    text-align: left;
    margin: 26px auto 0;
  }
  .login-next-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 98px;
    img {
      width: 560px;
      height: 420px;
      @media screen and (max-width:1200px){
        zoom:200%;
      }
    }
  }
}
  @media screen and (max-width:1200px){
     .login-center{
      height: 35vh !important;
     }
   }
</style>
