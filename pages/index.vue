<template lang="pug">
  .font-sans.text-gray-900.cursor-default.parallax-wrapper(@scroll='refreshAos')
    .container.mx-auto.px-5.lg_px-32
      hero(:data='data')
      projects(:data='data')
      talks(:data='data')
      about(:data='data')
      contact(:data='data')
</template>

<script>
import AOS from 'aos'

import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Talks from '@/components/Talks'
import About from '@/components/About'
import Contact from '@/components/Contact'

import data from '@/static/data'

export default {
  components: {
    Hero,
    Projects,
    Talks,
    About,
    Contact,
  },
  asyncData() {
    return {
      data,
    }
  },
  methods: {
    refreshAos() {
      AOS.refresh()
    }
  }
}
</script>

<style lang="sass">

$teal: #4fd1c5

html
  background-color: $teal

body
  background-color: white
  // font-family: 'Karla'

.game-image-wrapper
  @media (min-width: 1024px)
    height: 500px

a.underlined, a.animated-link
  position: relative

  &:after
    background: none repeat scroll 0 0 transparent
    bottom: -5px
    content: ""
    display: block
    height: 3px
    left: 0
    position: absolute
    background: #222222
    width: 100%

  &.gray-link:after
    background: #9e9e9e

a.animated-link
  &:after
    width: 0
    transition: width 0.4s cubic-bezier(.61,.01,.2,1) 0s, left 0.4s cubic-bezier(.61,.01,.2,1) 0s

  &.small-link:after
    background: $teal
    height: 2px

  &:hover:after
    width: 100%

// .parallax-wrapper
//   height: 100vh
//   overflow-y: scroll
//   perspective: 3px

img.profile-image
  position: absolute
  z-index: 0
  opacity: 0.4
  top: 50%
  transform: translateY(-50%) translateZ(-1px) scale(1.2)
  right: 0
  width: 500px

.p-base
  perspective: 0px
  height: 100vh
  overflow-x: hidden
  overflow-y: auto

</style>
