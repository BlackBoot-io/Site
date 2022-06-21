<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <a class="ss-link" :href="slide.link">
            <!-- <div
              class="ss-section"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            > -->
              <img class="ss-image" :src="slide.img" />
            <!-- </div> -->
        </a>
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

.swiper-container {
  padding-bottom: 40px!important;
}

.ss-link {
  display: block;
  width: 100%;
  text-align: center;
}


.swiper-pagination {
  @media screen and (min-width: 1904px) and (max-height: 880px) {
    display: none;
  }

  @media screen and (max-height: 800px) {
    display: none;
  }
}

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #6A1A7C!important;
  border-radius: 30px!important;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 24px;
  height: 7px;
}

</style>