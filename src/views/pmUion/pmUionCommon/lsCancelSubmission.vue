<template>
	<div class="ga-step0">
		<div v-show="cjStepForm0==0">
			<div class="passport-title passport-title1">
			请填写您的申报材料 300s
			</div>
			<div class="pm-box">
				<div class="flex-start flex-item-2">
					<div class="flex-start">
						<div class="label-wrap">
							<label>*</label>姓名
						</div>
						<div>
							<input type="text" placeholder="">
						</div>
					</div>
					<div class="flex-start flex-end">
						<div class="label-wrap">
							<label>*</label>证件号码
						</div>
						<div>
							<input type="text" placeholder="">
						</div>
					</div>
				</div>
				<div class="flex-start flex-item-2">
				<div class="flex-start">
					<div class="label-wrap">
						<label>*</label>联系电话
					</div>
					<div>
						<input type="text" placeholder="">
					</div>
				</div>
				</div>
				</div>
				<div class="pm-box">
				<div class="passport-title passport-title1 passport-title2">
				居住地址信息
				</div>
				<div class="flex-start flex-item-2 ">
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
							<select class="select-l">
								<option>请选择</option>
							</select>
						</div>
					</div>
				</div>
				<div class="flex-start flex-item-2 ">
					<div class="flex-start">
						<div class="label-wrap">
							<label>*</label>详细地址
						</div>
						<div>
							<input type="text" placeholder="">
						</div>
					</div>
					<div class="flex-start flex-end">
						<div class="label-wrap label-wrap-l">
							<label>*</label>派出所
						</div>
						<div>
							<select class="select-l">
								<option>请选择</option>
							</select>
						</div>
					</div>
				</div>
				<div class="flex-start flex-item-2 ">
					<div class="flex-start">
						<div class="label-wrap">
							<label>*</label>注销原因
						</div>
						<div>
							<select class="select-l">
								<option>请选择</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>		
		<div v-show="cjStepForm0==1">
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
					<img src="../../../img/pmUion/callback@2x.png">
				</div>
			</div>
		</div>
		<div v-show="cjStepForm0==2">
			<div class="crime-t-set">
			<div class="crime-t-title pb98">
				请放置好残疾人证注销申请表：
				</div>
				<img src="../../../img/passport/passport-guide.png">
			</div>
		</div>
		<div v-show="cjStepForm0==3">
			<div class="passport-title">
				&nbsp;
			</div>
			<div class="sure-form-title">
				注销凭证
			</div>
			<table>
				<tbody>
					<tr>
						<th colspan="3">残疾人证注销</th>
					</tr>
					<tr>
						<td>业务编号：834763645637</td>
						<td>办理日期：2018-12-22 15:22</td>	
						<td>申请人：周文涛</td>
					</tr>
					<!--<tr>
						<td colspan="3">业务状态：提交审核</td>	
					</tr>-->
					<tr>
						<td colspan="3">电子签名：
							<div class="autograph">张三</div>
						</td>	
					</tr>
				</tbody>
			</table>
		</div>
		<div v-show="cjStepForm0==4">
			<div class="passport-title">
				&nbsp;
			</div>
			<div class="sure-form-title">
				申报进度
			</div>
			<table>
				<tbody>
					<tr>
						<th colspan="2">残疾人证注销</th>
					</tr>
					<tr>
						<td>业务编号：834763645637</td>
						<td>办理日期：2018-12-22 15:22</td>	
					</tr>
					<tr>	
						<td>申请人：周文涛</td>
						<td><label>申请中...</label><label class="red">办理失败</label></td>
					</tr>
					<tr>
						<td colspan="2" class="red">
							办理反馈：资料上传不清晰
						</td>
					</tr>
					<!--<tr>
						<td colspan="3">业务状态：提交审核</td>	
					</tr>-->
				</tbody>
			</table>
		</div>
		<layout-dialog :isDialogShow="isDialogShow">
			<div class="lscancel-dialog">
			<div class="lscancel-dialog-t">
				校验通过
			</div>
			<div class="lscancel-dialog-b">
				<div>
					下一步 5s
				</div>
			</div>
			</div>
		</layout-dialog>
		<layout-dialog :isDialogShow="isDialogShowErr">
			<div class="lscancel-dialog">
			<div class="lscancel-dialog-t red">
				提交失败，请重新输入！
			</div>
			<div class="lscancel-dialog-b">
				<div>
					确定 5s
				</div>
			</div>
			</div>
		</layout-dialog>
		<layout-dialog :isDialogShow="isDialogShowScansucc">
			<div class="lscancel-dialog">
			<div class="lscancel-dialog-t">
				认证完成！
			</div>
			<div class="lscancel-dialog-b">
				<div>
					下一步
				</div>
			</div>
			</div>
		</layout-dialog>
	</div>
</template>

<script>
	import layoutDialog from '@/components/layoutDialog.vue'
	import  '@/css/flex.scss'
//	import layoutDialog from '@/components/layoutDialog.vue'
	export default{
		name:'passport',
		components:{
			layoutDialog
		},
		data(){
			return {
				passPortSelIndex:0,
				isPassPortStep0Show:true,
				secCount:10,
				cjStepForm0:4,
				//提交成功
				isDialogShow:false,
				//错误提示弹窗
				isDialogShowErr:false,
				//扫描成功弹窗
				isDialogShowScansucc:true
			}
		},
		methods:{
			passPortSel(id){
				this.passPortSelIndex=id
				this.isPassPortStep0Show=true
				this.secCountFn()
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
	.red{
		color:#DA2D2D;
	}
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
	.lscancel-dialog{
		width: 100%;
		height: 100%;
		.lscancel-dialog-t{
			font-size: 28px;
			color: #333333;
			line-height: 28px;
			font-weight: bold;
			padding-top: 67px;
			padding-left: 48px;
			padding-right: 48px;
			padding-bottom: 75px;
			text-align: left;
		}
		.red{
			color: #DE3434;
		}
		.lscancel-dialog-b{
			padding: 0 48px;
			text-align: right;
			div{
				display: inline-block;
				text-align: center;
				width:180px;
				height:56px;
				line-height: 56px;
				font-size:24px;
				border-radius:5px;
				background: #0070E0;
				color: #FFFFFF;
			}
		}
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
	table td{
		border: 1px solid #e5e5e5;
		padding: 0 20px;
		text-align: left;
	}
	table th{
		border: 1px solid #e5e5e5;
		padding: 0 20px;
		text-align: center;
		font-weight: normal;
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
	.passport-title1{
		font-weight: bold;
	}
	.passport-title2{
		padding-left: 0!important;
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
			width: 195px;
			border: 1px solid #CCCCCC;
			height:54px;
			font-size: 24px;
			background:rgba(248,248,248,1);
			box-sizing: border-box;
			line-height: 52px;
			margin-left:10px;
			padding: 0 20px;
		}
		.select-l{
			width: 412px;
		}
		.select-flow{
			margin-left: 20px;
		}
		select option{
			width: 100%;
			line-height:54px ;
			font-size: 24px;
		}
		.flex-item-2{
			padding-top:0!important;
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
			height: 420px;
			margin: 0 auto;
		}
	}
</style>