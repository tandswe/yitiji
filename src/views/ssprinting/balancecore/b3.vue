<template>
   <div>
     <div class="input-a">
        <div class="input-b">请输入银行卡密码
            <h1>888.8<span>元</span></h1>
        </div>
      </div>
   </div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.input-a{
        width:720px;
        height:360px;
        background:rgba(246,246,246,1);
        border:1px solid rgba(221,221,221,1);
        border-radius:20px;
        margin: 120px auto ;
  }
 .input-b{
      font-size: 24px;
      color: #333;
      margin: 70px 0 0 70px ;
      float: left;
      width: 80%;
      text-align: left;
      h1{
          color: #0575DE;
          font-size: 48px;
          text-align: center;
          margin-top: 50px;
          span{
               font-size: 18px;
                font-weight: normal;
                margin-left: 10px;
                color: #333;
          }
      }
  }
    @media screen and (max-width:1200px){
        .input-b{
            font-size: 1.6vh;
            font-weight: bold;
        }
    }
</style>
