<template>
    <div class="wrap">   
            <communication></communication>
    </div>
</template>

<script>
    import accreditBooks from '../peoplePassComponents/accreditBooks.vue'
    import delegating from '../peoplePassComponents/delegating.vue'
    import communication from '../peoplePassComponents/communication.vue'
    import succeed from '../peoplePassComponents/succeed.vue'
    export default {
        components:{accreditBooks, delegating,communication},
        mounted(){
          
            
        },
        data() {
           return{
                 isShow: false
           }
        },
        computed:{
          
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    height: 100%;
}
</style>
