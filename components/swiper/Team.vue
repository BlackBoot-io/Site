<template>
  <div v-swiper="swiperOption" class="team-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="i in 9" :key="i">
        <div class="t-box">
          <img src="../../static/img/team/1.png">
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slideshow",
  directives: {
    swiper: directive,
  },
  props: ['items'],
  data: () => ({
    swiperOption: {
      spaceBetween: 45,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				1264: {
					slidesPerView: 7
				},
				756: {
					slidesPerView: 2
				},
				599: {
					slidesPerView: 1
				}
			},
    },
    usdtIcon: require('../../static/img/methods/usdt.svg?raw'),
  }),
  created: function () {
    
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.team-swiper {
  margin-top: 50px;
	padding: 30px 50px!important;

  .swiper-slide {
    transition: 0.3s;
    
    img {
      border-radius: 8px;
      cursor: pointer;
    }

    .t-box {
      text-align: center;
    }
    
    &.swiper-slide-active {
      transform: scale(1.3);

      img {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #412971!important;
    width: 30px!important;
    height: 30px!important;
    border-radius: 5px;
    top: 50%!important;
    border: 1px solid #412971;
    transition: 0.2s;

    &:after {
      font-size: 10px!important;
      font-weight: bold;
    }

    &:hover {
      background: #412971!important;
      color: $cw!important;
    }

    @include res($sm) {
      top: 127px!important;

      &:after {
        font-size: 12px!important;
      }
    }
  }

  .swiper-button-prev {
    left: 0px!important;
    right: auto;
  }

  .swiper-button-next {
    right: 0px!important;
    left: auto;
  }
}



</style>