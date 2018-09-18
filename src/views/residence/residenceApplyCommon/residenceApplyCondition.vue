<template>
    <div class="warp">
        <div v-if="showType==0">
            <h1>申请信息</h1>
            <div class="demo-input-suffix">
                <span style=""> 申请条件</span>
                    <el-select v-model="promiseType" placeholder="请选择申请条件" >
                        <el-option label="合法稳定住所证明" value="1"></el-option>
                        <el-option label="连续就读证明" value="2"></el-option>
                    </el-select>
              
            </div>
            <div style="margin-top:20vh;">
                <button-sub btname="下一步"  @click.native="next" class="next-btn"></button-sub>
            </div>
        </div>

        <div v-if="showType==1">
            <ApplyProve type="合法稳定住所" :proveScanText="proveScanText" :proveMyPhoto="proveMyPhoto"></ApplyProve>
        </div>
        <!-- 连续就读证明 -->
        <div v-if="showType==2">
            <ApplyProve type="连续就读" :proveScanText="CTtext" :proveMyPhoto="proveMyPhoto"></ApplyProve>
        </div>
    </div>
</template>

<script>
  import buttonSub from "@/components/base/buttonSub"
  import ApplyProve from './ApplyProve'
  export default {
    components:{
      buttonSub,
      ApplyProve
    },
    data() {
      return {
        showType: 0,
        promiseType: '',
        showchanges: false,
        proveScanText:['请上传工商营业执照：','劳动合同：','用人单位出具的劳动关系证明：','其他能够证明有合法稳定就业 的材料：'],
        CTtext:['请上传学生证：','就读学校出具的连续就读证明：'],
        proveMyPhoto:[require('@/img/views/registe.png'),require('@/img/views/registe.png'),require('@/img/views/registe.png'),require('@/img/views/registe.png')],
      }
    },
    computed:{

    },
    methods:{
      next() {
        if (!this.promiseType) {
          alert('请选择申请条件')
          return
        }

        if (this.promiseType == 1) {
            this.showType = 1
        } else if (this.promiseType == 2) {
          this.showType = 2
        } else {
          this.showType = 0
        }
        // this.$router.push('/residenceApplyQualification')
      }
    },
    created() {
      if (this.$route.query.promiseType) {
        this.showType = this.$route.query.promiseType
      }

    }
  }
</script>

<style lang="scss" scoped>
    .warp{
        // height: 100%;
        width: 90%;
        margin: 47px auto 0;
        text-align: left;
        h1{
            margin-bottom: 47px;
            font-size: 28px;
        }

    }
    .demo-input-suffix{
        font-size: 24px;
        color: #333;
        span{
            margin-right: 40px;
        }
    }

</style>
