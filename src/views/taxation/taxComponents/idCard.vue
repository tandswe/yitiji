<template>
    <div class="idcard">
        <img :src="id">
    </div>
</template>

<script>
    export default {
         data(){
             return {
                  id:require('@/img/views/idcard03.png'),
             }
         },
    }
</script>

<style scoped>
    img{
        width:448px;
        height:269px;
    }
</style>