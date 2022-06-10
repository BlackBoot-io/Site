<template>
  <v-container fluid class="spotlight">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="s-head">
            We Enable You <span>Proof Yourself</span><br>and <span>Your Experiences!</span>
          </h1>
          <p class="s-text">
            Black boot the first provider to able you proof your experiences through Soulbound Tokens and NFTs !
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.spotlight {
  display: flex;
  align-items: center;
  height: 80vh;
  background: #8de0f8;
  background: linear-gradient(to bottom,#f1fafd 0%, $cw 100%);

  .s-head {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;
    color: #424242;
    margin-bottom: 20px;

    span {
      position: relative;
      z-index: 5;
      font-family: $f-bl-en;

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 45%;
        left: 0;
        background: linear-gradient(to right, #FFB55F 0%, #FFE183 50%, #FFDA7B 98%, #FFFFFF 100%);
        transition: 0.2s;
        width: 100%;
        height: 30%;
      }
    }
  }

  .s-text {
    font-style: normal;
    font-size: 18px;
    line-height: 35px;
    color: #000000;
    width: 532px;
  }
}

</style>
