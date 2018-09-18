<template>
<div>
    <div v-if="Dialog" class="dialog-wrap">
	     <div class="dialog-shadow fadeIn"  @click="hideDialog"></div>
		  <div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">		
			<div class="dialog-content">
                <div class="dialog-close" @click="hideDialog"><i class="el-icon-circle-close"></i></div>
			  <!-- <img :src="id2"> -->
              <div class="dialog-list">
                  <ul>
                    <li><img :src="zhiwen">指纹登录</li>
                    <li  @click="idClick"><img :src="shenfen">身份证登录</li>
                    <li><img :src="renlian">人脸登录</li>
                  </ul>
              </div>

			</div>
		  </div>
    	</div>
        <div v-if="DialogId" class="dialog-wrap">
	     <div class="dialog-shadow fadeIn"  @click="hideDialogID"></div>
		  <div class="dialog-box fadeIn" :style="{height:height+'px',width:width+'px'}">		
			<div class="dialog-content">
                <div class="dialog-close" @click="hideDialogID"><i class="el-icon-circle-close"></i></div>
			  <!-- <img :src="id2"> -->
              <div class="dialog-lists">
                 <h1>请使用身份证登录</h1>
                 <img :src="IDsrc" alt="">
              </div>
			</div>
		  </div>
    	</div>
</div>        
</template>

<script>
export default {
    name:"layoutLogin",
    props:{
        Dialog:{
            type:Boolean,
            default: false
        },
        width:{
		    	type: Number,
		      	default:300
		    },
		    height:{
		    	type: Number,
		      	default:10
		    }
    },
    data(){
        return {
            zhiwen:require('@/img/home/zhiwen@2x.png'),
            shenfen:require('@/img/home/shenfen@2x.png'),
            renlian:require('@/img/home/renlian@2x.png'),
            IDsrc:require('@/img/views/iden@2x.png'),
            DialogId: false
        }
    },
    methods:{
     hideDialog(){
        this.$emit('hideDialog', false)
     },
     hideDialogID(){
         this.DialogId =false
     },
     idClick(){
         console.log(1)
         this.Dialog =false
         this.DialogId =true
         // 这里是测试
            this.$axios.get('/inteGration/api/jzz/getUserInfo1',{params:{userid:1}}).then(data=>{
                    this.$store.state.residence.IdObj = data.data.data
                    this.$store.commit('changeTabIndex',{count: 1})
            })
     }
    }

}
</script>
<style lang="scss" scoped>
.dialog-wrap{
		z-index: 3;
	}
	.dialog-shadow{
		position: fixed;
		top: 0;
		left: 0;
		width: 2000px;
		height:5000px;
		z-index: 3;
		background:rgba(0,0,0,.3);
	}
	.dialog-box{
		position: fixed;
		z-index: 99999;
		top: 30%;
		left: 30%;
		transform: translate(-50%,-50%);
	}

	.dialog-content{
		height: 664px;
        width: 1240px;
		background: #FFFFFF;
		border-radius: 20px;
        position: relative;
	}
    .dialog-close{
        position:absolute;
        top:4%;
        right: 3%;
        font-size: 80px;
        cursor: pointer;
    }
    .dialog-list{
       display: flex;    
       justify-content: center;   
       align-items: center;
       flex: 1;
       ul{
           width: 70%;
       }
        li{
            width:260px;
            height:180px;
            float: left;
            background:rgba(75,184,243,1);
            border-radius:10px;
            margin-top: 25%;
            margin-right:5%;
            display: flex;    
            justify-content: center;   
            align-items: center;
            flex: 1;
            font-size:26px;
            color: #fff;
        }
        img{
            margin-right: 10px;
        }
       
    }
 .dialog-list li:nth-child(3){
  margin-right: 0;
  }
  .dialog-lists{
      h1{
          font-size: 36px;
          padding-top: 75px;
          margin-bottom: 108px;
      }
      img{
          width: 469px;
          height: 280px;    
      }
  }
</style>
