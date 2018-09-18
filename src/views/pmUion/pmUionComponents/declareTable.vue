<template>
    <div class="article clearfix">   
        <article>
          <p style="text-align:left;">请填写您的申报材料 {{seccount}}</p>
          <el-form  :model="ruleForm" ref="ruleForm" label-width="9vw" class="myform">
              <el-row>
                <el-col :span="12">
                   
                            <el-form-item label="申报名称" id="area4" required label-width="9vw">
                                <el-input></el-input>
                            </el-form-item>
                    
                       
                </el-col>
            
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名" required>
                        <el-input></el-input>
                    </el-form-item> 
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系电话" required>
                        <el-input ></el-input>
                    </el-form-item> 
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                   
                            <el-form-item label="证件地址" id="area4" required label-width="9vw">
                                <el-input></el-input>
                            </el-form-item>
                    
                       
                </el-col>
            
            </el-row>
             <el-row>
                <el-col :span="12">
                    <div class="flex-start">
                        <div>
                            <el-form-item label="邮寄地址" id="area1" required label-width="9vw">
                                <el-select  placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item  id="area2">
                                <el-select  placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                       
                </el-col>
                <el-col :span="12">
                    <div>
                            <el-form-item label="街道(乡/镇)" id="area3" required label-width="9vw">
                                <el-select  placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                    </div>
                    
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                   
                            <el-form-item label="详细地址" id="area4" required label-width="9vw">
                                <el-select  placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                    
                       
                </el-col>
            
            </el-row>
          
          </el-form>
        

        </article>
        
    </div>
</template>

<script>
    export default {
        components:{},
        data() {
            return {
                id:require('@/img/views/fingerprint.png'),
                seccount:180
               
            }
        },
        created(){
            this.timer = setInterval(() => {
                        this.seccount--
                        if(this.seccount<=0){
                            clearInterval(this.timer);
                        }
            }, 1000)
        },
        computed:{
           
        },
        methods:{
          back(){
              this.$router.push({path:'/'})
          },
         
          open() {
            this.$alert('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                type: 'info',
                message: `action: ${ action }`
                });
            }
        });
      }
        }
    }
</script>
<style lang="scss">
.el-form-item__content {
	margin-left: 9.5vw !important;
}

.el-input__inner {
	width: 400px;
	font-size: 20px;
}

.el-form-item__label {
	font-size: 22px;
}

#area1 .el-input__inner {
	width: 203px !important;
}

#area2 .el-input__inner {
	width: 190px !important;
}

#area2 {
	width: 100px;
	.el-form-item__content{
     margin-left: 10px !important;
}

}

#area3 .el-input__inner {
	width: 400px;
}

#area4 .el-input__inner {
	width: 990px;
}
</style>

<style lang="scss" scoped>
.article{
 
    text-align:center;
    vertical-align: middle;
    position: relative;
    display: flex;

    article{
        width:85%;
        margin:0 auto;
        
        p{
            text-align:left; 
            margin-top:45px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;

        }
        .myform{
            margin-top:65px;
        }
        }
    }
// }



</style>
