<template>
  <v-footer>
    <v-container fluid class="main">
      <v-container class="top">
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="3">
            <h5 class="d-flex align-center"><BaseLogo class="logo mr-2" width="25" height="40" /> {{ $store.state.title }}</h5>
            <ul class="footer-default-list">
              <li v-for="(item, index) in content.contactInfo" :key="index">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.text }}
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="2">
            <h5>{{ content.menu.first.title }}</h5>
            <ul class="footer-default-list">
              <li v-for="link in content.menu.first.items" :key="link.name">
                <NuxtLink
                  :to="link.route"
                  :target="link.targetBlank && '_blank'"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="2">
            <h5>{{ content.menu.second.title }}</h5>
            <ul class="footer-default-list">
              <li v-for="link in content.menu.second.items" :key="link.name">
                <NuxtLink :to="link.route">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="3">
            <h5>{{ content.menu.third.title }}</h5>
            <ul class="footer-default-list">
              <li v-for="link in content.menu.third.items" :key="link.name">
                <NuxtLink :to="link.route">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="2">
            <h5>{{ content.menu.fourth.title }}</h5>
            <ul class="footer-default-list">
              <li v-for="link in content.menu.fourth.items" :key="link.name">
                <NuxtLink :to="link.route">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="bottom">
        <v-row>
          <v-col cols="12" sm="12" md="7" class="copyright">
            <p>{{ content.copyright }}</p>
          </v-col>
          <v-col cols="12" sm="12" md="5" class="social">
            <ul>
              <li v-for="(item, index) in content.social.items" :key="index">
                <a :href="item.link" target="_blank">
                  <v-icon>{{ item.icon }}</v-icon>
                </a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    content: {
      contactInfo: [
        {
          text: "Somebody, PO Box 12345, Dubai, UAE",
          icon: "mdi-map-marker-outline",
        },
        {
          text: "+971-23456789",
          icon: "mdi-phone-outline",
        },
        {
          text: "BlackBoot@gmail.com",
          icon: "mdi-email-outline",
        },
      ],
      menu: {
        first: {
          title: "Products",
          items: [
            {
              name: "Event Subscription",
              route: "#",
              targetBlank: false,
              icon: "",
            },
            {
              name: "Buy NFTs",
              route: "#",
              targetBlank: false,
              icon: "",
            },
            {
              name: "Buy SoulBound Tokens",
              route: "#",
              targetBlank: false,
              icon: "",
            },
          ],
        },
        second: {
          title: "Networks",
          items: [
            {
              name: "Bitcoin",
              route: "#",
              icon: "",
            },
            {
              name: "Etherium",
              route: "#",
              icon: "",
            },
            {
              name: "Solana",
              route: "#",
              icon: "",
            },
            {
              name: "BscScan",
              route: "#",
              icon: "",
            },
          ],
        },
        third: {
          title: " Use Cases",
          items: [
            {
              name: "Certificate Publishing",
              route: "#",
              icon: "",
            },
            {
              name: "For Eployees",
              route: "#",
              icon: "",
            },
            {
              name: "For Business Owners",
              route: "#",
              icon: "",
            },
            {
              name: "For Event Organizer",
              route: "#",
              icon: "",
            },
          ],
        },
        fourth: {
          title: "About",
          items: [
            {
              name: "About us",
              route: "#",
              icon: "",
            },
            {
              name: "Contact us",
              route: "#",
              icon: "",
            },
            {
              name: "Privacy policy",
              route: "#",
              icon: "",
            },
            {
              name: "Terms of services",
              route: "#",
              icon: "",
            },
          ],
        },
      },
      social: {
        items: [
          {
            icon: "mdi-instagram",
            link: "#",
          },
          {
            icon: "mdi-twitter",
            link: "#",
          },
          {
            icon: "mdi-telegram",
            link: "#",
          },
          {
            icon: "mdi-github",
            link: "#",
          },
          {
            icon: "mdi-discord",
            link: "#",
          },
        ],
      },
      copyright: "©2022 BlackBoot. All rights reserved",
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

footer {
  position: relative;
  padding: 0;
  background: transparent !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @include res($sm) {
    margin-top: -145px;
  }

  @include res(510px) {
    margin-top: -175px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50px;
    left: 50px;
    transform: translate(-50%, -50%);
    width: 392px;
    height: 392px;
    border-radius: 50%;
    border: 28.3908px solid rgba(245, 245, 247, 0.7);

  }

  &:before {
    width: 247px;
    height: 247px;
  }

  &:after {
    width: 392px;
    height: 392px;
  }

  .main {
    background: #FAFAFB!important;

    .top {
      padding: 60px 15px 45px 15px;
      position: relative;
      z-index: 9;

      @include res(md) {
        padding: 25px 15px;
        text-align: center;
      }

      p {
        line-height: 30px;

        b {
          font-weight: 900;
        }
      }

      h5 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        margin-bottom: 15px;
        min-height: 40px;
        display: flex;
        align-items: center;

        @include res(sm) {
          font-size: 20px;
          margin-bottom: 10px;
        }
      }

      ul {
        li {
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
          color: #424242;
          margin-bottom: 15px;
          
          i {
            color: #292D32;
          }

          a {

            &:hover {
              color: $cb !important;
            }
          }
        }
      }
    }

    .bottom {
      position: relative;
      padding-top: 24px;

      &:before {
        content: "";
        position: absolute;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 1px;
        background: #D1D1D166;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #5B626E;
      }

      .social {
        text-align: right;

        @include res(sm) {
          padding-top: 0;
          text-align: center;
        }

        ul {
          padding-right: 0;

          li {
            display: inline-block;

            a {
              position: relative;
              display: inline-block;
              margin-left: 10px;

              @include res(xs) {
                margin: 0 10px;
              }

              i {
                font-size: 25px;
                color: #424242;
              }
            }
          }
        }
      }

      .copyright {
        display: flex;
        align-items: center;

        @include res(sm) {
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
