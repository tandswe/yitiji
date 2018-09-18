<template>
    <div>
        <div class="passport-title">
            
        </div>
        <div class="passport-type-wrap">
            <div class="w_content">
                <P>您好，办理该业务需要以下资料：</p>
                <ul>
                    <li><span>1</span>家庭全员的身份证：本人和共同生活家庭成员的身份证</li>
                    <li><span>2</span>家庭全员的户口本页：户主页和共同生活家庭成员页</li>
                    <li><span>3</span>居民家庭经济状况核对授权书</li>
                </ul>
            </div>
        </div>
        <div @click="substep"  style="margin-top:5vh">
            <button-sub btname="确定，现在录入"></button-sub>
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
		position: relative;
		padding-top: 150px;
        text-align:left;
        display:flex;
        justify-content: center;
        align-items:center;
        .w_content{
            p{
                font-size:28px
            }
            ul{
               width:701px;
               min-height:251px;
               background:rgba(231,241,251,1);
               margin-top:3vh;
               display:flex;
               flex-wrap:wrap;
               align-content: space-around;
               li{
                   height:31px;
                   line-height:31px;
                   font-size:24px;
                   margin-left:20px;
                   span{
                    width:31px;
                    height:31px;
                    background:rgba(0,112,224,1);
                    border-radius:50%;
                    display:inline-block;
                    line-height:31px;
                    text-align: center;
                    color:#fff;
                    margin-right:10px;
                   }
               }
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