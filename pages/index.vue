<template>
  <div>
    <SectionSpotlight :currentSale="currentSale" />
    <SectionFutures />
    <SectionServices />
    <SectionBenefits />
    <SectionDetails :currentSale="currentSale" />
    <SectionCrowdsale />
    <SectionRoadmap />
    <SectionBlog />
  </div>
</template>

<script>
export default {
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


<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";
</style>