<template>
    <div class="warp-details">   
        <h1 >请先阅读相关流程</h1>
        <div class="warp-text ">
            <p>本业务只适用流动人口申报居住登记</p>
        </div>
        <!-- <button @click="rejectClick">拒绝</button>
        <button @click="ConsetClick">同意</button> -->
            <!-- <img :src="srcs" alt="" style="width:100px;height:100px"> -->
          <div @click="ConsetClick"  style="margin-top:5%">
                <button-sub btname="同意"></button-sub>
         </div> 
            <layoutLogin :Dialog="Dialog" @hideDialog="hideDialog"></layoutLogin>
    </div>
</template>

<script>
import layoutLogin from '@/components/layoutLogin'
 import buttonSub from "@/components/base/buttonSub"
    export default {
        name:"residenceAudit",
        components:{buttonSub,layoutLogin},
        data() {
            return {
                Dialog: false,
                srcs:""
            }
        },
        created () {
            // this.workeQuery()
            // this.tryUrl()
        },
        computed:{
           
        },
        methods:{
           ConsetClick() {
            //    this.$router.push('/residenceMaterial')
            // this.$http('/inteGration/hardwareControl/api/idcard').then(data=>{
            //         if(data.data.success !== "false"){
            //             this.$store.state.residence.IdObj = data.data.obj[0]
            //             this.$store.commit('changeTabIndex',{count: 1})
            //         }else{
            //             this.Dialog =true
            //             }
            //     }).catch(res=>{
            //      console.log(res)
            //     })
                // image/jpg;base64,     转换码
                       // this.Dialog =true
            // this.$store.commit('changeTabIndex',{count: 1})

                // 签字版的图片的
            // this.$http('/inteGration/hardwareControl/api/pensign').then(data=>{
            //         console.log(data.data.obj[0].imgString)
            //         this.srcs ="data:image/jpg;base64," + data.data.obj[0].imgString
            //     }).catch(res=>{
            //      console.log(res)
            //     })

            // 这里是测试
            this.$axios.get('/inteGration/api/jzz/getUserInfo1',{params:{userid:0}}).then(data=>{
                console.log()
                if (data.data.success){
                    this.$store.state.residence.IdObj = data.data.data
                    this.$store.commit('changeTabIndex',{count: 1})
                }else{
                    this.Dialog =true
                }
            })
               
           },
           hideDialog(){
				this.Dialog=false
			}, 
        }
    }
</script>

<style lang="scss" scoped>

button {
      width:180px;
        height:56px;
        background:rgba(0,112,224,1);
        border-radius:28px;
        color:#fff;
        margin: 65px 150px;
        &:nth-of-type(1) {
            background: #ccc;
        }
    }
.warp-details{
    height: 90%;
    h1{
        padding: 51px 0 47px 65px;
        text-align:left;
        font-size:28px;
        @media screen and (max-width:1200px){
            font-size:3vw;
        }
    }
    .warp-text{
        width: 1170px;
        height: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #EEF9FF;
        border: 1px solid #D4E7F9;
        color: #8BCAFF;
    }
}

</style>
<style lang="scss">
 @media screen and (max-width:1200px){
            .txt{height: 850px !important;
            }
           
            }

</style>

