<template>
    <div>
			<div class="photo-wrap pt20">
            <div class="leftfo"><h1>个人基本信息</h1></div>
			<el-form ref="form" :model="form" label-width="160px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="姓名" required>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="证件号码" required>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>                          
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="联系电话" required>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>                      
                </el-row>
				</el-form>
			</div>

            <div class="leftfo"><h1>居住地址信息</h1></div>
			<el-form ref="form" :model="form" label-width="180px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="地区" >
                            <div id="area">
                                <select  placeholder="请选择" class="select-id" >
                                    <option label="区域一" value="shanghai"></option>
                                    <option label="区域二" value="beijing"></option>
                                </select>
                                <select  placeholder="请选择"  class="select-id select-m">
                                    <option label="区域一" value="shanghai"></option>
                                    <option label="区域二" value="beijing"></option>
                                </select>
                            </div>
                    </el-form-item> 
                    </el-col>
                    <el-form-item label="街道（乡/镇）" required>
                            <el-select  placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                    </el-form-item>                          
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="详细地址" required>
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-form-item label="派出所" required>
                            <el-select  placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                    </el-form-item>                          
                </el-row>
                <el-row>
                    <el-form-item label="注销原因" required>
                            <el-select  placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                    </el-form-item>                      
                </el-row>
			</el-form>
            <div @click="substep"  style="margin-top:5vh">
                <button-sub btname="同意"></button-sub>
            </div>
    </div>
</template>

<script>
    import buttonSub from "@/components/base/buttonSub"
    export default {
        props:['title'],
        components:{
            buttonSub 
        },
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
<style>
.el-input{
 text-align: left;
}
.el-form-item{
 text-align: left;    
}
#area .el-input{
  
}
#area .el-input__inner{
    width:200px;
}
.el-input__inner{
    width:24vw !important;}

</style>

<style lang="scss" scoped>
    .marginarea{
        margin-left:12px;
    }
    .leftfo{
        font-size:28px;
        text-align: left;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:36px;
        margin-bottom:4vh;
        padding-left:40px;
    }
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
    .select-id{
        float: left;
        height: 7vw;
        width: 40%;
        border: 0;
        
    }
    .select-m{
        margin-left: 5%;
    }
</style>