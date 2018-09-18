<template>
	<div>   
       <div class="flex-start-end hospital-search-wrap">
       	<div class="flex-start">
       		<div>
       			选择地区&nbsp;:
       		</div>
       		<div>
       			<select>
       				<option>肇庆市</option>
       			</select>
       		</div>
       		<div>
       			<select>
       				<option>区</option>
       			</select>
       		</div>
       	</div>
       	<div>
       		<div class="flex-start">
       			<div>
       				<input type="text" placeholder="搜索医院">
       			</div>
       			<div class="hospital-search-btn">
       				
       			</div>
       		</div>
       	</div>
       </div>
       <div class="search-result-table">
       	<table>
       		<thead>
       			<tr>
       				<th>
       				医院
       			</th>
       			<th>
       				定点险种
       			</th>
       			<th>
       				医院等级
       			</th>
       			<th>
       				详细地址
       			</th>
       			</tr>
       		</thead>
       		<tbody>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       			<tr>
       				<td>
       					广州第一人民医院
       				</td>
       				<td>
       					生育保险
       				</td>
       				<td>
       					三甲
       				</td>
       				<td>
       					广州市天河北
       				</td>
       			</tr>
       		</tbody>
       	</table>
		<div class="but">
			<button>下一页</button>
			<button>上一页</button>
			</div>
       </div>
	  
    </div>
	
</template>

<script>
import  '@/css/flex.scss'
export default{
	name:'hospitalSearch',
	data(){
		return{
		}
	}
}
</script>
<style lang="scss" scoped>
.hospital-search-wrap{
	position: relative;
	padding: 30px 40px;
	div{
		line-height: 54px;
		font-size: 24px;
		color:rgba(51,51,51,1);
	}	
	select{
		margin-left: 28px;
		line-height: 54px;
		// color:rgba(51,51,51,1);
		height: 54px;
		outline: none;
		font-size: 24px;
		padding: 0 20px;
		background:rgba(248,248,248,1);
		border: 1px solid #CCCCCC;
		option{
			line-height: 54px;
			font-size: 24px;
		}
	}
	input{
		width:480px;
		height:52px;
		background:rgba(248,248,248,1);
		border-top-left-radius:8px;
		border-bottom-left-radius:8px;
		font-size: 24px;
		box-sizing: border-box;
		border: 1px solid #CCCCCC;
		padding: 0 20px;
		border-right:0;
		outline: none;
	}
	.hospital-search-btn{
		background: url(../../../img/hospital/hospital-search.png);
		background-repeat: no-repeat;
		background-size: 100%;
		width: 98px;
		height: 54px;
		margin-left: -4px;
		margin-top: 2px;
	}
}
.search-result-table th,.search-result-table td{
		padding: 21px;
		text-align: left;
		line-height: 26px;
		color: #333333;
		font-size: 24px;
}
.search-result-table{
	width: 100%;
	height: 570px;
	overflow-y: scroll;
	table{
		width: 100%;
		thead tr th:first-child{
			padding-left: 42px;
		}
		tbody tr td:first-child{
			padding-left: 42px;
		}
		thead th{
			background:rgba(206,229,249,1);
		}
	//  tbody tr:nth-of-type(3n){
	// 	background:rgba(255,255,255,1);
	// 	 }
		tbody tr:nth-of-type(2n){
			background:rgba(234,243,251,1);
		}
	}
	
}
.but {
    margin-top: 20px;
    button{
		background:#008cff;
		width: 180px;
		height: 60px;
		border-radius: 25px;
		margin-right: 15px;
		color: #fff;
		font-size: 24px;
}}
    
</style>
