<template>
    <div class="wrap">   
        <Books v-if="isShow"></Books>
        <accredit ></accredit>
        <brankPassword v-if="isShow"></brankPassword>
    </div>
</template>

<script>
import accredit from "../motorCompontes/accredit.vue";
import brankPassword from "../motorCompontes/brankPassword.vue";
import Books from "../motorCompontes/Books.vue";
export default {
  components: {
    accredit,
    brankPassword,
    Books
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
