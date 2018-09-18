<template>
    <div class="warp">   
        <h1>申请信息</h1>
      <div class="demo-input-suffix">
                  <span>申领原因</span>
                    <el-select v-model="shanghai" placeholder="请选择申领原因" >
                        <el-option label="遗失补领" value="shanghai"></el-option>
                        <el-option label="损坏补领" value="beijing"></el-option>
                    </el-select>
          <div >
              <buttonSub btname="下一步"></buttonSub>
          </div>
          
          <!-- <el-row>
              <el-col :span="24">
                  <span> 申领条件</span>
                    <el-select v-model="shanghai" placeholder="请选择申领条件" >
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
              </el-col>
          </el-row> -->
       
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
            next(){
                this.$store.commit('changeTabIndex',{count:2})
            }
        }
    }
</script>
<style lang="scss">
  .el-row{
            height: 30vh !important;
            display: flex;
            align-items: center;
        }

</style>


<style lang="scss" scoped>
.el-row{
    margin-bottom: 20px;
}
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
