<template>
    <div  class="flex homecontent" >
        <div class="main-left flex-center">
            <p class="col_welcome"> 欢迎您使用政务服务一体机</p>
            <div class="col_search">
                 <div class="search">
                   <router-link to="/search" ><img :src="search"/></router-link>
                   <input type="search" :placeholder="holddata" @focus="focusfn()" @blur="blurfn()">  
                </div>
                <div class="hot">
                    <span style="border:none;">热门搜索：</span>
                    <span><router-link to="/jiaotongfa/jiaotong/c1">交通违法处理</router-link></span>
                    <span><router-link to="/query/qu1">公积金查询</router-link></span>
                    <span><router-link to="/crimeTestify/crimeTStep0">无犯罪证明</router-link></span>
                    <span><router-link to="/pmUion/apply/CJRZBBTips">残疾人证申请</router-link></span>
                    <span><router-link to="/pmUion/poverty/supAidTips">南粤扶残助学</router-link></span>
                    <span><router-link to="/enquiry/enquiry/equiry1">法律文书查询</router-link></span>
                    <!-- <span><router-link to="/pmUion/CJRZBBFn">公积金</router-link></span><span><router-link to="/pmUion/CJRZBBFn">社保</router-link></span> -->
                </div>
            </div>
            <ul class="flex">
                <li :style="{background:item.backgroundcolor}" v-for="(item,index) in data1" :key="index">
                    <div class="business-top flex-start-end">
                       <span class="business-type">{{item.title}}</span>
                       <span class="business-more" @click="linkto(item.moreurl)">更多>></span>
                    </div>
                    <div class="business-bottom">
                        <div v-for="(value,index) in item.types" :key="index" @click="linkto(value.typeurl)">
                            <img :src="value.img" >
                            <p v-html="value.typename"></p>
                        </div>
                    </div>
                </li>        
            </ul>
             <div class="col_bs bs1">
                    <div class="col_bs-left">
                       住建
                        
                    </div>
                    <div class="col_bs-right">
                         <ul>
                             <li v-for="(item,index) in data2" v-if='index<=3' :key="index"  @click="linkto(item.url)">
                                 
                                <div>
                                   <img :src="item.pic">
                                </div>
                                      
                                  <p>{{item.title}}</p>
                                
                                       
                               
                             </li>
                         </ul>
                    </div>
                    <div class="col_bs-more">
                        <p><router-link to="/moveSelect/5">更多>></router-link></p>
                    </div>

                </div>
                <div class="col_bs bs2">
                    <div class="col_bs-left">
                       残联
                        
                    </div>
                    <div class="col_bs-right">
                         <ul>
                             <li v-for="(item,index) in data3" :key="index" v-if='index<=3'  @click="linkto(item.url)">
                                <div>
                                   <img :src="item.pic">
                                </div>
                                      
                                  <p>{{item.title}}</p>
                                
                                       
                                
                             </li>
                         </ul>
                    </div>
                    <div class="col_bs-more">
                        <p><router-link to="/moveSelect/6">更多>></router-link></p> 
                    </div>

                </div>




        </div>
        <div class="main-right">
            <div class="right-wrap">
                <p class="welcome"> 欢迎您使用政务服务一体机</p>
                <div class="search">
                   <router-link to="/search" ><img :src="search"/></router-link>
                    <input type="search" placeholder="请输入您需要办理的业务" >
                    
                </div>
                <div class="hot">
                    热门搜索：<span><router-link to="#">居住证</router-link></span>
                    <!-- <span><router-link to="/pmUion/CJRZBBFn">公积金</router-link></span><span><router-link to="/pmUion/CJRZBBFn">社保</router-link></span> -->
                </div>
                <div class="bs bs1 flex">
                    <div class="bs-left">
                        <p >住建 </p>
                        <p><router-link to="/moveSelect/5">更多>></router-link></p>
                    </div>
                    <div class="bs-right">
                         <ul>
                             <li v-for="(item,index) in data2" :key="index"  @click="linkto(item.url)">
                                 <div class="flex bsk">
                                        <img :src="item.pic">
                                        <p>{{item.title}}</p>
                                 </div>
                             </li>
                         </ul>
                    </div>

                </div>
                <div class="bs bs2 flex">
                    <div class="bs-left">
                        <p>残联</p>
                        <p><router-link to="/moveSelect/6">更多>></router-link></p>
                    </div>
                    <div class="bs-right">
                         <ul>
                             <li v-for="(item,index) in data3" :key="index"  @click="linkto(item.url)">
                                 <div class="flex bsk">
                                        <img :src="item.pic">
                                        <p>{{item.title}}</p>
                                 </div>
                             </li>
                         </ul>
                    </div>

                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>


let data1=[  
{
    title:"公安",
    moreurl:'/moveSelect/0',
    backgroundcolor:'#4bb8f3',
    types:[
        {typename:"交通违法处理",img:require('@/img/home/car.png'),typeurl:"/jiaotongfa/choice",},
        {typename:"申报居住登记",img:require('@/img/home/31.png'),typeurl:"/residenceAudit"},
        {typename:"通行证签注",img:require('@/img/home/32.png'),typeurl:"/passport/passportApplication",},
        {typename:"无犯罪证明",img:require('@/img/home/33.png'),typeurl:"/crimeTestify/crimeTStep0",},
    ]
},
{
    title:"人社",
    moreurl:'/moveSelect/1',
    backgroundcolor:'#EF787A',
    types:[
    {typename:"社保清单打印",img:require('@/img/home/40.png'),typeurl:"/ssprinting/psetp",},
    {typename:"参保证明打印",img:require('@/img/home/41.png'),typeurl:"/ssprinting/Proofof",},
    {typename:"领取资格认证",img:require('@/img/home/42.png'),typeurl:"/ssprinting/basicquery",},
    {typename:"社保余额查询",img:require('@/img/home/43.png'),typeurl:"/ssprinting/balance",},
    ]
},
{
    title:"民政",
    moreurl:'/moveSelect/2',
    backgroundcolor:'#FFA92E',
    types:[
    {typename:"重度残疾人护理",img:require('@/img/home/44.png'),typeurl:"/peoplePass/severdisability",},
    {typename:"高领老人津贴",img:require('@/img/home/45.png'),typeurl:"/advancedEntrance",},
    // {typename:"特困家庭核查",img:require('@/img/home/46.png'),typeurl:"",},
    {typename:"低保核查",img:require('@/img/home/47.png'),typeurl:"/safeguardEntrance",},
    ]
},
// {
//     title:"教育",
//     moreurl:'/education',
//     backgroundcolor:'#41CAA9',
//     types:[
//     {typename:"学历认证",img:require('@/img/home/48.png'),typeurl:"",},
//     {typename:"高等学校<br>毕业生学历证明书",img:require('@/img/home/49.png'),typeurl:"/education",},
//     ]
// },

{
    title:"税务",
    moreurl:'/moveSelect/3',
    backgroundcolor:'#F9BF3B',
    types:[
    {typename:"个税清单打印",img:require('@/img/home/60.png'),typeurl:"/taxation/individualtaxList/listIdcard",},
    {typename:"个税完税证明打印",img:require('@/img/home/61.png'),typeurl:"/taxation/individualtaxProve/proveIdcard",},
    // {typename:"发票检查",img:require('@/img/home/62.png'),typeurl:"",},
    // {typename:"涉税查询",img:require('@/img/home/63.png'),typeurl:"",}
    ]
},
{
    title:"卫计",
    moreurl:'',
    backgroundcolor:'#33CDF3',
    types:[
    // {typename:"计划生育服务证",img:require('@/img/home/50.png'),typeurl:"",},
    {typename:"婚育证明办理",img:require('@/img/home/51.png'),typeurl:"",},
    {typename:"小孩生育登记",img:require('@/img/home/52.png'),typeurl:"",},
    ]
},

{
    title:"司法",
    moreurl:'/moveSelect/4',
    backgroundcolor:'#41CAA9',
    types:[
    {typename:"法律文书查询",img:require('@/img/home/48.png'),typeurl:"/enquiry/enquiry",},
    {typename:"律师有偿服务",img:require('@/img/home/49.png'),typeurl:"/judicial/paidservice",},
    ]
},

]

let data2 =[
   {
       title:"公积金查询",
       pic:require('@/img/home/gong.png'),
       url:"/query"
   },
   {
       title:"公积金缴存信息",
       pic:require('@/img/home/70.png'),
       url:"/inform"
   },
   {
       title:"公积金缴存明细",
       pic:require('@/img/home/71.png'),
       url:"/hand"
   },
  
//    {
//        title:"二级建筑师注册",
//        pic:require('@/img/home/72.png'),
//        url:" "
//    },
//    {
//        title:"二级建造师注册",
//        pic:require('@/img/home/73.png'),
//        url:" "
//    },
//     {
//        title:"二级结构工程师注册",
//        pic:require('@/img/home/74.png'),
//        url:" "
//    },

]

let data3 =[
   {
       title:"残疾人证申请",
       pic:require('@/img/home/75.png'),
       url:"/pmUion/CJRZBBFn"
   },
   {
       title:"南粤扶残助学",
       pic:require('@/img/home/76.png'),
       url:"/pmUion/supportAidStudy"
   },
   {
       title:"残疾人证信息变更",
       pic:require('@/img/home/77.png'),
       url:"/pmUion/CJRZSChangeFn"
   },
   {
       title:"残疾人证补办",
       pic:require('@/img/home/78.png'),
       url:"/pmUion/CJRapply"
   },
   {
       title:"残疾人证注销",
       pic:require('@/img/home/79.png'),
       url:"/pmUion/lisenceCancellation"
   }

]



    import  '@/css/flex.scss'
    export default {
        data() {
            return {
                car: require('@/img/home/car.png'),
                search: require('@/img/home/search.png'),
                bs1_img1:require('@/img/home/gong.png'),
                data1,
                data2,
                data3,
                holddata:"请输入您需要办理的业务"//placeholder的值
            }
        },
        methods:{
            linkto(url){
                this.$router.push({path:url})
            },
            //搜索框失去焦点时触发的事件
            focusfn(e){
                this.holddata=""
            },
            blurfn(){
                this.holddata="请输入您需要办理的业务"
            }
        }
        
    }
</script>

<style scoped lang="scss">
@import "../css/column/home";
.homecontent{
    height:100%;
    display:flex;
}
.main-left{
    // width:50%;
    height:100%;
    box-sizing:border-box;
    //padding-left:124px;
    padding-top:30px;
    
    >ul{
       
        align-content:space-between;
        display:flex;
        justify-content: space-between;
        li{
            width:48%;
            box-sizing:border-box;
            padding:0 10px;
            .business-top{
                height:26%;
                box-sizing:border-box;
                border-bottom:1px solid rgba(255,255,255,0.25);
                color:#fff;
                .business-type{
                    
                }
                .business-more{
                    cursor: pointer;
                    margin-right:2px;
                }
            }
            .business-bottom{
                color:#fff;
                height:74%;
                box-sizing:border-box;
                display:flex;
                flex-wrap:wrap;
                
                div{
                    width:50%;
                    height:50%;
                    box-sizing:border-box;
                    text-align:center;
                    
                        cursor: pointer;
                    // img{
                    //     width:50px;
                    //     height:50px;
                    // }
                    &:nth-of-type(odd){
                        border-right:1px solid rgba(255,255,255,0.25);
                    }
                }
            }
        }
    }
}
.main-right{
      
    width:50%;
    height:100%;
    box-sizing:border-box;
    padding-top:30px;
    padding-left:50px;
    .right-wrap{
        width:812px;
        height:77vh;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .welcome{
            font-size:2.22vh;
            color:rgba(255,255,255,1);
        }
        .search{
          position: relative;
          width:811px;
          height:8.88vh;
            input{
                width:811px;
                height:100%;
                background:rgba(255,255,255,1);
                border-radius:9px;
                outline:none;
                border:0;
                font-size:30px;
                color:rgba(0,112,224,1);
                padding-left:20px;
            
           }
           img{
               width:50px;
               height:50px;
               position:absolute;
               right:20px;
               top:50%;
               margin-top:-25px;
           }
        }
        .hot{
            font-size:2.22vh;
            color:rgba(255,255,255,1);
            
            span{
                margin-left:36px;
                border-bottom: 1px solid #fff;
            }
        }
        .bs{
            width:811px;
            height:26.29vh;
            
            .bs-left{
                width:212px;
                height:100%;
                background:rgba(75,184,243,1);
                background-repeat: no-repeat;
                position:relative;
                p{
                    color:#fff;
                    &:nth-of-type(1){
                        font-size:36px;
                        position:absolute;
                        top:50%;
                        margin-top:-18px;
                        left:74px;
                    }
                    &:nth-of-type(2){
                        font-size:22px;
                        position:absolute;
                        bottom:20px;
                        left:10px;
                    }
                    
                }
               
            }
            .bs-right{
                width:599px;
                height:100%;
                background:#fff;
                ul{
                    display:flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    align-content:stretch;
                    height: 50%;
                    li{
                        width:33.33333%;
                        height:100%;
                        text-align:center;
                        box-sizing: border-box;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        div{
                            height:70%;
                            width:100%;
                            flex-direction: column;
                            justify-content:center;
                            border-right: 2px solid rgba(204,204,204,1);
                            cursor: pointer;
                        }
                        &:nth-child(3n){
                            div{

                                border-right:none;
                            }
                        }
                        img{
                            width:50px;
                            height:50px;
                            display:block;
                        }
                        p{
                            font-size:20px;
                            color:rgba(75,184,243,1);
                        }
                    }
                }

            }
        }
        .bs1{
             .bs-left{
                background-image:url("~@/img/home/house.png"); 
            }
        
        }
         .bs2{
             .bs-left{
                background-image:url("~@/img/home/bs2.png"); 
            }
        
        }

        
    }
}



::-webkit-input-placeholder { /* WebKit browsers */ 
color: rgba(0,112,224,1);
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: rgba(0,112,224,1);
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: rgba(0,112,224,1);
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: rgba(0,112,224,1); 
} 
</style>