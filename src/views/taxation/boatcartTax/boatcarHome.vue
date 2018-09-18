<template>
    <div class="wrap">  
        <layoutHeart>Header</layoutHeart>

        <layout-subject title="车船税交纳" :stepDatas="stepData" :paths="pathArr" ref="subject">
           <!-- <template slot="buttons" scope="props">
               <button  @click="btns[props.$index].click()">{{btns[props.$index].name}}</button>
           </template> -->
        </layout-subject>
        <layoutfoot></layoutfoot>
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
            
        },
        data() {
            return {
                stepData:['01 缴纳选择','02 身份认证','03 选择缴纳车船','04 确认缴纳金额','05 打印','06 完成'],
                active:0,
                pathArrs: ['boatcarBusiness','boatcarIdcard','boatcarChoose','boatcarSum','boatcarPrint','boatcarFinish'],
                pathName:"taxation/boatcartTax",
                //printopen:0 ,//是否打印
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
