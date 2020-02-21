
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
      { name: 'yandex-verification', content: 'fecc6d8e9ec4c1a1' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/images/logo.png' },
    ],
    script: [
      { src: '/vendors/yandex.metrica.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'rgb(236, 54, 51)' },
  /*
  ** Global CSS
  */
  css: [
    // 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css',
    'hamburgers/dist/hamburgers.css',
    '@/assets/less/antd.less',
    '@/assets/scss/style.scss',
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
    // '@/plugins/vue2-perfect-scrollbar',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
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
