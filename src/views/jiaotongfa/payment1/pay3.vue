<template>
	<div class="ga-step0">
		<div class="crime-t-set">
			<div class="crime-t-title pb98">
			请输入银联卡密码  {{secCount}}s
			</div>
			
		</div>
        <div class="crime-w">
            <div class="iphone-vi">    
                    <el-form   label-width="180px">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="请输入密码">
                                        <el-input></el-input>
                                    </el-form-item> 
                                </el-col>
                            </el-row>
                    </el-form>    
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

<style lang="scss" scoped>
	.crime-t-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 176px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
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
    margin-left:auto;
    margin-right: auto;
    .iphone-vi{
    width:48%;
    margin-top:160px;
 
}
}

</style>