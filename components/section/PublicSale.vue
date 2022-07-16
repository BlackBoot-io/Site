<template>
  <div class="public-sale">
    <v-row>
      <v-col cols="6" class="left">
        <h5 class="p-title"> Public Sale</h5>
        <p class="p-text">Remaining time to buy</p>
        <a href="https://token.avanod.com/buy-token" target="_blank">
          <v-btn dark depressed class="btn-main" width="100%" :color="$store.state.cPrimary">
            <em v-html="buyIcon"></em>
            Buy Token
          </v-btn>
        </a>
      </v-col>  
      <v-col cols="6"  class="right">
        <div>
          <div class="d-flex align-center justify-space-between mb-3">
            <p>Token Price</p>
            <div class="p-details">
              <span class="dollar-amount">1 AVN</span><span class="almost-eq">≃</span><span class="token-amount">{{ currentSale.price }}</span><span><em v-html="usdtIcon"></em></span>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between">
            <p>Tokens for sale</p>
            <div class="p-details">
            <span v-if="currentSale.tokenForSale" class="token-amount">{{ currentSale.tokenForSale.toLocaleString() }}</span><span><em v-html="busdIcon"></em></span>
            </div>
          </div>
        </div>
        <div class="count-down d-flex align-center justify-space-between">
          <span>{{ countDown.days }}</span>
          <span>{{ countDown.hours }}</span>
          <span>{{ countDown.minutes }}</span>
          <span>{{ countDown.seconds }}</span>
        </div>
        <v-btn dark outlined class="btn-main" :color="$store.state.cPrimary">
          <em v-html="downloadIcon" class="mr-1"></em>
          Download white paper
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: ['currentSale'],
    data: () => ({
      ethereumIcon: require('../../static/img/icons/ethereum.svg?raw'),
      busdIcon: require('../../static/img/icons/busd.svg?raw'),
      usdtIcon: require('../../static/img/methods/usdt.svg?raw'),
      downloadIcon: require('../../static/img/icons/download.svg?raw'),
      buyIcon: require('../../static/img/icons/buy.svg?raw'),
      countDown: {
        days: "",
        hours: "",
        minutes: "",
        seconds: "",
      }
    }),
    watch: {
			currentSale: function(value) {
				if (value) {
          this.setCountDown();
        }
			}
		},
    created: function () {
      
    },
    methods: {
      setCountDown() {
        var eventTime = this.$moment(this.currentSale.to); 
        var currentTime;
        setInterval(() => {
          currentTime = this.$moment(); 
          this.countDown.days = this.$moment.duration(eventTime.diff(currentTime, 'seconds'), "seconds").days();
          this.countDown.hours = this.$moment.duration(eventTime.diff(currentTime, 'seconds'), "seconds").hours();
          this.countDown.minutes = this.$moment.duration(eventTime.diff(currentTime, 'seconds'), "seconds").minutes();
          this.countDown.seconds = this.$moment.duration(eventTime.diff(currentTime, 'seconds'), "seconds").seconds();
        }, 1000);
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';


.public-sale {
  display: flex;
  width: 560px;
  height: 296px;
  background: #FFFFFF;
  box-shadow: 3.20857e-15px 20px 104.8px rgba(51, 51, 51, 0.0835);
  border-radius: 10px;
  padding: 25px 30px 30px 30px;

  @include res($sm) {
    padding: 22px 20px;
  }

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
      height: 230px;
      padding: 6px;
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

      @include res($sm) {
        font-size: 14px;
        padding-left: 25px;
      }

      &:before {
        content: '#';
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translate(-50%, -50%);
        font-size: 30px;

        @include res($sm) {
          font-size: 20px;
        }
      }
    }

    .p-text {
      font-weight: 400;
      font-size: 17px;
      line-height: 10px;
      text-transform: capitalize;
      color: #000000;

      @include res($sm) {
        font-size: 12px;
      }
    }

    a {
      display: block;
      width: 100%;
    }
  }

  .right {

    p {
      font-weight: 400;

      @include res($sm) {
        font-size: 11.11px!important;
      }
    }

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

        @include res($sm) {
          font-size: 11px;
          padding: 7px 5px;
          margin: 0 3px;
        }
      }
    
      .token-amount {
        font-weight: 500;
        font-size: 16px;
        text-transform: capitalize;
        color: #000000;
        margin: 0 5px;

        @include res($sm) {
          font-size: 11px!important;
        }
      }
    
      .almost-eq {
        font-weight: 500;
        font-size: 20px;
        text-transform: capitalize;
        color: #8C8C8C;

        @include res($sm) {
          font-size: 15px!important;
        }
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

        @include res($md) {
          width: 22%;
        }

        @include res($sm) {
          width: 22%;
          height: 31.16px;
          font-size: 11px;
        }

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

          @include res($sm) {
            font-size: 11px;
          }
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

          @include res($md) {
            right: -15px;
          }

          @include res($sm) {
            font-size: 14px;
            right: -10px;
          }

          @include res($xs) {
            right: -8px;
          }
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

  .v-btn {
    height: 48px!important;

    @include res($sm) {
      height: 40px!important;
      font-size: 11.5px!important;
    }
  }
}

</style>
