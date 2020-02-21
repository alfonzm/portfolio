<template lang="pug">
  section.flex.h-screen
    //- img.profile-image(:src="require(`@/assets/images/alfonz.jpg`)")
    .my-auto.z-10.w-full
      h1.text-4xl.sm_text-6xl.leading-none.font-bold.-mt-8.sm_mt-0(data-aos='fade-up')
        | Hi. I'm
        |
        span.text-teal-400 Alfonz Montelibano
        | —a software engineer who loves clean code and beautiful design.

      //- nav links
      ul.flex.mt-6
        li(v-for="(link, i) in data.links" data-aos='fade-up' :data-aos-delay="String((i+1) * 200)")
          a.big-link.animated-link.capitalize.text-xl.sm_text-3xl.mr-4.sm_mr-12(href='#' v-scroll-to="`#${link}`") {{ link }}

</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="sass">

</style>
