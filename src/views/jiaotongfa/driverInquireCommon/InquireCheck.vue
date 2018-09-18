<template>
	<div>   
		<div v-if="isShows == 0 ">
              <div class="flex-start-end hospital-search-wrap">
        <div class="personal-files">
            <ul>
                <li>驾驶证号：746373674652746</li>
                <li>档案编号：746373674652746</li>
                <li>违法条数：{{savedata.length}}条</li>
            </ul>
        </div>
       	<div class="wfser">
           <!-- 违法记录过滤 -->
           <div class="wfser1">
                	<div style="display:flex;align-items:center;">
                    违法记录:&nbsp;
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

           </div>
       	  <!-- 日期选择 -->
           <div class="datesl">
              <div class="datesel">
                <div style="display:flex;align-items:center;">开始日期:&nbsp;</div>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="选择起始日期"
                  >
                </el-date-picker>
              </div>
              <div class="datesel"> 
                <div style="display:flex;align-items:center;">结束日期:&nbsp;</div>
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
       
       </div>
       <div @click="submit1" style="margin-bottom:1vh">
            <button-sub style=""  btname="确定"></button-sub>
       </div>
       <div class="search-result-table">
       	<table>
       		<thead>
       			<tr>
       			<th style="width:15%;">违法时间</th>
       			<th style="width:20%;">违法路段</th>
       			<th style="width:43%;">违法行为描述</th>
            <th style="width:10%;">违法处罚</th>
       			<th style="width:12%;">违法处理</th>
       			</tr>
       		</thead>
       		<tbody>
             
       			<tr v-for="(item,index) in searchData" :key="index">
              <td>{{searchData[index].wfsj}}</td>
              <td>{{searchData[index].wfdz}}</td>
              <td>{{searchData[index].wfxw}}</td>
              <td>罚款{{searchData[index].fkje}}元记{{searchData[index].wfjfs}}分</td>
              <td v-html="searchData[index].jkbjmc"></td>
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
		<div  @click="next">
			  <button-sub style=""  btname="确定"></button-sub>
		</div>
		</div>
	  <div v-else-if="isShows ==2" >
			<pay1></pay1>
      <div  @click="next" style="margin-top:1vh">
			  <button-sub btname="确定"></button-sub>
      </div>
		</div>
		<div v-else-if="isShows ==3">
			<pay2></pay2>
			<div  @click="next" style="margin-top:1vh">
			  <button-sub btname="确定"></button-sub>
      </div>
		</div>
		<div v-else-if="isShows ==4">
			<pay3></pay3>
			<div  @click="next" style="margin-top:1vh">
			  <button-sub btname="确定"></button-sub>
      </div>
		</div>
		<div v-else-if="isShows ==5">
			<pay4></pay4>
			<div  @click="next" style="margin-top:1vh">
			  <button-sub btname="确定"></button-sub>
      </div>
		</div>
		<div v-else-if="isShows ==6">

		</div>
    </div>
	
</template>

<script>
import "@/css/flex.scss";
import pay0 from "../payment/pay0";
import pay1 from "../payment1/pay1";
import pay2 from "../payment/pay2";
import pay3 from "../payment/pay3";
import pay4 from "../payment/pay4";
import buttonSub from '@/components/base/buttonSub.vue'
export default {
  name: "hospitalSearch",
  components: {
    pay1,
    pay2,
    pay3,
    pay4,
		pay0,
		buttonSub
	},
	created(){
    //https://www.easy-mock.com/mock/5b97bc01a7e9571f105d3ddd/ytj/driverInquireInquireCheck
    ///inteGration/api/jgyw/postDriverViolation  
     this.$axios.post('https://www.easy-mock.com/mock/5b97bc01a7e9571f105d3ddd/ytj/driverInquireInquireCheck',{
				 license_no:"122222",
				 file_no:"11222"
			 })
				.then( (response) =>{
           //console.log(JSON.parse(response.data).result_set)
           //this.searchData=JSON.parse(response.data).result_set //数据作对象转换
           
					this.searchData=response.data.result_set
					 this.searchData=this.searchData.map((item,index)=>{
              return {
                 wfsj:item.wfsj,
                 wfdz:item.wfdz,
                 wfxw:item.wfxw,
                 wfjfs:item.wfjfs,
                 jkbj:item.jkbj,////是否缴费判断 0 1
                 jkbjmc:Number(item.jkbj)?"已处理":"未处理",//是否缴费
                 fkje:item.fkje,
                 znj:item.znj,
                 jdsbh:item.jdsbh,
                 cljgmc:item.cljgmc
              }
         })
          //console.log(this.searchData)
           this.savedata=this.searchData  //存储初始数据
           if(this.searchData.length<=this.pages){
               this.nextpage=0 //当初始数据少于N条数据时，不显示下一页的按钮
           }
           this.searchData=this.searchData.filter((item,index)=>{
                return index<this.pages  //初始只显示pages条数据
           })
           
           
           
				})
				.catch(function (response) {
					console.log(response);
				});

          
  },
   data() {
    return {
      isShows:0, //组件显示
      searchData:'',//查询结果 需要显示的数据
       options: [{  //下拉选择
          value: '-1',
          label: '全部'
        }, {
          value: '0',
          label: '未缴款'
        }, {
          value: '1',
          label: '已缴款'
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
        pagen:1  //用于计算页数
       
		};
  },
  methods:{
		next(){//跳转下一步
			this.isShows++
		},
		 next1(n){//违章跳转
      if(!Number(n)){
				this.isShows++
				
				this.$axios.post("/inteGration/api/jgyw/postcfje",{
					plate_no:'123', //处理人的ID
					
						}).then(req=>{
							console.log(JSON.parse(req.data).data)
							this.subdata=JSON.parse(req.data).data
					})
			}
			
			
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
    //-----

	}
};
</script>
<style>

.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width:none !important;
  font-size:24px;
}


.el-input__inner{
  width:300px;
  font-size:24px;
}
</style>

<style lang="scss" scoped>
.wfser{
  display:flex;
  flex-wrap:nowrap;
  @media screen and (max-width: 1200px){
    flex-direction:column
  }
}
button {
  width:154px;
height:56px;
background:rgba(0,140,255,1);
color: #fff;
}
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
    a {
      color: rgba(0, 112, 224, 1);
    }
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
    @media screen and (max-width:1200px){
      display:flex;
      flex-direction: column;
    }
  }
  li {
    float: left;
    font-size: 24px;
    color: #333;
    margin-right: 100px;
    @media screen and (max-width:1200px){
        font-size:3vw;
        line-height:4vw;
    }
  }
}
.wfser{
  display:flex;
  flex-direction: column;
  .wfser1{
    display:flex;
  }
  .datesl{
    display:flex;
    margin-top:2vh;
    @media screen and (max-width:1200px){
       flex-direction: column; 
       margin-top:1vh;
    } 
    .datesel{
      display:flex;
      width:500px;
      @media screen and (max-width:1200px){
       margin-bottom:1vh;
      }
    }

  }
  
}
</style>
