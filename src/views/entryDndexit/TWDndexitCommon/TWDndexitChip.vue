<template>
    <div>   
		<entryCardCenter :cardText="cardText"></entryCardCenter>
		<!-- <entrysignatureCenter></entrysignatureCenter> -->
		
    </div>
</template>

<script>
import entryCardCenter from "../entryComponents/entryCardCenter";
import entrysignatureCenter from "../entryComponents/entrysignatureCenter";

export default {
  components: { entryCardCenter, entrysignatureCenter },
  data() {
    return {
      cardText: "正在为你的通行证擦写信息...",
      isshow: false
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
