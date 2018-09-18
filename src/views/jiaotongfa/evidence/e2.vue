<template>
    <div>
        <div class="titel-b">请输入您的证件号码</div>

         <div class="from-w">
             <div class="d-lin">驾驶证编号</div>
             <div class="inp-f"><input type="text" placeholder="输入驾驶证上的驾驶证号"> <div class="sub-icon" @click="isDialogShow(0)"><i class="el-icon-question"></i>示例</div></div>
             <div class="d-lin">档案编号</div>
             <div><input type="text" placeholder="输入驾驶证上的档案编号"> <div class="sub-icon" @click="isDialogShow(1)"><i class="el-icon-question"></i>示例</div></div>
             <div class="butt-w"><button>提交</button></div>
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
import layoutHeart from '@/components/layoutHeart'
import layoutSubject from "@/components/layoutSubject"
import layoutfoot from "@/components/layoutfoot"
export default{
	//name:'crimeTestifyFn',
	components:{layoutSubject,layoutHeart,layoutfoot},
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

<style  lang="scss" scoped>
.titel-b{
    width: 90%;
    margin: 0 auto;
    font-size: 28px;
    color: #333;
    text-align: left;
    margin-top: 45px;
    margin-bottom: 25px;
}
.from-w{
    width: 530px;
    margin: 0 auto;
    input{
        width:412px;
        height:54px;
        background:rgba(248,248,248,1);
        border:1px solid rgba(204,204,204,1);
        float: left;
        font-size: 24px;
        color: #666;
        padding-left: 5px;
    }
}
.d-lin{
    font-size: 28px;
    color: #333;
    text-align: left;
    height: 80px;
    line-height: 80px;
    width: 100%;
    clear: both;   
}
.inp-f{
    width: 100%;
}
.sub-icon{
	width: 80px;
	float: left;
	font-size:24px;
	color:rgba(0,112,224,1);
	margin-left: 10px;
    margin-top:10px;
	cursor: pointer;
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
    .butt-w{
        width: 100%;
        clear: both;
        button{
            width:154px;
            height:56px;
            background:rgba(0,140,255,1);
            border-radius:25px;
            margin-top: 50px;
            color: #fff;
        }
    }

</style>
