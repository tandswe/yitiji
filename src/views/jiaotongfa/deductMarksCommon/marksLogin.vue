<template>
	<div class="wrap">  
		<div class="wrap-l">
        <el-col :span="18">
			<div class="sub-title"><h3>输入驾驶证号</h3><div class="sub-icon"  @click="isDialogShow(0)"></div></div>
			<el-input placeholder="输入驾驶证上的驾驶证号"  clearable></el-input>
		</el-col>

		<el-col :span="18">
			<div class="sub-title"><h3>输入档案编号</h3><div class="sub-icon" @click="isDialogShow(1)"></div></div>
			
			<el-input placeholder="输入驾驶证上的档案编号"  clearable></el-input>
			
		</el-col>

		</div>
		<div class="wrap-r">
			1. 本一体机可查询广州市籍机动车在全国（除港澳台）及全国（除港澳台）机动车在广东省的交通违法；
			2. 本一体机可处理广东省机动车在全国（除港澳台），及全国（除港澳台）机动车在广东省 的交通违法，且违法扣分不超过6分，罚款金额不超过200元；
			3. 广东交警交通违法处理服务暂时仅面向广东驾驶人开放；
			4. 对其他车辆违法进行违法确认时，记分将记入您的账户绑定的驾驶证上，一经确认，无法撤销
		</div>
	<div v-show="Dialog" class="dialog-wrap">
	  <div class="dialog-shadow fadeIn"  @click="hideDialog"></div>
		<div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">		
			<div class="dialog-content">
			 <img :src="id"   v-show="index==0">
			 <img :src="id2"  v-show="index==1">
			</div>
		</div>
	</div>
			
    </div>
</template>

<script>

export default{
	//name:'crimeTestifyFn',
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
				index:0,
				Dialog:false,
				id:require('@/img/views/licensenum@2x.png'),
				id2:require('@/img/views/license@2x.png')      
            }
        },
	 methods: {
		 isDialogShow:function(index){
			 this.index=index
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
.wrap{
    padding-top:48px;
	text-align: left;}
.wrap-l{
		width: 650px;
		float: left;
		margin-left: 98px;
	}
.wrap-r{
		width: 430px;
		float: right;	
		background:rgba(231,241,251,1);
        border-radius:8px;
		margin-right: 98px;
		line-height:36px;
		padding: 40px 20px;
		color:rgba(51,51,51,1);
		font-size: 24px;
	}
.sub-title{
	font-size: 28px;
	color: #333;
	line-height: 72px;
	margin-top: 50px;
}
.sub-title h3{
		float: left;
}
.sub-icon{
	width: 80px;
	float: left;
	font-size:24px;
	color:rgba(0,112,224,1);
	margin-left: 10px;
	cursor: pointer;
}
.el-icon-question{
	margin-right: 5px;
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
