<template>
  <div>
    <v-app-bar app :class="{ fixed: scrolled }">
      <v-container class="pa-0 fill-height d-md-none">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <NuxtLink to="/" class="logo-holder">
          <BaseLogo class="logo mr-1 ml-5" width="20" height="35" />
          <span>{{ $store.state.title }}</span>
        </NuxtLink>
        <v-spacer></v-spacer>
        <a href="https://dashboard.avanod.com/">
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
            <BaseLogo class="logo mr-2" width="25" height="40" />
            <span class="logo-text">{{ $store.state.title }}</span>
          </NuxtLink>
        </div>
        <div class="center">
          <div v-for="(link, index) in $store.state.menu" :key="link.name">
            <NuxtLink v-if="!link.items" :to="link.route" class="header-link">
              {{ link.name }}
            </NuxtLink>
            <v-menu
              v-if="link.items && index != 0"
              open-on-hover
              rounded="lg"
              transition="slide-y-transition"
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
                  {{ link.name }}
                  <v-icon class="mr-1">mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in link.items"
                  :key="index"
                  :to="item.route"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="left">
          <v-menu offset-y content-class="header-menu" transition="fade-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                class="btn-main btn-lang"
                v-bind="attrs"
                v-on="on"
              >
              {{ content.lang }}
                <v-icon class="ml-1">mdi-web</v-icon>
              </v-btn>
            </template>
            <v-list nav flat class="inner">
              <v-subheader>
                select country
                <v-icon size="20">mdi-chevron-up</v-icon>
              </v-subheader>
              <v-list-item-group>
                <v-list-item v-for="(item, index) in userMenu.items" :key="index">
                  <v-list-item-content>
                    <v-list-item-title>
                      <NuxtLink :to="item.route" :aria-label="item.text">
                        <span v-html="item.icon"></span>
                        {{ item.text }}
                      </NuxtLink>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
          <a href="https://dashboard.avanod.com/">
            <v-btn
              outlined
              depressed
              class="btn-main btn-connect ml-3"
            >
              <v-icon class="mr-1">mdi-wallet-outline</v-icon>
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
          <div v-for="link in $store.state.menu" :key="link.name">
            <v-list-item
              v-if="!link.items"
              class="pa-0 mb-2"
            >
              <NuxtLink :to="link.route" class="d-flex py-2 pl-5 list-link">
                <!-- <v-list-item-icon class="ml-5">
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon> -->
                <v-list-item-title>{{ link.name }}</v-list-item-title>
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
                      {{ link.name }}
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
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
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
     userMenu: {
      status: false,
      items: [
        {
          text: 'United kingdom',
          icon: require('../../static/img/flags/uk.svg?raw'),
          route: '#',
        },
        {
          text: 'United Arab Emirates',
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
    flex: 0.8;

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
    flex: 1.3;
    justify-content: space-evenly;

    @include res(md) {
      flex: 1.5;
    }
  }

  .left {
    flex: 0.8;
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
    font-size: 16px;
    line-height: 19px;

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
      left: calc(55% - 20px);
      bottom: -12px;
      height: 0;
      border-radius: 50%;
    }

    &:after {
      left: 55%;
      bottom: -10px;
      height: 3px;
      border-radius: 30px;
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
    background: rgba($cw, 0.95) !important;
    z-index: 999 !important;
    transition: 0.5s !important;
    transition-delay: 0s !important;
    padding: 5px 0 !important;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;

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

</style>
