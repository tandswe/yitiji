<template>
    <div class="wrap">  
        <layoutHeart>Header</layoutHeart>

        <layout-subject title="个人其他税费证明打印" :stepDatas="stepData" :paths="pathArr" :btns="btns"  ref="subject">
           <!-- <template slot="buttons" scope="props">
               <button  @click="btns[props.$index].click()">{{btns[props.$index].name}}</button>
           </template> -->
        </layout-subject>
        <layoutfoot></layoutfoot>
        <div  @click="prinits()">
        <alert-print v-if="printopen"></alert-print>
        </div>
    </div>
</template>

<script>
    import layoutHeart from '@/components/layoutHeart'
    import layoutSubject from "@/components/layoutSubject"
    import layoutfoot from "@/components/layoutfoot"
    import alertPrint from '@/components/base/alertPrint'
    export default {
        components:{layoutSubject,layoutHeart,layoutfoot,alertPrint},
        mounted(){
           
            
        },
         route: {
    canReuse: false,
  },
        
        
        methods:{
             prinits(){
			  this.printopen=!this.printopen;
			  
             
            }
        },
        data() {
            return {
                stepData:['01 身份认证','02 选择时间','03 选择开具范围','04 打印','05 完成'],
                active:0,
                pathArrs: ['taxotherIdcard','taxotherTime','taxotherRange','taxotherPrint','taxotherFinish'],
                pathName:"taxation/individualtaxOther",
                printopen:0 ,//是否打印
                // btns:[
                //     {
                //         id:1,
                //         name: '打印',
                //         step:[0,1,0,0],
				// 		click:()=>{
				// 			this.prinits();
				// 			this.$refs.subject.active+=2;			
				// 		}
                //     },
                                 
                // ]
            }
        },
        computed:{
            pathArr(){
                return this.pathArrs.map((val,index)=>{
                    return `/${this.pathName}/${val}`
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    height:100%;
}
</style>
