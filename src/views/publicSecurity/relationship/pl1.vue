<template>
    <div>
        <accredit title="亲属关系证明业务">
            <!-- <button>同意</button>
            <button>拒绝</button> -->

            <div @click="substep"  style="margin-top:5%">
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
}
</script>
<style lang="scss" scoped>
</style>

