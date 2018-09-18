<template>
    <div class="wrap">   
        <div>
             <accreditBooks></accreditBooks>
        </div>
        <!--<div v-if="isShow">
            <delegating></delegating>
        </div>
        <div v-if="isShow">
            <communication></communication>
        </div>-->
        <div  :isDialogShow="isShowDialog">
        	<layout-dialog>
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
    </div>
</template>

<script>
	import layoutDialog from '@/components/layoutDialog.vue'
    import accreditBooks from '../peoplePassComponents/accreditBooks.vue'
    import delegating from '../peoplePassComponents/delegating.vue'
    import communication from '../peoplePassComponents/communication.vue'
    import succeed from '../peoplePassComponents/succeed.vue'
    export default {
        components:{accreditBooks, delegating,communication,layoutDialog},
        mounted(){
          
            
        },
        data() {
           return{
                 isShow: true,
                 isShowDialog:true
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
