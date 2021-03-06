/**
 * @desc nuxt 配置文件
 * @Port 端口配置 env.PORT
 * */
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'beike.io',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css',
    {
      src: '~assets/scss/main.scss', lang: 'scss'
    },
    {
      src: '~assets/scss/common.scss', lang: 'scss'// 指定scss 文件而非sass，然而使用scss产生大量的map无效字符，后期还是需要引用scss
    },
    {
      src: '~assets/scss/iViewFix.scss', lang: 'scss'// 修复iView缺陷
    }],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, { isClient, isServer }) {
      if (isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:4000',
    HOST: '127.0.0.1',
    PORT: '4000'
  },
  plugins: ['~plugins/axios', '~plugins/iview', '~plugins/socket'],
  // src: '~plugins/socket', ssr: false}
  // modules: ['bootstrap-vue/nuxt'],暂时不调用bootstrap
  // 路由跳转调用中间鉴权文件
  router: {
    middleware: ['auth']
  }
}
