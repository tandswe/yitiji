<template>
    <div class="wrap">   
 
        <div>
            <succeed cardText="请取走收好"></succeed>
        </div>
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
