<template>
    <div class="article clearfix">   
        <article class="datechoose" v-if="pages===1">
          <p style="text-align:left;margin-bottom:15vh;">请输入所属期起止，点击“确认”按钮</p>
          <div class="flex-start datecw">
              <div>
                 起始时间：
              </div>
              <div>
                <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
              </div>
          </div>
          <div class="flex-start datecw">
              <div>
                 截止时间：
              </div>
              <div>
                <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
              </div>
          </div>
          <div >
              <span class="error">* 起止期必须在一年内，请重新输入！</span>
          </div>
          <div @click="nextPage"> 
              <button-sub style="margin-top:10vh"  btname="提交"></button-sub>
          </div>
          
        </article>
        <article class="query" v-else-if="pages===2">
            <p style="text-align:left;margin-bottom:8vh;">请选择要查询的税款项，点击下方的“查询”按钮</p>
            <div class="flex queryw"  >
                <div>选择查询范围</div>
                <div style="margin-left:2vw">
                     <el-radio v-model="radio" label="1">全市范围内所有扣税义务人</el-radio>
                     <el-radio v-model="radio"  label="2">部分扣税义务人</el-radio>
                </div>
            </div>
            <div class="queryw2">
                <div><el-radio v-model="radio" label="1">广东省 深圳市 xxxxxx</el-radio></div>
                <div><el-radio v-model="radio"  label="2">广东省 深圳市 xxxxxx</el-radio></div>
                <div><el-radio v-model="radio" label="3">广东省 深圳市 xxxxxx</el-radio></div>
                 
                 
                 
            </div>
             <div @click="nextStep"> 
              <button-sub style="margin-top:10vh;width:180px;"  btname="提交"></button-sub>
          </div>
        </article>
    </div>
</template>

<script>
    import buttonSub from '@/components/base/buttonSub.vue'
    export default {
        components:{buttonSub},
        data() {
            return {
                pages:1,
                value1:'',
                radio:'1',
            }
        },
        computed:{
           
        },
        methods:{
           nextPage(){
                this.pages++; 
                console.log(this.pages)
           }
        }
    }
</script>
<style>
.el-radio__label{
    font-size:28px;
    color:rgba(51,51,51,1);
}
.el-radio__inner{
    width:28px;
    height:28px;
}
.el-radio__input{
    top:-2px;
}
</style>

<style lang="scss" scoped>
.article{
 
    text-align:center;
    vertical-align: middle;
    position: relative;
    display: flex;

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
        }
    }
.datechoose{
    font-size:28px;
    .datecw{
        width:50%;
        margin:20px auto;
    }
    .error{
        font-weight:400;
        color:rgba(246,53,53,1);
        line-height:36px;
        font-size:24px;
        margin-left:70px;
    }
}

.query{
    font-size:28px;
    color:rgba(51,51,51,1);
    .queryw{
        height:50px;
        line-height:50px;
    }
    .queryw2{
        width:794px;
        height:326px;
        background:rgba(246,246,246,1);
        border:1px solid rgba(221,221,221,1);
        border-radius:6px;
        margin:6vh auto 0;
        text-align:left;
        padding:30px;
        box-sizing:border-box;
        div{
            margin:10px;
        }
            }
}
</style>
<style>
.el-radio__inner:after{
    content:"";
}
</style>