<template>
    <div>
        <div class="passport-title">
            请输入您的银联卡密码 60s
        </div>
        <div class="passport-type-wrap">
            <div class="passw">
               <div style="margin-right:10px;">请输入银行卡密码</div> <div><el-input type="password" placeholder="请输入内容"></el-input></div>
            </div>
        </div>
        <div @click="substep"  style="margin-top:5vh">
			  <button-sub btname="同意"></button-sub>
		</div>
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
        components:{
          buttonSub
        },
        data() {
            return {
               passPortTypes:[{
					title:"受理点领取",
					sid:0
				},{
					title:"邮寄领取",
					sid:1
				}]
            }
        },
        methods:{
            passPortSel(sid){
                this.$store.commit('getTypesubid',{sid})
                this.$emit("listenType")
                //this.$store.commit('changeheadTabIndex',{count:1})
				//this.isPassPortStep0Show=true
				//this.secCountFn()
			},
        }
        
    }
</script>

<style scoped lang="scss">
.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
.passport-type-wrap{
		position: relative;
		padding-top: 150px;
        display:flex;
        justify-content:center;
		.passw{
            width:720px;
            height:360px;
            background:rgba(246,246,246,1);
            border:2px solid rgba(221,221,221,1);
            border-radius:20px;
            display:flex;
            justify-content: center;
            align-items:center;
        }
	}
</style>