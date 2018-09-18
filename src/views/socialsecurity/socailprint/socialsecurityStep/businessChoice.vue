<template>
    <div class="article clearfix"> 
        <article>
            <ul>
                <li><img :src="id1"> <p>社保综合</p></li>
                <li><img :src="id2"> <p>医疗保险</p></li>
                <li><img :src="id3"> <p>养老保险</p></li>
                <li><img :src="id4"> <p>个人参保证明</p></li>
            </ul>
           
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
             id1:require('@/img/views/shebao@2x.png'),
             id2:require('@/img/views/baoxian@2x.png'),
             id3:require('@/img/views/yanglao@2x.png'),
             id4:require('@/img/views/getrn@2x.png')
            }
        },
        computed:{
           
        },
        methods:{
          back(){
              this.$router.push({path:'/'})
          }
        }
    }
</script>

<style lang="scss" scoped>

.article{
    width:100%;
    height:100%;
    font-size:20px;
    position: relative;
    ul{
      width: 90%;
       margin:30px auto;
       display:flex;
       flex-wrap: wrap;
       text-align: center;
       li{ list-style-type:none;
        //    flex:1;
           float: left;
           height:200px;
           border:1px solid #E6E6E6;
           border-radius: 8px;
           width: 320px;
           margin:32px; 
       }
       img {
            width: 88px;
            height: 88px;
            background-size: 100%;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
       }
       p{
            font-size: 28px;
            margin-top: 23px;
            color: #333;
       }
   }
}
</style>
