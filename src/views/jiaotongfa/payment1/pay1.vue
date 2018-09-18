<template>
    <div class="pay-bz">
        <h1>业务回执</h1>
        

        <table  border="1" cellspacing="0" cellpadding="0" class=" tables" style="margin:0 auto">
  <tr>
    <td colspan="3" style="text-align:center">驾驶人交通违法处理</td>
  </tr>
  <tr>
    <td style="width:30%">处理日期：</td>
    <td style="width:30%">业务编号：</td>
    <td>应缴费用：￥{{data.fkje}}</td>
  </tr>
  <tr>
    <td colspan="3"  style="text-align:center">违法信息</td>
  </tr>
  <tr>
    <td>违法时间：</td>
    <td>违法路段：</td>
    <td>违法行为描述：</td>
  </tr>
  <tr>
    <td>违法处罚：罚款分</td>
    <td>扣分驾驶证号：</td>
    <td>档案编号：</td>
  </tr>
  <tr>
    <td colspan="3"  style="text-align:center;">XXXX</td>
  </tr>
</table>

   
 
    <!-- <div class="iphone-vi">
      <span>手机号码:</span><input tyle="text" value="188 8888 8888" readonly>
        <div class="ip-r" @click="open3"><i class="el-icon-edit"></i> </div>
    
    </div> -->

    </div>
</template>

<script>
export default {
 props:["data"],
 methods: {
      open3() {
        this.$prompt('', '修改手机号码', {
          confirmButtonText: '确定',
        //   cancelButtonText: '取消',
          inputPattern: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
         
        })
      }
    }
  }

</script>
<style lang="scss" scoped>

.el-input__inner{
    width:270px;
}
.el-input.is-disabled .el-input__inner{
    font-size: 24px;
}
</style>
<style lang="scss" scoped>
.pay-bz{
    width: 100%;
    h1{
     text-align: center;
     line-height: 150px;
     color: #333;
     font-size: 32px;
    }
}
.pay-cl{
    border: 1px solid #E6E6E6;
    text-align: center;
    font-size: 24px;
    color: #333;
    width: 80%;
    height: 60px;
    line-height: 60px;
    margin-left: auto;
    margin-right: auto;
}
.pay-int{
    width: 80%;
    height: 60px;
    line-height: 60px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #E6E6E6;
    border-top:none;
    border-bottom: none; 
    ul {
        margin: 0;
        padding: 0;
    }
      li{
        font-size: 22px;
        color: #333;
        float: left;
        text-align: left;
        width: 32%;
        padding-left:1%;
        border-right: 1px solid #E6E6E6;
         &:nth-child(3)
         {
          border-right:none; 
          }
      }
}
.inta{
    border: 1px solid #E6E6E6 !important;
}
.iphone-vi{
    width:30%;
    margin-top:40px;
    position: relative;
    margin-left: 130px;
    span{
        font-size: 24px;
        color: #333;
        margin-right: 10px;
        float: left;
        line-height: 40px;
    }
    input{
        font-size: 24px;
        border: 1px solid #ccc;
        background: #f5f5f5;
        height: 40px;
        line-height: 40px;
        float: left;
        border-radius: 3px;
        width: 250px;
    } 
    .ip-r{
        float:right;
        width:10%;
        font-size: 32px !important;
        color:#0070E0;
        z-index: 1;
        position: absolute;
        top:8px;
        right: -20px;
    }
}
 .tables{
    border:#ccc;
    width:95%;
    text-align:left;
    font-size:20px;
    @media screen and (max-width:1200px) {
        font-size:2vw;
    }
    tr{
        td{
            height: 60px;
            padding:5px;
            
           
        }
    }
}
</style>
