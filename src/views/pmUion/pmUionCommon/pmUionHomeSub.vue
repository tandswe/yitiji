<template>
    <div class="entry-warp">   
        <div class="entry-Hk flex-sa">
            <button v-for="(item,index) of HKtext" :key="index"><router-link :to="XGpath[index]">{{item}}</router-link></button>
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
        "残疾人证申请办理",
        "残疾人证基本信息变更",
        "残疾人证补办",
        "南粤扶残助学",
        "残疾人证注销"
      ],
      XGpath: ["/pmUion/CJRZBBFn", "/pmUion/CJRZSChangeFn","/pmUion/CJRapply","/pmUion/supportAidStudy","/pmUion/lisenceCancellation"],
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss">

</style>
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
