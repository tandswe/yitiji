<template>
    <div class="conwrap">
        <div class="leftcontent">
            <div class="common" @click="ofen">
                常用
            </div>
            <ul>
                <li v-for="(item,index) in data1" :key="index" @click="showlist(index,item.bgcolor)">{{item.item}}</li>
            </ul>

        </div>
        <div class="rightcontent">
            <ul class="list1" v-if="clist===0">
                <li  v-for="(item,index) in commonlist" :key="index" >
                    <img :src="item.img">
                    <p>{{item.name}}</p>
                </li>  
             
            </ul>
            <ul class="list2" v-if="clist===1">
                <li  v-for="(item,index) in list1" :key="index" :style="{background:listcolor}">
                    <img :src="item.img">
                    <p>{{item.name}}</p>
                </li>  
            </ul>

        </div>

    </div>
</template>

<script>
let data1=[
    {id:1,item:"公安",bgcolor:"#4BB8F3"},
    {id:2,item:"人社",bgcolor:"#FFA92E"},
    {id:3,item:"民政",bgcolor:"#EF787A"},
    {id:4,item:"教育",bgcolor:"#4BB8F3"},
    {id:5,item:"卫计",bgcolor:"#FFA92E"},
    {id:6,item:"税务",bgcolor:"#EF787A"},
    {id:7,item:"住建",bgcolor:"#4BB8F3"},
    {id:8,item:"残联",bgcolor:"#FFA92E"},
    {id:9,item:"司法",bgcolor:"#EF787A"}
];
//常用列表模拟数据
let commonlist=[
    {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
    {name:"身份证补办",img:require("@/img/list/a2.png"),url:""},
    {name:"层港澳台旅行签证",img:require("@/img/list/a3.png"),url:""},
    {name:"居住证补办",img:require("@/img/list/a4.png"),url:""},
    {name:"残疾人补贴",img:require("@/img/list/a5.png"),url:""},
    {name:"高领老人津贴",img:require("@/img/list/a6.png"),url:""},
    {name:"特困家庭核查",img:require("@/img/list/a7.png"),url:""},
    {name:"低保核查",img:require("@/img/list/a8.png"),url:""},
    {name:"领取资格认证",img:require("@/img/list/a9.png"),url:""},
    {name:"社保清单打印",img:require("@/img/list/a10.png"),url:""},
    {name:"参保证明打印",img:require("@/img/list/a11.png"),url:""},
    {name:"社保卡",img:require("@/img/list/a12.png"),url:""}
]

//分类列表mock数据
let list=[
   [
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a2.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a3.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a4.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a5.png"),url:""},   
   ],
   [
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a1.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a1.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a1.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
   ],
   [
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a1.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a1.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a1.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
   ],
   [
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
       {name:"身份证补办",img:require("@/img/list/a1.png"),url:""},
       {name:"违章处理",img:require("@/img/list/a1.png"),url:""},
   ],
]
export default {
        data() {
            return {
                pic1: require("@/img/list/a1.png"),
                clist:0,
                data1,
                list,
                list1:[],
                listcolor:"",
                commonlist,
           }
        },
        methods:{
            showlist(index,bgcolor){
                this.clist=1
                this.list1=this.list[index]
                this.listcolor=bgcolor
            },
            ofen(){
                this.clist=0
            }
        }
        
    }
</script>

<style scoped lang="scss">
.conwrap{
    width:100%;
    height:100%;
    display:flex;
    font-family:MicrosoftYaHeiLight;
}
.leftcontent{
    width:15%;
    height:100%;
    padding-left:55px;
    padding-top:7vh;
    box-sizing: border-box;
    .common{
        width:232px;
        height:78px;
        text-align:center;
        line-height:78px;
        background:rgba(255,255,255,1);
        border-radius:0px 40px 0px 0px;
        box-shadow: 0 10px 5px rgba(0,0,0,0.3);
        font-size:42px;
        font-weight:bold;
        color:rgba(5,115,222,1);
        
    }
    ul{
            width:218px;
            //height:65vh;
            li{
                height:7.2vh;
                width:100%;
                background:rgba(5,115,222,0.7);
                border-bottom:1px solid #61a3e9;
                font-size:32px;
                color:#fff;
                line-height:78px;
                text-align:center;
            }
        }
}
.rightcontent{
    flex-grow: 1;
    height:100%;
    box-sizing: border-box;
    padding:10vh 40px 0;
    .list1{
        width:100%;
        height:90%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        align-content:space-around;
        font-size:30px;
        color:#fff;
        text-align: center;
        li{
            width:333px;
            height:17.3vh;
            background:rgba(75,184,243,1);
            border-radius:6px;
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;  
           @for $i from 1 through 4 {
               &:nth-of-type(#{$i}){
                   background:rgba(75,184,243,1);
               }
           }
           @for $i from 5 through 8 {
               &:nth-of-type(#{$i}){
                   background:rgba(255,169,46,1);
               }
           }
           @for $i from 9 through 13 {
               &:nth-of-type(#{$i}){
                   background:rgba(239,120,122,1);
               }
           }
           img{
               width:86px;
               height:8vh;
               display:block;
           }
        }
    }
    .list2{
        width:100%;
        height:91%;
        display:flex;
        flex-wrap:wrap;
        align-content: flex-start;
        font-size:30px;
        color:#fff;
        text-align: center;
        overflow-y:auto;
        &::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
            }
        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                border-radius: 10px;
                
                background: rgba(0,0,0,0.3);
            }
        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                
                border-radius: 10px;
                background:rgba(255,255,255,.2) ;
            }
        
        li{
            width:333px;
            height:17.3vh;
            background:rgba(75,184,243,1);
            border-radius:6px;
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            margin:2.4vh 20px;
            img{
               width:86px;
               height:8vh;
               display:block;
           }
        }

        
     }
}

</style>