<template>
    <div class="footer">
        <div>
                <img :src="locate">
                <span>天河区棠下村社区服务中心</span>
                <img :src="call">
                <span>服务热线：020-36952542</span>

        </div>
        <div style="margin-right:20px;">
                <span>本机编号：G96423</span>
        </div>
    </div>
</template>

<script>
    export default {
       data(){
            return {
                logoimg:require('@/img/home/logo.png'),
                home:require('@/img/home/home.png'),
                exit:require('@/img/home/exit.png'),
                locate:require('@/img/home/locate.png'),
                call:require('@/img/home/call.png')

            }
       }
        
    }
</script>

<style scoped lang="scss">
.footer{
    height:100%;
    width:100%;
    box-sizing:border-box;
    color:rgba(255,255,255,.6);
    background:url('~@/img/home/footbg.png');
    background-size:cover;
    display:flex;
    justify-content:space-between;
    align-items: center;
    img{
        width:40px;
        height:40px;
        margin-left:40px;
    }
    span{
        &:nth-of-type(1){
            font-size:28px;
            margin-left:20px;
        }
        &:nth-of-type(2){
            font-size:24px;
            margin-left:20px;
        }
        &:nth-of-type(3){
            font-size:26px;  
        }
    }
}
   
</style>