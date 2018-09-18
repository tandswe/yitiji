<template>
    <div>
        
    <div class="info-p">
        <ul>
            <li>请查看您的社保信息</li>
        </ul>
    </div>
     <div class="rect-p">
         <img :src="id">
     </div>
     <div  @click="isDialogShow">打印效果</div>
       <div v-show="Dialog" class="dialog-wrap">
	    <div class="dialog-shadow fadeIn"  @click="hideDialog"></div>
		 <div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">		
			<div class="dialog-content">
			  <img :src="id2">
			</div>
		 </div>
    	</div>
    </div>
</template>

<script>
export default {
    	props: {
		    width:{
		    	type: Number,
		      	default:500
		    },
		    height:{
		    	type: Number,
		      	default:330
		    },
	  },
     data() {
            return {
                Dialog:false,
                id:require('@/img/views/spring-icon@2x.png'),
                id2:require('@/img/views/sp-list-icon.png')
               
            }
        },
        methods: {
		 isDialogShow:function(){
		    this.Dialog = !this.Dialog		
		   },
		 dialogControl(){
				this.Dialog=false
			},
		hideDialog(){
				this.Dialog=false
			},  
    }

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
      border: 1px solid #d4e7f9;
      background-color: #eef9ff;
      margin: 0 auto;
      img{
          margin-top: 78px;
      }
  }
  .dialog-wrap{
		z-index: 3;
	}
	.dialog-shadow{
		position: fixed;
		top: 0;
		left: 0;
		width: 1920px;
		height:1080px;
		z-index: 3;
		background:rgba(0,0,0,.3);
	}
	.dialog-box{
		position: fixed;
		z-index: 99999;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}

	.dialog-content{
		height: auto;
		min-height: 262px;
		background: #FFFFFF;
		border-radius: 10px;
	}
 @media screen and (max-width:1200px){
	 .rect-p img{
		 width: 40%;
	 }
	 .info-p li{
		 font-size: 1.6vh;
		 font-weight: bold;
	 }
 }
</style>
