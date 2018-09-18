<template>
    <div>   
        <div class="editCenter">
           <el-form  :model="allMsg" ref="allMsg" label-width="140px" :rules="rules">
               <!--  个人基本信息-->
            <div v-if="msgID == 0">
                 <h1>个人基本信息</h1>
                    <el-row style="margin-top:30px;">
                    <el-col :span="12">
                        <el-form-item label="姓名:" prop="name" label-width="220px">
                            <el-input v-model="allMsg.xm"></el-input>
                        </el-form-item> 
                    </el-col>
                    <el-col :span="12" class="zjhm">
                            <el-form-item label="证件号码:" prop="gmsfhm" label-width="220px">
                                <el-input v-model="allMsg.gmsfhm"></el-input>
                            </el-form-item> 
                    </el-col>
                    <el-col :span="12" class="zjhm">
                            <el-form-item label="联系电话:" prop="Phone" label-width="220px">
                                <el-input v-model="allMsg.lxdh"></el-input>
                            </el-form-item>
                    </el-col>
                    </el-row>
                    
                    <div class="btnclick">
                        <div  @click="subChilck">
                            <btn btname="提交" ></btn>
                        </div>
                        <div   @click="cancelChilck">
                            <btn btname="取消" ></btn>
                        </div>
                    </div>
                    
            </div>
           <!--  个人基本信息-->
           <!--  居住地址信息-->
           <div  v-if="msgID == 1">
               <h1>居住地址信息</h1>
                <el-row>
                        <el-col :span="12">
                            <div class="flex-start">
                                <div>
                                    <el-form-item label="邮寄地址" id="area1" required label-width="9vw" >
                                        <!-- prop="provinceSelect" -->
                                        <el-select  v-model="allMsg.provinceSelect" placeholder="请选择省市" @change="cityChange">
                                        <el-option v-for="(item,index) in optionData.city" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </div>
                                <div>
                                    <el-form-item   id="area2" prop="xqdmChange" >
                                        <el-select  v-model="allMsg.zjzdz_xqdm" placeholder="区/县" @change="xqdmChange">
                                            <el-option v-for="(item,index) in optionData.district" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>

                                        </el-select>
                                    </el-form-item>
                                </div>
                            </div>
                            
                        </el-col>
                        <el-col :span="12">
                            <div>
                                    <el-form-item label="街道(乡/镇)" id="area3" required label-width="9vw">
                                    <!--  prop="xzdmChange" -->
                                        <el-select  v-model="allMsg.zjzdz_xzdm" placeholder="请选择活动区域" @change="xzdmChange">
                                        <el-option v-for="(item,index) in optionData.village" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                            </div>
                            
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="详细地址" prop="qhnxxdz">  
                                <el-autocomplete
                                class="inline-input"
                                v-model="allMsg.zjzdz_qhnxxdz"
                                :fetch-suggestions="querySearch"
                                placeholder="请输入内容"
                                @select="handleSelect"
                                ></el-autocomplete>
                            </el-form-item>
                        </el-col>
                            <el-col :span="12">
                            <el-form-item label="派出所" prop="pcsdm">
                            <el-select placeholder="请选择"  v-model="allMsg.pcsdm">
                                <el-option v-for="(item,index) in optionData.local" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                            </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="居住事由" required>
                                <el-select placeholder="请选择活动区域" v-model="allMsg.zjzsydm">
                                    <el-option v-for="(item,index) in optionData.incident" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    <el-col :span="12">
                        <el-form-item label="居住住所" required>
                            <el-select placeholder="请选择活动区域" v-model="allMsg.zjzcsfldm">
                                <el-option v-for="(item,index) in optionData.dwell" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    </el-row>
                    <div>
                        <button @click="subChilck">提交</button>
                        <button @click="cancelChilck">取消</button>
                    </div>
           </div>
             <!--  居住地址信息-->
            <!-- 随行人员信息（15周岁及以下）-->
            <div  v-if="msgID == 2">
                <h1>随行人员信息（15周岁及以下）</h1>
                <div ref="addSx" v-for="(item,index) in allMsg.sxry.length" :key="index">
                        <h3>随行人员{{index+1}}</h3>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="姓名">
                                <el-input v-model="allMsg.sxry[index].xm"></el-input>
                            </el-form-item>
                        </el-col>
                            <el-col :span="12">
                                <el-form-item label="证件号码">
                                    <el-input v-model="allMsg.sxry[index].gmsfhm"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="与申报人关系">
                        <el-select placeholder="请选择活动区域" v-model="allMsg.sxry[index].ysqrgx">
                            <el-option v-for="(item,index) in optionData.linkman" v-if="item.name" :key="index" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="warp-hr"></div> 
                </div>
                <button class="addPersonnel" @click="addSXRY"> <span>+</span> 添加随行人员</button>        
                 <div>
                    <button @click="subChilck">提交</button>
                    <button @click="cancelChilck">取消</button>
                </div>
            </div>
        </el-form>
           
        </div>
    </div>
</template>

<script>
import btn from '@/components/base/buttonSub.vue'
    export default {
        components:{
            btn
        },
        props:{
            allMsg:Object,
            msgID:Number,
            optionData:Object,
            rules:{},
            SXdata:0
        },
        data() {
            return {
            }
        },
        computed:{
        },
        methods:{
            addSXRY(){
                if (this.allMsg.sxry.length <5) {
                    this.allMsg.sxry.push({ xm: "", gmsfhm: "", ysqrgx: "" })
                }
            },
            subChilck(){
                // localStorage.setItem('PERSONAGEMSG', JSON.stringify(this.allMsg))
                this.$emit('showFlie',this.allMsg)
                this.$emit('noShowFlie',true)
            },
            cancelChilck(){
                this.$emit('noShowFlie', true)
            }
        }
    }
</script>
<style lang="scss">
.el-form-item__label{
    justify-content: flex-end;
    margin-right:10px;
    align-items: center;
    height:4vh;
}
.el-input__inner{
    @media screen and (max-width:1200px){
        width:40vw;
    }
   
}
</style>

<style lang="scss" scoped>

.el-form-item {
    margin: 16px 0;
    display: flex;
  }
.zjhm{
    margin-top:1vh;
}
.lxdh{
   margin-top:1vh
}

.el-row{
    @media screen and (max-width:1200px){
        display:flex;
        flex-direction:column;
    }
}
.el-form-item__content {
    font-size: 24px;
    line-height: 32px;
    position: static;
  }
.el-input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 412px;
    height:54px;
}
.addPersonnel {
  outline: none;
  width: 213px;
  height: 56px;
  background: rgba(0, 112, 224, 1);
  border-radius: 8px;
  color: #ffffff;
  margin-bottom: 48px;
  font-size: 24px;
  span {
    font-size: 24px;
    vertical-align: middle;
  }
}
button {
      width:180px;
        height:56px;
        background:rgba(0,112,224,1);
        border-radius:28px;
        color:#fff;
        margin: 65px 50px;
       
    }
.btnclick{
    display:flex;
    justify-content: center;
    margin-top:2vh;
    div{
        padding:10px;
    }
}
</style>
