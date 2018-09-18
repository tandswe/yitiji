<template>
    <div>   
		<entryCardCenter :cardText="cardText"></entryCardCenter>
		<!-- <entrysignatureCenter></entrysignatureCenter> -->
		<div @click="next"  style="margin-top:5%">
                <button-sub btname="确认提交"></button-sub>
    </div>
    </div>
</template>

<script>
import entryCardCenter from "../entryComponents/entryCardCenter";
import entrysignatureCenter from "../entryComponents/entrysignatureCenter";
import buttonSub from "@/components/base/buttonSub";
export default {
  components: {buttonSub, entryCardCenter, entrysignatureCenter },
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
