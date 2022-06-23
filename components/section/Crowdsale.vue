<template>
  <v-container class="crowdsale">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-purple">
          <span>Crowdsale Schedule</span>
        </h3>
        <p class="title-sub">
          You can easily have a preview on the tokens in any crowdsale Regardless of whether it is active for sale or not.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <SwiperCrowdsale />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.crowdsale {
  padding: 40px 12px 50px 12px;
}

</style>
