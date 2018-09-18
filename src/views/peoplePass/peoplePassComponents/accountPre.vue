<template>
    <div>
        <div class="passport-title">
           已录入身份证-—预览
        </div>
        <div class="passport-type-wrap">
            <div>
               <img  :src="require('@/img/views/supportAidStudent.png')">
            </div>
            <div>
               <img  :src="require('@/img/views/supportAidStudent.png')">
            </div>
            <div>
               <img  :src="require('@/img/views/supportAidStudent.png')">
            </div>
            <div>
               <img  :src="require('@/img/views/supportAidStudent.png')">
            </div>
            <div>
               <img  :src="require('@/img/views/supportAidStudent.png')">
            </div>
            <div>
               <img  :src="require('@/img/views/supportAidStudent.png')">
            </div>
          
             
        </div>
        <div style="display:flex;justify-content:center;margin-top:5vh" @click="substep">
            <div>
                <button-sub btname="尚未全部录入，继续录入"></button-sub>
            </div>
            <div style="margin-left:20px;">
                <button-sub btname="确认全部录入，提交保存"></button-sub>
            </div>
        </div>
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
    export default {
        components:{buttonSub},
        data() {
            return {
               passPortTypes:[{
					title:"本人办理",
					id:0
				},{
					title:"他人办理",
					id:1
				}]
            }
        },
        methods:{
            passPortSel(id){
                // this.$store.commit('getTypeid',{id})
				// this.$store.commit('changeheadTabIndex',{count:1})
				// if(id===1){
				// 	this.$store.commit('getTabTitle',{title:"资料申报"})
				// }else if(id===0){
                //     this.$store.commit('getTabTitle',{title:"资料提交"})
				// }
			 this.$emit("listenType") //静态页面用作临时跳转下一页，不作为参数传递
            },
            substep(){
                this.$emit("listenType")
            }
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
		width:1166px;
        height:472px;
        background:rgba(231,241,251,1);
        border-radius:8px;
        margin:20px auto;
        overflow-y:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        div{
            background:#f7fbfe;
            width:301px;
            height:181px;
            margin-top:40px;
            line-height:181px;
             img{
                width:86px;
                height:100px;
                
            }
        }

       




	}
.passport-type{
		padding: 0 60px;
		text-align: center;
		div{
			width: 460px;
			height: 80px;
			line-height: 80px;
			margin: 0 auto;
			margin-bottom: 30px;
			color: #FFFFFF;
			font-size: 28px;
			background: #0070E0;
		}
	}
</style>