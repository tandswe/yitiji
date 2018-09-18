<template>
    <div>
         <div class="passport-title">
			<h1>请仔细阅读业务办理须知</h1>
		 </div>
		 <div class="pm-box txt">
		</div>
        <div @click="substep"  style="margin-top:1vh">
			 <button-sub btname="同意"></button-sub>
		</div>
    </div>
</template>

<script>
    import buttonSub from "@/components/base/buttonSub"

    export default {
        components: {
            buttonSub
        },
        methods: {
            substep() {
                // this.$emit("listenType")
                this.$router.push('')
            }
        }
    }
</script>

<style scoped>
 @media screen and (max-width:1200px){
            .txt{height: 850px !important;
            }
            .passport-title h1{
                font-size: 1.6vh
            }
            }
.passport-title{
		font-size: 28px;
		color: #333333;
		padding-left: 100px;
		padding-top: 48px;
		padding-bottom: 28px;
		text-align: left;
	}
.pm-box{
		margin: 0 100px;
		text-align: left;
		height: 540px;
		background: #D4E7F9;
	}
</style>