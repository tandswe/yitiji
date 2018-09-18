<template>
<div>
    <div class="ha">
      <div class="ha-title" v-if="Dialog">请输入您的证件号码</div>
        <div class="ha-time" v-if="Dialog">
            <div class="time-beg">开始时间
                <el-date-picker
                v-model="value4"
                type="month"
                placeholder="选择月">
                </el-date-picker>
            </div>
            <div class="time-mid">~</div>
            <div class="time-end">结束时间
             <el-date-picker
                v-model="value4"
                type="month"
                placeholder="选择月">
                </el-date-picker>
            </div>
        </div>
        	<div class="ha-butt" v-if="Dialog"><button>查询</button></div>

    </div>
            <!-- 查询结果及打印 -->

    <div>
    

         <div class="ha-time" >
             <div>
            <div class="time-bega">开始时间
                <el-date-picker v-model="value4" type="month" placeholder="选择月"> </el-date-picker>
            </div>
            <div class="time-mida">~</div>
            <div class="time-enda">结束时间
             <el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
            </div>
            <div class="ha-bu"><button class="bu1">查询</button> <button  @click="isDialogShow">打印</button></div>
         </div>
     </div>

    <div class="search-result-table">

        	<table>
       		<thead>
       			<tr>
       			<th>入账/办结日期</th>
       			<th>详情</th>
       			<th>发生额</th>
                <th>余额</th>
                <th>缴存比例（个人/单位）</th>
                <th>单位账户</th>
                <th>单位名称</th> 
       			</tr>
       		</thead>
       		<tbody>
       			<tr>
       				<td>2017-03-22</td>
       				<td>缴汇</td>
       				<td>+800.00</td>
                    <td>2331080.00</td>
                    <td>8% / 12%</td>
                    <td>33444</td>
                    <td>广州是叉叉圈圈有限公</td>
       			</tr>
       		<tr>
                    <td>2017-03-22</td>
       				<td>缴汇</td>
       				<td>+800.00</td>
                    <td>2331080.00</td>
                    <td>8% / 12%</td>
                    <td>33444</td>
                    <td>广州是叉叉圈圈有限公</td>
       			</tr>
                   <tr>
                    <td>2017-03-22</td>
       				<td>缴汇</td>
       				<td>+800.00</td>
                    <td>2331080.00</td>
                    <td>8% / 12%</td>
                    <td>33444</td>
                    <td>广州是叉叉圈圈有限公</td>
       			</tr> 		
       		</tbody>
       	</table>

    </div>
    </div>


    <div v-show="Dialog" class="dialog-wrap">
	    <div class="dialog-shadow fadeIn"  @click="hideDialog"></div>
		 <div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">		
			<div class="dialog-content">
			  <img :src="id2">
			</div>
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
                 value4: '',
                Dialog:false,
                id2:require('@/img/views/sp-list-icon.png')
               
            }
        },
        methods: {
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
<style>
.el-input--prefix .el-input__inner {
    content: "viewport-units-buggyfill; padding-left: 1.563vw";
    padding-left: 1.563vw;
    width: 280px;
}
</style>


<style lang="scss" scoped>
.ha{
    width: 80%;
    margin: 0 auto;
}
.ha-title{
    width: 100%;
    float: left;
    text-align: left;
    font-size:28px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:36px;
    height: 30px;
    margin: 70px 0;
}
.ha-time{
    width: 100%;
    float: left;
    font-size:24px;
    color: #333;
    margin-bottom: 60px;
}
.time-beg{
    width: 40%;
    float: left;
}
.time-bega{
    width: 30%;
    float: left;
    text-align: left;
    margin-left: 4%;
}
.time-mid{
    width: 20%;
    float: left;
    
}
.time-mida{
    width: 5%;
    float: left;
    text-align: center;
}
.time-end{
    width: 40%;
    float:right; 
}
.time-enda{
    width: 30%;
    float:left;
    text-align: left; 
}
.ha-butt{
    width:100%;
    margin: 0 auto;
    width: 10%;
    button{
        width:154px;
        height:56px;
        background:rgba(0,140,255,1);
        border-radius:25px;
        color: #fff;
    }
}

.ha-bu{
    width:100%;
    margin: 0 auto;
    width: 25%;
    float: right;
    button{
        width:154px;
        height:56px;
        background:rgba(0,140,255,1);
        border-radius:25px;
        color: #fff;
    }
}
.bu1{
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
