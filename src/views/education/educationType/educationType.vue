<template>
    <div class="article clearfix">   
        <article>          
            <p style="text-align:left;color:#000;">请选择您要打印的类型</p>
            <ul style="color:#fff;" class="flex educationList">
                <router-link to="/education/scoreInquiry"><li>高考成绩查询</li></router-link>
                <li>学历认证打印</li>
               
            </ul> 
        </article>
    </div>
</template>

<script>
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

        }
    }
</script>

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
        ul{
            width:460px;
            margin:0 auto;
            margin-top:150px;
           
              li{
                margin-right:40px;
                width:360px;
                height:76px;
                line-height: 76px;
                margin-bottom:30px;
                background:rgba(0,112,224,1);
                border:1px solid  rgba(0,112,224,1);
                border-radius:6px;
                text-align: center;
                cursor: pointer;
                color:#fff;;
               
                   
                }
        }
     
    }     
}


</style>
