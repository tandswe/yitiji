<template>  
<div>
      <layoutHeart></layoutHeart>
      <div class="main-center"><p>医保账户消费查询打印</p></div>
       <div class="entry-warp">
       <div class="flex-start-end hospital-search-wrap">
    
       </div>
       <div class="search-result-table">
       	<table>
       		<thead>
       			<tr>
       			<th>全选</th>
       			<th>月份</th>
       			<th>类别</th>
                <th>医院名称</th>
       			<th>总费用</th>
       			<th>个人账户支出</th>
                <th>统筹账户支出</th>
       			<th>备注</th>
       			</tr>
       		</thead>
       		<tbody>
       			<tr>
                    <td> <input type="checkbox" /></td>
       				<td>2018-08</td>
       				<td>2000</td>
       				<td>广州市第一人民医院</td>
                    <td>1800</td>
       				<td>2000</td>
       				<td>2000</td>
       				<td>测试测试</td>
       			</tr>
       		<tr>
                    <td><input type="checkbox" /></td>
       				<td>2018-08</td>
       				<td>2000</td>
       				<td>广州市第一人民医院</td>
                    <td>1800</td>
       				<td>2000</td>
       				<td>2000</td>
       				<td>测试测试</td>
       			</tr>
                   <tr>
                    <td><input type="checkbox" /></td>
       				<td>2018-08</td>
       				<td>2000</td>
       				<td>广州市第一人民医院</td>
                    <td>1800</td>
       				<td>2000</td>
       				<td>2000</td>
       				<td>测试测试</td>
       			</tr>
       		
       		</tbody>
       	</table>
		
       </div>


      </div>
    <layoutfoot></layoutfoot>
 </div>
      
</template>

<script>
import layoutHeart from '@/components/layoutHeart'
import layoutfoot from "@/components/layoutfoot"
    export default {
        components:{
            layoutHeart,
            layoutfoot
        },
        // data() {
        //     return {
        //         HKtext:['医保信息查询打印', '社保清单打印'],
              
        //         path: '/ssprinting/psetp'
        //     }
        // },
      
  }
</script>

<style lang="scss" scoped>
.header{
    height: 80px !important;
}
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
}
.main-center p{
    color: #fff;
    font-size: 1.354vw;
    height: 9%;
    width: 1360px;
    margin-left: auto;
    margin-right: auto;
    line-height: 4.271vw;
    text-align: left;
}
.entry-warp{
    position: relative;

    width:1366px;
    height: 660px;
    background-color: #fff;
    border-radius:8px;
    margin-left: auto;
    margin-right: auto;
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
input[type="checkbox"]{
            width: 25px;
            height: 25px;
        }
</style>
