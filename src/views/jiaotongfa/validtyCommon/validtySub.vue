<template>
    <div class="wrap">  
        <papers v-if="isShow===1"  @listenType="nextType"></papers>
        <photoReceipt heardline="请放置好你的照相回执" v-if="isShow===2" @listenType="nextType"></photoReceipt>
        <prove v-if="isShow===3" @listenType="nextType" ></prove>
        <accept v-if="isShow===4" @listenType="nextType"></accept>
        <msgCheck v-if="isShow===5" @listenType="nextStep"></msgCheck>
    </div>
</template>

<script>
import papers from '../motorCompontes/papers'
import prove from '../motorCompontes/prove'
import photoReceipt from '../motorCompontes/photoReceipt'
import accept from '../motorCompontes/accept'
import msgCheck from '../motorCompontes/msgCheck'
import application from '../motorCompontes/application'
export default {
  components: { 
      papers,
      prove,
      photoReceipt,
      accept,
      msgCheck,
      application
   },
  data() {
    return {
      isShow: 1,
    };
  },
  methods:{
    next(){
      this.isShow++
    },
    nexts(vla){
      this.isShow = vla
    },
    nextType(data){
      this.isShow++
      //console.log(data)
      this.$store.commit('getTypeid',{id:data})
    },
    nextStep(id){
        this.$store.commit('changeheadTabIndex',{count:1})
    }
  }
};
</script>

<style lang="scss" scoped>
button{
    width:154px;
    height:56px;
    background:rgba(0,140,255,1);
    border-radius:30px;
    font-size:26px;
    line-height: 56px;
    color: #fff;
    margin: 20px;
}
</style>
