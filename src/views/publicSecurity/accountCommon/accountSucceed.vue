<template>
    <div>
        <brankCard v-if="isshow"></brankCard>
        <brankPassWord v-if="isshow"></brankPassWord>
        <print 
            heardText='您的事项已申报完成' 
            cardText="预计5个工作日内完成，"
            cardTextB="届时请您前往受理点领取"
            ></print>
    </div>
</template>
<script>
import brankCard from '../publicSecurityComponents/brankCard'
import brankPassWord from '../publicSecurityComponents/brankPassWord'
import print from '../publicSecurityComponents/print'
export default {
    components:{
        brankCard,
        brankPassWord,
        print
    },
    data() {
        return {
            isshow:false
        }
    },
}
</script>
<style lang="scss" scoped>
</style>

