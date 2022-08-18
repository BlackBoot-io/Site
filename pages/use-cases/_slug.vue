<template>
    <div>
      <v-container fluid class="content-container px-0">
        <v-container>
          <v-row class="content">
            <v-col cols="12" lg="7">
              <h1 class="title-main capital dot-yellow mb-5">
                <span class="thin">{{ this.$route.params.slug.replace(/-/g, ' ') }}</span>
              </h1>
              <p class="paragraph-main">
                Leverage use case infrastructure to get quick access to multiple events you have attended before in any dimension. Let us take care of maintenance and security of your event attendance, while you concentrate on the staff of your business to keep your mind in peace.
              </p>
              <ul class="cases-ul">
                <li v-for="item in useCase.items" :key="item.title">
                  <span>
                    {{ item.number }}
                  </span>
                  {{ item.title }}
                </li>
              </ul>
              <v-btn dark depressed class="btn-main py-6 px-8" :color="$store.state.cPrimary">
                Let’s discuss your project
              </v-btn>
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
    </div>
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

.cases-ul {
  margin: 30px 0;

  li {
    position: relative;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    display: inline-flex;
    align-items: center;
    margin-right: 15px;

    &:not(:first-child) {
      margin-left: 15px;
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
      }
    }

    span {
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;
      color: #F39221;
      margin-right: 10px;
    }
  }
}

.case-img {
  svg {
    max-width: 100%;
  }
}

</style>