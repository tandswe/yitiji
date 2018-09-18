<template>
    <div>   
		<h1>请放置好注销户口人的死亡证明</h1>
			<div class="expenses-center">
                <p>死亡证明</p>
                <p>XXXXXXXXXXXXXXXXXXX</p>
			</div>
      <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    heardText: String
  },
  components: {},
  data() {
    return {
      id: require("@/img/views/idcard03.png")
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
button {
  width: 154px;
  height: 56px;
  background: rgba(0, 140, 255, 1);
  border-radius: 30px;
  font-size: 26px;
  line-height: 56px;
  color: #fff;
  margin: 20px auto;
}
@media screen and (max-width:1200px){
  .expenses-center{
    width: 80% !important;
    height: 20vh !important;
    p{
      font-size: 1.6vh !important;
    }
  }
}
.expenses-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 98px auto 0;
  width: 502px;
  height: 342px;
  background: rgba(231, 241, 251, 1);
  border-radius: 8px;
  p{
      margin: 33px;
      font-size: 32px;
      color: #0573DE;
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
