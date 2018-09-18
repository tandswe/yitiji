<template>
    <div class="conwrap">
        <div class="leftcontent" v-if="!leftOvers">
            <!-- <ul>
                    <li v-for="(item,index) in data" :key="index" @click="showlist(index,item.bgcolor)">{{item.item}}</li>
            </ul> -->
            <ul>
                <li v-for="(item,index) in data" :key="index" 
                    @click="showlist(index)" 
                    :class="{actived:activeindex===index}">
                    {{item.item}}
                </li>
            </ul>
        </div>
        <div class="rightcontent">
            <ul :class="[ 'list2',{'leftover':leftOvers}]">
                <li  v-for="(item,index) in list1" :key="index" :style="{background:listcolor}"  @click="btnClick(item.url)">
                    <img :src="item.img">
                    <p>{{item.name}}</p>
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
                clist:0,
                // data1,
                // list,
                list1:[],
                listcolor:"",
                leftOvers: 0,
                data:[],
                lists:[],
                activeindex:0
           }
        },
        created(){
            // this.list1=this.list[this.$store.state.home.index]
            let dataID = this.$route.params.id
            let dataChoose = this.$store.state.selcetPage
            console.log(dataChoose.data[dataID].leftId)
            this.leftOvers = dataChoose.data[dataID].leftId
            if(this.leftOvers == 0){
                this.data = dataChoose.data[dataID].headSum[0].val
            }
            this.lists = dataChoose.data[dataID].headSum[0].subSet
            this.list1 = dataChoose.data[dataID].headSum[0].subSet[0]
            // this.list1 = dataChoose.data[dataID].headSum.subSet[]
            if(this.$route.query.num){
                this.list1=this.lists[this.$route.query.num]
                this.activeindex=Number(this.$route.query.num)
            }
            

        },
      
        methods:{
            showlist(index,bgcolor){
                // this.$store.state.home.index = index
                this.$store.state.home.clist=1
                // console.log(this.$store.state.home.index, 'this.$store.state.home.index')
                this.list1=this.lists[index]
                this.listcolor=bgcolor
                this.activeindex=index
            },
            btnClick(val){
                this.$router.push({path:val})
            }
        }
        
    }
</script>

<style scoped lang="scss">
@import "../../css/column/more";
.conwrap{
    width:100%;
    height:100%;
    display:flex;

}
.leftcontent{
    width:15%;
    height:100%;
    padding-left:55px;
    
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
            height:65vh;
   
     
            li{
                
                width:100%;
                background:rgba(5,115,222,0.7);
                border-bottom:1px solid #61a3e9;
                
                color:#fff;
                
                text-align:center;
                cursor:pointer;
            }
        }
}
.rightcontent{
    flex-grow: 1;
    height:100%;
    box-sizing: border-box;
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

            cursor:pointer;
            img{
             
               display:block;
           }
        }

        
     }
    .leftover{
    width: 82%;
    margin: 0 auto;
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