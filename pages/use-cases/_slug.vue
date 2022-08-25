<template>
  <v-container fluid class="content-container">
    <v-container>
      <v-row class="content">
        <v-col cols="12" lg="7">
          <h1 class="title-main capital dot-yellow mb-5">
            <span class="thin">{{ this.$route.params.slug.replace(/-/g, ' ') }}</span>
          </h1>
          <p class="paragraph-main">
            Leverage use case infrastructure to get quick access to multiple events you have attended before in any
            dimension. Let us take care of maintenance and security of your event attendance, while you concentrate on
            the staff of your business to keep your mind in peace.
          </p>
          <ul class="cases-ul">
            <li v-for="item in useCase.items" :key="item.title">
              <span>
                {{ item.number }}
              </span>
              {{ item.title }}
            </li>
          </ul>
          <div class="cta">
            <v-btn dark depressed class="btn-main py-6 px-8" :color="$store.state.cPrimary">
              Let’s discuss your project
            </v-btn>
          </div>
        </v-col>
        <!-- <v-col
              cols="12"
              lg="5"
              class="case-img"
              v-html="require(`../../static/img/cases/${this.$route.params.slug}.svg?raw`)"
            >
            </v-col> -->
      </v-row>
    </v-container>
    <SectionFeatures />
    <SectionBenefits />
    <SectionSteps />
  </v-container>

</template>

<script>
export default {
  name: 'Use Cases',
  data: () => ({
    useCase: {
      description: "Leverage use case infrastructure to get quick access to multiple events you have attended before in any dimension. Let us take care of maintenance and security of your event attendance, while you concentrate on the staff of your business to keep your mind in peace.",
      items: [
        {
          number: '10+',
          title: 'Rest APIs'
        },
        {
          number: '3+',
          title: 'Networks'
        },
        {
          number: '99%',
          title: 'Uptime'
        },
      ]
    }
  }),
  created: function () {

  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.cta {
  @include res($sm) {
    text-align: center;
  }
}

.cases-ul {
  margin: 30px 0;

  @include res($sm) {
    margin: 20px 0;
    text-align: center;
  }

  li {
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #000000;
    display: inline-flex;
    align-items: center;
    margin-right: 15px;

    @include res($sm) {
      margin-right: 8px;
    }

    &:not(:first-child) {
      margin-left: 15px;

      @include res($sm) {
        margin-left: 8px;
      }
    }

    &:not(:last-child) {
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: -15px;
        transform: translate(0, -50%);
        width: 1px;
        height: 130%;
        background: #E1E1E1;

        @include res($sm) {
          right: -8px;
          height: 80%;
        }
      }
    }

    span {
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;
      color: #c74545;
      margin-right: 10px;

      @include res($sm) {
        margin-right: 5px;
        font-size: 20px;
      }
    }
  }
}

.case-img {
  svg {
    max-width: 100%;
  }
}
</style>