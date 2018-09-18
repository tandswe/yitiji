<template>
    <div>
        <div class="passport-title">
            请选择领取方式
        </div>
        <div class="passport-type-wrap">
            <div class="passport-type">
                <div v-for="(item,index) in passPortTypes" @click="passPortSel(item.sid)" :key="index">
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
                //this.$store.commit('getTypesubid',{sid})
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