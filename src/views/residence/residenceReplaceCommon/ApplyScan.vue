<template>
    <div class="scan-warp">   
        <div class="scan-papers" v-for="(index, items) of scanText" :key="items">
            <p>{{index}}</p>
            <img :src="myPhoto[items]" alt="">
            <div class="scan-btn">
                <button class="scan-btnstyle">扫描<input class="upload" @change='add_img(items)'  type="file"></button>
            </div>
        </div>
        <div class="scan-papers-min">
            <p>{{scanTextMin}}</p>
            <img :src="idPhoto" alt="">
            <div class="scan-btn">
                <button class="scan-btnstyle">拍照</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"photoname",
        props:{
            scanText: Array,
            scanTextMin:String,
            idPhoto:String
        },
        data() {
            return {
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
               myPhoto: [
                    require("@/img/views/idFont.png"),
                    require("@/img/views/idFont.png")
                ],
                myPhotos:""
            }
        },
        computed:{
           
        },
        mounted(){

        },
       methods:{
            add_img(id){
                let reader =new FileReader();  
            let img1=event.target.files[0];  
            let type=img1.type;//文件的类型，判断是否是图片  
            let size=img1.size;//文件的大小，判断图片的大小  
            if(this.imgData.accept.indexOf(type) == -1){  
                alert('请选择我们支持的图片格式！');  
                return false;  
            }  
            if(size>3145728){  
                alert('请选择3M以内的图片！');  
                return false;  
            }  
            var uri = ''  
            let form = new FormData();   
            form.append('file',img1,img1.name);  
            this.$axios.post('/inteGration/api/jzz/upload',form,{  
            }).then(data => {  
                var papersPhoto = data.data.data.id
                if(papersPhoto) {
                     this.$axios.get('/inteGration/api/jzz/downloadfile',{
                        params:{
                            imageId: papersPhoto
                        }
                    }).then(data => { 
                       this.$set(this.myPhoto,id,data.data.data.base64)
                    })
                }   
              
            }).catch(error => {  
                alert('上传图片出错！');  
            })  
            }
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
        position: relative;
        overflow: hidden;
    }
    .upload{
            outline: none;
            display: block;
            width: 400px;
            height: 100px;
            position: absolute;
            top: 0;
            left: -220px;
            cursor: pointer
    }
</style>
