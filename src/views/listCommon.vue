<template>
    <div class="conwrap">
        <!-- <div class="leftcontent">
          <div class="common" @click="ofen">
                常用
            </div> 
            <ul>
                <li v-for="(item,index) in data1" :key="index" 
                    @click="showlist(item.id,item.bgcolor)" 
                    :class="{actived:activeindex===index}">
                    {{item.item}}
                </li>
            </ul>

        </div> -->
        <div class="rightcontent">
        
                 <ul class="list1">
                <li  v-for="(item,index) in commonlist" :key="index" :style="{background:item.background}" @click="gotourl(item.url)"
                    >
                        <img :src="item.img" >
                        <p v-html="item.name" ></p>
                </li>  
             
            </ul>

           
           
            <!-- <ul class="list2" >
                <li  v-for="(item,index) in list1" :key="index" :style="{background:listcolor}">
                    <img :src="item.img">
                    <p>{{item.name}}</p>
                </li>  
            </ul> -->

        </div>

    </div>
</template>

<script>

export default {
        data() {
            return {
                pic1: require("@/img/list/a1.png"),
                //clist:0,
                // data1:'',
                // list:"",
                activeindex:0,//左侧导航 active值
                //list1:list[0],
                listcolor:"",
               
           }
        },
         computed:{
           commonlist(){
               switch(this.$store.state.home.dataindex)
               {
                   case 1:
                   return this.$store.state.home.listcontent[0]
                   break;
                   case 3:
                   return this.$store.state.home.listcontent[1]
                   break;
                   case 4:
                   return this.$store.state.home.listcontent[2]
                   break;
               }
           }
        },
        methods:{
            showlist(id,bgcolor){
                this.list1=this.list[id-1]
                this.listcolor=bgcolor
                this.activeindex=id-1
            },
            ofen(){
                this.clist=0
            },
            gotourl(url){
                this.$router.push({path:url})
            }
        }
    }
</script>

<style scoped lang="scss">
@import "../css/column/listcommon";
.conwrap{
    width:100%;
    height:100%;
    font-family:MicrosoftYaHeiLight;
}

.rightcontent{
    
    
    margin:0 auto;
    height:100%;
    box-sizing: border-box;
    
    .list1{
        width:100%;
        height:90%;
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        align-content:flex-start;
        font-size:30px;
        color:#fff;
        text-align: center;
        overflow-y: auto;
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
.actived{
    background:#fff !important;
    position:relative;
    color:rgba(5,115,222,.7) !important;
    &:after{
    content:"";
    position:absolute;
    width:0; 
    height:0; 
    border-top:10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #fff; 
    right:-10px;
    top:50%;
    margin-top:-8px;
    }

}
</style>