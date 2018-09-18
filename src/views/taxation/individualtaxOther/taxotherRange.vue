<template>
    <div class="article clearfix">   
        <article>
          <p style="text-align:left;">请选择要查询的税款项，点击下方的“打印”按钮</p>
          <div class="flex range" >
            <div>选择开具范围：</div>
                <div> 
                   <el-select v-model="value" placeholder="广州市">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </div>
                <div>
                    <el-select v-model="value" placeholder="区">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </div>
           </div>
        </article>
        
       
        <el-table
            
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%;margin-top:2vh;"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="序号"
            type="index"
           >
          
            </el-table-column>
            <el-table-column
            prop="certificate"
            label="原凭证号"
           >
            </el-table-column>
            <el-table-column
            prop="tax"
            label="税种"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="items"
            label="品目"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="start"
            label="时间起始"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="end"
            label="时间截止"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="sum"
            label="实缴（退）金额"
            show-overflow-tooltip>
            </el-table-column>
        </el-table>

         <div style="margin-top:10vh"  > 
              <button-sub btname="查询"></button-sub>
         </div>

    </div>
</template>

<script>
    import buttonSub from '@/components/base/buttonSub.vue'
    import alertPrint from '@/components/base/alertPrint'
    export default {
        components:{buttonSub,alertPrint},
        data() {
            return {
                printopen:0 ,//是否打印
                tableData3: [{
                    certificate: '320160815000412882',
                    tax: '个人所得税',
                    items: '工资薪金',
                    start:'2018-8',
                    end:'2018-8',
                    sum:'326.76元'
                    },
                    {
                    certificate: '320160815000412882',
                    tax: '个人所得税',
                    items: '工资薪金',
                    start:'2018-8',
                    end:'2018-8',
                    sum:'326.76元'
                    },
                    {
                    certificate: '320160815000412882',
                    tax: '个人所得税',
                    items: '工资薪金',
                    start:'2018-8',
                    end:'2018-8',
                    sum:'326.76元'
                    },
                    {
                    certificate: '320160815000412882',
                    tax: '个人所得税',
                    items: '工资薪金',
                    start:'2018-8',
                    end:'2018-8',
                    sum:'326.76元'
                    }
                    
                    ],
                value: ''
                        }
                },
        computed:{
           
        },
        methods:{
            prinits(){
              this.printopen=!this.printopen;
             
            }

        }
    }
</script>
<style lang="scss">

.el-input__inner{
    width:192px;
    font-size:24px;
}
.el-checkbox__inner{
    width:18px;
    height:15px;
    border:1px solid rgba(51,51,51,1);
}

.el-table th{
    text-align:center;
    background:#CEE5F9;
}
.el-checkbox__input{
    line-height:1.2vw;
}
.el-table  tr{
            &:nth-child(even){
                background:rgba(234,243,251,1);
            }
            }


.el-checkbox__inner{
    width:1vw;
  
}
</style>

<style lang="scss" scoped>
.article{
 
    text-align:center;
    vertical-align: middle;
    position: relative;

    article{
        width:85%;
        margin:0 auto;
        text-align: center;
        p{
            text-align:left; 
            margin-top:30px;
            height:28px;
            font-size:28px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:36px;

        }
        .range{
            margin-top:2vw;
            font-size:24px;
            div{
                margin-right:10px;
            }

        }
       
         
        }
    }
    table{
        margin-top:40px;
        thead{
            background:#CEE5F9;
            font-weight:bold;
        }
        tr{
            height:68px;
           
        }
        tbody{
            tr{
            &:nth-child(even){
                background:rgba(234,243,251,1);
            }
            }
        }
    }
</style>
