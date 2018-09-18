<template>
    <div>
      <div class="qu-title">住房公积金缴存信息</div>
      <div class="qu-list-w">
        <div class="qu-list">
            <ul>
                <li>编号：aa</li>
                <li>姓名：某某某</li>
                <li>公积金账号：91440101773348842B</li>
                <li>单位：广东创能科技有限公司</li>
                <li>单位账号：8888888</li>
                <li>单位月缴存额：1999.00</li>
                <li>个人月缴存额：600.00</li>
                <li>合计月缴存额：2599.00</li>
                <li>当前缴存年月：2018/08</li>
                <li>账户余额：888.00</li>
                <li>累计提取额：6000.00</li>
                <li>备注</li>
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

.qu-title{
    font-size: 28px;
    color: #333;
    height: 30px;
    margin: 50px 0;
}
.qu-list-w{
    width: 80%;
    margin: 0 auto;
}
.qu-list{
    width: 100%;
    li{
        height:60px;
        line-height: 60px;
        float: left;
        font-size: 16px;
        color: #333;
        width: 48%;
        padding-left:1%;
        text-align: left;
        border: 1px solid #E5E5E5;
        border-top: none;
        border-right: none;
    }
}
.qu-list li:nth-child(2){
    border-top: 1px solid #E5E5E5;
}
.qu-list li:nth-child(2n){
    border-right: 1px solid #E5E5E5;
}
.qu-list li:nth-child(1){
    border-top: 1px solid #E5E5E5;
}
</style>

