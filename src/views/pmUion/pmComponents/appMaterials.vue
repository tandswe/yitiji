//填写您的申报材料
<template>
		<div>
			<div class="passport-title">
			    {{title}}
			</div>
			<div class="pm-box">
				<div class="flex-start">
					<div class="label-wrap">
						<label>*</label>申报名称
					</div>
					<div style="margin-left:10px;" class="text1">
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
				</div>
				<div class="flex-start flex-item-2">
					<div class="flex-start">
						<div class="label-wrap">
							<label>*</label>姓名
						</div>
						<div style="margin-left:10px;">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="flex-start flex-end">
						<div class="label-wrap">
							<label>*</label>联系电话
						</div>
						<div style="margin-left:10px;">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</div>
				</div>
				<div class="flex-start">
					<div class="label-wrap">
						<label>*</label>证件号码
					</div>
					<div class="text1" style="margin-left:10px;">
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
				</div>
				<div class="flex-start flex-item-2">
					<div class="flex-start">
						<div class="label-wrap">
							<label>*</label>邮寄地址
						</div>
						<div>
							<select>
								<option>
									广州
								</option>
							</select>
							<select class="select-flow">
								<option>
									天河
								</option>
							</select>
						</div>
					</div>
					<div class="flex-start flex-end">
						<div class="label-wrap label-wrap-l">
							<label>*</label>街道（乡/镇）
						</div>
						<div>
							<select>
								<option>请选择</option>
							</select>
						</div>
					</div>
				</div>
				<div class="flex-start">
					<div class="label-wrap">
						<label>*</label>详细地址
					</div>
					<div class="text1" style="margin-left:10px;">
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
				</div>
			</div>

            <div @click="substep"  style="margin-top:1vh">
			    <button-sub btname="提交"></button-sub>
		    </div>
		</div>	
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
		props:["title"],
        components:{
		  buttonSub
        },
        methods:{
			substep(){
			this.$emit("listenType")
		  }
		}
    }
</script>
<style>
.el-input{
    display:flex;
}
.el-input__inner{
   
    flex-grow: 1;
}
</style>
<style lang="scss" scoped>
.text1 {
    flex-grow:1;
}
    .red{
    	color: #E52222;
    }
	.sure-form-title{
		font-size: 32px;
		color: #333333;
		padding-bottom: 50px;
	}
	table{
		width: 1180px;
		margin: 0 auto;
		line-height: 60px;
		
	}
	table td,table th{
		font-weight: normal;
		border: 1px solid #e5e5e5;
	}
	table td{
		text-align: left;
		padding: 0 20px;
	}
	.pt20{
		margin-top: 66px;
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
	}
	.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
	}
	.pm-box{
		margin: 0 100px;
		text-align: left;
	/*	height: 570px;*/
		input{
			width:1051px;
			height:54px;
			line-height: 52px;
			border: 1px solid #CCCCCC;
			background:rgba(248,248,248,1);
			box-sizing: border-box;
			padding: 0 20px;
			margin-left:10px ;
			font-size: 24px;
		}
		select{
			width: 192px;
			border: 1px solid #CCCCCC;
			height:54px;
			background:rgba(248,248,248,1);
			box-sizing: border-box;
			line-height: 52px;
			margin-left:10px;
			padding: 0 20px;
            border-radius: 5px;
		}
		.select-flow{
			margin-left: 20px;
		}
		select option{
			width: 100%;
			line-height:54px ;
		}
		.flex-item-2{
			padding-top:0;
		}
		.flex-item-2 input{
			width: 412px;
		}
		.flex-start{
			padding-top: 32px;
		}
		.flex-start div{
			font-size: 24px;
		}
		.flex-start div:first-child{
			font-size: 24px;
			color: #333333;		
		}
		.flex-start .label-wrap{
			width: 120px;
			text-align: right;
			label{
				color: #FF0000;
			}
		}
		.flex-start .label-wrap-l{
			width: 160px;
		}
	}
	.passport-set{
		img{
			display: block;
			width: 560px;
			height: 420px;
			margin: 0 auto;
		}
	}
	.passport-type{
		padding: 0 60px;
		text-align: center;
		div{
			width: 460px;
			height: 80px;
			line-height: 80px;
			margin: 0 auto;
			margin-bottom: 30px;
			color: #FFFFFF;
			font-size: 28px;
			background: #0070E0;
		}
	}
	.passport-type-wrap{
		position: relative;
		padding-top: 150px;
	}
	.passport-type-wrap .passport-type{
		/*position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%,-50%);*/
	}
</style>