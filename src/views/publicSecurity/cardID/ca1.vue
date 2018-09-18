<template>
    <div>
   

     <article>
            <div class="weather-warp"><h1>公民身份号码变更更正证明业务办理须知</h1></div>

            <div class="notice txt">
                <center><h4>公民身份号码变更更正证明业务办理须知</h4></center>
                <div class="noticew">
                    <p > 内容待定 </p> 
                  

                </div>

            </div>
            <!-- <button @click="cllaback">拒绝</button>
            <button @click="next">同意</button> -->
            <div @click="next"  style="margin-top:5%">
                <button-sub btname="同意"></button-sub>
            </div> 
        </article>
    </div>
</template>
<script>
import accredit from '../publicSecurityComponents/accredit'
import buttonSub from "@/components/base/buttonSub"
export default {
    components:{
        accredit,
        buttonSub
    },
    data() {
        return {}
    },
    methods:{
        next(){
            this.$router.push('/publicSecurity/ca2')
            this.$store.commit('changeTabIndex',{count: 1})


        }
    }
}
</script>
<style lang="scss" scoped>
 .weather-warp{
                    margin-top: 1vh;
                    margin-bottom: 1vh;}
    .weather-warp  h1{
                font-size: 1.6vh;
                text-align:left;
             }
 @media screen and (max-width:1200px){
            .txt{height: 850px !important;
            }
           .weather-warp{
               width: 80%;
               margin: 0 auto;
                    margin-top: 1vh;
                    margin-bottom: 1vh;}
    .weather-warp  h1{
                font-size: 1.6vh;
                text-align:left;
             }
            }

  
        .notice{
            width:1169px;
            height:420px;
            background:#eef9ff;
            border:1px solid #d4e7f9;
            margin:0 auto;
            padding:25px 55px;
            box-sizing: border-box;
           
            }
</style>

