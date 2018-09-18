<template>
    <div>   
		<h1>{{heardText}}</h1>
			<div class="expenses-center">
				<img :src="id" alt="">
			</div>
            <!-- <button>提交</button> -->

             <div @click="substep"  style="margin-top:5%">
                <button-sub btname="提交"></button-sub>
            </div> 
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
    props:{
        heardText: String
    },
  components: {buttonSub},
  data() {
    return {
     id:require('@/img/views/idcard03.png')
    };
  },
  computed: {},
  methods: {}
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
    margin: 20px auto;
}
.expenses-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 98px auto 0;
  width:502px;
height:342px;
background: #e7f1fb;
  img {
    width: 360px;
    height: 216px;
  }
}
h1 {
  font-size: 28px;
  color: #333;
  height: 20%;
  display: flex;
  align-items: center;
  padding-left: 98px;
  padding-top: 48px;
}
</style>
