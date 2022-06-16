<template>
  <v-container fluid class="spotlight">
    <v-container>
      <v-row class="s-inside">
        <v-col>
          <h1 class="s-head">
            We Enable You <span>Proof Yourself</span><br>and <span>Your Experiences!</span>
          </h1>
          <p class="s-text">
            Black boot the first provider to able you proof your experiences through Soulbound Tokens and NFTs!
          </p>
        </v-col>
      </v-row>
      <v-row class="stats">
        <v-col cols="12" md="3" v-for="(stat, index) in stats" :key="index">
          <span :class="'s-num num-'+index">
            {{ stat.num }}
          </span>
          <p class="s-text">
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
    height: 65vh;
    display: flex;
    align-items: center;
  }

  .s-head {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;
    color: #424242;
    margin-bottom: 20px;

    span {
      position: relative;
      font-weight: 700;
      z-index: 5;

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
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    color: #000000;
    max-width: 532px;
  }
}

.stats {
  padding-bottom: 50px;

  .s-num {
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

  .s-text {
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #5B626E;
    max-width: 90%;
  }
}

</style>
