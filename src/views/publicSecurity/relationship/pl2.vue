<template>
    <div>
        
    <div class="info-p">
        <ul>
            <li>请将身份证放入感应区</li>
        </ul>
    </div>
     <div class="rect-p">
         <img :src="id">
     </div>


	  
    </div>
</template>

<script>

export default {
	
    
     data() {
            return {
                Dialog:false,
                id:require('@/img/views/iden@2x.png'),
               
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
   @media screen and (max-width:1200px){
       .rect-p{
           width: 80% !important;
           height: 20vh !important;
       }
   }
  .rect-p{
      width: 620px;
      height: 420px;
      border: 1px solid #d4e7f9;
      background-color: #eef9ff;
      margin: 0 auto;
      img{
          margin-top: 78px;
      }
  }
  .t-zi{
	  font-size:24px;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:36px;
		text-align: center;
		padding-top: 10px;
  }
.buta{
	width:180px;
	height:56px;
	background:rgba(0,112,224,1);
	border:1px solid rgba(204,204,204,1);
	border-radius:5px;
	color: #fff;
	position: absolute;
	bottom: 10%;
    right: 10%;
}

</style>
