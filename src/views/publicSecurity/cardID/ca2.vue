<template>
    <div>
        <msgCheck v-if="isshow"></msgCheck>
        <registered v-if="isshow"></registered>
        <signature></signature>
        <!-- <button @click="next" class="buttonStyle">提交</button> -->
        <div @click="next"  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
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
            isshow:false,
        }
    },
    methods:{
        next(){
            this.$router.push('/publicSecurity/ca3')
            this.$store.commit('changeTabIndex',{count: 2})
        }
    }
}
</script>
<style lang="scss" scoped>
</style>

