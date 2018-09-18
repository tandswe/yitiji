<template>
	<div class="mi-p">
		<button><router-link to="/ins1">医保账户余额查询</router-link></button>
		<button><router-link to="/ins2">医保划拨清单查询打印</router-link></button>
		<button><router-link to="/ins3">医保账户消费查询打印</router-link></button>

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
	.mi-p{
		width: 460px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 180px;
		button{
			width:460px;
			height:80px;
			background:rgba(0,112,224,1);
			border-radius:6px;
			color: #fff;
			margin-bottom: 30px;
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

</style>