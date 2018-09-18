<template>
    <div class="article clearfix">   
        <article>
          <h1>请选择要查询的税款项，点击下方的“打印”按钮</h1>
          <div class="flex range" >
            <div class="k-w"><h2>选择开具范围：</h2></div>
                <div class="gd-w"> 
                   <el-select v-model="value" placeholder="广州市">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </div>
                <div class="gd-w">
                    <el-select v-model="value" placeholder="区">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </div>
           </div>
        </article>
        
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
                <td>原凭证号</td>
                <td>税种 </td>
                <td>品目</td>
                <td>时间起始</td>
                <td>时间截止</td>
                <td>实缴（退）金额</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>3201608150004</td>
                <td>个人所得税 </td>
                <td>工资薪金</td>
                <td>
                2018-08</td>
                <td>
                2018-08</td>
                <td>326.76元</td>
            </tr>
            <tr>
                <td>3201608150004</td>
                <td>个人所得税 </td>
                <td>工资薪金</td>
                <td>
                2018-08</td>
                <td>
                2018-08</td>
                <td>326.76元</td>
            </tr>
            <tr>
                <td>3201608150004</td>
                <td>个人所得税 </td>
                <td>工资薪金</td>
                <td>
                2018-08</td>
                <td>
                2018-08</td>
                <td>326.76元</td>
            </tr>
            <tr>
                <td>3201608150004</td>
                <td>个人所得税 </td>
                <td>工资薪金</td>
                <td>
                2018-08</td>
                <td>
                2018-08</td>
                <td>326.76元</td>
            </tr>
            </tbody>
            </table>
         <div style="margin-top:10vh"  > 
              <button-sub btname="查询"></button-sub>
        </div>

    </div>
</template>

<script>
    import buttonSub from '@/components/base/buttonSub.vue'
    import alertPrint from '@/components/base/alertPrint'
    export default {
        components:{buttonSub,alertPrint},
        data() {
            return {
                printopen:0 ,//是否打印
                options: [{
                    value: '选项1',
                    label: '广州市'
                    }, {
                    value: '选项2',
                    label: '深圳市'
                    }],
                value: ''
            }
        },
        computed:{
           
        },
        methods:{
            prinits(){
              this.printopen=!this.printopen;
             
            }

        }
    }
</script>
<style>

.el-input__inner{
    width:192px;
    font-size:24px;
} @media screen and (max-width:1200px){
.el-select .el-input__inner{
    width: 15vh !important;
}

}
</style>

<style lang="scss" scoped>
 @media screen and (max-width:1200px){
     .article {
         width: 95%;
         margin: 0 auto;
         h1{
             text-align: left;
             font-size: 1.6vh;
             padding: 0;
             margin: 0;
             line-height: 5vh;
         }
     }
     .k-w{
         width: 80%;
         h2{
             font-size: 1.4vh;
             text-align: left;
             line-height: 3vh;
         }
     }
     .gd-w{
         width: 40%;
         float:left;
         margin-bottom: 1vh;
     }
    
         td{
             font-size: 1.2vh;
         }
     
 }
.article{
 
    text-align:center;
    vertical-align: middle;
    position: relative;

    article{
        width:85%;
        margin:0 auto;
        text-align: center;
        p{
            text-align:left; 
            margin-top:30px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;

        }
        .range{
            margin-top:2vw;
            font-size:24px;
            div{
                margin-right:10px;
            }

        }
       
         
        }
    }
    table{
        margin-top:40px;
        thead{
            background:#CEE5F9;
            font-weight:bold;
        }
        tr{
            height:68px;
           
        }
        tbody{
            tr{
            &:nth-child(even){
                background:rgba(234,243,251,1);
            }
            }
        }
    }
</style>
