<template>
  <div>
    <v-app-bar app :class="{ fixed: scrolled }">
      <v-container class="pa-0 fill-height d-md-none">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <NuxtLink to="/" class="logo-holder">
          <BaseLogo class="logo mr-1 ml-5" width="35" height="35" />
          <span>{{ $store.state.title }}</span>
        </NuxtLink>
        <v-spacer></v-spacer>
        <a href="https://token.avanod.com/">
          <v-btn
            plain
            class="btn-main btn-connect responsive px-2"
            color="black"
          >
            {{ content.connect }}
          </v-btn>
        </a>
      </v-container>
      <v-container class="main-bar d-none d-md-flex">
        <div class="right">
          <NuxtLink to="/" class="logo-holder">
            <BaseLogo class="logo mr-2" width="40" height="40" />
            <span class="logo-text">{{ $store.state.title }}</span>
          </NuxtLink>
        </div>
        <div class="center">
          <template v-for="(link, index) in $store.state.menu">
            <NuxtLink v-if="!link.links && index != 0" :to="link.route" class="header-link" :key="link.title">
              {{ link.title }}
            </NuxtLink>
            <v-menu
              v-if="link.links && index != 0"
              open-on-hover
              offset-y
              nudge-left="200"
              :position-y="500"
              rounded="lg"
              transition="slide-y-transition"
              :key="link.title"
              content-class="drop-menu"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  text
                  dark
                  class="header-sub px-0"
                >
                  {{ link.title }}
                  <v-icon size="16">mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-card class="drop-card">
                <v-row class="inner">
                  <v-col cols="5" :order="index == $store.state.menu.length-1 ? 2 : 1" class="drop-side">
                    <div>
                      <h5 class="drop-title">
                        {{ index != $store.state.menu.length-1 ? link.title : link.titleSide }}
                      </h5>
                      <ul v-if="link.items" class="drop-items">
                        <li
                          v-for="(item, index) in link.items"
                          :key="index"
                        >
                          {{ item }}
                        </li>
                      </ul>
                      <ul v-if="link.linkItems" class="drop-link-items">
                        <li
                          v-for="(item, index) in link.linkItems"
                          :key="index"
                        >
                          <a :href="item.route">{{ item.title }}</a>
                        </li>
                      </ul>
                      <p v-if="link.description" class="drop-description">
                        {{ link.description }}
                      </p>
                    </div>
                    <ul v-if="index != $store.state.menu.length-1" class="drop-ex-links">
                      <li>
                        <a href="#">Plans & Pricing</a>
                      </li>
                      <li>
                        <a href="#">What we suupport</a>
                      </li>
                    </ul>
                  </v-col>
                  <v-col cols="7" :order="index == $store.state.menu.length-1 ? 1 : 2" class="drop-main">
                    <h5 v-if="index == $store.state.menu.length-1" class="drop-title pl-2">
                      {{ link.title }}
                    </h5>
                    <ul class="drop-links">
                      <li
                        v-for="(item, index) in link.links"
                        :key="index"
                      >
                        <NuxtLink :to="item.route + item.title.replace(/\s+/g, '-').toLowerCase()">
                          <em v-html="item.icon"></em>
                          <span>
                            <h6>{{ item.title }}</h6>
                            <p v-if="item.description">{{ item.description }}</p>
                          </span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </v-card>
            </v-menu>
          </template>
        </div>
        <div class="left">
          <v-menu offset-y transition="slide-y-transition" content-class="header-menu">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                class="btn-main btn-lang"
                v-bind="attrs"
                v-on="on"
              >
              {{ content.lang }}
                <em v-html="langIcon"></em>
              </v-btn>
            </template>
            <v-list nav flat class="inner">
              <v-subheader>
                select country
                <v-icon size="20">mdi-chevron-up</v-icon>
              </v-subheader>
              <v-list-item-group>
                <v-list-item v-for="(item, index) in userMenu.links" :key="index">
                  <v-list-item-content>
                    <v-list-item-title>
                      <NuxtLink :to="item.route" :aria-label="item.title">
                        <span v-html="item.icon"></span>
                        {{ item.title }}
                      </NuxtLink>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
          <a href="https://token.avanod.com/">
            <v-btn
              outlined
              depressed
              class="btn-main btn-connect ml-3"
            >
              <em v-html="walletIcon" class="mr-1"></em>
              {{ content.connect }}
            </v-btn>
          </a>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
      class="drawer"
      width="100%"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group" :color="$store.state.cPrimary">
          <div v-for="link in $store.state.menu" :key="link.title">
            <v-list-item
              v-if="!link.items"
              class="pa-0 mb-2"
            >
              <NuxtLink :to="link.route" class="d-flex py-2 pl-5 list-link">
                <!-- <v-list-item-icon class="ml-5">
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon> -->
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-menu
              v-else
              class="mb-2"
              rounded="lg"
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list-item class="pa-0 mb-2" v-bind="attrs" v-on="on">
                  <div class="d-flex py-2 pl-5 pr-2 list-link">
                    <!-- <v-list-item-icon class="ml-5">
                      <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon> -->
                    <v-list-item-title class="d-flex justify-space-between">
                      {{ link.title }}
                      <v-icon class="mr-1">mdi-chevron-down</v-icon>
                    </v-list-item-title>
                  </div>
                </v-list-item>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in link.items"
                  :key="index"
                  :to="item.route"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    walletIcon: require('../../static/img/icons/wallet.svg?raw'),
    langIcon: require('../../static/img/icons/lang.svg?raw'),
    userMenu: {
      status: false,
      links: [
        {
          title: 'United kingdom',
          icon: require('../../static/img/flags/uk.svg?raw'),
          route: '#',
        },
        {
          title: 'United Arab Emirates',
          icon: require('../../static/img/flags/uae.svg?raw'),
          route: '#',
        },
      ],
    },
    content: {
      lang: "en",
      connect: "Connect",
    },
    scrolled: false,
    drawer: false,
    group: null,
  }),
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      if (process.client) {
        if (document.documentElement.scrollTop > 0) {
          this.scrolled = true;
        } else {
          this.scrolled = false;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

header {
  background-color: transparent !important;
  padding-top: 16px !important;
  padding-bottom: 20px !important;
  box-shadow: none !important;
  transition: 0.5s !important;
  transition-delay: 0s !important;
  height: inherit !important;
  z-index: 999!important;

  .logo-holder {
    display: flex;
    align-items: center;
  }

  .v-btn--icon.v-size--default .v-icon,
  .v-btn--fab.v-size--default .v-icon {
    color: $c2 !important;
  }

  .main-bar {
    display: flex;
    flex-direction: row;
  }

  .left,
  .right,
  .center {
    display: flex;
    align-items: center;
    transition: 0.5s;
  }

  .right {
    flex: 0.5;

    @include res(md) {
      flex: 0.55;
    }

    .logo {
      transition: 0.5s;
    }

    .logo-text {
      color: $cb;
      font-size: 18px;
      transition: 0.5s;
      font-weight: 600;

      @include res(md) {
        font-size: 15px;
      }
    }
  }

  .center {
    flex: 1.5;
    justify-content: space-evenly;
  }

  .left {
    flex: 0.5;
    justify-content: flex-end;

    .v-btn {
      transition: 0.5s !important;
      font-size: 16px !important;
      min-height: 46px!important;
      color: #023047!important;
	    background: transparent!important;

      &.btn-connect {
        min-width: 116px!important;
        border: 1px solid #023047!important;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25)!important;

        &.responsive {
          min-width: auto!important;
          border: none!important;
          box-shadow: none!important;

          .v-btn__content {
            opacity: 1!important;
          }
        }
      }
    }
  }

  .mdi-menu {
    color: $cb !important;
  }

  .theme--dark.v-btn:hover::before {
    opacity: 0 !important;
  }

  .header-link,
  .header-sub {
    position: relative;
    text-transform: initial !important;
    color: $cb !important;
    font-family: $f!important;
    transition: 0.5s;
    font-weight: 400;
    font-size: 16px!important;
    line-height: 60px;
    height: 60px!important;

    @include res(md) {
      font-size: 13px !important;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 0;
      transform: translate(-50%, -50%);
      background: #6d1f7f!important;
      transition: 0.2s;
    }

    &:before {
      left: calc(58% - 20px);
      bottom: 3px;
      height: 0;
      border-radius: 50%;
    }

    &:after {
      left: 58%;
      bottom: 5px;
      height: 3px;
      border-radius: 50px;
    }

    &:hover {
      background: transparent !important;
    }

    &.nuxt-link-exact-active {
      font-weight: 700;

      &:before {
        width: 5px;
        height: 5px;
      }

      &:after {
        width: 30px !important;
      }
    }
  }

  &.fixed {
    background: rgba($cw, 0.9) !important;
    backdrop-filter: saturate(300%) blur(4px);
    z-index: 999 !important;
    transition: 0.5s !important;
    transition-delay: 0s !important;
    padding: 5px 0 !important;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 0px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1) !important;

    .header-link,
    .header-sub {
      color: $c2 !important;
    }

    .right {
      .logo-text {
        color: $c2;
      }
    }
  }
}

.user-menu-area {
  position: relative;
}

.header-menu {
  margin-top: 10px;
  background: $cw;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;

  .inner {
    min-width: 270px;
    border-radius: 8px!important;
    padding-top: 0;

    .v-subheader {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      text-transform: capitalize;
      color: #7A808B;
      display: flex;
      justify-content: space-between;

      .v-icon {
        cursor: pointer;
      }
    }

    .v-list-item {
      padding: 0!important;
      border-radius: 8px!important;
      min-height: 40px!important;
      margin-bottom: 0!important;

      &:hover {
        background: #E4F8FF;
      }

      &:before {
        border-radius: 8px;
      }

      .v-list-item__content {
        padding: 0!important;

        .v-list-item__title {
          min-height: 30px!important;
          line-height: 3.3!important;
          font-size: 14px!important;

          @include res(md) {
            font-size: 13px!important;
          }

          a {
            width: 100%;
            display: block;
            border-radius: 8px!important;
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            text-transform: capitalize;
            color: #5B626E;

            span {
              line-height: 0;
              margin: 0 10px 0 15px;
            }
          }
        }
      }
    }
  }
}

.v-list-item__title {
  font-size: 14px !important;
}

.drawer {
  position: fixed;
  padding-top: 70px;
  background: rgba(255, 255, 255, 0.95) none repeat scroll 0% 0% !important;
  z-index: 99;

  .v-btn__content {
    justify-content: left;
  }

  .list-link,
  .drawer-sub {
    width: 100%;
  }

  .v-list {
    padding: 12px !important;
  }

  .v-list--nav .v-list-item,
  .v-list--nav .v-list-item {
    &:before {
      border-radius: 8px !important;
    }
  }

  .v-list-item__title {
    font-size: 24px!important;
    line-height: 35px!important;
    color: #5B626E;
  }
}


.drop-menu {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06)!important;

  .drop-card {
    display: flex;
    width: 520px;
    height: 410px;
    background: $cw!important;
    border-radius: 12px!important;
    
    .inner {
      margin: 0!important;

      .drop-main {
        padding: 20px 10px 10px 10px;
      }

      .drop-side {
        padding: 20px 20px 10px 20px;
        background: #f9f9f9;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .drop-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 15px;
      }

      .drop-items {
        li {
          position: relative;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          margin-bottom: 10px;
          padding-left: 20px;

          &:before {
            content: "\F012C";
            font: normal normal normal 24px/1 "Material Design Icons";
            font-size: 8px;
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translate(-50%, -50%);
            background: #e1f5fd;
            color: #545a95;
            border-radius: 50%;
            padding: 2px;
          }
        }
      }

      .drop-link-items {
        margin-top: 25px;

        li {
          position: relative;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          margin-bottom: 20px;

          a {
            position: relative;
            display: inline-block;

            &:before {
              content: "\F005C";
              font: normal normal normal 24px/1 "Material Design Icons";
              font-size: 13px;
              position: absolute;
              top: 50%;
              right: -25px;
              transform: translate(-50%, -50%);
              color: #8C8C8C;
            }
          }
        }
      }

      .drop-description {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }

      .drop-ex-links {
        li {
          font-weight: 600;
          font-size: 12px;
          line-height: 14px;
          color: #412971;
          margin-bottom: 10px;

          a {
            position: relative;
            display: inline-block;

            &:before {
              content: "\F005C";
              font: normal normal normal 24px/1 "Material Design Icons";
              font-size: 13px;
              position: absolute;
              top: 50%;
              right: -25px;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      .drop-links {
        li {
          position: relative;
          font-weight: 600;
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 3px;

          &:before {
            content: "\F0142";
            font: normal normal normal 24px/1 "Material Design Icons";
            font-size: 12px;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(-50%, -50%);
            color: #616771;
          }

          a {
            display: flex;
            padding: 8px;
            border-radius: 8px;

            &:hover {
              background: #f6f6f6;
            }

            em {
              display: flex!important;
              align-items: center!important;
              justify-content: center!important;
              width: 35px;
              height: 35px;
              background: #E4D9EA;
              border-radius: 5px;
              margin-right: 10px;
            }

            span {
              display: flex;
              flex-direction: column;
              justify-content: center;
              
              h6 {
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                margin-bottom: 3px;
              }

              p {
                font-weight: 400;
                font-size: 10px;
                line-height: 15px;
                color: #5B5B5B;
              }
            }
          }
        }
      }
    }
  }
}

</style>
