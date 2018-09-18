<template>
    <div class="step-wrap">
        <slot>
        </slot>
    </div>
</template>

<script>
   
    export default {
       
        mounted(){
           
        },
        watch:{
         
        },
        computed:{
          
        },
        methods:{
            
        }
        
    }
</script>

<style scoped lang="scss">
.step-wrap{
    display:flex;
    background:#fff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    padding: 0 30px;
    box-sizing: border-box;
    height:100%;
   
}
</style>