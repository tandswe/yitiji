<template>
    <div class="wrap">   
        <div v-if="isShow">
             <div class="face-scan">
             	<img src="../../../img/views/face-scan@2x.png">
             </div>
        </div>
        <!--<div>
            <registered text="请放户口本个人页 60s"></registered>
        </div>-->
         <layout-dialog :isDialogShow="isDialogShow">
        	<div class="lscancel-dialog">
			<div class="lscancel-dialog-t">
				认证完成！
			</div>
			<div class="lscancel-dialog-b">
				<div>
					确定 5s
				</div>
			</div>
			</div>
        </layout-dialog>
    </div>
</template>

<script>
	import layoutDialog from '@/components/layoutDialog.vue'
    import registered from '../peoplePassComponents/registered.vue'
    export default {
        components:{registered,layoutDialog},

        data() {
           return{
               isShow: true,
               isDialogShow:true
           }
        },
        computed:{
          
        },
         mounted(){
        },
    }
</script>

<style lang="scss" scoped>
.face-scan{
	position: relative;
	width: 436px;
	height: 436px;
	background: rgb(248,251,253);
	img{
		width: 278px;
		height: auto;
		position: absolute;
		bottom: 0;
		left: -50%;
		transform: translateX(-50%);
	}
}
.lscancel-dialog{
		width: 100%;
		height: 100%;
		.lscancel-dialog-t{
			font-size: 28px;
			color: #333333;
			line-height: 28px;
			font-weight: bold;
			padding-top: 67px;
			padding-left: 48px;
			padding-right: 48px;
			padding-bottom: 75px;
			text-align: left;
		}
		.red{
			color: #DE3434;
		}
		.lscancel-dialog-b{
			padding: 0 48px;
			text-align: right;
			div{
				display: inline-block;
				text-align: center;
				width:180px;
				height:56px;
				line-height: 56px;
				font-size:24px;
				border-radius:5px;
				background: #0070E0;
				color: #FFFFFF;
			}
		}
	}
</style>