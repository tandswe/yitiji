<template>
    <div>
       <div class="passport-title">
			请放置好你的照相回执 60s
			</div>
			<div class="photo-wrap">
				<div class="photo-title-input-wrap flex-start">
					<div>
						<input type="text">
					</div>
					<div class="photo-btn-wrap">
						<div>
							手动输入
						</div>
					</div>
				</div>
				<div class="photo-card">
					<img :src="pic1">
				</div>
				<div @click="substep"  style="margin-top:2vh">
					<button-sub btname="提交"></button-sub>
				</div>
		</div>
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
		components:{
		  buttonSub
		},
        data(){
            return {
                 pic1:require('@/img/pmUion/callback@2x.png')
            }
		},
		methods:{
			substep(){
			this.$emit("listenType","OK")
		}
		}
        
    }
</script>

<style scoped lang="scss">
.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}

.photo-title-input-wrap{
		display: inline-flex;
		position: relative;
		padding-bottom: 38px;
		margin-top: 20px;
		input{
			height: 54px;
			line-height: 52px;
			box-sizing: border-box;
			border: 1px solid #CCCCCC;
			width:562px;
			padding-right: 140px;
			padding-left: 20px;
			background:rgba(248,248,248,1);
			
		}
		.photo-btn-wrap{
			position: absolute;
			top: 0;
			right: 0;
			background: #35B0F3;
			height: 54px;
			line-height: 54px;
			color: #FFFFFF;
			border-radius: 10px;
			text-align: center;
			padding: 0 17px;
			font-size: 26px;
		}
		 @media screen and (max-width:1200px){
			 .photo-btn-wrap{ top:14%;}
		 }
	}
.photo-card{
		width: 562px;
		height: 420px;
		position: relative;
		background: rgba(238,249,255,1);
		margin: 0 auto;
		img{
			display: block;
			width: 234px;
			height: 264px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
</style>