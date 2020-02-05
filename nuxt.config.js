
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'css/vendors.css' },
      // { rel: 'stylesheet', type: 'text/css', href: 'css/bootstrap.min.css' },
      // { rel: 'stylesheet', type: 'text/css', href: 'css/common.css' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'rgb(236, 54, 51)' },
  /*
  ** Global CSS
  */
  css: [
    // 'ant-design-vue/dist/antd.css',
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
  axios: {},
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
