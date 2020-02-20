
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
        hid: 'og:title',
        name: 'og:title',
        content: 'Alfonz Montelibano\'s Portfolio',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'I\'m Alfonz Montelibano—a software engineer who loves clean code and beautiful design. This is my web development portfolio website.',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/usc-talk-2.jpg',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://alfonzm.com',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
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
    '@/assets/css/main.css',
    '@/assets/css/aos.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-scrollto.js',
    {
      src: '~/plugins/aos',
      mode: 'client',
    }
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
  },
  purgeCSS: {
    whitelist: ['aos-init', 'aos-animate', 'data-aos-delay', 'data-aos-duration']
  },
}
