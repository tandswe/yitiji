<template>
    <div class="warp">
        <!-- 申请人相片（可选填） -->
        <div v-if="allShow"><!-- 总判断开始 -->
            <div v-if="showchange">
                <el-form :rules="rules" :model="formData">
                    <h1>申请人相片（可选填）</h1>
                    <el-form-item label="相片流水号" label-width="220px" prop="photoStreamNum">
                        <el-input v-model.number="formData.photoStreamNum"></el-input>
                    </el-form-item>
                    <h1>申请人身份证明</h1>
                    <el-form-item label="身份证明类型" label-width="220px" prop="idType">
                        <el-select v-model="formData.idType" placeholder="请选择申请条件" @change="TypeClick">
                            <el-option label="居民身份证" value="id"></el-option>
                            <el-option label="户口簿" value="rd"></el-option>
                            <el-option label="临时居民身份证" value="tp"></el-option>
                            <el-option label="驾驶证" value="dri"></el-option>
                            <el-option label="护照" value="pp"></el-option>
                            <el-option label="公安机关出示的身份证明文件" value="pb"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <ApplyScan :scanText="scanText" :scanTextMin="scanTextMin" :myPhoto="myPhoto"
                           :idPhoto="idPhoto"></ApplyScan>
                <div style="margin-top: 4vh;text-align: center;padding-bottom:10px;">
                    <button-sub btname="下一步" @click.native="next" class="next-btn"></button-sub>
                </div>
            </div>
            <!-- 合法稳定住所证明 -->
            <div v-else>
                <h1>合法稳定住所证明</h1>
                <h2>提供以下至少一种合法稳定住所证明材料：</h2>
                <el-form>
                    <el-form-item label="居住处所类型" required>
                        <el-select v-model="changeValue" placeholder="请选择申请条件" @change="dwellClick">
                            <el-option label="自有住宅" value="zy"></el-option>
                            <el-option label="租赁房屋" value="zp"></el-option>
                            <el-option label="公有住宅" value="gy"></el-option>
                            <el-option label="企事业单位" value="qy"></el-option>
                            <el-option label="宾馆旅店" value="bg"></el-option>
                            <el-option label="水上船舶" value="ss"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <ApplyDwell :scanText="scanText" :scanTextMin="scanTextMin" :myPhoto="myPhoto"></ApplyDwell>
            </div>
        </div><!-- 总判断结束 -->
        <!-- 合法稳定住所证明 -->
        <div v-else><!-- 总判断结束 -->
            <div v-if="showchanges">
                <ApplyProve type="合法稳定住所" :proveScanText="proveScanText" :proveMyPhoto="proveMyPhoto"></ApplyProve>
            </div>
            <!-- 连续就读证明 -->
            <div v-else>
                <ApplyProve type="连续就读" :proveScanText="CTtext" :proveMyPhoto="proveMyPhoto"></ApplyProve>
            </div>
        </div><!-- 总判断结束 -->
        <!--<div @click="all">这里是大切换</div>-->
        <!--<div @click="check">这里是切换</div>-->
        <!--<div @click="checks">这里是切换2</div>-->
    </div>
</template>

<script>
    import ApplyScan from './ApplyScan'
    import ApplyDwell from './ApplyDwell'
    import ApplyProve from './ApplyProve'
    import buttonSub from "@/components/base/buttonSub"

    export default {
        components: {
            ApplyScan,
            ApplyDwell,
            buttonSub,
            ApplyProve
        },
        data() {
            return {
                formData: {
                    photoStreamNum: 233,
                    idType: ''
                },

                changeValue: '',
                scanText: ['临时居民身份证正面：', '临时居民身份证反面：'],
                scanTextMin: '免冠正脸照',
                myPhoto: [require('@/img/views/idFont.png'), require('@/img/views/idFont.png')],
                idPhoto: require('@/img/views/id@4x.png'),
                showchange: true,
                showchanges: true,
                allShow: true,
                proveScanText: ['请上传工商营业执照：', '劳动合同：', '用人单位出具的劳动关系证明：', '其他能够证明有合法稳定就业 的材料：'],
                proveMyPhoto: [require('@/img/views/registe.png'), require('@/img/views/registe.png'), require('@/img/views/registe.png'), require('@/img/views/registe.png')],
                CTtext: ['请上传学生证：', '就读学校出具的连续就读证明：'],

                rules: {
                    photoStreamNum: [
                        { required: true, message: '请输入相片流水号', trigger: 'blur'},
                        {type: 'number', message: '必须为数值'}
                    ],
                    idType: [
                        { required: true, message: '请选择身份证明类型', trigger: 'change'}
                    ]
                }
            }
        },
        computed: {},
        methods: {
            TypeClick() {
                console.log(this.changeValue)
                if (this.changeValue == 'rd') {
                    this.scanText = ['户口簿：', '户口簿个人页：'],
                        this.scanTextMin = '免冠正脸照',
                        this.myPhoto = [require('@/img/views/registe.png'), require('@/img/views/registe.png')],
                        this.idPhoto = require('@/img/views/id@4x.png')
                } else {
                    this.scanText = ['临时居民身份证正面：', '临时居民身份证反面：'],
                        this.scanTextMin = '免冠正脸照',
                        this.myPhoto = [require('@/img/views/idFont.png'), require('@/img/views/idFont.png')],
                        this.idPhoto = require('@/img/views/id@4x.png')
                }
            },
            dwellClick() {
                if (this.changeValue == 'zy') {
                    this.scanText = ['户口簿：'],
                        this.scanTextMin = '免冠正脸照',
                        this.myPhoto = [require('@/img/views/registe.png'), require('@/img/views/registe.png')],
                        this.idPhoto = require('@/img/views/id@4x.png')
                } else {
                    this.scanText = ['临时居民身份证正面：', '临时居民身份证反面：'],
                        this.scanTextMin = '免冠正脸照',
                        this.myPhoto = [require('@/img/views/idFont.png'), require('@/img/views/idFont.png')],
                        this.idPhoto = require('@/img/views/id@4x.png')
                }
            },
            next() {
                this.$router.push('/residenceApplyCondition')
            },
            check() {
                this.showchange = !this.showchange
            },
            checks() {
                this.showchanges = !this.showchanges
            },
            all() {
                this.allShow = !this.allShow
            }
        }
    }
</script>
<style>
.el-form-item{
    display:flex;
}
</style>

<style lang="scss" scoped>
    .warp {
        max-height: 100%;
        width: 94%;
        margin: 47px auto 0;
        text-align: left;
        h1 {
            margin-bottom: 47px;
            font-size: 28px;
        }
        h2 {
            color: #999999;
            font-size: 24px;
            margin: 36px 0;
            font-weight: 500;
        }
    }
    .sltj{
        margin:20vh 0;
    }
</style>
