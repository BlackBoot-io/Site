export default {
  target: 'server',
  head: {
    titleTemplate: 'Black Boot',
    title: 'Black Boot',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/scss/style-ltr.scss'
  ],
  plugins: [
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
  ],
  modules: [
  ],
  build: {
  }
}
