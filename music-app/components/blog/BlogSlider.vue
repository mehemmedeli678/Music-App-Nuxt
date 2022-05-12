<template>
    <div>
             <div class="blog">
     <swiper
    direction="vertical"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide ><img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/home-11-slide-2.jpg" alt="">
    <h1>NEW ALBUM OUT NOW</h1>
    </swiper-slide>
    <swiper-slide><img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/home-11-slide-1.jpg" alt="">
    <h1>Get Your Ticked Today</h1>
    </swiper-slide>
    <swiper-slide><img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/home-11-slide-3.jpg" alt="">
    <h1>UPCOMING YOUR DATES</h1>
    </swiper-slide>
  </swiper>
     </div> 
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";

import "swiper/css/pagination";
export default {
       components: {
    Swiper,
    SwiperSlide,
  },
   setup() {
    return {
      modules: [Pagination],
    };
  },
}
</script>