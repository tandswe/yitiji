<template>
    <div class="wrap">  
        <div class="layoutscroll">
            <eHeadsp></eHeadsp>
         </div>
        <div class="layoutCon">
        <layoutHeart>Header</layoutHeart>

        <layout-subject title="社保打印" :stepDatas="stepData" :paths="pathArr" :btns="btns"  ref="subject">
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
        methods:{
             prinits(){
              this.printopen=!this.printopen;
              this.$refs.subject.active++;
             
            }
        },
        data() {
            return {
                stepData: ["01 选择学历类型","02 身份认证","03 学历认证绑定","04 打印","05 完成"],
                active:0,
                pathArrs: ['educationType','authentication','educationCertification','educationPrint','educationFinish'],
                pathName:"education/educationType",
                printopen:0 ,//是否打印
                btns:[
                    {
                        id:1,
                        name: '打印',
                        step:[0,0,1,0,0],
                        click:()=>{this.prinits();}
                    },
                                  
                ]
              
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
