<template>
    <div style="height:100%;" class="flex">
       <div class="rightcontent">
                         <ul>
                             <li v-for="(item,index) in data2" :key="index"  @click="linkto(item.url)">
                              
                                        <img :src="item.pic">
                                        <p>{{item.title}}</p>
                                
                             </li>
                         </ul>
                    </div>
        
    </div>
</template>
<script>




let data2 =[
   {
       title:"公积金查询",
       pic:require('@/img/home/50.png'),
       url:"/query"
   },
   {
       title:"公积金缴存信息",
       pic:require('@/img/home/51.png'),
       url:"/inform"
   },
   {
       title:"公积金缴存明细",
       pic:require('@/img/home/49.png'),
       url:"/hand"
   },
  
   {
       title:"二级建筑师注册",
       pic:require('@/img/home/72.png'),
       url:" "
   },
   {
       title:"二级建造师注册",
       pic:require('@/img/home/73.png'),
       url:" "
   },
    {
       title:"二级结构工程师注册",
       pic:require('@/img/home/74.png'),
       url:" "
   },

]




    import  '@/css/flex.scss'
    export default {
        data() {
            return {
                car: require('@/img/home/car.png'),
                search: require('@/img/home/search.png'),
                bs1_img1:require('@/img/home/gong.png'),
            
                data2,
               
            }
        },
        methods:{
            linkto(url){
                this.$router.push({path:url})
            }
        }
        
    }
</script>

<style scoped lang="scss">
.rightcontent{
    // flex-grow: 1;
    height:100%; 
    width: 85%;
    margin: 0 auto;
    box-sizing: border-box;
    padding:10vh 40px 0;       
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
            float: left;
            justify-content:center;
            cursor:pointer;
            p{
                font-size: 30px;
                text-align: center;
                color: #fff;
            }
            img{
               width:86px;
               height:8vh;
               justify-content:center;
           }
        }
        
     }

</style>