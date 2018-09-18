<template>
    <div class="article clearfix">   
        <article>
            <!-- <p style="text-align:left;width:85%;margin:20px auto;">社会查询及打印/个人参保证明</p> -->
            <div class="print-nr" >
                <h1>个人参保证明</h1>
                <P>
                    参保人：某某某L（个人编号：XXXXX）目前正在我中心参保，其身份证为：31456542562XX12
                </P>
                <p>
                    所属单位：XXX有限公司，险种情况如下
                </P>
        

              <!-- <table id="tfhover" class="tftable" border="1" >
                <tr><th>参加险种</th><th>开始参保时间</th></tr>
                <tr><td>失业保险</td><td>2017年12月20日</td></tr>
                <tr><td>生育保险</td><td>2017年12月20日</td></tr>
                </table> -->
            <el-table class="celldd"  :data="tableData6" border style="margin-top:30px" id="print-table">
            <el-table-column prop="name" label="参加险种" align="center"  ></el-table-column>
            <el-table-column prop="date" label="开始参保时间" align="center" ></el-table-column>
            </el-table >
                <div class="print-na">
                    <p >
                        社会保险基金管理中心
                    </p>
                    <p >
                        20XX年5月16日
                    </p>
                </div>
                <div class="print-nt">
                <p > 备注：</p>
                <p>1.医疗保险的参保情况不在本表反应。 </p>
                <p >2.如有疑问...</p>
                <p> 授权码：3245XX55</p>
                </div>
            </div>

            <div @click="prinits()"> 测试打印</div>
           
        </article>

            </div>
</template>

<script>
    import alertPrint from '@/components/base/alertPrint'
    export default {
        create(){
             
        },
        components:{
            alertPrint
        },
        data() {
            return {

          tableData6: [{
      
          name: '王小虎',
          date: '2017年12月20日',
          
        }, {
        
          name: '王小虎',
          date: '2017年12月20日',
        
        }]
      };
            
        },
        computed:{
           
        },
        methods:{
            back(){
              this.$router.push({path:'/'})
          },

         
            
        }
    }
</script>

<style>
.v-modal{
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
}
.el-table--border:after, .el-table--group:after, .el-table:before,#print-table:after {
    background-color:none !important ;
    content: "";
    position: absolute;
    z-index: 0;
}
</style>
<style lang="scss" scoped>

.article{
    height:100%;
    overflow-y: scroll;
    position: relative;
    
 
    article{
        font-size:16px;
        table.tftable {color:#333333;width:100%;border-width:2px;border-color: #E7E7E7;border-collapse: collapse;margin-top:25px;}
        table.tftable th {border-width:2px;padding: 8px;border-style: solid;border-color: #E7E7E7;text-align:center;}
        table.tftable tr {background-color:#fff;text-align: center;}
        table.tftable td {border-width: 2px;padding: 8px;border-style: solid;border-color: #E7E7E7;}       
          p{
              text-align:center;       
        }
    }    
}
.print-nr{
    background:#F7F7F7;
    width:85%;border:1px solid #E7E7E7;
    margin:20px auto;
    padding:10px 10%;box-sizing:border-box;
    h1{
    width:100%;
    text-align:center;
    font-size: 32px;
    line-height: 100px;
    color: #333;
    }
     p{
     text-align:left !important;
     word-break:break-all;
     font-size: 16px;
     color: #333;
     line-height: 150%;}      
}
.print-na{
    width: 100%;
    margin-top: 50px;
    p{
        width: 100%;
        text-align: right !important;
        font-size: 18px;
        color: #333;
        line-height: 200%;
        font-weight: bold;
        margin-right: 40px;
    }
}
.print-nt{
     width: 100%;
     p{
       font-size: 18px; 
       color: #666; 
       line-height: 150%;
     }
}
.celldd{
    font-size: 16px;
    color: #333 !important;
  
}



</style>

