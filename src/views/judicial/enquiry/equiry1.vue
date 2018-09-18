<template>
    <div class="article clearfix">  
        <div class="heatitle">
            <h1>请输入或者选择进行检索</h1>
            </div> 
        <article>
           
            <el-form  ref="ruleForm" label-width="200px">
            <el-row>
               
                <el-col :span="12">
                    <el-form-item label="当事人姓名">
                        <el-input ></el-input>
                    </el-form-item> 
                </el-col>
                <el-col :span="12">
                    <el-form-item label="检察院名称" >
                        <el-input ></el-input>
                    </el-form-item> 
                </el-col>     
                    <el-col :span="12">
                    <el-form-item label="开始公开时间">
                         <el-date-picker
							
							type="date"
							placeholder="选择日期">
							</el-date-picker>
                    </el-form-item> 
                </el-col>
                <el-col :span="12">
                    <el-form-item label="结束公开时间" >
                        <el-date-picker
                  
                       type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                    </el-form-item> 
                </el-col>  

                 </el-row>
              <div @click="substep"  style="margin-top:5%">
                <button-sub btname="查询"></button-sub>
            </div> 
             
            </el-form> 
         
        </article>      
  </div>

   
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
    components: {buttonSub},
       
    }
</script>
<style>
 @media screen and (max-width:1200px){
.el-form-item__label {
    font-size: 1.6vh !important;
}
   .el-input__inner{
     width: 20vw !important;
}
}
</style>
<style lang="scss">
 @media screen and (max-width:1200px){
.article article{
    width: 90%;
    margin: 0 auto;
}
 }
.content{
    padding:0
}
.heatitle{
		font-size: 28px;
		color: #333;
		height: 30px;
		margin: 45px 0;
        padding-left: 98px;
	}
.el-col-3{width:110px;
margin-top:10px;
}

.el-form-item__label{
    text-align:right;
    font-size:24px; 
}    
@media screen and (max-width:1200px){
    .el-form-item__label{
        font-size: 1.2vh;
         line-height: 3.7vh;
    }
 
   
}
.form-item__label{
 width:100px;
}
.el-input__inner{
    width:290px;
}
</style>
<style lang="scss" scoped>

 @media screen and (max-width:1200px){
            .txt{height: 850px !important;
            }
            .heatitle h1{
                font-size: 1.6vh
            }
            }
.tr{ width: 100px; height:100px;display:block;} 
 .el-input--suffix .el-input__inner{
     width:100px;
 }
 .printtable{
             background:#f5f5f5;
             width:100%;
             margin-top:40px;
             .tablewrap{
                 width:1200px;
                 margin:25px auto;
                 background:rgba(255,255,255,1);
                 border-radius:8px;
                 height:100%;
                
             }
         }
.article{
    width:100%;
    margin:0 auto;
    text-align: left;
    font-size:24px;
    article{
         height:100%;
         font-size:16px;
         padding-top:38px;
         box-sizing: border-box;
    }
   
}
.buttonStyle{
    background:#008cff;
	margin-top:44px;
	width: 180px;
	height: 60px;
	margin-left: auto;
    margin-right: auto;
    
	button{
    font-size: 26px;
	color: #fff;
	background: none;
    line-height: 60px;
	text-align: center;
	width: 100%;
	text-align: center;
	}
}
       
 .clearfix table{ 
	  width: 97%;
	  border: 1px solid #E6E6E6;
	  margin-left: auto;
	  margin-right: auto;
	  margin-top: 20px;
	  td
	  {
	  margin:0.4vw  auto; 
	  font-size:14px;
	  color: #333;}
	p{
		line-height: 40px;
	}
	 }
.ms-margin{
	margin-left: 3%;
}
.ms-width{
	width: 100%;
	background-color: #fff;
	table{
	  width: 97% !important;
	  border: 1px solid #E6E6E6;
	  margin-left: auto;
	  margin-right: auto;
	  margin-top: 20px;
	}
}
.ms-dont{
 font-size:18px;
 line-height: 200%;
 color: #333;
 margin-right:10%;
 text-align: right;
 margin-top: 6%;
}
.ms-donts{
 font-size:16px;
 line-height: 200%;
 color: #888;	
 margin-left: 5%;
 margin-bottom: 5%;
}
</style>
