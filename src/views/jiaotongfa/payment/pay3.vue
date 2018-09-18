<template>
	<div class="ga-step0">
		<div class="crime-t-set">
			<div class="crime-t-title pb98">
			请输入银联卡密码  {{secCount}}s
			</div>			
		</div>
        <div class="crime-w">
            <div class="iphone-vi">    
                   
                        <div class="password">
							请输入密码：
						</div>
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
						
                             
                 
                </div>
        </div>
	</div>
</template>

<script>
	export default{
		name:'passport',
		data(){
			return {
				secCount:10
			}
		},
		methods:{
			secCountFn(){
				var _this=this	
				var inv=setInterval(function(){
					_this.secCount--
					if(_this.secCount==0){
						clearInterval(inv)
					}
				},1000)
			}
		}
	}
</script>
<style lang="scss">
.el-form-item__label{
	width:300px !important;
}
.passport-title{
	@media screen and(max-width: 1200px){
		font-size:3vw !important;	
		}
}
</style>

<style lang="scss" scoped>
	.crime-t-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 176px;
		text-align: left;
		@media screen and(max-width: 1200px){
			
		}
	}
	.pb98{
		padding-bottom: 98px;
		display:flex;
	}
	.crime-t-type{
		padding: 0 60px;
		text-align: center;
		div{
			width: 460px;
			height: 80px;
			line-height: 80px;
			margin: 0 auto;
			margin-bottom: 30px;
			color: #FFFFFF;
			font-size: 28px;
			background: #0070E0;
		}
	}
.crime-w{
    width: 720px;
    height: 360px;
    background:rgba(246,246,246,1);
    border:2px solid rgba(221,221,221,1);
	border-radius:20px;
	margin:3vh auto;
	display:flex;
	align-items: center;
	justify-content: center;
	@media screen and(max-width: 1200px){
		width: 70%;
        height: 560px;	
	}

}
.iphone-vi{
	display:flex;
	div{
		display:flex;
		align-items: center;
	}

}
</style>