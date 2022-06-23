<template>
  <v-container class="details">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-pink">
          <span>Token Details</span>
        </h3>
        <p class="title-sub">
          We enable you to have a snap look at our Token description,the Crowdsale  schedule plan and our project Road map to be aware of our any single activity.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="details-table">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr
                v-for="item in details"
                :key="item.name"
              >
                <td><v-icon>mdi-check</v-icon>{{ item.name }}</td>
                <td v-html="item.value"></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      details: [
        {
          name: 'Asset',
          value: 'BBT Tokens',
        },
        {
          name: 'Supply for sale',
          value: '145200 Tokens',
        },
        {
          name: 'Fixed sale price',
          value: '0.012 eth ≃ $ 121',
        },
        {
          name: 'minimum and maximum purchase',
          value: '<span>Minimum purchase:</span> $10<span class="ml-15">Minimum purchase:</span> $10',
        },
        {
          name: 'Loockup and release',
          value: '3 months cliff after IDO and then 12-month quarterly linear unlock',
        },
        {
          name: 'Funding methods',
          value: 'USDT network (etherium,BNB,Tron),Eth',
        },
        {
          name: 'Excluded participations',
          value: 'Afghanistan, brundi, central african republic, democratic republic of congo.the crimea region, democratic people’s republic of north korea, islamic republic of iran, republic of iraq, lebabon, liberia, libya, myanmar, puerto rico, somalia, sudan, syrian arab republic, venezuela, zimbawe',
        },
      ],
    }),
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.details {
  padding-top: 40px;
  padding-bottom: 80px;

  .details-table {
    margin-top: 25px;
    display: flex;
    justify-content: center;

    .v-data-table {
      line-height: 1.5;
      border: 1px solid #F0F1F4;
      border-radius: 15px;
      padding: 20px;
      flex: 1;

      tr {
        transition: 0.2s;
        border-radius: 50px!important;

        &:hover {
          background: #f9f9f9!important;
        }

        &:not(:last-child) {
          td {
            border-bottom: none!important;
          }
        }

        td {
          text-transform: capitalize;
          color: #000000;
          height: auto;
          padding: 15px 12px;
          vertical-align: top;

          &:first-child {
            font-weight: 600;
            font-size: 16px;
            min-width: 50%;

            .v-icon {
              color: #30B38C;
              margin-right: 10px;
            }
          }

          &:nth-child(2) {
            font-weight: 500;
            font-size: 14px;
            line-height: 22px;

            span {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}

</style>
