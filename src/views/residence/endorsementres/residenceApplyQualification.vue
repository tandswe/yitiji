<template>
    <div class="warp"> 
        <face heardText="代办人面部特征采集，请点头" v-if="isShow"></face>
        <nohappy v-else></nohappy>
        <div @click="NOSuc" style="margin-top:5%;">
        <buttonSub btname="不成功时" ></buttonSub>
        </div>
    </div>
</template>

<script>
import face from './face'
import nohappy from './nohappy'
import buttonSub from "@/components/base/buttonSub"
    export default {
        components:{
            face,
            nohappy,
            buttonSub
        },
        data() {
            return {
                isShow:true

            }
        },
        computed:{
           
        },
        methods:{
            NOSuc(){
                // this.isShow =false
                this.$store.commit('changeTabIndex',{count:3})
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
