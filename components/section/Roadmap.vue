<template>
  <v-container id="roadmap" class="roadmap">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-green">
          Our <span>Roadmap</span>
        </h3>
        <p class="title-sub">
          You can see our Product roadmap to be able to plan, visualize and share your activities.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="roadmap-img d-none d-md-flex"
        v-html="roadmap"
      >
      </v-col>
      <v-col
        cols="12"
        class="roadmap-img d-md-none"
        v-html="roadmapRes"
      >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      roadmap: require('../../static/img/roadmap.svg?raw'),
      roadmapRes: require('../../static/img/roadmap-res.svg?raw'),
    }),
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.roadmap {
  padding-top: 50px;
  padding-bottom: 100px;

  @include res($sm) {
    padding-bottom: 50px;
  }

  .roadmap-img {
    margin-top: 35px;
    max-width: 100%;

    @include res($sm) {
      margin-top: 10px;
    }
  }
}

</style>
