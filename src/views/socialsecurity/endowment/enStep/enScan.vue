<template>
    <div class="article clearfix">   
        <article>  
        <p style="text-align:left;">请根据要求上传对应的扫描文件</p>
        <div class="scan">
            <div class="scan-left ">
                <p>身份证正面:</p>
                <img :src="idFont" alt="">
                <button>扫描</button>
            </div>
            <div class="scan-right">
                <p>身份证背面:</p>
                <img :src="idRear" alt="">
                <button>扫描</button>
            </div>
            <div></div>
        </div>
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                idFont: require('@/img/views/idFont.png'),
                idRear: require('@/img/views/idRear.png')
            }
        },
        computed:{
           
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.article{
   
    width:91%;
    margin:0 auto;
    padding-top: 51px;
    text-align: left;
    font-size:24px;
   
    .scan{
        margin-top:75px;
        width:100%;
        text-align:center;
        
        .scan-left, .scan-right{
            display:inline-block;
            padding-top:20px;
            margin:10px 70px 0 70px;
            
            border-radius:10px;
            width:400px;
            height:410px;
            background:#e7f1fb;
            p{
                
            }
            img{
                margin-top:33px;
                width:360px;
                height:215px;
            }
            button{
                margin-top:50px;
                cursor: pointer;
                outline:none;
                border: none;
                width: 155px;
                height: 56px;
                font-size:28px;
                color: #FFFFFF;
                background:linear-gradient(0deg,rgba(7,134,207,1),rgba(53,176,243,1));
                border-radius: 25px;
                align-self: center;
            }
        }
        .scan-left{
            
        }
        .scan-right{

        }
    }
}
</style>
