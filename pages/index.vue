<template>
  <div>
    <SectionSpotlight :currentSale="currentSale" />
    <SectionSupport />
    <SectionServices />
    <SectionAdvantages />
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