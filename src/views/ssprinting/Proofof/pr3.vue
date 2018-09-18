<template>
 <div>
    <div class="zongkoang">
     <div class="tiele-ka"><h1>个人参保证明</h1></div>
     <div class="tiele-list">
      <ul>
          <li>参保人： 苏东坡（个人编号：6484684）</li>
          <li>目前正在XX中心参保</li>
          <li>身份证号为：34134134XXXXX2312</li>
          <li>所属单位为：广东创能科技股份有限公司。险种</li>
      </ul>
    </div>
    <div class="tiele-tab">
        <ul>
         <li>参加险种</li>
         <li>单位名称</li>
         <li>参保状态</li>
        </ul>
     </div>
       <div class="tiele-tab tit">
        <ul>
         <li>参加险种</li>
         <li>单位名称</li>
         <li>参保状态</li>
        </ul>
     </div>
       <div class="tiele-tab tit">
        <ul>
         <li>参加险种</li>
         <li>单位名称</li>
         <li>参保状态</li>
        </ul>
     </div>
     <div class="tit-z">近两年参保缴费明细<span>（2015年08月-2018年08月）</span></div>
    <div class="title-cc">
      <ul>
         
             <li>a</li>
             <li>a</li>
             <li>d</li>
      </ul>
   </div>
    <div class="title-cc cd">
      <ul>
         
             <li>a</li>
             <li>a</li>
      </ul>
   </div>
   <table  border="1" cellpadding="0" cellspacing="0" style="width:100.1%;border:1px solid #ccc;border-top:none; margin-bottom: 20px;">
  <tr>
    <td rowspan="2">开始缴费日期</td>
    <td rowspan="2">终止开始缴费</td>
    <td rowspan="2">累计月数</td>
    <td rowspan="2">缴费基数</td>
    <td height="66" colspan="6">各种险种缴费记录</td>
    <td rowspan="2">单位编号</td>
    <td rowspan="2">单位名称</td>
    <td rowspan="2">核定方式</td>
  </tr>
  <tr>
    <td height="62" colspan="2">养老</td>
    <td height="62" colspan="2">失业</td>
    <td width="52">工伤</td>
    <td width="52">生育</td>
  </tr>
  <tr>
    <td rowspan="2">33</td>
    <td rowspan="2">33</td>
    <td rowspan="2">2</td>
    <td rowspan="2">2</td>
    <td height="49">单位缴纳</td>
    <td>个人缴纳</td>
    <td>单位缴纳</td>
    <td>个人缴纳</td>
    <td rowspan="2">33</td>
    <td rowspan="2">33</td>
    <td rowspan="2">333</td>
    <td rowspan="2">3333</td>
    <td rowspan="2">5555</td>
  </tr>
  <tr>
    <td>222</td>
    <td>333</td>
    <td>333</td>
    <td>33</td>
  </tr>
</table>
</div>

<div><button  @click="isDialogShow" class="butt">打印</button></div>

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

<style lang="scss" scoped>
.zongkoang{
    width: 80%;
    margin-top: 56px ;
    margin-left: auto;
    margin-right: auto;
}
.tiele-ka{
    height: 90px;

   H1{
       color:#313131;
       font-size: 32px;
       line-height: 90px;
   }
}

.tiele-list{
    width: 100%;
    ul{
        margin: 0;
        padding: 0;}
        li{
            float: left;
            color: #313131;
            font-size: 16px;
            line-height: 40px;
        }
    }
.tiele-tab{
    width: 100%;
    height: 50px;
    border: 1px solid #CCCCCC;
    clear: both;
    ul{
        margin: 0;
        padding: 0;
    }
    li{
        width: 33%;    
        border-right: 1px solid #CCCCCC;
        float: left;
        line-height: 50px;
        font-size: 16px;
        font-weight: bold;
    }
}
.tiele-tab li:nth-child(3){
        border-right: none;
        width: 33.7%;
    }
.tit{
    border-top:none;
    
}
.tit li{
    font-weight: normal !important;
}
.tit-z{
    font-size: 24px;
    color: #333;
    height: 50px;
    line-height: 50px;
    span{
        font-size: 16px;
    }
}
.title-cc{
    width: 100%;
    border: 1px solid #ccc;
    height: 50px;
    li {
        float: left;
        width: 30%;
        line-height: 50px;
        text-align: left;
        padding-left:3%
    }
}
.cd{
    border-top:none;
}
.butt{
    width:154px;
    height:56px;
    background:rgba(0,140,255,1);
    color: #fff;
    border-radius: 25px;
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
