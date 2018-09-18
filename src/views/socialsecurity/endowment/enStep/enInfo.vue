<template>
    <div class="article clearfix">   
        <article>
            <p style="text-align:left;">请先刷身份证、填写电话号码，然后再进行下一步</p>
            <form>
            <div class="el-form-item">
                <label class="el-form-item__label form-item__label"><span >*</span>姓名</label>
                <div class="el-input">
                        <input type="text" class="el-input__inner">
                </div>
            </div>
            <div class="el-form-item">
                <label class="el-form-item__label form-item__label"><span >*</span>证件号码</label>
                <div class="el-input">
                        <input type="text" class="el-input__inner">
                </div>
            </div>
            <div class="el-form-item">
                <label class="el-form-item__label form-item__label"><span >*</span>住址</label>
                <div class="el-input">
                        <input type="text" class="el-input__inner">
                </div>
            </div>
            <div class="el-form-item">
                <label class="el-form-item__label form-item__label"><span >*</span>联系电话</label>
                <div class="el-input">
                        <input type="text" class="el-input__inner">
                </div>
            </div>
            </form>
            <div @click="sub()">提交</div>
        </article>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                ruleForm: '',
                rules: ''
            }
        },
        computed:{
           
        },
        methods:{
         sub(){
             this.$axios.get('https://www.easy-mock.com/mock/5b6eaead121e7e30aea261d2/smile/index')
				.then(function (response) {
					console.log(response);
				})
				.catch(function (response) {
					console.log(response);
				});

          }
        }
    }
</script>

<style lang="scss" scoped>

 

.article{
    width:90%;
   margin:0 auto;
    padding-top: 51px;
    text-align: left;
    font-size:24px;
    p{
        margin-bottom:98px;
    }
    .el-form-item{
        display:flex;
        align-items: center;
        width:60%;
        margin:38px auto 0;
        
        .form-item__label{
         width:150px;
         font-size:24px;
           span{
               color:red;
           }
          
        }
        .el-input{
           .el-input__inner{
               width:480px;
               font-size:24px;
           }
        }

    }
    
     
}


</style>
