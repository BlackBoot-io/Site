<template>
  <v-container class="ads">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-green">
          What You <span>Get Working With Us</span>
        </h3>
      </v-col>
    </v-row>
    <v-row class="ads-items">
      <v-col cols="12" lg="6" v-for="(advantage, index) in advantages" :key="index">
        <div class="ad" :style="`background-color: ${advantage.color}`">
          <div class="a-text">
            <h5 class="a-title">{{ advantage.title }}</h5>
            <p class="a-desc">{{ advantage.text }}</p>
          </div>
          <span class="a-img" v-html="advantage.image"></span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      advantages: [
        {
          title: 'Update Your CV',
          text: 'You have unlimited oportunity to connect your business via APIs to mint NFTs.',
          image: require('../../static/img/benefits/cv.svg?raw'),
          color: '#EDFBFF'
        },
        {
          title: 'Avoid Missing Memories',
          text: 'We have dedicated a strong feature not to miss any event that are related to your life bookmarks.',
          image: require('../../static/img/benefits/avoid-missing.svg?raw'),
          color: '#FFF3F4'
        },
        {
          title: 'Social Media Connection',
          text: 'We offer people who are using our services to be able to share their NFTs and Tokens on social medias.',
          image: require('../../static/img/benefits/social.svg?raw'),
          color: '#FFFAEB'
        },
        {
          title: 'Proof Your Attendance',
          text: 'Ultimately, you can proove your attendance in any sigle event and courses that you have passed.',
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

.ads {
  padding-top: 60px;
  padding-bottom: 80px;

  @include res($sm) {
    padding-bottom: 30px;
  }

  .ads-items {
    margin-top: 40px;

    @include res($sm) {
      margin-top: 20px;
    }
  
    .ad {
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

      .a-text {
        flex: 0.57;

        .a-title {
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

        .a-desc {
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

      .a-img {
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
