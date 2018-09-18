<template>
    <div class="wrap">   
        <accredit v-if="!isShow">
                    <button @click="next">同意</button>
                    <button>拒绝</button>
        </accredit>
        <IDCard heardText="请刷身份证 60s"></IDCard>
    </div>
</template>

<script>
    import accredit from '../motorCompontes/accredit.vue'
    import IDCard from '../motorCompontes/IDCard.vue'
    export default {
        components:{accredit,IDCard},
        mounted(){
            
        },
        data() {
           return{
               isShow: true
           }
        },
        computed:{
          
        },
        methods:{
            next(){
                this.isShow = false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
