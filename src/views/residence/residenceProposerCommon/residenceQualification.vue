<template>
    <div class="warp"> 
        <!-- 申请人相片（可选填） -->
        <div v-if="$store.state.residence.showchange">
          <el-form>
            <h1 >申请人身份证明</h1>
            <el-form-item label="身份证明类型" required label-width="220px">
                <el-select v-model="changeValue" placeholder="请选择申请条件" @change="TypeClick">
                        <el-option v-for="(item,index) in selectData" :label="item.clmc" :value="item.id" :key="index"></el-option>
                </el-select>
            </el-form-item>
            </el-form>
            <ApplyScan :scanText="scanText" :scanTextMin="scanTextMin" :idPhoto="idPhoto"></ApplyScan>  
            <div style="text-align: center;" @click="check">
                 
                 <btn btname="提交"></btn>
        </div>
        </div>
        <div class="rentalHousing" v-else>
            <div class="rental-left ">
                <p>房屋租赁合同:</p >
                <img :src="idPhotot" alt="">
                <button class="buttonStyle" >拍照</button>
            </div>
            <div class="rental-right">
                <p>房屋出租人出具的租房证明:</p >
                <img :src="idPhotot" alt="">
                <button class="buttonStyle">拍照</button>
            </div>
                <div style="text-align: center; margin:30px;" @click="bigNext">
                    <btn btname="提交"></btn>
                </div>
            </div>
    </div>
</template>

<script>
import ApplyScan from "./ApplyScan";
import btn from '@/components/base/buttonSub'
export default {
  components: {
    ApplyScan,
    btn
  },
  data() {
    return {
      changeValue: "",
      scanText: [],
      scanTextMin: "免冠正脸照",
      idPhotot: require("@/img/views/photo.png"),
      idPhoto: require("@/img/views/id@4x.png"),
      showchange: false,
      allShow: true,
      proveScanText: [
        "请上传工商营业执照：",
        "劳动合同：",
        "用人单位出具的劳动关系证明：",
        "其他能够证明有合法稳定就业 的材料："
      ],
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
      this.$store.state.residence.showchange =false
    },
    bigNext(){
      // this.$router.push('/residenceUploading')
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
<style lang="scss">
.el-form-item__label{
  @media screen and (max-width:1200px){
     // width:25vw !important;
  }
 
}
</style>
<style lang="scss" scoped>
.warp {
  width: 94%;
  margin: 10px auto 0;
  padding-left: 48px;
  text-align: left;
  box-sizing: border-box;
  
  h1 {
    margin-bottom:25px;
    font-size: 28px;
    @media screen and (max-width: 1200px){
         margin-bottom: 47px;
         margin:2.5vh;
      
    }
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
    text-align:center;
    p{
       text-align:center !important;
    }
    @media screen and (max-width: 1200px){
     width: 32vw;
     height: 500px;
     
     }
    img {
      margin-top: 33px;
      width: 360px;
      height: 215px;
       @media screen and (max-width: 1200px){
        width: 75%;
        height: 270px;
     }
     .buttonStyle{
       min-width:20vm;
     }
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
