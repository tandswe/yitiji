<template>
    <div class="article clearfix">
    <section v-if="pages===1">
         <p style="text-align:left;color:#000;width:90%;margin:0 auto;">请选择车船信息：</p>
         <el-table
            
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%;margin-top:2vh;"
            >
            <el-table-column
            type="selection"
            width="50">
            </el-table-column>
            <el-table-column
            label="序号"
            type="index"
             width="100"
           >
          
            </el-table-column>
            <el-table-column
            prop="number"
            label="车辆号码"
           >
            </el-table-column>
            <el-table-column
            prop="vin"
            label="车架号"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="type"
            label="车辆类型"
            show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <div style="margin-top:10vh;text-align:center;width:100%;" @click="nextPage" > 
              <button-sub btname="查询"></button-sub>
        </div>
    </section>
    <section class="yearselect" v-else-if="pages===2">
        <p style="text-align:left;color:#000;width:90%;margin:0 auto;">请选择缴费所属年份:</p>
        <ul>
            <li class="active">2018</li>
            <li>2017</li>
            <li>2016</li>
            <li>2015</li>
            <li>2014</li>
            <li>2013</li>
            <li>2012</li>
            <li>2011</li>
        </ul>
        <div class="otheryear">
            <div>
                其他年份
            </div>
            <div>
                <el-select>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div style="margin-top:5vh;text-align:center;width:100%;"  @click="changeStep"> 
              <button-sub btname="查询"></button-sub>
        </div>
    </section>
    </div>
</template>

<script>
    import buttonSub from '@/components/base/buttonSub.vue'

    export default {
       
        components:{buttonSub},
        data() {
            return {
                pages:1,
                tableData3: [{
                    number: '粤A88888',
                    vin: 'xxxxxxxxxxxxxx',
                    type: '小型轿车',
                    },
                    {
                    number: '粤A88888',
                    vin: 'xxxxxxxxxxxxxx',
                    type: '小型轿车',
                    },
                    {
                    number: '粤A88888',
                    vin: 'xxxxxxxxxxxxxx',
                    type: '小型轿车',
                    },
                     {
                    number: '粤A88888',
                    vin: 'xxxxxxxxxxxxxx',
                    type: '小型轿车',
                    },
                     {
                    number: '粤A88888',
                    vin: 'xxxxxxxxxxxxxx',
                    type: '小型轿车',
                    },                    
                    ],
                options: [{
                    value: '选项1',
                    label: '2011'
                    }, {
                    value: '选项2',
                    label: '2010'
                    }, {
                    value: '选项3',
                    label: '2009'
                    }, {
                    value: '选项4',
                    label: '2008'
                    }, {
                    value: '选项5',
                    label: '2007'
                    }],
                value: ''
            }
        },
        methods:{
            nextPage(){
                this.pages++; 
                console.log(this.pages)
            },
            changeStep(){
                this.$store.commit('changeheadTabIndex',{count:1})
            }
        }
        
    }
</script>
<style lang="scss">
.el-table th{
   text-align:center;
    background:#CEE5F9;
}
.el-table{
    font-size:24px;
}
.el-table  tr{
    text-align:center;
            &:nth-child(even){
                background:rgba(234,243,251,1);
            }
            }

.el-popper[x-placement^=top] .popper__arrow:after{
    content:''
}
</style>

<style scoped lang="scss">
.article{  
    padding-top: 51px;
    text-align: left;
    font-size:24px;
    width:100%;}
.yearselect{
    ul{
        display:flex;
        flex-wrap: wrap;
        width:85%;
        margin:5vh auto;
        li{
        font-size:26px;
        width:240px;
        height:80px;
        line-height:80px;
        text-align:center;
        border:1px solid rgba(5,117,222,1);
        border-radius:6px;
        margin:20px 8px;
        &.active{
            background:rgba(5,118,221,1);
            border-radius:6px;
            color:#fff;
        }
        }
    }
    
}
.otheryear{
    display:flex;
    width:90%;
    margin:0 auto;
    div{
        height:80px;
        line-height:80px;
        margin-right:10px;
    }
}
</style>