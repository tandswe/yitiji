<template>
    <div>   
		<h1>{{heardText}}</h1>
			<div class="expenses-center">
				<img :src="id" alt="">
			</div>
         <div  style="margin-top:5%">
                <button-sub btname="同意"></button-sub>
            </div>

            
    </div>
</template>

<script>
 import buttonSub from "@/components/base/buttonSub"
export default {
     components:{buttonSub},
    props:{
        heardText: String,
        id:{
            default:require('@/img/views/id@5x.png')
        }
    },

  data() {
    return {
     
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>

.expenses-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 98px auto 0;
  img {
      width:502px;
height:342px;
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
