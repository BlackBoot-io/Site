export default {
  target: 'server',
  head: {
    titleTemplate: 'Avanod',
    title: 'Avanod',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon/favicon.ico' }
    ]
  },
  css: [
    '@/assets/scss/style-ltr.scss',
    '@mdi/font/css/materialdesignicons.css'
  ],
  plugins: [
    '@/plugins/axios',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/base/',
        prefix: 'Base'
      },
    ]
  },
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
    '@nuxtjs/moment',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  build: {
  },
  vuetify: {
    defaultAssets: false
  },
  axios: {
    withCredentials: true,
    baseURL: process.env.baseUrl,
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      // 'Vary': 'Origin'
    }
  },
  router: {
    scrollBehavior: async function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 1000);
          })
        );
      };
      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop-80, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop-80);
        }
      }
      return { x: 0, y: 0 };
    }
  },
}
