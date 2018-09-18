<template>
    <div class="wrap">  
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
        methods:{
             prinits(){
              this.printopen=!this.printopen;
             
            }
        },
        data() {
            return {
                stepData: ["01 选择登陆方式","02 刷卡登陆","03 打印","04 完成"],
                active:0,
                pathArrs: ['businessChoice','socialsecurityLogin','socialsecurityPrint','step4'],
                pathName:"socialsecurity" ,
                printopen:0 ,//是否打印
                btns:[
                    {
                        id:1,
                        name: '打印',
                        step:[0,0,1,1],
                        click:()=>{this.prinits();}
                    },
                    {
                        id:2,
                        name: '返回',
                        step:[1,1,0,0],
                        click:()=>{
                            this.$refs.subject.prev();}
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
