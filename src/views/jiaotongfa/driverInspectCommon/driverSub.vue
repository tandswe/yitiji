<template>
    <div class="wrap">   
      <face heardText="面部特征采集，请点头 60s" ></face>
    </div>
</template>

<script>
import face from "../motorCompontes/face.vue";
import accept from "../motorCompontes/accept.vue";
import msgCheck from "../motorCompontes/msgCheck.vue";
import signature from "../motorCompontes/signature.vue";
export default {
  components: { 
  face, 
  accept, 
  msgCheck, 
  signature
   },
  data() {
    return {
      isShow: false,
      heardline: "请放置好你的照相回执"
    };
  },
  methods:{
    next(){
      this.isShow++
    },
    nexts(vla){
      this.isShow = vla
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
