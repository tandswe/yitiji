<template>
    <div class="footer">
       <div>
                <img :src="locate">
                <span  style="margin-left:5px;">天河区棠下村社区服务中心</span>
                <img :src="call" style="margin-left:20px;">
                <span style="margin-left:7px;">服务热线：020-36952542</span>

        </div>
        <div style="margin-right:20px;">
                <span>本机编号：G96423</span>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
              
                logoimg:require('@/img/home/logo.png'),
                home:require('@/img/home/home.png'),
                exit:require('@/img/home/exit.png'),
                locate:require('@/img/home/locate.png'),
                call:require('@/img/home/call.png')
            }
            
        },
        computed:{
           
        },
        methods:{
           
        }
    }
</script>

<style lang="scss"scoped>
@import "../css/column/layout";
.footer{
    width:100%;
    padding:0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background:url('~@/img/views/bg1.png') repeat-x;
    font-size:28px;
    color:#fff;
   
     @media screen and (max-width: 1200px){
         font-size:35px;
          img{
             width:50px;
         }
     }
   
   
}

</style>
