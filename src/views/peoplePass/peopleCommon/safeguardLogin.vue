<template>
    <div class="wrap">   
        <div v-if="isShow">
            <contract></contract>
        </div>
        <div>
            <IDCard></IDCard>
        </div>
        <div>
           <layout-dialog :isDialogShow="isDialogShow">
			<div class="lscancel-dialog">
			<div class="lscancel-dialog-t">
				认证完成
			</div>
			<div class="lscancel-dialog-b">
				<div>
					下一步 5s
				</div>
			</div>
			</div>
		</layout-dialog>
        </div>
    </div>
</template>

<script>
    import contract from '../peoplePassComponents/contract.vue'
    import IDCard from '../peoplePassComponents/IDCard.vue'
    import layoutDialog from '@/components/layoutDialog.vue'
    export default {
        components:{contract,IDCard,layoutDialog},
        mounted(){
            
            
        },
        data() {
           return{
               isShow: false,
               isDialogShow: false
           }
        },
        computed:{
          
        }
    }
</script>

<style lang="scss" scoped>
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
