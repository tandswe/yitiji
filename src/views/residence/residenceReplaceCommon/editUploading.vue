<template>
    <div>   
        <div class="editCenter">
            <el-form  ref="ruleForm" label-width="150px" :model="allMsg">
            <h1>个人基本信息</h1>
                <el-form-item label="姓名:">
                    <el-input v-model="allMsg[0]"></el-input>
                </el-form-item>
                <el-form-item label="证件号码:">
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input ></el-input>
                </el-form-item>
            </el-form>
            <el-button type="text" @click="open">点击打开 Message Box</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            allMsg:Array
        },
        data() {
            return {
            }
        },
        computed:{
        },
        methods:{
             open() {
                 setTimeout(()=>{
                     
                 },1000)
                const h = this.$createElement;
                this.$msgbox({
                title: '提示',
                message: h('p', null, [
                    h('span', null, '提交成功 ')
                ]),
                showCancelButton: false,
                showConfirmButton: true,
                showClose: false,
                confirmButtonText: '确定',
                cancelButtonText: '关闭',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                    instance.confirmButtonLoading = true;
                    instance.confirmButtonText = '执行中...';
                    setTimeout(() => {
                        done();
                        setTimeout(() => {
                        instance.confirmButtonLoading = false;
                        }, 300);
                    }, 3000);
                    } else {
                    done();
                    }
                }
                }).then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-form-item {
    margin: 16px 0;
    display: inline-block;
  }
  .el-form-item__content {
    font-size: 24px;
    line-height: 32px;
    position: static;
  }
.el-input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 412px;
    height:54px;
}
</style>
