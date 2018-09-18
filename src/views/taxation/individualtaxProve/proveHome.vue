<template>
    <div class="wrap">  
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon"> 
        <layoutHeart>Header</layoutHeart>

        <layout-subject title="个税完税证明打印" :stepDatas="stepData" :paths="pathArr"  ref="subject">
           <!-- <template slot="buttons" scope="props">
               <button  @click="btns[props.$index].click()">{{btns[props.$index].name}}</button>
           </template> -->
        </layout-subject>
        <layoutfoot></layoutfoot>
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
                stepData:['01 身份认证','02 选择时间','03 选择开具范围','04 打印','05 完成'],
                active:0,
                pathArrs: ['proveIdcard','proveDate','proveRange','provePrint','proveFinish'],
                pathName:"taxation/individualtaxProve",
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
