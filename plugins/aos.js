import Vue from 'vue'
import AOS from 'aos'

const aosPlugin = {
  install: () => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
    })
  }
}

Vue.use(aosPlugin)
