<template>
    <div class="article clearfix">   
        <article>
            <p style="text-align:left;">请仔细阅读业务办理须知</p>
            <section class="notice">
                <center><h4>居民身份证业务办理须知</h4></center>
                <div class="noticew">
                    <p > 办理条件:公民(含回国定居的华侨，迁入内地定居的港澳台同胞，以及在中华人民共和国境内定居并被批准加入或者恢复中华人民共和国国籍的外国人、无国籍人)申领居民身份证，须到公安派出所居民身份证人像信息采集点采集合格的人像信息后，由本人携带户口簿向户籍所在地派出所或户政办证中心申领居民身份证。 </p> 
                    <p > 未满十六周岁的公民自愿申领居民身份证的，须在监护带领下到户口所在地公安派出所办理。 </p> 
                    <h2 > 申报材料: </h2> 
                    <h3 > 1、公民申领居民身份证 </h3> 
                    <p > 公民(含回国定居的华侨，迁入内地定居的港澳台同胞，以及在中华人民共和国境内定居并被批准加入或者恢复中华人民共和国国籍的外国人、无国籍人)申领居民身份证，须到公安派出所居民身份证人像信息采集点采集合格的人像信息后，由本人携带户口簿向户籍所在地派出所或户政办证中心申领居民身份证。 </p> 
                    <p > 未满十六周岁的公民自愿申领居民身份证的，须在监护带领下到户口所在地公安派出所办理。 </p> 
                    <h3 > 2、公民换领居民身份证 </h3> 
                    <p > 公民常住户口迁出本市市辖区和本县行政区域需要办理居民身份证的，在迁入地办理户口登记落户手续的同时，申请换领居民身份证;公民因居民身份证有效期满、登记项目错误、姓名变更或者证件严重损坏不能辨认的，应提供原居民身份证、户口簿，向常住户口所在地的户口登记机关申报换领新证。 </p> 
                    <h3 > 3、公民补领居民身份证 </h3> 
                    <p > 公民丢失居民身份证的，持居民户口簿向户籍所在地公安派出所或户政中心申请补领居民身份证。 </p> 
                    <h3 > 4、公民申领临时身份证 </h3> 
                    <p > 居住在中华人民共和国境内的中国公民，在申请领取、换领、补领居民身份证期间，急需使用居民身份证的，持居民户口簿向户籍所在地公安派出所或户政中心申请领取临时居民身份证。 </p> 
                    <h3 > 5、公民申领加急制作居民身份证 </h3> 
                    <p > 公民确因办理公证、升学、就业、外出等权益事务，急需使用居民身份证的，可申请办理加急居民身份证。公民本人需要且自愿委托邮政速递部门代领投递证件的(邮政速递费用自付)，可到户籍所在地公安派出所或户政中心申请办理二代证加急业务，办理手续同公民办理申领、补领、换领居民身份证相同。 </p> 
                    <p > 办事流程:第二代居民身份证受理制证工作流程(试行) </p> 
                    <p > 数量限制:无限制 </p> 
                    <p > 办理期限:公民申请领取、换领、补领第二代居民身份证，自公民提交《居民身份证申领登记表》之日起，一般地区的，在受理后三十个工作日内发放居民身份证;边远山区、交通不便的地区，在受理后四十五个工作日内发放居民身份证。 </p> 
                    <p > 收费标准及依据:根据国家发展改革委、财政部《关于居民身份证收费标准及有关问题的通知》(发改价格〔2003〕2322号)精神，第二代居民身份证证件工本费每证20元，对丢失补领或损坏换领的每证收取费用40元;临时居民身份证工本费为每证10元。 </p> 

                </div>

            </section>
            <div style="width:100%;text-align:center;margin-top:10px;">
                <router-link to="/idcardvalidityCommon/datacollection2">数据采集：下一步</router-link>
            </div>
           
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
   
    
    padding-top:20px;
    text-align: left;
    font-size:24px;
    width:100%;
    article{
        width:1169px;
        margin:0 auto;
        p{
            margin-bottom:20px;
        }
        .notice{
            width:1169px;
            height:571px;
            background:#eef9ff;
            border:1px solid #d4e7f9;
            margin:0 auto;
            padding:25px 55px;
            box-sizing: border-box;
            overflow-y:auto;
            h3{
                width:263px;
                height:25px;
                font-size:24px;
                font-family:MicrosoftYaHei;
                color:rgba(51,51,51,1);
                line-height:36px;
            }
            .noticew{
                margin-top:20px;
                // font-size:20px;
                
                h2{
                    font-size: 24px;
                    color: #333;
                    line-height: 40px;
                     margin-left: 30px;
                }
                h3{
                    font-size: 20px;
                    color: #333;
                    line-height: 40px;
                    width: 100%;
                    height: 40px;
                    margin-left: 40px;
                }
                p{
                      margin: 0; padding: 0; 
                      line-height:24px;
                      font-size: 16px;
                      color: #333;
                }
            }
        }
    }
    

    
     
}


</style>
