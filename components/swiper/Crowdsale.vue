<template>
  <div v-swiper="swiperOption" class="crowdsale-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="i in 6" :key="i">
        <div class="cs-box">
          <h5 class="cs-title">Public Sale</h5>
          <p class="cs-date">Jun-Aug 2022</p>
          <div class="timeline"></div>
          <div class="cs-inner">
            <p>Supply for sale</p>
            <div class="cs-details">
              <span class="token-amount">158m Tokens</span>
            </div>
          </div>
          <div class="cs-inner">
            <p>Token Price</p>
            <div class="cs-details">
              <span class="token-amount">0.012</span><span><img :src="ethereumIcon" alt="ethereumIcon" /></span><span class="almost-eq">≃</span><span class="dollar-amount">$214</span>
            </div>
          </div>
          <p class="cs-des">You can see our Product roadmap to be able to plan.</p>
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
  data: () => ({
    swiperOption: {
      slidesPerView: 3,
      spaceBetween: 60,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				1024: {
					slidesPerView: 3
				},
				959: {
					slidesPerView: 2
				},
				599: {
					slidesPerView: 1
				}
			},
    },
    ethereumIcon: require('../../static/img/ethereum.svg'),
    busdIcon: require('../../static/img/busd.svg'),
  }),
  created: function () {},
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.crowdsale-swiper {
	padding: 30px 50px 0 50px!important;

  .cs-box {
    text-align: center;

    .cs-title {
      font-size: 18px;
      font-weight: 700;
      margin: 5px;
    }

    .cs-date {
      font-size: 15px;
      font-weight: 400;
      color: #666;
    }

    .timeline{
      position: relative;
      height: 50px;

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 140%;
        height: 1px;
        background: #e6e6e6;
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 13px;
        height: 13px;
        border: 1px solid green;
        background: $cw;
        border-radius: 50%;
      }
    }

    .cs-inner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .cs-details {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .dollar-amount {
        background: #EAF4FB;
        border-radius: 5px;
        font-weight: 500;
        font-size: 14px;
        line-height: 5px;
        text-transform: capitalize;
        color: #3498DB;
        padding: 10px 8px;
      }
    
      .token-amount {
        font-weight: 300;
        font-size: 14px;
        text-transform: capitalize;
        color: #000000;
        margin-right: 5px;
      }
    
      .almost-eq {
        font-weight: 500;
        font-size: 20px;
        text-transform: capitalize;
        color: #8C8C8C;
        margin: 0 5px;
      }
    }

    .cs-des {
      font-weight: 300;
      color: #666;
      text-align: left;
    }
  }

  .swiper-slide {
    
    &.swiper-slide-active,
    &.swiper-slide-next + div {
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 140%;
        height: 100%;
        z-index: 9;
      }
    }
    &.swiper-slide-active {
      &:after {
        background: linear-gradient(to right, $cw 0%, transparent 80%);
      }
    }

    &.swiper-slide-next + div {
      &:after {
        background: linear-gradient(to left, $cw 0%, transparent 80%);
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #818286!important;
    width: 20px!important;
    height: 25px!important;

    &:after {
      font-size: 16px!important;
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