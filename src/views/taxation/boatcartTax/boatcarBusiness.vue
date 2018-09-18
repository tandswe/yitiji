<template>
    <div class="article clearfix">   
        <article v-if="select" class="selects">          
            <p style="text-align:left;color:#000;">请选择您要打印的类型</p>
            <ul style="color:#fff;" class="flex educationList">
                <li @click="choose(0)">缴纳本人车船</li>
                <li @click="choose(1)">缴纳他人车船</li>
            </ul> 
        </article>       
    </div>
</template>

<script>
   
    export default {
        data() {
            return {
                select:1,//选择项
                index:'',//组件index
                chooses:['compPerson','compOthers']
            }
        },
        computed:{
            // currentView(){
            //     return this.chooses[this.index];
            // }
        },
       
        methods:{
          choose(id){
              this.$store.commit('getTypeid',{id})
              this.$store.commit('changeheadTabIndex',{count:1})
          }
        }
    }
</script>

<style lang="scss" scoped>

.article {
	padding-top: 51px;
	text-align: left;
	font-size:24px;
	width:100%;
	.selects {
	width:90%;
	height:100%;
	margin:0 auto;
	ul {
	width:460px;
	margin:0 auto;
	margin-top:150px;
	li {
	margin-right:40px;
	width:360px;
	height:76px;
	line-height: 76px;
	margin-bottom:30px;
	background:rgba(0,112,224,1);
	border:1px solid rgba(0,112,224,1);
	border-radius:6px;
	text-align: center;
	cursor: pointer;
	color:#fff;
}
}
}
}
article{
width:90%;
height:100%;
margin:0 auto;    
}
</style>
