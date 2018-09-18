<template>
    <div class="entry-warp">   
        <div class="entry-Hk flex-sa">
          <router-link  v-for="(item,index) of HKtext" :key="index" :to="path[index]">
            <button>
                    
                        {{item}}
                    
                </button>
                </router-link>
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
        "驾驶人交通违法查询",
        "驾驶人交通违法查询和处理",
        "机动车交通违法查询和处理",
        "驾驶证扣分查询",
        "机动车驾驶证转入换证",
        "机动车驾驶证补办",
        // "核发技术检验合格标志",
        // "补换领机动车驾驶证",
        // "补换领机动车号牌",
        // "补换领检验合格标志",
        // "补换领机动车登记证书",
        "机动车驾驶证有效期满换证"
        // "驾驶证降低准驾车型换证",
        // "驾驶证达到规定年龄换证"
      ],
      path: [
        "/jiaotongfa/driverInquire",
        "/jiaotongfa/choice",
        "/jiaotongfa/carCheck",
        "/jiaotongfa/deductMarks",
        "/jiaotongfa/motorPeriod",
        "/jiaotongfa/driverReplace",
        "/jiaotongfa/periodValidty"
      ]
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
