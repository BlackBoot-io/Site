<template>
  <v-container class="features">
    <v-row>
      <v-col cols="12" lg="12" class="text-center mb-7">
        <h2 class="title-main dot-green">
          Some of the <span class="thin">features you can use</span>
        </h2>
      </v-col>
      <v-col cols="10 offset-1" class="mb-5">
        <v-row>
          <v-col v-for="(future, index) in features" :key="index" cols="12" md="6" class="f-box">
            <v-icon>mdi-check-circle-outline</v-icon>
            {{ future.title }}
            <br>
            <span>
              {{ future.description }}
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      features: [
        {
          title: 'Set up notifications on demand',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at fusce diam condimentum elit. Et elit aliquam augue ut ornare accumsan.'
        },
        {
          title: 'Generate event album',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at fusce diam condimentum elit. Et elit aliquam augue ut ornare accumsan.'
        },
        {
          title: 'Be aware of running attendances',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at fusce diam condimentum elit. Et elit aliquam augue ut ornare accumsan.'
        },
        {
          title: 'Connect with employees and event runners',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at fusce diam condimentum elit. Et elit aliquam augue ut ornare accumsan.'
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.features {
  padding-top: 60px;
  padding-bottom: 40px;

  @include res($sm) {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .f-box {
    position: relative;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    padding: 12px 40px 12px 45px;
    margin-bottom: 25px;

    @include res($sm) {
      font-size: 16px;
      line-height: 27px;
      padding-left: 35px;
      margin-bottom: 10px;
    }

    .v-icon {
      position: absolute;
      top: 10px;
      left: 0;
      font-size: 30px;

      @include res($sm) {
        top: 2px;
        font-size: 25px;
      }
    }

    span {
      font-weight: 400;
      font-size: 16px;
      color: #6E757C;
      margin-top: 10px;
      display: block;

      @include res($sm) {
        font-size: 15px;
      }
    }
  }
}

</style>
