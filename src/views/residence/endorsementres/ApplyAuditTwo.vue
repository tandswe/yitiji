<template>
    <div class="warp">   
        <div>
            <div class="essentialCenter">
                <h1>个人基本信息</h1>
                <p>姓名：苏东坡</p>
                <p>证件号码：440923199202156632</p>
            </div>
            <div class="warp-hr"></div> 
            <div class="essentialCenter">
                <h1>可申领居住证的地区</h1>
                <p>居住登记地区：广东省肇庆市</p>
            </div>
            <div class="warp-hr"></div> 
            <div class="btnCenter">
            <button @click="check">确认并校验申领资格</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed:{
           
        },
        methods:{
            check(){}
        }
    }
</script>

<style lang="scss" scoped>
.warp{
    height: 100%;
    width: 90%;
    margin: 47px auto 0;
    text-align: left;
    p{
        width: 50%;
        display: inline-block;
        // padding-bottom: 47px;
        font-size: 24px;
        color: #333;
    }
    h1{
        margin-bottom: 47px;
        font-size: 28px;
    }
.warp-hr{
        height: 1px;
        background-color: #ddd;
        width: 100%; 
        margin: 48px 0;
        }
        .btnCenter{
            text-align: center;
             button{
                width:280px;
                height:56px;
                background:rgba(0,112,224,1);
                border-radius:8px;
                color: #ffffff;
            }
        }
   
}
</style>
