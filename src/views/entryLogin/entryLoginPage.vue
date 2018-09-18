<template>
	<div class="wrap">   
		<div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart></layoutHeart>
        <layout-subject title="港澳通行证团队游签注" :stepDatas="stepData" :paths="pathArr" :btns="btns"  ref="subject">
			<template slot="buttons" scope="props">
               <button  @click="btns[props.$index].click()">{{btns[props.$index].name}}</button>
           </template>
		</layout-subject>
        <layoutfoot></layoutfoot>
		<div  @click="prinits()">
        <alert-print v-if="printopen"></alert-print>
        </div>
    </div>
	</div>
</template>

<script>
import layoutHeart from '@/components/layoutHeart'
import layoutSubject from "@/components/layoutSubject"
import layoutfoot from "@/components/layoutfoot"
import alertPrint from '@/components/base/alertPrint'
import eHeadsp from "@/views/eHeadsp"
export default{
	name:'entryDndexit',
	components:{layoutSubject,layoutHeart,layoutfoot,alertPrint,eHeadsp},
	data(){
		return{
			active:0,
			printopen: 0,
			stepData:['01 通行证登入','02 签注信息查询','03 回执打印','04 完成'],
			pathArr: ['/entryLogin','/entryAttch','/entryPrint','/entrySucceed'],
			btns:[
                    {
                        id:1,
                        name: '打印',
                        step:[0,1,0,0],
                        click:()=>{this.prinits();}
                    }                 
                ]
		}
	},
	methods:{
		prinits(){
              this.printopen=!this.printopen;
			  this.$refs.subject.active++
            }
	}
}
</script>
<style>
/*.crimeTestifyFn .main .main-center .content{
	padding: 0;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}*/
</style>
<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
