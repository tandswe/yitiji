<template>
    <div>   
            <p style="text-align:left;margin-bottom:8vh;">请将您的第二代身份证放入感应区</p> 
            <div class="idcard">
                <img :src="id">
            </div>        
            
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: '',
                rules: '',
                id:require('@/img/views/idcard03.png'),
            }
        },
        computed:{          
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

 p{
            text-align:left; 
            margin-top:30px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;

        }

     img{
        width:448px;
        height:269px;
    }
 .idcard{
            margin:97px auto 0;
            width:625px;
            height:370px;
            background:#e7f1fb;
            display:flex;
            justify-content:center;
            align-items:center;

         }
</style>
