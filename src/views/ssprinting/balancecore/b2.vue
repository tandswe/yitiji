<template>
    <div>

    <div>  
    <div class="info-p">
        <ul>
            <li>请插入您的银联卡 60s</li>
        </ul>
     </div>
     <div class="rect-p">
         <img :src="id">
     </div>
    </div>

    <div>
      <div class="info-p">
        <ul>
            <li>请输入您的银联卡密码 60s</li>
        </ul>
     </div>
     <div class="input-a">
        <div class="input-b">请输入银行卡密码 <input type="text"></div>
     </div>
    </div>
    
    </div>
</template>

<script>
export default {
    
     data() {
            return {
                Dialog:false,
                id:require('@/img/views/yinhangka.png'),       
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
  .input-b{
      font-size: 24px;
      color: #333;
      margin-top: 180px;
      input{
          width:360px;
          height:54px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(204,204,204,1);
          font-size: 24px;
          color: #333;
      }
  }

  @media screen and (max-width:1200px){
      .rect-p img {
          width: 100%;
      }
      .info-p li{
          font-size: 1.6vh;
          font-weight: bold;
      }
  }

</style>
