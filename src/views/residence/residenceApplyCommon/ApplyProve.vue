<template>
    <div>
        <h1>{{type}}证明</h1>
        <h2>提供以下至少一种{{type}}证明材料：</h2>
        <div class="prove-warp">
            <div class="prove-papers" v-for="(index, items) of proveScanText" :key="items">
                <p>{{index}}</p>
                <img :src="proveMyPhoto[items]" alt="">
                <div class="prove-btn">
                    <button class="prove-btnstyle">扫描</button>
                </div>
            </div>
        </div>

        <div style="margin-top: 30px;text-align: center;padding-bottom: 20px;">
            <button-sub btname="下一步" @click.native="next" class="next-btn"></button-sub>
        </div>
    </div>
</template>

<script>
    import buttonSub from "@/components/base/buttonSub"

    export default {
        props: {
            type: String,
            proveScanText: Array,
            proveMyPhoto: Array
        },
        components: {
            buttonSub
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            next() {
                // this.$router.push('/residenceApplyUploading')
                this.$store.commit('changeTabIndex', {count: 3})
            }
        }
    }
</script>

<style lang="scss" scoped>
h2{
     font-size:30px;
    @media screen and (max-width: 1200px){
        font-size:50px;
        margin-top:3vh;
    }
}
    .prove-warp {
        width: 100%;
        margin: 45px 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        .prove-papers {
            padding: 30px 21px;
            width: 400px;
            min-height: 600px;
            background: rgba(231, 241, 251, 1);
            border-radius: 8px;
            margin-right: 54px;
            margin-bottom: 48px;
            text-align: center;
            box-sizing: border-box;
           
             @media screen and (max-width: 1200px){
                 width:420px;
                 font-size:2.5vw;
             }
            img {
                width: 360px;
                height: 216px;
                margin-bottom: 60px;
            }
            p {
                height:5vh;
                text-align: left;
                @media screen and (max-width:1200px){
                    height:6vh;
                }
               
            }
        }
    }

    .prove-btnstyle {
        width: 154px;
        height: 56px;
        background: rgba(0, 140, 255, 1);
        border-radius: 28px;
        color: #ffffff;
    }
</style>
