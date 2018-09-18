<template>
	<div class="ga-step0">
		<div class="crime-t-set">
			<div class="crime-t-title pb98">
			<h1>请把身份证放置正确区域 {{secCount}}s</h1>
			</div>
			<img src="../../../img/passport/passport-guide.png">
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
			secCountFn(){
				var _this=this	
				var inv=setInterval(function(){
					_this.secCount--
					if(_this.secCount==0){
						clearInterval(inv)
					}
				},1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
@media screen and (max-width:1200px){
   
      .pb98{
                    margin-top: 1vh;
                    margin-bottom: 1vh;}
    .pb98 h1{
                font-size: 1.6vh;
                text-align:left;
             }
        }
	.crime-t-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 176px;
		text-align: left;
	}
	.pb98{
		padding-bottom: 98px;
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
	.crime-t-set{
		img{
			display: block;
			width: 560px;
			height: 420px;
			margin: 0 auto;
		}
	}
</style>