<template>
  <v-container fluid id="benefits" class="benefits">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h3 class="title-main">
            <span>The benefits of using BlackBoot</span>
          </h3>
          <p class="title-sub">
            Designed to robust you  and help to achieve prosperity in any era.
          </p>
        </v-col>
      </v-row>
      <v-row class="benefits-items">
        <v-col cols="6" md="6" lg="3" class="benefit" v-for="(benefit, index) in benefits" :key="index">
          <div class="b-img" v-html="benefit.image"></div>
          <p class="b-desc">{{ benefit.text }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      benefits: [
        {
          image: require('../../static/img/services/collection.svg?raw'),
          text: 'Create a collection of tokens.'
        },
        {
          image: require('../../static/img/services/explore.svg?raw'),
          text: 'Allow others to explore your expertise.'
        },
        {
          image: require('../../static/img/services/nft-update.svg?raw'),
          text: 'Provide APIs to connect.'
        },
        {
          image: require('../../static/img/services/blockchain.svg?raw'),
          text: 'Store everything on blockchain.'
        },
      ]
    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.benefits {
  padding-top: 60px;
  padding-bottom: 40px;
  background: #F2FAFD;

  @include res($sm) {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .benefits-items {
    margin-top: 40px;

    @include res($sm) {
      margin-top: 20px;
    }
  
    .benefit {
      display: flex;
      align-items: center;
      padding: 25px 12px 25px 12px;

      @include res($md) {
        padding: 12px;
      }

      .b-img {
        min-width: 72px;
        max-width: 82px;
        min-height: 82px;
        max-height: 82px;

        @include res($sm) {
          min-width: 37px;
          max-width: 47px;
          min-height: 47px;
          max-height: 47px;
        }
      }

      .b-desc {
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        margin-left: 12px!important;
        letter-spacing: -0.0041em;
        color: #616771;

        @include res($sm) {
          font-weight: 500;
          font-size: 11.9576px;
          line-height: 19px;
        }
      }
    }
  }
}

</style>
