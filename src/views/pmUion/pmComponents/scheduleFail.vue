<template>
    <div>
        
			<div class="sure-form-title">
				申报进度
			</div>
			<table>
				<tbody>
					<tr>
						<td colspan="2">残疾人证申请办理</td>
					</tr>
					<tr>
						<td>业务编号：834763645637</td>
						<td>办理日期：2018-12-22 15:22</td>	
					</tr>
					<tr>
						<td>申请人：周文涛</td>
						<td>业务状态：<span style="color:red">办理失败</span></td>	
					</tr>
                    <tr>
						<td colspan="2">办理反馈：<span style="color:red">不符合办理条件</span></td>
					</tr>
				</tbody>
		    </table>
           

    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
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

<style scoped lang="scss">
	.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
    .sure-form-title{
		font-size: 32px;
		color: #333333;
		padding-bottom: 50px;
		margin-top:4vh;
	}
	table{
		width: 1180px;
		margin: 0 auto;
		line-height: 60px;
		
	}
	table td{
		border: 1px solid #e5e5e5;
        
        
	}
		 @media screen and (max-width:1200px){
		 table td{
			font-size: 2.2vh;
			line-height: 3vh;
	
		 }
	 }
tbody{
            text-align:left;
        }
tr:nth-of-type(1){
     text-align:center;
}
</style>