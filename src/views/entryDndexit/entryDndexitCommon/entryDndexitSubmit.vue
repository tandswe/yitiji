<template>
    <div class="sub-warp">  
	  <div v-if="0">
		  <!-- <div class="sub-center">
			  <h1>办理本业务需满足一下条</h1>
			  <div class="sub-center-text">
				  <p>
					  <span>1</span>广东户籍居民
				  </p>
				  <p>
					  <span>2</span>已有广东省签发的通行证，申请再次签注
				  </p>
			  </div>
			  <div class="sub-cente-btn">
				  <button @click="next">已提交申请</button>
				  <button>填写申请</button>
			  </div>
		  </div> -->
	  </div> 
		<!-- <div v-if="showText==2">
		 <div class="sub-photo">
			 <h1>请放置好你的照相回执码</h1>
				<div class="place-photo">
					<img :src="myphoto" alt="">
				</div>
				<div class="place-btn">
					<button>手动输入</button>
				</div>
		 </div>
		</div>
		<div v-if="showText==3">
		 <div class="sub-fingerprint">
			 <h1>请对准指纹口按压拇指 60s</h1>
				<div class="place-fingerprint">
					<img :src="fingerprint" alt="">
				</div>
				<div class="place-text">
					<p>请确保本人指纹，放置入录入口</p>
				</div>
		 </div>
		</div> -->
		<div v-if="!showText">
			<div class="check-center">
				<h1>核对申请信息</h1>
					<!-- <p>户籍信息<span>户口所在地：广州市 办证地点：清远市</span></p>
					<p>个人信息<span>出生日期：1988-10-13 联系电话：18812341234</span></p>
					<p>证件信息<span>通行证号码：123456789999 有效期：2018-12-22</span></p>
					<p>签注类型<span>前往地区：香港+澳门 香港签注：一年二次有效 澳门签注：三个月二次有效</span></p>
					<p>取件类型<span>取证方式：公安机关取</span></p> -->

          <p>证件姓名<span>XXX</span></p>
          <p>联系电话<span>18812341234</span></p>
          <p>办理签注地<span>广州市AAAA</span></p>
					<p>通行证号码<span>123456789999</span></p>
          <p>有效期<span>2018-12-22</span></p>
					<p>前往地区<span>香港+澳门</span></p>
          <p>签注有效期<span>一年二次</span></p>
					<p>取证方式<span>公安机关取</span></p>
          <!-- <button @click="bigNext" class="buttonStyle">下一步</button> -->
           <div @click="bigNext" style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
            </div>
			</div>
		</div>
		<div v-else>
			<div class="apply-center">
				<h1>申请信息</h1>	
				<el-form label-width="240px">
					<el-form-item label="选择前往地区">
              <el-select v-model="area" placeholder="请选择" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
					<el-form-item label="香港签注" v-if="area==='hk'">
            <el-select v-model="area1" placeholder="请选择" >
              <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
					</el-form-item>
          <el-form-item label="澳门签注" v-if="area==='mc'">
            <el-select v-model="area2" placeholder="请选择" >
              <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
					</el-form-item>
          <el-form-item label="香港+澳门签注" v-if="area==='hkmc'">
            <el-select v-model="area3" placeholder="请选择" >
              <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
					</el-form-item>
     
          <!-- <button @click="next" class="buttonStyle">下一步</button> -->
          <div @click="next"  style="margin-top:5%">
                <button-sub btname="下一步"></button-sub>
          </div>
				</el-form>
			</div>			
		</div>

    </div>
</template>

<script>
import buttonSub from "@/components/base/buttonSub"
export default {
  components: {buttonSub},
  data() {
    return {
      showText: 1,
      myphoto: require("@/img/views/id@5x.png"),
      fingerprint: require("@/img/views/fingerprint.png"),
      area:'',//选择区域
      options: [{
          value: 'hk',
          label: '香港'
        }, {
          value: 'mc',
          label: '澳门'
        }, {
          value: 'hkmc',
          label: '香港+澳门'
        }],
        area1:'',//香港区域
        options1: [{
            value: 'h1_2',
            label: '一年两次有效'
          }, {
            value: 'h3_2',
            label: '三个月两次有效'
          }],
        area2:'',//澳门区域
        options2: [{
            value: 'm1_2',
            label: '一年两次有效'
          }, {
            value: 'm3_2',
            label: '三个月两次有效'
          }],
        area3:'',//香港澳门区域
        options2: [{
            value: 'hm1_2',
            label: '一年两次有效'
          }, {
            value: 'hm3_2',
            label: '三个月两次有效'
          }],
    };
  },
  computed: {},
  mounted(){
     console.log(this.value)
  },
  methods: {
    next() {
      // this.showText++
      this.showText = 0
      
    },
    bigNext(){
        this.$store.commit('changeheadTabIndex',{count:1})
    }
  }
};
</script>
<style>
.el-form-item__label{
  display:flex;
  justify-content: flex-end;
}

@media screen and (max-width: 1200px){
.el-form-item__content{
  display:flex;
  align-items:center;
}
.el-form-item__label{
    font-size: 1.8vh !important;
    font-weight: bold;
    line-height: 4vh;
    
}
.el-input__inner{
  width:40vw;
}
}
</style>
<style lang="scss" scoped>
.sub-warp {
  height: 100%;
  // 满足条件
  .sub-center {
    margin: 100px auto 0;
    width: 558px;
    h1 {
      margin-bottom: 50px;
    }
    .sub-center-text {
      width: 558px;
      height: 176px;
      background: rgba(231, 241, 251, 1);
      border-radius: 8px;
      margin-bottom: 126px;
      text-align: left;
      padding-left: 40px;
      padding-top: 39px;
      box-sizing: border-box;
      p {
        margin-bottom: 40px;
        span {
          width: 31px;
          height: 31px;
          background: rgba(0, 112, 224, 1);
          display: inline-block;
          border-radius: 50%;
          color: #ffffff;
          text-align: center;
          line-height: 31px;
          margin-right: 13px;
        }
      }
    }
    .sub-cente-btn {
      button {
        width: 250px;
        height: 80px;
        background: rgba(0, 112, 224, 1);
        border-radius: 6px;
        margin-right: 58px;
        margin-bottom: 58px;
        color: #fff;
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  //   照片
  .sub-photo {
    text-align: left;
    h1 {
      font-size: 28px;
      color: #333;
      height: 20%;
      display: flex;
      align-items: center;
      padding-left: 98px;
      padding-top: 48px;
    }
    .place-photo {
      width: 560px;
      height: 420px;
      background: #eef9ff;
      margin: 42px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 140px;
        height: 183px;
      }
    }
    .place-btn {
      text-align: center;
    }
    button {
      width: 180px;
      height: 56px;
      background: rgba(5, 119, 222, 1);
      border-radius: 6px;
      color: #ffffff;
      margin: 0 auto;
    }
  }
  //   指纹
  .sub-fingerprint {
    text-align: left;
    h1 {
      font-size: 28px;
      color: #333;
      height: 20%;
      padding-left: 98px;
      padding-top: 48px;
    }
    .place-fingerprint {
      width: 560px;
      height: 420px;
      background: #eef9ff;
      margin: 42px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: inherit;
        height: inherit;
      }
    }
    .place-text {
      text-align: center;
    }
  }
  //   核对
  .check-center {
    text-align: left;
    padding-left: 98px;

    h1 {
      font-size: 28px;
      color: #333;
      height: 20%;
      padding-top: 48px;
      padding-bottom: 32px;
    }
    p {
      font-size: 24px;
      margin-bottom: 30px;
    @media screen and (max-width: 1200px){
      font-size: 1.6vh !important;
   }
      span {
        display: inline-block;
        height: 54px;
        border: 1px solid #cccccc;
        background: #f8f8f8;
        line-height: 54px;
        margin-left: 20px;
        padding: 0 20px;
      }
    }
  }
  .apply-center {
    text-align: left;
    padding-left: 98px;
    h1 {
      font-size: 28px;
      color: #333;
      height: 20%;
      padding-top: 48px;
      padding-bottom: 32px;
    }
  }
}
</style>
