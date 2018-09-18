<template>
    <div class="scan-warp">   
        <div class="scan-papers" v-for="(index, items) of scanText" :key="items">
            <p>{{index}}</p>
            <img :src="myPhoto[items]" alt="">
            <div class="scan-btn">
                <button class="scan-btnstyle">扫描</button>
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
        props:{
            scanText: Array,
            myPhoto:Array,
            scanTextMin:String,
            idPhoto:String
        },
        data() {
            return {
                
            }
        },
        computed:{
           
        },
        methods:{

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
</style>
