<template>  
 <div>   
	 	 <div v-if="showText">
           <div class="personal-files">
            <ul>
                <li class="table-zi">当事人姓名:XXX</li>
                <li class="list-w">检察院名称：广州市人民检察院</li>
                <li class="list-w">公开时间:2018-08-10至2018-10-10</li>
                <li>违法条数：4条</li>
            </ul>
        </div>
	
       <div class="search-result-table" >
       	<table>
       		<thead>
       			<tr>
       			<th width="50px">类别</th>
       			<th>详情</th>
       			<th width="50px">更多</th>
  
       			</tr>
       		</thead>
       		<tbody>
       			<tr>
       				<td>民事二审</td>
       				<td>君子签、顾嘉汇与江阴回升置业有限公司商品房预售合同纠纷二审民事判决书,江苏省无锡市中级人民法院xxx民终157号 2018-08-10</td>
       				<td class="result-c" >></td>
       			</tr>
       		<tr>
                    <td>民事二审</td>
       				<td>君子签、顾嘉汇与江阴回升置业有限公司商品房预售合同纠纷二审民事判决书,江苏省无锡市中级人民法院xxx民终157号 2018-08-10</td>
       				<td class="result-c">></td>
       			</tr>
                   <tr>
                    <td>民事二审</td>
       				<td>君子签、顾嘉汇与江阴回升置业有限公司商品房预售合同纠纷二审民事判决书,江苏省无锡市中级人民法院xxx民终157号 2018-08-10</td>
       				<td class="result-c">></td>
       			</tr> 		
       		</tbody>
       	</table>
		   <div><button  @click="next()">下一步</button></div>
       </div>
	
	   </div>
    

      <div>
		  <div class="personal-files">
            <ul>
                <li class="table-zi">当事人姓名:XXX</li>
                <li class="list-w">检察院名称：广州市人民检察院</li>
                <li class="list-w">公开时间:2018-08-10至2018-10-10</li>
                <li>违法条数：4条</li>
            </ul>
        </div>
		<div class="tb-w" >
           <h3>君子签、顾嘉汇与江阴回升置业有限公司商品房预售合同纠纷二审民事判决书</h3>
           <p>江苏省无锡市中级人民法院 2018-10-10</p>
		</div>
       </div>

	   <div  @click="isDialogShow">打印效果</div>
       <div v-show="Dialog" class="dialog-wrap">
	    <div class="dialog-shadow fadeIn"  @click="hideDialog"></div>
		 <div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">		
			<div class="dialog-content">
			  <img :src="id2">
			</div>
		 </div>
    	</div>
    </div>

</template>

<script>
export default {
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
	  showText: true,
	  Dialog:false,
      id2:require('@/img/views/sp-list-icon.png')
    };
  },
  methods: {
    next() {
      this.showText = !this.showText;
	},
	isDialogShow:function(){
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

<style lang="scss" scoped>
	.header{
		height: 80px !important;
	}
	
	.personal-files{
		height: 150px;
		width: 100%;
		ul{
			margin: 0;
			padding: 0;
		}
		li{
			float: left;
			text-align: left;
			font-size: 24px;
			color: #333;
			width: 18%;
			line-height: 150px;
		}
	}
	.list-w{
		width: 30% !important;
	}
	.table-zi{
		text-align: right !important;
		margin-right: 20px;
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
		tbody tr:nth-of-type(2n){
			background:rgba(234,243,251,1);
		}
	}	
}
.tb-w{
	width:1169px;
	height:300px;
	background:rgba(238,249,255,1);
	border:1px solid rgba(212,231,249,1);
	padding-top: 25px;
	margin-left: auto;
	margin-right: auto;
	h3{
		font-size: 24px;
		color: #333;
		line-height: 40px;
	}
	}
.result-c{
	text-align: center !important;
	color: #0577DD !important;
	font-size: 32px !important;
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