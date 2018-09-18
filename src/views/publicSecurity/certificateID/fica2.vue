<template>
    <div>
        <msgCheck v-if="isshow"></msgCheck>
        <registered v-if="isshow"></registered>
        <signature></signature>
        <div>
			<!-- <button @click="isDialogShow" class="buttonStyle">提交</button> -->
		<div @click="isDialogShow" style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
		</div>

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
import msgCheck from '../publicSecurityComponents/msgCheck'
import registered from '../publicSecurityComponents/registered'
import signature from '../publicSecurityComponents/signature'
import buttonSub from "@/components/base/buttonSub"
export default {
    components:{
        msgCheck,
        registered,
		signature,
		buttonSub               
    },
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
            isshow:false,
            Dialog:false,  
           id2:require('@/img/views/sp-list-icon.png')   
        }
    },
     methods: {
		 isDialogShow(){
			// this.Dialog = !this.Dialog	
				  this.$router.push('/publicSecurity/fica3')
            this.$store.commit('changeTabIndex',{count: 2})
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

