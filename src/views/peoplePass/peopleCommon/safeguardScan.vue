<template>
    <div class="wrap">   
        <div v-if="isShow">
             <registered text="请放入户口本首页 60s"></registered>
        </div>
        <div>
            <registered text="请放户口本个人页 60s"></registered>
        </div>
    </div>
</template>

<script>
    import registered from '../peoplePassComponents/registered.vue'
    export default {
        components:{registered},

        data() {
           return{
               isShow: false
           }
        },
        computed:{
          
        },
         mounted(){
        },
    }
</script>

<style lang="scss" scoped>

</style>
