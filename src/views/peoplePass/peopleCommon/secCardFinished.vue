<template>
	<div>
		<div v-if="finishedStep==0">   
			<h1>请放置优待卡  {{text}}s</h1>
			<div class="expenses-center">
				<img :src="idCard" alt="">
			</div>
    	</div>
    	<div v-if="finishedStep==1">
    		<div class="warp-details">   
		        <div class="chilp-card">
					<img :src="succeedIcon" alt="">
					<div class="chilp-text">
						<h3>续期成功</h3>
						<p>正在打印凭证，请稍后</p>
					</div>
		        </div>
		        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
		    </div>
    	</div>
    	<div v-if="finishedStep==2">
    		<alertPrint></alertPrint>
    	</div>
    	<div v-if="finishedStep==3">
    		<div class="warp-details">   
		        <div class="chilp-card">
					<img :src="succeedIcon" alt="">
					<div class="chilp-text">
						<h3>打印成功</h3>
						<p>请取走收好!</p>
					</div>
		        </div>
		        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
		    </div>
    	</div>
	</div>
</template>

<script>
	
	import registered from '@/views/peoplePass/peoplePassComponents/registered.vue'
	import alertPrint from '@/components/base/alertPrint.vue'
	export default{
		name:'registered',
		components:{
			alertPrint
		},
		data(){
			return {
				finishedStep:3,
				text:'30',
				idCard: require("@/img/views/passport_guide.png"),
				succeedIcon: require("@/img/views/finish@2x.png")
//				idCard:rquire('@/img/views/passport-guide.png')
			}
		},

	}
</script>

<style scoped lang="scss">
  .expenses-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 98px;
    width:560px;
    height:420px;
    background:rgba(238,249,255,1);
    border:2px solid rgba(212,231,249,1);
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
    h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
	align-items: center;
    padding-left: 98px;
    padding-top: 64px;
    padding-bottom: 61px;
  }
  .warp-details {
  text-align: left;
    display: flex;
	align-items: center;
	justify-content: center;
    height: 100%;
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    padding-left: 98px;
	margin-bottom: 144px;
	padding-top: 48px;
  }
  .chilp-card {
    width: 720px;
    height: 360px;
    border-radius: 20px;
    background: #f6f6f6;
	margin: 0 auto;
	margin-top: 184px;
	display: flex;
	align-items: center;
	font-size: 28px;
	justify-content: center;
    img {
      visibility: midden; 
      margin-right: 20px;
    }
    .chilp-text {
		h3{
			margin-bottom: 13px;
		}

    }
  }
}
</style>