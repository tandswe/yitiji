<template>
    <div class="login-warp">  
        <div class="login-text">
            <p>证件信息：<span>通行证号码：123456789  有效期：2018-12-22</span>      </p>
            <p>剩余签注：<span>香港：一年一次有效 澳门：三个月二次有效</span>      </p>
	</div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        
	};
  },
  computed: {},
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.login-warp {
 .login-text{
     margin-top: 137px;
     p{
         font-size: 26px;
         margin-bottom: 20px;
         span{
             display: inline-block;
             width: 644px;
             height: 80px;
             line-height: 80px;
             box-sizing: border-box;
             border: 1px solid #E5E5E5;
         }
     }
 }
}
</style>
