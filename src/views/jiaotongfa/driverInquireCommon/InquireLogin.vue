<template>
	<div class="wrap"> 
	<!-- 第一步：阅读须知 -->
	<div  v-if="currentpage==1"
	style="display:flex;flex-direction:column;align-items:center;height:100%;">	
		<readme
			:readata="readata"
			class="wrap-read"
		>
		</readme>
		<div  @click="nextpage()" class="button1">
			<buttonsub btname="同意"></buttonsub>
		</div>
		<!-- <div  @click="nextpage1()" class="button1">
			<buttonsub btname="同意"></buttonsub>
		</div> -->
	</div>
	<!-- 第二步：填写驾驶证号和档案编号 -->
    <div class="wrap-l" v-if="currentpage==2">
		<div class="wrap-com">
			<div class="con1">
				<div>驾驶证号:</div>
				<el-input placeholder="输入驾驶证上的驾驶证号" 
				v-model="input1" 
				clearable>
				</el-input>
				<!-- <div class="sub-icon"  @click="isDialogShow(0)"></div> -->
			</div>
			<div class="con1">
				<div>档案编号:</div>
				<el-input placeholder="输入驾驶证上的档案编号" 
				v-model="input2" 
				clearable>
				</el-input>
				<!-- <div class="sub-icon"  @click="isDialogShow(0)"></div> -->
			</div>
			<div  @click="sub()" class="button2">
			     <buttonsub btname="同意"></buttonsub>
		    </div>
			

		</div>

			
	</div>
		
		
	
	
		
	
    
	


	

    </div>
</template>

<script>
import buttonsub from "@/components/base/buttonSub"
import readme from "@/components/base/readme"
import axios from 'axios'
import { mapGetters } from 'vuex';
var readata=`1. 本一体机可查询广州市籍机动车在全国（除港澳台）及全国（除港澳台）机动车在广东省的交通违法；<br /> 2. 本一体机可处理广东省机动车在全国（除港澳台），及全国（除港澳台）机动车在广东省 的交通违法，且违法扣分不超过6分，罚款金额不超过200元； 3. 广东交警交通违法处理服务暂时仅面向广东驾驶人开放； 4. 对其他车辆违法进行违法确认时，记分将记入您的账户绑定的驾驶证上，一经确认，无法撤销`;
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
	  components:{
			buttonsub,
			readme
	  },
	  computed: {
		...mapGetters([
		'getDetail'
		])
     },
	  data() {
            return {
				currentpage:1,//小步数
				readata,//阅读数据
				index:0,
				Dialog:false,
				id:require('@/img/views/licensenum@2x.png'),
				id2:require('@/img/views/license@2x.png'),
				input1:"",
				input2:"",
				objlocal:''//本地存储数据 
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
		nextpage(){
            this.currentpage++
		},
		sub(){
			// /inteGration/api/jgyw/postLicenseInfo
			// https://www.easy-mock.com/mock/5b97bc01a7e9571f105d3ddd/ytj/driverInquireinfo
             this.$axios.post('https://www.easy-mock.com/mock/5b97bc01a7e9571f105d3ddd/ytj/driverInquireinfo',{
				 license_no:this.input1,
				 file_no:this.input2
			 })
				.then( (response)=> {
					//console.log(response);
					if(response.status="200"){
						
						this.objlocal=JSON.stringify(response.data.result)
						localStorage.setItem("temp1", this.objlocal)
						//console.log(JSON.parse(localStorage.getItem("temp1")).status)
						this.$store.commit("changeheadTabIndex",{count:1})
						
					}
				})
				.catch(function (response) {
					console.log(response);
				});

		  },
		  nextpage1(){
			  this.$store.dispatch("getjt")
		  }
    }
}
</script>
<style lang="scss">

.el-input__inner{
  width:17vw;
  font-size:24px;
}
.sub-title{
	@media screen and (max-width: 1200px){
		display:flex !important;
	}
}
</style>

<style lang="scss" scoped>
.wrap{
	height:100%;
}
.wrap-read{
	width:70%;
	height:70%;
	margin-top:10px;
	@media screen and (max-width: 1200px){
	  margin-top:100px;
		
	}
}
.button1{
	margin-top:10px;
	@media screen and (max-width:1200px){
		 margin-top:100px;
	}
}

.wrap-l{
	width:100%;
	display:flex;
	justify-content: center;
	align-items:center;
	height:100%;
	.wrap-com{
		width:60%;
	    .con1{
			display:flex;
			margin-bottom:5vh;
			>div:nth-of-type(1){
				width:40%;
				display:flex;
				align-items:center;
				justify-content: flex-end;
				margin-right:5px;
			}
	}
		.button2{
		  display:flex;
		  justify-content: center;
		}

	}
	
}
</style>
