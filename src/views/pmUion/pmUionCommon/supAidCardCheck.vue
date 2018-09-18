<template>
	<div class="ga-step0">
		<div class="crime-t-set" v-show="supAidStepForm==0">
			<div class="crime-t-title pb98">
			请插入你的残疾人证 {{secCount}}s
			</div>
			<img src="../../../img/pmUion/idCard0@2x.png">
		</div>
		<div v-show="supAidStepForm==1">
			<div class="crime-t-set">
				<div class="crime-t-title pt62">
					请选择您的办理方式 60s
				</div>
			</div>
				<div class="passport-type-wrap">
					<div class="passport-type">
						<div v-for="(item,index) in tabs" @click="toDetail(item.id)">
							{{item.title}}
						</div>
					</div>
				</div>
		</div>
		<div v-show="supAidStepForm==2">
			<div class="passport-title ">
			请放置好您的录取通知书
			</div>
			<div class="pm-box pt98">
				<div class="pm-box-content">
					<img src="../../../img/pmUion/supportAidStudent.png">
				</div>
			</div>
		</div>
		<div v-show="supAidStepForm==3">
			<div class="passport-title ">
			请放置好您的学生注册证明
			</div>
			<div class="pm-box pt98">
				<div class="pm-box-content">
					<img src="../../../img/pmUion/supportAidStudent.png">
				</div>
			</div>
		</div>
		<div v-show="supAidStepForm==4">
			<div class="passport-title ">
			请放置好您的南粤扶残助学工程申请书
			</div>
			<div class="pm-box pt98">
				<div class="pm-box-content">
					<img src="../../../img/pmUion/supportAidStudent.png">
				</div>
			</div>
		</div>
		<div v-show="supAidStepForm==5">
			<div class="passport-title pb98">
			请放置好您的助学收款的银行账户
			</div>
			<div class="flex-start flex-item-2 table-wrap">
					<div class="flex-start">
						<div>
								<label>*</label>
								姓名
							</div>
							<div>
								<input type="text">
							</div>
					</div>
					<div class="flex-start">
						<div>
								<label>*</label>
								开户行
							</div>
							<div>
								<select>
									<option disabled="disabled">
										请选择
									</option>
									<option>
										广发银行
									</option>
									<option>
										广发银行
									</option>
								</select>
							</div>
					</div>
				</div>
			<div class="flex-start flex-item-2 table-wrap">
					<div class="flex-start">
						<div>
								<label>*</label>
								银行卡号
							</div>
							<div>
								<input type="text">
							</div>
					</div>
					<div class="flex-start">
						<div>
								<label>*</label>
								联系电话
							</div>
							<div>
								<input type="tel">
							</div>
					</div>
				</div>
		</div>
		<div v-show="supAidStepForm==6">
			<div class="passport-title">
				&nbsp;
			</div>
			<div class="sure-form-title">
				申报凭证
			</div>
			<table>
				<tbody>
					<tr>
						<th colspan="3">残疾人证申请办理</th>
					</tr>
					<tr>
						<td>业务编号：834763645637</td>
						<td>办理日期：2018-12-22 15:22</td>	
						<td>申请人：周文涛</td>
					</tr>
					<tr>
						<td colspan="3">业务状态：提交审核</td>	
					</tr>
					<tr>
						<td colspan="3">电子签名：
							<div class="autograph">张三</div>
						</td>	
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name:'passport',
		data(){
			return {
				secCount:10,
				supAidStepForm:1,
				tabs:[{
					title:"在线申报",
					id:0
				},{
					title:"申报进度",
					id:1
				}]
			}
		},
		methods:{
			toDetail(id){
				if(id==1){
					this.$store.state.home.isSelfJump=true
					this.$store.state.home.headTabIndex=2					
					this.$gotoPages('/pmUion/supAidProgress')
				}else{
					//控制显示当前资料
					this.supAidStepForm=1
				}
			},
			secCountFn(){
				var _this=this	
				var inv=setInterval(function(){
					_this.secCount--
					if(_this.secCount==0){
						clearInterval(inv)
					}
				},1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
.autograph{
	text-align: center;
	font-size: 30px;
	height: 160px;
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
	.table-wrap{
		margin: 0 100px;
		input,select,option{
			width: 412px;
			height: 54px;
			line-height: 54px;
			box-sizing: border-box;
			font-size: 24px;
			padding: 0 20px;
			outline: none;
			background:rgba(248,248,248,1);
			border:1px solid rgba(204,204,204,1);
		}
		div{
			color: #333333;
			font-size: 24px;
		}
		label{
			color:#FF0000 ;
		}
	}
	.table-wrap .flex-start{
		display: inline-flex;
		margin-bottom: 52px;
	}
	.table-wrap .flex-start >div:first-child{
		width: 120px;
		padding-right: 20px;
		display: inline-block;
		text-align: right;
	}
	.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
	
	.pm-box{
		margin: 0 auto;
		margin-top: 62px;
		text-align: left;
		width: 736px;
		height: 426px;
		background: #E7F1FB;
		position: relative;
		.pm-box-content{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 360px;
			height: 240px;
			background: rgba(248,251,253,1);
		}
		.pm-box-content img{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 86px;
			height: 120px;
			display: block;
		}
	}
	.crime-t-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 176px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
	}
	.crime-t-type{
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
	.crime-t-set{
		img{
			display: block;
			width: 560px;
			height: auto;
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
	}
</style>