<template>
	<div>   
		<div v-if="isShows == 0 ">

       <div class="flex-start-end hospital-search-wrap">
        <div class="personal-files">
            <ul>
                <li>车辆类型:{{cph}}</li>
                <li>车牌号：{{localdata.plate_no}}</li>
                <li>发动机号：{{localdata.eng_no}}</li>
                <li>车架号：{{localdata.clsbdh}}</li>
                <li>违法条数：{{savedata.length}}条</li>
            </ul>
        </div>
       	<div class="flex-start">
       	<div>
       			违法记录：&nbsp;
       		</div>
       		<div>
       			<el-select v-model="value" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
       		</div>
           <div  style="margin-left:20px;"> 
              <el-date-picker
                v-model="value"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                placeholder="选择开始日期"
                
                >
              </el-date-picker>
          </div>
       	  <div > 
              <el-date-picker
                v-model="value2"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                placeholder="选择结束日期"
                
                >
              </el-date-picker>
          </div>
          
       		
       	</div>
       
      
       </div>
        <div  @click="submit1()" class="button1">
            <buttonsub btname="查询"></buttonsub>
	    </div>
       <div class="search-result-table">
       	<table>
       		<thead>
       			<tr>
       			<th style="width:15%;">违法时间</th>
       			<th style="width:20%;">违法路段</th>
       			<th style="width:45%;">违法行为描述</th>
       			<th style="width:10%;">违法处罚</th>
            <th style="width:10%;">违法处理</th>
       			</tr>
       		</thead>
       		<tbody>
       			<tr v-for="(item,index) in searchData" :key="index">
       			<td>{{searchData[index].wfsj}}</td>
						 <td>{{searchData[index].wfdz}}</td>
						 <td>{{searchData[index].wfxw}}</td>
						 <td>罚款{{searchData[index].fkje}}元记{{searchData[index].jkbj}}分</td>
						 
       			
             <td @click="next(searchData[index].jkbj)" v-html="searchData[index].jkbjmc"></td>
       			</tr>
       	
       		</tbody>
       	</table>
		    <div class="but">
          <button v-if="prevpage" @click="prevpageshow">上一页</button>
          <button v-if="nextpage" @click="nextpageshow">下一页</button>
			  </div> 
       </div>
		</div>
		<div v-else-if="isShows == 1">
		<pay0></pay0>
     <div  @click="gonextpages()" class="button1">
            <buttonsub btname="提交"></buttonsub>
	    </div>
		</div>
     
    </div>
	
</template>

<script>
import "@/css/flex.scss";
import pay0 from '../payment/pay0'
import pay1 from '../payment/pay1'
import pay2 from '../payment/pay2'
import pay3 from '../payment/pay3'
import pay4 from '../payment/pay4'
import buttonsub from "@/components/base/buttonSub"
export default {
	name: "hospitalSearch",
	components:{
		pay1,pay2,pay3,pay4,pay0,buttonsub
	},
  data() {
    return {
      localdata:'',//获取本地数据
			 isShows:0, //组件显示
      searchData:'',//查询结果 需要显示的数据
       options: [{  //下拉选择
          value: '-1',
          label: '全部'
        }, {
          value: '0',
          label: '待处理'
        }, {
          value: '1',
          label: '已处理'
        }, ],
        value: '',
        savedata:[],//存放searchData的数组
        savefilterdata:[],//存放过滤后的数组
        pagedata:[],//用于分页时保存的数据
        value1:"", //日期 起始日期
        value2:"", //日期 最后日期
        nextpage:1,//分页 下一页
        prevpage:0,//分页 上一页 
        pages:5,  //定义每页显示5条数据
        pagen:1, //用于计算页数
        cph:""//车牌号
		};
	},
	created(){
    
     this.localdata=JSON.parse(localStorage.getItem("temp2")) 
     switch(this.localdata.car_type){
      case "01":
       this.cph="大型汽车"
      break;
      case "02":
       this.cph="小型汽车"
      break;
      case "05":
       this.cph="境外汽车"
      break;
      case "06":
       this.cph="外籍汽车"
      break;
      case "07":
       this.cph="两、三轮摩托车"
      break;
      case "11":
       this.cph="境外摩托车"
      break;
      case "12":
       this.cph="外籍摩托车"
      break;
      case "15":
       this.cph="挂车"
      break;
      case "16":
       this.cph="教练车"
      break;
      case "20":
       this.cph="临时入境汽车"
      break;
      case "21":
       this.cph="临时入境摩托车"
      break;
      case "22":
       this.cph="临时行驶汽车"
      break;
      case "23":
       this.cph="公安警车"
      break;
      case "26":
       this.cph="香港入境车"
      break;
      case "27":
       this.cph="澳门入境车"
      break;
      case "99":
       this.cph="其他"
      break;
    }
     //console.log(this.localdata)
     //  /inteGration/api/jgyw/postCarViolation
     //  https://www.easy-mock.com/mock/5b97bc01a7e9571f105d3ddd/ytj/jdcsearch
     this.$axios.post("https://www.easy-mock.com/mock/5b97bc01a7e9571f105d3ddd/ytj/jdcsearch",{
			 plate_no:'123',
			 car_type:"222",
			 eng_no:"2222"

		 }).then((req)=>{
				 //console.log(JSON.parse(req.data).result_set)
         //this.searchData=JSON.parse(req.data).result_set
         this.searchData=req.data.result_set
         this.searchData=this.searchData.map((item,index)=>{
              return {
                 wfsj:item.wfsj,
                 wfdz:item.wfdz,
                 wfxw:item.wfxw,
                 wfjfs:item.wfjfs,
                 jkbj:item.jkbj,////是否缴费判断 0 1
                 jkbjmc:Number(item.jkbj)?"已处理":"<span style='color:red;cursor:pointer'>立即处理</span>",//是否缴费
                 fkje:item.fkje,
                 znj:item.znj,
                 jdsbh:item.jdsbh,
                 cljgmc:item.cljgmc
              }
         })
          this.savedata=this.searchData  //存储初始数据
           if(this.searchData.length<=this.pages){
               this.nextpage=0 //当初始数据少于N条数据时，不显示下一页的按钮
           }
           this.searchData=this.searchData.filter((item,index)=>{
                return index<this.pages  //初始只显示pages条数据
           })
     })
     

	},
	methods:{
	
    next(n){//跳转下一步
      if(!Number(n)){
        this.isShows++
      }
			
    },
    gonextpages(){
       this.$store.commit("changeheadTabIndex",{count:1})
    },
    //格式化日期方法
    formatdate(time, format){
          var t = new Date(time);
          var tf = function(i){return (i < 10 ? '0' : '') + i};
          return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
              switch(a){
                  case 'yyyy':
                      return tf(t.getFullYear());
                      break;
                  case 'MM':
                      return tf(t.getMonth() + 1);
                      break;
                  case 'mm':
                      return tf(t.getMinutes());
                      break;
                  case 'dd':
                      return tf(t.getDate());
                      break;
                  case 'HH':
                      return tf(t.getHours());
                      break;
                  case 'ss':
                      return tf(t.getSeconds());
                      break;
              }
          })
    },
    //比较日期大小方法
     CompareDate(d1)
    {
      return new Date(this.formatdate(d1,'yyyy-MM-dd').replace(/-/g,"\/"))
    },



    submit1(){ //数据过滤处理
       
      this.searchData=this.savedata
      //  console.log(this.value1)
      //  console.log(this.value2)
      //  console.log(this.formatdate("2015-01-10 12:41:10", 'yyyy-MM-dd'))
      if(this.value1){
        this.searchData=this.searchData.filter(item=>{
          
           return  this.CompareDate(item.wfsj)>this.CompareDate(this.value1)
        })
      }
      if(this.value2){
        this.searchData=this.searchData.filter(item=>{
          
           return  this.CompareDate(item.wfsj)<this.CompareDate(this.value2)
        })
      }
      //是否缴费判断
      if(this.value){
             switch(Number(this.value))
            {
            case 1:
              
            this.searchData=this.searchData.filter(item=>{
                
                return Number(item.jkbj)===1
              })
              break;
            case 0:
            
              this.searchData=this.searchData.filter(item=>{
                
                return Number(item.jkbj)===0
              })
              break;
            
            default:
              this.searchData ==this.savedata
            }

      }
 
      this.savefilterdata=this.searchData //保存过滤后的数据，用于分页
      //初始过滤的展示页数
      this.pagen=1 // 页数为0
      this.prevpage=0 
      this.nextpage=1
      if(this.searchData.length<=this.pages){
               this.nextpage=0 //当初始数据少于N条数据时，不显示下一页的按钮
      }

      this.searchData=this.searchData.filter((item,index)=>{
                return index<this.pages  //初始只显示pages条数据
      })
           
      
     
    },
    //下一页
    nextpageshow(){ 
     this.prevpage=1 //显示上一页按钮
     this.pagedata=this.savedata
     if(this.savefilterdata.length>0){
        this.pagedata=this.savefilterdata
     }
     this.searchData=this.pagedata.filter((item,index)=>{
           return index>=this.pages*this.pagen && index<this.pages*(this.pagen+1)
     })
     
     if(this.searchData.length<this.pages||(this.pages*this.pagen+this.searchData.length)==this.pagedata.length){ //当去到最后一页时，下一页按钮消失
        this.nextpage=0
     } 
     this.pagen++ 
    },
    //上一页
    prevpageshow(){
      this.pagen--
      this.nextpage=1
      this.pagedata=this.savedata
      if(this.savefilterdata.length>0){
        this.pagedata=this.savefilterdata
     }
     this.searchData=this.pagedata.filter((item,index)=>{
           return index>=this.pages*(this.pagen-1) && index<this.pages*this.pagen
     })
     if((this.pages*(this.pagen-1)+this.searchData.length)<=this.pages){ //当总数少于每页显示个数时，下一页按钮消失
        this.prevpage=0
     } 
    }
	}
};
</script>
<style>
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width:16vw;
  font-size:24px;
}
.el-input__inner{
  width:300px;
  font-size:24px;
}

</style>
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
