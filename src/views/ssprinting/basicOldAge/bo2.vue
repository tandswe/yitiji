<template>
    <div class="article clearfix">   
        <accept></accept>
        <IDCard></IDCard>
    </div>
</template>

<script>
import IDCard from '../sspringCommonents/IDCard'
import accept from '../sspringCommonents/accept'
    export default {
        components:{
            IDCard,
            accept
        },
        data() {
            return {
                ruleForm: '',
                rules: ''
            }
        },
        computed:{
           
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
 

</style>
