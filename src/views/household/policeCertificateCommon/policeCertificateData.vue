<template>
	<div class="Data-warp">
        <div class="Data-form" v-if="isShow">
            <h1>个人基本信息</h1>
            <el-form label-width="140px">
        
            <el-row>
                <el-col :span="10">
                 <el-form-item label="姓名" required>
                    <el-input></el-input>
                 </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="证件号码" required>
                            <el-input></el-input>
                    </el-form-item>
                </el-col>

            </el-row>
            <el-row>
                <el-col :span="10">
                    <el-form-item label="联系电话" required>
                            <el-input></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <div class="flex-start">
                        <div>
                            <el-form-item label="邮寄地址" id="area1" required>
                                <el-select  placeholder="请选择活动区域" v-model="changeValue">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item  id="area2">
                                <el-select  placeholder="请选择活动区域"   v-model="changeValue">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                       
                </el-col>
                <el-col :span="10" label-width="10px">
                    <div>
                            <el-form-item id="area3" required>
                             <el-input></el-input>
                            </el-form-item>
                    </div>
                    
                </el-col>
            </el-row>
            <!-- <el-form-item label="联系地址" required>
                <el-select v-model="changeValue" placeholder="请选择申请条件">
                        <el-option label="广州市" value="id"></el-option>
                </el-select>
                <el-select v-model="changeValue" placeholder="请选择申请条件">
                        <el-option label="区/县" value="id"></el-option>
                </el-select>
                <el-input placeholder="请输入详细地址"></el-input>
            </el-form-item> -->
            <hr>
            <h1>申报信息</h1>
            <el-row>
                <el-col :span="10">
                    <el-form-item label="证明用途" required>
                        <el-select v-model="changeValue" placeholder="请选择申请条件">
                                <el-option label="广州市" value="id"></el-option>
                        </el-select>
                    </el-form-item>
                  </el-col>
                <el-col :span="10">
                    <el-form-item label="使用单位" required>
                                    <el-input placeholder="请输入单位/公司名称"></el-input>
                    </el-form-item>
             </el-col>
            </el-row>
        </el-form>
        </div>
        <div  v-if="isShow">
            <policePhoto :heardline="heardline" :myphoto="myphoto" :showBtn="true"></policePhoto>
        </div>
        <div v-if="isShow">
            <policeGet></policeGet>
        </div>
        <div v-if="isShow">
            <policeSite></policeSite>
        </div>
        <div >
            <policeSignature></policeSignature>
        </div>
        <div v-if="isShow">
            <policeVoucher></policeVoucher>
        </div>
	</div>
</template>

<script>
import policePhoto from './policeComponents/policePhoto'
import policeGet from './policeComponents/policeGet'
import policeSite from './policeComponents/policeSite'
import policeSignature from './policeComponents/policeSignature'
import policeVoucher from './policeComponents/policeVoucher'
	export default{
		name:'policeCertData',
		components:{
            policePhoto,
            policeGet,
            policeSite,
            policeSignature,
            policeVoucher
		},
		data(){
			return {
                changeValue:'',
                isShow:false,
                heardline:"请放置好你的照片回执",
                // myphoto: require("@/img/views/photo.png")
                myphoto: require("@/img/views/id@5x.png")
			}
		},
		methods:{

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
.Data-warp{
    padding: 0 10px;
}
</style>
<style lang="scss">
#area1 .el-input__inner {
	width: 203px !important;
}

#area2 .el-input__inner {
	width: 203px !important;
}

#area2 {
	width: 100px;
	.el-form-item__content{
     margin-left: 10px !important;
}

}

#area3{
    .el-form-item__content{
     margin-left: 100px !important;
}
}

#area4 .el-input__inner {
	width: 990px;
}
</style>
