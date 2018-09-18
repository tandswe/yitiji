<template>
    <div>
        <div class="bill-center">
            <p style="text-align:left;">请对准指纹口按压拇指 60s</p>
            <div class="login-next-center">
			   <img :src="myphoto" alt="">
		    </div>
             <div style="width:100%;text-align:center;margin-top:10px;">
                <router-link to="/idcardvalidityCommon/expense3">费用交纳：下一步</router-link>
            </div>
		</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                myphoto:require('@/img/views/yinhangka.png'),
            }
        }
        
    }
</script>

<style lang="scss"scoped>
  .bill-center {
    width: 80%;
    height: 670px;
    background: #fff;
    margin: 0 auto;
    border-radius: 9px;
    box-sizing: border-box;
     p{
            text-align:left; 
            margin-top:45px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;
        }
    .login-next-center{
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  margin-top: 98px;
	  img{
		  width: 560px;
		  height: 420px;
	  }
  }
    


  }
</style>