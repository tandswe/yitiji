<template>
    <div class="dwell-warp">   
        <div class="dwell-papers" v-for="(index, items) of scanText" :key="items">
            <p>{{index}}</p>
            <img :src="myPhoto[items]" alt="">
            <div class="dwell-btn">
                <button class="dwell-btnstyle">扫描</button>
            </div>
        </div>
        <div :class="scanText.length == 2 ? 'dwell-papers-min-two' : 'dwell-papers-min'">
            <div class="dwell-papers-pt">
                <img :src="idPhoto" alt="">
                <p>购房合同证明1</p>
            </div>
            <div class="dwell-papers-pt">
                <img :src="idPhoto" alt="">
                <p>购房合同证明1</p>
            </div>
            <div class="dwell-papers-pt">
                <img :src="idPhoto" alt="">
                <p>购房合同证明1</p>
            </div>
            <div class="dwell-papers-pt">
                <img :src="idPhoto" alt="">
                <p>购房合同证明1</p>
            </div>
            <div class="dwell-papers-pt">
                <img :src="idPhoto" alt="">
                <p>购房合同证明1</p>
            </div>

            <div class="dwell-papers-pt">
                <img :src="idPhoto" alt="">
                <p>购房合同证明1</p>
            </div>
            <div class="dwell-papers-pt">
                <img :src="idPhoto" alt="">
                <p>购房合同证明1</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:{
            scanText: Array,
            myPhoto:Array,
            scanTextMin:String
        },
        data() {
            return {
                idPhoto: require('@/img/views/myPhoto.png')
            }
        },
        computed:{
           
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .dwell-warp{
        width: 100%;
        margin: 45px 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        .dwell-papers{
            padding: 30px 21px;
            width:400px;
            height:453px;
            background:rgba(231,241,251,1);
            border-radius:8px;
            margin-right: 38px;
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
        .dwell-papers-min{
           display: flex;
           flex-wrap:wrap;
           width: 62%;
           .dwell-papers-pt{
               width:160px;
               text-align: center;
               margin-right:36px;
               &:nth-child(4n){
                   margin-right: 0;
               }
               img{
                width:inherit;
                height:125px;
               }
               p{
                   margin: 32px 0;
               }
           }
        }
        .dwell-papers-min-two{
            display: flex;
           flex-wrap:wrap;
           margin-top: 48px;
           .dwell-papers-pt{
               width:240px;
               text-align: center;
               margin-right:70px;
               &:nth-child(4n){
                   margin-right: 0;
               }
               img{
                width:inherit;
                height:180px;
               }
               p{
                   margin: 20px 0;
               }
           }
        }
    }
    .dwell-btnstyle{
        width:154px;
        height:56px;
        background:rgba(0,140,255,1);
        border-radius:28px;
        color: #ffffff;
    }
</style>
