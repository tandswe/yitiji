<template>
    <div class="wrap">   
        <changeCity v-if="isShow == 1">
          <button @click="next">下一步</button>
        </changeCity>
        <photoReceipt :heardline="heardline" v-else-if="isShow == 2">
          <button @click="next">下一步</button>
        </photoReceipt>
        <accept v-else-if="isShow == 3" @next="nexts">
        </accept>
        <msgCheck v-else-if="isShow == 4">
        </msgCheck>
        
    </div>
</template>

<script>
import changeCity from "../motorCompontes/changeCity.vue";
import photoReceipt from "../motorCompontes/photoReceipt.vue";
import accept from "../motorCompontes/accept.vue";
import msgCheck from "../motorCompontes/msgCheck.vue";
import signature from "../motorCompontes/signature.vue";
export default {
  components: { 
      changeCity, 
  photoReceipt, 
  accept, 
  msgCheck, 
  signature
   },
  data() {
    return {
      isShow: 1,
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
