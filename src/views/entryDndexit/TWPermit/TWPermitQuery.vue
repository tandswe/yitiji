<template>
    <div class="article clearfix">   
        <article>
            <div>
                证件信息：<span>通行证号码： {{seachdata.zjhm}}      有效期：{{seachdata.qzyxq.value}}  </span>
            </div>
            <div>
                剩余签注：<span> 台湾：{{seachdata.qzyxq.value}}{{seachdata.yxcs.value}}有效</span>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        created(){
            
            this.localmocao =JSON.parse(localStorage.getItem("temp3"))[0]
            //console.log(this.localmocao.zjzl)
            this.$axios.post('/inteGration/api/crj/postqueryqzsycs',{
				 zjzl:'this.localmocao.zjzl',
                 zjhm:'this.localmocao.zjhm'
			 }).then(req=>{
               this.seachdata=JSON.parse(req.data).data.qzsycs[0]
               //console.log( this.seachdata)
             })
        },
        data() {
            return {
                ruleForm: '',
                rules: '',
                localmocao:'',
                seachdata:'' //搜索数据
            }
        },
        computed:{
           
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>

 

.article{
    width:100%;
    margin:0 auto;
    padding-top: 51px;
    text-align: left;
    font-size:24px;
   
    article{
        width:60%;
        margin:150px auto;
        div{
            height:80px;
            line-height:80px;
            margin-top:50px;
            span{
                display:inline-block;
                width:644px;
                height:80px;
                border:1px solid#E5E5E5;
                padding-left:20px;
            }
        }
    }
    
     
}


</style>
