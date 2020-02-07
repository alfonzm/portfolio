import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const aosPlugin = {
  install: () => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }
}

if (process.client) {
  Vue.use(aosPlugin)
}
