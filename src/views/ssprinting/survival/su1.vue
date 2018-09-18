<template>
    <div class="warp-details">   
        <h1>请仔细阅读业务办理须知</h1>
        <div class="warp-text">
            <p>基本养老金领取资格认证（生存认证）</p>
        </div>
        <button>拒绝</button>
        <button>同意</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created () {
            // this.workeQuery()
        },
        computed:{
           
        },
        methods:{
            // workeQuery(){
            //     this.$axios.get('/app/service/work/guide/query?ywlx=0101')
			// 	.then(function(res){
			// 		console.log(res)
			// 	}).catch(function(res){
					
            //     })
            // },
            // testDomain(){
            //     this.$axios.get('/inteGration/api/jzz/dictQuery?supercode=440000')
			// 	.then(function(res){
			// 		console.log(res)
			// 	}).catch(function(res){
					
            //     })
            //     // console.log(this)
			// }
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
    height: 100%;
    h1{
        padding: 51px 0 47px 65px;
        text-align:left;
        font-size:28px;
    }
    .warp-text{
        width: 1170px;
        height: 430px;
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
