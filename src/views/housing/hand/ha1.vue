<template>
	<div class="wrap">  
		<div class="wrap-l">
        <div class="sub-title"><h3>请输入您的证件号码</h3></div>
		<!-- <span>身份证和公积金账号可任意输入一个即可</span> -->
        <el-col :span="18">
			<div class="sub-title"><h3>身份证号</h3></div>
			<!-- <div class="sub-icon"  @click="isDialogShow(0)"><i class="el-icon-question"></i>示例</div> -->
			<el-input placeholder="输入身份证号码"  clearable></el-input>
		</el-col>
		<!-- <el-col :span="18">
			<div class="sub-title"><h3>档案编号</h3><div class="sub-icon" @click="isDialogShow(1)"><i class="el-icon-question"></i>示例</div></div>			
			<el-input placeholder="输入公积金账号"  clearable></el-input>	
		</el-col> -->
        <el-col :span="18">
			<div class="sub-title"><h3>用户密码</h3></div>			
			<el-input placeholder="输入公积金登录密码"  ></el-input>	
		</el-col>

		</div>
		<div class="wrap-r">
			<p>1.公积金账号长度为10位数，如公积金存折上账号为：1-1234567890 这种格式的，则输入账号为：1234567890即可，即横线后10位。如果公积金上号码为10位数，直接输入即可查询。如果身份证上最后以为为x的，请输入大写的x。</p>
            <p>2.住房公积金信息查询登入必须输入正确的公积金账号或身份证号码，以及登录密码</p>
            <p>3.数据每日更新</p>
            <p>4.忘记密码的请咨询热线12329</p>
            <p>5.初始密码为公积金账号最后6位</p>
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
	<div class="ha-butt"><button>查询</button></div>
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
	line-height: 50px;
	margin-top: 50px;
    span{
    width:70%;
    float: left;
    font-size:18px;
    color:rgba(204,204,204,1);
    line-height:36px;
    }
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
.ha-butt{
    width:100%;
    margin: 50px auto;
    width: 10%;
    clear: both;
    button{
        width:154px;
        height:56px;
        background:rgba(0,140,255,1);
        border-radius:25px;
        color: #fff;
    }
}
</style>
