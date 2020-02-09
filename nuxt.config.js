
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alfonz Montelibano — Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I\'m Alfonz Montelibano—a software engineer who loves clean code and beautiful design. This is my web development portfolio website.' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/usc-talk-2.jpg',
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // {
    //   src: '~/plugins/aos.js',
    //   mode: 'client'
    // },
    '~/plugins/vue-scrollto.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'vue-scrollto/nuxt',
      {
        duration: 1500,
        easing: 'ease-in-out',
      }
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  }
}
