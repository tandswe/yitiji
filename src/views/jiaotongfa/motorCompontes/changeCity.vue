<template>
    <div class="warp">   
        <h1>申请信息</h1>
      <div class="demo-input-suffix">
       <span> 申请条件</span>
        <el-select v-model="shanghai" placeholder="请选择申请条件" >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
        </el-select>
       </div>
       <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shanghai: ''
            }
        },
        computed:{
           
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .warp{
        // height: 100%;
        width: 90%;
        margin: 47px auto 0;
        text-align: left;
        h1{
        margin-bottom: 47px;
        font-size: 28px;
        }
        
    }
.demo-input-suffix{
    font-size: 24px;
    color: #333;
    span{
        margin-right: 40px;
    }
}

</style>
