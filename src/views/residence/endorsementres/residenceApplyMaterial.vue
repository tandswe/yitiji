<template>
    <div class="warp">   
      <IDCard heardText="请刷身份证 60s">
              
          <div  @click="next" style="margin-top:5%;" >
            <buttonSub btname="提交"></buttonSub>
          </div>

      </IDCard>
    </div>
</template>

<script>
import IDCard from'./IDCard'
import buttonSub from "@/components/base/buttonSub"
    export default {
        components:{
            IDCard,
            buttonSub
        },
        data() {
            return {
                shanghai: ''
            }
        },
        computed:{
           
        },
        methods:{
            next(){
               this.$store.commit('changeTabIndex',{count: 2})
            }
        }
    }
</script>

<style lang="scss" scoped>
button{
    width:154px;
    height:56px;
    background:rgba(0,140,255,1);
    border-radius:30px;
    font-size:26px;
    line-height: 56px;
    color: #fff;
    margin: 20px auto;
}

</style>
