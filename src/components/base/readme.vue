<template>
    <div class="wrap-r" v-html="readata">
			
	</div>
</template>

<script>
    export default {
        props:['readata']
        
    }
</script>

<style scoped lang="scss">
.wrap-r{
		width: 100%;
		float: right;	
        background:#e0f2fc;
        border:1px solid #b0cbe5;
        border-radius:3px;
		line-height:36px;
		padding: 40px 20px;
		color:rgba(51,51,51,1);
        font-size: 24px;
        text-align:left;
        @media screen and (max-width: 1200px){
			font-size:1.5vh;
			line-height:2.2vh;
			padding:40px 50px;
			box-sizing:border-box;
			overflow-y:auto;
            }
	}


</style>