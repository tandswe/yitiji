<template>
    <div class="conwrap">
        <div class="leftcontent">
            <ul>
                <li v-for="(item,index) in data1" :key="index" 
                    @click="showlist(index,item.bgcolor)" 
                    :class="{actived:activeindex===index}"
                    style="cursor:pointer"
                    >
                    {{item.heading}}
                </li>
            </ul>

        </div>
        <div class="rightcontent">
            
                <ul class="subnav" v-if="issubnav">
                    <li v-for="(item,index) in subnavdata" 
                    :key="index"
                     @click="subshow(index)"
                     :class="{subnavactive:index==subindex}"
                     style="cursor:pointer"
                     >
                        {{item.item}}
                    </li>
                    
                </ul>
            
            <ul class="list2" >
                <li  v-for="(item,index) in list1" :key="index" :style="{background:listcolor}" @click="gotosub(item.url)" 
                >
                    <img :src="item.img" >
                    <p >{{item.name}}</p>
                </li>  
            </ul>

        </div>

    </div>
</template>

<script>
export default {
       
        data() {
            return {
                pic1: require("@/img/list/a1.png"),
                activeindex:0,//左侧导航 active值
                data1:"",
                list:'',
                list1:"",
                listcolor:"",
               // 右侧子栏目subnav变量
               subindex:0,//sub栏目的index
               listdata:"",//subdata 有子栏目数据的项目
               issubnav:1 //是否存在subnav
           }
        },
        created(){
            
             this.data1=this.$store.state.selcetPage.data;
             this.list1=this.data1[0].headSum[0].subSet[0];
            //公安暂时全部列出
            // console.log(this.subnavdata)
            //  if(this.$store.state.selcetPage.data[0].leftId== 0)
            // { 
            //         this.list1=this.data1[0].headSum[0].subSet.reduce((a, b)=> {
            //             return a.concat(b);
            //             }, [])
            // }
              if(this.data1[0].leftId== 0)
                { 
                    this.list1=this.data1[0].headSum[0].subSet[0]
                    this.listdata = this.data1[0]
                   
                }
             
        },
       computed:{
          subnavdata(){
              return this.$store.state.selcetPage.data[0].headSum[0].val
          }
       },
        methods:{
            showlist(index,bgcolor){    
                this.list1=this.data1[index].headSum[0].subSet[0]
                this.issubnav=0
                 if(this.data1[index].leftId== 0)
                { 
                    this.listdata = this.data1[index]  //传入有子栏目数据的项目
                    this.issubnav=1
                }
                this.listcolor=bgcolor
                this.activeindex=index
            },
            ofen(){
                this.clist=0
            },
            gotosub(url){
                this.$router.push({path:url})
            },
            subshow(index){
                this.list1=this.listdata.headSum[0].subSet[index]
                this.subindex =index
            }
        }
        
    }
</script>

<style scoped lang="scss">
@import "../css/column/listcontent";
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
    ul{
            width:218px;
            //height:65vh;
            li{
               
                width:100%;
                background:rgba(5,115,222,0.7);
                border-bottom:1px solid #61a3e9;
                color:#fff;
                
                text-align:center;
            }
        }
}
.rightcontent{
    flex-grow: 1;
    height:100%;
    box-sizing: border-box;
    
    position: relative;
    .subnav{
        display:flex;
        position:absolute;
        top:2vh;
        left:60px;

        li{
            width:180px;
            height:70px;
            border:1px solid rgba(255,255,255,1);
            border-radius:6px;
            margin-right:20px;
            line-height:70px;
            text-align:center;
            color:#fff;
            font-size:30px;
            &.subnavactive{
                color:#0574DE;
                background:#fff;
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
           
            background:rgba(75,184,243,1);
            border-radius:6px;
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: baseline;
           // margin:2.4vh 20px;
            padding:1.8vh 5px;
            box-sizing:border-box;
            img{
             
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