<template>
	<div>
        <h1>{{heardline}}</h1>
        <div class="Photo-inp" v-if="!showBtn"><input type="text"><button>手动输入</button></div>
        <div class="hint" v-if="showBtn">
            请点头
        </div>
        <div class="photo-myPhoto">
            <div class="photo-center">
                <img :src="myphoto" alt="">
            </div>
        </div>
	</div>
</template>

<script>
	export default{
        props:{
            heardline:String,
            showIF:{
                default: true,
                type:Boolean
            },
            myphoto:{
                default:require("@/img/views/photo.png")
            },
            showBtn:{
                default:false
            }
        },
		components:{
		},
		data(){
			return {
		}
        }
}
</script>

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
.Photo-inp{
    position: relative;
    width:562px;
    margin: 0 auto 38px;
    input{
        width:562px;
        height:48px;
        background:rgba(248,248,248,1);
        border:1px solid rgba(204,204,204,1);
        border-radius:9px;
    }
    button{
        position: absolute;
        top:0;
        right: -3px;
        width:137px;
        height:52px;
        background:linear-gradient(0deg,rgba(8,135,208,1) 0%,rgba(53,176,243,1) 100%);
        border-radius:11px;
        color: #ffffff;
    }
}
.photo-center{
    width: 560px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eef9ff;
    border-radius:8px;
    margin: 0 auto;
}
.hint{
    width:191px;
    height:60px;
    line-height: 60px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(204,204,204,1);
    margin: 0 auto 40px;
}
</style>