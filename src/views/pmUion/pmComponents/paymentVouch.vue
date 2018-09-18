<template>
    <div>
        <div class="passport-title">
				&nbsp;
			</div>
        <div class="sure-form-title">
           {{title}}
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
        <div @click="substep"  style="margin-top:2vh">
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

<style scoped>
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
    	.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
	.autograph{
		text-align: center;
		font-size: 30px;
		height: 160px;
	}
</style>