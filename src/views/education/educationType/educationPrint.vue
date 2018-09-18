<template>
    <div class="article clearfix">   
        <div class="langwrap">
            <el-row>
                <el-col :span="12">请选择语种报告：<span class="lang">中文</span><span  class="lang">EN</span></el-col>
                <el-col :span="12" style="text-align:right;">更新日期：2018-12-22</el-col>
            </el-row>  
        </div>  
        <div class="printtable clearfix">
                 <div class="tablewrap clearfix">
                    <div style="width:97%;margin:1vw auto; font-size:14px;" class=" clearfix">
						<table width="100%" border="1" cellspacing="0" cellpadding="0">
                            <tr>
                                <td  width="50%">姓名：周伯通</td>
                                <td  width="50%">证件号码：#################################</td>
                            </tr>
                            <tr>
                                <td >性别：男</td>
                                <td>民族：汉族</td>
                            </tr>
                            <tr>
                                <td colspan="2">院校：北京理工大学</td>
                            </tr>
                            <tr>
                                <td>层次：本科</td>
                                <td>专业：机械制造及其自动化</td>
                            </tr>
                            <tr>
                                <td >形式：普通全日制</td>
                                <td>学制：4年</td>
                            </tr>
                            <tr>
                                <td>类型：普通高等教育</td>
                                <td>入学时间：2011-09-03</td>
                            </tr>
                            <tr>
                                <td >学号：2011092358</td>
                                <td>学籍状态：（毕业日期：2015-07-01）</td>
                            </tr>
                            <tr class="trbotton">
                                <td colspan="2">
                                <div class="flex tablebottom">
                                    <div style="">在线验证</div>
                                    <div>
                                        <div style="font-size:20px;font-weight:bold;">
                                            2826 5752 8186
                                        </div>
                                        <div>
                                            在线验证码
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <img :src="pic1" alt="">
                                        </div>
                                        <div>
                                        学信网小程序在线验证
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <img :src="pic2" alt="">
                                        </div>
                                        <div>
                                            学信网小程序在线验证 拷贝
                                        </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                        </table>
                    </div>




<div  style="font-size:14px;margin-top:3vw;margin-left:3vw;margin-bottom:20px;">
                <p style="margin-top:50px;text-align:left;">
                    注意事项：
                </p>
                <p style="margin-top:10px;text-align:left;">
                    1.XXXXXXXXXXXX
                </p>
                <p style="margin-top:10px;text-align:left;">
                    2.XXXXXXXXXXXXXXX
                </p>
                <p style="margin-top:10px;text-align:left;">
                    XXXXXXXXXXXXXXXXXXXXX
                </p>
</div>
            </div>













                     
                 </div>
        </div>
 

</template>

<script>

    export default {
        data(){
            return{
				marginleft:25,
                pic1:require('@/img/views/xiaochengxu.png'),
                pic2:require('@/img/views/erweima.png')
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


</style>
<style lang="scss" scoped>
 .langwrap{
     width:85%;
     margin:0 auto;
     padding-top: 51px;
    text-align: left;
    font-size:24px;
  
 }
 .lang{
        display:inline-block;
        width:110px;
        height:46px;
        line-height:46px;
        text-align:center;
        background:rgba(0,112,224,1);
        color:#fff;
        margin-right:10px;
       
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
    
    article{

         height:100%;
         font-size:16px;
         padding-top:38px;
         box-sizing: border-box;
         
        

    }
   
.tr{ width: 100px; height:100px;display:block;} 
td{ height:40px;
vertical-align: middle;
border:1px solid #E6E6E6;
text-align:center;
}
.tablebottom{
  height:80px;
  
  >div{
    width:25%;
    border-right:1px solid #E6E6E6;
    box-sizing:border-box;
    height:70%;
    vertical-align:middle;
    &:nth-of-type(1){
       padding:20px 0;
    }
    &:nth-of-type(2){
         padding-top:5px;
    }
    &:nth-of-type(4){
         border-right:none;
    }
  }
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
