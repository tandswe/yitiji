<template>
    <div>
         <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img :src="require('@/img/home/banner00.png')" sytle="width:100%:"></swiper-slide>
    <swiper-slide><img :src="require('@/img/home/banner01.jpg')"></swiper-slide>
    <swiper-slide><img :src="require('@/img/home/banner02.jpg')"></swiper-slide>
    <swiper-slide><img :src="require('@/img/home/banner03.jpg')"></swiper-slide>
    
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>

    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
      return {
        swiperOption: {
            autoplay: {
              delay:6000,
              disableOnInteraction: false
            },
            speed: 1000,
            loop:true,
            
        }
      }}
    }
</script>

<style scoped>
img{
    width:100vw !important;
    height:31.5vh !important;
}
</style>