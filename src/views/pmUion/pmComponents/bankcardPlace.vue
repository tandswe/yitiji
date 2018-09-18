<template>
    <div>
       <div class="passport-title">
			请放置好您的助学收款的银行账户
			</div>
			<div class="photo-wrap pt20">
				<el-form ref="form" :model="form" label-width="120px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="活动名称" required>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="开户行" required>
                            <el-select  placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>                        
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="银行卡号" required>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="联系电话" required>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>                        
                </el-row>
				</el-form>
			</div>
            <div @click="substep">下一步</div>
    </div>
</template>

<script>
    export default {
        props:['title'],
        data() {
            return {
                pic1: require("@/img/views/fingerprint.png")
            }
        },
        methods:{
            substep(){
                this.$emit("listenType")
            }
        }
        
    }
</script>

<style lang="scss" scoped>
	.pt20{
		margin-top: 66px;
	}
	.photo-card {
		width: 562px;
		height: 420px;
		position: relative;
		background: rgba(238, 249, 255, 1);
		margin: 0 auto;
		img {
			display: block;
			width: 234px;
			height: 264px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	
	.photo-title-input-wrap {
		display: inline-flex;
		position: relative;
		padding-bottom: 38px;
		margin-top: 20px;
		input {
			height: 54px;
			line-height: 52px;
			box-sizing: border-box;
			border: 1px solid #CCCCCC;
			width: 562px;
			padding-right: 140px;
			padding-left: 20px;
			background: rgba(248, 248, 248, 1);
		}
		.photo-btn-wrap {
			position: absolute;
			top: 0;
			right: 0;
			background: #35B0F3;
			height: 54px;
			line-height: 54px;
			color: #FFFFFF;
			border-radius: 10px;
			text-align: center;
			padding: 0 17px;
			font-size: 26px;
		}
	}
	
	.passport-title {
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
	
	.pb98 {
		padding-bottom: 98px;
	}
</style>