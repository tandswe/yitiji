<template>
	<div>   
		<div v-if="isShows == 0 ">

       <div class="flex-start-end hospital-search-wrap">
        <div class="personal-files">
            <ul>
                <li>驾驶证号：746373674652746</li>
                <li>档案编号：746373674652746</li>
                <li>违法条数：4条</li>
            </ul>
        </div>
       	<div class="flex-start">
       		<div>
       			违法记录：&nbsp;
       		</div>
       		<div>
       			<select>
       				<option>全部</option>
       			</select>
       		</div>
       		
       	</div>
       
       </div>
       <div class="search-result-table">
       	<table>
       		<thead>
       			<tr>
       			<th>违法时间</th>
       			<th>违法路段</th>
       			<th>违法行为描述</th>
       			<th>违法处罚</th>
                <th>处理时间</th>
       			</tr>
       		</thead>
       		<tbody>
       			<tr v-for="(item,index) of 10" :key="index">
       			<td>2018-12-22 15:22</td>
       			<td>广州市软件路</td>
       			<td>不按导向车道行驶</td>
       			<td>罚款100元记2分</td>
                <td>2018-12-25</td>
       			</tr>
       		</tbody>
       	</table>
		<div class="but">
			<button>下一页</button>
			<button>上一页</button>
			</div>
       </div>
		</div>
	  <div v-else-if="isShows ==1">
			<pay1></pay1>
			<button @click="next">下一步</button>
		</div>
		<div v-else-if="isShows ==2">
			<pay2></pay2>
			<button @click="next">下一步</button>
		</div>
		<div v-else-if="isShows ==3">
			<pay3></pay3>
			<button @click="next">下一步</button>
		</div>
		<div v-else-if="isShows ==4">
			<pay4></pay4>
		</div>
    </div>
	
</template>

<script>
import "@/css/flex.scss";
import pay1 from '../payment/pay1'
import pay2 from '../payment/pay2'
import pay3 from '../payment/pay3'
import pay4 from '../payment/pay4'
export default {
	name: "hospitalSearch",
	components:{
		pay1,pay2,pay3,pay4
	},
  data() {
    return {
			isShows:0
		};
	},
	methods:{
		next(){
			this.isShows++
		}
	}
};
</script>
<style lang="scss" scoped>
.hospital-search-wrap {
  position: relative;
  padding: 30px 40px;
  div {
    line-height: 54px;
    font-size: 24px;
    color: rgba(51, 51, 51, 1);
  }
  select {
    margin-left: 28px;
    line-height: 54px;
    // color:rgba(51,51,51,1);
    height: 54px;
    outline: none;
    font-size: 24px;
    padding: 0 20px;
    background: rgba(248, 248, 248, 1);
    border: 1px solid #cccccc;
    option {
      line-height: 54px;
      font-size: 24px;
    }
  }
  input {
    width: 480px;
    height: 52px;
    background: rgba(248, 248, 248, 1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    font-size: 24px;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    padding: 0 20px;
    border-right: 0;
    outline: none;
  }
}
.search-result-table th,
.search-result-table td {
  padding: 21px;
  text-align: left;
  line-height: 26px;
  color: #333333;
  font-size: 24px;
}
.search-result-table {
  width: 100%;

  table {
    width: 100%;
    thead tr th:first-child {
      padding-left: 42px;
    }
    tbody tr td:first-child {
      padding-left: 42px;
    }
    thead th {
      background: rgba(206, 229, 249, 1);
    }
    //  tbody tr:nth-of-type(3n){
    // 	background:rgba(255,255,255,1);
    // 	 }
    tbody tr:nth-of-type(2n) {
      background: rgba(234, 243, 251, 1);
    }
     a{ color:rgba(0,112,224,1); }
  }
}
.but {
  margin-top: 20px;
  button {
    background: #008cff;
    width: 180px;
    height: 60px;
    border-radius: 25px;
    margin-right: 15px;
    color: #fff;
    font-size: 24px;
  }
}
.personal-files {
  width: 100%;
  text-align: left;
  margin-bottom: 40px;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    font-size: 24px;
    color: #333;
    margin-right: 100px;
  }
}
</style>
