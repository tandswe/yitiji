<template>
    <div class="article clearfix">   
        <article :marginLeft="marginleft" :style="{ width, 'margin-left':'auto','margin-right':'auto'}">
           
            <el-form  ref="ruleForm" label-width="220px">
            <el-row>
                <el-col :span="12" clsss="date">
                    <el-form-item label="个人编号">
                        <el-input></el-input>
                    </el-form-item> 
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单位编号">
                        <el-input ></el-input>
                    </el-form-item> 
                </el-col>
                <el-col :span="12">
                    <el-form-item label="险种" >
                        <el-input ></el-input>
                    </el-form-item> 
                </el-col>     
                    <el-col :span="12">
                    <el-form-item label="缴费开始时间">
                         <el-date-picker
							
							type="date"
							placeholder="选择日期">
							</el-date-picker>
                    </el-form-item> 
                </el-col>
                <el-col :span="12">
                    <el-form-item label="缴费结束时间" >
                        <el-date-picker
                  
                       type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                    </el-form-item> 
                </el-col>  



          
                <!-- <el-col :span="12"  >
                   开始时间
                </el-col>
                <el-col :span="12">
                   <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期" >
                    </el-date-picker>
                </el-col>
                <el-col :span="12" >
                   结束时间
                </el-col>
                <el-col :span="6">
                   <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-col>  -->
                 </el-row>
               <div class="buttonStyle">
                    <button >查询</button>
                </div>
             
            </el-form> 

            
        </article>
        <div class="printtable clearfix">
                 <div class="tablewrap clearfix">
                     <div  class="clearfix">

<table class="MsoTableGrid" border="1" cellspacing="0" >
	<tbody>
		<tr>
			<td valign="middle"   colspan="13" >
				<p class="MsoNormal">
					<span class="ms-margin">个人编号：3154894&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名：苏东坡 &nbsp;&nbsp;身份证号：164681561***1654</span><span style="font-family:宋体;;"></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   colspan="13" >
				<p class="MsoNormal">
					<span class="ms-margin">养老视同缴费月数：15&nbsp;&nbsp;&nbsp;&nbsp;现单位名称：广东创能科技股份有限公司</span><span style="font-family:宋体;;"></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >开始缴费<br/>日期</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >终止缴费<br/>日期</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >累计月数</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >缴费基数</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   colspan="6" >
				<p class="MsoNormal" align="center"  >
					<span  >各种险种缴费历史</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   rowspan="3" >
				<p class="MsoNormal" align="center"  >
					<span  >单位编号</span><span  ></span>
				</p>
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   rowspan="3" >
				<p class="MsoNormal" align="center"  >
					<span  >单位名称</span><span  ></span>
				</p>
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   rowspan="3" >
				<p class="MsoNormal" align="center"  >
					<span  >核定方式</span><span  ></span>
				</p>
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   colspan="2" >
				<p class="MsoNormal" align="center"  >
					<span  >养老</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   colspan="2" >
				<p class="MsoNormal" align="center"  >
					<span  >失业</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >工伤</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >生育</span><span  ></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >单位缴费</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >个人缴费</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >单位缴费</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >个人缴费</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span style="font-family:Calibri;">&nbsp;</span><span  ></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >201808</span><span style="font-family:宋体;;"></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >201808</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >72</span><span style="font-family:宋体;;"></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >1862</span><span style="font-family:宋体;;"></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span  >662</span><span  ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >231</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>231</span><span ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >6468787894</span><span ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>广东创能科技股份有限公司</span><span ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >正常</span><span ></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >201808</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>201808</span><span ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>72</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>1862</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>231</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>231</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >6468787894</span><span ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>广东创能科技股份有限公司</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >正常</span><span ></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >201808</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>201808</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>72</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>1862</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>662</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span>231</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >231</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >6468787894</span><span ></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >广东创能科技股份有限公司</span><span></span>
				</p>
			</td>
			<td valign="middle"   >
				<p class="MsoNormal" align="center"  >
					<span >正常</span><span></span>
				</p>
			</td>
		</tr>
		<tr>
			<td valign="middle"   colspan="13" style="background:#F5F5F5;">
				<p class="MsoNormal" align="center"  >
					<span>26</span><span>22</span>
				</p>
			</td>
		</tr>
	</tbody>
</table>

<div class="ms-width">
<table border="1" cellspacing="0" style="width:100%;border:none;margin-top:1vw;">
	<tbody>
		<tr>
			<td width="109"  colspan="2" >
				<p  align="center"  >
					<span>一次性缴费类型</span><span></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span>缴费月数</span><span></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span>台账年月</span><span></span>
				</p>
			</td>
			<td width="109"  colspan="2" >
				<p  align="center"  >
					<span>险种类型</span><span></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span>缴费基数</span><span></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span >缴费总额</span><span></span>
				</p>
			</td>
			<td width="55"  >
				<p  align="center"  >
					<span >缴纳本金</span><span></span>
				</p>
			</td>
			<td width="55"  >
				<p  align="center"  >
					<span >缴纳利息</span><span></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span >单位编号</span><span></span>
				</p>
			</td>
			<td width="53"  >
				<p  align="center"  >
					<span >单位名称</span><span></span>
				</p>
			</td>
			<td width="52"  >
				<p  align="center"  >
					<span>核定方式</span><span></span>
				</p>
			</td>
		</tr>
		<tr>
			<td width="54"  >
				<p  align="center"  >
					<span>201808</span><span></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span>201808</span><span></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span >12</span><span ></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span>2018</span><span ></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span >256</span><span ></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span >22</span><span ></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span >32</span><span ></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span >31</span><span></span>
				</p>
			</td>
			<td width="55"  >
				<p  align="center"  >
					<span >35</span><span></span>
				</p>
			</td>
			<td width="55"  >
				<p  align="center"  >
					<span >23</span><span ></span>
				</p>
			</td>
			<td width="54"  >
				<p  align="center"  >
					<span>12</span><span ></span>
				</p>
			</td>
			<td width="53"  >
				<p  align="center">
					<span >52</span><span ></span>
				</p>
			</td>
			<td width="52"  >
				<p  align="center" >
					<span>52</span><span></span>
				</p>
			</td>
		</tr>
	</tbody>
</table>
</div>
  </div>

           <div class="ms-dont">
                    <p> 社会保险基金管理中心</p>
                    <p> 20XX年5月16日</p>
     </div>
            <div class="ms-donts">
                <p > 备注：</p>
                <p>1.医疗保险的参保情况不在本表反应。</p>
                <p>2.如有疑问...</p>
                <p>授权码：3245XX55</p>
                 </div>
            </div>
          </div>
        </div>
   
</template>

<script>

    export default {
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
<style lang="scss">
.content{
    padding:0
}
.el-col-3{width:110px;
margin-top:10px;
}

.el-form-item__label{
    text-align:right;
    font-size:24px;
   
}    

.form-item__label{
 width:100px;
}
.el-input__inner{
    width:290px;
}
</style>
<style lang="scss" scoped>
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
