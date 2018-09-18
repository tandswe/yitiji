<template>
    <div>
        <div class="passport-title">
            请选择您要办理的业务 60s
        </div>
        <div class="passport-type-wrap">
            <div class="passport-type">
                <div v-for="(item,index) in passPortTypes" @click="passPortSel(item.id)" :key="index">
                    {{item.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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