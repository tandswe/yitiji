<template>
    <div>
        <div class="passport-title">
				{{title}}
		</div>
			<div class="photo-wrap pt20">

				<div class="photo-card ">
					<img :src='require("@/img/pmUion/passport-guide.png")'>
				</div>
			</div>
            <!-- <div @click="substep">下一步</div> -->

			<div   style="margin-top:5%" @click="substep">
                <button-sub btname="下一步" ></button-sub>
            </div> 
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
		 components: {buttonSub},
        props:['title'],
        methods:{
            substep(){
                this.$emit("listenType")
            }
        }
        
    }
</script>

<style lang="scss" scoped>
	.pt20{
		margin-top: 66px;
	}
	.photo-card {
		width: 562px;
		height: 420px;
		position: relative;
		background: rgba(238, 249, 255, 1);
		margin: 0 auto;
		img {
			display: block;
			width: 448px;
			height: 269px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	
	.photo-title-input-wrap {
		display: inline-flex;
		position: relative;
		padding-bottom: 38px;
		margin-top: 20px;
		input {
			height: 54px;
			line-height: 52px;
			box-sizing: border-box;
			border: 1px solid #CCCCCC;
			width: 562px;
			padding-right: 140px;
			padding-left: 20px;
			background: rgba(248, 248, 248, 1);
		}
		.photo-btn-wrap {
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
	}
	
	.passport-title {
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
	
	.pb98 {
		padding-bottom: 98px;
	}
</style>