<template>
  <v-container class="benefits">
    <v-row>
      <v-col cols="12" lg="12" class="text-center">
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
          <img class="b-img" :src="benefit.image" :alt="benefit.title">
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
          image: require('../../static/img/benefits/cv.svg'),
          color: '#EDFBFF'
        },
        {
          title: 'Avoid Missing Memories',
          text: 'We have dedicated a strong feature not to miss any event that are related to your CV.',
          image: require('../../static/img/benefits/avoid-missing.svg'),
          color: '#FFF3F4'
        },
        {
          title: 'Social Media Connection',
          text: 'We offer people who are using our services to be able to share their NFTs and Tokens on instagram.',
          image: require('../../static/img/benefits/social.svg'),
          color: '#FFFAEB'
        },
        {
          title: 'Proof Your Attendance',
          text: 'WUltimately, you can proove your attendance in any sigle event and courses that you have passed.',
          image: require('../../static/img/benefits/attendance.svg'),
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

  .benefits-items {
    margin-top: 40px;
  
    .benefit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 35px;
      border-radius: 10px;

      &:hover {
        .b-img {
          transform: scale(1.1);
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
        }

        .b-desc {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: -0.0041em;
          color: #282A2D;
        }
      }

      .b-img {
        flex: 0.2;
        max-width: 170px;
        max-height: 133px;
        transition: 0.2s;
      }
    }
  }
}

</style>
