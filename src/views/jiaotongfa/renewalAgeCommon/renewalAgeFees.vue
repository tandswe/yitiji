<template>
    <div class="wrap">   
        <signature v-if="isShow===1" @listenType="nextType"></signature>
        <brankCard v-if="isShow===2" @listenType="nextType"></brankCard>
        <brankPassword v-if="isShow===3" @listenType="nextStep(typeId)"></brankPassword>
       
    </div>
</template>

<script>
import brankCard from "../motorCompontes/brankCard.vue";
import signature from "../motorCompontes/signature.vue";
import brankPassword from "../motorCompontes/brankPassword.vue";
export default {
  components: {
    brankCard,
    brankPassword,
    signature
  },
  mounted() {
   //console.log(this.typeId+"------------")
  },
  data() {
    return {
      isShow:1,
       
    };
  },
  methods:{
    nextType(data){
          this.isShow++
        },
    nextStep(id){
        this.$store.commit('getTypeid',{id})
        this.$store.commit('changeheadTabIndex',{count:1})
    }
  },
  computed: {
    typeId(){
      return this.$store.state.home.typeId
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
