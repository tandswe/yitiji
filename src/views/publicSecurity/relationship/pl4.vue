
<template>
    <div class="warp"> 

    <div class="setp2">
          <el-form  :model="ruleForm" ref="ruleForm"  :rules="rules">
            <h1>请输入您的联系方式</h1>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名" prop="qhnxxdz">
                        <el-autocomplete
                        class="inline-input"
                        v-model="ruleForm.zjzdz_qhnxxdz"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        ></el-autocomplete>
                    </el-form-item>
                </el-col>
                    <el-col :span="12">
                    <el-form-item label="联系电话" prop="pcsdm">
                    <el-select placeholder="请选择"  v-model="ruleForm.pcsdm">
                        <el-option v-for="(item,index) in police" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="step2_1">
                        <el-form-item label="通讯地址" id="area1" required label-width="9vw" >
                            <!-- prop="provinceSelect" -->
                            <el-select  v-model="ruleForm.provinceSelect" placeholder="请选择省市" @change="cityChange">
                            <el-option v-for="(item,index) in province" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    
                        <el-form-item   id="area2" prop="xqdmChange">
                            <el-select  v-model="ruleForm.zjzdz_xqdm" placeholder="区/县" @change="xqdmChange"  style="margin-left:10px;">
                                <el-option v-for="(item,index) in district" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>

                            </el-select>
                        </el-form-item>

                    </div>
                    


                </el-col>
                <el-col :span="12"> 
                    <el-form-item label="街道(乡/镇)" id="area3" required label-width="9vw">
                            <!--  prop="xzdmChange" -->
                                <el-select  v-model="ruleForm.zjzdz_xzdm" placeholder="请选择活动区域" @change="xzdmChange">
                                <el-option v-for="(item,index) in village" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                                </el-select>
                    </el-form-item>

                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="详细地址" prop="qhnxxdz">
                        <el-autocomplete
                        class="inline-input"
                        v-model="ruleForm.zjzdz_qhnxxdz"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        ></el-autocomplete>
                    </el-form-item>
                </el-col>    
            </el-row>

            <!-- <hr> -->
            <div class="but-w" @click="subBTN">
                <!-- <button class="subBTN" @click="subBTN"> 提交</button>     -->
                <btn btname="确定并提交"></btn>
            </div>
                   
        </el-form>
    </div> 
      
    </div>
</template>

<script>
import btn from '@/components/base/buttonSub'
import  '@/css/column/table.scss'
export default {
  components:{
      btn
  },
  data() {

    return {
      pagestep:1,//当前页的小步数
      ruleForm: {
        xm: "", //姓名
        gmsfhm: "", //证件号
        lxdh: "", //联系电话
        zjzdz_xqdm: "", //区
        zjzdz_xzdm: "", //乡镇
        pcsdm: "", //派出所
        zjzdz_qhnxxdz: "", //详细地址
        zjzsydm: "", //居住事由
        sxry: [], //随行人员
        zjzcsfldm:'',
        provinceSelect: ""//市
      },
      rules:{}

    };
  },
  created() {

  },
  computed: {},
  methods: {
    nextstep(){
         this.pagestep++
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

