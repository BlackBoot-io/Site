<template>
  <v-container fluid class="content-container">
    <v-container>
      <v-row class="content">
        <v-col cols="12" class="text-center">
          <h1 class="title-main dot-pink">
            <span>Choose the most suitable package for your team</span>
          </h1>
          <p class="title-sub">
            Start for free and upgrade your plan based on your needs
          </p>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col cols="12" class="toggle-controls">
          <p :class="{ 'strong': !toggle }">Monthly</p>
          <v-switch v-model="toggle" inset :color="$store.state.cPrimary"></v-switch>
          <p :class="{ 'strong': toggle }">Anually</p>
          <span class="toggle-label">Get 2 month free</span>
        </v-col>
        <v-col cols="12" class="pricing-table">
          <v-simple-table>
            <thead>
              <tr>
                <th v-for="(item, index) in headers" :key="index"
                  :class="{ 'text-center': index > 0, 'selected': item.text == 'advanced' }">
                  <span class="col-head">
                    {{ item.text }}
                  </span>
                  <template v-if="index > 0">
                    <div v-if="index != headers.length - 1" class="col-price">
                      ${{ item.price.toLocaleString() }}<span class="duration">/monthly</span>
                    </div>
                    <div v-else class="col-price custom">
                      Custom
                    </div>
                    <div>
                      <v-btn v-if="index != 1" :outlined="index == headers.length - 1 ? false : true" dark depressed
                        class="btn-plan btn-main py-3 px-5 mt-3" :color="$store.state.cPrimary">
                        {{ index == headers.length - 1 ? 'Create Plan' : 'Get Started' }}
                      </v-btn>
                      <a v-else href="#" class="link-plan">Get Free API Key</a>
                    </div>
                  </template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cell in cells" :key="cell.name">
                <td
                  v-for="(item, index) in cell"
                  :key="index"
                  :class="[(index == 'name' ? 'text-left' : 'text-center'), (index == 'advanced' ? 'selected' : 'not-selected')]"
                >
                  <v-icon
                    v-html="getData(item)"
                    :color="getColor(item)"
                    :size="index == 'name' ? 16 : getSize(item)"
                  >
                  </v-icon>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <!-- <v-data-table
            :headers="headers"
            :items="cells"
            hide-default-footer
          >
            <template v-slot:[`item.professional`]="{ item }">
              <v-icon
                v-html="getData(item.professional)"
                :color="getColor(item.professional)"
                :size="getSize(item.professional)"
              >
              </v-icon>
            </template>
          </v-data-table> -->
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Pricing',
  data: () => ({
    toggle: true,
    headers: [
      { text: 'Main Features', value: "name", align: "left", sortable: false},
      { text: 'free', value: "free", align: "center", price: 0, btn: 'Get Started', sortable: false },
      { text: 'standard', value: "standard", align: "center", price: 99, btn: 'Get Started', sortable: false },
      { text: 'startup', value: "startup", align: "center", price: 299, btn: 'Get Started', sortable: false },
      { text: 'advanced', value: "advanced", align: "center", class: 'selected', cellClass: 'selected', price: 599, btn: 'Get Started', sortable: false },
      { text: 'professional', value: "professional", align: "center", price: 1119, btn: 'Get Started', sortable: false },
      { text: 'enterprise', value: "enterprise", align: "center", price: 0, btn: 'Create Plan', sortable: false },
    ],
    cells: [
      {
        name: 'Daily Credits',
        free: '1000',
        standard: '3000',
        startup: '10000',
        advanced: '30000',
        professional: '100000',
        enterprise: 'Custom',
      },
      {
        name: 'Requests Per Second',
        free: '5',
        standard: '10',
        startup: '20',
        advanced: '30',
        professional: '40',
        enterprise: 'Custom',
      },
      {
        name: 'Available Networks',
        free: 'Ethereum',
        standard: 'All Networks',
        startup: 'All Networks',
        advanced: 'All Networks',
        professional: 'All Networks',
        enterprise: 'All Networks',
      },
      {
        name: 'NFT as a Service',
        free: false,
        standard: false,
        startup: false,
        advanced: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Online Event',
        free: false,
        standard: false,
        startup: false,
        advanced: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Proof of Attendance',
        free: false,
        standard: false,
        startup: true,
        advanced: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Digital Identity',
        free: false,
        standard: false,
        startup: false,
        advanced: true,
        professional: true,
        enterprise: true,
      },
    ],
  }),
  methods: {
    getData(input) {
      if (input == true) {
        return 'mdi-check-circle-outline'
      } else if (input == false) {
        return 'mdi-close-circle-outline'
      } else {
        return input
      }
    },
    getColor(input) {
      if (input == true) {
        return '#00C59A'
      } else if (input == false) {
        return '#989AA3'
      }
    },
    getSize(input) {
      if (input == true) {
        return 25
      } else if (input == false) {
        return 25
      } else {
        return 14
      }
    },
  },
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.toggle-controls {
  display: flex;
  justify-content: center;
  align-items: center;

  .v-input--switch {
    margin-left: 18px;
  }

  .toggle-label {
    background: #4effab94;
    border-radius: 5px;
    font-size: 13px;
    line-height: 16px;
    padding: 5px 8px;
    margin-left: 15px;
    font-weight: normal;
    color: black;
    opacity: 1;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    min-width: 60px;
    text-align: center;

    &.strong {
      font-weight: 700;
    }
  }
}

.pricing-table {
  margin-top: 15px;

  @include res($sm) {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .v-data-table {
    line-height: 1.5;
    background: transparent !important;

    thead {
      tr {
        th {
          border: none !important;
          padding: 16px 0 30px 0 !important;
          text-transform: capitalize;
          vertical-align: bottom;
          
          @include res($sm) {
            padding: 8px 0px!important;
            min-width: 110px;
          }

          &.selected {
            background-color: #f9f2f2;
          }

          .col-head {
            font-weight: 600;
            font-size: 17px;
            line-height: 17px;
            color: #000000;

            @include res($sm) {
              font-size: 14px;
            }
          }

          .col-price {
            font-weight: 500;
            font-size: 22px;
            line-height: 20px;
            color: #d91717;
            margin: 16px 0 8px 0;

            @include res($sm) {
              font-size: 14px;
              margin: 5px 0 8px 0;
            }

            &.custom {
              font-weight: 600;
              color: $cb;
            }

            .duration {
              font-weight: 400;
              font-size: 13px;
            }
          }
        }
      }
    }

    tbody {
      border-radius: 15px !important;
      border: 1px solid #F1F1F1 !important;

      tr {
        td {
          background: $cw  !important;

          &.selected {
            background-color: #f9f2f2 !important;
          }
        }

        &:first-child {
          td {
            border-top: 1px solid #F1F1F1 !important;

            &:first-child {
              border-top-left-radius: 16px !important;
            }

            &:last-child {
              border-top-right-radius: 16px !important;
            }
          }
        }

        &:last-child {
          td {
            border-bottom: 1px solid #F1F1F1 !important;

            &:first-child {
              border-bottom-left-radius: 16px !important;
            }

            &:last-child {
              border-bottom-right-radius: 16px !important;
            }
          }
        }

        td {
          &:first-child {
            border-left: 1px solid #F1F1F1 !important;
          }
        }

        td {
          &:last-child {
            border-right: 1px solid #F1F1F1 !important;
          }
        }
      }
    }

    tr {
      &:hover {
        background: transparent !important;
      }

      &:not(:last-child) {
        td {
          border-bottom: 1px solid #E9EEEE !important;
        }
      }

      td {
        text-transform: capitalize;
        height: auto!important;
        padding: 20px 15px!important;
        font-weight: 400;
        font-size: 14px!important;
        color: #000000;
        line-height: 22px;

        @include res($sm) {
          padding: 8px 10px!important;
        }

        i {
          color: #000000;
          font-style: normal;
          line-height: 30px!important;

          @include res($sm) {
            line-height: 25px!important;
          }
        }

        &:first-child {
          min-width: 25%;
          font-size: 16px !important;

          i {
            @include res($sm) {
              font-size: 13px !important;
              line-height: 20px!important;
            }
          }
        }
      }
    }
  }

  .btn-plan {
    font-size: 12px !important;
          
    @include res($sm) {
      margin-top: 0!important;
      padding: 0px 5px!important;
      height: 32px!important;
    }
  }

  .link-plan {
    position: relative;
    font-weight: 600;
    font-size: 12px;
    color: $cb;
    margin: 20px 0 10px 0;
    display: inline-block;
    color: $cb  !important;

    &:before {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 0;
      width: 100%;
      height: 1px;
      background: $cb;
    }
          
    @include res($sm) {
      margin-top: 8px!important;
      padding: 0px!important;
    }
  }
}
</style>