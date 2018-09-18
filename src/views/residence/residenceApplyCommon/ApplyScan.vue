<template>
    <div class="scan-warp">   
        <div class="scan-papers" v-for="(index, items) of scanText" :key="items">
            <p>{{index}}</p>
            <img :src="myPhoto[items]" alt="">
            <!--<div class="scan-btn">-->
                <!--<button class="scan-btnstyle">扫描</button>-->
            <!--</div>-->

            <!--todo: 切换地址-->
            <el-upload
                    class="upload-btn"
                    action="http://192.168.13.58:8080/inteGration/api/jzz/upload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="uploadSuccess"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :show-file-list="false"
                    :file-list="fileList">
                <el-button size="big">扫描</el-button>
            </el-upload>
        </div>
        <div class="scan-papers-min">
            <p>{{scanTextMin}}</p>
            <img :src="idPhoto" alt="">
            <!--<div class="scan-btn">-->
                <!--<button class="scan-btnstyle">拍照</button>-->
            <!--</div>-->
            <el-upload
                    class="upload-btn"
                    action="http://192.168.13.58:8080/inteGration/api/jzz/upload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-success="uploadSuccess"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :show-file-list="false"
                    :file-list="fileList">
                <el-button size="big">拍照</el-button>
            </el-upload>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            scanText: Array,
            myPhoto:Array,
            scanTextMin:String,
            idPhoto:String
        },
        data() {
            return {
              fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        computed:{
           
        },
        methods:{
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          },
          handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          },
          beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
          },
          uploadSuccess(response, file, fileList,index) {
            console.log(response, file, fileList,index)
            // console.log(response,'上传成功啦')

            this.$axios.get('/inteGration/api/jzz/downloadfile?imageId='+response.data.id).then(res => {
                this.idPhoto = 'data:image/png;'+res.data.data.base64
            })
          },
        }
    }
</script>

<style lang="scss" scoped>
    .scan-warp{
        width: 100%;
        margin: 45px 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        .scan-papers{
            padding: 30px 21px;
            width:400px;
            height:453px;
            background:rgba(231,241,251,1);
            border-radius:8px;
            margin-right: 54px;
            text-align: center;
            box-sizing: border-box;
            img{
                width:360px;
                height:216px;
                margin-bottom: 48px;
            }
            p{
                margin-bottom: 29px;
                text-align: left;
            }
        }
        .scan-papers-min{
            padding: 30px 21px;
            width:256px;
            height:453px;
            background:rgba(231,241,251,1);
            border-radius:8px;
            margin-right: 54px;
            text-align: center;
            box-sizing: border-box;
            p{
                margin-bottom: 29px;
                text-align: left;
            }
            img{
                width:216px;
                height:216px;
                margin-bottom: 48px;
            }
        }
    }
    .scan-btnstyle{
        width:154px;
        height:56px;
        background:rgba(0,140,255,1);
        border-radius:28px;
        color: #ffffff;
    }
    .upload-btn {
        .el-button {
            background: #008cff;
            border-radius:25px;
            color: #fff;
            width:154px;
            height:56px;
            cursor: pointer;
            font-size:24px;
            border: 0 none;
        }
    }
</style>
