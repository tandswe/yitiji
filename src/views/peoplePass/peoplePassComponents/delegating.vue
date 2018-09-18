<template>
	<div class="wrap">   
            <div class="weather-warp">
                <h1>请仔细阅读业务办理须知</h1>
                    <div class="weather-text">
                        <p>居民家庭经济状况核对授权书</p>
                        <div class="weather-text-center">
                        </div>
                    </div>
            </div>
    </div>
</template>

<script>
export default{
    components: {},
  data() {
    return {
		isshow: false
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
.weather-warp{
    .weather-text{
        width: 90%;
        height: 570px;
        overflow: auto;
        margin:  0 auto;
        background: #eef9ff;
        padding: 24px 55px 0;
        box-sizing: border-box;
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
