<template>
    <div class="wrap">   
        <accredit v-if="isShow">
                    <button @click="next">同意</button>
                    <button>拒绝</button>
        </accredit>
        <driveCard v-else></driveCard>
    </div>
</template>

<script>
    import accredit from '../motorCompontes/accredit.vue'
    import driveCard from '../motorCompontes/driveCard.vue'
    export default {
        components:{accredit,driveCard},
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
