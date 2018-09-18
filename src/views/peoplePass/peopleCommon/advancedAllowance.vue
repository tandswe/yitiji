<template>
    <div class="wrap">   
        <div >
             <accreditBooks></accreditBooks>
        </div>
        <div v-if="isShow">
            <delegating></delegating>
        </div>
        <div v-if="isShow">
            <communication></communication>
        </div>
        <div v-if="isShow">
            <succeed cardText="请取走收好"></succeed>
        </div>
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

</style>
