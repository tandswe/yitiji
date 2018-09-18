<template>
    <div>
        			<h1>请输入您的联系电话</h1>
			<div class="myiphone">
				联系电话：<input type="text">
			</div>

    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 28px;
  color: #333;
  height: 20%;
  display: flex;
  align-items: center;
  padding-left: 98px;
  padding-top: 48px;
}
.myiphone {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  height:35vh;
  @media screen and (max-width:1200px){
    font-size: 3vw;
  }
  input {
    outline: none;
    width: 480px;
    height: 50px;
    border: 1px solid #cccccc;
    background: #f8f8f8;
    margin-left: 21px;
  }
}
</style>
