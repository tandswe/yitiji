<template>
    <div class="article clearfix">   
        <article>
          <p style="text-align:left;">请选择要查询的税款项，点击下方的“打印”按钮</p>
        </article>
   
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
                <td>序号</td>
                <td>纳税项目</td>
                <td>税款所属期</td>
                <td>实缴税额</td>
                <td>征收机关</td>
                <td>扣缴义务人</td>
                <td>缴税日期</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>工资、薪金</td>
                <td>2018-08</td>
                <td>326.76元</td>
                <td>
                广州市地方税务局天河区分局</td>
                <td>
                苏东坡</td>
                <td>
                2018-08-12</td>
            </tr>
            <tr>
                <td>2</td>
                <td>工资、薪金</td>
                <td>2018-08</td>
                <td>326.76元</td>
                <td>
                广州市地方税务局天河区分局</td>
                <td>
                苏东坡</td>
                <td>
                2018-08-12</td>
            </tr>
            <tr>
                <td>3</td>
                <td>工资、薪金</td>
                <td>2018-08</td>
                <td>326.76元</td>
                <td>
                广州市地方税务局天河区分局</td>
                <td>
                苏东坡</td>
                <td>
                2018-08-12</td>
            </tr>
            <tr>
                <td>4</td>
                <td>工资、薪金</td>
                <td>2018-08</td>
                <td>326.76元</td>
                <td>
                广州市地方税务局天河区分局</td>
                <td>
                苏东坡</td>
                <td>
                2018-08-12</td>
            </tr>
            </tbody>
        </table>
         <div @click="prinits()"> 
              <button-sub style="margin-top:10vh"  btname="打印"></button-sub>
        </div>
        <div  @click="prinits()">
              <alert-print v-if="printopen"></alert-print>
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

<style lang="scss" scoped>
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
