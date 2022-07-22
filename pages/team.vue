<template>
  <v-container fluid class="content-container">
    <v-container>
      <v-row class="content">
        <v-col cols="12" class="text-center">
          <h1 class="title-main dot-pink">
            <span>Our Team</span>
          </h1>
          <!-- <p class="title-sub">
          </p> -->
        </v-col>
        <v-col cols="12">
          <SwiperTeam :items="crowdSale" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Team',
  data: () => ({
    crowdSale: "",
  }),
  created: function () {
      this.GetCurrentSale();
    },
    methods: {
      GetCurrentSale() {
        this.$axios.$get('/CrowdSaleSchedule/GetAll')
        .then(response => {
          this.crowdSale = response.data;
        })
      },
    }
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

</style>