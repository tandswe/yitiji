<template>
    <div class="wrap">   
        <signature v-if="isShow"></signature>
        <brankCard v-if="isShow"></brankCard>
        <brankPassword v-if="isShow"></brankPassword>
    </div>
</template>

<script>
import brankCard from "../motorCompontes/brankCard.vue";
import brankPassword from "../motorCompontes/brankPassword.vue";
import signature from "../motorCompontes/signature.vue";
export default {
  components: {
    brankCard,
    brankPassword,
    signature
  },
  mounted() {},
  data() {
    return {
      isShow: false
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>
