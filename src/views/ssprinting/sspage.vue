<template>
	<div class="wrap">   
        <layoutHeart></layoutHeart>
        <div class="main">
            <section class="main-left"></section>
            <section class="main-center">
                
                <p>正在办理：民政业务</p>
              
                <div class="content">
                    <h1>请选择要办理的业务：</h1>
                     <div class="article clearfix">   
                         <div class="buttons">
                             <div style="width: 85%">
                                <router-link to="/ssprinting/Proofof" class="router-linkStyle"> <button>社会保险参保证明</button></router-link>   
                                <router-link to="/ssprinting/psetp" class="router-linkStyle"><button>社保清单打印</button></router-link>
                                <router-link to="/ssprinting/balance" class="router-linkStyle"><button>社保卡金融账户余额查询</button></router-link>
                                <router-link to="/ssprinting/basicquery" class="router-linkStyle"><button>社保个人基本资料查询</button></router-link>
                                <router-link to="/ssprinting/grant" class="router-linkStyle"><button>社保待遇发放信息查询</button></router-link>
                                <router-link to="/ssprinting/basicOldAge" class="router-linkStyle"><button>基本养老金领取资格认证（生存认证）</button></router-link>
                                <!-- <button>老年人社会保障（优待）卡续期</button>
                                <button>农村特困人员供养预约申请</button>
                                <button>老年人社会保障（优待）卡补办</button> -->
                             </div>

                         </div>
                     </div>
                </div>
            </section>
            
            <section class="main-right">
                <div class="buttons">
                        <router-link to="/"><button>返回首页</button></router-link>
                </div>
            </section>      
        </div>
        <layoutfoot></layoutfoot>

    </div>
</template>

<script>
import layoutHeart from "@/components/layoutHeart";
import layoutfoot from "@/components/layoutfoot";
export default {
  name: "entryDndexit",
  components: { layoutHeart, layoutfoot },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}
.main {
  box-sizing: border-box;
  height: 81.6%;
  display: flex;
  section {
    flex: 1;
    height: 100%;
  }
  .main-left {
    flex: 0 0 14%;
  }
  .main-center {
    height: 100%;

    p {
      color: #fff;
      height: 9%;
      font-size: 26px;
      font-family: MicrosoftYaHei-Bold;
      color: #fff;
      line-height: 82px;
      text-align: left;
    }
    .steps {
      height: 10%;
      //overflow: hidden;
    }
    .content {
      width: 100%;
      height: 91%;
      background: #fff;
      /*border-top-left-radius:10px;
          border-top-right-radius:10px;*/
      border-radius: 10px;
      box-sizing: border-box;
      overflow: auto;
    }
  }
  .main-right {
    flex: 0 0 14%;
    position: relative;
    .buttons {
      position: absolute;
      bottom: 0;
      width: 72%;

      button {
        cursor: pointer;
        outline: none;
        width: 100%;
        margin-top: 19px;
        height: 80px;
        color: #0573de;
        border: none;
        border-radius: 40px;
        text-align: center;
        background: #afd3f3;
        font-size: 32px;
        &.callback {
          background: #afd3f3;
        }
      }
    }
  }
}
.router-linkStyle{
  display: inline-block;
  width: 460px;
  height: 80px;
  margin-right: 88px;
  margin-bottom: 65px;
  &:nth-child(even){
          margin-right: 0;
      }
}
.article {
  text-align: left;
  font-size: 24px;
  width: 100%;
  .buttons {
      width: 90%;
      margin: 0 auto;
      display:flex;
      align-items: center;
      justify-content: center;
    button {
      width: 460px;
      height: 80px;
      border: 1px solid rgba(4, 118, 221, 1);
      border-radius: 6px;
      background: #fff;
      color: #0475DC;
      margin-right: 88px;
      margin-bottom: 65px;
      &:hover{
          background: #0575de;
          color: #fff;
      }
      &:nth-child(even){
          margin-right: 0;
      }
    }
  }
}
h1{
   font-size: 28px;
    color: #333;
    height: 20%;
    padding-left: 98px;
	padding-top: 48px;
    text-align: left;
}
</style>
