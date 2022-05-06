<template>
<div class="swiper-container2" data-scroll>

<SliderPlayer/>
          <div class="swiper-wrapper">
            <!-- Slide -->
            <div class="swiper-slide">
              <div class="slide-inner" >
                <div class="slide-inner--image" style="background-image: url('https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-slide-3a.jpg')"></div>
                <div class="slide-inner--info box4">
                  <div class="hide-head"> <h1>Enable<br>Ticket sales</h1></div>
                  <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                  <div class="store">
                    <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/itunes.png" alt="">
                    <img class="ml-2" src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-google-play-logo.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <!-- Slide -->
            <div class="swiper-slide">
              <div class="slide-inner" >
                <div class="slide-inner--image" style="background-image: url('https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-slide-1a.jpg')">
                </div>
                <div class="slide-inner--info">
                  <h1>Enable<br>Ticket sales</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum ab dolorum rem totam.</p>
                  <div class="store">
                    <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/itunes.png" alt="">
                    <img class="ml-2" src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-google-play-logo.png" alt="">
                  </div>
                </div>
              </div>
            </div>
               <!-- Slide -->
            <div class="swiper-slide">
              <div class="slide-inner" >
                <div class="slide-inner--image" style="background-image: url('https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-backround-image-1.jpg?id=343')">
                </div>
                <div class="slide-inner--info">
                  <h1>Enable<br>Ticket sales</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum ab dolorum rem totam. Architecto officia assumenda distinctio iure eius?</p>
                 <div class="store">
                    <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/itunes.png" alt="">
                    <img class="ml-2" src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-google-play-logo.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-nav-btn">
            <div class="swiper-button-prev swiper-button-white">prev</div>
            <div class="swiper-button-next swiper-button-white">next</div>
          </div>
          
        </div>
</template>
<script>
import {Swiper,Navigation,Pagination,Autoplay} from 'swiper'
import {gsap,Power2,Power4} from 'gsap'
import SliderPlayer from '@/components/home/SliderPlayer'
export default {
  components:{
   SliderPlayer
  },
 mounted(){
    Swiper.use([Navigation, Pagination, Autoplay])
      const swiper2 = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      parallax: true,
       effect: 'fade',
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 3000,
         disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    })

  var swiper = new Swiper('.swiper-container2', {
      speed: 1200,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    on: {
    init: function () {
      zoomImage(this.$el);
      moveDownText(this.$el);
    },
    slideNextTransitionStart: function () {
      zoomImage(this.$el);
      moveDownText(this.$el);
    },
    slidePrevTransitionStart: function () {
      zoomImage(this.$el);
      moveDownText(this.$el);
    } 
  }
    });
function zoomImage(sliderDOM) {
  const slideActive = sliderDOM.find('.swiper-slide-active, .swiper-slide-duplicate-active');
  const imageSlide = slideActive.find('.slide-inner--image'); 
  
  const otherImages = sliderDOM.find('.swiper-slide-prev, .swiper-slide-next');
  const notActiveImage = otherImages.find('.slide-inner--image');  
  
}

function moveDownText(sliderDOM) {
  const slideActive = sliderDOM.find('.swiper-slide-active');
  const slideCaption = slideActive.find('.slide-inner--info h1');
  const slideCaptionparag = slideActive.find('.slide-inner--info p');
  const slideCaptionstore = slideActive.find('.slide-inner--info .store');


  const oldActive = sliderDOM.find('.swiper-slide-prev, .swiper-slide-prev');
  const oldCaption = oldActive.find('.slide-inner--info h1');
  const oldCaptionparag = oldActive.find('.slide-inner--info p');
  const oldCaptionstore = oldActive.find('.slide-inner--info .store');


  // out
  gsap.to(oldCaption, .3, {
    ease: Power2.easeOut,
    startAt: {
      autoAlpha: 1 },

    autoAlpha: 0 });
  gsap.to(oldCaptionparag, .3, {
    ease: Power2.easeOut,
    startAt: {
      autoAlpha: 1 },

    autoAlpha: 0 });

      gsap.to(oldCaptionstore, .3, {
    ease: Power2.easeOut,
    startAt: {
      autoAlpha: 1 },

    autoAlpha: 0 });

  // in
  gsap.set(slideCaption, { autoAlpha: 0 });
  gsap.set(slideCaptionparag, { autoAlpha: 0 });
  gsap.set(slideCaptionstore, { autoAlpha: 0 });

  gsap.to(slideCaption, 3, {
    ease: Power4.easeOut,
    startAt: {
      autoAlpha: 0,
      x: "50%"
       },

    autoAlpha: 1,
    x:"0%",
    display: "block" });

  gsap.to(slideCaptionparag, 3, {
    ease: Power4.easeInOut,
    startAt: {
      autoAlpha: 0,
      x: "50%"
       },
    autoAlpha: 1,
    x:"0%",
    display: "block" });

      gsap.to(slideCaptionstore, 3.2, {
    ease: Power4.easeInOut,
    startAt: {
      autoAlpha: 0,
      x: "50%"
       },

    autoAlpha: 1,
    x:"0%",
    display: "block" });
}
},

};
</script>
