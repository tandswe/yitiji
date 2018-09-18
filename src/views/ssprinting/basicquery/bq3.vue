<template>
    <div>
    <div class="qu-zu">
     <div class="qu-title">个人基本信息</div>
    <div class="qu-list">
        <ul>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
        </ul>
    </div>
    <div class="qu-by">备注:工商登记代理服务;贸易咨询服务;企业管理咨询服务;企业财务咨询服务;市场调研服务;场地租赁（不含仓储）;工商咨询服务;投资咨询服务;房屋
租赁;会计师事务所业务;代理记账服务;
    </div>
    <div class="qu-title qu-bi">参保情况</div>
    <div class="qu-list">
        <ul>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>
            <li>dd</li>       
        </ul>
    </div>
   <div class="qu-title qu-bia">参保情况</div>
   <div class="qu-bib">当前缴费情况：已缴费</div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.qu-zu{
 width: 80%;
 margin: 55px;
 margin-left: auto;
 margin-right: auto;
}
.qu-title{
    height: 50px;
    background: #F5F5F5;
    border: 1px solid #E5E5E5;
    font-size: 24px;
    text-align: left;
    padding-left:2%;
    color: #333;
    line-height: 50px;
    border-bottom: none;
}
.qu-list{
    width: 100%;
    li{
        font-size: 16px;
        text-align: left;
        color: #333;
        width: 48.8%;
        float: left;
        padding-left:1%;
        border-left: 1px solid #E5E5E5;
        border-right: 1px solid #E5E5E5;
        height: 40px;
        line-height: 40px;
        border-top:1px solid #E5E5E5;
    }
}
.qu-list li:nth-child(2n)
{
    border-left: none;
}
.qu-by{
    height:58px;
    padding-top:10px;
    padding-left:1%;
    border: 1px solid #E5E5E5;
    font-size: 16px;
    color: #333;
    clear: both;
    line-height: 24px;
    text-align: left;
}
.qu-bi{
    border-top:none;
}
.qu-bia{
     border: 1px solid #E5E5E5;
     clear: both;
}
.qu-bib{
    height: 40px;
    line-height: 40px;
     border: 1px solid #E5E5E5;
     border-top:none;
     clear: both;
     text-align: left;
     padding-left:1%;
}

</style>
