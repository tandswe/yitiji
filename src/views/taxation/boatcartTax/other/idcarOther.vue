<template>
    <div>   
            <p style="text-align:left;margin-bottom:8vh;">请输入帮缴人的身份证号码:</p> 
            <div class="idcard">
                <el-form ref="form" :model="form" label-width="10VW">
                    <el-form-item label="身份证号：">
                        <el-input placeholder="52222612345567890"></el-input>
                    </el-form-item>
                </el-form>
            </div> 
             <div > 
                <button-sub style="margin-top:5vh"  btname="确认" ></button-sub>
             </div>
         
            
    </div>
</template>

<script>
    import buttonSub from '@/components/base/buttonSub.vue'
    
    export default {
        components:{
           buttonSub
         
        },
        data() {
            return {
                ruleForm: '',
                rules: '',
                id:require('@/img/views/idcard03.png'),
                isDialogShow:false
            }
        },
        computed:{          
        },
        methods:{
          
        }
    }
</script>
<style>
.el-input__inner{
    font-size:26px;
}
</style>
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
 .idcard{
            display:flex;
            justify-content:center;
            margin-top:200px;
         }
.dialog{
    text-align:left;
    font-size:24px;
    
    .name{
      margin:20px;
    }
    .id{
     margin:20px;
    }
    .btn{
        width:100%;
        text-align:right;
        button{
            width:180px;
            height:56px;
            border-radius:5px;
            margin-top:30px;
            margin-right:20px;
            &:nth-of-type(1){
                background:rgba(238,238,238,1);
                border:1px solid rgba(204,204,204,1);
            }
            &:nth-of-type(2){
                background:rgba(0,112,224,1);
                border:1px solid rgba(204,204,204,1);
                color:#fff;
                
            }
        }
    }
}
</style>
