<template>
    <div class="wrap">   
        <div v-if="isShow">
             <accreditBooks></accreditBooks>
        </div>
        <div v-if="isShow">
            <delegating></delegating>
        </div>
        <div>
            <communication></communication>
        </div>
    </div>
</template>

<script>
    import accreditBooks from '../peoplePassComponents/accreditBooks.vue'
    import delegating from '../peoplePassComponents/delegating.vue'
    import communication from '../peoplePassComponents/communication.vue'
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

</style>
