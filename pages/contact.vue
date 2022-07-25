<template>
  <v-container fluid class="content-container">
    <v-container>
      <v-row class="content">
        <v-col cols="12" class="text-center">
          <h1 class="title-main dot-green">
            <span>Contact Us</span>
          </h1>
          <p class="title-sub">
            Questions, bug reports, feedback.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col cols="7">
          
        </v-col>
        <v-col cols="5">
          
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'FAQ',
  data: () => ({
    faqs: [
      {
        question: "How does it work?",
        answer: "Our team has worked on different networks including Bitcoin, Etherium, Solano and BcsScan and we have been working on some others recently."
      },
      {
        question: "Which Networks do you support?",
        answer: "Our team has worked on different networks including Bitcoin, Etherium, Solano and BcsScan and we have been working on some others recently."
      },
      {
        question: "which wallets do you support?",
        answer: "Our team has worked on different networks including Bitcoin, Etherium, Solano and BcsScan and we have been working on some others recently."
      },
      {
        question: "How does it work?",
        answer: "Our team has worked on different networks including Bitcoin, Etherium, Solano and BcsScan and we have been working on some others recently."
      },
    ],
  }),
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.faq-head-title {
  font-weight: 700;
  font-size: 24px;
  color: #002558;
}

.faq-divider {
  border: 1px solid #002558!important;
  opacity: 0.1!important;
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
    padding: 15px 20px 15px 15px !important;
  }

  @include res($sm) {
    padding: 10px 20px 10px 15px !important;

    p {
      font-size: 14px;
      line-height: 30px !important;
    }

    i {
      color: $c1 !important;
      font-size: 30px !important;
      margin-left: 10px;
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

  @include res(sm) {
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