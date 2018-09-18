<template>
    <div class="warp-details">   
        <h1>请选择</h1>
        <div class="button-group">
            <router-link to="/residenceProposer" class="btnStyles"><p>申报居住登记</p></router-link>
            <router-link to="/residenceApply" class="btnStyles"><p>申领居住证<span>（请先申报居住登记）</span></p></router-link>
            <router-link to="/residenceApplication" class="btnStyles"><p>补领、换领居住证</p></router-link>
        </div>
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
</template>

<script>
    export default {
        components:{},
        data() {
            return {

            }
        },
        computed:{
           
        },
        methods: {
            open() {
                const h = this.$createElement;
                this.$msgbox({
                title: '提示',
                message: h('p', null, [
                    h('span', null, '您有正在办理此项业务，不能重复申报 ')
                ]),
                showCancelButton: true,
                showConfirmButton: false,
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

.warp-details{
    height: 100%;
    h1{
       font-size:28px;
       color: #333;
        height: 20%;
        display: flex;
        align-items: center;
        padding-left: 98px;
    }
    .button-group{
        .btnStyles{
           color:  #FFFFFF;
           display: block;
           width:460px;
           height:80px;
           text-align: center;
           background: #0070E0;
           margin: 0 auto 30px;
           line-height: 80px;
           border-radius: 6px;
           font-size: 28px;
           color: #fff;
           span {
               font-size:18px;
           }
           &:last-child{
               margin-bottom: 0;
           }
        }
    }
}
</style>
