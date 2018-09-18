<template>
	<div class="wrap">   
            <div class="weather-warp">
                <h1>请仔细阅读业务办理须知</h1>
                    <div class="weather-text">
                        <p>{{title}}</p>
                        <div class="weather-text-center">
                        </div>
                        
                    </div>
                    <slot></slot>
            </div>
    </div>
</template>

<script>

export default {
   
    props:{
        title:{
            type:String,
            default:"机动车驾驶证转入换证办理须知"
        }
    },
  data() {
    return {
    };
  },
	methods:{
		
	}
}
</script>
<style>
/*.crimeTestifyFn .main .main-center .content{
	padding: 0;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}*/
</style>
<style lang="scss" scoped>
h1{
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
	align-items: center;
    padding-left: 98px;
    padding-top: 48px;
    padding-bottom: 30px;
}
button{
    width:154px;
    height:56px;
    background:rgba(0,140,255,1);
    border-radius:30px;
    font-size:26px;
    line-height: 56px;
    color: #fff;
    margin: 20px;
    &:nth-of-type(1){
        background: #CCCCCC;
    }
}

.weather-warp{
    .weather-text{
        width: 90%;
        height: 570px;
        overflow: auto;
        margin:  0 auto;
        background: #eef9ff;
        padding: 24px 55px 0;
        box-sizing: border-box;
         @media screen and (max-width:1200px){
             height:35vh !important;
         }
        .weather-text-center{
            line-height: 30px;
            white-space: pre-wrap;
            text-align: left;
        }
    }
}
.center-btn{
    width:460px;
    margin: 0 auto;
    button{
        width:460px;
        height:80px;
        background:rgba(0,112,224,1);
        border-radius:6px;
        margin-bottom: 30px;
        color: #fff;
    }
}
</style>
