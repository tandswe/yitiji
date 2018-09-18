<template>
    <div >
         <span 
         @mousedown="btdown()"  
         @mouseup="btdown()" 
         :class="{click:btndown}"
         :style="{'background':backgroundcolor}"
         >
         {{btname}}
         </span>
    </div>
</template>

<script>
    export default {
        props:{
            btname:String,//按钮名称
            backgroundcolor:String,//按钮颜色
            divw:'',//按钮宽度
            },
        data() {
            return {
                btndown: 0,
                
            }
        },
        methods:{
            btdown(){
                this.btndown=!this.btndown
            }
        }
        
    }
</script>

<style scoped lang="scss">
div{
    text-align:center;
}
span{
    font-size:30px;
    background:#008CFF;
    color:#fff;
    border-radius:10px;
    display:inline-block;
    padding:10px 20px;
    cursor:pointer;
    @media screen and (max-width:1200px){
    font-size:60px;
    padding:0.5vh 25px;
    border-radius:20px;  


    }
}
.click{
    background:#ccc;
    color:#fff;
}
</style>