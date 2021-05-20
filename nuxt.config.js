
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Мир данных ИТ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Центр разработки "МИР ДАННЫХ ИТ"' },
      { name: 'yandex-verification', content: 'c195aef846dfb72a' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/images/logo.png' },
    ],
    script: [],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#52c41a', failedColor: 'rgb(236, 54, 51)' },
  /*
  ** Global CSS
  */
  css: [
    // 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css',
    'hamburgers/dist/hamburgers.css',
    '@/assets/less/antd.less',
    '@/assets/scss/style.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/ant-design',
    '@/filters/phone',
    '@/plugins/vue2-filters',
    '@/plugins/vuelidate',
    '@/plugins/vue-scrollto',
    '@/plugins/vue-the-mask',
    '@/plugins/vue-lazyload',
    '@/plugins/vue-slick-carousel',
    '@/plugins/vue-fontawesome',
    // { src: '@/plugins/vue-carousel', ssr: false },
    // '@/plugins/vue2-perfect-scrollbar',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '65666029',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
    [
      'nuxt-facebook-pixel-module',
      {
        track: 'PageView',
        pixelId: '281457353291107',
        disabled: false
      }
    ],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  sitemap: {
    hostname: 'https://mir-dit.ru/',
  },
  robots: {
    Host: 'https://mir-dit.ru/',
    Disallow: ['/_nuxt', '/fonts', '/images', '/docs', '/'],
    Sitemap: 'https://mir-dit.ru/sitemap.xml'
  },
  generate: {
    routes: [
      '/articles/programma-obucheniya-it-specialista',
      '/articles/vidy-it-autosrsinga',
      '/articles/voprosy-administrirovaniya-baz-dannyh',
      '/articles/metod-podbora-vakansij-it-specialista',
      '/articles/crisis-management-it',
      '/articles/agile-transformation',
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.client ? window.location.host : '',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^ant-design-vue/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
