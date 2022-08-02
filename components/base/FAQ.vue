<template>
  <div class="faq-section">
    <h3 class="faq-head-title">{{ title }}</h3>
    <v-divider class="faq-divider"></v-divider>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>
          <p>
            {{ item.question }}
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p v-html="item.answer" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    props: ['title', 'items'],
    data: () => ({
      
    }),
    created: function () {
      
    },
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.faq-section {
  margin-bottom: 45px;

  @include res($sm) {
    margin-bottom: 15px;
  }
}

.faq-head-title {
  font-weight: 700;
  font-size: 24px;
  color: #002558;

  @include res($sm) {
    font-size: 16px;
  }
}

.faq-divider {
  border: 1px solid #002558!important;
  opacity: 0.1!important;
  margin-top: 32px!important;
  margin-bottom: 20px!important;

  @include res($sm) {
    margin-top: 15px!important;
    margin-bottom: 0 !important;
  }
}

.v-expansion-panel {
  background: transparent!important;

  &::before {
    box-shadow: 0 0 0 0 !important;
  }

  &::after {
    display: none;
  }
}

.v-expansion-panel--active:not(:first-child),
.v-expansion-panel--active + .v-expansion-panel {
  margin-top: 0;
}

.v-expansion-panel-header {
  flex-direction: row;
  font-weight: 700;
  font-size: 18px!important;
  line-height: 24px!important;
  color: #002558;
  opacity: 0.7;
  padding-left: 0;
  padding-right: 0;
    padding: 15px 0 15px 0 !important;

  &:hover {
    opacity: 0.9;
  }

  p {
    flex: 0.9 !important;
  }

  i {
    color: #002558 !important;
    font-size: 20px !important;
  }

  @include res($md) {
  }

  @include res($sm) {
    padding: 10px 0 10px 0 !important;

    p {
      font-size: 14px;
      line-height: 30px !important;
    }
  }
}
.v-expansion-panel-content {
  font-weight: 500;
  font-size: 16px;
  color: #6E757C;

  > div {
    padding-left: 0;
    padding-right: 0;
  }

  @include res($sm) {
    padding: 0px !important;

    p {
      font-size: 14px;
      line-height: 30px;
    }
  }
}

.v-expansion-panel--active > .v-expansion-panel-header {
  opacity: 1;
}

</style>
