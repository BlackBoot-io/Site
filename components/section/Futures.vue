<template>
  <v-container fluid id="futures" class="futures">
    <v-container class="f-inner">
      <v-row>
        <v-col cols="12" lg="6" class="d-flex flex-column justify-center">
          <h2 class="f-title">
            We support both <span>NFTs and SoulBound Tokens.</span>
          </h2>
          <ul class="f-list">
            <li v-for="(future, index) in futures" :key="index">
              <v-icon>mdi-check-circle-outline</v-icon>
              {{ future.title }}
              <br>
              <span>
                {{ future.description }}
              </span>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="5 offset-lg-1" class="d-none d-lg-flex text-right">
          <img src="../../static/img/globe.png" class="globe" alt="">
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      futures: [
        {
          title: 'User friendly application',
          description: 'We make the application user friendly, so that it can be used by many people and business owners.'
        },
        {
          title: 'Add anything you need',
          description: 'We gradually add new features,tasks and workflows. We are reliable.'
        },
      ]
    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.futures {
  background: #F2FAFDB2;
  background-repeat: no-repeat;
  background-position: left top;
  padding-top: 90px;
  padding-bottom: 50px;

  @include res($md) {
    padding: 50px 0;
  }

  @include res($sm) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .f-inner {
    position: relative;
  }

  .f-title {
    font-weight: 400;
    font-size: 26px;
    line-height: 52px;
    color: #282A2D;

    span {
      position: relative;
      font-weight: 700;
    }

    @include res($sm) {
      font-size: 18.708px;
      line-height: 37px;
    }
  }

  .f-list {

    li {
      position: relative;
      font-weight: 500;
      font-size: 22px;
      color: #282A2D;
      margin-top: 27px;
      padding-left: 45px;

      @include res($sm) {
        font-size: 16px;
        line-height: 27px;
        padding-left: 35px;
        margin-top: 15px;
      }

      .v-icon {
        position: absolute;
        top: 5px;
        left: 0;
        font-size: 30px;

        @include res($sm) {
          top: 2px;
          font-size: 25px;
        }
      }

      span {
        font-weight: 400;
        font-size: 18px;
        line-height: 35px;
        color: #5A5F68;

        @include res($sm) {
          font-size: 15px;
        }
      }
    }
  }

  .globe {
    position: absolute;
    bottom: 0;
    right: -20px;
  }
}

</style>
