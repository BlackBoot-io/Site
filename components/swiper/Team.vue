<template>
  <Swiper v-swiper="swiperOption" class="team-swiper" @slideChange="memberChange">
    <div class="swiper-wrapper">
      <SwiperSlide class="swiper-slide" v-for="(item, index) in items" :key="index">
        <div class="t-box">
          <img :src="item.avatar">
          <p>{{ item.role }}</p>
        </div>
      </SwiperSlide>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </Swiper>
</template>

<script>
// import { directive } from "vue-awesome-swiper";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import '@/assets/scss/swiper-bundle.min.css';

export default {
  name: "Slideshow",
  // directives: {
  //   swiper: directive,
  // },
  props: ['items'],
  data: () => ({
    swiperOption: {
      spaceBetween: 45,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 30000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1264: {
          slidesPerView: 7
        },
        850: {
          slidesPerView: 5
        },
        599: {
          slidesPerView: 3
        }
      },
    },
  }),
  created: function () {

  },
  methods: {
    memberChange() {
      this.$emit('memberSelected', this.$swiper.realIndex);
    },
  },
	components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.team-avatar {
  text-align: center;
}

.team-swiper {
  margin-top: 16px;
  padding: 30px 50px !important;

  @include res($sm) {
    margin-top: 0px;
  }

  .swiper-slide {
    transition: 0.3s;

    img {
      border-radius: 8px;
      cursor: pointer;
      width: 93px;
    }

    .t-box {
      text-align: center;

      p {
        @include res(849px) {
          font-size: 14px;
        }

        @include res(599px) {
          font-size: 13px;
        }
      }
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
    color: #412971 !important;
    width: 30px !important;
    height: 30px !important;
    border-radius: 5px;
    top: 50% !important;
    border: 1px solid #412971;
    transition: 0.2s;

    &:after {
      font-size: 10px !important;
      font-weight: bold;
    }

    &:hover {
      background: #412971 !important;
      color: $cw !important;
    }
  }

  .swiper-button-prev {
    left: 0px !important;
    right: auto;
  }

  .swiper-button-next {
    right: 0px !important;
    left: auto;
  }
}
</style>