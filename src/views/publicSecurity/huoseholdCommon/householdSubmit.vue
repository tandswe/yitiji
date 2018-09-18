<template>
    <div>
        <msgCheck v-if="isshow==0">
                <!-- <button @click="submit" class="buttonStyle">提交</button> -->
             <div  @click="submit" style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div>
        </msgCheck>
        <registered v-else-if="isshow==1">
            <!-- <button @click="next" class="buttonStyle">下一步</button> -->
            <div @click="next" style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
            </div>
        </registered>
        <signature v-else-if="isshow==2">

        <!-- <button @click="bignext" class="buttonStyle">提交</button> -->

           <div  @click="bignext" style="margin-top:5%">
                <button-sub btname="确认"></button-sub>
            </div>
        </signature>
    </div>
</template>
<script>
import msgCheck from '../publicSecurityComponents/msgCheck'
import registered from '../publicSecurityComponents/registered'
import signature from '../publicSecurityComponents/signature'
import buttonSub from "@/components/base/buttonSub"
export default {
    components:{
        msgCheck,
        registered,
        signature,
        buttonSub
    },
    data() {
        return {
            isshow:0,
        }
    },
    methods:{
        submit(){
            this.isshow=1
        },
        next(){
        //   this.$router.push('/huosehold/householdSucceed')
        //   this.$store.commit('changeTabIndex',{count: 2}) 
        this.isshow= 2
        },
        bignext(){
            this.$router.push('/huosehold/householdSucceed')
          this.$store.commit('changeTabIndex',{count: 2}) 
        }
    }
}
</script>
<style lang="scss" scoped>
</style>

