<template>
    <div>
        <accredit title="户籍证明业务办理须知">
            <!-- <button>拒绝</button>
            <button @click="next" class="buttonStyle">同意</button> -->

            <div @click="next"  style="margin-top:5%">
                <button-sub btname="同意"></button-sub>
            </div>
        </accredit>
    </div>
</template>
<script>
import accredit from '../publicSecurityComponents/accredit'
import buttonSub from "@/components/base/buttonSub"
export default {
    components:{
        accredit,
        buttonSub
    },
    data() {
        return {}
    },
    methods:{
        next(){
            this.$router.push('/huosehold/householdSubmit')
            this.$store.commit('changeTabIndex',{count: 1})
        }
    }
}
</script>
<style lang="scss" scoped>
</style>

