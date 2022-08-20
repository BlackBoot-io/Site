<template>
  <div>
    <v-container fluid class="content-container">
      <v-container>
        <v-row class="content">
          <v-col cols="12" class="text-center">
            <h1 class="title-main dot-purple">
              <span>Invest Us</span>
            </h1>
            <!-- <p class="title-sub">
            </p> -->
          </v-col>
        </v-row>
        <v-row class="my-10">
          <v-col cols="12" lg="7">
            <p class="paragraph-main">
              Soulbound tokens are just permanent, non-transferable NFTs.<br>
              SBTs act like real-life achievement badges, when you complete a specific task or make it past a set milestone. you can get an SBT for completing a degree, earning a professional certification, winning an award, and so on, on our platform. Even if it’s for something as niche as being the world’s leading expert, your corresponding SBT would serve as a way of verifying that achievement to others.
            </p>
            <SectionPublicSale :currentSale="currentSale" class="mt-5" />
          </v-col>
          <v-col cols="12" lg="5" class="d-none d-lg-block">
            <img class="t-image" src="../static/img/invest-box.png" alt="invest us" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <SectionDetails :currentSale="currentSale" />
    <SectionCrowdsale />
    <SectionRoadmap />
  </div>
</template>

<script>
export default {
  name: 'Invest Us',
  data: () => ({
    currentSale: "",
  }),
  created: function () {
    this.getCurrentSale();
  },
  methods: {
    getCurrentSale() {
      this.$axios.$get('/CrowdSaleSchedule/GetCurrentSale')
      .then(response => {
        this.currentSale = response.data;
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.paragraph-main {
  padding-right: 40px;

  @include res($md) {
    padding-right: 0;
  }
}

.t-image {
  float: right;
  margin-top: 35px;
}

</style>