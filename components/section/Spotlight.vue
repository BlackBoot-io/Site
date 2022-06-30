<template>
  <v-container fluid class="spotlight">
    <v-container>
      <v-row class="s-inside">
        <v-col cols="12" md="12" lg="6">
          <h1 class="s-head">
            We Enable You <span>Proof Yourself</span><br>and <span>Your Experiences!</span>
          </h1>
          <p class="s-text">
            Black boot the first provider to able you proof your experiences through Soulbound Tokens and NFTs!
          </p>
          <div class="public-sale">
            <v-row>
              <v-col cols="12" sm="12" md="6" class="left">
                <h5 class="p-title"> Public Sale</h5>
                <p class="p-text">Remaining time to buy</p>
                <v-btn dark depressed height="48" class="btn-main" :color="$store.state.cPrimary">
                  <v-icon size="21" class="mr-1">mdi-basket-outline</v-icon>
                  Buy Token
                </v-btn>
              </v-col>  
              <v-col cols="12" sm="12" md="6" class="right">
                <div>
                  <div class="d-flex align-center justify-space-between mb-3">
                    <p>Token Price</p>
                    <div class="p-details">
                      <span class="dollar-amount">$214</span><span class="almost-eq">≃</span><span class="token-amount">0.012</span><span><img :src="ethereumIcon" alt="ethereumIcon" /></span>
                    </div>
                  </div>
                  <div class="d-flex align-center justify-space-between">
                    <p>Tokens for sale</p>
                    <div class="p-details">
                    <span class="token-amount">900m</span><span><img :src="busdIcon" alt="ethereumIcon" /></span>
                    </div>
                  </div>
                </div>
                <div class="count-down d-flex align-center justify-space-between">
                  <span>10</span>
                  <span>14</span>
                  <span>54</span>
                  <span>32</span>
                </div>
                <v-btn dark outlined height="48" class="btn-main" :color="$store.state.cPrimary">
                  <v-icon size="21" class="mr-1">mdi-arrow-down</v-icon>
                  Download white paper
                </v-btn>
              </v-col>
            </v-row>
          </div>
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
    data: () => ({
      ethereumIcon: require('../../static/img/ethereum.svg'),
      busdIcon: require('../../static/img/busd.svg'),
      slides: [
        {
          img: "../img/slides/1.svg",
          link: "#",
        },
        {
          img: "../img/slides/1.svg",
          link: "#",
        },
        {
          img: "../img/slides/1.svg",
          link: "#",
        },
      ],
      stats: [
        {
          num: '3K+',
          text: 'The CVs that is viewed by businesses on our platform so far.'
        },
        {
          num: '200+',
          text: 'The number of Job titiles that we have worked with so far.'
        },
        {
          num: '1M+',
          text: 'The tokens that is traded in our platform.'
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
  background-image: url('../../static/img/spotlight-bg.png');
  background-image: url('../../static/img/spotlight-bg.png'), linear-gradient(to bottom,#f1fafd 0%, $cw 100%);
  background-repeat: no-repeat;
  background-position: left top;

  .s-inside {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-top: 120px;

    @include res($md) {
      height: auto;
      padding-top: 80px;
    }
  }


  .slider {
    position: absolute;
    bottom: 14px;
    right: -92px;
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

    &:before {
      content: url('~static/img/dashed-line.svg');
      position: absolute;
      top: 20px;
      left: 100%;
    }

    span {
      position: relative;
      font-weight: 700;
      font-size: 38px;
      z-index: 5;

      @include res($sm) {
        font-size: 32px;
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
  }

  .public-sale {
    display: flex;
    width: 560px;
    height: 296px;
    background: #FFFFFF;
    box-shadow: 3.20857e-15px 20px 104.8px rgba(51, 51, 51, 0.0835);
    border-radius: 10px;
    padding: 25px 30px 30px 30px;

    @include res($md) {
      width: 100%;
    }

    @include res($sm) {
      display: block;
      width: 100%;
      height: auto;
    }

    .left,
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      @include res($sm) {
        height: 300px;
      }
    }

    .left {
      
      .p-title {
        position: relative;
        display: flex;
        font-weight: 500;
        font-size: 20px;
        line-height: 10px;
        text-transform: capitalize;
        color: #412971;
        padding-left: 30px;
        margin-top: 10px;

        &:before {
          content: '#';
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translate(-50%, -50%);
          font-size: 30px;
        }

        span {
          font-size: 30px;
          margin-right: 5px;
        }
      }

      .p-text {
        font-weight: 400;
        font-size: 17px;
        line-height: 10px;
        text-transform: capitalize;
        color: #000000;
      }
    }

    .right {
      .p-details {
        display: flex;
        align-items: center;
        justify-content: center;

        .dollar-amount {
          background: #EAF4FB;
          border-radius: 5px;
          font-weight: 500;
          font-size: 13px;
          line-height: 5px;
          text-transform: capitalize;
          color: #3498DB;
          padding: 8px;
          margin: 0 5px;
        }
      
        .token-amount {
          font-weight: 500;
          font-size: 16px;
          text-transform: capitalize;
          color: #000000;
          margin: 0 5px;
        }
      
        .almost-eq {
          font-weight: 500;
          font-size: 20px;
          text-transform: capitalize;
          color: #8C8C8C;
        }
      }

      .count-down {
        margin-top: 10px;

        span {
          position: relative;
          width: 44.86px;
          height: 44.86px;
          background: #F9F9F9;
          border: 0.89725px solid #F2F1F1;
          border-radius: 7.178px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:before {
            content: '';
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: 400;
            font-size: 13px;
            line-height: 9px;
            text-transform: capitalize;
            color: #7A808B;
          }
          &:after {
            content: ':';
            position: absolute;
            top: 45%;
            right: -17px;
            transform: translate(-50%, -50%);
            font-weight: 900;
            font-size: 22.4313px;
            line-height: 9px;
            text-transform: capitalize;
            color: #7A808B;
          }

          &:nth-child(1) {
            &:before {
              content: 'days';
            }
          }
          &:nth-child(2) {
            &:before {
              content: 'hours';
            }
          }
          &:nth-child(3) {
            &:before {
              content: 'minutes';
            }
          }
          &:nth-child(4) {
            &:before {
              content: 'seconds';
            }
            &:after {
              display: none;
            }
          }
        }
      }
    }
  }
}

.stats {
  padding-top: 80px;
  padding-bottom: 50px;

  .stat-num {
    position: relative;
    z-index: 5;
    display: block;
    font-weight: 700;
    font-size: 30px;
    color: #023047;
    margin-bottom: 15px!important;

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
  }
}

</style>
