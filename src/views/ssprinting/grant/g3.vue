<template>
    <div>
      <div class="tiele-ka"><h1>近半年养老待遇发放和补发情况查询</h1></div>
      
     <div class="tiele-tab">参保人： 苏东坡（个人编号：6484684）目前正在我中心参保 性别：男，其身份证号为：34134134XXXXX2312>所属单位为：
         广东创能科技股份有限公司。养老待遇发放明细情况如下：</div>
<div class="t-tie">
    <div class="tiele-list">
        <ul>
         <li>台账年月</li>
         <li>发放年月</li>
         <li>发放类型</li>
         <li>参保状态</li>
         <li>合计金额</li>
         <li>备注</li>
        </ul>
     </div>

     <div class="tiele-list ti-top">
        <ul>
         <li>20180101</li>
         <li>20180102</li>
         <li>类型</li>
         <li>1234.33</li>
         <li>33333</li>
         <li> sadfa</li>
        </ul>
     </div>
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>


.tiele-ka{
    height: 90px;

   H1{
       color:#313131;
       font-size: 32px;
       line-height: 90px;
   }
}
.tiele-tab{
    width: 80%;
    height: 50px;
    clear: both;
    font-size: 16px;
    margin: 0 auto;
    text-align: left;
    line-height: 30px;
}
.t-tie{
    width: 80%;
    margin-top:30px;
    margin-left: auto;
    margin-right: auto;
 
}
.tiele-list{
       width: 96%;
       border: 1px solid #ccc;
       height: 40px;
    ul{
        margin: 0;
        padding: 0;}
        li{
            float: left;
            color: #313131;
            font-size: 16px;
            width: 16%;
            border-right: 1px solid #ccc;
            line-height: 40px;
        }
    }
.tiele-list li:nth-child(6){
     border-right: none;
}
.ti-top{
    border-top:none;
}
</style>
