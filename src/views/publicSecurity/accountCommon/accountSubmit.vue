<template>
    <div>
        <accountTable v-if="isshow==0">
            <!-- <button class="buttonStyle" @click="next1">提交</button> -->

            <div @click="next1"  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
        </accountTable>
        <!--<signature></signature> -->
        <IDcard heardText="请放置好注销户口人身份证" 
        v-if="isshow==1">
             <!-- <button class="buttonStyle" @click="next2">提交</button> -->
             <div @click="next2"  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
        </IDcard>
         <registered v-if="isshow==2">
              <!-- <button class="buttonStyle" @click="next3">提交</button> -->

              <div @click="next3"  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
         </registered>
        <dieCard  v-if="isshow==3">
            <!-- <button class="buttonStyle" @click="next4">提交</button> -->

            <div @click="next4"  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
        </dieCard>
        <accept v-if="isshow==4" @nextChange="nextChange" @localtNexts="localtNext"></accept>
        <msgCheck v-if="isshow==5">
            <!-- <button class="buttonStyle" @click="next6">提交</button> -->

            <div @click="next6"  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
        </msgCheck>
        <signature v-if="isshow==6">
            <!-- <button @click="next" class="buttonStyle">提交</button> -->

            <div  @click="next" style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
        </signature>
    </div>
</template>
<script>
import accountTable from '../publicSecurityComponents/accountTable'
import registered from '../publicSecurityComponents/registered'
import IDcard from '../publicSecurityComponents/IDcard'
import dieCard from '../publicSecurityComponents/dieCard'
import accept from '../publicSecurityComponents/accept'
import msgCheck from '../publicSecurityComponents/msgCheck'
import signature from '../publicSecurityComponents/signature'
import buttonSub from "@/components/base/buttonSub"
export default {
    components:{
        accountTable,
        IDcard,
        dieCard,
        accept,
        msgCheck,
        signature,
        registered,
        buttonSub
    },
    data() {
        return {
            isshow:0,
        }
    
    },
    methods:{
        next(){
                this.$router.push('/AccountCancellation/accountSucceed')
                this.$store.commit('changeTabIndex',{count: 2})
            },
        next1(){
            this.isshow =1 
        },
        next2(){
            this.isshow =2 
        },
        next3(){
             this.isshow =3 
        },
        next4(){
             this.isshow =4 
        },
        next6(){
            this.isshow =6
        },
        nextChange(val){
             this.isshow =5 
        },
        localtNext(val){
            console.log(val)
            this.isshow =6
        }
    }
}
</script>
<style lang="scss" scoped>
</style>

