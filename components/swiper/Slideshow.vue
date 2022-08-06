<template>
  <div v-swiper="swiperOption" class="slideshow-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <!-- <a class="ss-link" :href="slide.link"> -->
            <!-- <div
              class="ss-section"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            > -->
              <img class="ss-image" :src="slide.img" alt="slider images" width="525" height="505" />
            <!-- </div> -->
        <!-- </a> -->
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slideshow",
  directives: {
    swiper: directive,
  },
  props: ["slides"],
  data: () => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  }),
  created: function () {},
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.slideshow-swiper {
  padding-bottom: 30px!important;

  .ss-link {
    display: block;
    width: 100%;
    text-align: center;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    width: 35px!important;
    height: 3px!important;
    background: $cw!important;
    border-radius: 30px!important;
    margin: 0!important;
    border-radius: 0!important;

    &:first-child {
      border-radius: 30px 0 0 30px!important;
    }

    &:last-child {
      border-radius: 0 30px 30px 0!important;
    }
  }
}



</style>