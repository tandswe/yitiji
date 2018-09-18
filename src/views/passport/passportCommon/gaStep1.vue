<template>
	<div class="ga-step0">
		<div>
			<div class="passport-title">
				请选择签注类型
			</div>
			<div class="passport-type">
				<div v-for="(item,index) in passPortTypes" @click="passPortSel(item.id)" :key="index">
					{{item.title}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'passport',
		data(){
			return {
				passPortSelIndex:0,
				passPortTypes:[{
					title:"香港每年一次",
					id:1
				},{
					title:"香港每年两次",
					id:2
				},{
					title:"香港每年三次",
					id:3
				}]
			}
		},
		methods:{
			passPortSel(id){
				this.passPortSelIndex=id
				this.isPassPortStep0Show=true
                this.$router.push({path: '/passport/gaStep2/pay-type-choose', query: {pass_port_type: id}})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 122px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
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