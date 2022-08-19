<template>
  <v-container fluid class="spotlight">
    <v-container>
      <v-row class="s-inside">
        <v-col cols="12" md="12" lg="6">
          <h1 class="s-head">
            We Enable You <span>Proof Yourself</span><br>and <span>Your Experiences by NFTs!</span>
          </h1>
          <p class="s-text">
            {{ $store.state.title }} is the first provider to able you proof your experiences through Soulbound Tokens and NFTs!
          </p>
          <SectionPublicSale :currentSale="currentSale" />
        </v-col>
        <div class="slider">
          <SwiperSlideshow :slides="slides" />
        </div>
      </v-row>
      <v-row class="stats">
        <v-col cols="6" md="3" v-for="(stat, index) in stats" :key="index">
          <span :class="'stat-num num-'+index">
            {{ stat.num }}
          </span>
          <p class="stat-text">
            {{ stat.text }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: ['currentSale'],
    data: () => ({
      slides: [
        // {
        //   img: "../img/slides/1.webp",
        //   link: "#",
        // },
        {
          img: "../img/slides/2.webp",
          link: "#",
        },
        // {
        //   img: "../img/slides/3.webp",
        //   link: "#",
        // },
      ],
      stats: [
        {
          num: '4+',
          text: 'Businesses have integrated themeselves with us.'
        },
        {
          num: '2000+',
          text: 'More than 2K NFTs have minted by Avanod.'
        },
        {
          num: '10M+',
          text: 'The tokens invested by others.'
        },
        {
          num: '100+',
          text: 'The Events and conferences that we have subscribed.'
        },
      ]
    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.spotlight {
  background: #8de0f8;
  background-image: url('../../static/img/spotlight-bg.webp');
  background-image: url('../../static/img/spotlight-bg.webp'), linear-gradient(to bottom,#f1fafd 0%, $cw 100%);
  background-repeat: no-repeat;
  background-position: left top;

  @include res($md) {
    padding: 12px 0;
  }

  .s-inside {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-top: 120px;

    @include res($md) {
      height: auto;
      padding-top: 80px;
    }

    @include res($sm) {
      padding-top: 60px;
    }
  }

  .slider {
    position: absolute;
    bottom: -15px;
    right: -180px;
    width: 633px;
    height: 532px;

    // &:before {
    //   content: '';
    //   position: absolute;
    //   bottom: 0;
    //   right: 57px;
    //   width: 76.2%;
    //   height: 91.5%;
    //   min-height: 482px;
    //   background: linear-gradient(180deg, rgba(8, 55, 101, 0.4) 0%, rgba(166, 119, 86, 0.4) 33.49%, rgba(147, 6, 134, 0.4) 103.09%);
    //   backdrop-filter: blur(15px);
    //   border-radius: 24px;
    // }

    @include res($md) {
      display: none;
    }
  }

  .s-head {
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 57px;
    color: #424242;
    margin-bottom: 10px;

    @include res($sm) {
      font-size: 24px;
      line-height: 50px;
      text-align: center;
    }

    @include res($xs) {
      font-size: 18px;
      line-height: 45px;
    }

    &:before {
      content: url('~static/img/dashed-line.svg');
      position: absolute;
      top: 20px;
      left: 100%;

      @include res($sm) {
        left: auto;
        right: 0;
      }

      @include res($xs) {
        display: none;
      }
    }

    span {
      position: relative;
      font-weight: 700;
      font-size: 38px;
      z-index: 5;

      @include res($sm) {
        font-size: 32px;
      }

      @include res($xs) {
        font-size: 26px;
      }

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 60%;
        left: 0;
        background: linear-gradient(to right, #FFB55F 0%, #FFE183 50%, #FFDA7B 98%, #FFFFFF 100%);
        transition: 0.2s;
        width: 100%;
        height: 30%;
      }
    }
  }

  .s-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    color: #606060;
    margin-bottom: 25px!important;

    @include res($sm) {
      text-align: center;
    }

    @include res($xs) {
      font-size: 14px;
      line-height: 27px;
    }
  }
}

.stats {
  padding-top: 80px;
  padding-bottom: 50px;

  @include res($sm) {
    padding: 20px 7px 20px 7px;
  }

  .stat-num {
    position: relative;
    z-index: 5;
    display: block;
    font-weight: 700;
    font-size: 30px;
    color: #023047;
    margin-bottom: 15px!important;

    @include res($sm) {
      font-size: 20.6417px;
      line-height: 25px;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 7px;
      top: 45%;
      transform: translate(-50%, -50%);
      background: #d7e6ec;
      transition: 0.2s;
      width: 36px;
      height: 36px;
      border-radius: 50%;

      @include res($sm) {
        width: 25px;
        height: 25px;
      }
    }

    &.num-0 {
      &:before {
        background: #d7e6ec;
      }
    }
    &.num-1 {
      &:before {
        background: #f4d1d3;
      }
    }
    &.num-2 {
      &:before {
        background: #cfe7e4;
      }
    }
    &.num-3 {
      &:before {
        background: #e3d6e9;
      }
    }
  }

  .stat-text {
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #5B626E;
    max-width: 90%;

    @include res($sm) {
      font-size: 14px;
      line-height: 17px;
      max-width: 100%;
    }
  }
}

</style>
