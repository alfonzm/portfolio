<template lang="pug">
  //- Thank you
  section.mt-8.flex.h-screen.relative#contact
    .m-auto.w-full
      .text-5xl.sm_text-6xl.leading-none.font-bold(data-aos='fade-up') I look forward to working with you soon. 👋
      .mt-3.text-3xl.sm_text-3xl.text-gray-500.leading-none(data-aos='fade-up')
        | I can be reached at
        |
        a.underline.gray-link(href="mailto:m.alfonz@gmail.com") m.alfonz@gmail.com

    .footer.absolute.bottom-0.w-full.text-center.pb-4.text-gray-500.text-xs
      | &copy; {{ new Date().getFullYear() }}. Made with Nuxt.js by Alfonz Montelibano.
      br.visible.md_invisible
      a.underline(href="https://github.com/alfonzm/portfolio" target="_blank") Source code
      | .

</template>

<script>
  export default {

  }
</script>

<style lang="sass">

</style>
