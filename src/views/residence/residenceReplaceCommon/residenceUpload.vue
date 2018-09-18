<template>
    <div class="warp"> 
        <!-- 申请人相片（可选填） -->
        <!-- <div v-if="$store.state.residence.showchange"> -->
            
          <el-form >
              <h1>申请人相片（可选填）</h1>
            <el-form-item label="相片流水号" required label-width="220px">
                            <el-input></el-input>
            </el-form-item>
            <div class="warp-hr"></div> 
            <h1>申请人身份证明</h1>
            <el-form-item label="身份证明类型" required label-width="220px">
                <el-select v-model="changeValue" placeholder="请选择申请条件" @change="TypeClick">
                        <el-option v-for="(item,index) in selectData" :label="item.clmc" :value="item.id" :key="index"></el-option>
                </el-select>
            </el-form-item>
            </el-form>
            <ApplyScan :scanText="scanText" :scanTextMin="scanTextMin" :idPhoto="idPhoto"></ApplyScan>  
            <div style="text-align: center;margin-top:4vh" @click="check">
                 <btn btname="下一步" ></btn>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import ApplyScan from "./ApplyScan";
import btn from '@/components/base/buttonSub.vue'
export default {
  components: {
    ApplyScan,btn
  },
  data() {
    return {
      changeValue: "",
      scanText: [],
      scanTextMin: "免冠正脸照",
      idPhotot: require("@/img/views/photo.png"),
      idPhoto: require("@/img/views/id@4x.png"),
      showchange: false,
      proveMyPhoto: [
        require("@/img/views/registe.png"),
        require("@/img/views/registe.png"),
        require("@/img/views/registe.png"),
        require("@/img/views/registe.png")
      ],
      CTtext: ["请上传学生证：", "就读学校出具的连续就读证明："],
      selectData: []
    };
  },
  computed: {},
  mounted() {
    this.selectDate();
  },
  methods: {
    TypeClick(value) {
      for (let i in this.selectData) {
        if (value == i) {
          this.scanText = this.selectData[value].sons.map((item, index) => {
            return item.clmc;
          });
        }
      }
      this.myPhoto = [
        require("@/img/views/idFont.png"),
        require("@/img/views/idFont.png")
      ];
    },
    check() {
    //   this.$store.state.residence.showchange =false
    this.$store.commit('changeTabIndex',{count:3})
    },
    selectDate() {
      this.$axios
        .get("/inteGration/api/jzz/scienceQuery", {
          params: { ywlx: "0103", page: "1", sltj: "JZCSFL0001" }
        })
        .then(data => {
          this.selectData = data.data.data[0].sons;
          this.changeValue = "JZZSFZMLXDM06";
          this.scanText = this.selectData["JZZSFZMLXDM06"].sons.map(
            (item, index) => {
              return item.clmc;
            }
          );
        });
    }
  }
};
</script>
<style>
.el-form-item{
  display:flex;
}

</style>


<style lang="scss" scoped>
.warp-hr{
   height: 1px;
   background-color: #ddd;
   width: 100%; 
   margin: 48px 0;
}
.warp {
  height: 100%;
  width: 94%;
  margin: 47px auto 0;
  padding-left: 48px;
  text-align: left;
  box-sizing: border-box;
  h1 {
    margin-bottom: 47px;
    font-size: 28px;
  }
  h2 {
    color: #999999;
    font-size: 24px;
    margin: 36px 0;
    font-weight: 500;
  }
}
.rentalHousing {
  width: 100%;
  text-align: center;
  .rental-left,
  .rental-right {
    display: inline-block;
    padding-top: 29px;
    margin: 20px 70px 0 70px;
    border-radius: 10px;
    width: 400px;
    height: 430px;
    background: #e7f1fb;
    img {
      margin-top: 33px;
      width: 360px;
      height: 215px;
    }
    p {
      font-size: 26px;
      text-align: left;
      margin-left: 20px;
      color: #333;
    }
    button {
      margin-top: 48px;
    }
  }
}
</style>
