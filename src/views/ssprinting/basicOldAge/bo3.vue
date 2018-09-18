<template>
    <div class="article clearfix">   
        <dataCheck></dataCheck>
    </div>
</template>

<script>
import dataCheck from '../sspringCommonents/dataCheck'
    export default {
        components:{
            dataCheck
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
