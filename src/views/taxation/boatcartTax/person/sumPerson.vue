<template>
    <div class="wrap"> 
        <section v-if="pages===1">
            <article class="info">
            <div>
                缴款人姓名：覃英峻
            </div>
            <div>
                身份证号码：450981########471X
            </div>
            </article>  
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <thead>
                <tr>
                    <td>序号</td>
                    <td>缴款年份</td>
                    <td>征收项目</td>
                    <td>征收品目</td>
                    <td>应纳税额（元）</td>
                    <td>应纳总额（元）</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2018</td>
                    <td>车船税</td>
                    <td>XXX</td>
                    <td>
                    5000.00元</td>
                    <td>
                    5000.00元</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2017</td>
                    <td>车船税</td>
                    <td>XXX</td>
                    <td>
                    5000.00元</td>
                    <td>
                    5000.00元</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>2016</td>
                    <td>车船税</td>
                    <td>XXX</td>
                    <td>
                    5000.00元</td>
                    <td>
                    5000.00元</td>
                </tr>
                </tbody>
            </table>
            <div @click="nextPage"> 
                <button-sub style="margin-top:10vh"  btname="确认"></button-sub>
            </div>
        </section>
        <section class="card" v-else-if="pages===2">
             <p style="text-align:left;color:#000;">请插入银联卡<span style="color:#0574DE"> 120</span> s</p>
             <img :src="pic1" >
             <div style="margin:20px auto 0;width:200px;height:30px;line-height:30px;background:#ccc;" @click="nextPage">验证成功 next</div>
        </section>
        <section class="password" v-else-if="pages===3">
              <p style="text-align:left;color:#000;">请输入银联卡密码<span style="color:#0574DE"> 60</span> s</p>
              <div style="display:flex;align-items:center;justify-content:center;">
                  <div>
                     <el-form :inline="true" >
                         <el-form-item label="请输入银行卡密码">
                            <el-input type="password"></el-input>
                        </el-form-item>
                     </el-form>
                  </div>
              </div>
              <p @click="nextPage"> 
                <button-sub style="margin-top:5vh"  btname="确认"></button-sub>
              </p>
        </section>
        <section class="sucess" v-else-if="pages===4">
            <p style="text-align:left;color:#000;">付款结果<span style="color:#0574DE">10</span> s</p>         
            <div class="finish ">
              <div class="wait">
                   <div class="wfinish">
                       付款成功</div>
                   <div class="wwait">
                       请取走您的卡片</div>
              </div>
            </div>
            <p @click="prinits()"> 
                <button-sub style="margin-top:7vh"  btname="打印凭证"></button-sub>
            </p>
            <div  @click="prinits()">
              <alert-print v-if="printopen"></alert-print>
            </div>
        </section>
        
        
    </div>
</template>

<script>
    import buttonSub from '@/components/base/buttonSub.vue'
    import alertPrint from '@/components/base/alertPrint'
    export default {
        components:{buttonSub,alertPrint},
        data() {
            return{
               pic1:require('@/img/views/fingerprint.png'),
               pages:1,
               printopen:0 ,//是否打印
            }
        },
        computed:{
           
        },
        methods:{
            prinits(){
              this.printopen=!this.printopen;             
            },
            nextPage(){
                this.pages++; 
                console.log(this.pages)
            }
        }
    }
</script>
<style>
.password .el-input{
   background:#fff !important;
}
</style>

<style lang="scss" scoped>
.wrap{
    width:100%;
    height:100%;
    text-align:center;
}
.article{
 
    text-align:center;
    vertical-align: middle;
    position: relative;

    .info{
        width:85%;
        margin:0 auto;
        display:flex;
        margin-top:30px;
        div{
            font-size:32px;
            width:50%;
            text-align:left;
            &:nth-of-type(2){
                text-align:right;
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
    .card{
        padding:2vh 6vw 0;
        box-sizing:border-box;
        p{
            font-size:32px;
        }
        img{
            margin-top:90px;
            width:560px;
            height:420px;
        }
    }
    .password{
        padding:2vh 6vw 0;
        box-sizing:border-box;
        p{
            font-size:32px;
        }
        >div{
            width:720px;
            height:360px;
            background:rgba(246,246,246,1);
            border:2px solid rgba(221,221,221,1);
            border-radius:20px;
            margin:107px auto 0;
        }
    }

    .sucess{
        padding:2vh 6vw 0;
        box-sizing:border-box;
        p{
            font-size:32px;
        }
         .finish{
            margin:80px auto 0;
            width:720px;
            height:360px;
            background:rgba(246,246,246,1);
            border-radius:20px;
            border:1px solid #ddd;
            .wait{
                margin:138px auto;
                width:275px;
                height:100px;
                background:url('~@/img/views/finish@2x.png') no-repeat;
                background-size: 80px 80px;
                .wfinish{
                    margin-left:100px;
                    width:180px;
                    height:32px;
                    font-size:32px;
                    font-family:MicrosoftYaHei-Bold;
                    color:rgba(51,51,51,1);
                    line-height:36px;
                    font-weight: 600;
                    text-align:left;
                }
                .wwait{
                    margin-top:15px;
                    margin-left:100px;
                    width:310px;
                    height:28px;
                    font-size:28px;
                    color:rgba(51,51,51,1);
                    line-height:36px;
                    text-align:left;
                }
            }
        }

    }
</style>
