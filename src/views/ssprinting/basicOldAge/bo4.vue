<template>
    <div class="article clearfix">   
        <checkSucceed succeed="true"></checkSucceed>
    </div>
</template>

<script>
import checkSucceed from '../sspringCommonents/checkSucceed'
    export default {
        components:{
            checkSucceed
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
