<template>
    <div class="warp"> 
    <div v-if="pagestep==1" class="step1">
        <h1>个人基本信息</h1>
        <el-form  :model="ruleForm" ref="ruleForm"  :rules="rules">
            <div class="from-row">
                <el-form-item label="姓名:" prop="xm" label-width="200px">
                     <el-input v-model="ruleForm.xm"></el-input>
                </el-form-item> 
            </div>
            <div class="from-row">
                <el-form-item label="证件号码:" prop="gmsfhm" label-width="200px">
                    <el-input v-model.number="ruleForm.gmsfhm"></el-input>
                </el-form-item> 

            </div>
            <div class="from-row">
                <el-form-item label="联系电话:" prop="lxdh" label-width="200px">
                   <el-input v-model="ruleForm.lxdh"></el-input>
                </el-form-item>

            </div>
        </el-form>
        <div class="but-w" @click="nextstep()">
                <!-- <button class="subBTN" @click="subBTN"> 提交</button>     -->
                <btn btname="提交"></btn>
        </div>  
    </div> 
    <div v-if="pagestep==2" class="setp2">
          <el-form  :model="ruleForm" ref="ruleForm"  :rules="rules">

           
            <h1>居住地址信息</h1>
            <el-row>
                <el-col :span="12">
                    <div class="step2_1">
                        <el-form-item label="邮寄地址" id="area1" label-width="200px">
                            <!-- prop="provinceSelect" -->
                            <el-select  v-model="ruleForm.provinceSelect" placeholder="请选择省市" @change="cityChange">
                            <el-option v-for="(item,index) in province" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    
                        <el-form-item   id="area2" prop="xqdmChange" style="margin-left:10px;">
                            <el-select  v-model="ruleForm.zjzdz_xqdm" placeholder="区/县" @change="xqdmChange">
                                <el-option v-for="(item,index) in district" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>

                            </el-select>
                        </el-form-item>

                    </div>
                    


                </el-col>
                <el-col :span="12"> 
                    <el-form-item label="街道(乡/镇)" id="area3" label-width="9vw">
                            <!--  prop="xzdmChange" -->
                                <el-select  v-model="ruleForm.zjzdz_xzdm" placeholder="请选择活动区域" @change="xzdmChange">
                                <el-option v-for="(item,index) in village" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                                </el-select>
                    </el-form-item>

                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="详细地址" prop="qhnxxdz">
                        <!-- <el-autocomplete
                        class="inline-input"
                        placeholder="请输入内容"
                        v-model="ruleForm.zjzdz_qhnxxdz"
                        @select="handleSelect"
                        :fetch-suggestions="querySearch"
                        ></el-autocomplete> -->
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
                    <el-form-item label="派出所" prop="pcsdm">
                    <el-select placeholder="请选择"  v-model="ruleForm.pcsdm">
                        <el-option v-for="(item,index) in police" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="居住事由" porp="zjzsydm">
                        <el-select placeholder="请选择活动区域" v-model="ruleForm.zjzsydm">
                             <el-option v-for="(item,index) in zjzsyOption" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            <el-col :span="12">
                <el-form-item label="居住住所"  prop="zjzcsfldm">
                    <el-select placeholder="请选择活动区域" v-model="ruleForm.zjzcsfldm">
                        <el-option v-for="(item,index) in zjzcsOption" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            </el-row>
            <!-- <hr> -->
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <h1>随行人员信息（15周岁及以下）</h1>
            <div ref="addSx" v-for="(item,index) in ruleForm.sxry.length" :key="index">
                <h3 style="margin-bottom: 1vh;text-align: left; margin-left: 2vw;">随行人员{{index+1}}</h3>
                 <el-form-item label="姓名">
                            <el-input v-model="ruleForm.sxry[index].xm"></el-input>
                        </el-form-item>
                
                <el-row>
                  <el-form-item label="证件号码:" label-width="200px">
                    <el-input v-model.number="ruleForm.sxry[index].gmsfhm"></el-input>
                </el-form-item>
                </el-row>
                <el-form-item label="与申报人关系">
                    <el-select placeholder="请选择活动区域" v-model="ruleForm.sxry[index].ysqrgx">
                        <el-option v-for="(item,index) in dsrOption" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <div class="warp-hr"></div> 
            </div>
            <div style="text-align:left;">
                <button class="addPersonnel" @click="addSXRY"> <span>+</span> 添加随行人员</button>           
            </div>
            <div class="but-w" @click="subBTN">
                <!-- <button class="subBTN" @click="subBTN"> 提交</button>     -->
                <btn btname="提交"></btn>
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
          const checkPhone = (rule, value, cb) => {
              console.log(rule)
              console.log(value)
            let phoneTest = /^1[34578]\d{9}$/
            !value && cb(new Error('电话号码不能为空'))
            setTimeout(function () {
                !phoneTest.test(value) ? cb(new Error('请输入正确的电话号码格式')) : cb()
            }, 0)
        }
        let checkgmsfhm= (rule, value,cb)=>{
            console.log(rule)
            console.log(value)
             let phoneTest = /^1[34578]\d{9}$/
            if(!value || value.length !=18){
                cb(new Error('请输入正确的证件号'))
            }else{
                cb()
            }
        }
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
      province: [],
      district: [],
      provinceSelect: "",
      village: [],
      police: [],
      zjzsyOption:[],
      zjzcsOption:[],
      dsrOption:[],
      SXdata: 0,
      selectData:[],
      rules:{
        //   xm:[{type: 'string', required: true, message: '请输入名字', trigger: 'blur' }],
        //   gmsfhm:[{type:'number',message: '请输入名字',trigger:'change',required: true}],
        //   lxdh:[{validator:checkPhone,trigger:'blur',required: true}],
        //   provinceSelect:[{ required: true, message: '请选择市', trigger: 'change' }],
        //   zjzdz_xqdm:[{ required: true, message: '请选择区/县', trigger: 'change' }],
        //   zjzdz_xzdm:[{ required: true, message: '请选择乡/镇', trigger: 'change' }],
        //   zjzdz_qhnxxdz:[{ required: true, message: '请输入详细地址', trigger: 'blur'  }],
        //   pcsdm:[{ required: true, message: '请选择派出所', trigger: 'change' }],
      }
    };
  },
  created() {
    this.supercode(440000);
    this.getMSG()
    this.zjzsySelect()
    this.zjzcsSelect()
    this.dsrSelect()
  },
  computed: {},
  methods: {
    supercode(num) {
      this.$axios
        .get("/inteGration/api/jzz/dictQuery", {
          params: { supercode: 440000 }
        })
        .then(data => {
          this.province = data.data.data;
        });
    },
    cityChange(val) {
      this.province.forEach(element => {
        if (element[val]) {
          return (this.district = element[val]);
        }
      });
    },
    xqdmChange(val) {
      this.$axios
        .get("/inteGration/api/jzz/dictQuery", { params: { supercode: val } })
        .then(data => {
          this.village =data.data.data;
        });
    },
    xzdmChange(val) {
      this.$axios
        .get("/inteGration/api/jzz/getPoliceStation", {
          params: { xzdm: val, xzjddm: "", xzjdmc: "" }
        })
        .then(data => {
          this.police =data.data.data;
        });
    },
    addSXRY() {
        if (this.ruleForm.sxry.length < 5) {
            this.ruleForm.sxry.push({ xm: "", gmsfhm: "", ysqrgx: "" });
      }
    },
    getMSG(){
        // this.$axios.get(this.$JavaUrl + '/inteGration/api/jzz/getUserInfo',{
        //     params:{userid:"111"}
        // }).then(data=>{
        //     console.log(1)
        //     this.ruleForm.xm = data.data.data.name
        //     this.ruleForm.gmsfhm = data.data.data.cid
        // })
            this.ruleForm.xm = this.$store.state.residence.IdObj.name
            // this.ruleForm.gmsfhm = this.$store.state.residence.IdObj.idcode
            this.ruleForm.gmsfhm = this.$store.state.residence.IdObj.real_cid

    },
    querySearch(queryString,cb) {
    },
    querySearch(queryString,cb) {
        this.$axios.get('/inteGration/api/jzz/housingQuery',{
            params:{xzjd:this.ruleForm.zjzdz_xzdm,dzmc:queryString}
        }).then(data=>{
            data.data.data
           var changeData = data.data.data.map((item,index)=>{
                return {value: item.name,
                name: item.value}
            })
            cb(changeData)
        })
    },
    zjzcsSelect(){
        this.$axios
        .get("/inteGration/api/jzz/getDwellingPlace")
        .then(data => {
          this.zjzcsOption =data.data.data;
        });
    },
    zjzsySelect(){
        this.$axios
        .get("/inteGration/api/jzz/getCauseResidence")
        .then(data => {
          this.zjzsyOption =data.data.data;
        });
    },
    dsrSelect(){
        this.$axios
        .get("/inteGration/api/jzz/getAccompanyRelation")
        .then(data => {
          this.dsrOption =data.data.data;
        });
    },
    handleSelect(item){
        // console.log(item)
        // console.log(111)
        // this.$axios.get('/inteGration/api/jzz/housingQuery',{
        //     params:{xzjd:this.ruleForm.zjzdz_xzdm,dzmc:this.ruleForm.zjzdz_qhnxxdz}
        // }).then(data=>{
        //     console.log(data)
        // })
    },
    subBTN(){
        // this.$refs.ruleForm.validate((valid) => {
        //   if (valid) {
        //     alert('提示一下')
        //   } else {
        //       alert('好像要重新来')
        //   }
        // });
        // localStorage.setItem('PERSONAGEMSG', JSON.stringify(this.ruleForm))
        this.$store.state.residence.PERSONAGEMSG = this.ruleForm
        // this.$store.commit('changeheadTabIndex',{count:1})
        this.$router.push('/residenceQualification')
        this.$store.commit('changeTabIndex',{count: 2})
        // this.$store.state.home.headTabIndex =2
      },
      //跳转到下一小步
      nextstep(){
          this.pagestep++
      }
  }
};
</script>
<style lang="scss">
@media screen and (max-width:1200px){
    .el-input__inner{
        width:30vw;
}

}


</style>
<style lang="scss" scoped>
.warp{
    padding-left:98px;
}
.step1{
    h1{
        text-align:left;
        margin:1vw;
        @media screen and (max-width:1200px){
            font-size:3vw;
            text-align:left;
            margin:3vw;
        }
        
    }
}
.from-row{
    margin:6.5vh 0;
    @media screen and (max-width:1200px){
        margin:4vh 0;
    }
    
}
.but-w{
    margin-top:1vh;
}
</style>
