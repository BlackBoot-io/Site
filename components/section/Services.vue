<template>
  <v-container id="services" class="services">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-yellow">
          What We <span>Do For You</span>
        </h3>
        <p class="title-sub">
          We provide you the best services To prove the abilities and expertise in any order to achieve prosperity in any dimention and area.
        </p>
      </v-col>
    </v-row>
    <v-row class="services-items">
      <v-col cols="6" md="4" class="service" v-for="(service, index) in services" :key="index">
        <div class="s-img" v-html="service.image"></div>
        <p class="s-desc">{{ service.text }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      services: [
        {
          image: require('../../static/img/services/nft.svg?raw'),
          text: 'We create NFTs for you.'
        },
        {
          image: require('../../static/img/services/sbt.svg?raw'),
          text: 'We create Soulbound Tokens  for you.'
        },
        {
          image: require('../../static/img/services/explore.svg?raw'),
          text: 'Allow others to explore your expertise.'
        },
        {
          image: require('../../static/img/services/nft-update.svg?raw'),
          text: 'Update your NFTs authomatically.'
        },
        {
          image: require('../../static/img/services/collection.svg?raw'),
          text: 'Create a collection of tokens.'
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

.services {
  padding-top: 80px;
  padding-bottom: 80px;

  @include res($sm) {
    padding-top: 40px;
    padding-bottom: 0px;
  }

  .services-items {
    margin-top: 40px;

    @include res($sm) {
      margin-top: 20px;
    }
  
    .service {
      display: flex;
      align-items: center;
      padding: 25px 45px 25px 12px;

      @include res($sm) {
        padding: 12px;
      }

      .s-img {
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

      .s-desc {
        font-weight: 500;
        font-size: 20px;
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
