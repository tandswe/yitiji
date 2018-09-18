<template>
    <div class="wrap">   
        <msgCheck></msgCheck>
    </div>
</template>

<script>
import msgCheck from "../motorCompontes/msgCheck.vue";
export default {
  components: { 
      msgCheck
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
