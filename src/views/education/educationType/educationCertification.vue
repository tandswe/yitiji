<template>
    <div class="article clearfix">   
        <article>    
           <h1>学历认证绑定 :</h1>
           
            <el-row style="margin-top:2vw;margin-bottom:2vw">
                <el-col :span="12">姓名：周伯通</el-col>
                <el-col :span="12"> 证件号码：52222612345567890</el-col>
            </el-row>    
              
               
            
            <hr> 
            <h1>报告类型 :</h1>
            <el-row style="margin-top:2vw;margin-bottom:2vw">
                <el-col :span="12"><el-radio v-model="radio" label="1">备选项</el-radio></el-col>
                <el-col :span="12"> <el-radio v-model="radio" label="2">备选项</el-radio></el-col>
            </el-row> 
            <hr>    
            <div style="margin-top:2vw;margin-bottom:2vw">
                报告编号：<input type="text">
            </div>
            <div style="margin-top:2vw;margin-bottom:2vw">
                证书编号：<input type="text">
            </div>
           
           
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: '1'
            }
        },
        computed:{
           
        },
        methods:{

        }
    }
</script>
<style>
.el-radio__inner:after{
    content:""
}
.el-radio__label{
        font-size:24px;
}
</style>

<style lang="scss" scoped>

 

.article{  
    padding-top: 51px;
    text-align: left;
    font-size:24px;
    width:100%;
    article{
        width:90%;
        height:100%;
        margin:0 auto;
        input{
            width:525px;
            height:64px;
            background:rgba(246,246,246,1);
            border:1px solid rgba(221,221,221,1);
            font-size:24px;
        }
       
    }     
}


</style>
