<template>
    <div class="prove-warp">   
        <div class="prove-papers" v-for="(index, items) of proveScanText" :key="items">
            <p>{{index}}</p>
            <img :src="proveMyPhoto[items]" alt="">
            <div class="prove-btn">
                <button class="prove-btnstyle">扫描</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            proveScanText: Array,
            proveMyPhoto:Array
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
    .prove-warp{
        width: 100%;
        margin: 45px 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        .prove-papers{
            padding: 30px 21px;
            width:400px;
            height:453px;
            background:rgba(231,241,251,1);
            border-radius:8px;
            margin-right: 54px;
            margin-bottom: 48px;
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
    }
    .prove-btnstyle{
        width:154px;
        height:56px;
        background:rgba(0,140,255,1);
        border-radius:28px;
        color: #ffffff;
    }
</style>
