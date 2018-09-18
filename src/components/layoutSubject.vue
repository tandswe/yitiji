<template>
   
<div class="main">
         <section class="main-left"></section>
         <section class="main-center">  
            <p>正在办理：{{title}}</p>
            <steps class="steps" v-if="stepData.length>0"> 
                <step  v-for="(item,index) in stepData" :title="item" :key="index" :keys="index" :active="$store.state.home.headTabIndex"></step>
            </steps> 
            <div class="content" :style="{minHeight:stepData.length>0?'83%':'93%', borderRadius:stepData.length>0?'':'8px'}">
                <router-view ref="child"></router-view>
            </div>
         </section>
         
         <section class="main-right">
            <div class="buttons">
               <!-- 按需加载按钮 -->
               <div v-for="(item, index) in btns" :key="index" style="display:inline-block;"> 
                     <slot name="buttons" :$index="index" v-if="item.step[$store.state.home.headTabIndex]"></slot>
               </div>
               <!-- <button type="button" class="callback" @click="back">返回</button> -->
               <button type="button" class="callback" @click="backhome">首页</button>
               <button type="button" v-if="$store.state.home.headTabIndex===stepDatas.length-1?0:1,btnshow" @click="next()" class="next" >下一步</button>  
               <!-- <button type="button" v-if="$store.state.home.headTabIndex===0?0:1" @click="prev()" class="prev">上一步</button> -->
               <!-- <button type="button" @click="prev()" >返回</button> -->
               <!-- <div v-if="isShowBtn"> -->
                <span v-if="0">
                <button type="button" v-if="isShowSub && $store.state.home.headTabIndex===stepDatas.length-1?1:0" @click="submit()" class="next">提交</button>
               	<button type="button" v-if="$store.state.home.headTabIndex===0?0:1" @click="prev()" class="prev">上一步</button>
                <button type="button" v-if="$store.state.home.headTabIndex===stepDatas.length-1?0:1,btnshow" @click="next()" class="next" >下一步</button>  
                <button type="button" v-if="isShowSub && $store.state.home.headTabIndex===stepDatas.length-1?1:0" @click="next()" class="next">提交</button>  
               </span>  
            </div>
        </section>      
</div>

</template>
<script>
import step from "@/components/Step";
import steps from "@/components/Steps";

export default {
  components: { step, steps },
  props: {
    btns:Array,//传递需要加载的按钮数据
    title: String,
    stepDatas: Array,
    paths:Array,
    pathName:String,
    isShowBtn:{
    	type: Boolean,
      default:true
    },
    isShowSub:{
        type: Boolean,
      	default:false
    },
    btnshow:{
      type: Boolean,
      	default:true
    }
  },
  data() {
    return {
      stepData: this.stepDatas,
//    $store.headTabIndex: 0,
      showBtn:0,//是否需要一个打印按钮
      print:print
    };
  },
  created(){
     this.pathFind() 
  },
  watch:{
     "$store.state.home.headTabIndex"(news,old){
     	if(this.$store.state.home.isSelfJump){
     		this.$store.state.home.isSelfJump=false
     		return
     	}else{
     		this.pathFind()
     	}
     }
  },
  computed:{
    // btnsObj(){
    //   if(this.btns){
    //     return this.btns;
    //   }else{
    //    // return this.btns.printBtn[$store.headTabIndex]
    //   }
    // }
  },
  methods: {
    back(){
      this.$router.push({path:'/'})
      this.$store.commit("changecheckindex",{index:0})
    },
    backhome(){
              this.$router.push({path:'/'})
              this.$store.state.home.navindex=0
              this.$store.commit('changeTabIndex',{count: 0})
          },
    next() {
      let setpLen =  this.stepDatas.length
      this.$store.state.home.headTabIndex++
      //console.log(this.$store.state.home.headTabIndex)
      if(this.$store.state.home.headTabIndex>=setpLen){
        this.$store.state.home.headTabIndex=setpLen-1
      }
    },
    prev() {
      this.$store.state.home.headTabIndex--;
       if(this.$store.state.home.headTabIndex<=0){
        this.$store.state.home.headTabIndex=0
      }
    },
    pathFind() {
         this.$router.push({ path: this.paths[this.$store.state.home.headTabIndex]});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../css/column/layout";
.main{
  
    box-sizing: border-box;
    
    display:flex;
    position: relative;
    padding-bottom:10px;
    @media screen and (max-width: 1200px){
      width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: flex-end;
    }
    section{
        flex:1;
        height: 100%;
    }
    .main-left{
        flex: 0 0 14%;   
        @media screen and (max-width: 1200px){
          display: none;
        }
    }
    .main-center{
        height:100%;
        @media screen and (max-width: 1200px){
            height: 92.5%;
            width: 100%;
            margin-top: 20px;
        }
        p{
            color:#fff;
            height:7%;
            font-size:26px;
            font-family:MicrosoftYaHei-Bold;
            color:#fff;
            text-align: left;
            display:flex;
            align-items: center;
             @media screen and (max-width: 1200px){
         
            font-size:45px;
           }
        }
        .steps{
          height:10%;
          background:rgba(255,255,255,1);
           @media screen and (max-width: 1200px){
         
            height:9%;
           
           }
          

          //overflow: hidden;
        }
        .content{
          width: 100%;
          height:83% !important;
          background:rgba(255,255,255,1);
          border-bottom-right-radius:10px;
          border-bottom-left-radius:10px;
          box-sizing: border-box;
          overflow: auto;
          font-size:1.5vw;
          @media screen and (max-width: 1200px){
           
           font-size:3vw !important;
            div{
               font-size:3vw !important;
            }
             
           
           }
          
        }
    }
    .main-right{
        flex: 0 0 14%;
        // height:98.2%;
        position: relative;
        display:flex;
        justify-content: center;;
        @media screen and (max-width: 1200px){
          width:100%;
          text-align: right;
          flex: 0 0 6.2%;
          margin-bottom:0.5vh;
          margin-right:0.5vw;
          
        
        }
        .buttons{
          position:absolute;
          bottom:0;
          width:72%;
          @media screen and (max-width: 1200px){
                width:100%;
                margin-left:26px;
              }
            button{
              cursor: pointer;
              outline: none;
              width:100%;
              margin-top:19px;
              height:80px;
              border: none;
              border-radius:40px;
              text-align: center;
              background:rgba(5,115,222,1);
              color:#fff;
              @media screen and (max-width: 1200px){
                width:200px;
                height:3vh;
                font-size:1.8vh;
                margin-right: 10px;
                background-color: #fff;
                color: #0573DE;
              }
              font-size:32px;
                  &.callback{
                    background:rgba(5,115,222,.8);
                    color:#fff;
                    @media screen and(max-width: 1200px){
                        background:rgba(248,249,252,0.8);
                         color: #0573DE;
                    }
                  }
            }
        }

    }
}
</style>