<template>
    <div class="wrap">   
        <layoutHeart>Header</layoutHeart>
        <div class="main">
            <section class="main-left"></section>
            <section class="main-center">
                
                <p>正在办理：公安业务</p>

                <div class="content">
                    
                     <div class="article clearfix">   
                         
                        <article>
                             <p style="text-align:left;color:#000;">请选择办理选项</p>
                             <ul style="color:#fff;" class="flex educationList">                              
                                  <li><router-link to="/entyDndexitPage/entryindividual">办理往来港澳通行证个人游签注</router-link></li>
                                  <li><router-link to="/entyDndexitPage/entryDndexit">办理往来港澳通行证团队游签注</router-link></li>
                                  <li><router-link to="/macaoPermit/macaoPermitHome">港澳通行证剩余签注次数查询</router-link></li>
                                  <li><router-link to="/entyDndexitPage/TWIndividualLogin">办理往来台湾通行证个人游签注</router-link></li>
                                  <li><router-link to="/entyDndexitPage/TWDndexitLogin">办理往来台湾通行证团队游签注</router-link></li>
                                  <li><router-link to="/TWPermit/TWPermitHome">台湾通行证剩余签注次数查询</router-link></li>
                                  <li><router-link to="/jiaotongfa/driverInquireCommon/InquireLogin">驾驶人交通违法查询</router-link></li>
                                  <li><router-link to="/jiaotongfa/jiaotong/c1">驾驶人交通违法查询和处理</router-link></li>
                                  <li><router-link to="/jiaotongfa/carCheckCommon/carCheck">机动车交通违法查询和处理</router-link></li>
                                  <li><router-link to="/jiaotongfa/deductMarksCommon/marksLogin">驾驶证扣分查询</router-link></li>
                                  <li><router-link to="/residenceAudit">申报居住登记</router-link></li>
                                  <li><router-link to="/residenceApply">申领居住证</router-link></li>
                                  <li><router-link to="/endorsementres">签注居住证</router-link></li> 
                                  <li><router-link to="/residenceReplace">补领、换领居住证</router-link></li>
                                  <li><router-link to="/crimeTestify/crimeTStep0">无犯罪记录证明</router-link></li>
                                  <li><router-link to="/jiaotongfa/validtyCommon/validtyCheck">机动车驾驶证有效期满换证</router-link></li>
                                  <li><router-link to="/jiaotongfa/motorCommon/periodCheck">机动车驾驶证转入换证</router-link></li>
                                  <li><router-link to="/jiaotongfa/renewalAge">机动车驾驶证达到规定年龄换证</router-link></li>
                                  <li><router-link to="/jiaotongfa/renewalReduce">驾驶证自愿降低准驾车型换证</router-link></li>
                                  <li><router-link to="/jiaotongfa/driverReplaceCommon/replaceCheck">机动车驾驶证遗失补证</router-link></li>
                                  <li><router-link to="jiaotongfa/driverInspect">驾驶人审验（不含校车驾驶人）</router-link></li>
                                  <li><router-link to="/huosehold/householdWindow">户籍证明</router-link></li>
                                  <li><router-link to="/publicSecurity/AccountCancellation">户口注销证明</router-link></li>
                                  <li><router-link to="/publicSecurity/cardid">公民身份号码变更更正证明</router-link></li>
                                  <li><router-link to="/publicSecurity/certificateid">户口变更证明</router-link></li>
                                  <li><router-link to="/publicSecurity/relationship">亲属关系证明</router-link></li>
                                 
                             </ul>                        
                        </article>
                     </div>
                </div>
            </section>
            
            <section class="main-right">
                <div class="buttons">
                    <router-link to="/">
                  <button type="button" class="callback" @click="back">返回首页</button>
                    </router-link>
                 </div>
            </section>      
        </div>
        <layoutfoot></layoutfoot>
    </div>
</template>

<script>
    import layoutHeart from '@/components/layoutHeart'
    import layoutfoot from "@/components/layoutfoot"
    export default {
        components:{layoutHeart,layoutfoot},
        mounted(){
            
            
        },
        //  watch: {
        // '$route'(to, from) {
        //     this.getStatus(this.$route.path)
        // }},
        mothods:{
          back(){
              this.$router.push({path:'/'})
          },
        },
      
    }
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
.main{
  
    box-sizing: border-box;
    height:81.6%;
    display:flex;
    section{
        flex:1;
        height: 100%;
    }
    .main-left{
        flex: 0 0 14%;   
    }
    .main-center{
        height:100%;
      
        p{
            color:#fff;
            height:9%;
            font-size:26px;
            font-family:MicrosoftYaHei-Bold;
            color:#fff;
            line-height:82px;
            text-align: left;
        }
        .steps{
          height:10%;
          //overflow: hidden;
        }
        .content{
          width: 100%;
          height:91%;
          background: #fff;
          /*border-top-left-radius:10px;
          border-top-right-radius:10px;*/
          border-radius:10px;
          box-sizing: border-box;
          overflow: auto;
          .educationList{
              margin:0 auto;
          }
        }
    }
    .main-right{
        flex: 0 0 14%;
        position: relative;
        .buttons{
          position:absolute;
          bottom:0;
          width:72%;
          margin-left:26px;
            button{
              cursor: pointer;
              outline: none;
              width:100%;
              margin-top:19px;
              height:80px;
              color: #0573DE;
              border: none;
              border-radius:40px;
              text-align: center;
              background:#fff;
              font-size:32px;
                  &.callback{
                    background:#afd3f3;
                  }
            }
        }

    }
}


.article{
   
    
    padding-top: 51px;
    text-align: left;
    font-size:24px;
    width:100%;
    
    article{
        width:90%;
        margin:0 auto;
        p{
        color:#000;
        }
        ul{
         
              li{
                margin-right:40px;
                width:360px;
                height:76px;
                line-height: 76px;
                margin-bottom:30px;
                background:#fff;
                border:1px solid  rgba(0,112,224,1);
                border-radius:6px;
                text-align: center;
                cursor: pointer;
                color:rgba(0,112,224,1);
                :hover{
                    background: rgba(0,112,224,1);
                    color: #fff;
                    display: block;
                    height:76px;
                }
                
            }
          
           
        }
        }
}
</style>
