<template>
    <div>
        <brankCard v-if="isshow ==0">
             <!-- <button @click="next1" class="buttonStyle">下一步</button> -->

             <div @click="next1"  style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
            </div> 
        </brankCard>
        <brankPassWord v-else-if="isshow==1">
            <!-- <button @click="next2" class="buttonStyle">下一步</button> -->
         <div @click="next2"  style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
            </div>

        </brankPassWord>
        <print 
            heardText='您的事项已申报完成' 
            cardText="预计5个工作日内完成，"
            cardTextB="届时请您前往受理点领取"
            v-else-if="isshow==2"
            >
            <!-- <button @click="next" class="buttonStyle">完成</button> -->

             <!-- <div @click="next"   style="margin-top:5%">
                <button-sub btname="完成"></button-sub>
            </div> -->
            </print>
            <!-- <button @click="next" class="buttonStyle">提交</button> -->
    </div>
</template>
<script>
import brankCard from '../publicSecurityComponents/brankCard'
import brankPassWord from '../publicSecurityComponents/brankPassWord'
import print from '../publicSecurityComponents/print'
import buttonSub from "@/components/base/buttonSub"
export default {
    components:{
        brankCard,
        brankPassWord,
        print,
        buttonSub
    },
    data() {
        return {
            isshow:0
        }
    },
    methods:{
        next(){
            this.$router.push('/')
            this.$store.commit('changeTabIndex',{count: 0})
        },
        next1(){
            this.isshow=1
        },
        next2(){
            this.isshow=2
        }
    }
}
</script>
<style lang="scss" scoped>
</style>

