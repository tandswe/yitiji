<template>
    <div class="wrap">   
        <feesSucceed :cardText="cardText"  heardText="缴费" :succeed="true" v-if="isShow"></feesSucceed>
        <feesSucceed :cardText="cardTexts" heardText="打印"></feesSucceed>
    </div>
</template>

<script>
import feesSucceed from "../motorCompontes/feesSucceed.vue";
export default {
  components: { 
      feesSucceed
   },
  mounted() {},
  data() {
    return {
      isShow: false,
      cardText: "为了不影响办理进度请将原驾 驶证原件付费邮寄至： 广州市XXXXXXX车管所",
      cardTexts: "请取走并保管好您的凭证"
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>
