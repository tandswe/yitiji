<template>
    <div class="warp-details"> 
        <div class="chilp-card" >
			<div class="chilp-text">
				<h3>以下信息查验一致</h3>
				<hr>
                <table>
                    <tr>
                        <td>姓名：</td>
                        <td>张一二</td>
                    </tr>
                    <tr>
                        <td>参保地：</td>
                        <td>广州市</td>
                    </tr>
                    <tr>
                        <td>社会保障号：</td>
                        <td>5225354</td>
                    </tr>
                </table>
			</div>
        </div>
        <!-- <button>提交认证</button> -->
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
         <div @click="substep"  style="margin-top:5%">
                <button-sub btname="提交认证"></button-sub>
            </div> 
    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
  components: {buttonSub},
  props:{
      cardText:String,
      heardText: String,
      succeed: {
          default:false,
          type:Boolean
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

button{
    width:154px;
height:56px;
background:rgba(0,140,255,1);
border-radius:28px;
color: #ffffff;
}
.warp-details {
  height: 100%;
  text-align: center;
  h1 {
    font-size: 28px;
    color: #333;
    height: 20%;
    padding-left: 98px;
	margin-bottom: 144px;
	padding-top: 48px;
  }
  .chilp-card {
    
    border-radius: 20px;
    margin: 5vh auto 0;
    // margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
    .chilp-text {
        
        padding: 66px;
        box-sizing: border-box;
        background:rgba(246,246,246,1);
        border:2px solid rgba(221,221,221,1);
        border-radius:20px;
        margin: 100px auto;
		h3{
			margin-bottom: 13px;
		}
        table{
            width: 100%;
            td{
                width: 50%;
                text-align: left;
                padding: 7px;
                &:nth-child(2n){
                    text-align: right;
                }
            }
        }
    }
  }
}
    .proceed{
        color: #E82222;
    }
    .suceed{
        color:#10951F;
    }
</style>
