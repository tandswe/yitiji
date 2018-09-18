<template>
    <div class="wrap">   
            <succeed cardText="请取走收好"></succeed>
    </div>
</template>

<script>
    import succeed from '../peoplePassComponents/succeed.vue'
    export default {
        components:{succeed},
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
