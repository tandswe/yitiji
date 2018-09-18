<template>
    <div>
        			<h1>请插入输入您的联系电话</h1>
			<div class="myiphone">
				联系电话<input type="text">
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
  margin-top: 162px;
  font-size: 24px;
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
