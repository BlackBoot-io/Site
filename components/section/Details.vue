<template>
  <v-container id="details" class="details">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-pink">
          <span>Token Details</span>
        </h3>
        <p class="title-sub">
          We enable you to have a snap look at our Token description,the Crowdsale  schedule plan and our project Road map to be aware of our any single activity.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="7" class="details-table">
        <!-- <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr
                v-for="item in details"
                :key="item.name"
              >
                <td><v-icon>mdi-check</v-icon>{{ item.name }}</td>
                <td v-html="item.value"></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->
        <ul>
          <li class="timeline flex-row">
            <h5>Asset</h5>
            <span>BBT Tokens</span>
          </li>
          <li class="timeline flex-row">
            <h5>Supply for sale</h5>
            <span>{{ this.currentSale.tokenForSale }} Tokens</span>
          </li>
          <li class="timeline flex-row">
            <h5>Fixed sale price</h5>
            <span>{{ this.currentSale.price }} eth ≃ <span class="dollar-amount">$214</span></span>
          </li>
          <li class="timeline flex-row">
            <h5>Loockup and release</h5>
            <span>3 months cliff after IDO and then 12-month quarterly linear unlock</span>
          </li>
          <li class="timeline flex-row">
            <h5>Funding methods</h5>
            <span>
              <div v-for="(method, index) in methods" :key="index" class="d-flex align-center">
                <em v-html="method.img" class="mr-2"></em> {{ method.name }} 
              </div>
            </span>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" md="5" class="details-table second">
        <ul>
          <li>
            <h5>minimum and maximum purchase</h5>
            <span>
              <em v-html="minIcon" class="mr-1"></em>Minimum purchase <small v-if="currentSale" class="ml-5">${{ this.currentSale.minimumBuy }}</small>
              <br>
              <em v-html="maxIcon" class="mr-1"></em>maximum purchase <small class="ml-5">-</small>
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Excluded participations</h5>
            <span>Afghanistan, brundi, central african republic, democratic republic of congo.the crimea region, democratic people’s republic of north korea, republic of iraq, lebabon, liberia, libya, myanmar, puerto rico, somalia, sudan, syrian arab republic, venezuela, zimbawe</span>
          </li>
        </ul>
      </v-col>
      <v-col cols="6" sm="4 offset-sm-2" md="4 offset-md-2" lg="3 offset-lg-3">
        <a href="https://dashboard.avanod.com/buy-token" target="_blank">
          <v-btn
            dark
            depressed
            width="100%"
            class="btn-main"
            :color="$store.state.cPrimary"
          >
            <em v-html="buyIcon"></em>
            Buy Token
          </v-btn>
        </a>
      </v-col>
      <v-col cols="6" sm="4" md="4" lg="3">
        <v-btn
          dark
          outlined
          width="100%"
          class="btn-main"
          :color="$store.state.cPrimary"
        >
          <em v-html="downloadIcon" class="mr-1"></em>
          Download white paper
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: ['currentSale'],
    data: () => ({
      ethereumIcon: require('../../static/img/icons/ethereum.svg?raw'),
      downloadIcon: require('../../static/img/icons/download.svg?raw'),
      buyIcon: require('../../static/img/icons/buy.svg?raw'),
      minIcon: require('../../static/img/icons/min.svg?raw'),
      maxIcon: require('../../static/img/icons/max.svg?raw'),
      methods: [
        {
          name: 'USDT',
          img: require('../../static/img/methods/usdt.svg?raw'),
        },
        {
          name: 'Etherium',
          img: require('../../static/img/methods/etherium.svg?raw'),
        },
        {
          name: 'BNB',
          img: require('../../static/img/methods/bnb.svg?raw'),
        },
        {
          name: 'Tron',
          img: require('../../static/img/methods/tron.svg?raw'),
        },
      ],
    }),
    created: function () {
      
    },
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.details {
  padding-top: 40px;
  padding-bottom: 60px;

  @include res($sm) {
    padding-bottom: 0px;
  }

  .details-table {
    margin-top: 25px;

    @include res($sm) {
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 0;

      &.second {
        margin-bottom: 15px;
      }
    }

    .v-data-table {
      line-height: 1.5;
      border: 1px solid rgba(240, 241, 244, 0.7);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.02);
      border-radius: 15px;
      padding: 20px;
      flex: 1;

      tr {
        transition: 0.2s;
        border-radius: 50px!important;

        &:hover {
          background: #f9f9f9!important;
        }

        &:not(:last-child) {
          td {
            border-bottom: none!important;
          }
        }

        td {
          text-transform: capitalize;
          color: #000000;
          height: auto;
          padding: 15px 12px;
          vertical-align: top;

          &:first-child {
            font-weight: 600;
            font-size: 16px;
            min-width: 50%;

            .v-icon {
              color: #30B38C;
              margin-right: 10px;
            }
          }

          &:nth-child(2) {
            font-weight: 500;
            font-size: 14px;
            line-height: 22px;

            span {
              font-weight: 700;
            }
          }
        }
      }
    }

    ul {
      background: #FFFFFF;
      border: 1px solid rgba(240, 241, 244, 0.7);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.02);
      border-radius: 15px;
      padding: 25px 30px!important;
      margin-bottom: 24px;
      width: 100%;
      display: block;

      @include res($sm) {
        padding: 20px 30px!important;
      }

      @include res($sm) {
        margin-top: 15px;
        margin-bottom: 0;
      }

      li {
        position: relative;
        font-weight: 600;
        text-transform: capitalize;
        color: $cb;
        line-height: 33px;
        display: flex;
        flex-direction: column;

        &.timeline {
          padding-left: 20px;
          padding-bottom: 20px;

          @include res($lg) {
            padding-bottom: 13px;
          }

          @include res($md) {
            padding-bottom: 26px;
          }

          @include res($sm) {
            padding-bottom: 10px;
          }

          &:after {
            content: '';
            position: absolute;
            top: 17px;
            left: 0%;
            transform: translate(-50%, -50%);
            width: 12px;
            height: 12px;
            background: $cw;
            border: 1px solid #C4C4C4;
            border-radius: 50%;
          }

          &:first-child {
            &:after {
              background: #C4C4C4;
            }
          }

          &:not(:last-child) {
            &:before {
              content: '';
              position: absolute;
              top: 55px;
              left: 0px;
              transform: translate(-50%, -50%);
              width: 1px;
              height: 120%;
              background: #F0F1F4;

              @include res($sm) {
                height: 100%;
              }
            }
          }
        }

        h5 {
          font-weight: 600;
          font-size: 18px!important;
          margin-bottom: 10px;
          flex: 0.55;

          @include res($sm) {
            font-size: 12px!important;
            margin-bottom: 0px;
          }
        }

        span,
        small {
          font-weight: 400;
          font-size: 16px;

          @include res($sm) {
            font-size: 12px;
            line-height: 30px;
          }
        }

        span {
          flex: 0.45;
        }

        .dollar-amount {
          background: #EAF4FB;
          border-radius: 5px;
          font-weight: 500;
          font-size: 17px;
          line-height: 5px;
          text-transform: capitalize;
          color: #3498DB;
          padding: 5px 8px;

          @include res($sm) {
            font-size: 12px;
          }
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
    }
  }

  .v-btn {
    height: 48px!important;

    @include res($sm) {
      height: 40px!important;
      font-size: 12px!important;
    }
  }
}

</style>
