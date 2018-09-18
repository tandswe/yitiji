<template>
    <div>

    <div >  
    <div class="info-p">
        <ul>
            <li>请插入您的银联卡 60s</li>
        </ul>
     </div>
     <div class="e-rr">
         <img :src="id">
     </div>
    </div>

    <div>  
    <div class="info-p">
        <ul>
            <li>面部特征采集，请点头 60s</li>
        </ul>
     </div>
     <div class="rect-p">
         <img :src="id2">
     </div>
    </div>

 
    
    </div>
</template>

<script>
export default {
    
     data() {
            return {
                Dialog:false,
                id:require('@/img/views/iden@2x.png'), 
                id2:require('@/img/views/id@2x.png')    
            }
        },
    }
</script>

<style lang="scss" scoped>

  .info-p{
      height: 30px;
      width: 100%;
      margin-top: 48px;
      margin-bottom: 85px;
      ul{
          margin: 0;
          padding: 0;
      }
      li{
          font-size: 24px;
          color: #333;
          text-align: left;
          margin-left: 98px;
      }
  }

  .rect-p{
      width: 560px;
      height: 420px;
    //   border: 1px solid #d4e7f9;
    //   background-color: #eef9ff;
      margin: 0 auto;
     
  }
  .input-a{
        width:720px;
        height:360px;
        background:rgba(246,246,246,1);
        border:1px solid rgba(221,221,221,1);
        border-radius:20px;
        margin: 0 auto;
  }
  .e-rr{
        width:560px;
        height:420px;
        margin: 0 auto;
        background:rgba(238,249,255,1);
        border:1px solid rgba(212,231,249,1);
        img{
            margin-top: 70px;
        }
  }
    @media screen and (max-width:1200px){
       .e-rr img{
           width: 80%;
       }
       .rect-p img {
           width: 100%;
       }
       .info-p li{
           font-size: 1.6vh;
           font-weight: bold;
       }
   }
 

</style>
