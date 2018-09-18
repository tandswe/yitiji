<template>
    <div class="warp-details">   
        <h1>请选择签注类型</h1>
        <div class="button-group">
            <p>香港、澳门签证</p>
            <p>台湾签证</p>

        </div>
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.warp-details{
    height: 100%;
    h1{
       font-size:28px;
       color: #333;
        height: 20%;
        display: flex;
        align-items: center;
        padding-left: 98px;
    }
    .button-group{
        p{
           color:  #FFFFFF;
           display: block;
           width:460px;
           height:80px;
           text-align: center;
           background: #0070E0;
           margin: 0 auto 30px;
           line-height: 80px;
           border-radius: 6px;
           font-size: 28px;
           color: #fff;
           span {
               font-size:18px;
           }
           &:last-child{
               margin-bottom: 0;
           }
        }
    }
}
</style>