<template>
    <div class="warp">   
        <div v-if="showEssent">
            <div class="essentialCenter">
            <h1>个人基本信息</h1>
            <p>姓名：{{ShowForm.xm}}</p>
            <p>证件号码：{{ShowForm.gmsfhm}}</p>
            <p>联系电话：{{ShowForm.lxdh}}</p>
            <button @click="editMsgone">修改</button>
            </div>
             <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div class="residenceCenter">
                <h1>居住地址信息</h1>
                <p>地区：{{ShowForm.provinceSelect}}{{ShowForm.zjzdz_xqdm}}</p>
                <p>街道（乡/镇）：{{ShowForm.zjzdz_xzdm}}</p>
                <p>详细地址：{{ShowForm.zjzdz_qhnxxdz}}</p>
                <p>派出所：{{ShowForm.pcsdm}}</p>
                <p>居住事由：{{ShowForm.zjzsydm}}</p>
                <p>居住事由：{{ShowForm.zjzcsfldm}}</p>
                <button @click="editMsgTwo">修改</button>
            </div>
            <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div class="entourageCenter" >
                <h1>随行人员信息（15周岁及以下）</h1>
                <div v-for="(index,item) in ShowForm.sxry" :key="item">
                    <h3>随行人员{{item+1}}</h3>
                <p>姓名：{{index.xm}}</p>
                <p>证件号码：{{index.gmsfhm}}</p>
                <p>与申报人关系：{{index.ysqrgx}}</p>
               <div class="warp-hr" v-if="item>0"></div> 
                </div>
                <!-- 换hr线的样式
                <h3>随行人员2</h3>
                <p>姓名：苏南坡</p>
                <p>证件号码：440923199202156632</p>
                <p>与申报人关系：父子</p>-->
                <button  @click="editMsgThree">修改</button> 
            </div>
            <div class="legalCenter">
                <h1>申请人身份证明</h1>  
                <img :src="myPhoto" alt="" v-for="(col, index) of 3" :key="index">
                <button @click="editMsgFour">修改</button>
            </div>
           <div class="warp-hr"></div> <!-- 换hr线的样式 -->
            <div class="legalCenterTwo">
                <h1>合法稳定住所证明</h1>
                <img :src="myPhoto" alt="" v-for="(col, index) of 3" :key="index">
                <button @click="editMsgFive">修改</button>
            </div>
            <div style="text-align: center;" @click="allSub">

               
                 <btn btname="提交"></btn>
            </div>
        </div>
        <editUploading 
        :allMsg="getLStroage"
         :optionData="optionData" 
         :msgID="msgID"
         @noShowFlie ="noShowFlie"
          @showFlie="showFlie" v-else></editUploading>
    </div>
</template>

<script>
import editUploading from './editUploading'
import btn from '@/components/base/buttonSub'
    export default {
        components:{
            editUploading,
             btn
        },
        data() {
            return {
                myPhoto: require('@/img/views/myPhoto.png'),
                msg:['1','2'],
                showEssent: true,
                ShowForm: {
                    xm: "", //姓名
                    gmsfhm: "", //证件号
                    lxdh: "", //联系电话
                    zjzdz_xqdm: "", //市区
                    zjzdz_xzdm: "", //乡镇
                    pcsdm: "", //派出所
                    zjzdz_qhnxxdz: "", //详细地址
                    zjzsydm: "", //居住事由
                    sxry: [], //随行人员
                    zjzcsfldm:'',//居住处所
                    provinceSelect:"",
                },
                ShowForms:{},
                getLStroage:{},
                optionData:{
                    city:{},//市
                    district:{},//区
                    village:{},//乡
                    local:{},//派出所
                    incident:{},//事由
                    dwell:{},//居住
                    linkman:{}
                },
                msgID:0
                
            }
        },
        computed:{
        },
        mounted(){
            this.getLocalStorage()
            
        },
        methods:{
            allSub(){
                this.$axios.post('/inteGration/api/jzz/populationSave',
                this.getLStroage).then(data=>{
                    this.$message({
                    message: data.data.errmsg,
                    type: 'success'
                    });
                    this.$store.state.home.headTabIndex=0
                    this.$router.push('/')
                })
            },
            showFlie(val){
                console.log(val)
                this.showEssent = true
                this.ShowForm = Object.assign({},this.ShowForm,val)
            },
            noShowFlie(val){
                this.showEssent = val
            },
            editMsgone() {
                this.showEssent =false
                this.msgID = 0
            },
            editMsgTwo() {
                this.showEssent =false
                this.msgID = 1
            },
            editMsgThree() {
                this.showEssent =false
                this.msgID = 2
            },
            editMsgFour() {
                this.$store.state.home.headTabIndex--
                this.$store.state.residence.showchange = true
            },
            editMsgFive() {
                this.$store.state.home.headTabIndex--
                this.$store.state.residence.showchange = false
            },
            // 获取到填写数组
            getLocalStorage(){
                this.getLStroage = this.$store.state.residence.PERSONAGEMSG
                
                // this.supercode()//市
                // this.xqdmChange(this.getLStroage.provinceSelect)//区
                // this.quzdmChange(this.getLStroage.zjzdz_xqdm)//街道
                // this.xzdmChange(this.getLStroage.zjzdz_xzdm)//派出所
                // this.zjzcsSelect()//处所
                // this.zjzsySelect()//事由
                // this.dsrSelect()//关系
                this.ShowForm = Object.assign({},this.ShowForm,this.getLStroage)
                console.log(this.ShowForm)
            },
            // 市
            supercode(num) {
                this.$axios
                    .get("/inteGration/api/jzz/dictQuery", {
                    params: { supercode: 440000 }
                    })
                    .then(data => {
                        this.optionData.city = data.data.data
                        for(var i=0; i<this.optionData.city.length;i++){
                            if(this.getLStroage.provinceSelect == this.optionData.city[i].value){
                                this.ShowForm.provinceSelect = this.optionData.city[i].name
                            }
                        }
                    });
                },
            // 区
            xqdmChange(val) {
            this.$axios
                .get("/inteGration/api/jzz/dictQuery", { params: { supercode: val } })
                .then(data => {
                     this.optionData.district = data.data.data
                        for(var i=0; i<this.optionData.district.length;i++){
                            if(this.getLStroage.zjzdz_xqdm == this.optionData.district[i].value){
                                this.ShowForm.zjzdz_xqdm = this.optionData.district[i].name
                            }
                        }
                });
            },
             quzdmChange(val) {
            this.$axios
                .get("/inteGration/api/jzz/dictQuery", { params: { supercode: val } })
                .then(data => {
                     this.optionData.village = data.data.data
                        for(var i=0; i<this.optionData.village.length;i++){
                            if(this.getLStroage.zjzdz_xzdm == this.optionData.village[i].value){
                                this.ShowForm.zjzdz_xzdm = this.optionData.village[i].name
                            }
                        }
                });
            },
            // 派出所
            xzdmChange(val) {
            this.$axios
                .get("/inteGration/api/jzz/getPoliceStation", {
                params: { xzdm: val, xzjddm: "", xzjdmc: "" }
                })
                .then(data => {
                     this.optionData.local = data.data.data
                        for(var i=0; i<this.optionData.local.length;i++){
                            if(this.getLStroage.pcsdm == this.optionData.local[i].value){
                                this.ShowForm.pcsdm = this.optionData.local[i].name
                            }
                        }
                });
            },
            //处所
            zjzcsSelect(){
                this.$axios
                .get("/inteGration/api/jzz/getDwellingPlace")
                .then(data => {
                this.optionData.dwell = data.data.data
                        for(var i=0; i<this.optionData.dwell.length;i++){
                            if(this.getLStroage.zjzcsfldm == this.optionData.dwell[i].value){
                                this.ShowForm.zjzcsfldm = this.optionData.dwell[i].name
                            }
                        }
                });
            },
            // 事由
            zjzsySelect(){
                this.$axios
                .get("/inteGration/api/jzz/getCauseResidence")
                .then(data => {
                this.optionData.incident = data.data.data
                        for(var i=0; i<this.optionData.incident.length;i++){
                            if(this.getLStroage.zjzsydm == this.optionData.incident[i].value){
                                this.ShowForm.zjzsydm = this.optionData.incident[i].name
                            }
                        }
                });
            },
            //申请联系人
            dsrSelect(){

                this.$axios
                .get("/inteGration/api/jzz/getAccompanyRelation")
                .then(data => {
                    this.optionData.linkman = data.data.data
                    this.ShowForm.sxry = JSON.parse(JSON.stringify(this.getLStroage.sxry))
                            for(var j =0; j<this.getLStroage.sxry.length; j++){
                                 for(var i=0; i<this.optionData.linkman.length;i++){
                                    if(this.getLStroage.sxry[j].ysqrgx == this.optionData.linkman[i].value){
                                    this.ShowForm.sxry[j].ysqrgx= this.optionData.linkman[i].name
                                }
                            }
                                
                        }
                });
            },
            getLStroagePhoto(){
                localStorage.getItem('')
            }
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
    width: 90%;
    padding-left: 98px;
    padding-top: 51px;
    text-align: left;
     @media screen and (max-width: 1200px){
         p{
             font-size:2vw !important;
         }
     }
    h1{
        margin-bottom: 47px;
        font-size: 28px;
    }
    h3{
        margin: 47px 0;
    }
    hr{
        margin: 0;
        padding: 0;
    }
    p{
        width: 584px;
        display: inline-block;
        padding-bottom: 47px;
        font-size: 24px;
        color: #333;
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
