<template>
  <v-container class="benefits">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-green">
          What You <span>Get Working With Us</span>
        </h3>
      </v-col>
    </v-row>
    <v-row class="benefits-items">
      <v-col cols="12" lg="6" v-for="(benefit, index) in benefits" :key="index">
        <div class="benefit" :style="`background-color: ${benefit.color}`">
          <div class="b-text">
            <h5 class="b-title">{{ benefit.title }}</h5>
            <p class="b-desc">{{ benefit.text }}</p>
          </div>
          <span class="b-img" v-html="benefit.image"></span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      benefits: [
        {
          title: 'Update Your CV',
          text: 'You have unlimited oportunity to update your cv and add any single Token and NFT.',
          image: require('../../static/img/benefits/cv.svg?raw'),
          color: '#EDFBFF'
        },
        {
          title: 'Avoid Missing Memories',
          text: 'We have dedicated a strong feature not to miss any event that are related to your CV.',
          image: require('../../static/img/benefits/avoid-missing.svg?raw'),
          color: '#FFF3F4'
        },
        {
          title: 'Social Media Connection',
          text: 'We offer people who are using our services to be able to share their NFTs and Tokens on instagram.',
          image: require('../../static/img/benefits/social.svg?raw'),
          color: '#FFFAEB'
        },
        {
          title: 'Proof Your Attendance',
          text: 'WUltimately, you can proove your attendance in any sigle event and courses that you have passed.',
          image: require('../../static/img/benefits/attendance.svg?raw'),
          color: '#EEFFF5'
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
  padding-bottom: 80px;

  @include res($sm) {
    padding-bottom: 0px;
  }

  .benefits-items {
    margin-top: 40px;
  
    .benefit {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 35px;
      border-radius: 15px;

      @include res($sm) {
        padding: 25px;
      }

      &:hover {
        .b-img {
          transform: translate(0%, -50%) scale(1.1);
        }
      }

      .b-text {
        flex: 0.57;

        .b-title {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: -0.0041em;
          color: #282A2D;
          margin-bottom: 25px;

          @include res($sm) {
            font-size: 13.8214px;
            line-height: 17px;
            margin-bottom: 10px;
          }
        }

        .b-desc {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: -0.0041em;
          color: #282A2D;

          @include res($sm) {
            font-size: 12.5036px;
            line-height: 19px;
          }
        }
      }

      .b-img {
        max-width: 167px;
        max-height: 174px;
        transition: 0.2s;
        position: absolute;
        top: 50%;
        right: 33px;
        transform: translate(0%, -50%);

        @include res($sm) {
          right: 23px;
          max-width: 90px;
          max-height: 110px;
        }
      }
    }
  }
}

</style>
