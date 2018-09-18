<template>
    <div class="entry-warp">   
        <div class="entry-Hk flex-sa">
            <button v-for="(item,index) of HKtext" :key="index"><router-link :to="XGpath[index]">{{item}}</router-link></button>
        </div>
        <div class="entry-TW flex-sa">
            <button v-for="(item,index) of TWtext" :key="index"><router-link :to="TWpath[index]">{{item}}</router-link></button>
        </div>
        
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      HKtext: [
        "港澳通行证团队游签注",
        "港澳通行证个人游签注",
        "港澳通行证签注次数查询",
        // "换发往来港澳通行证",
        // "补发往来港澳通行证"
      ],
      TWtext: [
        "台湾通行证团队游签注",
        "台湾通行证个人游签注",
        "台湾通行证签注次数查询",
        // "换发往来台湾通行证",
        // "补发往来台湾通行证"
      ],
      XGpath: ["/entyDndexitPage/entryDndexit", "/entyDndexitPage/entryindividual","/macaoPermit/macaoPermitHome"],
      TWpath: ["/entyDndexitPage/TWDndexit", "/entyDndexitPage/TWIndividual","/TWPermit/TWPermitHome"]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.entry-warp {
  position: relative;
  padding: 30px 40px;
  height: 650px;
  .entry-Hk {
    margin-top: 17px;
  }
  .entry-TW {
    margin-top: 17px;
  }
}
button {
  font-size: 28px;
  width: 360px;
  height: 80px;
  border: 1px solid rgba(0, 105, 211, 1);
  border-radius: 6px;
  color: #0476de;
  background: #fff;
  margin: 16px 29px 33px 29px;
  &:hover {
    background: #0474de;
    color: #fff;
  }
}
.flex-sa {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
