<template>
    <div class="wrap">  
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">  
        <layoutHeart>Header</layoutHeart>

        <layout-subject title="个人清单打印" :stepDatas="stepData" :paths="pathArr" ref="subject">
           <!-- <button  @click="prinits">打印</button> -->
           <!-- <button slot="print" @click="prinits">打印</button>
           <button slot="submit">提交</button>  -->
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
    export default {
        components:{layoutSubject,layoutHeart,layoutfoot,alertPrint,eHeadsp},
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
                stepData:['01 身份认证','02 查询清单','03 打印','04 完成'],
                active:0,
                pathArrs: ['listIdcard','listQuery','listPrint','listFinish'],
                pathName:"taxation/individualtaxList",
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
