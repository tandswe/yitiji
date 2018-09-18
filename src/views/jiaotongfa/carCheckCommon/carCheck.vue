<template>
	<div class="wrap" style="diplay:flex;flex-direction:column"> 
			<div>
				<div class="wrap-l">
					<el-row class="elIpStyle">
						<el-col :span="8">
						<h3>车辆类型</h3>
							<el-select v-model="value" placeholder="请选择">
							<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
							</el-option>
						</el-select>
						</el-col>
						<el-col :span="8">
						<h3>车牌地</h3>
						<el-input placeholder="车牌地" clearable></el-input>
						</el-col >
						<el-col :span="8">
						<h3>车牌号码</h3>
						<el-input placeholder="输入车牌号" v-model="input1" clearable></el-input>
						</el-col>
					</el-row>
					
				<el-col :span="18">
					<div class="sub-title"><h3>发动机号</h3></div>
					<el-input placeholder="请输入发动机号后四位数字" v-model="input2" clearable></el-input>
				</el-col>

				<el-col :span="18">
					<div class="sub-title"><h3>车架号</h3></div>
					
					<el-input placeholder="请输入车架号后四位数字"  v-model="input3" clearable></el-input>
					
				</el-col>

				</div>
				<div class="wrap-r">
					1. 本一体机可查询广州市籍机动车在全国（除港澳台）及全国（除港澳台）机动车在广东省的交通违法；
					2. 本一体机可处理广东省机动车在全国（除港澳台），及全国（除港澳台）机动车在广东省 的交通违法，且违法扣分不超过6分，罚款金额不超过200元；
					3. 广东交警交通违法处理服务暂时仅面向广东驾驶人开放；
					4. 对其他车辆违法进行违法确认时，记分将记入您的账户绑定的驾驶证上，一经确认，无法撤销
				</div>
			</div> 
			<div @click="sub" style="width:100%;display:flex;justify-content:center;margin-top:2vh">
				
				<buttonsub btname="提交"></buttonsub>
			</div>
    </div>
</template>

<script>
import buttonsub from "@/components/base/buttonSub"
require('@/js/jquery.json2xml.js')
require('@/js/jquery.xml2json.js')
//----json-------
var json = {
  "alexa": {
    "@attributes": {
      "ver": "0.9",
      "url": "http://coursesweb.net/",
      "home": "0",
      "aid": "="
    },
    "#text": "",
    "sd": [
      {
        "@attributes": {
          "title": "a",
          "host": "coursesweb.net"
        },
        "#text": "",
        "title": {
          "#text": "CoursesWeb: php, mysql, html, css, javascript, ajax, jquery, actionscript, flash"
        },
        "linksin": {
          "@attributes": {
            "num": "1102"
          }
        },
        "speed": {
          "@attributes": {
            "pct": "51"
          },
          "#text": "4578"
        }
      },
      {
        "#text": "",
        "popularity": {
          "#text": "5777"
        },
        "reach": {
          "@attributes": {
            "rank": "5952"
          }
        },
        "rank": {
          "@attributes": {
            "url": "http://coursesweb.net/"
          },
          "#text": "6667"
        }
      }
    ]
  }
};
var xml_content = $.json2xml(json);
//console.log(xml_content);
//--------xml----------
var xmlstr = `<alexa ver="0.9" url="http://coursesweb.net/" home="0" aid="=">  
  <sd title="a" host="coursesweb.net">  
    <title>CoursesWeb: php, mysql, html, css, javascript, ajax, jquery, actionscript, flash</title>  
    <linksin num="1102"/>  
    <speed pct="51">4578</speed>  
  </sd>  
  <sd>  
    <popularity>5777</popularity>  
    <reach rank="5952"/>  
    <rank url="http://coursesweb.net/">6667</rank>  
  </sd>  
</alexa>`; 
 
var json_obj = $.xml2json(xmlstr);
//console.log(json_obj);
export default{
	   components:{
           buttonsub
	   },
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
				setdata:'000000',
				json,
				index:0,
				Dialog:false,
				id:require('@/img/views/licensenum@2x.png'),
				id2:require('@/img/views/license@2x.png'),
				options: [{ 
				value: '01',
				label: '大型汽车'
				}, {
				value: '02',
				label: '小型汽车'
				}, {
				value: '05',
				label: '境外汽车'
				}, {
				value: '06',
				label: '外籍汽车'
				}, {
				value: '07',
				label: '两、三轮摩托车'
				}, {
				value: '11',
				label: '境外摩托车'
				}, {
				value: '12',
				label: '外籍摩托车'
				}, {
				value: '15',
				label: '挂车'
				}, {
				value: '16',
				label: '教练车'
				}, {
				value: '20',
				label: '临时入境汽车'
				}, {
				value: '21',
				label: '临时入境摩托车'
				}, {
				value: '22',
				label: '临时行驶汽车'
				}, {
				value: '23',
				label: '公安警车'
				}, {
				value: '26',
				label: '香港入境车'
				}, {
				value: '27',
				label: '澳门入境车'
				}, {
				value: '99',
				label: '其他'
				}],
				value:'',//车辆类型
				label:'',
				input1:'',//车牌号码
				input2:'',
				input3:'', //车架号
				
				
            }
		},
		watch:{
		  setdata(curVal,oldVal){
　　　　　　　　　　console.log(curVal,oldVal);
　　　　　　　　},
		},
		computed:{

		},
		created(){
			setTimeout(()=>{
                this.setdata="33333"
			},2000)

		},
		mounted(){
			//console.log($.json2xml(this.json))
			
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
		sub(){
			 
			 localStorage.setItem("temp2",JSON.stringify({
				 plate_no:this.input1,//车牌号码
				 car_type:this.value,
				 eng_no:this.input2,//发动机号
				 clsbdh:this.input3//车架号
				 
				 }))
			
             this.$axios.post('/inteGration/api/jgyw/postCarInfo',{
				 plate_no:this.input1,//车牌号码
				 car_type:this.value,
				 eng_no:this.input2,
				 
				 clsbdh:this.input3//车架号
				 //hphm:this.input4, //车牌地
                 
				
			 })
				.then(function (response) {
					console.log(response);
				})
				.catch(function (response) {
					console.log(response);
				});

          }
				
    }
}
</script>
<style lang="scss">
.elIpStyle{
		.el-input__inner{
		//width: 165px;
		font-size:20px;
	}

	h3{
		margin-bottom:30px;
	}

}
.el-input--suffix .el-input__inner{
	font-size:20px;
}
</style>


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

