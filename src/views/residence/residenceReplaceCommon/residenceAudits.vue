<template>
    <div class="warp">   
        <div v-if="showEssent">
            <div class="essentialCenter">
            <h1>个人基本信息</h1>
            <p>姓名：苏东坡</p>
            <p>证件号码：440923199202156632</p>
            </div>
             <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div class="residenceCenter">
                <h1>可申领居住证的地区</h1>
                <p>居住登记地区：广东省肇庆市</p>
            </div>
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div class="entourageCenter">
                <h1>申领信息</h1>
                <p>申领条件：申报居住登记满半年</p>
            </div>
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div class="entourageCenter">
                <h1>申请人相片</h1>
                <p>相片流水号：201808100721B90</p>
                <button @click="jumpPhoto">修改</button>
            </div>
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div class="legalCenter">
                <h1>申请人身份证明</h1>  
                <img :src="myPhoto" alt="" v-for="(col, index) of 3" :key="index">
                <button @click="jumpPhoto">修改</button>
            </div>
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div style="text-align: center;"  @click="allSub">
                <buttonSub btname="提交"></buttonSub>
            </div>
        </div>
        <editUploading :allMsg="msg" v-else></editUploading>
        <h4>请仔细核对以上信息，如需修改请点击“修改”按钮，却问无误后点击提交</h4>
    </div>
</template>

<script>
import editUploading from './editUploading'
import buttonSub from "@/components/base/buttonSub"
    export default {
        components:{
            editUploading,
            buttonSub
        },
        data() {
            return {
                myPhoto: require('@/img/views/myPhoto.png'),
                msg:['1','2'],
                showEssent: true
            }
        },
        computed:{
        },
        methods:{
            jumpPhoto(){
                this.$store.commit('changeTabIndex',{count:2})
            },
            editMsg() {
                this.showEssent =false
                this.msg = ['2','3']
            },
            allSub(){
                // this.$axios.post('/inteGration/api/jzz/populationSave',
                // this.getLStroage).then(data=>{
                //     console.log(data)
                //     this.$message({
                //     message: data.data.errmsg,
                //     type: 'success'
                //     });
                //     this.$store.state.home.headTabIndex=0
                //     this.$router.push('/')
                // })
                this.$store.state.home.headTabIndex=0
                    this.$router.push('/')
            },
        }
    }
</script>

<style lang="scss" scoped>
@mixin buttonStyles{
            position: absolute;
            top: 34px;
            right: 0;
}
@mixin h1Styles{
        padding-top: 47px;
}
    .warp{
    height: 100%;
    padding-left: 98px;
    padding-top: 51px;
    text-align: left;
    width: 90%;
    h1{
        margin-bottom: 47px;
        font-size: 28px;
    }
    h3{
        margin: 47px 0;
    }
    h4{
        color:rgba(153,153,153,1);
        font-size:24px;
        font-weight: 500;
        margin:20px;
    }
    hr{
        margin: 0;
        padding: 0;
    }
    p{
      
        display: inline-block;
        padding-bottom: 47px;
        font-size: 24px;
        color: #333;
        &:nth-of-type(2){
            @media screen and (min-width:1200px){
                float:right;
                margin-right:20%;

            }
        }
        @media screen and (max-width:1200px){
            font-size:3vw;
            display:block;
        }
    }
    button{
        width:116px;
        height:56px;
        background:rgba(0,112,224,1);
        border-radius:8px;
        color: #FFFFFF;
        font-size: 24px;
    }
    .essentialCenter,.residenceCenter,.entourageCenter,.legalCenter,.legalCenterTwo{
        position: relative;
    }
    .essentialCenter{
        button{
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .residenceCenter{
        button{
            @include buttonStyles
        }
        h1{
            @include h1Styles
        }
    }
    .entourageCenter{
        button{
            @include buttonStyles
        }
        h1{
            @include h1Styles
        }
    }
    .legalCenter{
        button{
            @include buttonStyles
        }
        h1{
            @include h1Styles
        }
        img{
            width: 240px;
            height: 180px;
            margin-left: 36px;
            margin-bottom: 48px;
            display: inline-block;

        }
    }
    .legalCenterTwo{
        button{
            @include buttonStyles
        }
        h1{
            @include h1Styles
        }
        img{
            width: 240px;
            height: 180px;
            margin-left: 36px;
            margin-bottom: 48px;
            display: inline-block;
        }
    }
}
        .warp-hr{
        height: 1px;
        background-color: #ddd;
        width: 100%; 
        margin: 48px 0;
        }
</style>
