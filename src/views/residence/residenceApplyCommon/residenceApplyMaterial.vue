<template>
    <div class="warp">
        <h1>申请信息</h1>
        <div class="demo-input-suffix">
            <span> 申请条件</span>
            <el-select v-model="shanghai" placeholder="请选择申请条件" >
                <el-option label="遗失补领" value="shanghai"></el-option>
                <el-option label="损坏补领" value="beijing"></el-option>
            </el-select>
            </div>
            <div style="margin-top: 50px;">
                <button-sub btname="下一步"  @click.native="next" class="next-btn"></button-sub>
            </div>
    </div>
</template>

<script>
  import buttonSub from "@/components/base/buttonSub"
    export default {
      components:{
        buttonSub
      },
        data() {
            return {
                shanghai: ''
            }
        },
        computed:{

        },
        methods:{
            next() {
              if (!this.shanghai) {
                alert('请选择申请条件')
                return
              }
              this.$router.push('/residenceApplyQualification')
              // this.$store.state.home.headTabIndex++
              this.$store.commit('changeTabIndex',{count: 2})
            }
        },
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
    margin-top:20vh;
    margin-bottom:20vh;
    display:flex;
    justify-content:center;
    @media screen and (max-width:1200px){
    margin-top:10vh;
    margin-bottom:10vh;}
    span{
        margin-right: 40px;
        display:flex;
        align-items:center;
        @media screen and (max-width:1200px){
            font-size:3vw !important;
        }
    }
}

</style>
