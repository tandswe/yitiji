<template>
    <div>   
		<h1>{{heardText}}</h1>
			<div class="expenses-center">
				<img :src="id" alt="">
			</div>
                <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        heardText: String
    },
  components: {},
  data() {
    return {
     id:require('@/img/views/id@4x.png')
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
  
  img {
   width:436px;
height:436px;
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
