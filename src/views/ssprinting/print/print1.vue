<template>
    <div>
      <div class="ssprint-b">
          <ul>
               <li>姓名：###</li>
                <li>性别：男</li>
                <li>医疗保险证号码：4505619670****4536</li>
                <li>参保单位：广东创能科技有限公司</li>
                <li>参保状态：正常</li>
          </ul>
      </div>
      <div class="prign-but">
          <button class="mar">社保清单打印</button>
          <button>医保信息查询打印</button>
    </div>    
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ssprint-b{
    width:558px;
    height:270px;
    background:rgba(231,241,251,1);
    border-radius:8px;
    margin-top: 89px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 52px;
    padding-top:40px;
    ul{
        margin: 0;
        padding: 0;
    }
     li{
         font-size: 24px;
         color: #333;
         line-height: 36px;
         text-align: left;
     }           
}
.prign-but{
    width: 100%;
    button{
        width:250px;
        height:80px;
        background:rgba(0,112,224,1);
        border-radius:6px;
        margin-top: 120px;
        color: #fff;
    }
     .mar{
         margin-right: 50px;
     }
}
</style>
