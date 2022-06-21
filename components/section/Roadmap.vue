<template>
  <v-container class="roadmap">
    <v-row>
      <v-col cols="12" lg="12" class="text-center">
        <h3 class="title-main dot-green">
          Our <span>Roadmap</span>
        </h3>
        <p class="title-sub">
          You can see our Product roadmap to be able to plan, visualize and share your activities.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="roadmap-img">
        <img :src="roadmap" alt="roadmap" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      roadmap: require('../../static/img/roadmap.svg'),
    }),
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.roadmap {
  padding-bottom: 100px;

  .roadmap-img {
    margin-top: 35px;

    img {
      max-width: 100%;
    }
  }
}

</style>
