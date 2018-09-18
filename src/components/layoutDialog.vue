<template>
	<div v-show="isDialogShow" class="dialog-wrap">
		<div class="dialog-shadow fadeIn" @click="hideDialog"></div>
		<div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">
			<div class="dialog-title">
			  	{{title}}
			</div>
			<div class="dialog-content clearfix">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'layout-dialog',
		props: {
		    width:{
		    	type: Number,
		      	default:720
		    },
		    height:{
		    	type: Number,
		      	default:330
		    },
		    isDialogShow:{
		    	type:Boolean,
		    	default:false
				},
				title:{
					type:String,
					default:"确认"
				}
	  },
		data(){
			return{
				
			}
		},
		methods:{
			dialogControl(){
				this.isDialogShow=false
			},
			hideDialog(){
				this.isDialogShow=false
			}
		}
	}
</script>

<style scoped>
	.dialog-wrap{
		z-index: 3;
	}
	.dialog-shadow{
		position: fixed;
		top: 0;
		left: 0;
		width: 1920px;
		height:100%;
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
	.dialog-title{
		background: #0070E0;
		text-align: left;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		color: #FFFFFF;
		font-size: 28px;
		padding: 20px 30px;
		line-height: 28px;
	}
	.dialog-content{
		height: auto;
		min-height: 262px;
		background: #FFFFFF;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	@-webkit-keyframes fadeIn {
	  from {
	    opacity: 0;
	  }
	
	  to {
	    opacity: 1;
	  }
	}
	
	@keyframes fadeIn {
	  from {
	    opacity: 0;
	  }
	
	  to {
	    opacity: 1;
	  }
	}
	
	.fadeIn {
	  animation-duration:1s;
	  -webkit-animation-name: fadeIn;
	  animation-name: fadeIn;
	}
</style>