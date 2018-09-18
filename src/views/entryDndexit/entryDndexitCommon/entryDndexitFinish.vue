<template>
    <div>   
		<entryCardCenter :succeed="suceed" :cardText="cardText" v-if="!suceed"></entryCardCenter>
    </div>
</template>

<script>
import entryCardCenter from "../entryComponents/entryCardCenter";
export default {
  components: { entryCardCenter },
  data() {
    return {
      cardText: "通行证信息擦写完成",
      suceed: false
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
