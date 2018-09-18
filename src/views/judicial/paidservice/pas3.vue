<template>
    <div class="article clearfix">   
        <article :marginLeft="marginleft" :style="{ width, 'margin-left':'auto','margin-right':'auto'}"> 
        <el-form  :model="ruleForm" ref="ruleForm" label-width="190px">
            <h1>请填写信息资料</h1>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名" required>
                        <el-input></el-input>
                    </el-form-item> 
                </el-col>
                <el-col :span="12">
                    <el-form-item label="证件号码:" required>
                        <el-input ></el-input>
                    </el-form-item> 
                </el-col>
            </el-row>
            <el-form-item label="联系电话" required>
                <el-input ></el-input>
            </el-form-item>
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <h1>居住地址信息</h1>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="地区" required>
                        <el-input ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                   <el-form-item label="街道(乡/镇)" required>
                        <el-select placeholder="请选择" v-model="ruleForm.county">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="详细地址" required>
                        <el-autocomplete
                        class="inline-input"
                        placeholder="请输入内容"
                        :trigger-on-focus="false"
                        ></el-autocomplete>
                        <!-- @select="handleSelect"
                        :fetch-suggestions="querySearch" -->
                    </el-form-item>
                </el-col>
                    <el-col :span="12">
                    <el-form-item label="派出所" required>
                    <el-select placeholder="请选择"  v-model="ruleForm.county">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="居住事由" required>
                <el-select placeholder="请选择活动区域" v-model="ruleForm.county">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <!-- <hr> -->
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            
           
          </el-form>
            </article>
           <div  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
    </div>

</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
        components: {buttonSub},
        data() {
            return {
                ruleForm: '',
                rules: '',
                marginleft:40,//主题内容margin-left;
            }
        },
        computed:{
           width(){ //内容宽度百分比
               return this.toPercent((1366-this.marginleft*2)/1366) 
           }
        },
        methods:{
           //小数转百分比
           toPercent(point){
                var str=Number(point*100).toFixed(1);
                str+="%";
                return str;
            }
        },
       
    }
</script>
<style>
 @media screen and (max-width:1200px){
.el-input__inner{
    width: 13vh !important;
  }
.el-form-item__label{
    line-height: 3.5vh;
}
.article h1{
    font-size: 1.6vh !important;
}
}
</style>


<style lang="scss" scoped>
.el-form-item {
    margin: 16px 0;
    display: inline-block;
  }
  .el-form-item__content {
    font-size: 24px;
    line-height: 32px;
    position: static;
    
  }

.el-input{
    position: relative;
    font-size: 24px;
    display: inline-block;
    width: 412px;
    height:54px;
    line-height: 54px;
}
.warp-hr{
   height: 1px;
   background-color: #ddd;
   width: 100%; 
   margin: 48px 0;
}

.article{
    //height: 100%;
    padding-top: 51px;
    text-align: left;
    h1{
        font-size: 28px;
        color: #333;
        margin-top: 30px;
        margin-bottom: 30px;
    }
}
.addPersonnel{
    outline: none;
    width:213px;
    height:56px;
    background:rgba(0,112,224,1);
    border-radius:8px;
    color: #FFFFFF;
    margin-bottom: 48px;
    font-size: 24px;
    span{
        font-size: 24px;
        vertical-align: middle;
    }
}
.butt{
    width: 10%;
    margin: 0 auto;
button {
      width:180px;
        height:56px;
        background:rgba(0,112,224,1);
        border-radius:28px;
        color:#fff;
    
}
    }
</style>
