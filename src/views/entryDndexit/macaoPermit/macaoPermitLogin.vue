<template>
    <div class="login-warp">  
		<div >
		 <h1>请插入你的通行证</h1>
		 <div class="login-next-center" @click="sub()">
			 <img :src="myphoto" alt="">
		 </div>
		</div>
    <!-- <button @click="next" class="buttonStyle">下一步</button> -->

     <div @click="next" style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
            </div> 
		
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
  components: {buttonSub},
  data() {
    return {
		showText: false,
    myphoto: require('@/img/views/yinhangka.png'),
    macaodata:'',//存储localstore 的数据
	};
  },
  computed: {},
  methods: {
	  next() {
		  this.$store.commit('changeheadTabIndex',{count:1})
    },
    sub(){
      this.$axios.post('/inteGration/api/crj/postqueryzjxx',{
				 zjzl:"14",
				 sfzh:"44653658996325587"
			 }).then(req=>{
         if(true){
          this.macaodata=JSON.parse(req.data).data
          //console.log( this.macaodata)
          this.macaodata= JSON.stringify(this.macaodata)
          localStorage.setItem("temp3",this.macaodata)
          this.$store.commit("changeheadTabIndex",{count:1})

         }
         
       })
    }
  }
};
</script>

<style lang="scss" scoped>
.login-warp {
  height: 100%;
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    display: flex;
    align-items: center;
	padding-left: 98px;
	padding-top: 48px;
  }
  .login-center {
    width: 1169px;
    height: 571px;
    background: rgba(238, 249, 255, 1);
    overflow: auto;
    white-space: pre-wrap;
	text-align: left;
	margin: 26px auto 0;
  }
  .login-next-center{
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  margin-top: 98px;
	  img{
		  width: 560px;
      height: 420px;
      @media screen and (max-width: 1200px){
        zoom:200%;
      }
	  }
  }
}
</style>
