<template>
    <div class="step"  :class="{actived}">
            <div class="step-main">
              {{title}}
            </div>
            <div class="step-line">
            </div>
    </div>
</template>

<script>
  
    export default {
        props:['title','keys','active'],
        data() {
            return {
                actived:false,
                
            }
        },
        created(){
           if(this.keys<=this.active){
                 this.actived=true
             }
          
        },
        watch:{
            active(newVal){
             this.actived=false
             if(this.keys<=newVal){
                 this.actived=true
             }
             
            }
        },
       
        methods:{
            
        }
    }
</script>

<style scoped lang="scss">
.step {
    flex:1;
    position: relative;
    height:100%;   
    font-size:26px;
     @media screen and (max-width: 1200px){
         
           font-size:43px;
           
           }
    color:#333333;
}
.actived{
    color:#0070E0;
}
.actived .step-line{
    background-color:#0070E0;
}
.step-main {
    text-align: center;
    height:96%;
    font-family:MicrosoftYaHei; 
    display:flex;
    align-items:center;
    justify-content: center;
}
.step-line {
    width:100%; 
    height:4%;
    background-color:#E6E6E6;
    z-index: 10000;
}
</style>