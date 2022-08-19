<template>
  <v-container class="steps">
    <v-row>
      <v-col v-for="(step, index) in steps" :key="index" cols="12" md="4" class="s-box">
        <div class="s-num">{{ `0${index+1}` }}</div>
        {{ step.title }}
        <br>
        <span>
          {{ step.description }}
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      steps: [
        {
          title: 'Register & Sign in',
          description: 'Get started for free, verify your account and start the jurney.Registering for more services involves payment.'
        },
        {
          title: 'Connect your wallet',
          description: 'WalletConnect is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking.'
        },
        {
          title: 'Buy Token',
          description: 'Soulbound Tokens are a type of cryptocurrency that represents an asset or specific use and reside on their own blockchain. Tokens can be used for investment purposes, to store value, or any investment in our platform.'
        },
      ]
    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.steps {
  padding-top: 80px;
  padding-bottom: 40px;

  @include res($sm) {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .s-box {
    position: relative;
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    padding: 12px 25px 12px 50px;
    margin-bottom: 25px;

    @include res($sm) {
      font-size: 16px;
      line-height: 27px;
      padding-left: 70px;
      margin-bottom: 10px;
    }

    .s-num {
      position: absolute;
      top: 10px;
      left: 0;
      font-weight: 600;
      font-size: 18px;
      line-height: 52px;
      text-align: center;
      color: #E1E1E1;

      @include res($sm) {
        left: 15px;
        min-width: 30px;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: -15px;
        transform: translate(0, -50%);
        width: 1px;
        height: 90%;
        background: #E1E1E1;

        @include res($sm) {
          right: -10px;
        }
      }
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #6E757C;
      margin-top: 10px;
      display: block;

      @include res($sm) {
        font-size: 15px;
      }
    }
  }
}

</style>
