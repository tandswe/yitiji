<template>
	<div>
        <h1>请输入您的证件号码</h1>
        <div class="coding">
            <h3>驾驶证编号</h3>
            <div class="sub-icon">
                <el-input placeholder="输入驾驶证上的驾驶证号"  clearable></el-input>
                <span class="iconStyle" @click="isDialogShow(0)"><i class="el-icon-question"></i>示例</span></div>
        </div>
        <div class="coding">
            <h3>档案编号</h3>
            <div class="sub-icon">
                <el-input placeholder="输入驾驶证上的档案编号"  clearable></el-input>
                <span class="iconStyle" @click="isDialogShow(1)"><i class="el-icon-question"></i>示例</span></div>
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
	<div @click="settypeId">
		<button-sub btname="提交"></button-sub>
	</div>
	</div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
	export default {
        props:{

        },
		components:{
		  buttonSub
		},
		data(){
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
		settypeId(){
			this.$emit("listenType","OK")
		}
    }
}
</script>

<style lang="scss" scoped>
h1{
    text-align: left;
    margin: 40px 0 0 98px;
}
h3{
    margin-bottom: 30px;
}
 .coding{
     text-align: left;
    margin: 58px auto;
    width: 500px;
     .sub-title{
	font-size: 28px;
	color: #333;
	line-height: 72px;
	margin-top: 50px;
}

.sub-icon{
    position:relative;
    color: #0070E0;
    .iconStyle{
        position:absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%)
    }
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
    }
</style>