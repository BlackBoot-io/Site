<template>
  <v-footer>
    <v-container fluid class="main">
      <v-container class="top">
        <div class="footer-top">
          <div>
            <h2 class="footer-head">Ready to get started?</h2>
            <p class="footer-des">Flexible. Customizable. Future-Proof. <br> Build it fast. Scale anytime.</p>
            <a href="#" aria-label="Explore for free" class="btn-cta">Explore for free</a>
            <a href="#" aria-label="Talk to us" class="btn-transparent">Talk to us</a>
          </div>
          <div class="logos">
            <a href="#" aria-label="built-on-eth">
              <img src="../../static/img/built-on-eth.svg" width="72" height="72" alt="Built On Eth" class="mt-3"/>
            </a>
            <a href="#" aria-label="gdpr">
              <img src="../../static/img/gdpr.svg" width="91" height="91" alt="gdpr">
            </a>
          </div>
        </div>
        <v-row>
          <v-col cols="6" sm="6" md="12" lg="3">
            <h6>{{ content.menu.first.title }}</h6>
            <ul>
              <li v-for="link in content.menu.first.items" :key="link.name">
                <NuxtLink :to="link.route" :target="link.targetBlank && '_blank'">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="6" sm="6" md="4" lg="3">
            <h6>{{ content.menu.first.title }}</h6>
            <ul>
              <li v-for="link in content.menu.second.items" :key="link.name">
                <NuxtLink :to="link.route" :target="link.targetBlank && '_blank'">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="6" sm="6" md="4" lg="3">
            <h6>{{ content.menu.third.title }}</h6>
            <ul>
              <li v-for="link in content.menu.third.items" :key="link.name">
                <NuxtLink :to="link.route">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="6" sm="6" md="4" lg="3">
            <h6>{{ content.menu.fourth.title }}</h6>
            <ul>
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
            <p>{{ `©${new Date().getFullYear()} ${$store.state.title}. ${content.copyright}` }}</p>
          </v-col>
          <v-col cols="12" sm="12" md="5" class="social">
            <ul>
              <li v-for="(item, index) in content.social.items" :key="index">
                <a :href="item.link" target="_blank" aria-label="social" class="social-icons">
                  <em v-html="item.icon"></em>
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
      builtOnEth: require('../../static/img/built-on-eth.svg'),
      copyrightIcon: require('../../static/img/icons/copyright.svg?raw'),
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
          title: "Use Cases",
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
        third: {
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
            }
          ],
        },
        fourth: {
          title: "Legal",
          items: [
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
        }
      },
      social: {
        items: [
          // {
          //   icon: require('../../static/img/icons/instagram.svg?raw'),
          //   link: "#",
          // },
          // {
          //   icon: require('../../static/img/icons/twitter.svg?raw'),
          //   link: "#",
          // },
          // {
          //   icon: require('../../static/img/icons/telegram.svg?raw'),
          //   link: "#",
          // },
          {
            icon: require('../../static/img/icons/github.svg?raw'),
            link: "https://github.com/BlackBoot-io",
          },
          {
            icon: require('../../static/img/icons/discord.svg?raw'),
            link: "https://discord.gg/ncrq7CXZ",
          },
        ],
      },
      copyright: "All rights reserved",
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

  .footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    @include res($sm) {
      display: block;
      margin-bottom: 35px;
    }

    div {
      @include res($sm) {
        width: 100% !important;
      }
    }

    .logos {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      @include res($md) {
        text-align: center;
        justify-content: space-around;
      }

      @include res($sm) {
        margin-top: 50px;
        justify-content: space-around;
      }
    }

    .footer-head {
      font-weight: 700;
      font-size: 38px;
      line-height: 110%;
      color: #fff;
      margin: 0;
      padding: 0;

      @include res($sm) {
        font-size: 28px;
      }
    }

    .footer-des {
      font-size: 24px;
      line-height: 150% !important;
      color: #fafafa;
      margin-top: 20px !important;
      margin-bottom: 50px !important;
      max-width: 400px;

      @include res($sm) {
        font-size: 18px;
      }
    }

    .btn-cta {
      background: $c1;
      border: 1px solid $c1;
      color: $cw !important;
      border-radius: 10px;
      padding: 16px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;

      @include res($sm) {
        font-size: 14px;
      }

      &:hover {
        background: lighten($c1, 10%);
      }
    }

    .btn-transparent {
      background: transparent;
      border: 1px solid $cw;
      color: $cw !important;
      margin-left: 16px;
      padding: 16px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;

      @include res($sm) {
        margin-left: 8px;
        font-size: 14px;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.7);
        color: #020d1c !important;
      }
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50px;
    left: 50px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 1;
  }

  &:before {
    width: 247px;
    height: 247px;
    border: 15px solid rgba(245, 245, 247, 0.14);
  }

  &:after {
    width: 356px;
    height: 356px;
    border: 10px solid rgba(245, 245, 247, 0.09);
  }

  .main {
    position: relative;
    background: #020d1c !important;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50px;
      left: 50px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: 1;
    }

    &:before {
      width: 468px;
      height: 468px;
      border: 7px solid rgba(245, 245, 247, 0.06);
    }

    &:after {
      width: 587px;
      height: 587px;
      border: 5px solid rgba(245, 245, 247, 0.03);
    }

    .top {
      padding: 40px 15px 25px 15px;
      position: relative;
      z-index: 9;

      @include res($md) {
        padding: 25px 15px;
      }

      p {
        line-height: 30px;

        b {
          font-weight: 900;
        }
      }

      h6 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: $cw;
        margin-bottom: 15px;
        min-height: 40px;
        display: flex;
        align-items: center;

        @include res($sm) {
          font-size: 17px;
          margin-bottom: 10px;
        }
      }

      ul {
        li {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          color: $cw;
          margin-bottom: 15px;

          @include res($sm) {
            font-size: 14px;
            margin-bottom: 10px;
          }

          i {
            color: $cw;
            margin-right: 5px;
          }

          a {
            color: #a4a9b5 !important;
            font-size: 14px;

            &:hover {
              color: #fff !important;
            }

            &.not-link {
              cursor: default;
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
        background: #a4a9b5;
      }

      p {
        font-weight: 400;
        font-size: 15px;
        line-height: 21px;
        color: $cw;
      }

      .social {
        text-align: right;

        @include res($sm) {
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

              @include res($xs) {
                margin: 0 10px;
              }

              i {
                font-size: 25px;
                color: $cw;
              }
            }
          }
        }
      }

      .copyright {
        display: flex;
        align-items: center;

        @include res($sm) {
          justify-content: center;
          align-items: center;
        }

        p {
          @include res($sm) {
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>
