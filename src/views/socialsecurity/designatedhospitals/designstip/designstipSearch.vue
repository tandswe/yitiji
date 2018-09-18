<template>
    <div class="article clearfix">   
        <article :marginLeft="marginleft" :style="{ width, 'margin-left':'auto','margin-right':'auto'}">

			<el-form  ref="ruleForm" label-width="6vw">
			    <el-row>
					<el-col :span="8"  class="flex-end" style="padding-right:1.5vw;">
						<div style="font-size:24px;margin-right:5px">
                             个人编号
						</div>
						<div>
							<el-select v-model="value" placeholder="请选择">
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="flex-start" >
							<div style="font-size:24px;margin-right:5px">缴费开始时间</div>
							<div>
								<el-date-picker
									v-model="value1"
									type="date"
									placeholder="选择日期">
								</el-date-picker>
							</div>
				        </div> 
					</el-col>
					<el-col :span="8">
						<div class="flex-start" >
							<div style="font-size:24px;margin-right:5px">缴费结束时间</div>
							<div>
								<el-date-picker
									v-model="value1"
									type="date"
									placeholder="选择日期">
								</el-date-picker>
							</div>
				        </div> 
					</el-col>
                </el-row>
			     <div style="text-align:center;">
                    <button @click="succedScan" class="buttonStyle">查询</button>
                </div>
			</el-form> 

            
        </article>
        <div class="printtable clearfix">
                 <div class="tablewrap clearfix">
                    <div style="width:97%;margin:1vw auto; font-size:14px;" class=" clearfix">
						<table border="1" cellspacing="0" style="width:100%;">
						<tbody>
							<tr>
							<td>基本资料</td>
							<td colspan="10" style="text-align:left">个人电脑号：&nbsp;&nbsp;&nbsp;&nbsp;姓名：王小明&nbsp;&nbsp;&nbsp;性别：男&nbsp;&nbsp;证件号码：445322198801***19 参保状态：正常</td></tr>
							<tr>
							<td>&nbsp;</td>
							<td colspan="10" style="text-align:left">现在单位编号：&nbsp;&nbsp;现在单位名称：广东创能科技股份有限公司</td></tr>
							<tr>
							<td>&nbsp;</td>
							<td colspan="10">查询时间段：</td></tr>
							<tr>
							<td rowspan="6">职工社会 医疗保险 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
							<td rowspan="2">历史单位编号 &nbsp;</td>
							<td rowspan="2">开始缴费日期 &nbsp;</td>
							<td rowspan="2">终止缴费日期 &nbsp;</td>
							<td rowspan="2">累计月数 &nbsp;</td>
							<td rowspan="2">转移 &nbsp;</td>
							<td rowspan="2">补收 &nbsp;</td>
							<td colspan="3">医疗保险金额（元）</td>
							<td>缴费基数</td></tr>
							<tr>
							<td>单位缴费</td>
							<td>个人缴费</td>
							<td>政府资助</td>
							<td>&nbsp;</td></tr>
							<tr>
							<td>345546</td>
							<td>345546</td>
							<td>345546</td>
							<td>72</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>6352</td></tr>
							<tr>
							<td>345546</td>
							<td>345546</td>
							<td>345546</td>
							<td>72</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>6352</td></tr>
							<tr>
							<td>345546</td>
							<td>345546</td>
							<td>345546</td>
							<td>72</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>662</td>
							<td>72</td>
							<td>6352</td></tr>
							<tr>
							<td colspan="3">&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td></tr>
							<tr>
							<td rowspan="6">重大疾病 医疗补助 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
							<td rowspan="2">历史单位编号 &nbsp;</td>
							<td rowspan="2">开始缴费日期 &nbsp;</td>
							<td rowspan="2">终止缴费日期 &nbsp;</td>
							<td rowspan="2">累计月数 &nbsp;</td>
							<td rowspan="2">转移 &nbsp;</td>
							<td rowspan="2">补收 &nbsp;</td>
							<td colspan="3">医疗保险金额（元）</td>
							<td>缴费基数</td></tr>
							<tr>
							<td>单位缴费</td>
							<td>个人缴费</td>
							<td>政府资助</td>
							<td>&nbsp;</td></tr>
							<tr>
							<td>345546</td>
							<td>345546</td>
							<td>345546</td>
							<td>72</td>
							<td>662</td>
							<td>662</td>
							<td>72</td>
							<td>72</td>
							<td>72</td>
							<td>6352</td></tr>
							<tr>
							<td>345546</td>
							<td>345546</td>
							<td>345546</td>
							<td>72</td>
							<td>662</td>
							<td>662</td>
							<td>72</td>
							<td>72</td>
							<td>72</td>
							<td>6352</td></tr>
							<tr>
							<td>345546</td>
							<td>345546</td>
							<td>345546</td>
							<td>72</td>
							<td>662</td>
							<td>662</td>
							<td>72</td>
							<td>72</td>
							<td>72</td>
							<td>6352</td></tr>
							<tr>
							<td colspan="3">合计</td>
							<td>72</td>
							<td>72</td>
							<td>72</td>
							<td>72</td>
							<td>72</td>
							<td>72</td>
							<td>6352</td></tr>
						</tbody>
						</table>

                    </div>



<div style=" font-size:18px;margin-top:3vw;margin-right:3vw;">
                    <p style="text-align:right;margin-top:2vw;">
                        社会保险基金管理中心
                    </p>
                    <p style="text-align:right;margin-top:10px;margin-right:1vw;">
                        20XX年5月16日
                    </p>
</div>
<div  style="font-size:14px;margin-top:3vw;margin-left:3vw;margin-bottom:20px;">
                <p style="margin-top:50px;text-align:left;">
                    备注：
                </p>
                <p style="margin-top:10px;text-align:left;">
                    1.医疗保险的参保情况不在本表反应。
                </p>
                <p style="margin-top:10px;text-align:left;">
                    2.如有疑问...
                </p>
                <p style="margin-top:10px;text-align:left;">
                    授权码：3245XX55
                </p>
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
				marginleft:25,//主题内容margin-left;
				value,
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
.el-input__inner{
	width:290px;
	font-size:24px;
}

</style>
<style lang="scss" scoped>
.tr{ width: 100px; height:100px;display:block;} 

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
    
    article{

         height:100%;
         font-size:16px;
         padding-top:38px;
         box-sizing: border-box;
         
        

    }
   

td{ height:40px;
vertical-align: middle;
border:1px solid #E6E6E6;
text-align:center;
}

.date{
    padding-top:12px;
}
.buttonStyle{
    background:#008cff;
    margin-top:44px;
}
    
     
}


</style>
