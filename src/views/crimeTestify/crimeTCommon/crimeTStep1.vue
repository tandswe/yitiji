<template>
	<div class="ga-step0">
		<div class="crime-t-set">
			<div class="crime-t-title pb48">
			无犯罪记录预览
			</div>
			<div class="crime">
				无犯罪记录
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'passport',
		data(){
			return {
				secCount:10
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
	.crime{
		width:1170px;
		height:430px;
		line-height: 490px;
		font-size: 28px;
		color: #8BCAFF;
		margin: 0 auto;
		background:rgba(238,249,255,1);
	}
	.crime-t-title{
		font-size: 28px;
		color: #333333;
		padding-left: 86px;
		padding-top: 48px;
		padding-bottom: 176px;
		text-align: left;
	}
	.pb48{
		padding-bottom: 48px;
	}
	.crime-t-type{
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
	.box{
		width:1170px;
		height:490px;
		background:rgba(238,249,255,1);
	}
</style>