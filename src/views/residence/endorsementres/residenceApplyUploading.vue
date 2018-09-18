<template>
    <div class="warp-details">   
      <certificate hearText="请放入《广东省居住证业务申办表》 60s" v-if="isshow ==1">
          <button @click="next">提交</button>
      </certificate>
      <changeCard v-if="isshow ==2">
          <button @click="next">提交</button>
      </changeCard>
      <div v-if="isshow ==3">
          <h1>请仔细阅读《广东省居住证业务申办表》</h1>
            <div class="warp-text">
                <p>《广东省居住证业务申办表》</p>
            </div>
            <button style="background: #cccccc;">拒绝</button>
            <button @click="next">同意</button>
      </div>
      <selectPeople  changeTextOne="是，地址变更" changeTextTow="否，地址不变" heartText="请选择签注地址是否变更 60s" v-if="isshow ==4">
          <button @click="next">同意变更</button>
      </selectPeople>
      <fillTable v-if="isshow ==5"></fillTable>
    </div>
</template>

<script>
import certificate from './certificate'
import changeCard from './changeCard'
import selectPeople from './selectPeople'
import fillTable from './fillTable'
    export default {
        components:{
            certificate,
            changeCard,
            fillTable,
            selectPeople
        },
        data() {
            return {
                isshow:1
            }
        },
        computed:{
        },
        methods:{
          subClick(){
              this.isshow = true
          },
          next(){
              this.isshow++
          }
        }
    }
</script>

<style lang="scss" scoped>
.warp-details{
    // height: 100%;
    h1{
        padding: 51px 0 47px 65px;
        text-align:left;
        font-size:28px;
    }
    .warp-text{
        width: 1170px;
        height: 430px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #EEF9FF;
        border: 1px solid #D4E7F9;
        color: #8BCAFF;
    }
}
button{
    width:154px;
    height:56px;
    background:rgba(0,140,255,1);
    border-radius:30px;
    font-size:26px;
    line-height: 56px;
    color: #fff;
    margin: 20px;
}
</style>
