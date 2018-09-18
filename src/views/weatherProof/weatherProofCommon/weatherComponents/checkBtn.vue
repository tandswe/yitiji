<template>
	<div class="wrap">   
            <div class="checkBtn">
            <h1>请填写您的申报材料</h1>
            <div class="center-btn">
                <button>受理点领取</button>
                <button>单位/邮寄领取</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
	name:'entryDndexit',
	data(){
		return{
        }
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
h1{
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
	align-items: center;
    padding-left: 98px;
    padding-top: 48px;
    padding-bottom: 140 px;
}
</style>
